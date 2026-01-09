import "./globals.css";
import Header from "@/components/Header"; // 1. Header 불러오기

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="antialiased">
        <Header /> {/* 2. 여기에 배치 */}
        <main className="pt-24"> {/* 헤더 높이만큼 띄워줍니다 */}
          {children}
        </main>
      </body>
    </html>
  );
}