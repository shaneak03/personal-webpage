"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@heroui/react";
import MotionReveal from "@/components/MotionReveal";
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
          <Button
            variant="primary"
            className="px-6 py-3 rounded-full font-semibold"
            onPress={() => router.push("/about")}
          >
            About Me
          </Button>
          <Button
            variant="outline"
            className="px-6 py-3 rounded-full font-semibold"
            onPress={() => router.push("/projects")}
          >
            Projects
          </Button>
        </MotionStaggerItem>
      </MotionStagger>
    </main>
  );
}
