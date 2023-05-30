import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";

type ButtonProps = {
  children: React.ReactNode;
  variant: string;
  className?: string;
  onClick: () => void;
};

const AnimatedButton: React.FC<ButtonProps> = ({
  children,
  variant,
  className,
}) => {
  const [hover, setHover] = useState<boolean>(false);

  const variants: Record<string, string> = {
    standard: "bg-gradient-to-r from-cyan-700 via-emerald-500 to-teal-600",
  };
  return (
    <div className={hover ? "":""}>
    <motion.button
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      style={{ backgroundSize: "200%", backgroundPositionX: "50%" }}
      whileTap={{ scale: 0.98 }}
      whileHover={{
        backgroundPositionX: "10%",
        transition: { type: "easeInOut" },
      }}
      className={`w-fit px-4 py-3 text-lg w-fit rounded-md my-6 ${variants[variant]} ${className}`}
    >
      {children}
    </motion.button>
    </div>
  );
};

export default AnimatedButton;
