"use client";

import { buttonVariants } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Globe, Mail, ScrollText } from "lucide-react";
import Link from "next/link";
import { useMemo } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function HeaderLinks() {
  const links = useMemo(() => {
    return [
      {
        name: "Website",
        icon: <Globe size={16} />,
        href: "https://enkv.me",
      },
      {
        name: "GitHub",
        icon: <BsGithub size={16} />,
        href: "https://git.new/elijahnikov",
      },
      {
        name: "LinkedIn",
        icon: <BsLinkedin size={16} />,
        href: "https://linkedin.com/in/enkv",
      },
      // {
      //   name: "enkv@pm.me",
      //   icon: <Mail size={14} />,
      //   href: "mailto:enkv@pm.me",
      //   render: (
      //     <div className="relative ml-2 h-2 w-2">
      //       <div className="absolute inset-0 flex items-center justify-center">
      //         <div className="h-2 w-2 animate-pulse rounded-full bg-green-500"></div>
      //       </div>
      //     </div>
      //   ),
      // },
      {
        name: "Resume",
        icon: <ScrollText size={16} />,
        href: "https://utfs.io/f/1550ba9a-3c75-46ae-9e10-169d7951d4d0-lfymu7.pdf",
      },
    ];
  }, []);

  return (
    <div className="flex flex-wrap space-x-2">
      <TooltipProvider>
        {links.map(({ href, icon, name }, index) => (
          <Tooltip key={index}>
            <TooltipTrigger>
              <div>
                {href && (
                  <Link
                    target="_blank"
                    className={cn(
                      buttonVariants({ variant: "secondary", size: "sm" }),
                      "h-8 border border-neutral-200 px-2 shadow-sm dark:border-neutral-700",
                    )}
                    href={href}
                  >
                    {icon}
                  </Link>
                )}
              </div>
            </TooltipTrigger>
            <TooltipContent className="border-neutral-200 text-xs dark:border-neutral-800">
              {name}
            </TooltipContent>
          </Tooltip>
        ))}
      </TooltipProvider>
    </div>
  );
}
