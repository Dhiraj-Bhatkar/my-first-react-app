import React, { useEffect } from "react";
import Link from "next/link";
import "./Menu.css";
export const Menu = () => {
  const menuItem = [
    {
      id: "home",
      text: "HOME",
      path: "/home",
    },
    {
      id: "about",
      text: "ABOUT",
      path: "/about",
    },
    {
      id: "contact",
      text: "CONTACT",
      path: "/contact",
    },
  ];
  return (
    <div className="menu">
      {menuItem.map(({ id, text, path }, ind) => {
        return (
          <Link id={id} key={"link_" + ind} href={path}>
            {text}
          </Link>
        );
      })}
    </div>
  );
};
