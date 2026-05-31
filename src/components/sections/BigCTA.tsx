"use client";

import { scrollTo } from "@/lib/constants";

export default function BigCTA() {
  return (
    <section style={{ padding: "80px 0", background: "var(--white)" }}>
      <div className="container">
        <div style={{
          position: "relative",
          padding: "72px 64px",
          borderRadius: 40,
          background: "linear-gradient(135deg, #4f7cff 0%, #7a5cff 100%)",
          overflow: "hidden",
          color: "var(--white)",
        }} className="px-8 py-12 lg:px-[64px] lg:py-[72px]">
          {/* Decorative shapes */}
          <div style={{ position: "absolute", top: -100, right: -100, width: 380, height: 380, borderRadius: "50%", background: "rgba(255,143,122,0.35)", filter: "blur(40px)" }}></div>
          <div style={{ position: "absolute", bottom: -80, left: -60, width: 280, height: 280, borderRadius: "50%", background: "rgba(255,255,255,0.1)", filter: "blur(40px)" }}></div>
          <div style={{ position: "absolute", top: "50%", right: "15%", transform: "translateY(-50%)", fontSize: 220, opacity: 0.08, fontWeight: 900, letterSpacing: "-0.05em", lineHeight: 1 }} className="hidden lg:block">띵동!</div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-[40px] items-center">
            <div>
              <div style={{ fontSize: 13, fontWeight: 800, letterSpacing: "0.16em", color: "rgba(255,255,255,0.85)", marginBottom: 16 }}>
                FREE TRIAL CLASS
              </div>
              <h2 style={{
                fontSize: "clamp(34px, 4.2vw, 56px)",
                fontWeight: 900,
                letterSpacing: "-0.04em",
                lineHeight: 1.15,
                margin: "0 0 20px",
              }}>
                무료 체험 수업으로<br/>
                먼저 만나보세요
              </h2>
              <p style={{ fontSize: 18, lineHeight: 1.65, color: "rgba(255,255,255,0.85)", margin: "0 0 36px", maxWidth: 540 }}>
                40분 무료 체험 수업 후, 우리 아이에게 맞는지 천천히 결정하세요.
                지금 신청하면 첫 달 교재비 무료 혜택까지 드려요.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a 
                  href="tel:02-1234-5678" 
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    padding: "16px 28px", borderRadius: "var(--radius-pill)",
                    background: "var(--coral)", color: "var(--white)",
                    fontSize: 16, fontWeight: 800,
                    boxShadow: "var(--shadow-coral)",
                    transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  지금 전화 상담하기
                </a>
                <button 
                  onClick={() => scrollTo("contact")} 
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    padding: "16px 28px", borderRadius: "var(--radius-pill)",
                    background: "var(--white)", color: "var(--blue)",
                    fontSize: 16, fontWeight: 800,
                    transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; }}
                >
                  체험 신청서 작성
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                </button>
              </div>
            </div>

            {/* Right: benefit list */}
            <div style={{
              background: "rgba(255,255,255,0.12)",
              backdropFilter: "blur(12px)",
              padding: 32, borderRadius: 24,
              border: "1px solid rgba(255,255,255,0.2)",
            }}>
              <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: "0.16em", color: "var(--coral)", marginBottom: 16 }}>
                ★ 체험 신청 혜택
              </div>
              {[
                { t: "40분 1:1 체험 수업", s: "강사와 1:1로 진행" },
                { t: "체력 진단 리포트", s: "발달 단계 분석 포함" },
                { t: "첫 달 교재비 무료", s: "정식 등록 시 혜택" },
              ].map((b, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 14, padding: "14px 0", borderTop: i === 0 ? "none" : "1px solid rgba(255,255,255,0.15)" }}>
                  <div style={{ width: 28, height: 28, borderRadius: 8, background: "var(--coral)", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 800, color: "var(--white)", marginBottom: 2 }}>{b.t}</div>
                    <div style={{ fontSize: 13, color: "rgba(255,255,255,0.75)" }}>{b.s}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
