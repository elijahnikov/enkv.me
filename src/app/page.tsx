import GithubCard from "@/components/common/home-page/cards/github-card";
import LinkedinCard from "@/components/common/home-page/cards/linkedin-card";
import ResumeCard from "@/components/common/home-page/cards/resume-card";
import Container from "@/components/common/home-page/container";
import WorkExperience from "@/components/common/home-page/experience/work-experience";

import SayHello from "@/components/common/home-page/say-hello/say-hello";

import Stacks from "@/components/common/home-page/stacks";
import Tools from "@/components/common/tools/tools";

export default function HomePage() {
  return (
    <>
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
    </>
  );
}
