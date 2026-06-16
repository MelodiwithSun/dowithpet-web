"use client";

import Image from "next/image";
import { useState } from "react";

const questions = [
  {
    q: "낯선 사람이 집에 오면?",
    a: { label: "쪼르르 마중 나가요", emoji: "🤗" },
    b: { label: "일단 숨어서 관찰해요", emoji: "🫣" },
  },
  {
    q: "새 장난감을 주면?",
    a: { label: "바로 돌격! 🚀", emoji: "🚀" },
    b: { label: "한참 냄새부터 맡아요", emoji: "👃" },
  },
  {
    q: "산책(또는 외출) 나가면?",
    a: { label: "세상 모든 게 궁금해요", emoji: "✨" },
    b: { label: "집사 옆이 제일 안전해요", emoji: "🫶" },
  },
];

export default function MbtiMini() {
  const [step, setStep] = useState(0);
  const [scoreA, setScoreA] = useState(0);

  const answer = (isA: boolean) => {
    if (isA) setScoreA((n) => n + 1);
    setStep((s) => s + 1);
  };

  const reset = () => {
    setStep(0);
    setScoreA(0);
  };

  const done = step >= questions.length;
  const adventurous = scoreA >= 2;

  return (
    <div className="mx-auto max-w-xl rounded-3xl bg-white p-8 sm:p-10 ring-1 ring-brand-100 shadow-[0_20px_60px_-25px_rgba(111,55,224,0.3)]">
      {!done ? (
        <div key={step} className="pop-in">
          <div className="flex items-center justify-between text-sm">
            <span className="font-bold text-brand-600">
              Q{step + 1}
              <span className="text-brand-300"> / {questions.length}</span>
            </span>
            <span className="text-brand-700/50">반려동물 MBTI 미리보기</span>
          </div>
          <div className="mt-3 h-1.5 w-full rounded-full bg-brand-100">
            <div
              className="h-1.5 rounded-full bg-gradient-to-r from-brand-500 to-pink-500 transition-all duration-500"
              style={{ width: `${(step / questions.length) * 100}%` }}
            />
          </div>

          <h3 className="mt-6 text-2xl font-extrabold text-brand-900">
            {questions[step].q}
          </h3>

          <div className="mt-6 space-y-3">
            <button
              type="button"
              onClick={() => answer(true)}
              className="flex w-full items-center gap-3 rounded-2xl bg-brand-50 px-5 py-4 text-left font-semibold text-brand-900 ring-1 ring-brand-100 hover:bg-brand-100 hover:ring-brand-300 transition"
            >
              <span className="text-2xl">{questions[step].a.emoji}</span>
              {questions[step].a.label}
            </button>
            <button
              type="button"
              onClick={() => answer(false)}
              className="flex w-full items-center gap-3 rounded-2xl bg-pink-50 px-5 py-4 text-left font-semibold text-brand-900 ring-1 ring-pink-100 hover:bg-pink-100 hover:ring-pink-300 transition"
            >
              <span className="text-2xl">{questions[step].b.emoji}</span>
              {questions[step].b.label}
            </button>
          </div>
        </div>
      ) : (
        <div className="pop-in text-center">
          <span className="text-sm font-bold text-brand-600">결과 미리보기</span>
          <h3 className="mt-2 text-2xl sm:text-3xl font-extrabold text-brand-900">
            {adventurous ? (
              <>우리 아이는 🚀 <span className="brand-gradient">호기심 모험가</span>!</>
            ) : (
              <>우리 아이는 🫶 <span className="brand-gradient">집사 바라기</span>!</>
            )}
          </h3>
          <p className="mt-3 text-brand-800/70">
            {adventurous
              ? "세상이 다 궁금한 탐험가 타입이에요."
              : "곁에 있을 때 가장 행복한 애착 타입이에요."}
          </p>

          <div className="mt-6 mx-auto w-52 overflow-hidden rounded-2xl ring-1 ring-brand-100 shadow-lg">
            <Image
              src="/screens/mbti-result.jpg"
              alt="반려동물 MBTI 결과 카드 예시"
              width={260}
              height={328}
              className="w-full h-auto"
            />
          </div>

          <p className="mt-5 text-sm text-brand-700/60">
            앱에서는 10개 질문으로 더 정확한 유형과
            <br />
            우리 아이만의 캐릭터 카드를 받아볼 수 있어요.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href="#download"
              className="rounded-full bg-gradient-to-r from-brand-600 to-pink-500 px-6 py-3 text-white font-bold shadow-lg shadow-brand-500/30 hover:scale-[1.03] transition"
            >
              앱에서 전체 테스트하기
            </a>
            <button
              type="button"
              onClick={reset}
              className="rounded-full bg-white px-6 py-3 font-bold text-brand-800 ring-1 ring-brand-200 hover:bg-brand-50 transition"
            >
              다시 하기
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
