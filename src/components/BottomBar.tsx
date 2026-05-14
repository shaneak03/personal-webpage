import Image from "next/image";

export default function BottomBar() {
  return (
    <footer className="fixed bottom-4 left-1/2 z-40 -translate-x-1/2">
      <div className="flex items-center gap-5 rounded-full border border-black/[0.07] bg-white/65 px-5 py-3 shadow-[0_4px_20px_rgba(0,0,0,0.07)] backdrop-blur-2xl dark:border-white/[0.12] dark:bg-white/[0.05] dark:shadow-[0_8px_36px_rgba(0,0,0,0.45)]">
        <a
          href="https://github.com/shaneak03"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="opacity-50 transition-opacity duration-200 hover:opacity-90"
        >
          <Image
            src="/github.svg"
            alt="GitHub"
            width={28}
            height={28}
            className="h-7 w-7 brightness-0 dark:brightness-0 dark:invert"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/shane-arkar-kyaw/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="opacity-50 transition-opacity duration-200 hover:opacity-90"
        >
          <Image
            src="/linkedin.png"
            alt="LinkedIn"
            width={28}
            height={28}
            className="h-7 w-7 brightness-0 dark:brightness-0 dark:invert"
          />
        </a>
      </div>
    </footer>
  );
}
