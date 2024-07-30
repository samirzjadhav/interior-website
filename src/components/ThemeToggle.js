import React from "react";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        <SunIcon className="h-[20px] w-[20px] scale-100 rotate-0 trasition-all dark:roate-90 dark:scale-0" />
        <MoonIcon className="absolute h-[20px] w-[20px] scale-0 rotate-90 trasition-all dark:roate-0 dark:scale-100" />
      </Button>
    </div>
  );
};

export default ThemeToggle;
