"use client";

import { scrollTo } from "@/lib/constants";

export default function About() {
  const values = [
    {
      tag: "SAFETY",
      title: "안전",
      desc: "체계적인 안전 매뉴얼과 응급 대응 시스템으로 아이들이 마음껏 뛰어놀 수 있는 환경을 만들어요.",
      bg: "var(--coral-bg)", accent: "var(--coral)",
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <path d="m9 12 2 2 4-4"/>
        </svg>
      ),
    },
    {
      tag: "EXPERTISE",
      title: "전문성",
      desc: "체육교육 전공 강사진이 연령별 발달 단계를 고려한 커리큘럼으로 아이의 성장을 도와드려요.",
      bg: "var(--blue-bg)", accent: "var(--blue)",
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
          <path d="M6 12v5c3 3 9 3 12 0v-5"/>
        </svg>
      ),
    },
    {
      tag: "JOY",
      title: "즐거움",
      desc: "놀이를 통해 자연스럽게 운동 습관을 형성하고, 친구들과 함께 웃으며 자라도록 도와요.",
      bg: "#fffbe8", accent: "#e8a800",
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
          <line x1="9" y1="9" x2="9.01" y2="9"/>
          <line x1="15" y1="9" x2="15.01" y2="9"/>
        </svg>
      ),
    },
    {
      tag: "CONNECTION",
      title: "친근함",
      desc: "학부모님께 매일 알림장과 영상을 공유하며, 아이의 성장 순간을 함께 나눠요.",
      bg: "#eafaf2", accent: "#1ea974",
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
    },
  ];

  return (
    <section id="about" className="section" style={{ background: "var(--white)" }}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-[60px] lg:gap-[80px] items-start">
          {/* Left: head */}
          <div className="lg:sticky lg:top-[120px]">
            <div style={{ fontSize: 13, fontWeight: 800, letterSpacing: "0.12em", color: "var(--ink-3)", marginBottom: 16 }}>ABOUT DDINGDONG</div>
            <h2 style={{
              fontSize: "clamp(34px, 4vw, 52px)",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              lineHeight: 1.15,
              margin: 0,
              color: "var(--ink)",
            }}>
              우리는 아이들의<br/>
              <span style={{ color: "var(--coral)" }}>가장 든든한</span><br/>
              운동 친구가 되어드려요
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.75, color: "var(--ink-2)", marginTop: 24, maxWidth: 420 }}>
              띵동은 단순한 체육 수업이 아닌, 아이의 평생 운동 습관을 만드는 시작점입니다.
              놀이로 시작해 자신감으로 자라는, 그런 시간을 만들어요.
            </p>
            <button 
              onClick={() => scrollTo("programs")} 
              style={{ 
                marginTop: 32,
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "16px 28px", borderRadius: "var(--radius-pill)",
                background: "var(--blue)", color: "var(--white)",
                fontSize: 16, fontWeight: 800,
                boxShadow: "var(--shadow-blue)",
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.background = "var(--blue-dark)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.background = "var(--blue)"; }}
            >
              프로그램 자세히 보기
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </button>
          </div>

          {/* Right: 4 value cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px]">
            {values.map((v, i) => (
              <div
                key={v.tag}
                style={{
                  padding: 32,
                  background: v.bg,
                  border: "none",
                  borderRadius: 28,
                }}
                className={`transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-md ${i % 2 === 1 ? "sm:translate-y-8" : ""}`}
              >
                <div style={{
                  width: 60, height: 60, borderRadius: 18,
                  background: "var(--white)", color: v.accent,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: 24, boxShadow: "var(--shadow-sm)",
                }}>
                  {v.icon}
                </div>
                <div style={{ fontSize: 11, fontWeight: 800, color: v.accent, letterSpacing: "0.18em", marginBottom: 8 }}>{v.tag}</div>
                <h3 style={{ fontSize: 28, fontWeight: 900, color: "var(--ink)", letterSpacing: "-0.03em", margin: "0 0 12px" }}>
                  {v.title}
                </h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.7, color: "var(--ink-2)", margin: 0 }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
