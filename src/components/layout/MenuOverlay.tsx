"use client";

import { useEffect } from "react";
import { NAV, scrollTo } from "@/lib/constants";

export default function MenuOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <div
      style={{
        position: "fixed", inset: 0, zIndex: 100,
        pointerEvents: open ? "auto" : "none",
      }}
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: "absolute", inset: 0,
          background: "rgba(50, 67, 92, 0.6)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          opacity: open ? 1 : 0,
          transition: "opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      />
      {/* Panel */}
      <div
        style={{
          position: "absolute", top: 0, right: 0, bottom: 0,
          width: "min(560px, 100%)",
          background: "var(--white)",
          transform: open ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
          display: "flex", flexDirection: "column",
          overflow: "hidden",
        }}
      >
        {/* Top bar */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "24px 32px", borderBottom: "1px solid var(--line)",
        }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/logo-row.png" alt="띵동" style={{ height: 36 }} />
          <button
            onClick={onClose}
            aria-label="메뉴 닫기"
            style={{
              width: 44, height: 44, borderRadius: 12,
              background: "var(--paper-2)", color: "var(--ink)",
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "var(--ink)"; e.currentTarget.style.color = "var(--white)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "var(--paper-2)"; e.currentTarget.style.color = "var(--ink)"; }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
          </button>
        </div>

        {/* Menu items */}
        <div style={{ flex: 1, overflowY: "auto", padding: "32px 0" }}>
          {NAV.map((n, i) => (
            <button
              key={n.id}
              onClick={() => { onClose(); setTimeout(() => scrollTo(n.id), 350); }}
              style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                width: "100%", padding: "20px 32px", textAlign: "left",
                borderBottom: i === NAV.length - 1 ? "none" : "1px solid var(--line)",
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--blue-bg)";
                (e.currentTarget.querySelector(".menu-label") as HTMLElement).style.color = "var(--blue)";
                (e.currentTarget.querySelector(".menu-arrow") as HTMLElement).style.transform = "translateX(6px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                (e.currentTarget.querySelector(".menu-label") as HTMLElement).style.color = "var(--ink)";
                (e.currentTarget.querySelector(".menu-arrow") as HTMLElement).style.transform = "translateX(0)";
              }}
            >
              <div>
                <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: "0.18em", color: "var(--coral)", marginBottom: 6 }}>
                  {String(i+1).padStart(2,"0")} · {n.sub.toUpperCase()}
                </div>
                <div className="menu-label" style={{ fontSize: 28, fontWeight: 900, color: "var(--ink)", letterSpacing: "-0.03em", transition: "color 0.3s" }}>
                  {n.label}
                </div>
                <div style={{ fontSize: 13, color: "var(--ink-3)", marginTop: 4 }}>{n.desc}</div>
              </div>
              <div className="menu-arrow" style={{ color: "var(--ink-3)", transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
              </div>
            </button>
          ))}
        </div>

        {/* Bottom contact */}
        <div style={{ padding: "24px 32px", background: "var(--paper)", borderTop: "1px solid var(--line)" }}>
          <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: "0.16em", color: "var(--blue)", marginBottom: 14 }}>QUICK CONTACT</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            <a href="tel:02-1234-5678" style={{ 
              display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
              padding: "14px 18px", fontSize: 14, fontWeight: 800, borderRadius: "var(--radius-pill)",
              background: "var(--coral)", color: "var(--white)", transition: "all 0.2s" 
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              전화 상담
            </a>
            <a href="https://pf.kakao.com" target="_blank" rel="noopener noreferrer" style={{ 
              display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
              padding: "14px 18px", fontSize: 14, fontWeight: 800, borderRadius: "var(--radius-pill)",
              background: "#FEE500", color: "#3C1E1E", transition: "all 0.2s" 
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3C6.48 3 2 6.58 2 11c0 2.83 1.85 5.31 4.63 6.74l-1.18 4.32c-.1.36.29.65.6.45l5.16-3.42c.26.01.52.02.79.02 5.52 0 10-3.58 10-8S17.52 3 12 3z"/></svg>
              카톡 상담
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
