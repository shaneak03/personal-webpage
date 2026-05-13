"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { MotionStagger, MotionStaggerItem } from "@/components/MotionStagger";

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center justify-start px-4 pt-44 pb-32 transition-colors duration-300 sm:justify-center sm:px-0 sm:pt-28 sm:pb-24">
      <MotionStagger className="flex w-full flex-col items-center" delayChildren={0.1}>
        <MotionStaggerItem>
          <Image
            src="/profile.jpg"
            alt="Profile"
            width={220}
            height={220}
            className="mb-8 h-56 w-56 rounded-full border-4 border-transparent bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500 p-1 object-cover shadow-2xl"
            priority
          />
        </MotionStaggerItem>
        <MotionStaggerItem>
          <h1 className="mb-4 text-center text-4xl font-extrabold text-white md:text-6xl">
            Hello!<br />
            I&apos;m <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">Shane Arkar Kyaw </span>
          </h1>
        </MotionStaggerItem>
        <MotionStaggerItem>
          <p className="mb-8 max-w-xl text-center text-lg text-gray-300 md:text-xl">
            I am currently a student at the National University of Singapore, pursuing a degree in Computer Science.  I have a strong interest in <strong>Software Engineering</strong> and <strong>Artificial Intelligence</strong>.
          </p>
        </MotionStaggerItem>
        <MotionStaggerItem className="flex gap-4">
          <button
            type="button"
            className="cursor-pointer rounded-full bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 px-6 py-3 font-semibold text-white shadow-[0_16px_40px_rgba(236,72,153,0.28)] transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(236,72,153,0.36)]"
            onClick={() => router.push("/about")}
          >
            About Me
          </button>
          <button
            type="button"
            className="cursor-pointer rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 font-semibold text-white shadow-[0_16px_40px_rgba(0,0,0,0.18)] backdrop-blur-sm transition-all duration-200 hover:scale-[1.02] hover:bg-white/[0.09] hover:shadow-[0_20px_50px_rgba(0,0,0,0.24)]"
            onClick={() => router.push("/projects")}
          >
            Projects
          </button>
        </MotionStaggerItem>
      </MotionStagger>
    </main>
  );
}
