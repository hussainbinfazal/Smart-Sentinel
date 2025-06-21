import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const OnsiteWork = () => {
  return (
    <div className="max-w-screen-2xl w-full rounded-lg min-h-[300px] bg-white flex flex-col items-center justify-center  relative">
      <Card className="w-full max-w-screen md:max-w-full max-h-[800px]  dark:bg-black relative rounded-lg !p-0">
        <CardContent className="flex !p-0 aspect-square flex-col gap-7 pb-4 relative w-full h-full max-h-[800px] rounded-lg">
          <div className="relative w-full h-full aspect-[16/9] border-none outline-none rounded-lg ">
            <Image
              src="/technicians/installation.webp"
              alt={"technician Image"}
              fill
              
              className="relative rounded-lg  z-0 border-none outline-none"
            />
            <div className="absolute  left-4 top-1/2 transform -translate-y-1/2 z-10 space-y-6 text-white">
              <div className="bg-black/5 backdrop-blur-[1px] p-6 rounded-lg mr-4 md:mr-1  max-w-3xl">
                <p className=" w-full max-w-[4xl] text-[10px] md:text-xl text-gray-100 font-semibold mt-4  leading-relaxed">
                  WHY SMART SENTINEL
                
                </p>
                <h2 className="text-3xl md:text-7xl font-bold mt-4 text-white drop-shadow-lg">
                  We take care of everything for you 
                </h2>
                <p className=" w-full max-w-[4xl] text-[10px] md:text-lg text-gray-100 font-normal mt-4  leading-relaxed">
                  You don't have to worry about a thing.Our Certified Pros install everything for you & show you how to use it.And with 24/7 monitoring and support,help is always just a few seconds away.
                
                </p>
              </div>
            </div>
            <div className="backdrop-blur-[2px]  backdrop-brightness-105 z-5 rounded-sm dark:rounded-lg w-full h-full !border-none !outline-none"></div>
          </div>
          
         
        </CardContent>
      </Card>
    </div>
  );
};

export default OnsiteWork;
