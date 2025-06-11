import SkillIcon from "@/components/ui/SkillIcon";
import React from "react";
import { FaCss3, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import {
  RiNextjsFill,
  RiSupabaseFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import {
  SiPostman,
  SiPrisma,
  SiReactquery,
  SiRender,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

const skills = [
  { label: "Html", icon: <FaHtml5 size={26} /> },
  { label: "Css", icon: <FaCss3 size={26} /> },
  { label: "JavaScript", icon: <FaJs size={26} /> },
  { label: "TypeScript", icon: <SiTypescript size={23} /> },
  { label: "React", icon: <FaReact size={26} /> },
  { label: "Nextjs", icon: <RiNextjsFill size={32} /> },
  { label: "Tailwind CSS", icon: <RiTailwindCssFill size={32} /> },
  { label: "React Query", icon: <SiReactquery size={30} /> },
  { label: "Supabase", icon: <RiSupabaseFill size={28} /> },
  { label: "Prisma", icon: <SiPrisma size={28} /> },
  { label: "Vercel", icon: <SiVercel size={28} /> },
  { label: "Render", icon: <SiRender size={26} /> },
  { label: "Figma", icon: <FiFigma size={28} /> },
  { label: "Postman", icon: <SiPostman size={28} /> },
];

const Skills = () => {
  return (
    <div className="space-y-5 flex flex-col items-center">
      <h2 className="sm:text-xl md:text-2xl text-zinc-300 font-semibold">
        Skills & Tools
      </h2>
      <div className="flex flex-wrap space-y-6 gap-4 max-w-[500px]  justify-center">
        {skills.map((skill) => (
          <SkillIcon key={skill.label} icon={skill.icon} label={skill.label} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
