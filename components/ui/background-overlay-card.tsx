"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";

export function Card({
  imgURL,
  gifURL,
  title,
  description,
}: {
  imgURL: string;
  gifURL: string;
  title: string;
  description: string;
}) {
  const [hover, setHover] = useState(false);

  return (
    <div className="max-w-xl bg-gray-900/20">
      <div
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
          "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
          "transition-all duration-500"
        )}
        style={{
          backgroundImage: `url(${imgURL})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "contain",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundImage = `url(${gifURL})`;
          setHover(true);
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundImage = `url(${imgURL})`;
          setHover(false);
        }}
      >
        <div
          className={`relative z-50 text-center ${
            hover ? "" : "backdrop-blur-xl bg-black/20"
          }`}
        >
          <h2 className="font-bold text-xl md:text-3xl text-gray-50">
            {title}
          </h2>
          <p className="font-normal text-base text-gray-50 my-4">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
