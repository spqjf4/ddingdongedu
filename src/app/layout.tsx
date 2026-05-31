import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "띵동 어린이체육교실",
  description: "아이의 첫 운동친구, 띵동이 함께해요. 유아·아동 체육 전문 교육기관",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        {children}
      </body>
    </html>
  );
}
