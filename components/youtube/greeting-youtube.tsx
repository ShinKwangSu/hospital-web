"use client";

import YouTube from "react-youtube";

export default function GreetingYoutube() {
  const youtubeId = "7En7mpCH-VY";
  return (
    <div className="flex flex-col justify-center">
      <div>TV속의 삼성 통증</div>
      <YouTube className="mx-auto" videoId={youtubeId} />
      <div className="text-center">
        [홍천 삼성통증의학과] 한상주 원장 - 목, 허리, 어깨통증, 체외충격파
        인터뷰
      </div>
    </div>
  );
}
