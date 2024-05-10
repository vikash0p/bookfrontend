'use client'
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { best } from "@/utils/data";
import Image from "next/image";
export default function Achivements() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className=" max-w-7xl m-auto py-10 px-1"
    >
      <CarouselContent>
        {best.map((item, index) => (
          <CarouselItem key={index} className="basis-full md:basis-1/3 lg:basis-1/6">
            <div className="p-1">
              <Card>
                <CardContent className=" h-32 m-auto text-center pt-3 ">
                    <Image src={item.image} alt={item.description} width={80} height={80} className="object-center m-auto" />
                  <p className="text-base font-semibold">{item.description}</p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
