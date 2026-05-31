"use client";

import { scrollTo } from "@/lib/constants";

export default function Facility() {
  const tiles = [
    { caption: "대형 체육 매트존", tag: "매트 운동",     bg: "linear-gradient(135deg, #ffd9d0 0%, #ff8f7a 100%)", span: "large" },
    { caption: "구기·도구 공간",   tag: "구기 종목",     bg: "linear-gradient(135deg, #c8d5ff 0%, #4f7cff 100%)" },
    { caption: "균형감각 트랙",     tag: "균형·점프",     bg: "linear-gradient(135deg, #fff0b8 0%, #ffd964 100%)" },
    { caption: "암벽 클라이밍",     tag: "클라이밍",      bg: "linear-gradient(135deg, #c5f0d8 0%, #1ea974 100%)" },
    { caption: "키즈 휴게실",       tag: "쉼터",          bg: "linear-gradient(135deg, #ffd9d0 0%, #ffb4a4 100%)" },
    { caption: "학부모 대기실",     tag: "대기 공간",     bg: "linear-gradient(135deg, #e2dcff 0%, #9c8aff 100%)" },
  ];

  return (
    <section id="facility" className="section" style={{ background: "var(--paper)" }}>
      <div className="container">
        <div style={{ alignItems: "center", textAlign: "center", marginBottom: 64 }}>
          <div style={{ fontSize: 13, fontWeight: 800, letterSpacing: "0.12em", color: "var(--ink-3)", marginBottom: 16 }}>FACILITY & GALLERY</div>
          <h2 style={{ fontSize: "clamp(34px, 4vw, 52px)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1.15, margin: 0, color: "var(--ink)" }}>
            안전하고 즐거운 <span style={{ color: "var(--blue)" }}>체육 공간</span>에서
          </h2>
          <p style={{ fontSize: 18, lineHeight: 1.65, color: "var(--ink-2)", marginTop: 24, maxWidth: 640, marginInline: "auto" }}>
            전용 매트, 충격 흡수 바닥재, CCTV와 비상 키트까지. 마음껏 뛰놀 수 있는 환경을 갖췄어요.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[220px] gap-[16px]">
          {tiles.map((t, i) => (
            <div
              key={i}
              style={{
                borderRadius: 24,
                background: t.bg,
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
                transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
              className={`${t.span === "large" ? "md:col-span-2 md:row-span-2" : "col-span-1 row-span-1"} hover:-translate-y-1 hover:shadow-lg`}
            >
              {/* Decorative blobs */}
              <div style={{ position: "absolute", top: -40, right: -40, width: 180, height: 180, borderRadius: "50%", background: "rgba(255,255,255,0.18)" }}></div>
              <div style={{ position: "absolute", bottom: -50, left: -30, width: 160, height: 160, borderRadius: "50%", background: "rgba(255,255,255,0.12)" }}></div>

              {/* Tag */}
              <span style={{
                position: "absolute", top: 16, left: 16,
                padding: "6px 12px", borderRadius: "var(--radius-pill)",
                background: "rgba(255,255,255,0.85)", color: "var(--ink)",
                fontSize: 12, fontWeight: 800,
                backdropFilter: "blur(8px)",
              }}>{t.tag}</span>

              {/* Caption */}
              <div style={{
                position: "absolute", bottom: 20, left: 20, right: 20,
                color: "var(--white)",
                fontSize: t.span === "large" ? 26 : 18,
                fontWeight: 900,
                letterSpacing: "-0.03em",
                textShadow: "0 2px 12px rgba(50,67,92,0.4)",
              }}>
                {t.caption}
              </div>

              {/* View icon */}
              <div style={{
                position: "absolute", top: 16, right: 16,
                width: 36, height: 36, borderRadius: 12,
                background: "rgba(255,255,255,0.25)",
                backdropFilter: "blur(8px)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "var(--white)",
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M7 7h10v10"/></svg>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 48 }}>
          <button 
            onClick={() => scrollTo("contact")} 
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "16px 28px", borderRadius: "var(--radius-pill)",
              background: "var(--white)", color: "var(--ink)",
              border: "1.5px solid var(--line-2)",
              fontSize: 16, fontWeight: 800,
              transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "var(--ink)"; e.currentTarget.style.color = "var(--white)"; e.currentTarget.style.borderColor = "var(--ink)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "var(--white)"; e.currentTarget.style.color = "var(--ink)"; e.currentTarget.style.borderColor = "var(--line-2)"; }}
          >
            현장 방문 예약하기
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </button>
        </div>
      </div>
    </section>
  );
}
