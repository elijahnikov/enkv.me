import GithubCard from "@/components/common/home-page/cards/github-card";
import LinkedinCard from "@/components/common/home-page/cards/linkedin-card";
import WorkExperience from "@/components/common/home-page/experience/work-experience";
import ProfileHeader from "@/components/common/home-page/profile-header";

import Stacks from "@/components/common/home-page/stacks";
import Island from "@/components/common/island/island";
import { Card } from "@/components/ui/card";

export default function HomePage() {
  return (
    <main className="mx-auto w-full space-y-6 xl:flex  ">
      <div className="left-0 w-[400px] xl:fixed xl:w-[600px]">
        <div className="xl:pl-16">
          <ProfileHeader />
        </div>
        <div className="flex justify-center"></div>
      </div>
      <div className="max-w-[90vw] xl:relative xl:left-[40vw] xl:min-w-[680px]">
        <div className="w-full space-y-6">
          <div className="flex flex-col justify-center">
            <h1 className="mb-4 text-lg font-semibold">Work Experience 👨🏼‍💻</h1>
            <Card className="flex justify-center px-6 py-2">
              <WorkExperience />
            </Card>
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="mb-4 text-lg font-semibold">Skills 🛠️</h1>
            <div className="flex justify-center">
              <Stacks />
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="mb-4 text-lg font-semibold">Say hello! 👋🏻</h1>
            <div className="grid grid-cols-3 justify-center gap-6">
              <Card className=" p-4">
                <GithubCard />
              </Card>
              <Card className=" p-4">
                <LinkedinCard />
              </Card>
              <Card className=" p-4">
                <LinkedinCard />
              </Card>
            </div>
          </div>
          <Island />
          <div className="h-20" />
        </div>
      </div>
    </main>
  );
}
