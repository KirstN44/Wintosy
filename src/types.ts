export interface GatewayItem {
  id: string;
  title: string;
  emoji: string;
  description: string;
  buttonText: string;
  url: string;
  watercolorAccent: {
    iconBg: string;
    iconRing: string;
    buttonBg: string;
    buttonHover: string;
    cardBorderHover: string;
    subtleGlow: string;
    blobColor: string;
  };
}
