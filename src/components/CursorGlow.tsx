"use client";

/**
 * Liquid cursor trail using canvas + SVG goo filter.
 *
 * How the goo effect works:
 *  1. Solid circles are drawn on a transparent canvas at spring-interpolated positions.
 *  2. CSS `filter: url(#liquid-goo)` is applied to the canvas element.
 *  3. The SVG filter first blurs all circles (spreading their alpha), then applies
 *     a feColorMatrix that thresholds alpha: pixels above the cutoff snap to opaque,
 *     pixels below disappear. Where circles overlap, their blurred alpha sums above
 *     the threshold and they merge into one continuous liquid blob.
 */

import { useEffect, useRef } from "react";

// Spring physics constants
const K  = 0.09;   // stiffness  — lower = more lag
const D  = 0.74;   // damping    — higher = less oscillation
const IDLE_MS     = 750;
const TRAIL_LEN   = 36;  // number of sampled positions kept
const SAMPLE_EVERY = 1;  // sample every N animation frames
const HEAD_R      = 20;  // head circle radius (px)

export default function CursorGlow() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Skip on touch-only devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    // Canvas may not be mounted yet — guard defensively
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Spring state
    let tx = -999, ty = -999;  // target (raw mouse)
    let hx = -999, hy = -999;  // spring head
    let vx = 0,    vy = 0;

    // Ring buffer for trail
    const rx = new Float32Array(TRAIL_LEN).fill(-999);
    const ry = new Float32Array(TRAIL_LEN).fill(-999);
    let ptr = 0, frame = 0;

    // Visibility
    let opacity = 0;
    let idle    = true;
    let idleT: ReturnType<typeof setTimeout>;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX; ty = e.clientY;
      if (hx === -999) { hx = tx; hy = ty; }
      idle = false;
      clearTimeout(idleT);
      idleT = setTimeout(() => { idle = true; }, IDLE_MS);
    };
    const onLeave = () => { idle = true; clearTimeout(idleT); };

    window.addEventListener("mousemove", onMove);
    document.documentElement.addEventListener("mouseleave", onLeave);

    const dark = () => document.documentElement.classList.contains("dark");

    let raf: number;

    const tick = () => {
      raf = requestAnimationFrame(tick);

      // Spring toward mouse
      vx += (tx - hx) * K;  vy += (ty - hy) * K;
      vx *= D;               vy *= D;
      hx += vx;              hy += vy;

      // Record trail
      if (frame % SAMPLE_EVERY === 0) {
        rx[ptr] = hx; ry[ptr] = hy;
        ptr = (ptr + 1) % TRAIL_LEN;
      }
      frame++;

      // Fade in/out
      const tOp = idle ? 0 : 1;
      opacity += (tOp - opacity) * (idle ? 0.055 : 0.14);

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (opacity < 0.01) return;

      const isDark = dark();

      // Draw circles from oldest → newest so the head is on top
      for (let i = TRAIL_LEN - 1; i >= 0; i--) {
        const idx = (ptr - 1 - i + TRAIL_LEN) % TRAIL_LEN;
        const x = rx[idx], y = ry[idx];
        if (x === -999) continue;

        const t = i / (TRAIL_LEN - 1);   // 0 = newest, 1 = oldest
        const r = Math.max(HEAD_R * (1 - t * 0.68), 2);

        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);

        // Solid fills so the goo filter has enough alpha to threshold
        if (isDark) {
          // Violet → cyan gradient along trail
          const mix = 1 - t;
          const red   = Math.round(124 + (6   - 124) * (1 - mix));  // 124→6
          const green = Math.round(58  + (182 - 58)  * (1 - mix));  // 58→182
          const blue  = Math.round(237 + (212 - 237) * (1 - mix));  // 237→212
          ctx.fillStyle = `rgba(${red},${green},${blue},${opacity})`;
        } else {
          ctx.fillStyle = `rgba(150, 120, 230, ${opacity})`;
        }

        ctx.fill();
      }
    };

    tick();

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(idleT);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {/* Goo filter definition — blur then alpha-threshold makes circles merge */}
      <svg
        aria-hidden="true"
        style={{ position: "fixed", width: 0, height: 0, overflow: "hidden" }}
      >
        <defs>
          <filter id="liquid-goo" colorInterpolationFilters="sRGB" x="-50%" y="-50%" width="200%" height="200%">
            {/* Spread circles so nearby ones bleed into each other */}
            <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur" />
            {/* Threshold: alpha×18 − 7 → below threshold vanishes, above snaps solid */}
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 18 -7"
            />
          </filter>
        </defs>
      </svg>

      <canvas
        ref={canvasRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 9998,
          pointerEvents: "none",
          opacity: "var(--cursor-opacity)",
          filter: "url(#liquid-goo)",
        }}
      />
    </>
  );
}
