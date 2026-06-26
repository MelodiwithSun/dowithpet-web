import Image from "next/image";
import Reveal from "@/components/Reveal";
import ScreenTabs from "@/components/ScreenTabs";
import MbtiMini from "@/components/MbtiMini";
import Faq from "@/components/Faq";
import DownloadDropdown from "@/components/DownloadDropdown";
import ResultCarousel from "@/components/ResultCarousel";
import { stores } from "@/lib/stores";

/* ---------------- 데이터 ---------------- */

const features = [
  {
    emoji: "✅",
    title: "할일 관리",
    desc: "식사, 놀이, 약, 칫솔질까지\n빠르게 추가하고 까먹지 마세요",
    color: "from-brand-100 to-brand-200",
    href: "#showcase-todo",
  },
  {
    emoji: "🐾",
    title: "산책 트래킹",
    desc: "GPS로 산책 경로·거리·시간 기록\n배변·간식·음수까지 한 번에",
    color: "from-pink-100 to-pink-200",
    href: "#showcase-walk",
  },
  {
    emoji: "🎾",
    title: "놀이 기록",
    desc: "장난감별 놀이 횟수와 만족도까지\n실내 활동량을 한눈에",
    color: "from-sky-100 to-sky-200",
    href: "#showcase-play",
  },
  {
    emoji: "📸",
    title: "모먼트 기록",
    desc: "매주 챌린지로 모이는\n우리 아이의 한 컷 한 컷",
    color: "from-amber-100 to-amber-200",
    href: "#showcase-moments",
  },
  {
    emoji: "🔮",
    title: "반려동물 MBTI",
    desc: "10개 질문으로 알아보는\n우리 아이만의 성격유형",
    color: "from-violet-100 to-violet-200",
    href: "#mbti-test",
  },
  {
    emoji: "💬",
    title: "가족 채팅",
    desc: "친구·가족 초대해 함께\n돌보는 우리 집 채팅방",
    color: "from-rose-100 to-rose-200",
    href: "#bonus",
  },
];

const showcases = [
  {
    id: "showcase-todo",
    tag: "할일",
    title: "오늘 할 일,\n한 번에 정리해요",
    desc: "식사·놀이·약·칫솔질을 카테고리별로 빠르게 추가하고, 요일별 반복 일정도 자동으로 챙겨요. 중요한 일정은 따로 모아서 절대 까먹지 않게 도와드려요.",
    why: "매일 반복되는 돌봄, 머릿속이 아니라 앱이 기억하게 두세요.",
    bullets: ["빠른 할일 추가 (4가지 프리셋)", "요일별 반복 설정", "중요해요 핀 고정"],
    image: "/screens/todo.png",
    side: "left",
  },
  {
    id: "showcase-walk",
    tag: "산책",
    title: "산책 한 걸음마다\n기록이 쌓여요",
    desc: "GPS로 경로를 자동 추적하고, 거리·시간을 실시간으로 보여드려요. 산책 중 만난 배변·기다려·간식·음수까지 가볍게 카운트하세요.",
    why: "산책이 그냥 산책이 아니라, 차곡차곡 쌓이는 건강 기록이 돼요.",
    bullets: ["실시간 경로 트래킹", "산책 기록 자동 저장", "오늘의 산책 통계"],
    image: "/screens/walk.png",
    side: "right",
  },
  {
    id: "showcase-play",
    tag: "놀이",
    title: "노는 시간도\n기록이 되니까",
    desc: "오늘 몇 번 놀았는지, 어떤 장난감으로, 만족도는 몇 점인지까지. 놀이를 기록하면 우리 아이가 무엇을 가장 좋아하는지 한눈에 보여요.",
    why: "산책만큼 중요한 실내 활동량, 1초 만에 체크하세요.",
    bullets: ["장난감별 놀이 기록", "놀이 만족도 별점", "오늘의 놀이 히스토리"],
    image: "/screens/play.png",
    side: "left",
  },
  {
    id: "showcase-moments",
    tag: "모먼트",
    title: "이번 주, 너의\n가장 예쁜 얼굴",
    desc: "주차별 모먼트 챌린지로 우리 아이의 다양한 표정을 한 장 한 장 모아요. 챌린지가 끝나면 한 주의 순간들이 하나의 콜라주로 자동 완성됩니다.",
    why: "흘러가는 순간을, 매주 작은 미션으로 붙잡아 두세요.",
    bullets: ["주간 모먼트 챌린지", "사진 콜라주 자동 생성", "지난 챌린지 다시 보기"],
    image: "/screens/moments.png",
    side: "right",
  },
  {
    id: "showcase-mbti",
    tag: "성격유형",
    title: "우리 아이는\n어떤 성격일까?",
    desc: "10개의 질문으로 알아보는 반려동물 MBTI. 강아지·고양이별로 다른 유형 결과와, 우리 아이만의 캐릭터 카드까지 받아볼 수 있어요.",
    why: "우리 아이를 더 잘 이해하는, 가장 즐거운 방법.",
    bullets: ["강아지/고양이 별 성격유형", "캐릭터 카드 공유", "성격에 맞는 추천 활동"],
    image: "/screens/mbti-intro.png",
    side: "left",
  },
];

