"use client";

import { Moon, Sun } from "lucide-react";
import { buttonVariants } from "../ui/button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

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
    <div
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={cn(
        buttonVariants({ variant: "secondary" }),
        "flex h-8 w-max cursor-pointer items-center rounded-lg border border-neutral-200 bg-black text-xs text-white shadow-sm hover:bg-neutral-800 dark:bg-white dark:text-black",
      )}
    >
      {theme === "light" ? (
        <>
          <Moon size={16} className="mr-1" />
          <p>Dark</p>
        </>
      ) : (
        <>
          <Sun size={16} className="mr-1" />
          <p>Light</p>
        </>
      )}
    </div>
  );
}
