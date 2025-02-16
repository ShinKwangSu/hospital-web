import Image from "next/image";

export const metadata = {
  title: "의료진소개",
};

export default function Introduce() {
  return (
    <div className="w-[80%] mx-auto">
      <div className="relative w-full aspect-[1536/928]">
        <Image
          src="/02_about/medical-team/Dr_01.jpg"
          alt="메인 이미지"
          fill
          style={{ objectFit: "contain", objectPosition: "center" }}
        />
      </div>
      <div className="relative w-full aspect-[1536/928]">
        <Image
          src="/02_about/medical-team/Dr_02.jpg"
          alt="메인 이미지"
          fill
          style={{ objectFit: "contain", objectPosition: "center" }}
        />
      </div>
      <div className="relative w-full aspect-[1536/928]">
        <Image
          src="/02_about/medical-team/Dr_03.jpg"
          alt="메인 이미지"
          fill
          style={{ objectFit: "contain", objectPosition: "center" }}
        />
      </div>
    </div>
  );
}
