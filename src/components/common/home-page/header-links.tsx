"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Globe, Mail, ScrollText } from "lucide-react";
import Link from "next/link";
import { useMemo } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function HeaderLinks() {
  const links = useMemo(() => {
    return [
      {
        name: "enkv.me",
        icon: <Globe className="mr-1" size={14} />,
        href: "https://github.com/elijahnikov",
      },
      {
        name: "elijahnikov",
        icon: <BsGithub className="mr-1" size={14} />,
        href: "https://github.com/elijahnikov",
      },
      {
        name: "enkv",
        icon: <BsLinkedin className="mr-1" />,
        href: "https://linkedin.com/in/enkv",
      },
      {
        name: "enkv@pm.me",
        icon: <Mail size={14} className="mr-1" />,
        href: "mailto:enkv@pm.me",
      },
      {
        name: "Resume",
        icon: <ScrollText size={13} className="mr-1" />,
        href: "https://utfs.io/f/1550ba9a-3c75-46ae-9e10-169d7951d4d0-lfymu7.pdf",
      },
    ];
  }, []);

  const cname =
    "flex h-8 space-x-1 h-7 rounded-lg border bg-gray-100 text-black hover:bg-gray-200 dark:bg-neutral-900 dark:text-white hover:dark:border-neutral-700 dark:hover:bg-neutral-800";
  return (
    <div className="mt-5 flex grid-cols-3 gap-2">
      {links.map(({ href, icon, name }, index) => (
        <div key={index}>
          {href && (
            <Link
              target="_blank"
              className={cn(
                buttonVariants({ variant: "default", size: "sm" }),
                cname,
              )}
              href={href}
            >
              {icon}
              {name}
            </Link>
          )}
        </div>
      ))}
    </div>
  );
}
