import React from "react";

type SkillIconProps = {
  icon: React.ReactNode;
  label: string;
};

const SkillIcon = ({ icon, label }: SkillIconProps) => {
  return (
    <div className="relative group">
      {/* Icon container */}
      <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-white/10 flex items-center justify-center shadow-sm hover:bg-white/20 transition">
        {icon}
      </div>

      {/* Hover label */}
      <div className="absolute left-1/2 -translate-x-1/2 mt-2 px-2 py-1 text-xs rounded-md bg-white/10 text-white opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap z-10">
        {label}
      </div>
    </div>
  );
};

export default SkillIcon;
