import NavBar from "@/components/nav-bar";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    template: "%s | 삼성마취통증의학과의원",
    default: "삼성마취통증의학과의원",
  },
  // icons: {
  //   icon: [
  //     { rel: "icon", url: "/favicon.ico" }, // 기본 .ico
  //     // { rel: "icon", type: "image/svg+xml", url: "/favicon.svg" }, // SVG 추가
  //     // { rel: "icon", type: "image/png", sizes: "32x32", url: "/favicon-32x32.png" },
  //     // { rel: "icon", type: "image/png", sizes: "48x48", url: "/favicon-48x48.png" },
  //   ],
  // },
  description: "삼성마취통증의학과의원",
};

// export const metadata: Metadata = {
//   title: {
//     template: "%s | 삼성마취통증의학과의원",
//     default: "삼성마취통증의학과의원",
//   },
//   description: "삼성마취통증의학과의원",
//   icons: {
//     icon: [
//       { rel: "icon", url: "/favicon.ico" }, // 기본 .ico
//       { rel: "icon", type: "image/svg+xml", url: "/favicon.svg" }, // SVG 추가
//       {
//         rel: "icon",
//         type: "image/png",
//         sizes: "32x32",
//         url: "/favicon-32x32.png",
//       },
//       {
//         rel: "icon",
//         type: "image/png",
//         sizes: "48x48",
//         url: "/favicon-48x48.png",
//       },
//     ],
//   },
//   openGraph: {
//     title: "삼성마취통증의학과의원",
//     description: "당신의 건강을 위한 최선의 선택",
//     url: "https://hospital-web-kappa.vercel.app", // 여기에 실제 사이트 URL 입력
//     siteName: "삼성마취통증의학과의원",
//     images: [
//       {
//         url: "https://hospital-web-kappa.vercel.app/logo.svg", // OG 이미지 URL
//         width: 1200,
//         height: 630,
//         alt: "삼성마취통증의학과의원 대표 이미지",
//       },
//     ],
//     type: "website",
//   },
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased container min-h-screen mx-auto px-4`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
