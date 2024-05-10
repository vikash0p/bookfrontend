"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Parallax, Pagination, Navigation } from "swiper/modules";
import { heroData } from "@/utils/data";
import Image from "next/image";

export default function BookSwiper() {
  return (
    <>
      <Swiper
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper h-[500px] text-white bg-gray-900 mt-10"
      >
        {heroData.map((data, index) => {
          const isEven = index % 2 === 0;
          return (
            <SwiperSlide key={index}>
              <div className={`w-full h-full flex flex-col lg:flex-row justify-center items-center ${isEven ? 'even:flex-row-reverse' : ''}`}>
                <div className="relative overflow-x-hidden  w-[400px] h-[400px] flex-1  ">
                  <Image
                    className="object-contain"
                    src={data.image}
                    alt={data.name}
                    fill
                    sizes="100vw"
                  />
                </div>
                <div className="flex-1 px-10  text-center md:text-start ">
                  <h2 className=" text-2xl pt-5 md:pt-3 lg:py-0 md:text-4xl lg:text-5xl font-bold font-serif ">{data.name}</h2>
                  <p className="text-2xl font-serif line-clamp-3 md:block ">{data.description}</p>
                  <button type="button" className="px-10 py-2 text-xl my-1 md:my-5 bg-violet-900 text-white rounded">Read Book</button>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
