import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

export default function ProjectImage({
  imgs,
}: {
  imgs: {
    id: number;
    src: string;
    title: string;
    label: string;
  };
}) {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  return (
    <div>
      <div className="flex w-full justify-center" key={imgs.id}>
        <div className="lg:w-[80%]">
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
          <div className="relative">
            {!imageLoaded && (
              <Skeleton className="absolute left-0 top-0 h-full w-full bg-neutral-200" />
            )}
            <Image
              src={imgs.src}
              alt={imgs.label}
              width={0}
              height={0}
              onLoad={() => setImageLoaded(true)}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              aria-label={imgs.label}
              className={cn(
                !imageLoaded ? "opacity-0" : "opacity-100",
                "mx-auto flex justify-center rounded-xl border border-neutral-200 shadow-sm",
              )}
            />
          </div>
          <p className="px-2 py-1 text-xs text-neutral-500">{imgs.label}</p>
        </div>
      </div>
    </div>
  );
}
