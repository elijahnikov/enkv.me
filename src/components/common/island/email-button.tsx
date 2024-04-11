"use client";

import { buttonVariants } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { useLogSnag } from "@logsnag/next";
import { Mail } from "lucide-react";
import Link from "next/link";

export default function EmailButton() {
  const { track } = useLogSnag();
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            onClick={() =>
              track({
                channel: "external-links",
                event: "Contact via e-mail",
                icon: "📩",
                notify: true,
                tags: {
                  via: "email",
                },
              })
            }
            href="mailto:enkv@pm.me"
            className={cn(
              buttonVariants({ variant: "secondary" }),
              "flex h-8 w-max items-center rounded-lg border border-neutral-200 text-xs shadow-sm dark:border-neutral-700",
            )}
          >
            <Mail size={16} className="mr-1" />
            <p>Contact me</p>
            <span className="relative ml-1 flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
          </Link>
        </TooltipTrigger>
        <TooltipContent className="relative left-0 border-neutral-200 text-xs dark:border-neutral-800">
          Email me at enkv@pm.me
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
