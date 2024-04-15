import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { type ProjectsType } from "@/lib/data/projects";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";

export default function SingleProjectExpanded({
  project,
}: {
  project: ProjectsType;
}) {
  return (
    <div className="w-full px-10 py-4">
      {/* header */}
      <div className="flex justify-between">
        <div className="w-full">
          <div className="flex items-center">
            <h1 className="-mb-2 text-[48px] font-bold">{project.title}</h1>
            <div>{project.wip && <Badge className="ml-2 mt-6">WIP</Badge>}</div>
          </div>
          <p className="text-md w-[75%] text-neutral-600">
            {project.description}
          </p>
        </div>
        <div className="flex justify-between">
          <p className={cn("my-4 w-[80%] text-sm text-neutral-700")}>
            {project.verbose_description}
          </p>
        </div>
      </div>
      {/* images */}
      <div className="mt-5 space-y-10 ">
        {project.images?.map((imgs) => (
          <div key={imgs.id}>
            <div className="flex w-full justify-center" key={imgs.id}>
              <div className="w-[80%]">
                <div className="flex items-center">
                  <div className="flex">
                    <Badge className="p- w-4 items-center justify-center rounded-full bg-neutral-900 text-white">
                      {imgs.id}
                    </Badge>
                  </div>
                  <h1 className="mb-2 mt-2 px-2 text-lg font-semibold">
                    {imgs.title}
                  </h1>
                </div>
                <Image
                  src={imgs.src}
                  alt={imgs.label}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  aria-label={imgs.label}
                  className="mx-auto flex justify-center rounded-xl border border-neutral-200 shadow-sm"
                />
                <p className="px-2 py-1 text-xs text-neutral-500">
                  {imgs.label}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="mx-auto mb-[50px] mt-[100px] flex w-[80%] space-x-2"
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
