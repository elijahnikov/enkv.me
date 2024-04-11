"use client";

import { cn } from "@/lib/utils";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="z-20 flex h-screen flex-col lg:flex-row">
        <main className="z-10 mx-auto flex h-full w-full flex-col  items-center gap-6  bg-[#FAFAFA] px-4 py-16 sm:px-6 lg:px-8">
          <div className={cn("w-[90vw] rounded-t-lg sm:w-[90vw] ")}>
            <div className="flex flex">
              {children}
              <div className="h-20" />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
