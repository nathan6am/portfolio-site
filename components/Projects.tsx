import React, { useState, useMemo, useRef, useEffect } from "react";
import SectionHeader from "./SectionHeader";
import { AiFillCode, AiFillTag } from "react-icons/ai";
import { RxExternalLink } from "react-icons/rx";
import GithubLogo from "../public/logos/github.svg";
import Button from "./Button";
import { useInView } from "framer-motion";
import { useRouter } from "next/router";
const projectsData: Array<Project> = [
  {
    name: "Trio Card Game",
    description: "A realtime multiplayer card game built with React, Redux, Node.js, Express, and socket.io.",
    tags: ["React", "JavaScript", "Node.js", "Express", "socket.io", "Redux"],
    url: "https://trio-card-game.vercel.app/",
    souceCodeUrl: "https://github.com/nathan6am/trio-card-game",
  },
  {
    name: "BCServices-Inc.com",
    description: "A static website for a local business built with React, Gatsby, and NetlifyCMS.",
    tags: ["React", "JavaScript", "Gatsby", "NetlifyCMS", "TailwindCSS"],
    url: "https://bcservices-inc.com/",
  },
  {
    name: "F1Bookie",
    description: "A discord bot for betting fake currency on F1 races, built with Node.js and discord.js.",
    tags: ["Node.js", "JavaScript", "discord.js", "cheerio", "MongoDB", "puppeteer"],
    souceCodeUrl: "",
  },
  {
    name: "Chess from Scratch",
    description: "A fully functional online chess GUI and PGN editor built with React, TypeScript and Next.js.",
    tags: ["React", "TypeScript", "Next.js", "Socket.io", "TailwindCSS", "PostgreSQL", "TypeORM"],
    url: "https://nextchess.dev/",
    souceCodeUrl: "https://github.com/nathan6am/chess-from-scratch",
  },
  {
    name: "Citrus Cooking",
    description: "A simple react native recipe notebook for saving recipes and creating shopping lists.",
    tags: ["React Native", "TypeScript", "Expo", "Redux", "Redux Toolkit", "React Navigation"],
  },
  {
    name: "Open Wheel Sim Racing",
    description: "A full stack dashboard application for participating in online sim racing leagues and events.",
    tags: ["React", "TypeScript", "Next.js", "TailwindCSS", "Node.js", "Passport", "MongoDB", "Express"],
    souceCodeUrl: "",
    url: "https://openwheelsimracing.com/",
  },
  {
    name: "React Tree Hook",
    description: "A custom react hook for dealing with general tree data structures in React.",
    tags: ["React", "TypeScript", "React Hooks"],
  },
  {
    name: "Advent of Code 2022",
    description: "My solutions to the Advent of Code 2022 challenges, written in JavaScript/TypeScript.",
    tags: ["JavaScript", "TypeScript", "Node.js"],
  },
  {
    name: "ASNE Events",
    description: "A live event companion app for the American Society of Naval Engineers symposia.",
    tags: ["React Native", "TypeScript", "Expo", "Redux", "Redux Toolkit", "Express", "MongoDB"],
  },
  {
    name: "Portfolio Website",
    description: "My personal portfolio website built with Next.js, TailwindCSS, and Framer Motion.",
    tags: ["React", "TypeScript", "Next.js", "TailwindCSS", "Framer Motion"],
  },
];
interface Project {
  name: string;
  description: string;
  tags: Array<string>;
  url?: string;
  souceCodeUrl?: string;
  image?: string;
}

export default function Projects({ setActiveTab }: { setActiveTab: React.Dispatch<React.SetStateAction<string>> }) {
  const ref = useRef<any>(null);
  const [projectsToShow, setProjectsToShow] = useState<number>(6);
  const projects = useMemo(() => projectsData.slice(0, projectsToShow), [projectsToShow]);
  const inView = useInView(ref, { amount: 0.2 });
  const router = useRouter();
  useEffect(() => {
    if (inView) {
      setActiveTab("projects");
    }
  }, [inView]);

  const seeMore = () => {
    setProjectsToShow(projectsToShow + 3 > projectsData.length ? projectsData.length : projectsToShow + 3);
  };
  const seeLess = () => {
    setProjectsToShow(6);
  };
  return (
    <div className="container max-w-7xl py-6 sm:p-6 px-1" id="projects">
      <SectionHeader title="Projects" className="pb-10" />
      <div
        ref={ref}
        className="flex flex-col sm:grid gap-6 gap-y-6 sm:gap-y-8 mt-4 "
        style={{ gridTemplateColumns: "repeat( auto-fit, minmax(24rem, 1fr) )" }}
      >
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
      <div className="flex flex-row justify-center items-center w-full my-10">
        {projectsToShow < projectsData.length ? (
          <Button variant="primary" outline className="mt-10" width="sm" onClick={seeMore}>
            See More
          </Button>
        ) : (
          <Button variant="primary" outline className="mt-10" width="sm" onClick={seeLess}>
            See Less
          </Button>
        )}
      </div>
    </div>
  );
}

function TagChip({ children }: { children: String | JSX.Element | Array<string | JSX.Element> }) {
  return (
    <div className="rounded-full bg-themeLight/[0.1] px-2 py-[2px] text-themeLight/[0.6] text-xs mr-2 mt-2 shadow-sm flex flex-row items-center">
      <AiFillTag className="mr-1 text-themeLight/[0.2]" />
      {children}
    </div>
  );
}

function TagChips({ tags }: { tags: Array<string> }) {
  return (
    <div className="flex flex-row flex-wrap">
      {tags.map((tag) => (
        <TagChip key={tag}>{tag}</TagChip>
      ))}
    </div>
  );
}
function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="rounded-lg bg-themeLight/[0.1] hover:bg-themeLight/[0.12] p-4 max-h-[20rem] flex flex-col justify-between w-full mx-auto max-w-lg aspect-[3/2] transition-all duration-400 hover:shadow-lg hover:shadow-teal-800/[0.1]">
      <div>
        <h1 className="text-xl font-bold text-themeLight">
          <AiFillCode className="inline text-teal-500 mr-2 mb-1 text-3xl" />
          {project.name}
        </h1>
        <p className="text-themeLight/[0.6] my-1">{project.description}</p>
        <div className="max-w-[10rem]">
          {project.url && (
            <a href={project.url} target="_blank" rel="noreferrer" className="w-fit">
              <div className=" rounded-md py-1 hover:bg-teal-300/[0.4] w-fit group px-2 flex flex-row items-center mt-2">
                <RxExternalLink className="text-themeLight/[0.8] group-hover:text-themeLight mr-1" />
                <p className="text-themeLight/[0.8] group-hover:text-themeLight text-sm">Live Site</p>
              </div>
            </a>
          )}

          {project.souceCodeUrl && (
            <a href={project.souceCodeUrl} target="_blank" rel="noreferrer">
              <div className=" rounded-md py-1 hover:bg-teal-300/[0.4] w-fit group px-2 flex flex-row items-center">
                <GithubLogo className="fill-themeLight/[0.8] group-hover:fill-themeLight mr-1 h-[1em] w-[1em]" />
                <p className="text-themeLight/[0.8] group-hover:text-themeLight text-sm">Source Code</p>
              </div>
            </a>
          )}
        </div>
      </div>
      <TagChips tags={project.tags} />
    </div>
  );
}
