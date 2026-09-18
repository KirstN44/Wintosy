export function Header() {
  return (
    <header
      id="main-header"
      className="relative z-20 w-full py-6 sm:py-8 text-center"
    >
      <div className="mx-auto flex max-w-5xl items-center justify-center px-4 sm:px-6">
        {/* Top navigation bar containing only the centered "Wintosy" brand name */}
        <a
          href="#"
          id="brand-logo"
          className="group inline-flex items-center gap-2.5 transition-transform duration-300 hover:scale-[1.02] focus:outline-hidden"
        >
          <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-linear-to-br from-amber-200/80 via-rose-200/80 to-indigo-200/80 p-0.5 shadow-xs">
            <div className="flex h-full w-full items-center justify-center rounded-full bg-white/90 backdrop-blur-xs">
              <span className="font-serif-title text-base font-bold italic text-stone-800">W</span>
            </div>
          </div>
          <span className="font-serif-title text-2xl sm:text-3xl font-bold tracking-tight text-stone-900">
            Wintosy
          </span>
        </a>
      </div>
    </header>
  );
}
