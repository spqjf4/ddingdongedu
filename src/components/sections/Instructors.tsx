export default function Instructors() {
  const teachers = [
    { name: "김도윤 선생님", role: "센터장 · 수석 코치", spec: "유아체육 · 발달운동", exp: "15년", tag: "센터장", initial: "도", color: "var(--coral)" },
    { name: "이서아 선생님", role: "유아체육 전문 코치", spec: "유아체육 · 기초체력", exp: "8년", tag: "유아 전문", initial: "서", color: "var(--blue)" },
    { name: "박지훈 선생님", role: "아동체육 코치", spec: "구기종목 · 매트운동", exp: "6년", tag: "아동 전문", initial: "지", color: "#1ea974" },
    { name: "최하늘 선생님", role: "체력관리 코치", spec: "자세교정 · 근력코칭", exp: "5년", tag: "1:1 코칭", initial: "하", color: "#e8a800" },
  ];

  return (
    <section id="instructors" className="section" style={{ background: "var(--white)" }}>
      <div className="container">
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 24, marginBottom: 64 }}>
          <div>
            <div style={{ fontSize: 13, fontWeight: 800, letterSpacing: "0.12em", color: "var(--ink-3)", marginBottom: 16 }}>OUR COACHES</div>
            <h2 style={{ fontSize: "clamp(34px, 4vw, 52px)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1.15, margin: 0, color: "var(--ink)" }}>
              아이를 진심으로 사랑하는<br/>
              <span style={{ color: "var(--coral)" }}>전문 강사진</span>이 함께해요
            </h2>
          </div>
          <p style={{ fontSize: 18, lineHeight: 1.65, color: "var(--ink-2)", maxWidth: 360, margin: 0 }}>
            체육교육 전공자 100%, 응급처치 자격 보유.
            정기 교수법 연수와 안전 교육으로 늘 성장해요.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px]">
          {teachers.map((t) => (
            <div
              key={t.name}
              style={{
                padding: 0, overflow: "hidden",
                border: "1px solid var(--line)",
                background: "var(--white)",
                borderRadius: 28,
              }}
            >
              {/* Photo area */}
              <div style={{
                height: 280,
                background: `linear-gradient(160deg, ${t.color}22 0%, ${t.color}66 100%)`,
                position: "relative",
                display: "flex", alignItems: "center", justifyContent: "center",
                overflow: "hidden",
              }}>
                {/* Pattern */}
                <div style={{ position: "absolute", top: -30, right: -30, width: 140, height: 140, borderRadius: "50%", background: "rgba(255,255,255,0.18)" }}></div>
                <div style={{ position: "absolute", bottom: -40, left: -40, width: 180, height: 180, borderRadius: "50%", background: "rgba(255,255,255,0.12)" }}></div>

                {/* Initial circle (placeholder for photo) */}
                <div style={{
                  width: 140, height: 140, borderRadius: "50%",
                  background: "var(--white)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 56, fontWeight: 900, color: t.color,
                  letterSpacing: "-0.04em",
                  boxShadow: "0 12px 32px rgba(50,67,92,0.16)",
                  position: "relative", zIndex: 1,
                }}>
                  {t.initial}
                </div>

                <span style={{
                  position: "absolute", top: 16, left: 16,
                  background: "var(--white)", color: t.color,
                  fontSize: 11, padding: "5px 11px", borderRadius: "var(--radius-pill)",
                  fontWeight: 800
                }}>{t.tag}</span>
              </div>

              {/* Info */}
              <div style={{ padding: 24 }}>
                <h3 style={{ fontSize: 20, fontWeight: 900, letterSpacing: "-0.02em", margin: "0 0 4px", color: "var(--ink)" }}>
                  {t.name}
                </h3>
                <div style={{ fontSize: 13, fontWeight: 700, color: t.color, marginBottom: 16 }}>
                  {t.role}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8, paddingTop: 16, borderTop: "1px solid var(--line)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13 }}>
                    <span style={{ color: "var(--ink-3)", fontWeight: 600 }}>전문 분야</span>
                    <span style={{ color: "var(--ink)", fontWeight: 700 }}>{t.spec}</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13 }}>
                    <span style={{ color: "var(--ink-3)", fontWeight: 600 }}>경력</span>
                    <span style={{ color: "var(--ink)", fontWeight: 700 }}>{t.exp}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
