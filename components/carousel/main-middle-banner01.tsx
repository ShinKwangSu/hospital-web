"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useEffect, useState } from "react";

export function MainMiddleBanner01() {
  const images = [
    "/01_home/03_slide/slide_01.jpeg",
    "/01_home/03_slide/slide_02.jpeg",
    "/01_home/03_slide/slide_03.jpeg",
    "/01_home/03_slide/slide_04.jpeg",
  ];

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <Carousel
      className="w-full pr-4"
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 4000,
          stopOnMouseEnter: true,
        }),
      ]}
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="">
              <Card>
                <CardContent className="relative w-full aspect-[1100/800]">
                  <Image
                    src={image}
                    alt={`Banner ${index + 1}`}
                    fill
                    style={{ objectFit: "contain", objectPosition: "center" }}
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
