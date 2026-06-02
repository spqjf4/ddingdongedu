import React from 'react';

export default function About() {
  return (
    <>
      {/* 1. 유아체육 섹션: "즐거운 성장" */}
      <section id="about-class" className="section relative overflow-hidden bg-white pb-0">
        {/* Decorative elements */}
        <div className="absolute top-20 -left-12 w-64 h-64 bg-[var(--blue-bg)] rounded-full blur-[80px] opacity-60"></div>
        <img src="/assets/shapes/star-blue.png" alt="" className="absolute top-32 right-[10%] w-16 h-16 animate-float-soft opacity-40" />
        <img src="/assets/shapes/dots-1.png" alt="" className="absolute bottom-20 left-[5%] w-24 opacity-20" />

        <div className="container relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 mb-20 lg:mb-32">
            <div className="w-full lg:w-[45%]">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--blue-bg)] rounded-full mb-8">
                <span className="w-2 h-2 bg-[var(--blue)] rounded-full animate-pulse"></span>
                <span className="text-[var(--blue)] font-extrabold text-sm tracking-widest uppercase">01. Kids Class</span>
              </div>
              
              <h2 className="text-4xl lg:text-6xl font-black text-[var(--ink)] leading-[1.1] mb-8 tracking-tighter">
                우리 아이의<br />
                첫 번째 <span className="text-[var(--blue)] underline decoration-8 decoration-[var(--blue-soft)] underline-offset-[-4px]">운동 친구</span>
              </h2>
              
              <p className="text-lg lg:text-xl text-[var(--ink-2)] font-medium leading-relaxed mb-10 break-keep">
                단순히 뛰기만 하는 수업이 아닙니다. <br />
                전문 지도진이 설계한 놀이 기반의 커리큘럼으로 아이들의 신체 발달과 사회성, 성취감을 동시에 길러줍니다. 띵동과 함께라면 운동이 세상에서 가장 즐거워집니다.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-4 p-4 lg:p-6 bg-[var(--paper)] border border-[var(--line)] rounded-[28px] flex-1 min-w-[200px]">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-2xl">🏃‍♂️</div>
                  <div>
                    <div className="text-[var(--ink)] font-black text-lg">기초 체력</div>
                    <div className="text-[var(--ink-3)] text-sm font-bold">전신 발달 교육</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 lg:p-6 bg-[var(--paper)] border border-[var(--line)] rounded-[28px] flex-1 min-w-[200px]">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-2xl">🤝</div>
                  <div>
                    <div className="text-[var(--ink)] font-black text-lg">협동/소셜</div>
                    <div className="text-[var(--ink-3)] text-sm font-bold">함께하는 즐거움</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-[55%] relative">
              <div className="relative z-10 rounded-[48px] overflow-hidden shadow-2xl transform lg:rotate-2 transition-transform hover:rotate-0 duration-700">
                <img 
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200" 
                  alt="띵동 유아체육 수업 모습" 
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
              {/* Image Frame Accent */}
              <div className="absolute -inset-4 border-2 border-[var(--blue-soft)] rounded-[54px] -z-10 translate-x-4 translate-y-4 hidden lg:block"></div>
            </div>
          </div>

          {/* Integrated Free Trial CTA */}
          <div className="relative p-8 lg:p-16 rounded-[40px] lg:rounded-[56px] bg-[var(--blue)] overflow-hidden shadow-2xl mb-24 animate-fade-up">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/10 to-transparent pointer-events-none"></div>
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-[var(--coral)] opacity-30 rounded-full blur-[80px]"></div>
            <img src="/assets/shapes/dots-2.png" alt="" className="absolute bottom-0 right-0 w-64 opacity-20 pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="w-full lg:w-3/5 text-white">
                <div className="inline-block px-4 py-1.5 bg-white/20 rounded-full text-xs font-black tracking-widest uppercase mb-6">
                  Experience First
                </div>
                <h3 className="text-3xl lg:text-5xl font-black mb-6 leading-tight tracking-tighter">
                  무료 체험 수업으로<br />
                  먼저 만나보세요
                </h3>
                <p className="text-lg text-white/80 font-medium mb-8 break-keep">
                  40분 무료 체험 수업 후, 우리 아이에게 맞는지 천천히 결정하세요. <br className="hidden lg:block" />
                  지금 신청하면 첫 달 교재비 무료 혜택까지 모두 드립니다.
                </p>
                <a 
                  href="tel:010-3046-5546" 
                  className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--coral)] text-white rounded-full font-black text-lg shadow-xl hover:-translate-y-1 transition-all"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  지금 바로 전화 신청하기
                </a>
              </div>

              <div className="w-full lg:w-[32%] bg-white/10 backdrop-blur-md rounded-[32px] p-8 border border-white/20">
                <div className="text-[var(--yellow)] font-black text-sm tracking-widest mb-6">★ 체험 신청 특별 혜택</div>
                <ul className="space-y-6">
                  {[
                    { t: "40분 1:1 밀착 체험", s: "전문 강사 배정" },
                    { t: "체력 진단 결과지", s: "수업 후 즉시 제공" },
                    { t: "첫 달 교재비 0원", s: "정식 등록 시 적용" }
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-[var(--coral)] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                      </div>
                      <div>
                        <div className="text-white font-black leading-none mb-1">{item.t}</div>
                        <div className="text-white/60 text-xs font-bold">{item.s}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 운동회 섹션: "에너지 넘치는 하루" */}
      <section id="about-sports" className="section bg-[var(--paper)] relative overflow-hidden">
        {/* Background Text Accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-[var(--ink)] opacity-[0.02] whitespace-nowrap select-none">
          PLAY TOGETHER
        </div>
        
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--coral-bg)] rounded-full mb-6">
              <span className="text-[var(--coral)] font-extrabold text-sm tracking-widest uppercase">02. Sports Day</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-black text-[var(--ink)] leading-tight mb-6 tracking-tighter">
              웃음이 끊이지 않는<br />
              <span className="text-[var(--coral)]">왁자지껄 띵동 운동회</span>
            </h2>
            <p className="text-lg text-[var(--ink-2)] font-medium leading-relaxed">
              학교, 어린이집, 기업까지! 수많은 현장 경험을 보유한 <br className="hidden sm:block" />
              전문 MC와 스태프가 아이들에게 잊지 못할 '최고의 하루'를 선물합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "명랑 운동회", 
                tag: "가족형", 
                desc: "부모님과 아이들이 하나 되어 소통하는 감동과 재미의 시간", 
                img: "https://images.unsplash.com/photo-1502086223501-7ea24ec39462?auto=format&fit=crop&q=80&w=800",
                color: "var(--coral)"
              },
              { 
                title: "팀워크 캠프", 
                tag: "교육형", 
                desc: "함께 목표를 달성하며 협동심과 리더십을 기르는 전략 활동", 
                img: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=800",
                color: "var(--blue)"
              },
              { 
                title: "시즌 이벤트", 
                tag: "체험형", 
                desc: "여름 물놀이부터 겨울 캠프까지 계절별 테마가 살아있는 특별 활동", 
                img: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&q=80&w=800",
                color: "var(--yellow)"
              }
            ].map((item, idx) => (
              <div key={idx} className="group bg-white rounded-[32px] p-4 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-3">
                <div className="rounded-[24px] overflow-hidden mb-6 aspect-[4/3] relative">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-black" style={{ color: item.color }}>{item.tag}</div>
                </div>
                <div className="px-4 pb-4">
                  <h3 className="text-2xl font-black text-[var(--ink)] mb-3">{item.title}</h3>
                  <p className="text-[var(--ink-2)] text-sm font-medium leading-relaxed opacity-80">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. 이벤트 섹션: "특별한 추억" */}
      <section id="about-event" className="section bg-white relative overflow-hidden">
        {/* Abstract background shapes */}
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[var(--coral-bg)] rounded-full blur-[100px] opacity-40"></div>
        <img src="/assets/shapes/star-yellow.png" alt="" className="absolute top-20 left-[10%] w-12 h-12 animate-spin-slow" />

        <div className="container relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="w-full lg:w-1/2 order-2 lg:order-1 grid grid-cols-2 gap-4 lg:gap-6">
              <div className="space-y-4 lg:space-y-6">
                <div className="aspect-[4/5] rounded-[32px] overflow-hidden shadow-lg animate-float">
                  <img src="https://images.unsplash.com/photo-1530103043960-ef38714abb15?auto=format&fit=crop&q=80&w=800" alt="생일파티" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-square rounded-[32px] overflow-hidden shadow-lg">
                  <img src="https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=800" alt="이벤트 장식" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="space-y-4 lg:space-y-6 pt-12">
                <div className="aspect-square rounded-[32px] overflow-hidden shadow-lg">
                  <img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800" alt="공연" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-[4/5] rounded-[32px] overflow-hidden shadow-lg animate-float" style={{ animationDelay: '2s' }}>
                  <img src="https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&q=80&w=800" alt="선물" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--ink)] text-white rounded-full mb-8">
                <span className="text-white font-extrabold text-sm tracking-widest uppercase">03. Premium Event</span>
              </div>
              
              <h2 className="text-4xl lg:text-6xl font-black text-[var(--ink)] leading-[1.1] mb-8 tracking-tighter">
                기억에 남는<br />
                <span className="text-[var(--blue)]">완벽한 모먼트</span>
              </h2>
              
              <p className="text-lg lg:text-xl text-[var(--ink-2)] font-medium leading-relaxed mb-10">
                아이의 소중한 생일 파티부터 시즌 특별 공연까지, <br className="hidden lg:block" />
                띵동 프리미엄 이벤트는 디테일이 다릅니다. <br className="hidden lg:block" />
                감각적인 공간 연출과 트렌디한 진행으로 부모님과 아이 모두에게 최고의 만족을 선사합니다.
              </p>

              <div className="space-y-5">
                {[
                  { label: "전문 MC 및 캐릭터 퍼포먼스", emoji: "🎭" },
                  { label: "커스텀 공간 스타일링 & 케이터링", emoji: "🎈" },
                  { label: "프라이빗 파티룸 대여 및 기획", emoji: "🎂" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-[var(--paper-2)] flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                      {item.emoji}
                    </div>
                    <span className="text-lg font-bold text-[var(--ink)] opacity-90">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
