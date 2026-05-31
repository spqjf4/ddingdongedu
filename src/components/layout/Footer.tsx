export default function Footer() {
  return (
    <footer style={{ background: "var(--ink)", color: "rgba(255,255,255,0.7)", paddingTop: 80, paddingBottom: 32 }}>
      <div className="container">
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 60,
          paddingBottom: 56,
          borderBottom: "1px solid rgba(255,255,255,0.1)",
        }}>
          {/* Brand */}
          <div className="lg:col-span-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/logo-stacked.png" alt="띵동 어린이체육교실" style={{ height: 96, marginBottom: 24, filter: "brightness(1.05)" }} />
            <p style={{ fontSize: 14, lineHeight: 1.7, margin: 0, color: "rgba(255,255,255,0.6)" }}>
              아이들의 첫 운동 친구, 띵동 어린이체육교실은<br/>
              안전하고 즐거운 체육 교육을 만들어갑니다.
            </p>
            <div style={{ display: "flex", gap: 10, marginTop: 24 }}>
              {[
                { bg: "#FEE500", color: "#3C1E1E", label: "K", href: "https://pf.kakao.com" },
                { bg: "#03C75A", color: "#fff", label: "N", href: "https://blog.naver.com" },
                { bg: "#E4405F", color: "#fff", label: "IG", href: "https://instagram.com" },
                { bg: "#FF0000", color: "#fff", label: "YT", href: "https://youtube.com" },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                   style={{
                     width: 40, height: 40, borderRadius: 12,
                     background: s.bg, color: s.color,
                     display: "flex", alignItems: "center", justifyContent: "center",
                     fontWeight: 900, fontSize: 13,
                     transition: "transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
                   }}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Columns */}
          <div className="lg:col-span-2" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 24 }}>
            {[
              { h: "띵동 안내", items: ["브랜드 스토리", "교육 철학", "오시는 길", "제휴 문의"] },
              { h: "프로그램", items: ["방문 유아체육", "정규 체육교실", "특별활동·캠프", "1:1 코칭"] },
              { h: "소통 채널", items: ["공지사항", "학부모 알림장", "갤러리", "자주 묻는 질문"] },
              { h: "고객 지원", items: ["상담 신청", "개인정보처리방침", "이용약관", "저작권 정책"] },
            ].map((col) => (
              <div key={col.h}>
                <div style={{ fontWeight: 800, color: "var(--white)", fontSize: 14, marginBottom: 18, letterSpacing: "-0.01em" }}>
                  {col.h}
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                  {col.items.map((i) => (
                    <li key={i}>
                      <a href="#" style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", transition: "color 0.2s" }}>
                        {i}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Company info */}
        <div style={{ paddingTop: 36, fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.8 }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 20px", marginBottom: 12 }}>
            <span><strong style={{ color: "rgba(255,255,255,0.85)", fontWeight: 700 }}>상호</strong> 띵동 어린이체육교실</span>
            <span><strong style={{ color: "rgba(255,255,255,0.85)", fontWeight: 700 }}>대표</strong> 김원장</span>
            <span><strong style={{ color: "rgba(255,255,255,0.85)", fontWeight: 700 }}>사업자등록번호</strong> 123-45-67890</span>
            <span><strong style={{ color: "rgba(255,255,255,0.85)", fontWeight: 700 }}>통신판매업</strong> 제 2025-서울강남-0000호</span>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 20px", marginBottom: 12 }}>
            <span><strong style={{ color: "rgba(255,255,255,0.85)", fontWeight: 700 }}>주소</strong> 서울특별시 강남구 띵동로 7길 14, 2층</span>
            <span><strong style={{ color: "rgba(255,255,255,0.85)", fontWeight: 700 }}>전화</strong> 02-1234-5678</span>
            <span><strong style={{ color: "rgba(255,255,255,0.85)", fontWeight: 700 }}>이메일</strong> hello@ddingdong.kr</span>
            <span><strong style={{ color: "rgba(255,255,255,0.85)", fontWeight: 700 }}>운영시간</strong> 평일 09:00 - 18:00</span>
          </div>
          <div style={{
            display: "flex", justifyContent: "space-between", alignItems: "center",
            flexWrap: "wrap", gap: 12,
            marginTop: 28, paddingTop: 24, borderTop: "1px solid rgba(255,255,255,0.08)",
            fontSize: 12, color: "rgba(255,255,255,0.35)",
          }}>
            <span>© 2026 띵동 어린이체육교실. All rights reserved.</span>
            <span>Made with <span style={{ color: "var(--coral)" }}>♥</span> for happy kids</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
