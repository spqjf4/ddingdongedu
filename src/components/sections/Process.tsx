export default function Process() {
  const steps = [
    { n: "01", title: "상담 신청", desc: "전화·카카오톡·문의 폼으로 편하게 연락주세요. 24시간 이내 답변드려요.", accent: "var(--coral)" },
    { n: "02", title: "방문 미팅", desc: "센터 또는 기관에 직접 방문해 환경을 둘러보고, 아이의 상태와 목표를 상담해요.", accent: "var(--blue)" },
    { n: "03", title: "커리큘럼 협의", desc: "아이의 연령·체력·관심사에 맞춰 8주~24주 맞춤 커리큘럼을 함께 설계해요.", accent: "#1ea974" },
    { n: "04", title: "수업 시작", desc: "첫 수업부터 마지막 수업까지, 매일 알림장과 영상으로 아이의 성장을 함께해요.", accent: "#e8a800" },
  ];

  return (
    <section className="section" style={{ background: "var(--white)" }}>
      <div className="container">
        <div style={{ alignItems: "center", textAlign: "center", marginBottom: 64 }}>
          <div style={{ fontSize: 13, fontWeight: 800, letterSpacing: "0.12em", color: "var(--ink-3)", marginBottom: 16 }}>HOW IT WORKS</div>
          <h2 style={{ fontSize: "clamp(34px, 4vw, 52px)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1.15, margin: 0, color: "var(--ink)" }}>
            <span style={{ color: "var(--coral)" }}>4단계</span>로 끝나는 간편한 신청
          </h2>
          <p style={{ fontSize: 18, lineHeight: 1.65, color: "var(--ink-2)", marginTop: 24, maxWidth: 640, marginInline: "auto" }}>
            복잡하지 않아요. 첫 상담부터 수업 시작까지 평균 5일이면 충분해요.
          </p>
        </div>

        <div style={{ position: "relative" }}>
          {/* Connecting line (hidden on mobile) */}
          <div style={{
            position: "absolute", top: 38, left: "12%", right: "12%",
            height: 2, borderTop: "2px dashed var(--line-2)",
            zIndex: 0,
          }} className="hidden md:block" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[40px] lg:gap-[24px] relative z-10">
            {steps.map((s, i) => (
              <div key={s.n} style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                <div style={{
                  width: 76, height: 76, borderRadius: "50%",
                  background: "var(--white)",
                  border: `3px solid ${s.accent}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: 24, position: "relative",
                }}>
                  <span style={{ fontSize: 26, fontWeight: 900, color: s.accent, letterSpacing: "-0.04em" }}>
                    {s.n}
                  </span>
                  <span style={{
                    position: "absolute", top: -6, right: -6,
                    width: 24, height: 24, borderRadius: "50%",
                    background: s.accent, color: "var(--white)",
                    fontSize: 12, fontWeight: 900,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    {i + 1}
                  </span>
                </div>
                <h3 style={{ fontSize: 22, fontWeight: 900, letterSpacing: "-0.03em", margin: "0 0 12px", color: "var(--ink)" }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.7, color: "var(--ink-2)", margin: 0, maxWidth: 240 }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
