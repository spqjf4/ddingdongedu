"use client";

import { useState, useEffect } from "react";
import { NAV, scrollTo } from "@/lib/constants";

export default function Header({ onMenuOpen }: { onMenuOpen: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 12);
    h();
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <header
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        background: scrolled ? "rgba(255,255,255,0.92)" : "rgba(255,255,255,0.7)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderBottom: scrolled ? "1px solid var(--line)" : "1px solid transparent",
        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          height: scrolled ? 72 : 84, transition: "height 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <a
          href="#top"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          style={{ display: "flex", alignItems: "center" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/logo-row.png"
            alt="띵동 어린이체육교실"
            className="h-[36px] sm:h-[40px] lg:h-[44px]"
            style={{ 
              transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
              ...(scrolled ? { height: '34px' } : {}) 
            }}
          />
        </a>

        <nav className="hidden lg:flex" style={{ alignItems: "center", gap: 4 }}>
          {NAV.map((n) => (
            <div 
              key={n.id} 
              style={{ position: "relative" }}
              onMouseEnter={() => setActiveMenu(n.id)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button
                onClick={() => scrollTo(n.id)}
                style={{
                  padding: "10px 16px", borderRadius: "var(--radius-pill)",
                  fontSize: 15, fontWeight: 700,
                  background: activeMenu === n.id ? "var(--blue-bg)" : "transparent",
                  color: activeMenu === n.id ? "var(--blue)" : "var(--ink)",
                  transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
                  display: "flex", alignItems: "center", gap: 4
                }}
              >
                {n.label}
                {n.children && (
                  <svg 
                    width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                    style={{ 
                      transform: activeMenu === n.id ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.2s",
                      opacity: 0.5
                    }}
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                )}
              </button>

              {/* Dropdown Menu Wrapper with Bridge */}
              {n.children && (
                <div
                  style={{
                    position: "absolute", top: "100%", left: "50%",
                    transform: "translateX(-50%)",
                    paddingTop: 12, // The invisible bridge
                    opacity: activeMenu === n.id ? 1 : 0,
                    pointerEvents: activeMenu === n.id ? "auto" : "none",
                    transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                    zIndex: 60
                  }}
                >
                  <div
                    style={{
                      background: "#fff",
                      borderRadius: 16,
                      padding: "10px",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
                      minWidth: 160,
                      border: "1px solid var(--line-2)",
                      display: "flex", flexDirection: "column", gap: 2,
                      transform: `translateY(${activeMenu === n.id ? "0px" : "10px"})`,
                      transition: "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                  >
                    {n.children.map((child) => (
                      <button
                        key={child.label}
                        onClick={() => { scrollTo(child.id); setActiveMenu(null); }}
                        style={{
                          padding: "10px 14px",
                          textAlign: "left",
                          fontSize: 14,
                          fontWeight: 700,
                          color: "var(--ink-2)",
                          borderRadius: 10,
                          transition: "all 0.2s",
                          whiteSpace: "nowrap"
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.background = "var(--blue-bg)"; e.currentTarget.style.color = "var(--blue)"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--ink-2)"; }}
                      >
                        {child.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <a
            href="tel:010-3046-5546"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "10px 14px", borderRadius: "var(--radius-pill)",
              background: "var(--coral)", color: "var(--white)",
              fontWeight: 800, fontSize: 13, letterSpacing: "-0.01em",
              boxShadow: "var(--shadow-coral)",
              transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            <span className="hidden sm:inline">010-3046-5546</span>
          </a>

          <button
            onClick={onMenuOpen}
            aria-label="메뉴 열기"
            className="lg:hidden"
            style={{
              width: 48, height: 48, borderRadius: 14,
              background: "var(--ink)", color: "var(--white)",
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "var(--blue)"; e.currentTarget.style.transform = "scale(1.05)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "var(--ink)"; e.currentTarget.style.transform = "scale(1)"; }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <span style={{ width: 18, height: 2, background: "currentColor", borderRadius: 2 }}></span>
              <span style={{ width: 14, height: 2, background: "currentColor", borderRadius: 2, alignSelf: "flex-end" }}></span>
              <span style={{ width: 18, height: 2, background: "currentColor", borderRadius: 2 }}></span>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}
