"use client";

import Image from "next/image";
import Link from "next/link";
import { Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-16 min-h-[290px]  md:py-0 w-full  flex  justify-center items-center flex-col py-6 px-6 bg-[#D4D4D4]/20 dark:bg-black dark:border-t" id="footer ">
      <div className="container w-[4/5] min-h-[280px] h-full flex flex-col items-start justify-between  gap-4  md:flex-row pt-12">
        <div className="flex flex-col !items-center !justify-center gap-0">
          <Image
            src={"/logo/smart-sentinel.jpg"}
            width={100}
            height={100}
            className="rounded-lg"
          />
          <p className=" p-2 pl-6 text-center text-3xl font-semibold leading-loose  md:text-left">
            Smart Sentinel
          </p>
        </div>
        <div className="flex flex-1 flex-col items-center justify-start pl-6 md:pl-0  h-full">
          <div className=" w-full lg:w-2/3 flex flex-col justify-center gap-4 items-start">
            <div className="flex flex-col md:flex-row  gap-16">
              <div className="gap-5 flex flex-col">
                <h3 className="font-semibold">Access Controls</h3>
                <ul className="flex flex-col gap-2">
                  <li>
                    <Link href="/">Card Readers</Link>
                  </li>
                  <li>
                    <Link href="/">Door Locks</Link>
                  </li>
                  <li>
                    <Link href="/">Fingerprint Scanners</Link>
                  </li>
                </ul>
              </div>
              <div className="gap-5 flex flex-col">
                <h3 className="font-semibold">CCTV Systems</h3>
                <ul className="flex flex-col gap-2">
                  <li>
                    <Link href="/">WiFI Cameras</Link>
                  </li>
                  <li>
                    <Link href="/">IP Cameras</Link>
                  </li>
                  <li>
                    <Link href="/">Analog Cameras</Link>
                  </li>
                </ul>
              </div>
              <div className="gap-5 flex flex-col">
                <h3 className="font-semibold">Sensors</h3>
                <ul className="flex flex-col gap-2">
                  <li>
                    <Link href="/">Motion Sensors</Link>
                  </li>
                  <li>
                    <Link href="/">Temperature Sensors</Link>
                  </li>
                  <li>
                    <Link href="/">Security Sensors</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start gap-2 h-full font-semibold text-sm pt-2 pr-4 mt-8 mb-8 md:mt-0 md:mb-0 pl-6 md:pl-0">
          <div>CONTACT US ON </div>
          <div className="w-full md:justify-end justify-center flex">
            <span className="text-green-500 text-4xl w-full flex md:justify-end justify-center">
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 underline"
              >
                <FaWhatsapp />
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="w-4/5 md:h-[50px] h-[120px] flex justify-center items-center border-t mt-4 my-6">
        <p className="text-center md:text-left">
          © 2023 Smart Sentinel. All rights reserved. Smart Sentinel is a
          registered trademark of Smart Sentinel Inc.
        </p>
      </div>
    </footer>
  );
}
