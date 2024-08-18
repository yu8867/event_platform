"use client";

import { hedaerLinks } from "@/constant";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavItems = () => {
  const pathName = usePathname();

  return (
    <ul className="md:flex-between flex w-full flex-col md:flex-row gap-5">
      {/* <ul className="md:flex-between flex w-full flex-col items-start gap-5 md:flex-row"> */}
      {hedaerLinks.map((link) => {
        const isActive = pathName === link.route;
        return (
          <li
            key={link.route}
            className={`${isActive && "text-primary-500 font-bold"}`}
          >
            <Link href={link.route}>{link.label}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavItems;
