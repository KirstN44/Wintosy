import { GatewayItem } from '../types';

interface GatewayCardProps {
  item: GatewayItem;
}

export function GatewayCard({ item }: GatewayCardProps) {
  return (
    <div
      id={`gateway-card-${item.id}`}
      className={`group relative flex flex-col justify-between rounded-3xl border border-stone-200/90 bg-white/95 p-7 sm:p-8 watercolor-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${item.watercolorAccent.cardBorderHover}`}
    >
      {/* Subtle watercolor wash in background of card */}
      <div
        className={`pointer-events-none absolute -right-6 -top-6 h-32 w-32 rounded-full ${item.watercolorAccent.blobColor} blur-2xl transition-opacity duration-300 group-hover:opacity-100 opacity-60`}
      />

      <div className="relative z-10">
        {/* Whimsical Watercolor Icon Pebble */}
        <div className="mb-6">
          <div
            className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl text-2xl shadow-2xs ring-4 transition-transform duration-300 group-hover:scale-105 ${item.watercolorAccent.iconBg} ${item.watercolorAccent.iconRing}`}
          >
            <span className="select-none">{item.emoji}</span>
          </div>
        </div>

        {/* Card Title */}
        <h2
          id={`gateway-title-${item.id}`}
          className="font-serif-title text-2xl sm:text-3xl font-semibold text-stone-900 tracking-tight mb-3"
        >
          {item.title}
        </h2>

        {/* Card Description */}
        <p
          id={`gateway-desc-${item.id}`}
          className="text-stone-600 text-sm sm:text-base leading-relaxed font-normal mb-8"
        >
          {item.description}
        </p>
      </div>

      {/* Direct Action Button */}
      <div className="relative z-10 pt-2">
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          id={`gateway-btn-${item.id}`}
          className={`flex w-full items-center justify-center rounded-2xl px-5 py-3.5 text-sm font-semibold transition-all duration-200 shadow-xs ${item.watercolorAccent.buttonBg} ${item.watercolorAccent.buttonHover}`}
        >
          <span>{item.buttonText}</span>
        </a>
      </div>
    </div>
  );
}
