"use client";

import React, { useState, useEffect } from 'react';

const programSlides = [
  {
    src: "/assets/programs/gross_motor.png",
    label: "💪 대근육 발달",
    color: "var(--coral)"
  },
  {
    src: "/assets/programs/gross_motor_2.png",
    label: "💪 대근육 발달",
    color: "var(--coral)"
  },
  {
    src: "/assets/programs/fine_motor_1.png",
    label: "🧩 소근육 발달",
    color: "var(--blue)"
  },
  {
    src: "/assets/programs/fine_motor_2.png",
    label: "🧩 소근육 발달",
    color: "var(--blue)"
  },
  {
    src: "/assets/programs/fine_motor_3.png",
    label: "🧩 소근육 발달",
    color: "var(--blue)"
  },
  {
    src: "/assets/programs/air_gear_1.png",
    label: "🎈 에어교구",
    color: "var(--yellow)"
  },
  {
    src: "/assets/programs/air_gear_2.png",
    label: "🎈 에어교구",
    color: "var(--yellow)"
  },
  {
    src: "/assets/programs/winter_exp.png",
    label: "⛄ 겨울 체험놀이",
    color: "var(--blue)"
  },
  {
    src: "/assets/programs/military_exp.png",
    label: "🪖 병영 체험놀이",
    color: "#4A5D23" // 국방색 느낌
  },
  {
    src: "/assets/programs/folk_play.png",
    label: "🪁 민속놀이",
    color: "var(--coral)"
  },
  {
    src: "/assets/programs/sports.png",
    label: "⚽ 스포츠",
    color: "var(--blue)"
  },
];

