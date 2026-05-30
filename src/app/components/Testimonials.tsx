"use client";

import React, { JSX, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,

} from "@/components/ui/carousel";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () : JSX.Element => {
  const [testimonial, setTestimonial] = useState<{ key: number; image: string; name: string; text: string }[]>([
    {
      key: 1,
      image: "/testimonial/user.png",
      name: "Faisal Khan",
      text: "Smart Sentinel did an excellent job installing my CCTV and electronic lock system.The team was professional, knowledgeable across brands, and guided me through everything with ease. The cameras have clear day/night vision with remote access, and the lock is secure yet convenient with fingerprint, passcode.Their after-sales support is outstanding, making the whole experience reliable and stress-free.Highly recommended.",
    },
    {
      key: 2,
      image: "/testimonial/user.png",
      name: "Tushar",
      text: "Excellent professional team installed security system at my shop with competitive price. Thanks Smart Sentinel",
    },
    {
      key: 3,
      image: "/testimonial/user.png",
      name: "Faisal Saiyed",
      text: "I have known Smart Sentinel and Feroz for sometime now. He has always come across as being very professional and polite. He has a strong desire to troubleshoot issues and work in a manner that is both cost effective and long term",
    },
  ]);
  return (
    <div className="max-w-screen-2xl w-full min-h-[200px] max-h-[800px] md:max-h-[700px] lg:max-h-[700px] bg-white dark:bg-black flex flex-col items-center justify-center border-none outline-none p-8 rounded-2xl" id="testimonials ">
      <Carousel
        setApi={() => {}} //setApi
        className="w-full md:w-2/3 max-w-full p-0  bg-white dark:bg-black  !outline-none !border-none !shadow-none !rounded-3xl"
        opts={{
          align: "start",
          loop: true,
          dragFree: true,
        }}
        plugins={[
          Autoplay({
            delay: 2000,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
          }),
        ]}
      >
        <CarouselContent
          className={" bg-white dark:bg-black/100 !border-none shadow-none outline-none p-0 m-0  "}
        >
          {(testimonial || []).map((testimonial) => (
            <CarouselItem
              key={testimonial?.key}
              className={" bg-white border-white shadow-none rounded-none  outline-none  dark:bg-black p-0 pr-5 rounded-3xl"}
            >
              <div className="w-full h-full bg-white shadow-none dark:bg-black rounded-3xl">
  <Card className="relative overflow-hidden border border-border/50 bg-background/100 !dark:bg-black backdrop-blur-none shadow-none rounded-3xl p-8 h-full">
    <CardContent className="flex flex-col items-center text-center gap-6 p-0">

      {/* Quote Icon */}
      <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 h-7 text-primary"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M7.17 6A5.001 5.001 0 0 0 2 11v7h7v-7H5.08A3.001 3.001 0 0 1 8 8V6H7.17Zm9 0A5.001 5.001 0 0 0 11 11v7h7v-7h-3.92A3.001 3.001 0 0 1 17 8V6h-.83Z" />
        </svg>
      </div>

      {/* Testimonial */}
      <p className="text-lg md:text-2xl leading-relaxed font-medium text-gray-600 dark:text-white max-w-3xl">
        "{testimonial?.text}"
      </p>

      {/* User */}
      <div className="flex flex-col items-center gap-3 mt-4">
        <div className="relative h-20 w-20">
          <Image
            src={testimonial?.image}
            alt={testimonial?.name || "User"}
            fill
            className="rounded-full object-cover border-4 border-background shadow-lg"
          />
        </div>

        <div>
          <h4 className="font-semibold text-lg">
            {testimonial?.name}
          </h4>

          
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 bg-white dark:bg-black">
        <div className="absolute top-0 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-primary/0 blur-none" />
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
