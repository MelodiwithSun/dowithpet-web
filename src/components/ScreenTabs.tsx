"use client";

import Image from "next/image";
import { useState } from "react";

const screens = [
  {
    id: "todo",
    label: "할일",
    emoji: "✅",
    image: "/screens/todo.png",
    title: "오늘 할 일, 한 번에",
    desc: "식사·놀이·약·칫솔질을 카테고리별로 빠르게 추가하고, 중요한 일정은 핀으로 고정해요.",
  },
  {
    id: "walk",
    label: "산책",
    emoji: "🐾",
    image: "/screens/walk.png",
    title: "산책 실시간 트래킹",
    desc: "GPS로 경로·거리·시간을 자동 기록. 배변·간식·음수까지 가볍게 카운트해요.",
  },
  {
    id: "play",
    label: "놀이",
    emoji: "🎾",
    image: "/screens/play.png",
    title: "놀이 시간도 기록",
    desc: "장난감별로 몇 번 놀았는지, 만족도는 몇 점인지. 실내 활동량을 한눈에 챙겨요.",
  },
  {
    id: "moments",
    label: "모먼트",
    emoji: "📸",
    image: "/screens/moments.png",
    title: "주간 모먼트 챌린지",
    desc: "매주 다른 미션으로 우리 아이의 표정을 모으고, 끝나면 콜라주로 자동 완성돼요.",
  },
  {
    id: "chat",
    label: "가족채팅",
    emoji: "💬",
    image: "/screens/family-chat.png",
    title: "함께 돌보는 채팅방",
    desc: "친구·가족을 초대해 함께 돌봐요. 할일을 끝내면 채팅방에 자동으로 알림이 떠요.",
  },
];

export default function ScreenTabs() {
  const [active, setActive] = useState(0);
  const current = screens[active];

  return (
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      {/* 탭 + 설명 */}
      <div>
        <div className="flex flex-wrap gap-2">
          {screens.map((s, i) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setActive(i)}
              aria-pressed={active === i}
              className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition ${
                active === i
                  ? "bg-brand-600 text-white shadow-lg shadow-brand-500/30"
                  : "bg-white text-brand-800 ring-1 ring-brand-200 hover:ring-brand-400"
              }`}
            >
              <span>{s.emoji}</span>
              {s.label}
            </button>
          ))}
        </div>

        <div key={current.id} className="mt-8 pop-in">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-900 tracking-tight">
            {current.title}
          </h3>
          <p className="mt-4 text-lg text-brand-800/75 leading-relaxed">
            {current.desc}
          </p>
        </div>

        <p className="mt-8 text-sm text-brand-700/60">
          👆 탭을 눌러 화면을 직접 둘러보세요.
        </p>
      </div>

      {/* 폰 목업 */}
      <div className="relative flex justify-center">
        <div
          className="absolute inset-0 rounded-[3rem] blur-3xl opacity-40"
          style={{
            background:
              "radial-gradient(circle, rgba(167,116,255,0.5) 0%, transparent 70%)",
          }}
        />
        <div className="relative z-10 rounded-[2.5rem] bg-white/80 backdrop-blur p-2 shadow-[0_30px_80px_-20px_rgba(111,55,224,0.35)] ring-1 ring-brand-200/50 w-64 sm:w-72">
          <div className="relative overflow-hidden rounded-[2rem] bg-brand-50 aspect-[300/650]">
            {screens.map((s, i) => (
              <Image
                key={s.id}
                src={s.image}
                alt={s.title}
                fill
                sizes="(max-width: 640px) 256px, 288px"
                className={`object-cover object-top transition-opacity duration-500 ${
                  active === i ? "opacity-100" : "opacity-0"
                }`}
                priority={i === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
