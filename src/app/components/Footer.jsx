
"use client"

import Link from "next/link"

export default function Footer() {
  return (
    <footer className="mt-8 min-h-[300px]  md:py-0 w-full border-t-none flex justify-center items-center flex-col py-6 px-6">
      <div className="container w-[4/5] flex flex-col items-center justify-between gap-4 md:h-20 md:flex-row">
        <div>
          
          <p className="text-center text-3xl font-semibold leading-loose  md:text-left">
          Smart Sentinel
          
          
        </p>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="/terms"
            className="text-sm font-medium underline-offset-4 hover:underline"
          >
            Terms
          </Link>
          <Link
            href="/privacy"
            className="text-sm font-medium underline-offset-4 hover:underline"
          >
            Privacy
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium underline-offset-4 hover:underline"
          >
            Contact
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium underline-offset-4 hover:underline"
          >
            About
          </Link>
          <Link
            href="/courses"
            className="text-sm font-medium underline-offset-4 hover:underline"
          >
            Courses
          </Link>
        </div>
      </div>
      <div className="w-4/5 h-[50px] flex justify-center items-center border-t mt-4">
      <p>
        © 2023 Brainnest. All rights reserved.
        Brainnest is a registered trademark of Brainnest Inc.
      </p>
      </div>
    </footer>
  )
}
