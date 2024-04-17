import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { type ProjectsType } from "@/lib/data/projects";
import { flattenedStacks } from "@/lib/data/stacks";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import ProjectImage from "./project-image";

export default function SingleProjectExpanded({
  project,
}: {
  project: ProjectsType;
}) {
  return (
    <div className="max-h-[600px] w-full overflow-y-auto px-6 py-4 sm:px-10 md:max-h-full">
      {/* header */}
      <div className="w-full justify-between md:flex">
        <div className="w-full">
          <div className="flex items-center">
            <h1 className="-mb-2 text-[36px] font-bold">{project.title}</h1>
            <div>{project.wip && <Badge className="ml-2 mt-4">WIP</Badge>}</div>
          </div>
          <p className="text-md w-[75%] max-w-[300px] text-neutral-600">
            {project.description}
          </p>
        </div>
        <div className="flex justify-end">
          <p
            className={cn(
              "my-4 text-sm text-neutral-700 md:w-[90%] xl:w-[80%]",
            )}
          >
            {project.verbose_description}
          </p>
        </div>
      </div>
      <div className="mx-auto mt-5 flex max-w-[550px] flex-col flex-wrap justify-center text-left md:max-w-max">
        <p className="text-sm font-semibold">Technology used</p>
        <div className="flex w-full flex-wrap justify-center">
          {project.stack.map((stk, index) => {
            const src = flattenedStacks[stk];
            return (
              <div key={index}>
                <svg
                  viewBox="0 0 128 128"
                  className="z-10 h-[50px] max-h-[50px] w-[50px] max-w-[50px] overflow-visible p-2"
                >
                  {src}
                </svg>
              </div>
            );
          })}
        </div>
      </div>
      {/* images */}
      <div className="mt-5 space-y-10 ">
        {project.images?.map((imgs) => (
          <ProjectImage imgs={imgs} key={imgs.id} />
        ))}
      </div>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="mx-auto mb-[10px] mt-[100px] flex space-x-2 lg:w-[80%]"
      >
        <Link
          href={project.github_url}
          className={cn(buttonVariants({ size: "lg" }), "w-full space-x-2")}
          target="_blank"
        >
          <BsGithub size={16} />
          <p>GitHub</p>
        </Link>
        <Link
          href={project.url}
          className={cn(buttonVariants({ size: "lg" }), "w-full space-x-2")}
          target="_blank"
        >
          <ExternalLink size={16} />
          <p>URL</p>
        </Link>
      </div>
    </div>
  );
}
