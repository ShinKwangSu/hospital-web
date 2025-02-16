"use client";

import Image from "next/image";
import YouTube from "react-youtube";

// export const metadata = {
//   title: "병원소개",
// };

export default function Introduce() {
  const youtubeId = "7En7mpCH-VY";
  return (
    <div>
      <div className="relative w-full aspect-[1920/550]">
        <Image
          src="/02_about/top_img_01.jpg"
          alt="메인 이미지"
          fill
          style={{ objectFit: "contain", objectPosition: "center" }}
        />
      </div>
      <div className="w-[80%] mx-auto">
        <div className="relative w-full aspect-[1536/998]">
          <Image
            src="/02_about/greeting/02_middle/img_01.jpg"
            alt="메인 이미지"
            fill
            style={{ objectFit: "contain", objectPosition: "center" }}
          />
        </div>
        <div className="relative w-full aspect-[1536/352]">
          <Image
            src="/02_about/greeting/03_middle_text/text_01.jpg"
            alt="메인 이미지"
            fill
            style={{ objectFit: "contain", objectPosition: "center" }}
          />
        </div>
        <div className="relative w-full aspect-[1536/352]">
          <Image
            src="/02_about/greeting/03_middle_text/text_02.jpg"
            alt="메인 이미지"
            fill
            style={{ objectFit: "contain", objectPosition: "center" }}
          />
        </div>
        <div className="flex flex-col justify-center">
          <div>TV속의 삼성 통증</div>
          <YouTube className="mx-auto" videoId={youtubeId} />
          <div className="text-center">
            [홍천 삼성통증의학과] 한상주 원장 - 목, 허리, 어깨통증, 체외충격파
            인터뷰
          </div>
        </div>
      </div>
    </div>
  );
}
