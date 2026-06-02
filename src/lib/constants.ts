export const NAV = [
  { 
    id: 'about', 
    label: '띵동유아체육', 
    sub: 'Education', 
    desc: '아이들을 위한 맞춤 체육',
    path: '/about',
    children: [
      { label: '유아체육', id: 'about-class', path: '/about' },
      { label: '운동회', id: 'about-sports', path: '/about' },
      { label: '이벤트', id: 'about-event', path: '/about' }
    ]
  },
  { 
    id: 'programs', 
    label: '띵동바운스', 
    sub: 'Bounce', 
    desc: '즐거운 에어바운스 놀이',
    path: '/programs',
    children: [
      { label: '에어바운스', id: 'programs-air', path: '/programs' },
      { label: '워터슬라이드', id: 'programs-water', path: '/programs' }
    ]
  },
  { 
    id: 'facility', 
    label: '띵동테마파크', 
    sub: 'Theme Park', 
    desc: '상상력이 커지는 테마파크',
    path: '/facility',
    children: [
      { label: '놀이기구', id: 'facility-ride', path: '/facility' },
      { label: '찾아가는체험놀이', id: 'facility-exp', path: '/facility' }
    ]
  },
  { id: 'contact', label: '문의사항', sub: 'Contact', desc: '상담 및 신청', path: '/' },
];

export const scrollTo = (id: string, path?: string) => {
  if (path && window.location.pathname !== path) {
    window.location.href = `${path}#${id}`;
    return;
  }

  const el = document.getElementById(id);
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: 'smooth' });
  } else if (path) {
    window.location.href = `${path}#${id}`;
  }
};
