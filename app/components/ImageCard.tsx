import { Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const ImageCard = () => {
  return (
    <div className="space-y-2 flex flex-col items-center justify-center">
      <Image
        src="/manan-photo.png"
        alt="manan-photo"
        width={200}
        height={200}
        priority
        sizes="(max-width: 640px) 100px, (max-width: 724px) 140px, (max-width: 1024px) 160px, 200px"
        className="rounded-full"
      />
      <div className="flex items-center gap-2 sm:gap-3 md:gap-4 justify-center">
        <div className="flex text-xs items-center gap-1 sm:gap-2 sm:text-[15px] md:text-lg">
          <CiLocationOn size={22} /> New Delhi
        </div>

        <Link
          href="https://linkedin.com/in/manan-singh-7b82b1185/"
          target="blank"
        >
          <FaLinkedin />
        </Link>

        <Link href="https://github.com/Manan-Singh10" target="blank">
          <FaGithub />
        </Link>

        <Link
          href="/Manan-resume.pdf"
          target="blank"
          className="text-base font-semibold flex items-center gap-1"
        >
          <Download width={30} />
        </Link>
      </div>
    </div>
  );
};

export default ImageCard;
