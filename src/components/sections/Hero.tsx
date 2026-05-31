"use client";

import { scrollTo } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      id="top"
      style={{
        position: "relative",
        paddingTop: 140,
        paddingBottom: 80,
        overflow: "hidden",
        background: "linear-gradient(180deg, #fff7f4 0%, #ffffff 70%, #f0f4ff 100%)",
      }}
    >
      {/* Background halos */}
      <div style={{ position: "absolute", top: -100, left: -60, width: 380, height: 380, background: "rgba(255,143,122,0.35)", filter: "blur(80px)", borderRadius: "50%" }} />
      <div style={{ position: "absolute", top: 200, right: -120, width: 460, height: 460, background: "rgba(79,124,255,0.28)", filter: "blur(80px)", borderRadius: "50%" }} />

      {/* Floating decorative shapes */}
      <div style={{ position: "absolute", top: 50, right: "-5%", zIndex: 1 }} className="animate-float">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/shapes/dots-1.png" alt="dots" style={{ width: 500, height: "auto", opacity: 0.3 }} />
      </div>
      <div style={{ position: "absolute", bottom: -100, left: "-5%", animationDelay: "1s", zIndex: 1 }} className="animate-float-soft">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/shapes/dots-2.png" alt="dots" style={{ width: 500, height: "auto", opacity: 0.3 }} />
      </div>

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-[40px] lg:gap-[60px] items-center text-center lg:text-left">
          {/* Left: copy */}
          <div className="animate-fade-up">
            <div style={{ 
              display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 16px",
              borderRadius: "var(--radius-pill)", background: "var(--coral-bg)", color: "var(--coral)",
              fontSize: 13, fontWeight: 800, letterSpacing: "-0.01em", marginBottom: 24
             }}>
              <span className="animate-bounce-soft" style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--coral)", display: "inline-block" }}></span>
              유아·아동 체육 전문 교육기관
            </div>

            <h1 style={{
              fontSize: "clamp(30px, 4.8vw, 60px)",
              fontWeight: 900,
              letterSpacing: "-0.045em",
              lineHeight: 1.1,
              margin: 0,
              color: "var(--ink)",
            }}>
              <span style={{ whiteSpace: "nowrap" }}>아이들의 <span style={{ color: "var(--coral)" }}>성장문</span>을 여는</span><br/>
              <span style={{ color: "var(--blue)" }}>즐거운 움직임!</span>
            </h1>

            <p style={{
              fontSize: 18,
              lineHeight: 1.6,
              color: "var(--ink-2)",
              marginTop: 24,
              marginBottom: 32,
              maxWidth: 540,
              fontWeight: 500,
              marginLeft: "auto",
              marginRight: "auto",
            }} className="lg:ml-0">
              놀이로 배우고 ㅣ 몸으로 성장하고 ㅣ 마음으로 자라는 시간
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }} className="lg:justify-start">
              <a 
                href="tel:010-3046-5546" 
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  padding: "16px 28px", borderRadius: "var(--radius-pill)",
                  background: "var(--blue)", color: "var(--white)",
                  fontSize: 16, fontWeight: 800,
                  boxShadow: "var(--shadow-blue)",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.background = "var(--blue-dark)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.background = "var(--blue)"; }}
              >
                지금 바로 전화 상담하기
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </a>
              <button 
                onClick={() => scrollTo("programs")} 
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  padding: "16px 28px", borderRadius: "var(--radius-pill)",
                  background: "var(--white)", color: "var(--ink)",
                  border: "1.5px solid var(--line-2)",
                  fontSize: 16, fontWeight: 800,
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "var(--ink)"; e.currentTarget.style.color = "var(--white)"; e.currentTarget.style.borderColor = "var(--ink)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "var(--white)"; e.currentTarget.style.color = "var(--ink)"; e.currentTarget.style.borderColor = "var(--line-2)"; }}
              >
                프로그램 둘러보기
              </button>
            </div>

            {/* Category Icons and Labels */}
            <div style={{
              marginTop: 4,
            }}>
              <div style={{
                width: "100%",
                maxWidth: 480,
                margin: "0 auto",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 0
              }} className="lg:ml-0">
                <div style={{
                  position: "relative",
                  width: "100%",
                  height: "clamp(96px, 16vw, 135px)",
                  overflow: "hidden",
                  borderRadius: 20,
                }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/assets/temp/category-icons.png"
                    alt="띵동 서비스 카테고리"
                    style={{
                      position: "absolute",
                      left: 0,
                      top: "50%",
                      width: "100%",
                      height: "auto",
                      display: "block",
                      transform: "translateY(-47%)",
                    }}
                  />
                </div>
                
                <div style={{
                  position: "relative",
                  width: "100%",
                  height: 22,
                  textAlign: "center"
                }}>
                  {[
                    { label: "\uC720\uC544\uCCB4\uC721", x: "15.4%" },
                    { label: "\uC6B4\uB3D9\uD68C", x: "37.7%" },
                    { label: "\uC5D0\uC5B4\uBC14\uC6B4\uC2A4", x: "60.8%" },
                    { label: "\uC774\uBCA4\uD2B8", x: "84.6%" },
                  ].map((item) => (
                    <div key={item.label} style={{
                      position: "absolute",
                      left: item.x,
                      top: -4,
                      transform: "translateX(-50%)",
                      width: "max-content",
                      fontSize: 13,
                      fontWeight: 800,
                      color: "var(--ink-2)",
                      whiteSpace: "nowrap",
                    }}>
                      {item.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: visual */}
          <div className="animate-fade-up relative mt-8 lg:mt-0 flex items-center justify-center" style={{ animationDelay: "0.2s" }}>
            
            {/* Main character image — in-flow for better scaling */}
            <div style={{
              width: "85%", // Safe width for mobile
              maxWidth: "500px", // Prevent it from becoming too huge
              filter: "drop-shadow(0 24px 40px rgba(50,67,92,0.18))",
              position: "relative",
              zIndex: 1
            }} className="animate-float lg:w-full">
              {/* Stars relative to logo */}
              <div style={{ position: "absolute", top: -180, left: -85, zIndex: -1 }} className="animate-float">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/shapes/star-yellow.png" alt="star" style={{ width: 150, height: "auto", opacity: 0.35 }} />
              </div>
              <div style={{ position: "absolute", bottom: -220, left: "40%", zIndex: -1 }} className="animate-float-soft">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/shapes/star-blue.png" alt="star" style={{ width: 150, height: "auto", opacity: 0.35 }} />
              </div>

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/logo-horizontal.png" alt="띵동 캐릭터" style={{ width: "100%", height: "auto", display: "block" }} />

              {/* Sticker labels - now relative to the image container for better tracking */}
              <div style={{
                position: "absolute", top: "-5%", right: "-5%",
                padding: "10px 16px",
                background: "var(--white)",
                borderRadius: 16,
                boxShadow: "var(--shadow-md)",
                display: "flex", alignItems: "center", gap: 8,
                transform: "rotate(6deg)",
                zIndex: 5
              }} className="animate-float-soft">
                <div style={{ width: 28, height: 28, borderRadius: "50%", background: "var(--coral-bg)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--coral)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                </div>
                <div style={{ textAlign: "left" }}>
                  <div style={{ fontSize: 10, fontWeight: 800, color: "var(--ink-3)", letterSpacing: "0.08em" }}>SAFE</div>
                  <div style={{ fontSize: 12, fontWeight: 800, color: "var(--ink)" }}>안전 100%</div>
                </div>
              </div>

              <div style={{
                position: "absolute", bottom: "5%", left: "-5%",
                padding: "10px 16px",
                background: "var(--white)",
                borderRadius: 16,
                boxShadow: "var(--shadow-md)",
                display: "flex", alignItems: "center", gap: 8,
                transform: "rotate(-5deg)",
                animationDelay: "0.5s",
                zIndex: 5
              }} className="animate-float-soft">
                <div style={{ width: 28, height: 28, borderRadius: "50%", background: "var(--blue-bg)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <div style={{ textAlign: "left" }}>
                  <div style={{ fontSize: 10, fontWeight: 800, color: "var(--ink-3)", letterSpacing: "0.08em" }}>PARENTS</div>
                  <div style={{ fontSize: 12, fontWeight: 800, color: "var(--ink)" }}>만족도 98%</div>
                </div>
              </div>

              <div style={{
                position: "absolute", bottom: "-5%", right: "0%",
                width: 72, height: 72, borderRadius: "50%",
                background: "var(--yellow)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontWeight: 900, fontSize: 10, letterSpacing: "0.1em",
                color: "var(--ink)", textAlign: "center",
                boxShadow: "0 12px 24px rgba(255, 217, 100, 0.6)",
                zIndex: 5
              }} className="animate-spin-slow">
                <svg viewBox="0 0 100 100" width="100%" height="100%" style={{ position: "absolute" }}>
                  <defs>
                    <path id="circlePath" d="M 50, 50 m -34, 0 a 34,34 0 1,1 68,0 a 34,34 0 1,1 -68,0"/>
                  </defs>
                  <text fontSize="10" fontWeight="900" fill="var(--ink)" letterSpacing="1">
                    <textPath href="#circlePath">★ DDING-DONG · DDING-DONG · </textPath>
                  </text>
                </svg>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
