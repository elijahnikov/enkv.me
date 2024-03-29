"use client";

import { Moon, Sun } from "lucide-react";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <></>;
  }

  return (
    <Button
      size={"sm"}
      className="flex h-8 space-x-1 rounded-lg border bg-gray-100 text-black hover:bg-gray-200 dark:bg-neutral-900 dark:text-white"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <>
          <Sun size={16} />
          <span>Light</span>
        </>
      ) : (
        <>
          <Moon size={16} />
          <span>Dark</span>
        </>
      )}
    </Button>
  );
}
