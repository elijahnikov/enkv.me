"use client";

import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useLogSnag } from "@logsnag/next";
import Link from "next/link";

import { BsLinkedin } from "react-icons/bs";

export default function LinkedinCard() {
  const { track } = useLogSnag();
  const trackLinkedinClick = () => {
    track({
      channel: "external-links",
      event: "View social",
      icon: "🌐",
      notify: true,
      tags: {
        via: "linkedin",
      },
    });
  };
  return (
    <Card className=" p-4">
      <div className="flex flex-col justify-between">
        <div>
          <div className="block w-max rounded-lg bg-[#006599] p-2 shadow-sm">
            <BsLinkedin className="text-white" size={24} />
          </div>
          <div className="mt-4">
            <Link
              onClick={trackLinkedinClick}
              className="flex items-center text-sm text-neutral-700 hover:underline"
              href={"https://linkedin.com/in/enkv"}
              target="_blank"
            >
              <p className="dark:text-neutral-300">/enkv</p>
            </Link>
          </div>
        </div>
        <div className="flex w-full">
          <div>
            <Link
              onClick={trackLinkedinClick}
              href="https://linkedin.com/in/enkv"
              target="_blank"
              className={cn(
                buttonVariants({ size: "sm", variant: "secondary" }),
                "mt-6 h-8 rounded-lg",
              )}
            >
              Connect
            </Link>
          </div>
        </div>
      </div>
    </Card>
  );
}
