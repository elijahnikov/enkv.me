import GithubCard from "@/components/common/pages/home-page/cards/github-card";
import LinkedinCard from "@/components/common/pages/home-page/cards/linkedin-card";
import ResumeCard from "@/components/common/pages/home-page/cards/resume-card";
import WorkExperience from "@/components/common/pages/home-page/experience/work-experience";

import SayHello from "@/components/common/pages/home-page/say-hello/say-hello";

import Stacks from "@/components/common/pages/home-page/stacks";
import Tools from "@/components/common/pages/home-page/tools/tools";

export default function HomePage() {
  return (
    <div className="space-y-8">
      <WorkExperience />
      <Stacks />
      <SayHello>
        <GithubCard />
        <LinkedinCard />
        <ResumeCard />
      </SayHello>
      <Tools />
    </div>
  );
}
