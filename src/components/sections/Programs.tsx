import React from 'react';

export default function Programs() {
  return (
    <>
      {/* 1. 에어바운스 섹션 */}
      <section id="programs-air" className="section relative overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-[var(--coral-bg)] rounded-full blur-[120px] opacity-50 -mr-[20vw] -mt-[10vw]"></div>
        
        <div className="container relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="w-full lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--coral-bg)] rounded-full mb-8">
                <span className="w-2 h-2 bg-[var(--coral)] rounded-full animate-pulse"></span>
                <span className="text-[var(--coral)] font-extrabold text-sm tracking-widest uppercase">01. Air Bounce</span>
              </div>
              
              <h2 className="text-4xl lg:text-6xl font-black text-[var(--ink)] leading-[1.1] mb-8 tracking-tighter">
                상상력이 현실이 되는<br />
                <span className="text-[var(--coral)]">구름 위 놀이터</span>
              </h2>
              
              <p className="text-lg lg:text-xl text-[var(--ink-2)] font-medium leading-relaxed mb-10 break-keep">
                국내 최대 규모의 다양한 에어바운스를 보유하고 있습니다. <br />
                철저한 안전 점검과 매일 진행되는 소독으로 아이들이 마음껏 뛰놀 수 있는 가장 안전하고 즐거운 공간을 약속합니다.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { t: "KC 인증 완료", d: "국가공인 안전 기준 통과", e: "✅" },
                  { t: "프리미엄 소재", d: "무독성 친환경 원단 사용", e: "🛡️" },
                  { t: "전문 요원 배치", d: "안전 사고 완벽 예방", e: "👮" },
                  { t: "맞춤형 설치", d: "공간에 딱 맞는 구성", e: "📐" }
                ].map((item, i) => (
                  <div key={i} className="p-5 bg-[var(--paper)] rounded-2xl border border-[var(--line)] hover:border-[var(--coral)] transition-colors">
                    <div className="text-2xl mb-2">{item.e}</div>
                    <div className="text-[var(--ink)] font-black mb-1">{item.t}</div>
                    <div className="text-[var(--ink-3)] text-xs font-bold">{item.d}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-1/2 relative">
              <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=1200" 
                  alt="에어바운스" 
                  className="w-full aspect-square object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[var(--yellow)] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 워터슬라이드 섹션 */}
      <section id="programs-water" className="section bg-[var(--blue-bg)] relative overflow-hidden">
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 rounded-full mb-6">
              <span className="text-[var(--blue)] font-extrabold text-sm tracking-widest uppercase">02. Water Slide</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-black text-[var(--ink)] leading-tight mb-6 tracking-tighter">
              무더위를 날려버릴<br />
              <span className="text-[var(--blue)]">띵동 워터파크</span>
            </h2>
            <p className="text-lg text-[var(--ink-2)] font-medium leading-relaxed">
              여름 시즌 최고의 인기 프로그램! <br />
              다양한 높이의 슬라이드와 대형 풀장으로 학교 운동장이나 아파트 단지가 시원한 수영장으로 변신합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <div className="group relative rounded-[40px] overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1000" alt="대형 풀장" className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--blue-dark)]/80 to-transparent flex flex-col justify-end p-10 text-white">
                <h3 className="text-2xl font-black mb-2">대형 풀장 & 슬라이드</h3>
                <p className="text-white/80 font-medium">전 연령이 즐길 수 있는 다양한 사이즈의 물놀이 시설</p>
              </div>
            </div>
            <div className="group relative rounded-[40px] overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1560155016-bd4879ae8f21?auto=format&fit=crop&q=80&w=1000" alt="수질 관리" className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--blue-dark)]/80 to-transparent flex flex-col justify-end p-10 text-white">
                <h3 className="text-2xl font-black mb-2">철저한 수질 및 안전 관리</h3>
                <p className="text-white/80 font-medium">매 시간 수질 체크와 라이프가드 상주로 안심 놀이 환경 조성</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
