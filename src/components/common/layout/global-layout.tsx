"use client";

import ProfileHeader from "../profile-header";
import Container from "../container";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="z-20 h-screen ">
        <main className="z-10 mx-auto h-full w-full items-center gap-6 bg-[#FAFAFA] py-16 dark:bg-[#141414] ">
          <div>
            <div className="flex flex">
              <main className="mx-auto w-full space-y-6">
                <ProfileHeader />
                <div className="h-6" />
                <Container>{children}</Container>
              </main>
              <div className="h-20" />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
