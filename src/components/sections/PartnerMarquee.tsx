export default function PartnerMarquee() {
  const partners = [
    "햇살유치원", "꿈꾸는 어린이집", "별빛유치원", "튼튼유치원", "무지개 어린이집",
    "아이사랑 유치원", "푸른숲 어린이집", "새싹유치원", "도담도담 어린이집", "파랑새 유치원",
    "한울유치원", "나래 어린이집",
  ];
  const list = [...partners, ...partners];

  return (
    <section style={{ padding: "40px 0", background: "var(--paper)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", overflow: "hidden" }}>
      <div className="container" style={{ display: "flex", alignItems: "center", gap: 40 }}>
        <div style={{ flex: "0 0 auto", fontSize: 13, fontWeight: 800, color: "var(--ink-3)", letterSpacing: "0.14em", whiteSpace: "nowrap" }} className="hidden md:block">
          200+ 제휴 기관과 함께해요
        </div>
        <div style={{ position: "relative", overflow: "hidden", flex: 1, maskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)", WebkitMaskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)" }}>
          <div style={{ display: "flex", gap: 40, whiteSpace: "nowrap" }} className="animate-marquee">
            {list.map((p, i) => (
              <span key={i} style={{ fontSize: 18, fontWeight: 800, color: "var(--ink-2)", letterSpacing: "-0.02em", opacity: 0.55 }}>
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
