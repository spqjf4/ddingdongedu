"use client";

export default function Contact() {
  return (
    <section id="contact" className="section" style={{ background: "var(--white)" }}>
      <div className="container">
        <div style={{ alignItems: "center", textAlign: "center", marginBottom: 64 }}>
          <div style={{ fontSize: 13, fontWeight: 800, letterSpacing: "0.12em", color: "var(--ink-3)", marginBottom: 16 }}>CONTACT US</div>
          <h2 style={{ fontSize: "clamp(34px, 4vw, 52px)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1.15, margin: 0, color: "var(--ink)" }}>
            궁금하신 점이 있으신가요?
          </h2>
          <p style={{ fontSize: 18, lineHeight: 1.65, color: "var(--ink-2)", marginTop: 24, maxWidth: 640, marginInline: "auto" }}>
            언제든 편하게 문의해주세요. 친절하게 답변드릴게요.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-[32px] items-stretch">
          {/* Info card */}
          <div style={{
            padding: 40,
            borderRadius: 28,
            background: "var(--ink)",
            color: "var(--white)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}>
            <div style={{ fontSize: 13, fontWeight: 800, letterSpacing: "0.16em", color: "var(--coral)", marginBottom: 24 }}>
              CONTACT INFO
            </div>
            
            <h3 style={{ fontSize: "clamp(28px, 3vw, 36px)", fontWeight: 900, letterSpacing: "-0.03em", marginBottom: 40, lineHeight: 1.2 }}>
              아이들의 즐거운 성장을 위해<br/>
              <span style={{ color: "var(--yellow)" }}>띵동</span>이 기다리고 있습니다.
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[32px]">
              {[
                { l: "전화 상담", v: "010-3046-5546", href: "tel:010-3046-5546" },
                { l: "이메일 문의", v: "spqjf4@naver.com", href: "mailto:spqjf4@naver.com" },
                { l: "운영 시간", v: "평일 09:00 - 18:00", desc: "주말 및 공휴일 휴무" },
                { l: "카카오톡", v: "@띵동체육교실", href: "https://pf.kakao.com" },
              ].map((c) => (
                <div key={c.l}>
                  <div style={{ fontSize: 12, fontWeight: 800, color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em", marginBottom: 8 }}>
                    {c.l.toUpperCase()}
                  </div>
                  {c.href ? (
                    <a href={c.href} style={{ fontSize: 20, fontWeight: 800, color: "var(--white)", display: "block", transition: "color 0.2s" }} className="hover:text-[var(--coral)]">
                      {c.v}
                    </a>
                  ) : (
                    <div style={{ fontSize: 20, fontWeight: 800, color: "var(--white)" }}>
                      {c.v}
                    </div>
                  )}
                  {c.desc && <div style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", marginTop: 4 }}>{c.desc}</div>}
                </div>
              ))}
            </div>

            <div style={{ marginTop: 48, paddingTop: 32, borderTop: "1px solid rgba(255,255,255,0.1)" }}>
              <a 
                href="tel:010-3046-5546"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 12,
                  padding: "18px 32px", borderRadius: "var(--radius-pill)",
                  background: "var(--coral)", color: "var(--white)",
                  fontSize: 16, fontWeight: 800,
                  boxShadow: "var(--shadow-coral)",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.filter = "brightness(1.1)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.filter = "none"; }}
              >
                지금 바로 전화 상담하기
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </a>
            </div>
          </div>

          {/* Map placeholder */}
          <div style={{
            minHeight: 400,
            borderRadius: 28, overflow: "hidden",
            background: "linear-gradient(135deg, #eef2ff 0%, #dde6ff 100%)",
            position: "relative",
            border: "1px solid var(--line)",
          }}>
            {/* Map grid pattern */}
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: "absolute", inset: 0, opacity: 0.45 }}>
              <defs>
                <pattern id="mapgrid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(79,124,255,0.25)" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#mapgrid)" />
              <path d="M 0 50 Q 30 45 50 50 T 100 50" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="14" />
              <path d="M 50 0 L 50 100" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="8" />
            </svg>

            {/* Pin */}
            <div style={{
              position: "absolute", top: "50%", left: "50%",
              transform: "translate(-50%, -100%)",
            }} className="animate-bounce-soft">
              <div style={{
                width: 60, height: 60, borderRadius: "50% 50% 50% 0",
                background: "var(--coral)",
                transform: "rotate(-45deg)",
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 12px 28px rgba(255,143,122,0.5)",
              }}>
                <div style={{
                  transform: "rotate(45deg)",
                  width: 28, height: 28, borderRadius: "50%",
                  background: "var(--white)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontWeight: 900, color: "var(--coral)", fontSize: 16,
                }}>띵</div>
              </div>
            </div>

            <div style={{
              position: "absolute", bottom: 20, left: 20, right: 20,
              padding: "20px 24px",
              background: "var(--white)",
              borderRadius: 20,
              boxShadow: "var(--shadow-lg)",
              display: "flex", justifyContent: "space-between", alignItems: "center",
              flexWrap: "wrap", gap: 16,
            }}>
              <div>
                <div style={{ fontSize: 15, fontWeight: 800, color: "var(--ink)" }}>띵동 어린이체육교실</div>
                <div style={{ fontSize: 13, color: "var(--ink-3)", marginTop: 4 }}>서울 강남구 띵동로 7길 14, 2층</div>
              </div>
              <a href="https://map.naver.com" target="_blank" rel="noopener noreferrer" style={{
                fontSize: 13, fontWeight: 800, color: "var(--blue)", background: "var(--blue-bg)",
                padding: "10px 18px", borderRadius: "var(--radius-pill)",
                transition: "all 0.2s"
              }} className="hover:bg-[var(--blue)] hover:text-white">
                지도 보기 →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
