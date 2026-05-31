export default function Reviews() {
  const reviews = [
    {
      role: "학부모",
      name: "이ㅇㅇ 어머님",
      sub: "7세 아들 · 1년 6개월 수강",
      title: "아이가 매주 띵동 수업을 기다려요.",
      body: "운동에 자신 없던 아이가 이제는 누구보다 먼저 매트로 달려가요. 선생님들이 아이 성격을 잘 파악하고 맞춤으로 지도해주셔서, 운동 자신감뿐 아니라 사회성도 함께 자랐어요.",
      stars: 5,
      accent: "var(--coral)",
    },
    {
      role: "유치원 원장",
      name: "햇살유치원 원장님",
      sub: "제휴 3년차 · 정규 출강",
      title: "학부모님들의 만족도가 최고예요.",
      body: "매주 보내주시는 활동 영상과 발달 코멘트 덕분에 학부모님들이 정말 좋아하세요. 원에서 따로 신경 쓸 일이 없고, 무엇보다 안전 관리가 철저해서 믿고 맡길 수 있어요.",
      stars: 5,
      accent: "var(--blue)",
    },
    {
      role: "학부모",
      name: "박ㅇㅇ 아버님",
      sub: "5세 딸 · 6개월 수강",
      title: "월간 리포트가 정말 꼼꼼해요.",
      body: "단순한 체육 수업이 아니라 진짜 교육이에요. 체력 측정 그래프, 발달 코멘트, 추천 가정 놀이까지 매월 받아보면 아이가 어떻게 자라고 있는지 한눈에 보여서 좋아요.",
      stars: 5,
      accent: "#1ea974",
    },
  ];

  return (
    <section id="reviews" className="section" style={{ background: "var(--paper)" }}>
      <div className="container">
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 24, marginBottom: 64 }}>
          <div>
            <div style={{ fontSize: 13, fontWeight: 800, letterSpacing: "0.12em", color: "var(--ink-3)", marginBottom: 16 }}>REAL STORIES</div>
            <h2 style={{ fontSize: "clamp(34px, 4vw, 52px)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1.15, margin: 0, color: "var(--ink)" }}>
              아이도, 부모님도, 원장님도<br/>
              <span style={{ color: "var(--blue)" }}>한 마음으로 추천</span>해요
            </h2>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
              {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="var(--yellow)" stroke="var(--yellow)" strokeWidth="1.5">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              ))}
            </div>
            <div>
              <div style={{ fontSize: 22, fontWeight: 900, color: "var(--ink)", letterSpacing: "-0.03em" }}>4.9 / 5.0</div>
              <div style={{ fontSize: 13, color: "var(--ink-3)", fontWeight: 600 }}>실제 후기 1,240건 기준</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[24px]">
          {reviews.map((r, i) => (
            <div
              key={i}
              style={{
                padding: 36,
                background: "var(--white)",
                position: "relative",
                display: "flex", flexDirection: "column",
                borderRadius: 28,
                border: "1px solid var(--line)"
              }}
              className="hover:-translate-y-1 hover:shadow-md transition-transform duration-300"
            >
              {/* Quote mark */}
              <div style={{
                position: "absolute", top: 24, right: 28,
                fontSize: 80, lineHeight: 0.7,
                color: r.accent, opacity: 0.18,
                fontFamily: "Georgia, serif",
                fontWeight: 900,
              }}>&quot;</div>

              <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 20 }}>
                {[1, 2, 3, 4, 5].map((idx) => (
                  <svg key={idx} width="16" height="16" viewBox="0 0 24 24" fill="var(--yellow)" stroke="var(--yellow)" strokeWidth="1.5">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                ))}
              </div>

              <h3 style={{ fontSize: 20, fontWeight: 900, letterSpacing: "-0.02em", margin: "0 0 16px", color: "var(--ink)", lineHeight: 1.35 }}>
                &quot;{r.title}&quot;
              </h3>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--ink-2)", margin: "0 0 28px", flex: 1 }}>
                {r.body}
              </p>

              <div style={{
                display: "flex", alignItems: "center", gap: 14,
                paddingTop: 20, borderTop: "1px solid var(--line)",
              }}>
                <div style={{
                  width: 44, height: 44, borderRadius: "50%",
                  background: `${r.accent}22`, color: r.accent,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontWeight: 900, fontSize: 16,
                }}>
                  {r.name.charAt(0)}
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 800, color: "var(--ink)" }}>{r.name}</div>
                  <div style={{ fontSize: 12, color: "var(--ink-3)", fontWeight: 600 }}>{r.sub}</div>
                </div>
                <span style={{ marginLeft: "auto", background: `${r.accent}15`, color: r.accent, fontSize: 11, padding: "5px 10px", borderRadius: "var(--radius-pill)", fontWeight: 700 }}>
                  {r.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
