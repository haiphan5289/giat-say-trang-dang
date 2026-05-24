"use client";
import { motion } from "framer-motion";

export default function AnimatedConnector() {
  return (
    <motion.div
      className="hidden md:block absolute top-10 left-[14%] right-[14%] h-0.5 bg-gradient-to-r from-blue-300 via-violet-300 to-amber-300 z-0 origin-left"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay: 0.1 }}
    />
  );
}
