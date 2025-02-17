import Link from "next/link";

export default function Footer() {
  return (
    <div
      className="flex flex-col gap-5 bg-black px-6 py-8 text-xs text-gray-400 justify-center items-center mt-[50px]
                md:px-10 md:py-10 lg:px-14 lg:py-16 lg:text-lg"
    >
      <div className="w-full sm:grid sm:grid-cols-1 lg:flex lg:justify-between lg:items-center">
        <div>삼성마취통증의학과</div>
        {/* <div className="text-gray-400 text-xl">|</div> */}

        <div>대표자: 한상주</div>
        {/* <div className="text-gray-400 text-xl">|</div> */}

        <div>강원도 홍천군 홍천읍 꽃뫼로 124, 1층 2층</div>
        {/* <div className="text-gray-400 text-xl">|</div> */}

        <div>사업자등록번호: 116-94-41794</div>
        {/* <div className="text-gray-400 text-xl">|</div> */}

        <div>전화번호: 033-435-3663</div>
      </div>

      <div className="">
        <Link href={"/privacy"}>
          <span>개인정보처리방침</span>
        </Link>
      </div>

      <div className=" text-gray-400 text-center">
        <span>
          © {new Date().getFullYear()} SAMSUNG CLINIC. All rights reserved.
        </span>
      </div>
    </div>
  );
}
