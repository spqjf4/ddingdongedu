"use client";

export default function Footer() {
  return (
    <footer style={{ background: "var(--ink)", color: "rgba(255,255,255,0.7)", paddingTop: 56, paddingBottom: 24 }}>
      <div className="container">
        <div style={{
          display: "grid",
          gridTemplateColumns: "360px 1fr",
          gap: 40,
          paddingBottom: 40,
          borderBottom: "1px solid rgba(255,255,255,0.1)",
          maxWidth: "1100px",
        }}>
          {/* Left: Brand & Social */}
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/assets/logo-footer.png" 
              alt="띵동 어린이체육교실" 
              style={{ height: 96, marginBottom: 16, display: "block", filter: "brightness(1.05)" }} 
            />
            <p style={{ 
              fontSize: 16, 
              lineHeight: 1.7, 
              margin: "0 0 24px 0", 
              color: "rgba(255,255,255,0.8)",
              fontFamily: "var(--font-malang), sans-serif",
              wordBreak: "keep-all"
            }}>
              아이들의 첫 운동 친구, 띵동 어린이체육교실은<br/>
              안전하고 즐거운 체육 교육을 만들어갑니다.
            </p>
            
            <div style={{ display: "flex", gap: 12 }}>
              {[
                { 
                  label: "IG", 
                  href: "https://instagram.com", 
                  bg: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                    </svg>
                  )
                },
                { 
                  label: "NB", 
                  href: "https://blog.naver.com", 
                  bg: "#03C75A",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16.273 12.845 7.376 0H0v24h7.726V11.156L16.624 24H24V0h-7.727v12.845z"/>
                    </svg>
                  )
                },
                { 
                  label: "TEL", 
                  href: "tel:010-3046-5546", 
                  bg: "var(--coral)",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  )
                },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                   style={{
                     width: 42, height: 42, borderRadius: "50%",
                     background: s.bg, color: "#fff",
                     display: "flex", alignItems: "center", justifyContent: "center",
                     transition: "transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
                     boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
                   }}
                   onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; }}
                   onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right: Company Info (2-column layout) */}
          <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 2.2, alignSelf: "end" }}>
            <div style={{ fontWeight: 800, color: "var(--white)", fontSize: 14, marginBottom: 16, letterSpacing: "-0.01em" }}>
              사업자 정보
            </div>
            <div style={{ 
              display: "grid", 
              gridTemplateColumns: "auto 1fr", 
              gap: "0 60px" 
            }}>
              {/* Column 1: 4 items */}
              <div style={{ display: "flex", flexDirection: "column", minWidth: "max-content" }}>
                <span><strong style={{ color: "rgba(255,255,255,0.85)", fontWeight: 700, marginRight: 8 }}>상호</strong> 띵동 어린이체육교실</span>
                <span><strong style={{ color: "rgba(255,255,255,0.85)", fontWeight: 700, marginRight: 8 }}>대표</strong> 채관영</span>
                <span><strong style={{ color: "rgba(255,255,255,0.85)", fontWeight: 700, marginRight: 8 }}>사업자등록번호</strong> 665-96-01508</span>
                <span><strong style={{ color: "rgba(255,255,255,0.85)", fontWeight: 700, marginRight: 8 }}>주소</strong> 서울특별시 강남구 띵동로 7길 14, 2층</span>
              </div>
              {/* Column 2: 3 items */}
              <div style={{ display: "flex", flexDirection: "column", minWidth: "max-content" }}>
                <span><strong style={{ color: "rgba(255,255,255,0.85)", fontWeight: 700, marginRight: 8 }}>전화</strong> 010-3046-5546</span>
                <span><strong style={{ color: "rgba(255,255,255,0.85)", fontWeight: 700, marginRight: 8 }}>이메일</strong> spqjf4@naver.com</span>
                <span><strong style={{ color: "rgba(255,255,255,0.85)", fontWeight: 700, marginRight: 8 }}>운영시간</strong> 평일 09:00 - 18:00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          flexWrap: "wrap", gap: 12,
          paddingTop: 20,
          fontSize: 12, color: "rgba(255,255,255,0.35)",
        }}>
          <span>© 2026 띵동 어린이체육교실. All rights reserved.</span>
          <span>Made with <span style={{ color: "var(--coral)" }}>♥</span> for happy kids</span>
        </div>
      </div>
    </footer>
  );
}
