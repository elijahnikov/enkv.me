import GithubCard from "@/components/common/home-page/cards/github-card";
import LinkedinCard from "@/components/common/home-page/cards/linkedin-card";
import ResumeCard from "@/components/common/home-page/cards/resume-card";
import WorkExperience from "@/components/common/home-page/experience/work-experience";
import ProfileHeader from "@/components/common/home-page/profile-header";

import Stacks from "@/components/common/home-page/stacks";
import Island from "@/components/common/island/island";
import { Card } from "@/components/ui/card";

export default function HomePage() {
  return (
    <main className="mx-auto w-full space-y-6 xl:flex  ">
      <div className="left-0 mx-auto flex w-[400px] flex-col justify-center xl:fixed xl:block xl:w-[600px]">
        <div className="xl:pl-16">
          <ProfileHeader />
        </div>
        <div className="flex justify-center"></div>
      </div>
      <div className="xl:mx-none mx-auto flex max-w-[720px] justify-center xl:relative xl:left-[18vw] xl:block xl:w-[720px] xl:max-w-[720px]">
        <div className="w-full space-y-8">
          <div className="flex flex-col justify-center">
            <h1 className="mb-4 text-lg font-semibold">Work Experience 👨🏼‍💻</h1>
            <div className="flex justify-center">
              <WorkExperience />
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="mb-4 text-lg font-semibold">Skills 🛠️</h1>
            <div className="flex justify-center">
              <Stacks />
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="mb-4 text-lg font-semibold">Say hello! 👋🏻</h1>
            <div className="grid grid-cols-2 justify-center gap-8 sm:grid-cols-3">
              <Card className="col-span-2 p-4 sm:col-span-1">
                <GithubCard />
              </Card>
              <Card className=" p-4">
                <LinkedinCard />
              </Card>
              <Card className=" p-4">
                <ResumeCard />
              </Card>
            </div>
          </div>
          <div className="h-20" />
        </div>
      </div>
    </main>
  );
}
