// sections-b.jsx — Instructors, Facility, Process, Reviews, BigCTA, Contact

// ─────────────────────────────────────────────────────────────
// Instructors
// ─────────────────────────────────────────────────────────────
function Instructors() {
  const teachers = [
    { name: '김도윤 선생님', role: '센터장 · 수석 코치', spec: '유아체육 · 발달운동', exp: '15년', tag: '센터장', initial: '도', color: 'var(--coral)' },
    { name: '이서아 선생님', role: '유아체육 전문 코치', spec: '유아체육 · 기초체력', exp: '8년', tag: '유아 전문', initial: '서', color: 'var(--blue)' },
    { name: '박지훈 선생님', role: '아동체육 코치', spec: '구기종목 · 매트운동', exp: '6년', tag: '아동 전문', initial: '지', color: '#1ea974' },
    { name: '최하늘 선생님', role: '체력관리 코치', spec: '자세교정 · 근력코칭', exp: '5년', tag: '1:1 코칭', initial: '하', color: '#e8a800' },
  ];

  return (
    <section id="instructors" className="section" style={{ background: 'var(--white)' }}>
      <div className="container">
        <div className="section-head" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24 }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 16 }}>OUR COACHES</div>
            <h2 className="section-title">
              아이를 진심으로 사랑하는<br/>
              <span className="accent-coral">전문 강사진</span>이 함께해요
            </h2>
          </div>
          <p className="section-sub" style={{ maxWidth: 360, margin: 0 }}>
            체육교육 전공자 100%, 응급처치 자격 보유.
            정기 교수법 연수와 안전 교육으로 늘 성장해요.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }} className="teachers-grid">
          {teachers.map((t) => (
            <div
              key={t.name}
              className="card"
              style={{
                padding: 0, overflow: 'hidden',
                border: '1px solid var(--line)',
              }}
            >
              {/* Photo area */}
              <div style={{
                height: 280,
                background: `linear-gradient(160deg, ${t.color}22 0%, ${t.color}66 100%)`,
                position: 'relative',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                overflow: 'hidden',
              }}>
                {/* Pattern */}
                <div style={{ position: 'absolute', top: -30, right: -30, width: 140, height: 140, borderRadius: '50%', background: 'rgba(255,255,255,0.18)' }}></div>
                <div style={{ position: 'absolute', bottom: -40, left: -40, width: 180, height: 180, borderRadius: '50%', background: 'rgba(255,255,255,0.12)' }}></div>

                {/* Initial circle (placeholder for photo) */}
                <div style={{
                  width: 140, height: 140, borderRadius: '50%',
                  background: 'var(--white)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 56, fontWeight: 900, color: t.color,
                  letterSpacing: '-0.04em',
                  boxShadow: '0 12px 32px rgba(50,67,92,0.16)',
                  position: 'relative', zIndex: 1,
                }}>
                  {t.initial}
                </div>

                <span className="chip" style={{
                  position: 'absolute', top: 16, left: 16,
                  background: 'var(--white)', color: t.color,
                  fontSize: 11, padding: '5px 11px',
                }}>{t.tag}</span>
              </div>

              {/* Info */}
              <div style={{ padding: 24 }}>
                <h3 style={{ fontSize: 20, fontWeight: 900, letterSpacing: '-0.02em', margin: '0 0 4px', color: 'var(--ink)' }}>
                  {t.name}
                </h3>
                <div style={{ fontSize: 13, fontWeight: 700, color: t.color, marginBottom: 16 }}>
                  {t.role}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8, paddingTop: 16, borderTop: '1px solid var(--line)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13 }}>
                    <span style={{ color: 'var(--ink-3)', fontWeight: 600 }}>전문 분야</span>
                    <span style={{ color: 'var(--ink)', fontWeight: 700 }}>{t.spec}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13 }}>
                    <span style={{ color: 'var(--ink-3)', fontWeight: 600 }}>경력</span>
                    <span style={{ color: 'var(--ink)', fontWeight: 700 }}>{t.exp}</span>
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

// ─────────────────────────────────────────────────────────────
// Facility / Gallery
// ─────────────────────────────────────────────────────────────
function Facility() {
  // gallery placeholders with gradient backgrounds + emoji + caption
  const tiles = [
    { caption: '대형 체육 매트존', tag: '매트 운동',     bg: 'linear-gradient(135deg, #ffd9d0 0%, #ff8f7a 100%)', span: 'large' },
    { caption: '구기·도구 공간',   tag: '구기 종목',     bg: 'linear-gradient(135deg, #c8d5ff 0%, #4f7cff 100%)' },
    { caption: '균형감각 트랙',     tag: '균형·점프',     bg: 'linear-gradient(135deg, #fff0b8 0%, #ffd964 100%)' },
    { caption: '암벽 클라이밍',     tag: '클라이밍',      bg: 'linear-gradient(135deg, #c5f0d8 0%, #1ea974 100%)' },
    { caption: '키즈 휴게실',       tag: '쉼터',          bg: 'linear-gradient(135deg, #ffd9d0 0%, #ffb4a4 100%)' },
    { caption: '학부모 대기실',     tag: '대기 공간',     bg: 'linear-gradient(135deg, #e2dcff 0%, #9c8aff 100%)' },
  ];

  return (
    <section id="facility" className="section" style={{ background: 'var(--paper)' }}>
      <div className="container">
        <div className="section-head" style={{ alignItems: 'center', textAlign: 'center' }}>
          <div className="eyebrow" style={{ alignSelf: 'center' }}>FACILITY & GALLERY</div>
          <h2 className="section-title">
            안전하고 즐거운 <span className="accent-blue">체육 공간</span>에서
          </h2>
          <p className="section-sub" style={{ textAlign: 'center' }}>
            전용 매트, 충격 흡수 바닥재, CCTV와 비상 키트까지. 마음껏 뛰놀 수 있는 환경을 갖췄어요.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gridAutoRows: '220px',
            gap: 16,
          }}
          className="facility-grid"
        >
          {tiles.map((t, i) => (
            <div
              key={i}
              style={{
                gridColumn: t.span === 'large' ? 'span 2' : 'span 1',
                gridRow: t.span === 'large' ? 'span 2' : 'span 1',
                borderRadius: 24,
                background: t.bg,
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.4s var(--ease)',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = 'var(--shadow-lg)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              {/* Decorative blobs */}
              <div style={{ position: 'absolute', top: -40, right: -40, width: 180, height: 180, borderRadius: '50%', background: 'rgba(255,255,255,0.18)' }}></div>
              <div style={{ position: 'absolute', bottom: -50, left: -30, width: 160, height: 160, borderRadius: '50%', background: 'rgba(255,255,255,0.12)' }}></div>

              {/* Tag */}
              <span style={{
                position: 'absolute', top: 16, left: 16,
                padding: '6px 12px', borderRadius: 'var(--radius-pill)',
                background: 'rgba(255,255,255,0.85)', color: 'var(--ink)',
                fontSize: 12, fontWeight: 800,
                backdropFilter: 'blur(8px)',
              }}>{t.tag}</span>

              {/* Caption */}
              <div style={{
                position: 'absolute', bottom: 20, left: 20, right: 20,
                color: 'var(--white)',
                fontSize: t.span === 'large' ? 26 : 18,
                fontWeight: 900,
                letterSpacing: '-0.03em',
                textShadow: '0 2px 12px rgba(50,67,92,0.4)',
              }}>
                {t.caption}
              </div>

              {/* View icon */}
              <div style={{
                position: 'absolute', top: 16, right: 16,
                width: 36, height: 36, borderRadius: 12,
                background: 'rgba(255,255,255,0.25)',
                backdropFilter: 'blur(8px)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--white)',
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M7 7h10v10"/></svg>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <button onClick={() => scrollTo('contact')} className="btn btn-ghost">
            현장 방문 예약하기
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </button>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// Process — 4 steps
// ─────────────────────────────────────────────────────────────
function Process() {
  const steps = [
    { n: '01', title: '상담 신청', desc: '전화·카카오톡·문의 폼으로 편하게 연락주세요. 24시간 이내 답변드려요.', accent: 'var(--coral)' },
    { n: '02', title: '방문 미팅', desc: '센터 또는 기관에 직접 방문해 환경을 둘러보고, 아이의 상태와 목표를 상담해요.', accent: 'var(--blue)' },
    { n: '03', title: '커리큘럼 협의', desc: '아이의 연령·체력·관심사에 맞춰 8주~24주 맞춤 커리큘럼을 함께 설계해요.', accent: '#1ea974' },
    { n: '04', title: '수업 시작', desc: '첫 수업부터 마지막 수업까지, 매일 알림장과 영상으로 아이의 성장을 함께해요.', accent: '#e8a800' },
  ];

  return (
    <section className="section" style={{ background: 'var(--white)' }}>
      <div className="container">
        <div className="section-head" style={{ alignItems: 'center', textAlign: 'center' }}>
          <div className="eyebrow" style={{ alignSelf: 'center' }}>HOW IT WORKS</div>
          <h2 className="section-title">
            <span className="accent-coral">4단계</span>로 끝나는 간편한 신청
          </h2>
          <p className="section-sub" style={{ textAlign: 'center' }}>
            복잡하지 않아요. 첫 상담부터 수업 시작까지 평균 5일이면 충분해요.
          </p>
        </div>

        <div style={{ position: 'relative' }}>
          {/* Connecting line */}
          <div style={{
            position: 'absolute', top: 38, left: '12%', right: '12%',
            height: 2, borderTop: '2px dashed var(--line-2)',
            zIndex: 0,
          }} className="process-line" />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, position: 'relative', zIndex: 1 }} className="process-grid">
            {steps.map((s, i) => (
              <div key={s.n} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <div style={{
                  width: 76, height: 76, borderRadius: '50%',
                  background: 'var(--white)',
                  border: `3px solid ${s.accent}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 24, position: 'relative',
                }}>
                  <span style={{ fontSize: 26, fontWeight: 900, color: s.accent, letterSpacing: '-0.04em' }}>
                    {s.n}
                  </span>
                  <span style={{
                    position: 'absolute', top: -6, right: -6,
                    width: 24, height: 24, borderRadius: '50%',
                    background: s.accent, color: 'var(--white)',
                    fontSize: 12, fontWeight: 900,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    {i + 1}
                  </span>
                </div>
                <h3 style={{ fontSize: 22, fontWeight: 900, letterSpacing: '-0.03em', margin: '0 0 12px', color: 'var(--ink)' }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.7, color: 'var(--ink-2)', margin: 0, maxWidth: 240 }}>
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

// ─────────────────────────────────────────────────────────────
// Reviews
// ─────────────────────────────────────────────────────────────
function Reviews() {
  const reviews = [
    {
      role: '학부모',
      name: '이ㅇㅇ 어머님',
      sub: '7세 아들 · 1년 6개월 수강',
      title: '아이가 매주 띵동 수업을 기다려요.',
      body: '운동에 자신 없던 아이가 이제는 누구보다 먼저 매트로 달려가요. 선생님들이 아이 성격을 잘 파악하고 맞춤으로 지도해주셔서, 운동 자신감뿐 아니라 사회성도 함께 자랐어요.',
      stars: 5,
      accent: 'var(--coral)',
    },
    {
      role: '유치원 원장',
      name: '햇살유치원 원장님',
      sub: '제휴 3년차 · 정규 출강',
      title: '학부모님들의 만족도가 최고예요.',
      body: '매주 보내주시는 활동 영상과 발달 코멘트 덕분에 학부모님들이 정말 좋아하세요. 원에서 따로 신경 쓸 일이 없고, 무엇보다 안전 관리가 철저해서 믿고 맡길 수 있어요.',
      stars: 5,
      accent: 'var(--blue)',
    },
    {
      role: '학부모',
      name: '박ㅇㅇ 아버님',
      sub: '5세 딸 · 6개월 수강',
      title: '월간 리포트가 정말 꼼꼼해요.',
      body: '단순한 체육 수업이 아니라 진짜 교육이에요. 체력 측정 그래프, 발달 코멘트, 추천 가정 놀이까지 매월 받아보면 아이가 어떻게 자라고 있는지 한눈에 보여서 좋아요.',
      stars: 5,
      accent: '#1ea974',
    },
  ];

  return (
    <section id="reviews" className="section" style={{ background: 'var(--paper)' }}>
      <div className="container">
        <div className="section-head" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24 }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 16 }}>REAL STORIES</div>
            <h2 className="section-title">
              아이도, 부모님도, 원장님도<br/>
              <span className="accent-blue">한 마음으로 추천</span>해요
            </h2>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              {[1,2,3,4,5].map((i) => (
                <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="var(--yellow)" stroke="var(--yellow)" strokeWidth="1.5">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              ))}
            </div>
            <div>
              <div style={{ fontSize: 22, fontWeight: 900, color: 'var(--ink)', letterSpacing: '-0.03em' }}>4.9 / 5.0</div>
              <div style={{ fontSize: 13, color: 'var(--ink-3)', fontWeight: 600 }}>실제 후기 1,240건 기준</div>
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }} className="reviews-grid">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="card"
              style={{
                padding: 36,
                background: 'var(--white)',
                position: 'relative',
                display: 'flex', flexDirection: 'column',
              }}
            >
              {/* Quote mark */}
              <div style={{
                position: 'absolute', top: 24, right: 28,
                fontSize: 80, lineHeight: 0.7,
                color: r.accent, opacity: 0.18,
                fontFamily: 'Georgia, serif',
                fontWeight: 900,
              }}>"</div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 20 }}>
                {[1,2,3,4,5].map((i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="var(--yellow)" stroke="var(--yellow)" strokeWidth="1.5">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                ))}
              </div>

              <h3 style={{ fontSize: 20, fontWeight: 900, letterSpacing: '-0.02em', margin: '0 0 16px', color: 'var(--ink)', lineHeight: 1.35 }}>
                "{r.title}"
              </h3>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--ink-2)', margin: '0 0 28px', flex: 1 }}>
                {r.body}
              </p>

              <div style={{
                display: 'flex', alignItems: 'center', gap: 14,
                paddingTop: 20, borderTop: '1px solid var(--line)',
              }}>
                <div style={{
                  width: 44, height: 44, borderRadius: '50%',
                  background: `${r.accent}22`, color: r.accent,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 900, fontSize: 16,
                }}>
                  {r.name.charAt(0)}
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 800, color: 'var(--ink)' }}>{r.name}</div>
                  <div style={{ fontSize: 12, color: 'var(--ink-3)', fontWeight: 600 }}>{r.sub}</div>
                </div>
                <span className="chip" style={{ marginLeft: 'auto', background: `${r.accent}15`, color: r.accent, fontSize: 11 }}>
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

// ─────────────────────────────────────────────────────────────
// Big CTA banner
// ─────────────────────────────────────────────────────────────
function BigCTA() {
  return (
    <section style={{ padding: '80px 0', background: 'var(--white)' }}>
      <div className="container">
        <div style={{
          position: 'relative',
          padding: '72px 64px',
          borderRadius: 40,
          background: 'linear-gradient(135deg, #4f7cff 0%, #7a5cff 100%)',
          overflow: 'hidden',
          color: 'var(--white)',
        }}>
          {/* Decorative shapes */}
          <div style={{ position: 'absolute', top: -100, right: -100, width: 380, height: 380, borderRadius: '50%', background: 'rgba(255,143,122,0.35)' }}></div>
          <div style={{ position: 'absolute', bottom: -80, left: -60, width: 280, height: 280, borderRadius: '50%', background: 'rgba(255,255,255,0.1)' }}></div>
          <div style={{ position: 'absolute', top: '50%', right: '15%', transform: 'translateY(-50%)', fontSize: 220, opacity: 0.08, fontWeight: 900, letterSpacing: '-0.05em', lineHeight: 1 }}>띵동!</div>

          <div style={{ position: 'relative', zIndex: 2, display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 40, alignItems: 'center' }} className="bigcta-grid">
            <div>
              <div style={{ fontSize: 13, fontWeight: 800, letterSpacing: '0.16em', color: 'rgba(255,255,255,0.85)', marginBottom: 16 }}>
                FREE TRIAL CLASS
              </div>
              <h2 style={{
                fontSize: 'clamp(34px, 4.2vw, 56px)',
                fontWeight: 900,
                letterSpacing: '-0.04em',
                lineHeight: 1.15,
                margin: '0 0 20px',
              }}>
                무료 체험 수업으로<br/>
                먼저 만나보세요
              </h2>
              <p style={{ fontSize: 18, lineHeight: 1.65, color: 'rgba(255,255,255,0.85)', margin: '0 0 36px', maxWidth: 540 }}>
                40분 무료 체험 수업 후, 우리 아이에게 맞는지 천천히 결정하세요.
                지금 신청하면 첫 달 교재비 무료 혜택까지 드려요.
              </p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <a href="tel:02-1234-5678" className="btn btn-coral">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  지금 전화 상담하기
                </a>
                <button onClick={() => scrollTo('contact')} className="btn" style={{ background: 'var(--white)', color: 'var(--blue)' }}>
                  체험 신청서 작성
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                </button>
              </div>
            </div>

            {/* Right: benefit list */}
            <div style={{
              background: 'rgba(255,255,255,0.12)',
              backdropFilter: 'blur(12px)',
              padding: 32, borderRadius: 24,
              border: '1px solid rgba(255,255,255,0.2)',
            }}>
              <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: '0.16em', color: 'var(--coral)', marginBottom: 16 }}>
                ★ 체험 신청 혜택
              </div>
              {[
                { t: '40분 1:1 체험 수업', s: '강사와 1:1로 진행' },
                { t: '체력 진단 리포트', s: '발달 단계 분석 포함' },
                { t: '첫 달 교재비 무료', s: '정식 등록 시 혜택' },
              ].map((b, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 14, padding: '14px 0', borderTop: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.15)' }}>
                  <div style={{ width: 28, height: 28, borderRadius: 8, background: 'var(--coral)', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 800, color: 'var(--white)', marginBottom: 2 }}>{b.t}</div>
                    <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.75)' }}>{b.s}</div>
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

// ─────────────────────────────────────────────────────────────
// Contact — form + map placeholder + info
// ─────────────────────────────────────────────────────────────
function Contact() {
  const [form, setForm] = React.useState({ name: '', phone: '', age: '', message: '', agree: false });
  const [submitted, setSubmitted] = React.useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.agree || !form.name || !form.phone) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', phone: '', age: '', message: '', agree: false });
    }, 3500);
  };

  return (
    <section id="contact" className="section" style={{ background: 'var(--white)' }}>
      <div className="container">
        <div className="section-head" style={{ alignItems: 'center', textAlign: 'center' }}>
          <div className="eyebrow" style={{ alignSelf: 'center' }}>CONTACT US</div>
          <h2 className="section-title">
            궁금하신 점이 있으신가요?
          </h2>
          <p className="section-sub" style={{ textAlign: 'center' }}>
            언제든 편하게 문의해주세요. 24시간 이내 친절하게 답변드릴게요.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }} className="contact-grid">
          {/* Form */}
          <form
            onSubmit={onSubmit}
            style={{
              padding: 40,
              borderRadius: 28,
              background: 'var(--paper)',
              border: '1px solid var(--line)',
            }}
          >
            <h3 style={{ fontSize: 24, fontWeight: 900, letterSpacing: '-0.03em', margin: '0 0 4px', color: 'var(--ink)' }}>
              상담 신청서
            </h3>
            <p style={{ fontSize: 14, color: 'var(--ink-3)', margin: '0 0 28px' }}>
              간단한 정보만 남겨주시면 빠르게 연락드릴게요.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
              <Field label="이름" required>
                <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="홍길동" />
              </Field>
              <Field label="연락처" required>
                <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="010-1234-5678" />
              </Field>
            </div>

            <Field label="자녀 연령" hint="(선택)">
              <select value={form.age} onChange={(e) => setForm({ ...form, age: e.target.value })}>
                <option value="">선택해주세요</option>
                <option value="3-4">만 3~4세</option>
                <option value="5-7">만 5~7세 (유아부)</option>
                <option value="8-10">만 8~10세 (초등 저학년)</option>
                <option value="11-13">만 11~13세 (초등 고학년)</option>
              </select>
            </Field>

            <Field label="문의 내용" hint="(선택)">
              <textarea
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="궁금하신 점을 자유롭게 남겨주세요."
              />
            </Field>

            <label style={{
              display: 'flex', alignItems: 'center', gap: 10,
              fontSize: 13, color: 'var(--ink-2)', fontWeight: 600,
              marginBottom: 24, cursor: 'pointer',
            }}>
              <input
                type="checkbox"
                checked={form.agree}
                onChange={(e) => setForm({ ...form, agree: e.target.checked })}
                style={{ width: 18, height: 18, accentColor: 'var(--blue)' }}
              />
              개인정보 수집·이용에 동의합니다. <a href="#" style={{ color: 'var(--blue)', textDecoration: 'underline' }}>약관 보기</a>
            </label>

            <button
              type="submit"
              className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center', opacity: submitted ? 0.5 : 1 }}
              disabled={submitted}
            >
              {submitted ? '✓ 신청이 접수되었습니다' : '상담 신청하기'}
              {!submitted && <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>}
            </button>
          </form>

          {/* Info + map */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {/* Map placeholder */}
            <div style={{
              flex: 1, minHeight: 280,
              borderRadius: 28, overflow: 'hidden',
              background: 'linear-gradient(135deg, #eef2ff 0%, #dde6ff 100%)',
              position: 'relative',
              border: '1px solid var(--line)',
            }}>
              {/* Map grid pattern */}
              <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0, opacity: 0.45 }}>
                <defs>
                  <pattern id="mapgrid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(79,124,255,0.25)" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#mapgrid)" />
                {/* Roads */}
                <path d="M 0 50% Q 30% 45% 50% 50% T 100% 50%" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="14" />
                <path d="M 50% 0 L 50% 100%" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="8" />
              </svg>

              {/* Pin */}
              <div style={{
                position: 'absolute', top: '50%', left: '50%',
                transform: 'translate(-50%, -100%)',
                animation: 'bounce-soft 2s ease-in-out infinite',
              }}>
                <div style={{
                  width: 60, height: 60, borderRadius: '50% 50% 50% 0',
                  background: 'var(--coral)',
                  transform: 'rotate(-45deg)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 12px 28px rgba(255,143,122,0.5)',
                }}>
                  <div style={{
                    transform: 'rotate(45deg)',
                    width: 28, height: 28, borderRadius: '50%',
                    background: 'var(--white)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontWeight: 900, color: 'var(--coral)', fontSize: 16,
                  }}>띵</div>
                </div>
              </div>

              <div style={{
                position: 'absolute', bottom: 20, left: 20, right: 20,
                padding: '14px 20px',
                background: 'var(--white)',
                borderRadius: 16,
                boxShadow: 'var(--shadow-md)',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              }}>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 800, color: 'var(--ink)' }}>띵동 어린이체육교실</div>
                  <div style={{ fontSize: 12, color: 'var(--ink-3)', marginTop: 2 }}>서울 강남구 띵동로 7길 14, 2층</div>
                </div>
                <a href="https://map.naver.com" target="_blank" rel="noopener" className="chip chip-blue" style={{ fontSize: 12 }}>
                  지도 보기 →
                </a>
              </div>
            </div>

            {/* Contact card */}
            <div style={{
              padding: 28, borderRadius: 24,
              background: 'var(--ink)', color: 'var(--white)',
            }}>
              <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: '0.16em', color: 'var(--coral)', marginBottom: 16 }}>
                CONTACT INFO
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                {[
                  { l: '전화', v: '02-1234-5678', icon: 'phone' },
                  { l: '이메일', v: 'hello@ddingdong.kr', icon: 'mail' },
                  { l: '운영시간', v: '평일 09:00-18:00', icon: 'clock' },
                  { l: '카카오톡', v: '@띵동체육교실', icon: 'chat' },
                ].map((c) => (
                  <div key={c.l}>
                    <div style={{ fontSize: 11, fontWeight: 800, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em', marginBottom: 4 }}>
                      {c.l.toUpperCase()}
                    </div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--white)' }}>
                      {c.v}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, required, hint, children }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <label style={{
        display: 'flex', alignItems: 'baseline', gap: 6,
        fontSize: 13, fontWeight: 800, color: 'var(--ink)',
        marginBottom: 8,
      }}>
        {label}
        {required && <span style={{ color: 'var(--coral)' }}>*</span>}
        {hint && <span style={{ fontSize: 12, color: 'var(--ink-3)', fontWeight: 600 }}>{hint}</span>}
      </label>
      {React.cloneElement(children, {
        style: {
          width: '100%',
          padding: '13px 16px',
          fontSize: 14,
          fontFamily: 'inherit',
          color: 'var(--ink)',
          background: 'var(--white)',
          border: '1.5px solid var(--line-2)',
          borderRadius: 12,
          outline: 'none',
          transition: 'border 0.2s, box-shadow 0.2s',
          ...(children.props.style || {}),
        },
        onFocus: (e) => { e.target.style.borderColor = 'var(--blue)'; e.target.style.boxShadow = '0 0 0 4px rgba(79,124,255,0.12)'; },
        onBlur: (e) => { e.target.style.borderColor = 'var(--line-2)'; e.target.style.boxShadow = 'none'; },
      })}
    </div>
  );
}

Object.assign(window, { Instructors, Facility, Process, Reviews, BigCTA, Contact });
