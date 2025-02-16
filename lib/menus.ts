export const menuItems = [
  {
    label: "병원소개",
    path: "/about/greeting",
    items: [
      { label: "인사말", path: "/about/greeting" },
      { label: "의료진 소개", path: "/about/medical-team" },
      { label: "내부 시설", path: "/about/facilities" },
      { label: "장비 소개", path: "/about/equipment" },
      { label: "오시는길", path: "/about/directions" },
    ],
  },
  {
    label: "진료과목",
    path: "/treatments", // 예시 경로
    items: [
      { label: "내과", path: "/treatments/internal-medicine" },
      { label: "외과", path: "/treatments/surgery" },
      { label: "소아과", path: "/treatments/pediatrics" },
      { label: "정형외과", path: "/treatments/orthopedics" },
      { label: "치과", path: "/treatments/dentistry" },
    ],
  },
  {
    label: "도수재활치료",
    path: "/rehabilitation", // 예시 경로
    items: [
      { label: "도수치료 프로그램", path: "/rehabilitation/manual-therapy" },
      { label: "척추 재활", path: "/rehabilitation/spine-rehabilitation" },
      { label: "관절 재활", path: "/rehabilitation/joint-rehabilitation" },
      { label: "운동치료", path: "/rehabilitation/exercise-therapy" },
    ],
  },
  {
    label: "체외충격파치료",
    path: "/shockwave-therapy", // 예시 경로
    items: [
      { label: "치료 방법", path: "/shockwave-therapy/method" },
      { label: "효과", path: "/shockwave-therapy/effects" },
      { label: "FAQ", path: "/shockwave-therapy/faq" },
    ],
  },
  {
    label: "오시는길",
    path: "/directions", // 예시 경로
    items: [
      { label: "지도 보기", path: "/directions/map" },
      { label: "교통편 안내", path: "/directions/transportation" },
      { label: "주차 정보", path: "/directions/parking" },
    ],
  },
];
