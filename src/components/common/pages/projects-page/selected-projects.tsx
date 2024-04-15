"use client";

import { projects } from "@/lib/data/projects";
import SingleProject from "./single-project";

export default function SelectedProjects() {
  return (
    <div className="flex flex-col justify-center">
      <h1 className="mb-8 mt-4 text-lg font-semibold">Projects 💡</h1>
      <div className="flex justify-center">
        <div className="flex w-[100%] flex-col justify-center space-y-8">
          {projects.map((project) => (
            <SingleProject project={project} key={project.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
