import React from 'react';

export default function Facility() {
  return (
    <>
      {/* 1. 놀이기구 섹션 */}
      <section id="facility-ride" className="section relative overflow-hidden bg-white">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[var(--yellow)] rounded-full blur-[60px] opacity-20"></div>
        
        <div className="container relative z-10">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24">
            <div className="w-full lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--blue-bg)] rounded-full mb-8">
                <span className="text-[var(--blue)] font-extrabold text-sm tracking-widest uppercase">01. Theme Park Rides</span>
              </div>
              
              <h2 className="text-4xl lg:text-6xl font-black text-[var(--ink)] leading-[1.1] mb-8 tracking-tighter">
                우리 동네가 바로<br />
                <span className="text-[var(--blue)]">환상의 테마파크</span>
              </h2>
              
              <p className="text-lg lg:text-xl text-[var(--ink-2)] font-medium leading-relaxed mb-10 break-keep">
                회전목마, 미니 기차, 범퍼카 등 멀리 나가지 않아도 즐길 수 있는 프리미엄 놀이기구 대여 서비스를 제공합니다. <br />
                이벤트 현장을 더욱 화려하고 즐겁게 만들어 드립니다.
              </p>

              <div className="space-y-6">
                {[
                  { title: "미니 기차 & 회전목마", desc: "아이들의 동심을 자극하는 클래식 놀이기구", icon: "🚂" },
                  { title: "범퍼카 & 고카트", desc: "직접 운전하며 즐기는 스릴 만점 액티비티", icon: "🏎️" },
                  { title: "바이킹 & 트램펄린", desc: "하늘 높이 날아오르는 짜릿한 즐거움", icon: "⚓" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-5 p-6 bg-[var(--paper)] rounded-3xl border border-[var(--line)]">
                    <div className="text-4xl">{item.icon}</div>
                    <div>
                      <h4 className="text-xl font-black text-[var(--ink)] mb-1">{item.title}</h4>
                      <p className="text-[var(--ink-3)] text-sm font-bold">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-8">
                  <div className="rounded-3xl overflow-hidden shadow-lg transform -rotate-3 hover:rotate-0 transition-transform">
                    <img src="https://images.unsplash.com/photo-1533553933936-262ca70957de?auto=format&fit=crop&q=80&w=600" alt="놀이기구 1" className="w-full object-cover aspect-[3/4]" />
                  </div>
                  <div className="rounded-3xl overflow-hidden shadow-lg transform rotate-2 hover:rotate-0 transition-transform">
                    <img src="https://images.unsplash.com/photo-1572508589584-94d778209da9?auto=format&fit=crop&q=80&w=600" alt="놀이기구 2" className="w-full object-cover aspect-square" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="rounded-3xl overflow-hidden shadow-lg transform rotate-3 hover:rotate-0 transition-transform">
                    <img src="https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&q=80&w=600" alt="놀이기구 3" className="w-full object-cover aspect-square" />
                  </div>
                  <div className="rounded-3xl overflow-hidden shadow-lg transform -rotate-2 hover:rotate-0 transition-transform">
                    <img src="https://images.unsplash.com/photo-1603190287605-e6ade32faaf5?auto=format&fit=crop&q=80&w=600" alt="놀이기구 4" className="w-full object-cover aspect-[3/4]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 찾아가는 체험놀이 섹션 */}
      <section id="facility-exp" className="section bg-[var(--ink)] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--blue)] opacity-20 blur-[100px] -mr-48 -mt-48"></div>
        
        <div className="container relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="w-full lg:w-1/2">
              <div className="inline-block px-4 py-1.5 bg-white/10 text-white rounded-full text-xs font-black tracking-widest uppercase mb-6">
                02. Mobile Experience
              </div>
              <h2 className="text-4xl lg:text-6xl font-black leading-tight mb-8 tracking-tighter">
                어디든 달려가는<br />
                <span className="text-[var(--yellow)]">오감 만족 체험존</span>
              </h2>
              <p className="text-lg lg:text-xl text-white/70 font-medium leading-relaxed mb-10 break-keep">
                오감을 자극하는 창의적인 체험 활동이 아이들의 공간으로 직접 찾아갑니다. <br />
                대형 블록 놀이, 가상 현실 체험, 전통 놀이 등 교육적 가치와 재미를 모두 잡은 프로그램입니다.
              </p>
              
              <div className="grid grid-cols-2 gap-4 lg:gap-8">
                <div className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-colors">
                  <div className="text-3xl mb-3">🧩</div>
                  <div className="text-xl font-black mb-1 text-[var(--yellow)]">창의 블록</div>
                  <div className="text-sm text-white/50">대형 소프트 블록 쌓기</div>
                </div>
                <div className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-colors">
                  <div className="text-3xl mb-3">👓</div>
                  <div className="text-xl font-black mb-1 text-[var(--yellow)]">VR 스포츠</div>
                  <div className="text-sm text-white/50">가상 현실 속 액티비티</div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 relative">
              <div className="aspect-[4/5] bg-white/10 rounded-[48px] overflow-hidden p-3 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&q=80&w=1000" 
                  alt="체험 활동" 
                  className="w-full h-full object-cover rounded-[40px]"
                />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-[var(--yellow)] rounded-full flex items-center justify-center text-4xl shadow-2xl animate-bounce-soft">
                🎁
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
