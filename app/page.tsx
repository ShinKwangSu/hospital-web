import { MainMiddleBanner01 } from "@/components/carousel/main-middle-banner01";
import { MainMiddleBanner02 } from "@/components/carousel/main-middle-banner02";
import { MainTopBanner } from "@/components/carousel/main-top-banner";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div>
        <Image
          src="/01_home/01_top_img/top_img_01.jpg"
          alt="메인 이미지"
          width={1920}
          height={1095}
          layout="responsive"
        />
        <MainTopBanner />
        <div className="flex">
          <MainMiddleBanner01 />
          <MainMiddleBanner02 />
        </div>
        <Image
          src="/01_home/05_banner_bottom/banner_bottom.jpg"
          alt="메인 하단 이미지"
          width={1920}
          height={508}
          layout="responsive"
        />
      </div>
    </div>
  );
}
