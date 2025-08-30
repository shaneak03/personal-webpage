"use client";

import { Button } from "@heroui/react";
import Image from "next/image";
import FloatingNav from "../components/FloatingNav";

export default function Home() {

  return (
    <>
      <FloatingNav />
      <main className="min-h-screen flex flex-col items-center justify-center bg-black transition-colors duration-300">
      <div className="flex flex-col items-center w-full px-4">
      <Image
          src="/profile.jpg"
          alt="Profile"
          width={220}
          height={220}
          className="w-56 h-56 rounded-full mb-8 border-4 border-transparent bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500 p-1 object-cover shadow-2xl"
          priority
        />
        <h1 className="text-4xl md:text-6xl font-extrabold text-center text-white mb-4">
          Hello!<br />
          I'm <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">Shane Arkar Kyaw </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 text-center max-w-xl mb-8">
          I am currently a student at the National University of Singapore, pursuing a degree in Computer Science.  I have a strong interest in <strong>Software Engineering</strong> and <strong>Artificial Intelligence</strong>.
        </p>
        <div className="flex gap-4">
          <Button 
            as="a" 
            href="#contact" 
            color="primary" 
            className="px-6 py-3 rounded-full font-semibold shadow flex items-center gap-2 bg-white text-black hover:bg-gray-100"
          >
            About Me
          </Button>
          <Button 
            as="a" 
            href="/cv.pdf" 
            download 
            color="secondary" 
            className="px-6 py-3 rounded-full font-semibold shadow flex items-center gap-2 bg-transparent border-2 border-white text-white hover:bg-white/10"
          >
            Projects
          </Button>
        </div>
      </div>
    </main>
    </>
  );
}
