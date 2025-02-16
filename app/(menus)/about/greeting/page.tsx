import GreetingYoutube from "@/components/youtube/greeting-youtube";
import Image from "next/image";

export const metadata = {
  title: "인사말",
};

export default function Introduce() {
  return (
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

      <GreetingYoutube />
    </div>
  );
}