export default function About() {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % programSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

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

              <h2 className="font-katuri text-4xl lg:text-6xl text-[var(--ink)] leading-tight mb-12 tracking-tighter">
                우리 아이의<br />
                첫 번째 <span className="text-[var(--blue)] underline decoration-8 decoration-[var(--blue-soft)] underline-offset-[-4px]">운동 친구</span>
              </h2>

              <p className="font-round text-lg lg:text-xl text-[var(--ink-2)] leading-relaxed mb-10 break-keep">
                다양한 교구와 창의적인 신체활동을 통해<br />
                아이들이 스스로 도전하고 성취하는 경험을 제공하며,<br />
                건강한 몸과 밝은 마음을 키워갑니다.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-4 p-4 bg-[var(--paper)] border border-[var(--line)] rounded-[28px]">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-2xl">💪</div>
                  <div>
                    <div className="font-round text-[var(--ink)] font-black text-lg">대&소 근육</div>
                    <div className="font-round text-[var(--ink-3)] text-sm">전신 발달 교육</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-[var(--paper)] border border-[var(--line)] rounded-[28px]">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-2xl">🎁</div>
                  <div className="flex-1 min-w-0">
                    <div className="font-round text-[var(--ink)] font-black text-lg">체험형 교구</div>
                    <div className="font-round text-[var(--ink-3)] text-xs lg:text-sm whitespace-nowrap overflow-hidden text-ellipsis">ex) 병영체험, 겨울체험 등</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-[var(--paper)] border border-[var(--line)] rounded-[28px]">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-2xl">🎈</div>
                  <div>
                    <div className="font-round text-[var(--ink)] font-black text-lg">에어류 교구</div>
                    <div className="font-round text-[var(--ink-3)] text-sm">풍성한 즐거움</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-[var(--paper)] border border-[var(--line)] rounded-[28px]">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-2xl">⚽</div>
                  <div>
                    <div className="font-round text-[var(--ink)] font-black text-lg">다양한 스포츠</div>
                    <div className="font-round text-[var(--ink-3)] text-sm">스포츠 경험하기</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-[55%] relative group">
              <div className="relative z-10 rounded-[48px] overflow-hidden shadow-2xl transform lg:rotate-2 transition-transform hover:rotate-0 duration-700 bg-[var(--paper)]">
                <div className="relative w-full aspect-[4/3]">
                  {programSlides.map((slide, idx) => (
                    <div
                      key={idx}
                      className={`absolute inset-0 w-full h-full transition-opacity duration-1000 bg-[var(--paper-2)] ${idx === currentIdx ? 'opacity-100' : 'opacity-0'}`}
                    >
                      <img
                        src={slide.src}
                        alt={`띵동 유아체육 수업 모습 ${idx + 1}`}
                        className="w-full h-full object-contain"
                      />
                      
                      {/* Dynamic Label */}
                      <div className="absolute top-6 left-6 z-20 animate-bounce-soft">
                        <div className="bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-[20px] shadow-xl border-2 transform -rotate-2" style={{ borderColor: slide.color }}>
                          <span className="font-katuri text-xl lg:text-2xl whitespace-nowrap" style={{ color: slide.color }}>
                            {slide.label}
                          </span>
                        </div>
                        <div className="w-3 h-3 rotate-45 -mt-1.5 ml-5" style={{ backgroundColor: slide.color }}></div>
                      </div>
                    </div>
                  ))}
                  
                  {/* Navigation Buttons */}
                  <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        setCurrentIdx((prev) => (prev - 1 + programSlides.length) % programSlides.length);
                      }}
                      className="w-12 h-12 flex items-center justify-center rounded-full bg-white/30 backdrop-blur-md text-white hover:bg-white/50 transition-colors"
                      aria-label="이전 이미지"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
                    </button>
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        setCurrentIdx((prev) => (prev + 1) % programSlides.length);
                      }}
                      className="w-12 h-12 flex items-center justify-center rounded-full bg-white/30 backdrop-blur-md text-white hover:bg-white/50 transition-colors"
                      aria-label="다음 이미지"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
                    </button>
                  </div>
                </div>
              </div>
              {/* Image Frame Accent */}
              <div className="absolute -inset-4 border-2 border-[var(--blue-soft)] rounded-[54px] -z-10 translate-x-4 translate-y-4 hidden lg:block"></div>
            </div>
          </div>

          {/* Integrated Free Trial CTA - Compact & Visual Impact */}
          <div className="relative mt-12 group max-w-5xl mx-auto">
            {/* Outer Glow Decoration */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[var(--blue)] via-[var(--coral)] to-[var(--yellow)] rounded-[32px] blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            
            <div className="relative px-6 py-6 lg:px-12 lg:py-8 rounded-[30px] bg-white border-2 border-[var(--blue-soft)] overflow-hidden shadow-xl">
              {/* Background Patterns */}
              <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_90%_10%,var(--blue-bg)_0%,transparent_30%)]"></div>
              <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_10%_90%,var(--coral-bg)_0%,transparent_30%)] opacity-70"></div>
              
              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="flex-1 text-center lg:text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--blue-bg)] rounded-full mb-3 transform -rotate-1 shadow-sm border border-[var(--blue-soft)]">
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--blue)] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--blue)]"></span>
                    </span>
                    <span className="font-katuri text-[var(--blue)] text-[10px] tracking-widest uppercase">Special Experience</span>
                  </div>
                  
                  <h3 className="font-katuri text-2xl lg:text-3xl text-[var(--ink)] mb-3 leading-tight tracking-tight">
                    백문이 불여일견! <span className="text-[var(--coral)] relative inline-block">
                      무료 샘플 수업
                      <svg className="absolute -bottom-1 left-0 w-full h-2 text-[var(--yellow)] opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                        <path d="M0 5 Q 25 0, 50 5 T 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" strokeLinecap="round" />
                      </svg>
                    </span>
                  </h3>
                  
                  <p className="font-round text-base lg:text-lg text-[var(--ink-2)] leading-relaxed break-keep">
                    <span className="font-black text-[var(--ink)]">30분 무료 샘플 수업</span>으로 아이들의 웃음소리를 먼저 확인하세요!
                  </p>
                </div>
                
                <div className="flex-shrink-0 relative">
                  <a
                    href="tel:010-3046-5546"
                    className="group/btn relative inline-flex items-center gap-3 px-8 py-4 bg-[var(--blue)] text-white rounded-[24px] font-black shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm group-hover/btn:rotate-12 transition-transform">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    </div>
                    <span className="text-xl lg:text-2xl">무료 수업 신청하기</span>
                  </a>
                </div>
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
            <h2 className="font-katuri text-4xl lg:text-6xl text-[var(--ink)] leading-tight mb-6 tracking-tighter">
              웃음이 끊이지 않는<br />
              <span className="text-[var(--coral)]">왁자지껄 띵동 운동회</span>
            </h2>
            <p className="font-round text-lg text-[var(--ink-2)] leading-relaxed">
              학교, 어린이집, 기업까지! 수많은 현장 경험을 보유한 <br className="hidden sm:block" />
              전문 MC와 스태프가 아이들에게 잊지 못할 '최고의 하루'를 선물합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "명랑 운동회",
                desc: "부모님과 아이들이 하나 되어 소통하는 감동과 재미의 시간",
                img: "https://images.unsplash.com/photo-1502086223501-7ea24ec39462?auto=format&fit=crop&q=80&w=800",
                color: "var(--coral)"
              },
              {
                title: "팀워크 캠프",
                desc: "함께 목표를 달성하며 협동심과 리더십을 기르는 전략 활동",
                img: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=800",
                color: "var(--blue)"
              },
              {
                title: "시즌 이벤트",
                desc: "여름 물놀이부터 겨울 캠프까지 계절별 테마가 살아있는 특별 활동",
                img: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&q=80&w=800",
                color: "var(--yellow)"
              }
            ].map((item, idx) => (
              <div key={idx} className="group bg-white rounded-[32px] p-4 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-3">
                <div className="rounded-[24px] overflow-hidden mb-6 aspect-[4/3] relative">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="px-4 pb-4">
                  <h3 className="font-katuri text-2xl text-[var(--ink)] mb-3">{item.title}</h3>
                  <p className="font-round text-[var(--ink-2)] text-sm leading-relaxed opacity-80">{item.desc}</p>
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

              <h2 className="font-katuri text-4xl lg:text-6xl text-[var(--ink)] leading-[1.1] mb-8 tracking-tighter">
                기억에 남는<br />
                <span className="text-[var(--blue)]">완벽한 모먼트</span>
              </h2>

              <p className="font-round text-lg lg:text-xl text-[var(--ink-2)] leading-relaxed mb-10">
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
                    <span className="font-round text-lg font-bold text-[var(--ink)] opacity-90">{item.label}</span>       
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
