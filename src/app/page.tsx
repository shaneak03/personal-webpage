"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { MotionStagger, MotionStaggerItem } from "@/components/MotionStagger";

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center justify-start px-4 pt-44 pb-32 sm:justify-center sm:px-0 sm:pt-28 sm:pb-24">
      <MotionStagger className="flex w-full flex-col items-center" delayChildren={0.1}>

        <MotionStaggerItem>
          <Image
            src="/profile.jpg"
            alt="Profile"
            width={176}
            height={176}
            className="mb-8 h-44 w-44 rounded-full border border-[#dee2e6] object-cover shadow-md dark:border-white/[0.12] dark:shadow-[0_0_40px_rgba(124,58,237,0.25)]"
            priority
          />
        </MotionStaggerItem>

        <MotionStaggerItem>
          <p className="mb-3 text-center text-xs font-medium uppercase tracking-[0.22em] text-[#6c757d] dark:text-white/35">
            Computer Science · National University of Singapore
          </p>
        </MotionStaggerItem>

        <MotionStaggerItem>
          <h1 className="mb-5 text-center text-4xl font-bold tracking-tight text-[#212529] md:text-6xl dark:text-white">
            Hello, I&apos;m{" "}
            <span className="bg-gradient-to-r from-[#7c3aed] via-[#06b6d4] to-[#ec4899] bg-clip-text text-transparent dark:from-[#a78bfa] dark:via-[#22d3ee] dark:to-[#f472b6]">
              Shane.
            </span>
          </h1>
        </MotionStaggerItem>

        <MotionStaggerItem>
          <p className="mb-8 max-w-xl text-center text-base text-[#6c757d] md:text-lg dark:text-white/40">
            Exploring systems, building software, and learning along the way — currently drawn to{" "}
            <strong className="font-semibold text-[#495057] dark:text-white/65">Software Engineering</strong>{" "}
            and{" "}
            <strong className="font-semibold text-[#495057] dark:text-white/65">Artificial Intelligence</strong>.
          </p>
        </MotionStaggerItem>

        <MotionStaggerItem className="flex gap-3">
          <button
            type="button"
            className="cursor-pointer rounded-lg bg-[#212529] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:scale-[1.02] hover:bg-[#343a40] dark:bg-gradient-to-r dark:from-[#7c3aed] dark:to-[#06b6d4] dark:shadow-[0_8px_28px_rgba(124,58,237,0.3)] dark:hover:shadow-[0_12px_36px_rgba(124,58,237,0.42)]"
            onClick={() => router.push("/about")}
          >
            About Me
          </button>
          <button
            type="button"
            className="cursor-pointer rounded-lg border border-[#ced4da] bg-transparent px-6 py-3 text-sm font-semibold text-[#495057] transition-all duration-200 hover:scale-[1.02] hover:border-[#adb5bd] hover:bg-[#f1f3f5] dark:border-white/[0.12] dark:bg-white/[0.05] dark:text-white/65 dark:hover:bg-white/[0.10]"
            onClick={() => router.push("/projects")}
          >
            Projects
          </button>
        </MotionStaggerItem>

      </MotionStagger>
    </main>
  );
}
