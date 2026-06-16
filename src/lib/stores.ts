export type Store = {
  id: "ios" | "android";
  label: string;
  sublabel: string;
  emoji: string;
  url: string;
  available: boolean;
};

export const stores: Store[] = [
  {
    id: "ios",
    label: "App Store",
    sublabel: "iPhone · iPad",
    emoji: "🍎",
    url: "https://apps.apple.com/kr/app/%EB%91%90%EC%9C%84%EB%93%9C-dowith/id6776186823",
    available: true,
  },
  {
    id: "android",
    label: "Google Play",
    sublabel: "곧 출시",
    emoji: "▶",
    url: "https://play.google.com/store/apps/details?id=com.jung.dowith",
    available: false,
  },
];
