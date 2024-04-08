"use client";

import { ExternalLink } from "lucide-react";
import Link from "next/link";
import GitHubCalendar from "react-github-calendar";
import { BsGithub } from "react-icons/bs";

export default function GithubCard() {
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
            <ExternalLink size={14} className="ml-1" />
          </Link>
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
          return data.slice(-30);
        }}
        hideTotalCount
        username="elijahnikov"
      />
    </div>
  );
}
