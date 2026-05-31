import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    let body;
    try {
      body = await req.json();
    } catch (e) {
      console.error("JSON parse error:", e);
      return NextResponse.json({ success: false, error: "Invalid JSON" }, { status: 400 });
    }
    
    const { name, phone, age, message } = body;
    console.log("Contact form request received:", { name, phone, age, message });

    if (!process.env.NAVER_USER || !process.env.NAVER_PASS) {
      console.error("Missing environment variables: NAVER_USER or NAVER_PASS");
      return NextResponse.json({ success: false, error: "Server configuration error" }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.naver.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.NAVER_USER,
        pass: process.env.NAVER_PASS,
      },
    });

    const mailOptions = {
      from: process.env.NAVER_USER,
      to: "titania32@naver.com",
      subject: `[문의접수] ${name}님의 상담 신청입니다.`,
      text: `
        이름: ${name}
        연락처: ${phone}
        자녀 연령: ${age || "미입력"}
        문의 내용: ${message || "내용 없음"}
      `,
      html: `
        <h3>새로운 상담 신청이 접수되었습니다.</h3>
        <p><strong>이름:</strong> ${name}</p>
        <p><strong>연락처:</strong> ${phone}</p>
        <p><strong>자녀 연령:</strong> ${age || "미입력"}</p>
        <p><strong>문의 내용:</strong></p>
        <p>${message ? message.replace(/\n/g, "<br>") : "내용 없음"}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Email sending error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
