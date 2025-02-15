import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

export function MainMiddleBanner02() {
  const images = [
    "/01_home/04_slide/slide_01.jpeg",
    "/01_home/04_slide/slide_02.jpeg",
    "/01_home/04_slide/slide_03.jpeg",
    "/01_home/04_slide/slide_04.jpeg",
  ];

  return (
    <Carousel className="w-full p-4 md:p-6 lg:p-10">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="">
              <Card>
                <CardContent className=" ">
                  <Image
                    src={image}
                    alt={`Banner ${index + 1}`}
                    width={1100}
                    height={800}
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
