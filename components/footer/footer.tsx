import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex flex-col bg-black px-16 py-10 text-gray-400 justify-center items-center mt-10">
      <div className="space-x-6">
        <span>삼성마취통증의학과</span>
        <span className="text-gray-400 text-xl">|</span>

        <span>대표자: 한상주</span>
        <span className="text-gray-400 text-xl">|</span>

        <span>강원도 홍천군 홍천읍 꽃뫼로 124, 1층 2층</span>
        <span className="text-gray-400 text-xl">|</span>

        <span>사업자등록번호: 116-94-41794</span>
        <span className="text-gray-400 text-xl">|</span>

        <span>전회번호: 033-435-3663</span>
      </div>
      <div className="mt-5 space-x-6">
        <Link href={"/privacy"}>
          <span>개인정보처리방침</span>
        </Link>
      </div>
      <div className=" text-gray-400 text-center py-4 mt-8">
        <span>
          © {new Date().getFullYear()} SAMSUNG CLINIC. All rights reserved.
        </span>
      </div>
    </div>
  );
}
