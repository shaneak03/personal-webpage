const style = { filter: 'brightness(0) invert(1) opacity(0.8)' }

export default function BottomBar() {
  return (
    <footer className="fixed bottom-4 left-1/2 z-40 -translate-x-1/2">
      <div className="flex items-center gap-6 rounded-full border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.04))] px-5 py-3 shadow-[0_18px_50px_rgba(0,0,0,0.28)] backdrop-blur-xl">
        <a
          href="https://github.com/shaneak03"
          target="_blank"
          rel="noopener noreferrer"
          className="opacity-70 transition-opacity duration-200 hover:opacity-100"
        >
          <img
            src="/github.svg"
            alt="GitHub"
            className="w-8 h-8 brightness-0 invert"
            style={style}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/shane-arkar-kyaw/"
          target="_blank"
          rel="noopener noreferrer"
          className="opacity-70 transition-opacity duration-200 hover:opacity-100"
        >
          <img
            src="/linkedin.png"
            alt="LinkedIn"
            className="w-8 h-8"
            style={style}
          />
        </a>
      </div>
    </footer>
  );
}
