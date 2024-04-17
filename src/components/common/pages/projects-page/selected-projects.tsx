"use client";

import { projects } from "@/lib/data/projects";
import SingleProject from "./single-project";
import ProjectContainer from "./project-container";
import SingleProjectExpanded from "./single-project-expanded";

export default function SelectedProjects() {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex justify-center">
        <div className="flex w-[100%] flex-col justify-center space-y-16">
          {projects.map((project) => (
            <ProjectContainer
              key={project.id}
              title={project.title}
              trigger={<SingleProject project={project} />}
              view={<SingleProjectExpanded project={project} />}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
