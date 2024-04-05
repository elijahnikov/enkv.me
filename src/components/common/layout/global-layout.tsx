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
        <main className="z-10 mx-auto flex h-full w-full flex-col items-center gap-6 bg-black bg-white px-4 py-20 dark:bg-black  sm:px-6 lg:px-8">
          <div
            className={cn(
              "w-[90vw] rounded-t-lg sm:w-[90vw] md:w-[60vw] lg:w-[60vw]",
            )}
          >
            <div className="fixed left-0 top-0 -z-10 h-full w-full">
              {/* <div className="absolute top-0 z-[-2] h-screen w-screen bg-green-100/20 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] opacity-40 dark:bg-neutral-950 dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] dark:opacity-100"></div> */}
              <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:bg-neutral-950 dark:bg-[radial-gradient(#3d3d3d,transparent_1px)]"></div>
            </div>
            <div className="flex flex-col">
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
    <div className="rounded-lg border-[1px] border-gray-200 bg-white p-5 dark:border-slate-800 dark:bg-black">
      <div className="w-[100%]">{children}</div>
    </div>
  );
}
