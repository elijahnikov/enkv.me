import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { type ProjectsType } from "@/lib/data/projects";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";

export default function SingleProjectExpanded({
  project,
}: {
  project: ProjectsType;
}) {
  return (
    <div className="w-full px-6 py-4">
      <div className="flex justify-between">
        <div className="w-full">
          <h1 className="-mb-2 text-[48px] font-bold">{project.title}</h1>
          <p className="text-md w-[75%] text-neutral-600">
            {project.description}
          </p>
        </div>
        <div className="flex justify-between">
          <Separator orientation="vertical" className="bg-neutral-200" />
          <p className={cn("my-4 w-[75%] text-sm")}>
            {project.verbose_description}
          </p>
          <Separator orientation="vertical" className="bg-neutral-200" />
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="flex space-x-2"
          >
            <div>{project.wip && <Badge>WIP</Badge>}</div>
            <Link
              href={project.github_url}
              className={cn(buttonVariants({ size: "icon" }), "h-8 w-8")}
              target="_blank"
            >
              <BsGithub size={16} />
            </Link>
            <Link
              href={project.url}
              className={cn(buttonVariants({ size: "icon" }), "h-8 w-8")}
              target="_blank"
            >
              <ExternalLink size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
