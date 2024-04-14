import GithubCard from "@/components/common/home-page/cards/github-card";
import LinkedinCard from "@/components/common/home-page/cards/linkedin-card";
import ResumeCard from "@/components/common/home-page/cards/resume-card";
import WorkExperience from "@/components/common/home-page/experience/work-experience";

import SayHello from "@/components/common/home-page/say-hello/say-hello";

import Stacks from "@/components/common/home-page/stacks";
import Tools from "@/components/common/tools/tools";

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
