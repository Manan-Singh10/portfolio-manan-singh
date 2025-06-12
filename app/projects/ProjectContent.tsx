"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiLink } from "react-icons/bi";

interface Props {
  description: string[];
  imageURLs: string[];
  demoLink: string;
}

const ProjectContent = ({ description, imageURLs, demoLink }: Props) => {
  return (
    <div className="prose space-y-3">
      <h2 className="text-blue-500 font-semibold flex items-center">
        <Link href={demoLink} target="blank">
          Demo
        </Link>
        <BiLink />
      </h2>
      <ul className="list-disc text-xs sm:text md:text-lg">
        {description.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>

      <div className="space-y-2">
        {imageURLs.map((url) => (
          <Image
            className="rounded-xl"
            loading="lazy"
            key={url}
            src={url}
            width={500}
            height={500}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt="project-image"
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectContent;
