"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const cards = [
  {
    src: "/screens/walk-result-2.jpg",
    alt: "강아지 산책 기록 후기 카드",
    tag: "🐶 산책",
  },
  {
    src: "/screens/play-result.jpg",
    alt: "고양이 놀이 기록 후기 카드",
    tag: "🐱 놀이",
  },
  {
    src: "/screens/walk-result-3.jpg",
    alt: "강아지 산책 기록 후기 카드",
    tag: "🐶 산책",
  },
  {
    src: "/screens/play-result-2.jpg",
    alt: "고양이 놀이 기록 후기 카드",
    tag: "🐱 놀이",
  },
];

export default function ResultCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 8);
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  const scrollByCard = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 no-scrollbar [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {cards.map((c) => (
          <figure
            key={c.src}
            data-card
            className="snap-start shrink-0 w-64 sm:w-72"
          >
            <div className="relative overflow-hidden rounded-3xl ring-1 ring-brand-100 shadow-[0_24px_60px_-28px_rgba(111,55,224,0.5)]">
              <span className="absolute left-3 top-3 z-10 rounded-full bg-white/85 backdrop-blur px-3 py-1 text-xs font-bold text-brand-700 shadow-sm">
                {c.tag}
              </span>
              <Image
                src={c.src}
                alt={c.alt}
                width={520}
                height={520}
                className="w-full h-auto aspect-square object-cover"
              />
            </div>
          </figure>
        ))}
      </div>

      {/* 좌우 네비게이션 */}
      <div className="mt-6 flex items-center justify-end gap-3">
        <button
          type="button"
          onClick={() => scrollByCard(-1)}
          disabled={!canPrev}
          aria-label="이전 카드"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white ring-1 ring-brand-200 text-brand-700 shadow-sm transition hover:bg-brand-50 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={() => scrollByCard(1)}
          disabled={!canNext}
          aria-label="다음 카드"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white ring-1 ring-brand-200 text-brand-700 shadow-sm transition hover:bg-brand-50 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          ›
        </button>
      </div>
    </div>
  );
}
