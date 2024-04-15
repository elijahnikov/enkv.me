import { Badge } from "@/components/ui/badge";
import { type ExperienceType } from "@/lib/data/experience";
import { stacks } from "@/lib/data/stacks";
import { ExternalLink, MapPin } from "lucide-react";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ReadMore } from "./read-more";
import { Card } from "@/components/ui/card";

export default function ExperienceCard({
  experience,
}: {
  experience: ExperienceType;
}) {
  const { company, website, roles, location } = experience;
  const extractedObjects = Object.entries(stacks).reduce(
    (acc: Record<string, string | React.ReactNode>, [_, childObject]) => {
      Object.entries(childObject).forEach(([key, value]) => {
        acc[key] = value;
      });
      return acc;
    },
    {},
  );
  return (
    <Card className="flex w-full p-2 py-4">
      <div className="w-full px-5">
        <div className="flex w-full justify-between">
          <div className="w-full">
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center">
                <h1 className="text-md mt-[3px] font-semibold text-gray-900 dark:text-white">
                  {company}
                </h1>
                <Link href={website} target="_blank" className="ml-2 mt-1">
                  <ExternalLink size={16} />
                </Link>
              </div>
              <Badge variant={"default"} className="h-5 text-[10px]">
                <MapPin size={12} className="mr-1" />
                {location}
              </Badge>
            </div>
            {roles.map(({ duration, pointers, stack, title, id }) => (
              <div key={id} className="mt-2">
                <div>
                  <p className="text-sm">{title}</p>
                </div>
                <p className="text-xs text-neutral-500 dark:text-neutral-500">
                  {duration}
                </p>

                <ReadMore
                  location={location}
                  company={company}
                  title={title}
                  pointers={pointers}
                />
                <div className="-ml-[6px] mt-4 flex flex-wrap -space-x-1">
                  <TooltipProvider>
                    {stack.map((stk, index) => {
                      const src = extractedObjects[stk];
                      return (
                        <div key={index}>
                          <Tooltip>
                            <TooltipTrigger>
                              <svg
                                viewBox="0 0 128 128"
                                className="absolute z-10 h-[36px] max-h-[36px] w-[36px] max-w-[36px] overflow-visible p-2"
                              >
                                {src}
                              </svg>
                              <svg
                                viewBox="0 0 128 128"
                                className="sticker h-[36px] max-h-[36px] w-[36px] max-w-[36px] overflow-visible p-2 drop-shadow-[rgba(0,_0,_0,_0.24)_0px_0.5px_1px]"
                              >
                                {src}
                              </svg>
                            </TooltipTrigger>
                            <TooltipContent className="relative left-0 border-neutral-200 text-xs dark:border-neutral-800">
                              {stk}
                            </TooltipContent>
                          </Tooltip>
                        </div>
                      );
                    })}
                  </TooltipProvider>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}
