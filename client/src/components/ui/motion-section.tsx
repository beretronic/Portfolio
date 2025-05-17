import { useState, useEffect, useRef, ReactNode } from "react";
import { motion } from "framer-motion";
import { isElementInViewport } from "@/utils/smoothScroll";

interface MotionSectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

export function MotionSection({
  children,
  id,
  className = "",
  delay = 0,
  direction = "up",
}: MotionSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Direction-based animation variants
  const getVariants = () => {
    const distance = 50;
    switch (direction) {
      case "up":
        return {
          hidden: { y: distance, opacity: 0 },
          visible: { y: 0, opacity: 1 }
        };
      case "down":
        return {
          hidden: { y: -distance, opacity: 0 },
          visible: { y: 0, opacity: 1 }
        };
      case "left":
        return {
          hidden: { x: distance, opacity: 0 },
          visible: { x: 0, opacity: 1 }
        };
      case "right":
        return {
          hidden: { x: -distance, opacity: 0 },
          visible: { x: 0, opacity: 1 }
        };
    }
  };

  const variants = getVariants();

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current && !isVisible) {
        if (isElementInViewport(sectionRef.current, true)) {
          setIsVisible(true);
        }
      }
    };

    // Check visibility on mount
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible]);

  return (
    <motion.div
      id={id}
      ref={sectionRef}
      className={className}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={variants}
      transition={{ 
        duration: 0.6, 
        ease: "easeOut",
        delay: delay / 10
      }}
    >
      {children}
    </motion.div>
  );
}