const steps = [
  {
    no: "01",
    emoji: "🐶",
    title: "앱 설치 & 우리 아이 등록",
    desc: "강아지·고양이 프로필을 만들고 사진 한 장만 올리면 준비 끝. 여러 마리도 각각 등록할 수 있어요.",
  },
  {
    no: "02",
    emoji: "✍️",
    title: "매일 할일 체크 & 산책 기록",
    desc: "밥 줬으면 탭, 산책 나가면 시작 버튼. 하루 1초씩이면 기록이 차곡차곡 쌓여요.",
  },
  {
    no: "03",
    emoji: "✨",
    title: "쌓인 기록으로 아이를 알아가기",
    desc: "모먼트 콜라주, 몸무게 그래프, 성격유형까지 — 매일의 작은 기록이 우리 아이의 추억이 돼요.",
  },
];

const shareCards = [
  {
    image: "/screens/walk-result.jpg",
    title: "산책 기록 카드",
    desc: "오늘 산책한 거리·시간이 사진 위에 예쁘게. 그대로 가족에게 자랑하세요.",
  },
  {
    image: "/screens/challenge.jpg",
    title: "모먼트 카드",
    desc: "이번 주 가장 예쁜 한 컷을 폴라로이드 카드로 만들어 간직해요.",
  },
  {
    image: "/screens/mbti-result.jpg",
    title: "성격유형 카드",
    desc: "우리 아이의 MBTI 결과를 캐릭터 카드로. SNS에 공유하기 딱 좋아요.",
  },
];

const bonusFeatures = [
  {
    title: "할일 완료시 자동 채팅",
    desc: "가족이 할일을 끝내면 채팅방에 자동으로 알림",
    image: "/screens/auto-chat.png",
  },
  {
    title: "주간 챌린지 결과",
    desc: "한 주 동안 모은 모먼트를 한 장의 콜라주로",
    image: "/screens/challenge-result.png",
  },
  {
    title: "친구·가족 초대 채팅방",
    desc: "함께 돌보는 우리 가족만의 공간",
    image: "/screens/family-chat.png",
  },
  {
    title: "몸무게 그래프",
    desc: "주간·월간 변화를 한눈에 추적",
    image: "/screens/weight.png",
  },
  {
    title: "반려동물 개별 설정",
    desc: "여러 마리도 개별 프로필로 관리",
    image: "/screens/pet-settings.png",
  },
  {
    title: "MBTI 결과 카드",
    desc: "공유하고 싶은 우리 아이의 캐릭터",
    image: "/screens/mbti-result-screen.png",
  },
];

/* ---------------- 컴포넌트 ---------------- */

