"use client";

import { useState } from "react";

function Field({ label, required, hint, children }: { label: string; required?: boolean; hint?: string; children: React.ReactElement }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <label style={{
        display: "flex", alignItems: "baseline", gap: 6,
        fontSize: 13, fontWeight: 800, color: "var(--ink)",
        marginBottom: 8,
      }}>
        {label}
        {required && <span style={{ color: "var(--coral)" }}>*</span>}
        {hint && <span style={{ fontSize: 12, color: "var(--ink-3)", fontWeight: 600 }}>{hint}</span>}
      </label>
      {/* 
        Tailwind classes are added to children for consistent styling.
      */}
      <div className="relative">
        {children}
      </div>
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", age: "", message: "", agree: false });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.agree || !form.name || !form.phone) return;
    
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setForm({ name: "", phone: "", age: "", message: "", agree: false });
        }, 3500);
      } else {
        alert("메일 전송에 실패했습니다. 잠시 후 다시 시도해주세요.");
      }
    } catch (err) {
      console.error(err);
      alert("오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = {
    width: "100%",
    padding: "13px 16px",
    fontSize: 14,
    fontFamily: "inherit",
    color: "var(--ink)",
    background: "var(--white)",
    border: "1.5px solid var(--line-2)",
    borderRadius: 12,
    outline: "none",
    transition: "border 0.2s, box-shadow 0.2s",
  };

  return (
    <section id="contact" className="section" style={{ background: "var(--white)" }}>
      <div className="container">
        <div style={{ alignItems: "center", textAlign: "center", marginBottom: 64 }}>
          <div style={{ fontSize: 13, fontWeight: 800, letterSpacing: "0.12em", color: "var(--ink-3)", marginBottom: 16 }}>CONTACT US</div>
          <h2 style={{ fontSize: "clamp(34px, 4vw, 52px)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1.15, margin: 0, color: "var(--ink)" }}>
            궁금하신 점이 있으신가요?
          </h2>
          <p style={{ fontSize: 18, lineHeight: 1.65, color: "var(--ink-2)", marginTop: 24, maxWidth: 640, marginInline: "auto" }}>
            언제든 편하게 문의해주세요. 24시간 이내 친절하게 답변드릴게요.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[32px]">
          {/* Form */}
          <form
            onSubmit={onSubmit}
            style={{
              padding: 40,
              borderRadius: 28,
              background: "var(--paper)",
              border: "1px solid var(--line)",
            }}
          >
            <h3 style={{ fontSize: 24, fontWeight: 900, letterSpacing: "-0.03em", margin: "0 0 4px", color: "var(--ink)" }}>
              상담 신청서
            </h3>
            <p style={{ fontSize: 14, color: "var(--ink-3)", margin: "0 0 28px" }}>
              간단한 정보만 남겨주시면 빠르게 연락드릴게요.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px] mb-[16px]">
              <Field label="이름" required>
                <input 
                  type="text" 
                  value={form.name} 
                  onChange={(e) => setForm({ ...form, name: e.target.value })} 
                  placeholder="홍길동" 
                  style={inputStyle}
                  onFocus={(e) => { e.target.style.borderColor = "var(--blue)"; e.target.style.boxShadow = "0 0 0 4px rgba(79,124,255,0.12)"; }}
                  onBlur={(e) => { e.target.style.borderColor = "var(--line-2)"; e.target.style.boxShadow = "none"; }}
                />
              </Field>
              <Field label="연락처" required>
                <input 
                  type="tel" 
                  value={form.phone} 
                  onChange={(e) => setForm({ ...form, phone: e.target.value })} 
                  placeholder="010-1234-5678" 
                  style={inputStyle}
                  onFocus={(e) => { e.target.style.borderColor = "var(--blue)"; e.target.style.boxShadow = "0 0 0 4px rgba(79,124,255,0.12)"; }}
                  onBlur={(e) => { e.target.style.borderColor = "var(--line-2)"; e.target.style.boxShadow = "none"; }}
                />
              </Field>
            </div>

            <Field label="자녀 연령" hint="(선택)">
              <select 
                value={form.age} 
                onChange={(e) => setForm({ ...form, age: e.target.value })}
                style={inputStyle}
                onFocus={(e) => { e.target.style.borderColor = "var(--blue)"; e.target.style.boxShadow = "0 0 0 4px rgba(79,124,255,0.12)"; }}
                onBlur={(e) => { e.target.style.borderColor = "var(--line-2)"; e.target.style.boxShadow = "none"; }}
              >
                <option value="">선택해주세요</option>
                <option value="3-4">만 3~4세</option>
                <option value="5-7">만 5~7세 (유아부)</option>
                <option value="8-10">만 8~10세 (초등 저학년)</option>
                <option value="11-13">만 11~13세 (초등 고학년)</option>
              </select>
            </Field>

            <Field label="문의 내용" hint="(선택)">
              <textarea
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="궁금하신 점을 자유롭게 남겨주세요."
                style={inputStyle}
                onFocus={(e) => { e.target.style.borderColor = "var(--blue)"; e.target.style.boxShadow = "0 0 0 4px rgba(79,124,255,0.12)"; }}
                onBlur={(e) => { e.target.style.borderColor = "var(--line-2)"; e.target.style.boxShadow = "none"; }}
              />
            </Field>

            <label style={{
              display: "flex", alignItems: "center", gap: 10,
              fontSize: 13, color: "var(--ink-2)", fontWeight: 600,
              marginBottom: 24, cursor: "pointer",
            }}>
              <input
                type="checkbox"
                checked={form.agree}
                onChange={(e) => setForm({ ...form, agree: e.target.checked })}
                style={{ width: 18, height: 18, accentColor: "var(--blue)" }}
              />
              개인정보 수집·이용에 동의합니다. <a href="#" style={{ color: "var(--blue)", textDecoration: "underline" }}>약관 보기</a>
            </label>

            <button
              type="submit"
              style={{ 
                width: "100%", justifyContent: "center", opacity: submitted ? 0.5 : 1,
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "16px 28px", borderRadius: "var(--radius-pill)",
                background: "var(--blue)", color: "var(--white)",
                fontSize: 16, fontWeight: 800,
                boxShadow: "var(--shadow-blue)",
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
              disabled={submitted}
              onMouseEnter={(e) => { if(!submitted) { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.background = "var(--blue-dark)"; } }}
              onMouseLeave={(e) => { if(!submitted) { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.background = "var(--blue)"; } }}
            >
              {submitted ? "✓ 신청이 접수되었습니다" : "상담 신청하기"}
              {!submitted && <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>}
            </button>
          </form>

          {/* Info + map */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {/* Map placeholder */}
            <div style={{
              flex: 1, minHeight: 280,
              borderRadius: 28, overflow: "hidden",
              background: "linear-gradient(135deg, #eef2ff 0%, #dde6ff 100%)",
              position: "relative",
              border: "1px solid var(--line)",
            }}>
              {/* Map grid pattern */}
              <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: "absolute", inset: 0, opacity: 0.45 }}>
                <defs>
                  <pattern id="mapgrid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(79,124,255,0.25)" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#mapgrid)" />
                {/* Roads */}
                <path d="M 0 50 Q 30 45 50 50 T 100 50" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="14" />
                <path d="M 50 0 L 50 100" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="8" />
              </svg>

              {/* Pin */}
              <div style={{
                position: "absolute", top: "50%", left: "50%",
                transform: "translate(-50%, -100%)",
              }} className="animate-bounce-soft">
                <div style={{
                  width: 60, height: 60, borderRadius: "50% 50% 50% 0",
                  background: "var(--coral)",
                  transform: "rotate(-45deg)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  boxShadow: "0 12px 28px rgba(255,143,122,0.5)",
                }}>
                  <div style={{
                    transform: "rotate(45deg)",
                    width: 28, height: 28, borderRadius: "50%",
                    background: "var(--white)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontWeight: 900, color: "var(--coral)", fontSize: 16,
                  }}>띵</div>
                </div>
              </div>

              <div style={{
                position: "absolute", bottom: 20, left: 20, right: 20,
                padding: "14px 20px",
                background: "var(--white)",
                borderRadius: 16,
                boxShadow: "var(--shadow-md)",
                display: "flex", justifyContent: "space-between", alignItems: "center",
              }}>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 800, color: "var(--ink)" }}>띵동 어린이체육교실</div>
                  <div style={{ fontSize: 12, color: "var(--ink-3)", marginTop: 2 }}>서울 강남구 띵동로 7길 14, 2층</div>
                </div>
                <a href="https://map.naver.com" target="_blank" rel="noopener noreferrer" style={{
                  fontSize: 12, fontWeight: 800, color: "var(--blue)", background: "var(--blue-bg)",
                  padding: "6px 12px", borderRadius: "var(--radius-pill)"
                }}>
                  지도 보기 →
                </a>
              </div>
            </div>

            {/* Contact card */}
            <div style={{
              padding: 28, borderRadius: 24,
              background: "var(--ink)", color: "var(--white)",
            }}>
              <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: "0.16em", color: "var(--coral)", marginBottom: 16 }}>
                CONTACT INFO
              </div>
              <div className="grid grid-cols-2 gap-[16px]">
                {[
                  { l: "전화", v: "02-1234-5678" },
                  { l: "이메일", v: "hello@ddingdong.kr" },
                  { l: "운영시간", v: "평일 09:00-18:00" },
                  { l: "카카오톡", v: "@띵동체육교실" },
                ].map((c) => (
                  <div key={c.l}>
                    <div style={{ fontSize: 11, fontWeight: 800, color: "rgba(255,255,255,0.5)", letterSpacing: "0.1em", marginBottom: 4 }}>
                      {c.l.toUpperCase()}
                    </div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: "var(--white)" }}>
                      {c.v}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
