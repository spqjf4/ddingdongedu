export const NAV = [
  { id: 'about', label: '띵동 소개', sub: 'About', desc: '우리가 만드는 어린이 체육' },
  { id: 'programs', label: '프로그램', sub: 'Programs', desc: '연령·목적별 맞춤 수업' },
  { id: 'instructors', label: '강사진', sub: 'Coaches', desc: '체육 전공 전문 선생님' },
  { id: 'facility', label: '시설·현장', sub: 'Facility', desc: '안전한 수업 환경' },
  { id: 'reviews', label: '후기·소식', sub: 'Stories', desc: '학부모·원장님 이야기' },
  { id: 'contact', label: '문의하기', sub: 'Contact', desc: '상담 신청 및 위치 안내' },
];

export const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: 'smooth' });
  }
};
