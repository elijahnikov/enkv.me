"use client";

import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
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
            <ExternalLink size={14} className="ml-1" />
          </Link>
        </div>
      </div>
      <div className="flex w-full">
        <div>
          <Button
            size={"sm"}
            variant={"secondary"}
            className="mt-6 h-8 rounded-lg"
          >
            Connect
          </Button>
        </div>
      </div>
    </div>
  );
}
