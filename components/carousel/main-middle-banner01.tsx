import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

export function MainMiddleBanner01() {
  const images = [
    "/01_home/03_slide/slide_01.jpeg",
    "/01_home/03_slide/slide_02.jpeg",
    "/01_home/03_slide/slide_03.jpeg",
    "/01_home/03_slide/slide_04.jpeg",
  ];

  return (
    <Carousel className="w-full p-4 md:p-6 lg:p-10">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="">
              <Card>
                <CardContent className="relative w-50 aspect-[1100/800]">
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
