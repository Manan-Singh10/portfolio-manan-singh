"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const links = [
  { label: "About", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

const NavBar = () => {
  const currentPath = usePathname();

  return (
    <nav className="bg-white/10 backdrop-blur-sm px-5 py-2 m-5 rounded-xl sticky top-5">
      <ul className="flex gap-8">
        {links.map((link) => (
          <li
            className={`${
              link.href === currentPath ? "text-zinc-100" : "text-zinc-400"
            } hover:text-zinc-200 sm:text-lg transition-colors`}
            key={link.href}
          >
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
