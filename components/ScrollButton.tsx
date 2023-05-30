import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BsChevronCompactDown } from "react-icons/bs";
import Link from "next/link";
const ScrollDownButton = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const offset = useTransform(scrollYProgress, [0.2, 0.8], [0, -120]);
  const bounceAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 0.8,
      repeat: Infinity,
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      ref={ref}
      className="absolute bottom-2 left-0 w-full flex justify-center items-center"
    >
      <Link href="#about">
        <motion.button
          className="flex flex-col items-center text-lg text-themeLight/[0.8] hover:text-teal-600 transition-colors duration-300"
          style={{ opacity: opacity, y: offset }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          More about me
          <motion.span
            style={{
              display: "block",
            }}
            animate={bounceAnimation}
          >
            <BsChevronCompactDown className="text-teal-500 text-4xl" />
          </motion.span>
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default ScrollDownButton;
