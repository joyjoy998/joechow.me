"use client";

import { motion, HTMLMotionProps } from "framer-motion";

export default function MotionDivWrapper({
  children,
  ...props
}: {
  children: React.ReactNode;
} & HTMLMotionProps<"div">) {
  return <motion.div {...props}>{children}</motion.div>;
}
