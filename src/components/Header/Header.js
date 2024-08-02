"use client";
import React from "react";
import Image from "next/image";

// Components
import Navbar from "../Navbar/Navbar.js";
import Mobilenavigation from "../ui/Mobilenavigation.jsx";

// Theme Provider
import ThemeToggle from "../ThemeToggle";

const Header = () => {
  return (
    <header>
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <Image src="/logo.png" width={160} height={55} alt="Logo" />
          <div >
            {/* Nav Section */}
            <Navbar containerStyles="hidden xl:flex gap-x-8 items-center" />
            {/* Theme Toggler */}
            <ThemeToggle />
            {/* Mobile Navigation */}
            <div className="xl:hidden">
              <Mobilenavigation />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
