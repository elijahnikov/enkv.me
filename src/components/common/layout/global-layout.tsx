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
        <main className="z-10 mx-auto flex h-full w-full flex-col  items-center gap-6 bg-black bg-white px-4 py-16 sm:px-6 lg:px-8">
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

export function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-lg border-[1px] border-gray-200 bg-white p-5">
      <div className="w-[100%]">{children}</div>
    </div>
  );
}
