import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
export default function Navbar() {
  const [activeTab, setActiveTab] = useState<string>("home");

  const [hideOnScroll, setHideOnScroll] = useState<boolean>(true);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > prevPos.y || currPos.y > -100;
      const belowTop = currPos.y < -2;
      if (isShow !== hideOnScroll) setHideOnScroll(isShow);
      if (scrolled !== belowTop) setScrolled(belowTop);
    },
    [hideOnScroll]
  );
  useEffect(() => {
    if (hideOnScroll) {
      animation.start("visible");
    } else {
      animation.start("hidden");
    }
  }, [hideOnScroll]);
  const animation = useAnimation();
  const variants = {
    visible: {
      y: 0,
      transition: {
        type: "easeIn",
      },
    },
    hidden: {
      y: -80,
      transition: {
        type: "easeIn",
      },
    },
  };
  return (
    <motion.div
      initial="visible"
      animate={animation}
      variants={variants}
      className={`${
        scrolled ? "border-b shadow-[0_15px_20px_rgba(5,7,10,0.75)]" : ""
      } fixed flex flex-row justify-between items-center w-full bg-themeDark/[0.5] px-8 h-[80px] backdrop-blur-xl z-[100]  border-white/[0.2]`}
    >
      <p>logo</p>

      <div className="flex flex-row items-center">
        <NavItem
          label="Home"
          onClick={() => {
            setActiveTab("home");
          }}
          active={activeTab === "home"}
        />
        <NavItem
          label="About Me"
          onClick={() => {
            setActiveTab("about");
          }}
          active={activeTab === "about"}
        />
        <NavItem
          label="Projects"
          onClick={() => {
            setActiveTab("projects");
          }}
          active={activeTab === "projects"}
        />
        <NavItem
          label="Contact"
          onClick={() => {
            setActiveTab("contact");
          }}
          active={activeTab === "contact"}
        />
      </div>
    </motion.div>
  );
}

type NavItemProps = {
  label?: string;
  onClick: () => void;
  active: boolean;
  children?: React.ReactNode;
};

const NavItem: React.FC<NavItemProps> = ({
  label,
  onClick,
  active,
  children,
}) => {
  return (
    <motion.button
      whileHover={{
        y: active ? 0 : -2,
        transition: { duration: 0.2 },
      }}
      className={`${
        active
          ? "text-emerald-400 border-b-2 border-emerald-400"
          : "hover:text-emerald-400"
      } mx-4 `}
      onClick={onClick}
    >
      {label}
      {children}
    </motion.button>
  );
};
