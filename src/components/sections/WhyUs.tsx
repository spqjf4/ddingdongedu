"use client";

export default function WhyUs() {
  const features = [
    { n: "01", title: "안전 최우선", desc: "교실 내 충격 흡수 매트, 보호 장비, 응급 대응 매뉴얼까지. 보험 가입은 기본이에요.", icon: "🛡️" },
    { n: "02", title: "연령별 커리큘럼", desc: "발달 단계에 맞춘 만 3세부터 초등 6학년까지 6단계 맞춤 커리큘럼.", icon: "📚" },
    { n: "03", title: "체육 전공 강사진", desc: "체육교육·생활체육 전공 졸업자 100%. 정기 안전·교수법 연수 진행.", icon: "🎓" },
    { n: "04", title: "학부모 알림장", desc: "수업 후 활동 영상과 사진, 발달 코멘트를 매일 카카오톡으로 받아보세요.", icon: "💬" },
    { n: "05", title: "월별 성장 리포트", desc: "체력 측정, 운동 발달 그래프, 강사 코멘트가 담긴 종합 리포트 제공.", icon: "📊" },
    { n: "06", title: "제휴 기관 200+", desc: "서울·경기 200개 이상 유치원·어린이집과 함께하는 검증된 노하우.", icon: "🤝" },
  ];

  return (
    <section className="section" style={{ background: "var(--ink)", color: "var(--white)", position: "relative", overflow: "hidden" }}>
      {/* Decorative halos */}
      <div style={{ position: "absolute", top: -80, right: -120, width: 400, height: 400, background: "rgba(255,143,122,0.25)", filter: "blur(80px)", borderRadius: "50%" }} />
      <div style={{ position: "absolute", bottom: -100, left: -80, width: 360, height: 360, background: "rgba(79,124,255,0.3)", filter: "blur(80px)", borderRadius: "50%" }} />

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div style={{ alignItems: "center", textAlign: "center", marginBottom: 64 }}>
          <div style={{ fontSize: 13, fontWeight: 800, letterSpacing: "0.12em", color: "var(--coral)", marginBottom: 16 }}>WHY DDINGDONG</div>
          <h2 style={{ fontSize: "clamp(34px, 4vw, 52px)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1.15, margin: 0, color: "var(--white)" }}>
            띵동이 사랑받는 <span style={{ color: "var(--coral)" }}>6가지 이유</span>
          </h2>
          <p style={{ fontSize: 18, lineHeight: 1.65, color: "rgba(255,255,255,0.65)", marginTop: 24, maxWidth: 640, marginInline: "auto" }}>
            안전부터 소통까지, 학부모님과 원장님이 안심하고 맡길 수 있도록.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px]" style={{ background: "rgba(255,255,255,0.08)", borderRadius: 28, overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)" }}>
          {features.map((f) => (
            <div
              key={f.n}
              style={{
                padding: 40,
                background: "var(--ink)",
                transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                cursor: "default",
                display: "flex", flexDirection: "column",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#3d5170"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "var(--ink)"; }}
            >
              <div style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                marginBottom: 28,
              }}>
                <div style={{
                  width: 56, height: 56, borderRadius: 16,
                  background: "rgba(255,143,122,0.15)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 24,
                }}>
                  {f.icon}
                </div>
                <div style={{
                  fontSize: 13, fontWeight: 900,
                  color: "rgba(255,143,122,0.7)",
                  letterSpacing: "0.16em",
                  fontVariantNumeric: "tabular-nums",
                }}>
                  {f.n}
                </div>
              </div>
              <h3 style={{ fontSize: 22, fontWeight: 900, letterSpacing: "-0.03em", margin: "0 0 12px", color: "var(--white)" }}>
                {f.title}
              </h3>
              <p style={{ fontSize: 14.5, lineHeight: 1.7, color: "rgba(255,255,255,0.65)", margin: 0 }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
