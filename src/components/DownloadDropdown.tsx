"use client";

import { useEffect, useRef, useState } from "react";
import { stores } from "@/lib/stores";

type Variant = "nav" | "hero";

export default function DownloadDropdown({
  variant = "nav",
  label = "앱 다운로드",
}: {
  variant?: Variant;
  label?: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const triggerClass =
    variant === "hero"
      ? "inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-600 to-pink-500 px-6 py-3.5 text-white font-bold shadow-xl shadow-brand-500/40 hover:shadow-2xl hover:scale-[1.02] transition"
      : "inline-flex items-center gap-1.5 rounded-full bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold px-4 py-2 shadow-lg shadow-brand-500/30 transition";

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        className={triggerClass}
      >
        {variant === "hero" && <span aria-hidden>📲</span>}
        {label}
        <span
          className={`text-xs transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          aria-hidden
        >
          ▾
        </span>
      </button>

      {open && (
        <div
          role="menu"
          className="pop-in absolute right-0 z-50 mt-3 w-64 origin-top-right rounded-2xl bg-white p-2 shadow-[0_20px_50px_-15px_rgba(111,55,224,0.4)] ring-1 ring-brand-100"
        >
          {stores.map((s) =>
            s.available ? (
              <a
                key={s.id}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                role="menuitem"
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 rounded-xl px-3 py-3 text-left hover:bg-brand-50 transition"
              >
                <span className="text-2xl">{s.emoji}</span>
                <span className="flex-1">
                  <span className="block font-bold text-brand-900">
                    {s.label}
                  </span>
                  <span className="block text-xs text-brand-700/60">
                    {s.sublabel}
                  </span>
                </span>
                <span className="text-brand-400" aria-hidden>
                  →
                </span>
              </a>
            ) : (
              <div
                key={s.id}
                role="menuitem"
                aria-disabled
                className="flex items-center gap-3 rounded-xl px-3 py-3 text-left opacity-60 cursor-default"
              >
                <span className="text-2xl grayscale">{s.emoji}</span>
                <span className="flex-1">
                  <span className="block font-bold text-brand-900">
                    {s.label}
                  </span>
                  <span className="block text-xs text-brand-700/60">
                    {s.sublabel}
                  </span>
                </span>
                <span className="rounded-full bg-brand-100 px-2 py-0.5 text-[10px] font-bold text-brand-600">
                  준비중
                </span>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
}
