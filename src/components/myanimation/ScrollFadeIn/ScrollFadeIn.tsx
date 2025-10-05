import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface ScrollFadeInProps {
  children: ReactNode;
  direction?: "left" | "right" | "up" | "down"; // 支持四个方向
  distance?: number; // 可自定义偏移距离，默认 100
  duration?: number; // 可自定义动画时长，默认 1s
}

const ScrollFadeIn: React.FC<ScrollFadeInProps> = ({
  children,
  direction = "up", // 默认向上淡入
  distance = 100,
  duration = 1,
}) => {
  // 根据方向决定初始偏移
  const getInitialOffset = () => {
    switch (direction) {
      case "left":
        return { x: -distance, y: 0 };
      case "right":
        return { x: distance, y: 0 };
      case "up":
        return { x: 0, y: distance };
      case "down":
        return { x: 0, y: -distance };
      default:
        return { x: 0, y: 0 };
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...getInitialOffset() }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration }}
      viewport={{ once: false }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollFadeIn;
