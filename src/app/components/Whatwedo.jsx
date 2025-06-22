"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LockKeyhole } from "lucide-react";
import { Cctv } from "lucide-react";
import { Megaphone } from "lucide-react";

const Whatwedo = () => {
  const [cards, setCards] = useState([
    {
      key: 1,
      icon: <LockKeyhole className="w-18 h-18"  />,
      heading: "Advanced Access Control Systems",
      text: "Our certified technicians install and maintain state-of-the-art smart lock solutions. Enhance your security with biometric access, remote monitoring, and real-time breach notifications.",
    },
    {
      key: 2,
      icon: <Cctv className="w-18 h-18"/>,
      heading: "Professional CCTV Surveillance",
      text: "Comprehensive video surveillance systems installed by our certified expert team. Featuring high-definition cameras, cloud storage, and 24/7 remote monitoring capabilities for complete property protection.",
    },
    {
      key: 3,
      icon: <Megaphone className="w-18 h-18"/>,
      heading: "Intelligent Security Sensors",
      text: "Advanced motion detection and environmental monitoring systems. Our professional installation includes perimeter sensors, intrusion detection, and automated alert systems for proactive security management.",
    },
  ]);
  return (
    <div className="max-w-screen-2xl w-full min-h-[300px] bg-white dark:bg-black/40 flex flex-col items-center justify-center p-4 gap-14" id="whatwedo">
      <h2 className="uppercase text-lg md:text-lg">What We Do </h2>
      <h2 className="uppercase text-4xl text-center">
        <span className="text-green-800 font-semibold">Smart Sentinel</span> is
        for your{" "}
      </h2>
      <div className="flex flex-col md:flex-row gap-4 w-full min-h-[400px] justify-center  md:items-start mt-8 items-center">
        {cards.map((card) => (
          <Card className="w-full max-w-sm md:max-w-full min-h-[350px] h-[400px] xl:h-[380px] 2xl:h-[300px] md:h-[400px]  max-h-[500px] overflow-hidden dark:bg-black/40">
            <CardContent className="flex flex-col justify-between gap-7 pb-4">
              <span className="text-black/80 dark:text-white w-full justify-center flex  text-lg">
                {card?.icon}
              </span>
              <h2 className="text-2xl font-semibold text-center whitespace-wrap">{card?.heading}</h2>
              <p className="text-black/110 text-center whitespace-pre-wrap overflow-hidden max-h-[150px]">{card?.text}</p>
            </CardContent>
            
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Whatwedo;
