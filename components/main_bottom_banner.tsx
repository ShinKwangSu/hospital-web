import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export function MainBottomBanner() {
  const images = ["/01_home/05_banner_bottom/banner_bottom.jpg"];

  return (
    <Carousel className="w-full relative">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="">
              <Card>
                <CardContent className=" ">
                  <Image
                    src={image}
                    alt={`Banner ${index + 1}`}
                    width={1920}
                    height={508}
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
