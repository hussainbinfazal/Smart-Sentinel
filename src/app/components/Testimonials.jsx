"use client";

import React, { useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const [testimonial, setTestimonial] = useState([
    {
      key: 1,
      image: "/testimonial/amazon.webp",
      name: "Amazon",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, dicta.",
    },
    {
      key: 2,
      image: "/testimonial/facebook2.png",
      name: "Facebook",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, dicta.",
    },
    {
      key: 3,
      image: "/testimonial/atlassian.png",
      name: "Facebook",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, dicta.",
    },
  ]);
  return (
    <div className="max-w-screen-2xl w-full min-h-[300px] max-h-[800px] md:max-h-[400px] bg-white dark:bg-black/40 flex flex-col items-center justify-center border-none outline-none p-8">
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
          className={" bg-white dark:bg-black !border-none !outline-none p-0 m-0"}
        >
          {(testimonial || []).map((testimonial) => (
            <CarouselItem
              key={testimonial?.key}
              className={"!border-none border-white !rounded-none  !outline-none  dark:bg-black !p-0"}
            >
              <div className="relative w-full h-full  !border-none !outline-none rounded-none dark:rounded-sm  ">
                <Card className="w-full h-full max-h-[800px]  md:max-h-[400px] p-4  rounded-none  !outline-none !border-none shadow-none border-0 dark:rounded-sm bg-transparent">
                  <CardContent className="flex flex-col aspect-square bg-transparent items-center justify-start gap-8 p-0  !rounded-none w-full max-h-[400px] !outline-none border-none">
                    <p className="text-2xl md:text-4xl min-h-[150px] max-h-[700px] md:max-h-[200px] overflow-hidden w-full  text-center font-semibold">
                      "{testimonial?.text}"
                    </p>

                    <div className="relative w-2/3 h-1/2 !border-none !outline-none rounded-lg">
                      <Image
                        src={testimonial?.image}
                        alt={"Product Image"}
                        fill
                        className="object-contain relative rounded-lg  z-0 !border-none !outline-none"
                      />
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

export default Testimonials;
