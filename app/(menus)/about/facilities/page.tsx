"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";

const facilityMenus = ["데스크", "클리닉"];

const images = [
  {
    label: "데스크",
    paths: [
      "/02_about/facilities/desk/01.jpeg",
      "/02_about/facilities/desk/02.jpeg",
      "/02_about/facilities/desk/03.jpeg",
      "/02_about/facilities/desk/04.jpeg",
      "/02_about/facilities/desk/05.jpeg",
      "/02_about/facilities/desk/06.jpeg",
    ],
  },
  {
    label: "클리닉",
    paths: [
      "/02_about/facilities/clinic/01.jpeg",
      "/02_about/facilities/clinic/02.jpeg",
      "/02_about/facilities/clinic/03.jpeg",
      "/02_about/facilities/clinic/04.jpeg",
    ],
  },
];

export default function Facilities() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [carouselApi, setCarouselApi] = React.useState<CarouselApi | null>(
    null
  );
  const [selectedMenu, setSelectedMenu] = useState<string>(facilityMenus[0]);

  React.useEffect(() => {
    if (!carouselApi) {
      return;
    }

    carouselApi.on("select", () => {
      setCurrentIndex(carouselApi.selectedScrollSnap());
    });
  }, [carouselApi]);

  const handleThumbnailClick = (index: number) => {
    if (carouselApi) {
      carouselApi.scrollTo(index);
    }
  };

  // 선택된 메뉴에 맞는 이미지만 필터링
  const selectedImages = images.find(
    (section) => section.label === selectedMenu
  );

  return (
    <div className="w-[80%] mx-auto mt-[50px]">
      <div className="bg-slate-400 flex space-x-4 mb-6">
        {facilityMenus.map((menu, menuIndex) => (
          <div
            key={menuIndex}
            onClick={() => setSelectedMenu(menu)}
            className={`cursor-pointer px-4 py-2 rounded-md ${
              selectedMenu === menu ? "bg-primary text-white" : "bg-gray-200"
            }`}
          >
            {menu}
          </div>
        ))}
      </div>

      {selectedImages && (
        <div key={selectedImages.label} className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            {selectedImages.label}
          </h2>
          <Carousel setApi={setCarouselApi}>
            <CarouselContent>
              {selectedImages.paths.map((src, index) => (
                <CarouselItem key={index}>
                  <Card className="shadow-none">
                    <CardContent className="flex aspect-[3/2] border-none items-center justify-center p-0">
                      <Image
                        src={src}
                        alt={`Slide ${index + 1}`}
                        width={600}
                        height={400}
                        className="object-cover"
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-[-2rem] lg:left-[10rem]" />
            <CarouselNext className="absolute right-[-2rem] md:right-[-3rem] lg:right-[10rem]" />
          </Carousel>
          <div className="flex justify-center space-x-2 mt-4">
            {selectedImages.paths.map((src, index) => (
              <button
                key={index}
                onClick={() => handleThumbnailClick(index)}
                className={cn(
                  "w-16 h-16 border-2 rounded overflow-hidden transition-all",
                  currentIndex === index
                    ? "border-primary"
                    : "border-transparent"
                )}
              >
                <Image
                  src={src}
                  alt={`Thumbnail ${index + 1}`}
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
