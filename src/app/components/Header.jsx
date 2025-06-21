"use client";
import Link from "next/link";
import { useState, useRef, useMemo, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Scroller from "./Scroller";
// import { badgeVariants } from "@/components/ui/badge";
import { Phone } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ThemeToggler } from "./ThemeToggler";
import Image from "next/image";
// import { BarLoader, ClipLoader } from "react-spinners";

export default function Header() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  return (
    <header className="sticky top-0 z-50 flex justify-center items-center w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 ">
      <Scroller />

      <div
        className={`container flex justify-center h-16 max-w-screen-2xl items-center`}
      >
        <div className="mr-4 flex">
          <Link
            href="/"
            className="mr-6 flex items-center space-x-2 cursor-pointer"
          >
            <div className="font-bold  text-3xl flex items-center gap-2 p-1">
              {" "}
              <Image
                src="/logo/smart-sentinel.jpg"
                alt="logo"
                width={40}
                height={40}
                className="mr-2 "
              />
              <span className="whitespace-nowrap text3xl text-black/150 dark:text-white font-bold pb-0 ml-2">
                Smart Sentinel
              </span>
            </div>
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-between space-x-2 min-[25rem]:justify-end ">
          <div className="flex items-center space-x-2 min-[25rem]:space-x-1 min-[50rem]:hidden">
            <Link href="/cart" className="px-4   overflow-hidden ">
              <div
                className={`h-[2.2rem] ${
                  isHovering
                    ? "w-[8.9rem] justify-start pl-2 gap-3 "
                    : "w-[2.2rem] justify-center "
                }  relative border border-border rounded-md flex items-center  transition-all  duration-700 ease-in-out overflow-hidden bg-white dark:bg-transparent`}
                onMouseMove={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <div className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-none dark:bg-transparent rounded-full ">
                  <Phone className="h-4 w-4 bg-none text-[#9D9FA0] dark:text-white mr-1 " />
                </div>
                <div
                  className={`ml-7 transition-all duration-800 ease-in-out z-1 bg-white dark:bg-transparent ${
                    isHovering
                      ? "opacity-100 transform translate-x-0"
                      : "opacity-0 transform translate-x-4"
                  }`}
                >
                  <span
                    className="text-[#9D9FA0] bg-none dark:text-white whitespace-nowrap w-full"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      navigator.clipboard
                        .writeText(process.env.NEXT_PUBLIC_PHONE_NUMBE)
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
                    title="Click to copy phone number"
                  >
                    7840090049
                  </span>
                </div>
              </div>
            </Link>

            <div className="flex items-center gap-4">
              <ThemeToggler />
            </div>
          </div>
          <div className="hidden min-[50rem]:flex">
            <nav className="flex items-center">
              <Link
                href="/courses"
                className="px-4 hover:underline underline-offset-4 text-black dark:text-white "
              >
                Services
              </Link>
              <Link
                href="/about"
                className="px-4 hover:underline underline-offset-4"
              >
                About
              </Link>
              <Link href="/cart" className="px-4 overflow-hidden ">
                <div
                  className={`h-[2.2rem] ${
                    isHovering
                      ? "w-[8.9rem] justify-start pl-2 gap-3 "
                      : "w-[2.2rem] justify-center "
                  }  relative border border-border rounded-md flex items-center  transition-all  duration-700 ease-in-out overflow-hidden`}
                  onMouseMove={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  <div className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white dark:bg-transparent rounded-full p-1">
                    <Phone className="h-4 w-4 bg-none text-[#9D9FA0] dark:text-white" />
                  </div>
                  <div
                    className={`ml-7 transition-all duration-800 ease-in-out z-1 bg-white dark:bg-transparent ${
                      isHovering
                        ? "opacity-100 transform translate-x-0"
                        : "opacity-0 transform translate-x-4"
                    }`}
                  >
                    <span
                      className="text-[#9D9FA0] dark:text-white whitespace-nowrap"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        navigator.clipboard
                          .writeText("7840090049")
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
                      title="Click to copy phone number"
                    >
                      7840090049
                    </span>
                  </div>
                </div>
              </Link>
            </nav>

            <div className="flex items-center gap-4">
              <ThemeToggler />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
