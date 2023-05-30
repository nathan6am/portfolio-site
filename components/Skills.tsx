import { useInView } from "framer-motion";
import SkillRow from "./SkillRow";
import SkillTag from "./SkillTag";
import { useRef } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { HiDocumentText, HiDatabase } from "react-icons/hi";
import { BiLibrary } from "react-icons/bi";
import { BsCodeSlash } from "react-icons/bs";
import { AiFillTool } from "react-icons/ai";
import { MdLocationCity } from "react-icons/md";
import Button from "./Button";
import { BsCode, BsDownload } from "react-icons/bs";
import NextJs from "../public/logos/nextjs.svg";
import SocketIo from "../public/logos/socketio.svg";
import CSSLogo from "../public/logos/css.svg";
import ExpoLogo from "../public/logos/expo.svg";
import GithubLogo from "../public/logos/github.svg";
import SectionHeader from "./SectionHeader";
export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref);
  return (
    <>
      <SectionHeader title="My Skills" className="pb-10 mt-20" />
      <div className="w-full" ref={ref}>
        <div className=" border-b border-themeLight/[0.2]">
          <SkillRow label="Languages" icon={BsCodeSlash}>
            <SkillTag icon="/logos/javascript.svg" label="JavaScript" />
            <SkillTag icon="/logos/typescript.svg" label="TypeScript" />
            <SkillTag icon="/logos/python.svg" label="Python" />
            <SkillTag icon="/logos/html.svg" label="HTML" />
            <SkillTag icon={CSSLogo} label="CSS" />
            <SkillTag icon="/logos/scss.svg" label="SASS/SCSS" />
          </SkillRow>
        </div>
        <div className=" border-b border-themeLight/[0.2]">
          <SkillRow label="Libraries & Frameworks" icon={BiLibrary}>
            <SkillTag icon="/logos/tailwind.svg" label="Tailwind CSS" />
            <SkillTag icon="/logos/react.svg" label="React" />
            <SkillTag icon="/logos/react.svg" label="React Native" />
            <SkillTag icon={ExpoLogo} label="Expo" />
            <SkillTag icon="/logos/redux.svg" label="Redux" />
            <SkillTag icon={NextJs} label="Next.js" />
            <SkillTag icon="/logos/gatsby.svg" label="Gatsby" />
          </SkillRow>
        </div>

        <div className=" border-b border-themeLight/[0.2]">
          <SkillRow label="Backend" icon={HiDatabase}>
            <SkillTag icon="/logos/nodejs.svg" label="Node.js" />
            <SkillTag icon="/logos/postgresql.svg" label="PostgreSQL" />
            <SkillTag icon="/logos/typeorm.png" label="TypeORM" />
            <SkillTag icon="/logos/mongodb.svg" label="MongoDB" />
            <SkillTag icon="/logos/express.png" label="Express.js" />
            <SkillTag icon="/logos/redis.svg" label="Redis" />
            <SkillTag icon="/logos/graphql.svg" label="GraphQL" />
            <SkillTag icon={SocketIo} label="Socket.io" />
          </SkillRow>
        </div>
        <SkillRow label="Tools" icon={AiFillTool}>
          <SkillTag icon="/logos/git.svg" label="Git" />
          <SkillTag icon={GithubLogo} label="Github" />
          <SkillTag icon="/logos/docker.svg" label="Docker" />
          <SkillTag icon="/logos/postman.svg" label="Postman" />
          <SkillTag icon="/logos/vscode.svg" label="VS Code" />
        </SkillRow>
      </div>
    </>
  );
}
