export const NAV = [
  { 
    id: 'about', 
    label: '띵동유아체육', 
    sub: 'Education', 
    desc: '아이들을 위한 맞춤 체육',
    children: [
      { label: '유아체육', id: 'about' },
      { label: '운동회', id: 'about' },
      { label: '이벤트', id: 'about' }
    ]
  },
  { 
    id: 'programs', 
    label: '띵동바운스', 
    sub: 'Bounce', 
    desc: '즐거운 에어바운스 놀이',
    children: [
      { label: '에어바운스', id: 'programs' },
      { label: '워터슬라이드', id: 'programs' }
    ]
  },
  { 
    id: 'facility', 
    label: '띵동테마파크', 
    sub: 'Theme Park', 
    desc: '상상력이 커지는 테마파크',
    children: [
      { label: '놀이기구', id: 'facility' },
      { label: '찾아가는체험놀이', id: 'facility' }
    ]
  },
  { id: 'contact', label: '문의사항', sub: 'Contact', desc: '상담 및 신청' },
];

export const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: 'smooth' });
  }
};
