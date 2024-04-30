"use client";

import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { cn } from "@/lib/utils";
import { useLogSnag } from "@logsnag/next";
import Link from "next/link";
import GitHubCalendar from "react-github-calendar";
import { BsGithub } from "react-icons/bs";

export default function GithubCard() {
  const isDesktop = useMediaQuery("(min-width: 660px)");
  const { track } = useLogSnag();
  const trackGithubClick = () => {
    track({
      channel: "external-links",
      event: "View social",
      icon: "🌐",
      notify: true,
      tags: {
        via: "github",
      },
    });
  };
  return (
    <Card className="col-span-2 p-4 sm:col-span-1">
      <div className="flex justify-between overflow-hidden">
        <div>
          <div className="block w-max rounded-lg bg-black p-2 shadow-sm">
            <BsGithub className="text-white" size={24} />
          </div>
          <div className="mt-4">
            <Link
              onClick={trackGithubClick}
              className="flex items-center text-sm text-neutral-700 hover:underline"
              href={"https://github.com/elijahnikov"}
              target="_blank"
            >
              <p className="dark:text-neutral-300">/elijahnikov</p>
            </Link>
          </div>
          <div className="flex w-full">
            <div>
              <Link
                onClick={trackGithubClick}
                href="https://github.com/elijahnikov"
                target="_blank"
                className={cn(
                  buttonVariants({ size: "sm", variant: "secondary" }),
                  "mt-6 h-8 rounded-lg",
                )}
              >
                View
              </Link>
            </div>
          </div>
        </div>
        <GitHubCalendar
          style={{ overflow: "hidden" }}
          showWeekdayLabels={false}
          hideColorLegend={true}
          hideMonthLabels={true}
          colorScheme="light"
          blockMargin={8}
          transformData={(data) => {
            if (isDesktop) return data.slice(-31);
            return data.slice(-80);
          }}
          hideTotalCount
          username="elijahnikov"
        />
      </div>
    </Card>
  );
}
