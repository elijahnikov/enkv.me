"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import { toolsMap } from "@/lib/tools";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function Tools() {
  const isDesktop = useMediaQuery("(min-width: 660px)");
  return (
    <div className="flex flex-col justify-center">
      <h1 className="mb-4 text-lg font-semibold">Apps I like using 🔬</h1>
      <div className="relative  h-[140px] w-full overflow-hidden bg-white">
        <Marquee
          gradient
          gradientWidth={isDesktop ? 200 : 100}
          className="-mt-8"
          speed={70}
        >
          <div className="flex h-[200px] items-center space-x-[70px]">
            {toolsMap.map((tool) => (
              <div
                key={tool.id}
                className={cn(
                  tool.id === 1 ? "pl-[70px]" : "",
                  "group flex flex-col items-center justify-center",
                )}
              >
                <span className="absolute top-8 hidden min-w-[60px] rounded-md border border-neutral-200 bg-white px-2 py-1 text-center text-xs shadow-sm group-hover:block">
                  {tool.name}
                </span>
                <Image
                  className="rounded-2xl border border-neutral-200 shadow-sm"
                  src={tool.src}
                  alt={tool.name}
                  width={60}
                  height={60}
                />
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
}
