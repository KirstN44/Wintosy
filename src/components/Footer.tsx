import { Heart, Mail } from 'lucide-react';

interface FooterProps {
  onOpenSupport?: () => void;
  paypalUrl: string;
}

export function Footer({ paypalUrl }: FooterProps) {
  return (
    <footer
      id="main-footer"
      className="mt-16 sm:mt-24 border-t border-stone-200/80 bg-[#FAF7F2]/80 py-10 px-4 sm:px-6 relative z-10"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        {/* Left side: "Wintosy" title and the subtext "Built with care for creators, parents, and crafters." */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
            <span
              id="footer-title"
              className="font-serif-title text-2xl font-bold tracking-tight text-stone-900"
            >
              Wintosy
            </span>
          </div>
          <p
            id="footer-subtext"
            className="text-sm text-stone-600 font-normal"
          >
            Built with care for creators, parents, and crafters.
          </p>
        </div>

        {/* Right side: Two distinct buttons—subtle support button linking to PayPal AND clean Contact Me button */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {/* Subtle support button linking to PayPal */}
          <a
            href={paypalUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="footer-paypal-btn"
            className="group inline-flex items-center gap-2 rounded-xl border border-stone-200 bg-white/90 px-4 py-2.5 text-xs sm:text-sm font-medium text-stone-700 shadow-2xs hover:border-amber-300 hover:bg-amber-50/60 hover:text-stone-900 transition-all duration-200"
          >
            <Heart className="h-4 w-4 text-rose-500 fill-rose-500/20 group-hover:scale-110 transition-transform" />
            <span>Support via PayPal</span>
          </a>

          {/* Clean "Contact Me" button that opens mailto:Wintosyway@gmail.com */}
          <a
            href="mailto:Wintosyway@gmail.com"
            id="footer-contact-btn"
            className="inline-flex items-center gap-2 rounded-xl border border-indigo-200 bg-indigo-50/80 px-4 py-2.5 text-xs sm:text-sm font-medium text-indigo-950 shadow-2xs hover:bg-indigo-100 hover:border-indigo-300 transition-all duration-200"
          >
            <Mail className="h-4 w-4 text-indigo-600" />
            <span>Contact Me</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
