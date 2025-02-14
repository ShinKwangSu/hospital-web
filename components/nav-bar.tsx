"use client";

import { useEffect, useState } from "react";
import DesktopNav from "./desktop-nav";
import MobileNav from "./mobile-nav";

export default function NavBar() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // 화면 크기 감지하여 상태 업데이트
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize(); // 초기 실행
    window.addEventListener("resize", handleResize); // 리사이즈 감지

    return () => window.removeEventListener("resize", handleResize); // 클린업
  }, []);

  return (
    <nav className="w-full py-4">
      {isMobile ? <MobileNav /> : <DesktopNav />}
    </nav>
  );
}
