"use client";

import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useLogSnag } from "@logsnag/next";
import { Download, ScrollText } from "lucide-react";
import Link from "next/link";

export default function ResumeCard() {
  const { track } = useLogSnag();
  const trackResumeClick = () => {
    track({
      channel: "external-links",
      event: "View resume",
      icon: "🧾",
      notify: true,
      tags: {
        via: "resume",
      },
    });
  };
  return (
    <Card className=" p-4">
      <div className="flex flex-col justify-between">
        <div>
          <div className="block w-max rounded-lg bg-black p-2 shadow-sm">
            <ScrollText className="text-white" size={24} />
          </div>
          <div className="mt-4">
            <Link
              onClick={trackResumeClick}
              className="flex items-center text-sm text-neutral-700 hover:underline"
              href={"https://linkedin.com/in/enkv"}
              target="_blank"
            >
              <p className="dark:text-neutral-300">My resume</p>
            </Link>
          </div>
        </div>
        <div className="flex w-full">
          <div>
            <Link
              onClick={trackResumeClick}
              href={
                "https://utfs.io/f/1550ba9a-3c75-46ae-9e10-169d7951d4d0-lfymu7.pdf"
              }
              className={cn(
                buttonVariants({ size: "sm", variant: "secondary" }),
                "mt-6 h-8 rounded-lg",
              )}
            >
              <Download size={12} className="mr-1" /> Download
            </Link>
          </div>
        </div>
      </div>
    </Card>
  );
}
