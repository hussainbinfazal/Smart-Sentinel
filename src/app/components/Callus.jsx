'use client'

import React from "react";
import { Smartphone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

const Callus = () => {
  return (
    <div className="max-w-screen-2xl w-full min-h-[100px] dark:bg-black bg-white flex gap-4 items-center justify-center p-4">
      <Card className="w-full h-full  max-h-[400px] p-4  rounded-lg  dark:rounded-sm bg-[#D4D4D4]/30 dark:bg-black">
        <CardContent className="flex aspect-square bg-transparent items-center justify-center gap-8 p-0  !rounded-none w-full max-h-[120px] ">
          <span className="">
            {" "}
            <Smartphone className="w-18 h-18" onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                navigator.clipboard
                  .writeText(process.env.NEXT_PUBLIC_PHONE_NUMBER)
                  .then(() => {
                    toast.success("Phone number copied to clipboard!");
                    e.target.style.color = "#10b981";
                    setTimeout(() => {
                      e.target.style.color = "";
                    }, 500);
                  })
                  .catch((err) => {
                    console.error("Failed to copy: ", err);
                  });
              }} />
          </span>
          <h3 className="text:sm md:text-3xl break-words leading-normal font-medium">
            Don't Wait for a Break-In! {"    "} Secure Your Property Today -  
            <span
            className="cursor-pointer underline !underline-offset-8 px-2 text-green-800 "
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                navigator.clipboard
                  .writeText(process.env.NEXT_PUBLIC_PHONE_NUMBER)
                  .then(() => {
                    toast.success("Phone number copied to clipboard!");
                    e.target.style.color = "#10b981";
                    setTimeout(() => {
                      e.target.style.color = "";
                    }, 500);
                  })
                  .catch((err) => {
                    console.error("Failed to copy: ", err);
                  });
              }}
            >
              Call Us
            </span>
          </h3>
        </CardContent>
      </Card>
    </div>
  );
};

export default Callus;
