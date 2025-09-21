import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface ScrollFadeInProps  {
  children: ReactNode;
  direction : 'left' | 'right';
}

const ScrollFadeIn: React.FC<ScrollFadeInProps> = ({ children, direction }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: direction === 'left' ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  )
}

export default ScrollFadeIn;