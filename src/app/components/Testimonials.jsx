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
    <div className="max-w-screen-2xl w-full min-h-[300px] max-h-[400p4] bg-white dark:bg-black/40 flex flex-col items-center justify-center p-4">
      <Carousel
        className="w-1/2 max-w-full !p-0 bg-transparent dark:bg-black  outline-none border-none"
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
          className={"bg-transparent dark:bg-black border-none outline-none "}
        >
          {(testimonial || []).map((testimonial) => (
            <CarouselItem
              key={testimonial?.key}
              className={
                "border-none  outline-none  dark:bg-black gap-x-2 "
              }
            >
              <div className="relative w-full h-full  border-none outline-none dark:rounded-sm  ">
                <Card className="w-full h-full  max-h-[400px] !p-0 rounded-none  outline-none border-none dark:rounded-sm bg-transparent">
                  <CardContent className="flex flex-col aspect-square bg-transparent items-center justify-start gap-8 p-0  rounded-none w-full max-h-[400px] outline-none border-none">
                    
                      <p>
                        "{testimonial?.text}"
                      </p>
                    
                    <div className="relative w-full h-1/2 border-none outline-none">
                      <Image
                        src={testimonial?.image}
                        alt={"Product Image"}
                        fill
                        className="object-contain relative rounded-none  z-0 border-none outline-none"
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
