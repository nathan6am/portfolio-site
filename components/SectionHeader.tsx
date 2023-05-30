import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import classNames from "classnames";
interface SectionHeaderProps {
  title: string;
  className?: string;
}
export default function SectionHeader({ title, className }: SectionHeaderProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);
  return (
    <div
      style={{
        transform: inView ? "none" : "translateY(20px)",
        opacity: inView ? 1 : 0,
        transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
      }}
      ref={ref}
      className={classNames("w-full flex flex-row justify-center items-center my-10", className)}
    >
      <div className="flex flex-row justify-center w-full items-center max-w-lg">
        <div className="grow w-full border-b-2 border-teal-600"></div>
        <h1 className="text-xl shrink-0 font-semibold text-themeLight w-fit text-left w-full  px-4 py-0 border-teal-600">
          {title}
        </h1>
        <div className="grow w-full border-b-2 border-teal-600"></div>
      </div>
    </div>
  );
}
