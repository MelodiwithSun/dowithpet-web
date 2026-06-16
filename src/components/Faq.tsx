"use client";

import { useState } from "react";

const faqs = [
  {
    q: "강아지랑 고양이 둘 다 쓸 수 있나요?",
    a: "네! DoWith는 강아지·고양이 모두를 위한 펫 다이어리예요. 산책 트래킹은 강아지에, 놀이 기록은 고양이에 특히 잘 맞고, MBTI도 종에 맞는 결과를 보여드려요.",
  },
  {
    q: "여러 마리를 키워도 되나요?",
    a: "물론이에요. 반려동물마다 개별 프로필을 만들어 할일·산책·모먼트·몸무게를 따로따로 관리할 수 있어요.",
  },
  {
    q: "가족이랑 같이 쓸 수 있나요?",
    a: "친구·가족을 채팅방에 초대해 함께 돌볼 수 있어요. 누가 밥을 줬는지, 산책을 다녀왔는지 할일을 끝내면 채팅방에 자동으로 알림이 떠서 중복 걱정이 없어요.",
  },
  {
    q: "기록한 사진과 데이터는 안전한가요?",
    a: "우리 아이의 사진과 기록은 안전하게 보관돼요. 모먼트·산책·MBTI 결과는 원할 때 카드 이미지로 만들어 가족과 공유할 수도 있어요.",
  },
  {
    q: "무료인가요?",
    a: "핵심 기능은 무료로 시작할 수 있어요. 자세한 요금 정책은 출시 시점에 앱 안에서 안내해 드릴게요.",
  },
  {
    q: "언제 출시되나요?",
    a: "현재 출시 준비 중이에요. App Store와 Google Play에 곧 만나요 — 이 페이지에서 다운로드 버튼이 활성화되면 바로 받아보실 수 있어요!",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl space-y-3">
      {faqs.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={item.q}
            className="rounded-2xl bg-white ring-1 ring-brand-100 overflow-hidden transition hover:ring-brand-200"
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="font-bold text-brand-900">{item.q}</span>
              <span
                className={`shrink-0 text-xl text-brand-500 transition-transform duration-300 ${
                  isOpen ? "rotate-45" : ""
                }`}
                aria-hidden
              >
                +
              </span>
            </button>
            <div className={`accordion-body ${isOpen ? "open" : ""}`}>
              <div>
                <p className="px-6 pb-5 text-brand-800/75 leading-relaxed">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
