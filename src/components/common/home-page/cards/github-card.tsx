"use client";

import { Button } from "@/components/ui/button";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import Link from "next/link";
import GitHubCalendar from "react-github-calendar";
import { BsGithub } from "react-icons/bs";

export default function GithubCard() {
  const isDesktop = useMediaQuery("(min-width: 660px)");
  return (
    <div className="flex justify-between overflow-hidden">
      <div>
        <div className="block w-max rounded-lg bg-black p-2 shadow-sm">
          <BsGithub className="text-white" size={24} />
        </div>
        <div className="mt-4">
          <Link
            className="flex items-center text-sm text-neutral-700 hover:underline"
            href={"https://github.com/elijahnikov"}
            target="_blank"
          >
            <p>/elijahnikov</p>
          </Link>
        </div>
        <div className="flex w-full">
          <div>
            <Button
              size={"sm"}
              variant={"secondary"}
              className="mt-6 h-8 rounded-lg"
            >
              View
            </Button>
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
  );
}
