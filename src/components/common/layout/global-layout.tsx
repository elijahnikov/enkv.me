"use client";

import { cn } from "@/lib/utils";
import ProfileHeader from "../profile-header";
import Container from "../container";
import ExpandedView from "../pages/projects-page/expanded-view";

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
              <main className="mx-auto w-full space-y-6 xl:flex">
                <ProfileHeader />
                <Container>{children}</Container>
                <ExpandedView />
              </main>
              <div className="h-20" />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
