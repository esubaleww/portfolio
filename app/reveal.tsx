"use client";

import { motion } from "framer-motion";

export function Reveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return <motion.div className="h-full" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.65, delay: delay / 1000, ease: [0.16, 1, 0.3, 1] }}>{children}</motion.div>;
}
