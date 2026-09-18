import { Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section
      id="hero-section"
      className="relative px-4 pt-4 pb-10 sm:px-6 md:pt-6 md:pb-14 text-center"
    >
      <div className="relative mx-auto max-w-2xl">
        {/* Small "Welcome to Wintosy" tag/pill */}
        <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-200/80 bg-linear-to-r from-amber-50/90 via-rose-50/80 to-indigo-50/90 px-4 py-1.5 text-xs font-medium text-stone-700 shadow-2xs backdrop-blur-xs mb-6">
          <Sparkles className="h-3.5 w-3.5 text-amber-600" />
          <span id="hero-pill-text">Welcome to Wintosy</span>
        </div>

        {/* The main headline: "A quiet corner for real life." */}
        <h1
          id="hero-title"
          className="font-serif-title text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-stone-900 leading-[1.15] mb-5"
        >
          A quiet corner <br className="hidden sm:inline" />
          <span className="italic font-normal text-stone-700">for real life.</span>
        </h1>

        {/* Welcoming paragraph below the headline */}
        <p
          id="hero-description"
          className="mx-auto max-w-xl text-base sm:text-lg text-stone-600 leading-relaxed font-normal"
        >
          A gentle collection of intentional digital spaces designed to simplify your everyday routines, nurture your fiber craft sanctuary, and inspire playful early learning.
        </p>
      </div>
    </section>
  );
}
