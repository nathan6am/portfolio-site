import SkillTag from "./SkillTag";
import { useInView, useAnimate, stagger } from "framer-motion";
import React, { useEffect, useRef } from "react";
import CSSLogo from "../public/logos/css.svg";

interface SkillRowProps {
  label: string;
  icon: React.FC<any> | string;
  children?: JSX.Element[] | JSX.Element;
}
const staggerMenuItems = stagger(0.05, { startDelay: 0.1 });
export default function SkillRow({ label, icon: Icon, children }: SkillRowProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);
  const [scope, animate] = useAnimate();
  useEffect(() => {
    animate(
      "ul",
      {
        opacity: inView ? "100%" : "0",
      },
      {
        type: "spring",
        bounce: 0,
        duration: 0.5,
      }
    );
    animate("p", {
      opacity: inView ? "100%" : "0",
    });
    animate(
      "li",
      inView
        ? { opacity: 1, scale: 1, filter: "blur(0px)", x: 0 }
        : { opacity: 0, scale: 0.3, filter: "blur(0px)", x: -60 },
      {
        duration: 0.2,
        delay: inView ? staggerMenuItems : 0,
      }
    );
  }, [inView]);
  return (
    <div ref={scope} className="w-full">
      <div ref={ref} className="w-full">
        <p className="text-themeLight my-4 text-lg">
          <Icon className="text-xl text-teal-500 inline mr-2 mb-[1px]" />
          {label}
        </p>
        <ul className="flex flex-row flex-wrap my-2">{children}</ul>
      </div>
    </div>
  );
}
