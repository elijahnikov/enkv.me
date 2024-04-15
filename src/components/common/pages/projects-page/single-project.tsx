import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { useProjectView } from "@/context/projectView";
import { type ProjectsType } from "@/lib/data/projects";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ExternalLink, Eye } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { BsGithub } from "react-icons/bs";

export default function SingleProject({ project }: { project: ProjectsType }) {
  const { setSelectedId } = useProjectView();
  return (
    <motion.div
      layoutId={String(project.id)}
      onClick={() => setSelectedId(String(project.id))}
      key={project.id}
      className="group"
    >
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center">
            <h1 className="-mb-1 font-bold text-neutral-700">
              {project.title}
            </h1>
            <span className="relative ml-1 mt-1 flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
          </div>
          <p className="text-sm text-neutral-600">{project.description}</p>
        </div>
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="mt-4 flex items-center space-x-2"
        >
          <Badge>WIP</Badge>
          <Link
            href={project.github_url}
            className={cn(buttonVariants({ size: "icon" }), "h-6 w-6")}
            target="_blank"
          >
            <BsGithub size={16} />
          </Link>
          <Link
            href={project.url}
            className={cn(buttonVariants({ size: "icon" }), "h-6 w-6")}
            target="_blank"
          >
            <ExternalLink size={16} />
          </Link>
        </div>
      </div>
      <div className="relative h-max w-max">
        <div className="absolute z-10 flex h-full w-full items-center justify-center rounded-xl bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-30" />
        <div className="absolute z-10 flex h-full w-full items-center justify-center rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="text-center">
            <Eye
              size={48}
              className="fill-white stroke-[1.8px] text-neutral-600 opacity-100"
            />
          </div>
        </div>
        <Image
          src={project.header_image}
          alt={`Desktop image of ${project.title} app`}
          width={720}
          height={720}
          className="animate mt-4 rounded-xl border bg-neutral-800"
        />
      </div>
    </motion.div>
  );
}