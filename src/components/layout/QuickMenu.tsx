"use client";

import { useState, useEffect } from "react";

export default function QuickMenu() {
  const [showTop, setShowTop] = useState(false);
  
  useEffect(() => {
    const h = () => setShowTop(window.scrollY > 400);
    h();
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  const items = [
    {
      label: "카카오톡",
      bg: "#FEE500",
      color: "#3C1E1E",
      href: "https://pf.kakao.com",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3C6.48 3 2 6.58 2 11c0 2.83 1.85 5.31 4.63 6.74l-1.18 4.32c-.1.36.29.65.6.45l5.16-3.42c.26.01.52.02.79.02 5.52 0 10-3.58 10-8S17.52 3 12 3z"/>
        </svg>
      ),
    },
    {
      label: "네이버",
      bg: "#03C75A",
      color: "#fff",
      href: "https://blog.naver.com",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16.273 12.845 7.376 0H0v24h7.726V11.156L16.624 24H24V0h-7.727v12.845z"/>
        </svg>
      ),
    },
    {
      label: "전화",
      bg: "var(--coral)",
      color: "#fff",
      href: "tel:02-1234-5678",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
      ),
    },
    {
      label: "이메일",
      bg: "var(--blue)",
      color: "#fff",
      href: "mailto:hello@ddingdong.kr",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="3"/>
          <path d="m2 7 10 6 10-6"/>
        </svg>
      ),
    },
  ];

  return (
    <div
      style={{
        position: "fixed",
        right: 22, bottom: 28,
        zIndex: 40,
        display: "flex", flexDirection: "column", gap: 10,
        alignItems: "flex-end",
      }}
    >
      {items.map((it) => (
        <a
          key={it.label}
          href={it.href}
          target={it.href.startsWith("http") ? "_blank" : undefined}
          rel="noopener noreferrer"
          style={{
            display: "flex", alignItems: "center", gap: 10,
            background: it.bg, color: it.color,
            height: 56, width: 56, paddingLeft: 0,
            borderRadius: 28, overflow: "hidden",
            boxShadow: "0 10px 24px rgba(50,67,92,0.18)",
            transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
            position: "relative",
            whiteSpace: "nowrap",
            fontWeight: 800,
            fontSize: 14,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.width = "140px";
            e.currentTarget.style.paddingLeft = "18px";
            const span = e.currentTarget.querySelector(".label-span") as HTMLElement;
            if (span) span.style.opacity = "1";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.width = "56px";
            e.currentTarget.style.paddingLeft = "0px";
            const span = e.currentTarget.querySelector(".label-span") as HTMLElement;
            if (span) span.style.opacity = "0";
          }}
        >
          <span className="label-span" style={{ flex: 1, opacity: 0, transition: "opacity 0.2s", overflow: "hidden" }}>
            {it.label}
          </span>
          <span style={{
            width: 56, height: 56, flex: "0 0 56px",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            {it.icon}
          </span>
        </a>
      ))}

      {/* TOP button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="맨 위로"
        style={{
          width: 56, height: 56, borderRadius: 28,
          background: "var(--white)", color: "var(--ink)",
          border: "1.5px solid var(--line-2)",
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 10px 24px rgba(50,67,92,0.12)",
          opacity: showTop ? 1 : 0,
          transform: showTop ? "translateY(0)" : "translateY(20px)",
          pointerEvents: showTop ? "auto" : "none",
          transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
          fontSize: 10, fontWeight: 900, letterSpacing: "0.1em",
          flexDirection: "column", gap: 2,
        }}
        onMouseEnter={(e) => { e.currentTarget.style.background = "var(--ink)"; e.currentTarget.style.color = "var(--white)"; e.currentTarget.style.borderColor = "var(--ink)"; }}
        onMouseLeave={(e) => { e.currentTarget.style.background = "var(--white)"; e.currentTarget.style.color = "var(--ink)"; e.currentTarget.style.borderColor = "var(--line-2)"; }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
        TOP
      </button>
    </div>
  );
}
