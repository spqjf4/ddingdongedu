// sections.jsx — Hero + all marketing sections

// ─────────────────────────────────────────────────────────────
// Hero
// ─────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section
      id="top"
      style={{
        position: 'relative',
        paddingTop: 140,
        paddingBottom: 80,
        overflow: 'hidden',
        background: 'linear-gradient(180deg, #fff7f4 0%, #ffffff 70%, #f0f4ff 100%)',
      }}
    >
      {/* Background halos */}
      <div className="halo" style={{ top: -100, left: -60, width: 380, height: 380, background: 'rgba(255,143,122,0.35)' }} />
      <div className="halo" style={{ top: 200, right: -120, width: 460, height: 460, background: 'rgba(79,124,255,0.28)' }} />

      {/* Floating decorative shapes */}
      <div style={{ position: 'absolute', top: 180, right: '12%', animation: 'float 8s ease-in-out infinite' }}>
        <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'var(--coral)', opacity: 0.25 }} />
      </div>
      <div style={{ position: 'absolute', top: 320, left: '8%', animation: 'float-soft 6s ease-in-out infinite 1s' }}>
        <div style={{ width: 24, height: 24, borderRadius: '50%', background: 'var(--blue)', opacity: 0.35 }} />
      </div>
      <div style={{ position: 'absolute', bottom: 200, right: '8%', animation: 'float-soft 7s ease-in-out infinite' }}>
        <div style={{ width: 18, height: 18, borderRadius: '50%', background: 'var(--coral)', opacity: 0.4 }} />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.1fr 1fr',
          gap: 60,
          alignItems: 'center',
        }}
        className="hero-grid">

          {/* Left: copy */}
          <div className="fade-up" style={{ animationDelay: '0.05s' }}>
            <div className="chip chip-coral" style={{ marginBottom: 24 }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--coral)', display: 'inline-block', animation: 'bounce-soft 1.6s ease-in-out infinite' }}></span>
              유아·아동 체육 전문 교육기관
            </div>

            <h1 style={{
              fontSize: 'clamp(40px, 5.6vw, 76px)',
              fontWeight: 900,
              letterSpacing: '-0.045em',
              lineHeight: 1.05,
              margin: 0,
              color: 'var(--ink)',
            }}>
              아이의 첫 운동친구,<br/>
              <span style={{ color: 'var(--coral)' }}>띵</span><span style={{ color: 'var(--blue)' }}>동</span>이 함께해요
            </h1>

            <p style={{
              fontSize: 19,
              lineHeight: 1.65,
              color: 'var(--ink-2)',
              marginTop: 28,
              marginBottom: 36,
              maxWidth: 540,
              fontWeight: 500,
            }}>
              안전한 환경에서 마음껏 뛰놀며 건강한 몸과 즐거운 마음을 키워요.
              5세부터 초등까지, 연령별 맞춤 커리큘럼으로 우리 아이의 운동 자신감을 길러드립니다.
            </p>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <button onClick={() => scrollTo('contact')} className="btn btn-primary">
                무료 상담 신청하기
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
              </button>
              <button onClick={() => scrollTo('programs')} className="btn btn-ghost">
                프로그램 둘러보기
              </button>
            </div>

            {/* Trust stats */}
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 24, marginTop: 64,
              paddingTop: 32, borderTop: '1px solid var(--line)',
            }}>
              {[
                { n: '200+', l: '제휴 유치원·어린이집' },
                { n: '5,000명', l: '누적 수강생' },
                { n: '8년', l: '아동 체육 운영 노하우' },
              ].map((s) => (
                <div key={s.l}>
                  <div style={{ fontSize: 32, fontWeight: 900, color: 'var(--ink)', letterSpacing: '-0.03em', lineHeight: 1 }}>
                    {s.n}
                  </div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink-3)', marginTop: 8 }}>
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: visual */}
          <div className="fade-up hero-visual" style={{ animationDelay: '0.2s', position: 'relative', height: 580 }}>

            {/* Main character image — large floating */}
            <div style={{
              position: 'absolute',
              top: '50%', left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '92%',
              animation: 'float 7s ease-in-out infinite',
              filter: 'drop-shadow(0 24px 40px rgba(50,67,92,0.18))',
            }}>
              <img src="assets/logo-horizontal.png" alt="띵동 캐릭터" style={{ width: '100%' }} />
            </div>

            {/* Sticker labels */}
            <div style={{
              position: 'absolute', top: 40, right: 20,
              padding: '14px 20px',
              background: 'var(--white)',
              borderRadius: 20,
              boxShadow: 'var(--shadow-md)',
              display: 'flex', alignItems: 'center', gap: 10,
              transform: 'rotate(6deg)',
              animation: 'float-soft 4.5s ease-in-out infinite',
            }}>
              <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--coral-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--coral)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </div>
              <div>
                <div style={{ fontSize: 11, fontWeight: 800, color: 'var(--ink-3)', letterSpacing: '0.08em' }}>SAFE & FUN</div>
                <div style={{ fontSize: 14, fontWeight: 800, color: 'var(--ink)' }}>안전 매뉴얼 100%</div>
              </div>
            </div>

            <div style={{
              position: 'absolute', bottom: 100, left: 0,
              padding: '14px 20px',
              background: 'var(--white)',
              borderRadius: 20,
              boxShadow: 'var(--shadow-md)',
              display: 'flex', alignItems: 'center', gap: 10,
              transform: 'rotate(-5deg)',
              animation: 'float-soft 5.5s ease-in-out infinite 0.5s',
            }}>
              <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--blue-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <div>
                <div style={{ fontSize: 11, fontWeight: 800, color: 'var(--ink-3)', letterSpacing: '0.08em' }}>PARENTS LOVE</div>
                <div style={{ fontSize: 14, fontWeight: 800, color: 'var(--ink)' }}>학부모 만족도 98%</div>
              </div>
            </div>

            <div style={{
              position: 'absolute', bottom: 30, right: 30,
              width: 84, height: 84, borderRadius: '50%',
              background: 'var(--yellow)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontWeight: 900, fontSize: 11, letterSpacing: '0.1em',
              color: 'var(--ink)', textAlign: 'center',
              boxShadow: '0 12px 24px rgba(255, 217, 100, 0.6)',
              animation: 'spin-slow 18s linear infinite',
            }}>
              <svg viewBox="0 0 100 100" width="100%" height="100%" style={{ position: 'absolute' }}>
                <defs>
                  <path id="circlePath" d="M 50, 50 m -34, 0 a 34,34 0 1,1 68,0 a 34,34 0 1,1 -68,0"/>
                </defs>
                <text fontSize="11" fontWeight="900" fill="var(--ink)" letterSpacing="2">
                  <textPath href="#circlePath">★ HAPPY · KIDS · DDINGDONG · </textPath>
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// Marquee — partner kindergartens (trust strip)
// ─────────────────────────────────────────────────────────────
function PartnerMarquee() {
  const partners = [
    '햇살유치원', '꿈꾸는 어린이집', '별빛유치원', '튼튼유치원', '무지개 어린이집',
    '아이사랑 유치원', '푸른숲 어린이집', '새싹유치원', '도담도담 어린이집', '파랑새 유치원',
    '한울유치원', '나래 어린이집',
  ];
  const list = [...partners, ...partners];

  return (
    <section style={{ padding: '40px 0', background: 'var(--paper)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)', overflow: 'hidden' }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', gap: 40 }}>
        <div style={{ flex: '0 0 auto', fontSize: 13, fontWeight: 800, color: 'var(--ink-3)', letterSpacing: '0.14em', whiteSpace: 'nowrap' }}>
          200+ 제휴 기관과 함께해요
        </div>
        <div style={{ position: 'relative', overflow: 'hidden', flex: 1, maskImage: 'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)' }}>
          <div style={{ display: 'flex', gap: 40, animation: 'marquee 36s linear infinite', whiteSpace: 'nowrap' }}>
            {list.map((p, i) => (
              <span key={i} style={{ fontSize: 18, fontWeight: 800, color: 'var(--ink-2)', letterSpacing: '-0.02em', opacity: 0.55 }}>
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// About
// ─────────────────────────────────────────────────────────────
function About() {
  const values = [
    {
      tag: 'SAFETY',
      title: '안전',
      desc: '체계적인 안전 매뉴얼과 응급 대응 시스템으로 아이들이 마음껏 뛰어놀 수 있는 환경을 만들어요.',
      bg: 'var(--coral-bg)', accent: 'var(--coral)',
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <path d="m9 12 2 2 4-4"/>
        </svg>
      ),
    },
    {
      tag: 'EXPERTISE',
      title: '전문성',
      desc: '체육교육 전공 강사진이 연령별 발달 단계를 고려한 커리큘럼으로 아이의 성장을 도와드려요.',
      bg: 'var(--blue-bg)', accent: 'var(--blue)',
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
          <path d="M6 12v5c3 3 9 3 12 0v-5"/>
        </svg>
      ),
    },
    {
      tag: 'JOY',
      title: '즐거움',
      desc: '놀이를 통해 자연스럽게 운동 습관을 형성하고, 친구들과 함께 웃으며 자라도록 도와요.',
      bg: '#fffbe8', accent: '#e8a800',
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
          <line x1="9" y1="9" x2="9.01" y2="9"/>
          <line x1="15" y1="9" x2="15.01" y2="9"/>
        </svg>
      ),
    },
    {
      tag: 'CONNECTION',
      title: '친근함',
      desc: '학부모님께 매일 알림장과 영상을 공유하며, 아이의 성장 순간을 함께 나눠요.',
      bg: '#eafaf2', accent: '#1ea974',
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
    },
  ];

  return (
    <section id="about" className="section" style={{ background: 'var(--white)' }}>
      <div className="container">
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 80, alignItems: 'flex-start',
        }} className="about-grid">
          {/* Left: head */}
          <div style={{ position: 'sticky', top: 120 }}>
            <div className="eyebrow" style={{ marginBottom: 16 }}>ABOUT DDINGDONG</div>
            <h2 style={{
              fontSize: 'clamp(34px, 4vw, 52px)',
              fontWeight: 900,
              letterSpacing: '-0.04em',
              lineHeight: 1.15,
              margin: 0,
              color: 'var(--ink)',
            }}>
              우리는 아이들의<br/>
              <span style={{ color: 'var(--coral)' }}>가장 든든한</span><br/>
              운동 친구가 되어드려요
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.75, color: 'var(--ink-2)', marginTop: 24, maxWidth: 420 }}>
              띵동은 단순한 체육 수업이 아닌, 아이의 평생 운동 습관을 만드는 시작점입니다.
              놀이로 시작해 자신감으로 자라는, 그런 시간을 만들어요.
            </p>
            <button onClick={() => scrollTo('programs')} className="btn btn-primary" style={{ marginTop: 32 }}>
              프로그램 자세히 보기
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </button>
          </div>

          {/* Right: 4 value cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
            {values.map((v, i) => (
              <div
                key={v.tag}
                className="card"
                style={{
                  padding: 32,
                  background: v.bg,
                  border: 'none',
                  borderRadius: 28,
                  transform: i % 2 === 1 ? 'translateY(32px)' : 'translateY(0)',
                }}
              >
                <div style={{
                  width: 60, height: 60, borderRadius: 18,
                  background: 'var(--white)', color: v.accent,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 24, boxShadow: 'var(--shadow-sm)',
                }}>
                  {v.icon}
                </div>
                <div style={{ fontSize: 11, fontWeight: 800, color: v.accent, letterSpacing: '0.18em', marginBottom: 8 }}>{v.tag}</div>
                <h3 style={{ fontSize: 28, fontWeight: 900, color: 'var(--ink)', letterSpacing: '-0.03em', margin: '0 0 12px' }}>
                  {v.title}
                </h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.7, color: 'var(--ink-2)', margin: 0 }}>
                  {v.desc}
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
// Programs
// ─────────────────────────────────────────────────────────────
function Programs() {
  const programs = [
    {
      tag: '인기',
      title: '방문 유아체육',
      sub: '유치원·어린이집 정규 출강',
      desc: '검증된 강사가 직접 방문해 진행하는 주 1~2회 정규 체육 수업. 매트, 후프, 콘 등 안전한 교구로 진행해요.',
      points: ['주 1~2회 정규 수업', '연령별 맞춤 커리큘럼', '전문 강사 1:1 매칭'],
      age: '만 3~7세',
      accent: 'var(--coral)',
      bg: 'linear-gradient(135deg, #ffd9d0 0%, #ffb4a4 100%)',
    },
    {
      tag: 'NEW',
      title: '정규 체육교실',
      sub: '센터 그룹 수업',
      desc: '띵동 센터에서 진행하는 소그룹 체육 수업. 또래 친구들과 함께 운동 자신감과 사회성을 함께 키워요.',
      points: ['소그룹 8명 이하', '맞춤형 체력 진단', '월별 성장 리포트'],
      age: '만 5~10세',
      accent: 'var(--blue)',
      bg: 'linear-gradient(135deg, #c8d5ff 0%, #95acff 100%)',
    },
    {
      tag: '이벤트',
      title: '특별활동·운동회',
      sub: '체육 캠프 & 발표회',
      desc: '계절별 체육 캠프, 미니 운동회, 학기말 발표회 등 특별한 추억을 만드는 이벤트 프로그램을 운영해요.',
      points: ['봄·가을 체육 캠프', '미니 운동회 기획', '발표회·시연회'],
      age: '전 연령',
      accent: '#1ea974',
      bg: 'linear-gradient(135deg, #c5f0d8 0%, #7fd9a8 100%)',
    },
    {
      tag: '맞춤',
      title: '1:1 코칭',
      sub: '개별 체력 관리',
      desc: '내 아이의 체력과 발달 단계에 딱 맞춘 1:1 맞춤 코칭. 자세 교정, 운동 능력 향상까지 책임져요.',
      points: ['주 1~3회 자유 선택', '자세 분석·교정', '학부모 영상 리포트'],
      age: '만 4~13세',
      accent: '#e8a800',
      bg: 'linear-gradient(135deg, #fff0b8 0%, #ffd964 100%)',
    },
  ];

  return (
    <section id="programs" className="section" style={{ background: 'var(--paper)', position: 'relative' }}>
      <div className="container">
        <div className="section-head" style={{ alignItems: 'center', textAlign: 'center' }}>
          <div className="eyebrow" style={{ alignSelf: 'center' }}>PROGRAMS</div>
          <h2 className="section-title">
            우리 아이에게 딱 맞는 <span className="accent-blue">체육 수업</span>을 찾아보세요
          </h2>
          <p className="section-sub" style={{ textAlign: 'center' }}>
            연령과 목적에 맞게 4가지 프로그램을 운영해요. 처음이라면 무료 체험부터 시작해보세요.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }} className="programs-grid">
          {programs.map((p) => (
            <div
              key={p.title}
              className="card"
              style={{
                padding: 0,
                overflow: 'hidden',
                border: '1px solid var(--line)',
                background: 'var(--white)',
                display: 'flex', flexDirection: 'column',
              }}
            >
              {/* Image area */}
              <div style={{
                position: 'relative',
                height: 200,
                background: p.bg,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                overflow: 'hidden',
              }}>
                {/* Decorative shapes */}
                <div style={{ position: 'absolute', top: -40, right: -40, width: 160, height: 160, borderRadius: '50%', background: 'rgba(255,255,255,0.18)' }}></div>
                <div style={{ position: 'absolute', bottom: -60, left: -30, width: 200, height: 200, borderRadius: '50%', background: 'rgba(255,255,255,0.12)' }}></div>

                <span className="chip" style={{
                  position: 'absolute', top: 20, left: 20,
                  background: 'var(--white)', color: p.accent,
                  fontWeight: 800, fontSize: 12, letterSpacing: '0.05em',
                }}>{p.tag}</span>

                <span style={{
                  position: 'absolute', top: 20, right: 20,
                  padding: '6px 14px', borderRadius: 'var(--radius-pill)',
                  background: 'rgba(50,67,92,0.85)', color: 'var(--white)',
                  fontWeight: 700, fontSize: 12,
                }}>{p.age}</span>

                {/* Big icon character placeholder */}
                <div style={{
                  fontSize: 80, fontWeight: 900, color: 'rgba(255,255,255,0.9)',
                  letterSpacing: '-0.04em', textShadow: '0 8px 16px rgba(50,67,92,0.15)',
                }}>
                  0{programs.indexOf(p) + 1}
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: 32, flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontSize: 12, fontWeight: 800, color: p.accent, letterSpacing: '0.12em', marginBottom: 8 }}>
                  {p.sub.toUpperCase()}
                </div>
                <h3 style={{ fontSize: 26, fontWeight: 900, letterSpacing: '-0.03em', margin: '0 0 12px', color: 'var(--ink)' }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--ink-2)', margin: '0 0 20px', flex: 1 }}>
                  {p.desc}
                </p>

                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {p.points.map((pt) => (
                    <li key={pt} style={{ fontSize: 14, color: 'var(--ink-2)', display: 'flex', alignItems: 'center', gap: 10, fontWeight: 600 }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={p.accent} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      {pt}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => scrollTo('contact')}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '16px 22px', borderRadius: 16,
                    background: 'var(--paper)', color: 'var(--ink)',
                    fontWeight: 800, fontSize: 14,
                    transition: 'all 0.3s var(--ease)',
                    width: '100%',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = p.accent; e.currentTarget.style.color = '#fff'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--paper)'; e.currentTarget.style.color = 'var(--ink)'; }}
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

// ─────────────────────────────────────────────────────────────
// Why 띵동? — feature highlights
// ─────────────────────────────────────────────────────────────
function WhyUs() {
  const features = [
    { n: '01', title: '안전 최우선', desc: '교실 내 충격 흡수 매트, 보호 장비, 응급 대응 매뉴얼까지. 보험 가입은 기본이에요.', icon: '🛡️' },
    { n: '02', title: '연령별 커리큘럼', desc: '발달 단계에 맞춘 만 3세부터 초등 6학년까지 6단계 맞춤 커리큘럼.', icon: '📚' },
    { n: '03', title: '체육 전공 강사진', desc: '체육교육·생활체육 전공 졸업자 100%. 정기 안전·교수법 연수 진행.', icon: '🎓' },
    { n: '04', title: '학부모 알림장', desc: '수업 후 활동 영상과 사진, 발달 코멘트를 매일 카카오톡으로 받아보세요.', icon: '💬' },
    { n: '05', title: '월별 성장 리포트', desc: '체력 측정, 운동 발달 그래프, 강사 코멘트가 담긴 종합 리포트 제공.', icon: '📊' },
    { n: '06', title: '제휴 기관 200+', desc: '서울·경기 200개 이상 유치원·어린이집과 함께하는 검증된 노하우.', icon: '🤝' },
  ];

  return (
    <section className="section" style={{ background: 'var(--ink)', color: 'var(--white)', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative halos */}
      <div className="halo" style={{ top: -80, right: -120, width: 400, height: 400, background: 'rgba(255,143,122,0.25)' }} />
      <div className="halo" style={{ bottom: -100, left: -80, width: 360, height: 360, background: 'rgba(79,124,255,0.3)' }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="section-head" style={{ alignItems: 'center', textAlign: 'center' }}>
          <div className="eyebrow" style={{ alignSelf: 'center', color: 'var(--coral)' }}>WHY DDINGDONG</div>
          <h2 className="section-title" style={{ color: 'var(--white)' }}>
            띵동이 사랑받는 <span style={{ color: 'var(--coral)' }}>6가지 이유</span>
          </h2>
          <p className="section-sub" style={{ color: 'rgba(255,255,255,0.65)', textAlign: 'center' }}>
            안전부터 소통까지, 학부모님과 원장님이 안심하고 맡길 수 있도록.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, background: 'rgba(255,255,255,0.08)', borderRadius: 28, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)' }} className="why-grid">
          {features.map((f) => (
            <div
              key={f.n}
              style={{
                padding: 40,
                background: 'var(--ink)',
                transition: 'all 0.4s var(--ease)',
                cursor: 'default',
                display: 'flex', flexDirection: 'column',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#3d5170'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--ink)'; }}
            >
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                marginBottom: 28,
              }}>
                <div style={{
                  width: 56, height: 56, borderRadius: 16,
                  background: 'rgba(255,143,122,0.15)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 24,
                }}>
                  {f.icon}
                </div>
                <div style={{
                  fontSize: 13, fontWeight: 900,
                  color: 'rgba(255,143,122,0.7)',
                  letterSpacing: '0.16em',
                  fontVariantNumeric: 'tabular-nums',
                }}>
                  {f.n}
                </div>
              </div>
              <h3 style={{ fontSize: 22, fontWeight: 900, letterSpacing: '-0.03em', margin: '0 0 12px', color: 'var(--white)' }}>
                {f.title}
              </h3>
              <p style={{ fontSize: 14.5, lineHeight: 1.7, color: 'rgba(255,255,255,0.65)', margin: 0 }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Hero, PartnerMarquee, About, Programs, WhyUs });
