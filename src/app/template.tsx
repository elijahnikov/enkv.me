"use client";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: 0, y: -30 },
  enter: { opacity: 1, x: 0, y: 0 },
};

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="enter"
      transition={{ type: "linear" }}
    >
      {children}
    </motion.div>
  );
}
