import { LinkIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const InfoRow = ({
  label,
  address,
  href,
}: {
  label: string;
  address: string;
  href: string;
}) => {
  return (
    <div>
      {href ? (
        <Link href={href} target="blank">
          <h2 className="text-zinc-400">{label}</h2>
          <div className="flex items-center gap-2">
            <p>{address}</p>
            <LinkIcon size={16} />
          </div>
        </Link>
      ) : (
        <>
          <h2 className="text-zinc-400">{label}</h2>
          <div className="flex items-center gap-2">
            <p>{address}</p>
            <LinkIcon size={16} />
          </div>
        </>
      )}
    </div>
  );
};

export default InfoRow;
