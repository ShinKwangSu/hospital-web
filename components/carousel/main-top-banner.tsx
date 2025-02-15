import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export function MainTopBanner() {
  const images = [
    "/01_home/02_banner_main/banner_main_01.jpg",
    "/01_home/02_banner_main/banner_main_02.jpg",
    "/01_home/02_banner_main/banner_main_03.jpg",
  ];

  return (
    <Carousel className="w-full relative">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="">
              <Card>
                <CardContent className="relative w-full aspect-[1920/436]">
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
      <CarouselPrevious className="absolute left-2 sm:left-10 lg:left-20" />
      <CarouselNext className="absolute right-2 sm:right-10 lg:right-20" />
    </Carousel>
  );
}
