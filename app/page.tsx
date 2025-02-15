import { MainMiddleBanner01 } from "@/components/carousel/main-middle-banner01";
import { MainMiddleBanner02 } from "@/components/carousel/main-middle-banner02";
import { MainTopBanner } from "@/components/carousel/main-top-banner";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="relative w-full aspect-[1920/1095]">
        <Image
          src="/01_home/01_top_img/top_img_01.jpg"
          alt="메인 이미지"
          fill
          style={{ objectFit: "contain", objectPosition: "center" }}
        />
      </div>
      <MainTopBanner />
      <div className="flex">
        <MainMiddleBanner01 />
        <MainMiddleBanner02 />
      </div>
      <div className="relative w-full aspect-[1920/508]">
        <Image
          src="/01_home/05_banner_bottom/banner_bottom.jpg"
          alt="메인 하단 이미지"
          fill
          style={{ objectFit: "contain", objectPosition: "center" }}
        />
      </div>
    </div>
  );
}