function Logo() {
  return (
    <Image
      src="/dowith-logo.png"
      alt="DoWith"
      width={130}
      height={48}
      priority
      className="h-8 w-auto sm:h-9"
    />
  );
}

function Sparkle({
  className,
  delay = 0,
}: {
  className?: string;
  delay?: number;
}) {
  return (
    <span
      className={`absolute twinkle text-yellow-300 ${className ?? ""}`}
      style={{ animationDelay: `${delay}s` }}
      aria-hidden
    >
      ✦
    </span>
  );
}

function PhoneMockup({
  src,
  alt,
  className,
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={`relative rounded-[2.5rem] bg-white/80 backdrop-blur p-2 shadow-[0_30px_80px_-20px_rgba(111,55,224,0.35)] ring-1 ring-brand-200/50 ${className ?? ""}`}
    >
      <div className="overflow-hidden rounded-[2rem] bg-brand-50">
        <Image
          src={src}
          alt={alt}
          width={300}
          height={650}
          className="w-full h-auto"
          priority={priority}
        />
      </div>
    </div>
  );
}

/* ---------------- 페이지 ---------------- */

export default function Home() {
  return (
    <div className="flex flex-col flex-1 w-full">
      {/* ============ NAV ============ */}
      <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-brand-100/60">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
          <Logo />
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="#features"
              className="hidden sm:inline text-sm font-medium text-brand-800 hover:text-brand-600 px-3 py-2"
            >
              기능
            </a>
            <a
              href="#explore"
              className="hidden sm:inline text-sm font-medium text-brand-800 hover:text-brand-600 px-3 py-2"
            >
              둘러보기
            </a>
            <a
              href="#faq"
              className="hidden sm:inline text-sm font-medium text-brand-800 hover:text-brand-600 px-3 py-2"
            >
              자주 묻는 질문
            </a>
            <DownloadDropdown variant="nav" />
          </div>
        </div>
      </nav>

      {/* ============ HERO ============ */}
      <section className="relative bg-hero overflow-hidden">
        <Sparkle className="top-24 left-[10%] text-3xl" delay={0} />
        <Sparkle className="top-40 right-[12%] text-2xl text-pink-400" delay={1} />
        <Sparkle className="top-1/2 left-[6%] text-xl text-brand-400" delay={2} />
        <Sparkle className="bottom-32 right-[20%] text-2xl" delay={1.5} />
        <Sparkle className="top-20 right-[35%] text-lg text-pink-300" delay={0.5} />

        <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-16 pb-24 lg:pt-24 lg:pb-32 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* 왼쪽: 카피 */}
          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur px-4 py-1.5 text-sm font-semibold text-brand-700 ring-1 ring-brand-200">
              🐾 반려생활 올인원 다이어리
            </span>
            <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-brand-900">
              오늘도,
              <br />
              <span className="brand-gradient">너와 함께</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-brand-800/80 leading-relaxed max-w-xl">
              매일이 함께 즐거운 풍부한 반려생활.
              <br />
              산책 트래킹부터 모먼트, 반려동물 MBTI까지 —<br />
              우리 아이의 모든 하루를 한 곳에.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <DownloadDropdown variant="hero" />
              <a
                href="#explore"
                className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur px-6 py-3.5 text-brand-800 font-bold ring-1 ring-brand-200 hover:bg-white transition"
              >
                기능 둘러보기 →
              </a>
            </div>
            <div className="mt-6 flex items-center gap-3 text-sm text-brand-700/70">
              <span className="flex -space-x-2">
                <span className="w-7 h-7 rounded-full bg-brand-200 ring-2 ring-white flex items-center justify-center">
                  🐶
                </span>
                <span className="w-7 h-7 rounded-full bg-pink-200 ring-2 ring-white flex items-center justify-center">
                  🐱
                </span>
              </span>
              <span>강아지·고양이 모두를 위한 펫 다이어리</span>
            </div>
          </div>

          {/* 오른쪽: 폰 목업 */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute -left-2 sm:-left-8 top-8 rotate-[-8deg] opacity-90 float-slow">
              <PhoneMockup
                src="/screens/moments.png"
                alt="모먼트 화면"
                className="w-48 sm:w-56"
              />
            </div>
            <div className="relative z-10 rotate-[4deg]">
              <PhoneMockup
                src="/screens/todo.png"
                alt="할일 화면"
                className="w-56 sm:w-72"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============ FEATURES (6 cards) ============ */}
      <section id="features" className="py-20 lg:py-28 bg-white scroll-mt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal className="text-center max-w-2xl mx-auto">
            <span className="text-sm font-semibold text-brand-600 uppercase tracking-wider">
              Features
            </span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold text-brand-900 tracking-tight">
              반려생활에 필요한
              <br />
              <span className="brand-gradient">모든 기능</span>이 한 곳에
            </h2>
            <p className="mt-5 text-lg text-brand-800/70">
              하나의 앱으로, 우리 아이의 모든 순간을 기록하고 챙길 수 있어요.
            </p>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 70}>
                <a
                  href={f.href}
                  className={`group block h-full rounded-3xl bg-gradient-to-br ${f.color} p-6 ring-1 ring-white/60 hover:ring-2 hover:ring-brand-400 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-500/20 transition-all duration-300`}
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 group-hover:rotate-[-6deg] transition-transform duration-300">
                    {f.emoji}
                  </div>
                  <h3 className="text-lg font-bold text-brand-900 mb-2 flex items-center gap-1">
                    {f.title}
                    <span className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-brand-600">
                      →
                    </span>
                  </h3>
                  <p className="text-sm text-brand-800/80 whitespace-pre-line leading-relaxed">
                    {f.desc}
                  </p>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ INTERACTIVE EXPLORE (screen tabs) ============ */}
      <section
        id="explore"
        className="py-20 lg:py-28 bg-brand-50/40 scroll-mt-16"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-sm font-semibold text-brand-600 uppercase tracking-wider">
              Take a look
            </span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold text-brand-900 tracking-tight">
              직접 <span className="brand-gradient">둘러보세요</span>
            </h2>
            <p className="mt-5 text-lg text-brand-800/70">
              버튼을 눌러 실제 화면을 바로 확인할 수 있어요.
            </p>
          </Reveal>
          <Reveal>
            <ScreenTabs />
          </Reveal>
        </div>
      </section>

      {/* ============ SHOWCASES (alternating) ============ */}
      <section id="screens" className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 space-y-24 lg:space-y-32">
          {showcases.map((s) => (
            <Reveal key={s.tag}>
              <div
                id={s.id}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center scroll-mt-24 ${
                  s.side === "right" ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* 텍스트 */}
                <div>
                  <span className="inline-block rounded-full bg-brand-100 px-3 py-1 text-xs font-bold text-brand-700 uppercase tracking-wider">
                    {s.tag}
                  </span>
                  <h3 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-900 tracking-tight whitespace-pre-line leading-[1.15]">
                    {s.title}
                  </h3>
                  <p className="mt-5 text-lg text-brand-800/75 leading-relaxed">
                    {s.desc}
                  </p>
                  <p className="mt-4 flex items-start gap-2 rounded-2xl bg-brand-50 px-4 py-3 text-brand-700 font-medium ring-1 ring-brand-100">
                    <span aria-hidden>💜</span>
                    <span>{s.why}</span>
                  </p>
                  <ul className="mt-6 space-y-3">
                    {s.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-3 text-brand-800"
                      >
                        <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white text-xs">
                          ✓
                        </span>
                        <span className="font-medium">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 이미지 */}
                <div className="relative flex justify-center">
                  <div
                    className="absolute inset-0 rounded-[3rem] blur-3xl opacity-40"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(167,116,255,0.5) 0%, transparent 70%)",
                    }}
                  />
                  <PhoneMockup
                    src={s.image}
                    alt={s.title}
                    className="w-64 sm:w-72 relative z-10"
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ MBTI MINI TEST ============ */}
      <section
        id="mbti-test"
        className="py-20 lg:py-28 bg-brand-50/40 scroll-mt-16"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm font-semibold text-brand-600 uppercase tracking-wider">
              Pet MBTI
            </span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold text-brand-900 tracking-tight">
              우리 아이 성격,
              <br />
              <span className="brand-gradient">지금 맛보기</span>
            </h2>
            <p className="mt-5 text-lg text-brand-800/70">
              3개의 질문으로 미리 체험해보세요. 전체 테스트는 앱에서!
            </p>
          </Reveal>
          <Reveal>
            <MbtiMini />
          </Reveal>
        </div>
      </section>

      {/* ============ HOW IT WORKS (3 steps) ============ */}
      <section id="how" className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal className="text-center max-w-2xl mx-auto">
            <span className="text-sm font-semibold text-brand-600 uppercase tracking-wider">
              How it works
            </span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold text-brand-900 tracking-tight">
              <span className="brand-gradient">3단계</span>면 충분해요
            </h2>
            <p className="mt-5 text-lg text-brand-800/70">
              어렵지 않아요. 매일 1초씩이면 기록이 추억이 됩니다.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {steps.map((s, i) => (
              <Reveal key={s.no} delay={i * 90}>
                <div className="relative h-full rounded-3xl bg-gradient-to-b from-brand-50 to-white p-8 ring-1 ring-brand-100">
                  <span className="text-6xl font-extrabold text-brand-100">
                    {s.no}
                  </span>
                  <div className="text-4xl mt-2">{s.emoji}</div>
                  <h3 className="mt-4 text-xl font-bold text-brand-900">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-brand-800/70 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ BONUS FEATURES (small grid) ============ */}
      <section id="bonus" className="py-20 lg:py-28 bg-brand-50/40 scroll-mt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-brand-900 tracking-tight">
              <span className="brand-gradient">더 많은 기능</span>이 가득
            </h2>
            <p className="mt-4 text-lg text-brand-800/70">
              세심하게 챙긴 작은 디테일들까지.
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {bonusFeatures.map((b, i) => (
              <Reveal key={b.title} delay={(i % 3) * 80}>
                <div className="group h-full rounded-3xl bg-white p-6 ring-1 ring-brand-100 hover:ring-brand-300 hover:-translate-y-1 transition">
                  <div className="overflow-hidden rounded-2xl bg-brand-50 mb-5 aspect-[3/4] flex items-end justify-center">
                    <Image
                      src={b.image}
                      alt={b.title}
                      width={240}
                      height={520}
                      className="w-4/5 object-contain object-bottom group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h4 className="text-lg font-bold text-brand-900 mb-1">
                    {b.title}
                  </h4>
                  <p className="text-sm text-brand-800/70 leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SHARE CARDS ============ */}
      <section id="share" className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal className="text-center max-w-2xl mx-auto">
            <span className="text-sm font-semibold text-brand-600 uppercase tracking-wider">
              Share
            </span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold text-brand-900 tracking-tight">
              자랑하고 싶은 순간,
              <br />
              <span className="brand-gradient">한 장의 카드</span>로
            </h2>
            <p className="mt-5 text-lg text-brand-800/70">
              산책 기록도, 모먼트도, 성격유형도 — 예쁜 카드로 만들어 가족·친구와 나눠요.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-8 sm:grid-cols-3">
            {shareCards.map((c, i) => (
              <Reveal key={c.title} delay={i * 90}>
                <div className="group flex h-full flex-col">
                  <div className="overflow-hidden rounded-3xl ring-1 ring-brand-100 shadow-[0_20px_50px_-25px_rgba(111,55,224,0.4)]">
                    <Image
                      src={c.image}
                      alt={c.title}
                      width={600}
                      height={760}
                      className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h4 className="mt-5 text-lg font-bold text-brand-900">
                    {c.title}
                  </h4>
                  <p className="mt-1 text-sm text-brand-800/70 leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ REAL MOMENTS CAROUSEL ============ */}
      <section id="moments-gallery" className="py-20 lg:py-28 bg-brand-50/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal className="max-w-2xl">
            <span className="text-sm font-semibold text-brand-600 uppercase tracking-wider">
              Real moments
            </span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold text-brand-900 tracking-tight">
              오늘도 함께한
              <br />
              <span className="brand-gradient">우리들의 순간</span>
            </h2>
            <p className="mt-5 text-lg text-brand-800/70">
              강아지 산책부터 고양이 놀이까지 — DoWith로 남긴 진짜 기록 카드들이에요.
              <span className="hidden sm:inline"> 옆으로 넘겨보세요 👉</span>
            </p>
          </Reveal>
          <Reveal className="mt-12">
            <ResultCarousel />
          </Reveal>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section id="faq" className="py-20 lg:py-28 bg-white scroll-mt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm font-semibold text-brand-600 uppercase tracking-wider">
              FAQ
            </span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold text-brand-900 tracking-tight">
              자주 묻는 <span className="brand-gradient">질문</span>
            </h2>
          </Reveal>
          <Reveal>
            <Faq />
          </Reveal>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section
        id="download"
        className="relative py-24 lg:py-32 bg-galaxy overflow-hidden scroll-mt-16"
      >
        <Sparkle className="top-20 left-[15%] text-3xl" delay={0} />
        <Sparkle className="top-32 right-[20%] text-2xl text-pink-300" delay={1.2} />
        <Sparkle className="bottom-24 left-[25%] text-xl text-pink-200" delay={2} />
        <Sparkle className="bottom-32 right-[15%] text-3xl" delay={0.6} />
        <Sparkle className="top-1/2 left-[8%] text-lg" delay={1.8} />

        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
            우리 아이의 우주를,
            <br />
            <span className="bg-gradient-to-r from-yellow-200 via-pink-200 to-yellow-200 bg-clip-text text-transparent">
              지금 시작해보세요
            </span>
          </h2>
          <p className="mt-6 text-lg text-brand-100/90 leading-relaxed">
            매일이 함께 즐거운 풍부한 반려생활.
            <br />
            지금 App Store에서 DoWith를 만나보세요.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {stores.map((s) =>
              s.available ? (
                <a
                  key={s.id}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-brand-700 font-bold shadow-xl hover:scale-[1.03] transition"
                >
                  <span aria-hidden>{s.emoji}</span> {s.label}
                </a>
              ) : (
                <span
                  key={s.id}
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur ring-1 ring-white/30 px-7 py-4 text-white/80 font-bold cursor-default"
                >
                  <span aria-hidden>{s.emoji}</span> {s.label}
                  <span className="rounded-full bg-white/20 px-2 py-0.5 text-[11px] font-bold">
                    곧 출시
                  </span>
                </span>
              )
            )}
          </div>
          <p className="mt-6 text-sm text-brand-200/70">
            * Android 버전은 곧 Google Play에 출시될 예정이에요.
          </p>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="bg-brand-900 text-brand-100/80 py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Image
              src="/dowith-logo.png"
              alt="DoWith"
              width={120}
              height={44}
              className="h-7 w-auto"
            />
            <span className="text-brand-300/60 text-sm">
              매일이 함께 즐거운 풍부한 반려생활
            </span>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <a href="mailto:dowith.pet@gmail.com" className="hover:text-white">
              문의
            </a>
            <a
              href="https://sour-canvas-77f.notion.site/DoWith-374e4293a58a80619920f48813a39a58?source=copy_link"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              개인정보처리방침
            </a>
            <a
              href="https://sour-canvas-77f.notion.site/379e4293a58a805aa8f9fcd7dafb45cb?source=copy_link"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              이용약관
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-brand-300/50">
          © {new Date().getFullYear()} DoWith. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
