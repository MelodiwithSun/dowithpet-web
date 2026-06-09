import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://dowithpet.cloud"),
  title: "DoWith — 매일이 함께 즐거운 풍부한 반려생활",
  description:
    "산책 트래킹부터 모먼트 기록, 반려동물 MBTI까지. 우리 아이의 모든 하루를 함께 담는 펫 라이프 다이어리.",
  keywords: [
    "DoWith",
    "두위드",
    "반려동물 앱",
    "강아지 산책",
    "고양이",
    "펫 다이어리",
    "반려동물 MBTI",
    "산책 트래킹",
    "펫 투두",
  ],
  openGraph: {
    title: "DoWith — 매일이 함께 즐거운 풍부한 반려생활",
    description:
      "산책 트래킹부터 모먼트 기록, 반려동물 MBTI까지. 우리 아이의 모든 하루를 함께.",
    url: "https://dowithpet.cloud",
    siteName: "DoWith",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DoWith — 매일이 함께 즐거운 풍부한 반려생활",
    description: "산책·모먼트·MBTI까지, 반려생활 올인원.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <head>
        {/* Pretendard Variable via CDN (한글 최적화) */}
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
