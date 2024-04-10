"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

import { BsLinkedin } from "react-icons/bs";

export default function LinkedinCard() {
  return (
    <div className="flex flex-col justify-between">
      <div>
        <div className="block w-max rounded-lg bg-[#006599] p-2 shadow-sm">
          <BsLinkedin className="text-white" size={24} />
        </div>
        <div className="mt-4">
          <Link
            className="flex items-center text-sm text-neutral-700 hover:underline"
            href={"https://linkedin.com/in/enkv"}
            target="_blank"
          >
            <p>/enkv</p>
          </Link>
        </div>
      </div>
      <div className="flex w-full">
        <div>
          <Link
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
  );
}
