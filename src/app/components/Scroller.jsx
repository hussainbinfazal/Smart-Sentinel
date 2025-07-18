'use client';

import React from 'react';
import { motion, useSpring, useScroll } from 'framer-motion'; // make sure you're importing from 'framer-motion'

const Scroller = () => {
  const { scrollYProgress } = useScroll();
  

  return (
    <motion.div
    style={{ scaleX: scrollYProgress }}
      className="h-[4px] bg-[#09bc8a] rounded-sm dark:bg-[#09bc89b6] fixed top-0 left-0 right-0 z-50 origin-left"
    />
  );
};

export default Scroller;