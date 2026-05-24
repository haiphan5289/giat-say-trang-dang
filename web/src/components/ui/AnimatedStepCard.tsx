"use client";
import { motion, useReducedMotion } from "framer-motion";

interface StepData {
  number: string;
  emoji: string;
  title: string;
  description: string;
  gradient: string;
  shadow: string;
}

export default function AnimatedStepCard({ step, index }: { step: StepData; index: number }) {
  const reducedMotion = useReducedMotion();

  const entrance = reducedMotion
    ? {}
    : {
        initial: { opacity: 0, rotateX: 50, y: 40, scale: 0.9 },
        whileInView: { opacity: 1, rotateX: 0, y: 0, scale: 1 },
        viewport: { once: true, margin: "-60px" },
        transition: {
          delay: index * 0.08,
          duration: 0.4,
          type: "spring" as const,
          stiffness: 90,
          damping: 16,
        },
      };

  return (
    <motion.div
      className="relative z-10 group text-center"
      {...entrance}
      style={{ perspective: reducedMotion ? undefined : 900, transformOrigin: "bottom center" }}
    >
      <motion.div
        className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${step.gradient} shadow-lg ${step.shadow} group-hover:shadow-xl flex flex-col items-center justify-center gap-0.5 transition-shadow duration-300 mb-6`}
        whileHover={reducedMotion ? undefined : { scale: 1.12, rotateY: 15 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <span className="text-[10px] font-bold text-white/70 leading-none">{step.number}</span>
        <span className="text-2xl leading-none">{step.emoji}</span>
      </motion.div>

      <h3 className="font-bold text-slate-900 text-base mb-2 group-hover:text-blue-600 transition-colors">
        {step.title}
      </h3>
      <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
    </motion.div>
  );
}
