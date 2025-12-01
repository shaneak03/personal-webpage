const style = { filter: 'brightness(0) invert(1) opacity(0.8)' }

export default function BottomBar() {
  return (
    <footer className="fixed bottom-0 left-0 w-full flex justify-center items-center bg-black py-3 z-40">
      <div className="flex gap-8">
        <a
          href="https://github.com/shaneak03"
          target="_blank"
          rel="noopener noreferrer"
          className="opacity-70 hover:opacity-100 transition-opacity duration-200"
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
          className="opacity-70 hover:opacity-100 transition-opacity duration-200"
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
