import { GatewayItem } from '../types';

export const GATEWAY_ITEMS: GatewayItem[] = [
  {
    id: 'life-business-os',
    title: 'Life & Business OS',
    emoji: '📋',
    description:
      'Your everyday command center for family schedules, client tasks, action boards, and quiet productivity.',
    buttonText: 'Open Life OS →',
    url: 'https://life-business-os.pages.dev/',
    watercolorAccent: {
      iconBg: 'bg-amber-100/80 text-amber-900',
      iconRing: 'ring-amber-200/70',
      buttonBg: 'bg-stone-900 text-stone-50 hover:bg-stone-800',
      buttonHover: 'hover:shadow-amber-900/10',
      cardBorderHover: 'hover:border-amber-300/80',
      subtleGlow: 'from-amber-100/50 via-amber-50/20 to-transparent',
      blobColor: 'bg-amber-200/30',
    },
  },
  {
    id: 'stitch-minded',
    title: 'Stitch Minded',
    emoji: '🧶',
    description:
      'A digital craft sanctuary showcasing fiber arts, stitch patterns, blog tutorials, and interactive tools like your beanie calculator.',
    buttonText: 'Explore Stitch Minded →',
    url: 'https://stitch-minded.pages.dev/',
    watercolorAccent: {
      iconBg: 'bg-rose-100/80 text-rose-900',
      iconRing: 'ring-rose-200/70',
      buttonBg: 'bg-stone-900 text-stone-50 hover:bg-stone-800',
      buttonHover: 'hover:shadow-rose-900/10',
      cardBorderHover: 'hover:border-rose-300/80',
      subtleGlow: 'from-rose-100/50 via-rose-50/20 to-transparent',
      blobColor: 'bg-rose-200/30',
    },
  },
  {
    id: 'sprout-lab',
    title: 'Sprout Lab',
    emoji: '🚀',
    description:
      'Interactive educational games like Word Orbit and Maths Orbit designed with text-to-speech for early learners.',
    buttonText: 'Play Educational Apps →',
    url: 'https://sprout-lab.pages.dev/',
    watercolorAccent: {
      iconBg: 'bg-emerald-100/80 text-emerald-900',
      iconRing: 'ring-emerald-200/70',
      buttonBg: 'bg-stone-900 text-stone-50 hover:bg-stone-800',
      buttonHover: 'hover:shadow-emerald-900/10',
      cardBorderHover: 'hover:border-emerald-300/80',
      subtleGlow: 'from-emerald-100/50 via-emerald-50/20 to-transparent',
      blobColor: 'bg-emerald-200/30',
    },
  },
];
