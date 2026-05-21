"use client";
import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "zoom";

const variants: Record<Direction, Variants> = {
  up:    { hidden: { opacity: 0, y: 40 },       visible: { opacity: 1, y: 0 } },
  down:  { hidden: { opacity: 0, y: -30 },      visible: { opacity: 1, y: 0 } },
  left:  { hidden: { opacity: 0, x: -48 },      visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 48 },       visible: { opacity: 1, x: 0 } },
  zoom:  { hidden: { opacity: 0, scale: 0.88 }, visible: { opacity: 1, scale: 1 } },
};

export default function FadeIn({
  children,
  direction = "up",
  delay = 0,
  className,
}: {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={variants[direction]}
      transition={{ delay, type: "spring", stiffness: 60, damping: 14 }}
    >
      {children}
    </motion.div>
  );
}
