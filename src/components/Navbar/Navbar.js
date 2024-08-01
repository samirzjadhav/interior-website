import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

const links = [
  { path: "/", name: "Home" },
  { path: "/about", name: "About" },
  { path: "/gallery", name: "Gallery" },
  { path: "/project", name: "Project" },
  { path: "/contact", name: "Contact" },
];

const Navbar = ({ containerStyles, linkStyles, underlineStyles }) => {
  const path = usePathname();

  return (
    <nav className={containerStyles}>
      {links.map((link, index) => (
        <Link href={link.path} key={index}>
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
