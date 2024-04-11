import GithubCard from "@/components/common/home-page/cards/github-card";
import LinkedinCard from "@/components/common/home-page/cards/linkedin-card";
import ResumeCard from "@/components/common/home-page/cards/resume-card";
import Container from "@/components/common/home-page/container";
import WorkExperience from "@/components/common/home-page/experience/work-experience";
import ProfileHeader from "@/components/common/home-page/profile-header";
import SayHello from "@/components/common/home-page/say-hello/say-hello";

import Stacks from "@/components/common/home-page/stacks";
import Tools from "@/components/common/tools/tools";

export default function HomePage() {
  return (
    <main className="mx-auto w-full space-y-6 xl:flex  ">
      <ProfileHeader />
      <Container>
        <WorkExperience />
        <Stacks />
        <SayHello>
          <GithubCard />
          <LinkedinCard />
          <ResumeCard />
        </SayHello>
        <Tools />
      </Container>
    </main>
  );
}
