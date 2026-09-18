/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { GatewayCard } from './components/GatewayCard';
import { Footer } from './components/Footer';
import { GATEWAY_ITEMS } from './data/gateways';

export default function App() {
  const paypalUrl = 'https://www.paypal.com/paypalme/wintosy';

  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-[#FAF7F2] text-stone-800 font-sans selection:bg-amber-200/60 selection:text-stone-900">
      {/* Whimsical Watercolor Organic Washes in Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Warm honey amber wash (top left) */}
        <div className="watercolor-blob absolute -top-24 -left-20 h-96 w-96 bg-amber-200/40 opacity-70 animate-float" />
        
        {/* Soft whimsical blush wash (top right) */}
        <div
          className="watercolor-blob absolute top-12 -right-24 h-[420px] w-[420px] bg-rose-200/35 opacity-60 animate-float"
          style={{ animationDelay: '-3s' }}
        />
        
        {/* Gentle periwinkle / lavender wash (center bottom) */}
        <div
          className="watercolor-blob absolute top-1/2 left-1/3 h-[500px] w-[500px] -translate-x-1/2 bg-indigo-100/45 opacity-50 animate-float"
          style={{ animationDelay: '-5s' }}
        />

        {/* Fresh meadow sage wash (bottom right) */}
        <div
          className="watercolor-blob absolute -bottom-32 right-10 h-96 w-96 bg-emerald-100/40 opacity-55 animate-float"
          style={{ animationDelay: '-2s' }}
        />
      </div>

      <div className="relative z-10 flex flex-col flex-1">
        {/* 1. Top navigation bar containing only the centered "Wintosy" brand name */}
        <Header />

        <main className="flex-1 flex flex-col justify-center">
          {/* 2. Clean hero section centered on the screen */}
          <Hero />

          {/* 3. Three prominent, equally spaced gateway cards */}
          <section
            id="gateways-section"
            aria-label="Wintosy Gateways"
            className="mx-auto w-full max-w-6xl px-4 sm:px-6 py-6 md:py-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {GATEWAY_ITEMS.map((item) => (
                <GatewayCard key={item.id} item={item} />
              ))}
            </div>
          </section>
        </main>

        {/* 4. Clean footer at the bottom */}
        <Footer paypalUrl={paypalUrl} />
      </div>
    </div>
  );
}
