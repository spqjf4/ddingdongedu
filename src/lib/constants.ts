export const NAV = [
  { id: 'about', label: '띵동유아체육', sub: 'Education', desc: '아이들을 위한 맞춤 체육' },
  { id: 'programs', label: '띵동바운스', sub: 'Bounce', desc: '즐거운 에어바운스 놀이' },
  { id: 'facility', label: '띵동테마파크', sub: 'Theme Park', desc: '상상력이 커지는 테마파크' },
  { id: 'contact', label: '문의사항', sub: 'Contact', desc: '상담 및 신청' },
];

export const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: 'smooth' });
  }
};
