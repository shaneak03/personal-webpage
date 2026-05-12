"use client";

export default function About() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 pt-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            About <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h1>
        </div>

        <div className="bg-black/80 backdrop-blur-md border border-gray-700/50 rounded-3xl p-8 shadow-2xl text-white">
          <h2 className="text-2xl font-bold mb-4 text-purple-400">Education</h2>
          <p className="text-gray-300 mb-6">
            I am currently a student at the National University of Singapore, pursuing a degree in Computer Science. I have a strong interest in Software Engineering and Artificial Intelligence.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-purple-400">Interests</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
            <li>Software Engineering & Architecture</li>
            <li>Artificial Intelligence & Machine Learning</li>
            <li>Full-Stack Web Development</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 text-purple-400">Skills</h2>
          <p className="text-gray-300">
            TypeScript, JavaScript, React, Next.js, Python, Java, and more. Feel free to reach out to learn more about my work!
          </p>
        </div>
      </div>
    </main>
  );
}
