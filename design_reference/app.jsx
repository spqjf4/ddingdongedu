// app.jsx — Header, MenuOverlay, QuickMenu, Footer, App shell
const { useState, useEffect, useRef } = React;

// ─────────────────────────────────────────────────────────────
// Navigation data
// ─────────────────────────────────────────────────────────────
const NAV = [
  { id: 'about', label: '띵동 소개', sub: 'About', desc: '우리가 만드는 어린이 체육' },
  { id: 'programs', label: '프로그램', sub: 'Programs', desc: '연령·목적별 맞춤 수업' },
  { id: 'instructors', label: '강사진', sub: 'Coaches', desc: '체육 전공 전문 선생님' },
  { id: 'facility', label: '시설·현장', sub: 'Facility', desc: '안전한 수업 환경' },
  { id: 'reviews', label: '후기·소식', sub: 'Stories', desc: '학부모·원장님 이야기' },
  { id: 'contact', label: '문의하기', sub: 'Contact', desc: '상담 신청 및 위치 안내' },
];

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: 'smooth' });
  }
};

// ─────────────────────────────────────────────────────────────
// Header (sticky)
// ─────────────────────────────────────────────────────────────
function Header({ onMenuOpen }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 12);
    h();
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  return (
    <header
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        background: scrolled ? 'rgba(255,255,255,0.92)' : 'rgba(255,255,255,0.7)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        borderBottom: scrolled ? '1px solid var(--line)' : '1px solid transparent',
        transition: 'all 0.3s var(--ease)',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          height: scrolled ? 72 : 84, transition: 'height 0.3s var(--ease)',
        }}
      >
        {/* Logo */}
        <a
          href="#top"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <img
            src="assets/logo-row.png"
            alt="띵동 어린이체육교실"
            style={{ height: scrolled ? 38 : 44, transition: 'all 0.3s var(--ease)' }}
          />
        </a>

        {/* Desktop nav */}
        <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          {NAV.map((n) => (
            <button
              key={n.id}
              onClick={() => scrollTo(n.id)}
              style={{
                padding: '10px 16px', borderRadius: 'var(--radius-pill)',
                fontSize: 15, fontWeight: 700, color: 'var(--ink)',
                transition: 'all 0.2s var(--ease)',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--blue-bg)'; e.currentTarget.style.color = 'var(--blue)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--ink)'; }}
            >
              {n.label}
            </button>
          ))}
        </nav>

        {/* Right side */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <a
            href="tel:02-1234-5678"
            className="header-cta"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '11px 20px', borderRadius: 'var(--radius-pill)',
              background: 'var(--coral)', color: 'var(--white)',
              fontWeight: 800, fontSize: 14, letterSpacing: '-0.01em',
              boxShadow: 'var(--shadow-coral)',
              transition: 'all 0.3s var(--ease)',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            02-1234-5678
          </a>

          <button
            onClick={onMenuOpen}
            aria-label="메뉴 열기"
            style={{
              width: 48, height: 48, borderRadius: 14,
              background: 'var(--ink)', color: 'var(--white)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'all 0.2s var(--ease)',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--blue)'; e.currentTarget.style.transform = 'scale(1.05)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--ink)'; e.currentTarget.style.transform = 'scale(1)'; }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <span style={{ width: 18, height: 2, background: 'currentColor', borderRadius: 2 }}></span>
              <span style={{ width: 14, height: 2, background: 'currentColor', borderRadius: 2, alignSelf: 'flex-end' }}></span>
              <span style={{ width: 18, height: 2, background: 'currentColor', borderRadius: 2 }}></span>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}

// ─────────────────────────────────────────────────────────────
// Hamburger overlay menu
// ─────────────────────────────────────────────────────────────
function MenuOverlay({ open, onClose }) {
  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 100,
        pointerEvents: open ? 'auto' : 'none',
      }}
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'absolute', inset: 0,
          background: 'rgba(50, 67, 92, 0.6)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          opacity: open ? 1 : 0,
          transition: 'opacity 0.4s var(--ease)',
        }}
      />
      {/* Panel */}
      <div
        style={{
          position: 'absolute', top: 0, right: 0, bottom: 0,
          width: 'min(560px, 100%)',
          background: 'var(--white)',
          transform: open ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.5s var(--ease)',
          display: 'flex', flexDirection: 'column',
          overflow: 'hidden',
        }}
      >
        {/* Top bar */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '24px 32px', borderBottom: '1px solid var(--line)',
        }}>
          <img src="assets/logo-row.png" alt="띵동" style={{ height: 36 }} />
          <button
            onClick={onClose}
            aria-label="메뉴 닫기"
            style={{
              width: 44, height: 44, borderRadius: 12,
              background: 'var(--paper-2)', color: 'var(--ink)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--ink)'; e.currentTarget.style.color = 'var(--white)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--paper-2)'; e.currentTarget.style.color = 'var(--ink)'; }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
          </button>
        </div>

        {/* Menu items */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '32px 0' }}>
          {NAV.map((n, i) => (
            <button
              key={n.id}
              onClick={() => { onClose(); setTimeout(() => scrollTo(n.id), 350); }}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                width: '100%', padding: '20px 32px', textAlign: 'left',
                borderBottom: i === NAV.length - 1 ? 'none' : '1px solid var(--line)',
                transition: 'all 0.3s var(--ease)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--blue-bg)';
                e.currentTarget.querySelector('.menu-label').style.color = 'var(--blue)';
                e.currentTarget.querySelector('.menu-arrow').style.transform = 'translateX(6px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.querySelector('.menu-label').style.color = 'var(--ink)';
                e.currentTarget.querySelector('.menu-arrow').style.transform = 'translateX(0)';
              }}
            >
              <div>
                <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: '0.18em', color: 'var(--coral)', marginBottom: 6 }}>
                  {String(i+1).padStart(2,'0')} · {n.sub.toUpperCase()}
                </div>
                <div className="menu-label" style={{ fontSize: 28, fontWeight: 900, color: 'var(--ink)', letterSpacing: '-0.03em', transition: 'color 0.3s' }}>
                  {n.label}
                </div>
                <div style={{ fontSize: 13, color: 'var(--ink-3)', marginTop: 4 }}>{n.desc}</div>
              </div>
              <div className="menu-arrow" style={{ color: 'var(--ink-3)', transition: 'transform 0.3s var(--ease)' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
              </div>
            </button>
          ))}
        </div>

        {/* Bottom contact */}
        <div style={{ padding: '24px 32px', background: 'var(--paper)', borderTop: '1px solid var(--line)' }}>
          <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: '0.16em', color: 'var(--blue)', marginBottom: 14 }}>QUICK CONTACT</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            <a href="tel:02-1234-5678" className="btn btn-coral" style={{ padding: '14px 18px', fontSize: 14 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              전화 상담
            </a>
            <a href="https://pf.kakao.com" target="_blank" rel="noopener" className="btn btn-dark" style={{ padding: '14px 18px', fontSize: 14, background: '#FEE500', color: '#3C1E1E' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3C6.48 3 2 6.58 2 11c0 2.83 1.85 5.31 4.63 6.74l-1.18 4.32c-.1.36.29.65.6.45l5.16-3.42c.26.01.52.02.79.02 5.52 0 10-3.58 10-8S17.52 3 12 3z"/></svg>
              카톡 상담
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Floating Quick Menu (right side)
// ─────────────────────────────────────────────────────────────
function QuickMenu() {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const h = () => setShowTop(window.scrollY > 400);
    h();
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  const items = [
    {
      label: '카카오톡',
      bg: '#FEE500',
      color: '#3C1E1E',
      href: 'https://pf.kakao.com',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3C6.48 3 2 6.58 2 11c0 2.83 1.85 5.31 4.63 6.74l-1.18 4.32c-.1.36.29.65.6.45l5.16-3.42c.26.01.52.02.79.02 5.52 0 10-3.58 10-8S17.52 3 12 3z"/>
        </svg>
      ),
    },
    {
      label: '네이버',
      bg: '#03C75A',
      color: '#fff',
      href: 'https://blog.naver.com',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16.273 12.845 7.376 0H0v24h7.726V11.156L16.624 24H24V0h-7.727v12.845z"/>
        </svg>
      ),
    },
    {
      label: '전화',
      bg: 'var(--coral)',
      color: '#fff',
      href: 'tel:02-1234-5678',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
      ),
    },
    {
      label: '이메일',
      bg: 'var(--blue)',
      color: '#fff',
      href: 'mailto:hello@ddingdong.kr',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="3"/>
          <path d="m2 7 10 6 10-6"/>
        </svg>
      ),
    },
  ];

  return (
    <div
      style={{
        position: 'fixed',
        right: 22, bottom: 28,
        zIndex: 40,
        display: 'flex', flexDirection: 'column', gap: 10,
        alignItems: 'flex-end',
      }}
    >
      {items.map((it) => (
        <a
          key={it.label}
          href={it.href}
          target={it.href.startsWith('http') ? '_blank' : undefined}
          rel="noopener"
          className="quick-item"
          style={{
            display: 'flex', alignItems: 'center', gap: 10,
            background: it.bg, color: it.color,
            height: 56, width: 56, paddingLeft: 0,
            borderRadius: 28, overflow: 'hidden',
            boxShadow: '0 10px 24px rgba(50,67,92,0.18)',
            transition: 'all 0.35s var(--ease)',
            position: 'relative',
            whiteSpace: 'nowrap',
            fontWeight: 800,
            fontSize: 14,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.width = '140px';
            e.currentTarget.style.paddingLeft = '18px';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.width = '56px';
            e.currentTarget.style.paddingLeft = '0px';
          }}
        >
          <span style={{ flex: 1, opacity: 0, transition: 'opacity 0.2s', overflow: 'hidden' }}
                onTransitionEnd={(e) => {}}
                ref={(el) => {
                  if (el) {
                    const parent = el.parentElement;
                    if (!parent.__hoverWired) {
                      parent.__hoverWired = true;
                      parent.addEventListener('mouseenter', () => { el.style.opacity = '1'; });
                      parent.addEventListener('mouseleave', () => { el.style.opacity = '0'; });
                    }
                  }
                }}>
            {it.label}
          </span>
          <span style={{
            width: 56, height: 56, flex: '0 0 56px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            {it.icon}
          </span>
        </a>
      ))}

      {/* TOP button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="맨 위로"
        style={{
          width: 56, height: 56, borderRadius: 28,
          background: 'var(--white)', color: 'var(--ink)',
          border: '1.5px solid var(--line-2)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 10px 24px rgba(50,67,92,0.12)',
          opacity: showTop ? 1 : 0,
          transform: showTop ? 'translateY(0)' : 'translateY(20px)',
          pointerEvents: showTop ? 'auto' : 'none',
          transition: 'all 0.3s var(--ease)',
          fontSize: 10, fontWeight: 900, letterSpacing: '0.1em',
          flexDirection: 'column', gap: 2,
        }}
        onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--ink)'; e.currentTarget.style.color = 'var(--white)'; e.currentTarget.style.borderColor = 'var(--ink)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--white)'; e.currentTarget.style.color = 'var(--ink)'; e.currentTarget.style.borderColor = 'var(--line-2)'; }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
        TOP
      </button>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Footer
// ─────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{ background: 'var(--ink)', color: 'rgba(255,255,255,0.7)', paddingTop: 80, paddingBottom: 32 }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(260px, 1fr) 2fr',
          gap: 60,
          paddingBottom: 56,
          borderBottom: '1px solid rgba(255,255,255,0.1)',
        }}>
          {/* Brand */}
          <div>
            <img src="assets/logo-stacked.png" alt="띵동 어린이체육교실" style={{ height: 96, marginBottom: 24, filter: 'brightness(1.05)' }} />
            <p style={{ fontSize: 14, lineHeight: 1.7, margin: 0, color: 'rgba(255,255,255,0.6)' }}>
              아이들의 첫 운동 친구, 띵동 어린이체육교실은<br/>
              안전하고 즐거운 체육 교육을 만들어갑니다.
            </p>
            <div style={{ display: 'flex', gap: 10, marginTop: 24 }}>
              {[
                { bg: '#FEE500', color: '#3C1E1E', label: 'K', href: 'https://pf.kakao.com' },
                { bg: '#03C75A', color: '#fff', label: 'N', href: 'https://blog.naver.com' },
                { bg: '#E4405F', color: '#fff', label: 'IG', href: 'https://instagram.com' },
                { bg: '#FF0000', color: '#fff', label: 'YT', href: 'https://youtube.com' },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener"
                   style={{
                     width: 40, height: 40, borderRadius: 12,
                     background: s.bg, color: s.color,
                     display: 'flex', alignItems: 'center', justifyContent: 'center',
                     fontWeight: 900, fontSize: 13,
                     transition: 'transform 0.2s var(--ease)',
                   }}
                   onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; }}
                   onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}>
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Columns */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
            {[
              { h: '띵동 안내', items: ['브랜드 스토리', '교육 철학', '오시는 길', '제휴 문의'] },
              { h: '프로그램', items: ['방문 유아체육', '정규 체육교실', '특별활동·캠프', '1:1 코칭'] },
              { h: '소통 채널', items: ['공지사항', '학부모 알림장', '갤러리', '자주 묻는 질문'] },
              { h: '고객 지원', items: ['상담 신청', '개인정보처리방침', '이용약관', '저작권 정책'] },
            ].map((col) => (
              <div key={col.h}>
                <div style={{ fontWeight: 800, color: 'var(--white)', fontSize: 14, marginBottom: 18, letterSpacing: '-0.01em' }}>
                  {col.h}
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {col.items.map((i) => (
                    <li key={i}>
                      <a href="#" style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', transition: 'color 0.2s' }}
                         onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--coral)'; }}
                         onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.55)'; }}>
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
        <div style={{ paddingTop: 36, fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px 20px', marginBottom: 12 }}>
            <span><strong style={{ color: 'rgba(255,255,255,0.85)', fontWeight: 700 }}>상호</strong> 띵동 어린이체육교실</span>
            <span><strong style={{ color: 'rgba(255,255,255,0.85)', fontWeight: 700 }}>대표</strong> 김원장</span>
            <span><strong style={{ color: 'rgba(255,255,255,0.85)', fontWeight: 700 }}>사업자등록번호</strong> 123-45-67890</span>
            <span><strong style={{ color: 'rgba(255,255,255,0.85)', fontWeight: 700 }}>통신판매업</strong> 제 2025-서울강남-0000호</span>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px 20px', marginBottom: 12 }}>
            <span><strong style={{ color: 'rgba(255,255,255,0.85)', fontWeight: 700 }}>주소</strong> 서울특별시 강남구 띵동로 7길 14, 2층</span>
            <span><strong style={{ color: 'rgba(255,255,255,0.85)', fontWeight: 700 }}>전화</strong> 02-1234-5678</span>
            <span><strong style={{ color: 'rgba(255,255,255,0.85)', fontWeight: 700 }}>이메일</strong> hello@ddingdong.kr</span>
            <span><strong style={{ color: 'rgba(255,255,255,0.85)', fontWeight: 700 }}>운영시간</strong> 평일 09:00 - 18:00</span>
          </div>
          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            flexWrap: 'wrap', gap: 12,
            marginTop: 28, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.08)',
            fontSize: 12, color: 'rgba(255,255,255,0.35)',
          }}>
            <span>© 2026 띵동 어린이체육교실. All rights reserved.</span>
            <span>Made with <span style={{ color: 'var(--coral)' }}>♥</span> for happy kids</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Export to window
Object.assign(window, { Header, MenuOverlay, QuickMenu, Footer, NAV, scrollTo });
