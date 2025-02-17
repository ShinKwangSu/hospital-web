import Image from "next/image";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="relative w-full aspect-[1920/800]">
        <Image
          src="/01_home/01_top_img/top_img_01.jpg"
          alt="메인 이미지"
          fill
          style={{ objectFit: "contain", objectPosition: "center" }}
        />
      </div>
      {children}
    </div>
  );
}
