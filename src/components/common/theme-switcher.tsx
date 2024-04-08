"use client";

import { Moon, Sun } from "lucide-react";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

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
    <div className="flex space-x-2">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Button
              onClick={() => setTheme("light")}
              variant={theme === "light" ? "default" : "ghost"}
              className={cn(
                "flex flex h-8 w-max items-center justify-center space-x-1 rounded-md px-2 shadow-sm",
              )}
            >
              <Sun size={18} />
            </Button>
          </TooltipTrigger>
          {theme !== "light" && (
            <TooltipContent className="border-neutral-200 text-xs dark:border-neutral-800">
              Switch to light mode
            </TooltipContent>
          )}
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Button
              variant={theme === "dark" ? "default" : "ghost"}
              onClick={() => setTheme("dark")}
              className={cn(
                "flex h-8 w-max items-center justify-center space-x-1 rounded-md px-2",
              )}
            >
              <Moon size={18} />
            </Button>
          </TooltipTrigger>
          {theme !== "dark" && (
            <TooltipContent className="border-neutral-200 text-xs dark:border-neutral-800">
              Switch to dark mode
            </TooltipContent>
          )}
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
