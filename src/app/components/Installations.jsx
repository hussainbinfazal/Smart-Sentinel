"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import React, { useState } from "react";

const Installations = () => {
  const [installedProducts, setInstalledProducts] = useState([
    {
      key: 1,
      image: "/installed products/lock3.jpg",
    },

    {
      key: 3,
      image: "/installed products/lock4.jpg",
    },
    {
      key: 4,
      image: "/installed products/lock5.jpg",
    },
    {
      key: 5,
      image: "/installed products/lock6.jpg",
    },
    {
      key: 6,
      image: "/installed products/lock7.jpg",
    },

    {
      key: 8,
      image: "/installed products/lock9.jpg",
    },
    {
      key: 9,
      image: "/installed products/lock10.jpg",
    },

    {
      key: 11,
      image: "/installed products/lock12.jpg",
    },
    {
      key: 12,
      image: "/installed products/lock13.jpg",
    },
  ]);
  return (
    <div className="max-w-screen-2xl w-full min-h-[300px] bg-white dark:bg-black flex flex-col items-center justify-center gap-12 p-4 max-h-[500px]">
      <div>
        <h2 className="uppercase text-4xl text-center leading-16">
          Our latest{" "}
          <span className="text-green-800 font-semibold"> installations</span>{" "}
        </h2>
      </div>
      <Carousel
        className="w-full md:w-2/3 max-w-full !p-0  dark:bg-black  !outline-none !border-none bg-white"
        opts={{
          align: "start",
          loop: true,
          dragFree: true,
        }}
        plugins={[
          Autoplay({
            delay: 2500,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
          }),
        ]}
      >
        <CarouselContent
          className={
            "w-full bg-white dark:bg-black !border-none !outline-none p-0 m-0"
          }
        >
          {(installedProducts || []).map((products) => (
            <CarouselItem
              key={products?.key}
              className={
                "!border-none border-white !rounded-none  !outline-none  dark:bg-black !p-0"
              }
            >
              <div className="relative w-full h-full  !border-none !outline-none rounded-none dark:rounded-sm  ">
                <Card className="w-full h-full max-h-[800px]  md:max-h-[400px] p-4 shadow-none rounded-lg border-0 !outline-none  dark:rounded-sm bg-transparent relative">
                  <CardContent className="flex flex-col aspect-square bg-transparent items-center justify-start gap-8 p-0  !rounded-lg w-full border-0  !outline-none border-none border-opacity-0 relative overflow-hidden">
                    <div className="relative w-full h-full !border-none !outline-none !rounded-xl overflow-hidden">
                      <Image
                        src={products?.image}
                        alt={"Product Image"}
                        fill
                        className="object-contain relative  z-0 !border-none !outline-none"
                      />
                      <div className="backdrop-blur-[0.5px]  backdrop-brightness-105 z-5 rounded-sm dark:rounded-lg w-full h-full !border-none !outline-none"></div>
                    </div>
                  </CardContent>
                  
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious
          className={"border-none outline-none text-gray-300 bg-transparent"}
        />
        <CarouselNext
          className={"border-none outline-none text-gray-300 bg-transparent"}
        /> */}
      </Carousel>
    </div>
  );
};

export default Installations;
