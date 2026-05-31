"use client";

import { scrollTo } from "@/lib/constants";

export default function Programs() {
  const programs = [
    {
      tag: "인기",
      title: "방문 유아체육",
      sub: "유치원·어린이집 정규 출강",
      desc: "검증된 강사가 직접 방문해 진행하는 주 1~2회 정규 체육 수업. 매트, 후프, 콘 등 안전한 교구로 진행해요.",
      points: ["주 1~2회 정규 수업", "연령별 맞춤 커리큘럼", "전문 강사 1:1 매칭"],
      age: "만 3~7세",
      accent: "var(--coral)",
      bg: "linear-gradient(135deg, #ffd9d0 0%, #ffb4a4 100%)",
    },
    {
      tag: "NEW",
      title: "정규 체육교실",
      sub: "센터 그룹 수업",
      desc: "띵동 센터에서 진행하는 소그룹 체육 수업. 또래 친구들과 함께 운동 자신감과 사회성을 함께 키워요.",
      points: ["소그룹 8명 이하", "맞춤형 체력 진단", "월별 성장 리포트"],
      age: "만 5~10세",
      accent: "var(--blue)",
      bg: "linear-gradient(135deg, #c8d5ff 0%, #95acff 100%)",
    },
    {
      tag: "이벤트",
      title: "특별활동·운동회",
      sub: "체육 캠프 & 발표회",
      desc: "계절별 체육 캠프, 미니 운동회, 학기말 발표회 등 특별한 추억을 만드는 이벤트 프로그램을 운영해요.",
      points: ["봄·가을 체육 캠프", "미니 운동회 기획", "발표회·시연회"],
      age: "전 연령",
      accent: "#1ea974",
      bg: "linear-gradient(135deg, #c5f0d8 0%, #7fd9a8 100%)",
    },
    {
      tag: "맞춤",
      title: "1:1 코칭",
      sub: "개별 체력 관리",
      desc: "내 아이의 체력과 발달 단계에 딱 맞춘 1:1 맞춤 코칭. 자세 교정, 운동 능력 향상까지 책임져요.",
      points: ["주 1~3회 자유 선택", "자세 분석·교정", "학부모 영상 리포트"],
      age: "만 4~13세",
      accent: "#e8a800",
      bg: "linear-gradient(135deg, #fff0b8 0%, #ffd964 100%)",
    },
  ];

  return (
    <section id="programs" className="section" style={{ background: "var(--paper)", position: "relative" }}>
      <div className="container">
        <div style={{ alignItems: "center", textAlign: "center", marginBottom: 64 }}>
          <div style={{ fontSize: 13, fontWeight: 800, letterSpacing: "0.12em", color: "var(--ink-3)", marginBottom: 16 }}>PROGRAMS</div>
          <h2 style={{ fontSize: "clamp(34px, 4vw, 52px)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1.15, margin: 0, color: "var(--ink)" }}>
            우리 아이에게 딱 맞는 <span style={{ color: "var(--blue)" }}>체육 수업</span>을 찾아보세요
          </h2>
          <p style={{ fontSize: 18, lineHeight: 1.65, color: "var(--ink-2)", marginTop: 24, maxWidth: 640, marginInline: "auto" }}>
            연령과 목적에 맞게 4가지 프로그램을 운영해요. 처음이라면 무료 체험부터 시작해보세요.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px]">
          {programs.map((p, i) => (
            <div
              key={p.title}
              style={{
                padding: 0,
                overflow: "hidden",
                border: "1px solid var(--line)",
                background: "var(--white)",
                display: "flex", flexDirection: "column",
                borderRadius: 28,
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
              className="hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Image area */}
              <div style={{
                position: "relative",
                height: 200,
                background: p.bg,
                display: "flex", alignItems: "center", justifyContent: "center",
                overflow: "hidden",
              }}>
                {/* Decorative shapes */}
                <div style={{ position: "absolute", top: -40, right: -40, width: 160, height: 160, borderRadius: "50%", background: "rgba(255,255,255,0.18)" }}></div>
                <div style={{ position: "absolute", bottom: -60, left: -30, width: 200, height: 200, borderRadius: "50%", background: "rgba(255,255,255,0.12)" }}></div>

                <span style={{
                  position: "absolute", top: 20, left: 20,
                  background: "var(--white)", color: p.accent,
                  fontWeight: 800, fontSize: 12, letterSpacing: "0.05em",
                  padding: "6px 14px", borderRadius: "var(--radius-pill)"
                }}>{p.tag}</span>

                <span style={{
                  position: "absolute", top: 20, right: 20,
                  padding: "6px 14px", borderRadius: "var(--radius-pill)",
                  background: "rgba(50,67,92,0.85)", color: "var(--white)",
                  fontWeight: 700, fontSize: 12,
                }}>{p.age}</span>

                {/* Big icon character placeholder */}
                <div style={{
                  fontSize: 80, fontWeight: 900, color: "rgba(255,255,255,0.9)",
                  letterSpacing: "-0.04em", textShadow: "0 8px 16px rgba(50,67,92,0.15)",
                }}>
                  0{i + 1}
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: 32, flex: 1, display: "flex", flexDirection: "column" }}>
                <div style={{ fontSize: 12, fontWeight: 800, color: p.accent, letterSpacing: "0.12em", marginBottom: 8 }}>
                  {p.sub.toUpperCase()}
                </div>
                <h3 style={{ fontSize: 26, fontWeight: 900, letterSpacing: "-0.03em", margin: "0 0 12px", color: "var(--ink)" }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--ink-2)", margin: "0 0 20px", flex: 1 }}>
                  {p.desc}
                </p>

                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px", display: "flex", flexDirection: "column", gap: 8 }}>
                  {p.points.map((pt) => (
                    <li key={pt} style={{ fontSize: 14, color: "var(--ink-2)", display: "flex", alignItems: "center", gap: 10, fontWeight: 600 }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={p.accent} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      {pt}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => scrollTo("contact")}
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    padding: "16px 22px", borderRadius: 16,
                    background: "var(--paper)", color: "var(--ink)",
                    fontWeight: 800, fontSize: 14,
                    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                    width: "100%",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = p.accent; e.currentTarget.style.color = "#fff"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "var(--paper)"; e.currentTarget.style.color = "var(--ink)"; }}
                >
                  자세히 보기 & 상담 신청
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
