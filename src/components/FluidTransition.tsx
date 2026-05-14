"use client";

/**
 * Liquid distortion page transition — content only.
 *
 * Architecture:
 *   FluidTransitionProvider  — manages state, SVG filter, router timing
 *   FluidContentWrapper      — wraps page content; receives the filter via context
 *                              and animates it directly via RAF (no React re-renders
 *                              in the hot path)
 *
 * The SVG feDisplacementMap is applied as a CSS `filter` on the content wrapper,
 * so only the page body warps. The background, FloatingNav, BottomBar, StarField,
 * and CursorGlow are all outside the wrapper and completely unaffected.
 *
 * Timing:
 *   0 ms   — distortion ramps up (scale 0 → peak)
 *   680 ms — route swap fires (content is maximally distorted → swap masked)
 *   750 ms — distortion ramps back down (scale peak → 0)
 *   1400 ms — filter removed, transition complete
 */

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type RefObject,
} from "react";
import { useRouter } from "next/navigation";

// ─── Types ───────────────────────────────────────────────────────────────────

type Phase = "idle" | "covering" | "uncovering";

interface FluidCtx {
  navigate: (href: string) => void;
  phase:    Phase;
  turbRef:  RefObject<SVGFETurbulenceElement | null>;
  dispRef:  RefObject<SVGFEDisplacementMapElement | null>;
}

// ─── Context ─────────────────────────────────────────────────────────────────

const FluidTransitionContext = createContext<FluidCtx>({
  navigate: () => {},
  phase:    "idle",
  turbRef:  { current: null },
  dispRef:  { current: null },
});

export function usePageTransition() {
  return useContext(FluidTransitionContext).navigate;
}

// ─── Easing ──────────────────────────────────────────────────────────────────

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
const easeInCubic  = (t: number) => t * t * t;

// ─── Provider ────────────────────────────────────────────────────────────────

export function FluidTransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router  = useRouter();
  const [phase, setPhase] = useState<Phase>("idle");
  const turbRef = useRef<SVGFETurbulenceElement>(null);
  const dispRef = useRef<SVGFEDisplacementMapElement>(null);
  const inFlight = useRef(false);

  const navigate = useCallback(
    (href: string) => {
      if (inFlight.current) return;
      inFlight.current = true;

      setPhase("covering");

      setTimeout(() => router.push(href), 680);
      setTimeout(() => setPhase("uncovering"), 750);
      setTimeout(() => {
        setPhase("idle");
        inFlight.current = false;
      }, 1400);
    },
    [router]
  );

  return (
    <FluidTransitionContext.Provider value={{ navigate, phase, turbRef, dispRef }}>
      {/* SVG filter — always in DOM, zero visual footprint */}
      <svg
        aria-hidden="true"
        style={{ position: "fixed", width: 0, height: 0, overflow: "hidden" }}
      >
        <defs>
          <filter
            id="liquid-distort"
            x="-30%" y="-30%"
            width="160%" height="160%"
            colorInterpolationFilters="sRGB"
          >
            {/* Perlin noise — baseFrequency animated each frame for flowing water feel */}
            <feTurbulence
              ref={turbRef}
              type="turbulence"
              baseFrequency="0.012 0.009"
              numOctaves="3"
              seed="7"
              result="noise"
            />
            {/* Displace the element's own pixels by the noise map */}
            <feDisplacementMap
              ref={dispRef}
              in="SourceGraphic"
              in2="noise"
              scale="0"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      {children}
    </FluidTransitionContext.Provider>
  );
}

// ─── Content wrapper ─────────────────────────────────────────────────────────
// Place this around <Providers>{children}</Providers> in layout.tsx.
// Everything outside it (nav, bottombar, background, stars) is unaffected.

export function FluidContentWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { phase, turbRef, dispRef } = useContext(FluidTransitionContext);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const rafRef     = useRef<number>(0);
  const turbT      = useRef(0);     // accumulates to animate the turbulence
  const lastNow    = useRef(0);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const disp    = dispRef.current;
    const turb    = turbRef.current;

    if (!wrapper || !disp || !turb) return;

    if (phase === "idle") {
      // Clean up: remove filter and zero out displacement
      wrapper.style.filter = "";
      disp.setAttribute("scale", "0");
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      return;
    }

    // Apply the filter to the content wrapper (background/nav/etc. unaffected)
    wrapper.style.filter = "url(#liquid-distort)";
    wrapper.style.willChange = "filter";

    const MAX_SCALE = 18;                          // peak displacement in px
    const DUR       = phase === "covering" ? 720 : 650; // ms per phase
    const startTime = performance.now();
    lastNow.current = startTime;

    const tick = (now: number) => {
      const dt = now - lastNow.current;
      lastNow.current = now;

      // ── Animate turbulence so the noise flows like real water ─────────
      turbT.current += dt * 0.00038;
      const tx = turbT.current;
      turb.setAttribute(
        "baseFrequency",
        `${(0.012 + Math.sin(tx * 0.75) * 0.004).toFixed(5)} ` +
        `${(0.009 + Math.cos(tx * 0.50) * 0.003).toFixed(5)}`
      );

      // ── Displacement scale follows eased ramp up / ramp down ──────────
      const progress = Math.min((now - startTime) / DUR, 1);
      const scale = phase === "covering"
        ? MAX_SCALE * easeOutCubic(progress)          // 0 → peak
        : MAX_SCALE * (1 - easeInCubic(progress));    // peak → 0

      disp.setAttribute("scale", scale.toFixed(2));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else if (phase === "covering") {
        // Hold at peak until uncovering phase kicks in
        disp.setAttribute("scale", MAX_SCALE.toFixed(2));
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [phase, turbRef, dispRef]);

  return (
    <div ref={wrapperRef}>
      {children}
    </div>
  );
}
