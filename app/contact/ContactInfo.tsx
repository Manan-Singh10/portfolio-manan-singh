import React from "react";
import InfoRow from "./InfoRow";

const info = [
  { label: "Email", address: "singh.manan2904@gmail.com", href: "" },
  {
    label: "Github",
    address: "Manan-Singh10",
    href: "https://github.com/Manan-Singh10",
  },
  {
    label: "LinkedIn",
    address: "manan-singh-7b82b1185",
    href: "https://www.linkedin.com/in/manan-singh-7b82b1185/",
  },
  {
    label: "Resume",
    address: "Manan-singh",
    href: "/Manan-resume.pdf",
  },
];

const ContactInfo = () => {
  return (
    <div className="space-y-4 p-5">
      {info.map((i) => (
        <InfoRow
          label={i.label}
          address={i.address}
          href={i.href}
          key={i.address}
        />
      ))}
    </div>
  );
};

export default ContactInfo;
