import { Badge } from "@/components/ui/badge";
import { type ExperienceType } from "@/lib/experience";
import { stacks } from "@/lib/stacks";
import { Briefcase, ExternalLink, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Sticker from "../../sticker";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ReadMore } from "./read-more";

export default function ExperienceCard({
  experience,
}: {
  experience: ExperienceType;
}) {
  const { company, website, roles, location, localeImage } = experience;
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
    <li className="ms-4">
      <div className="absolute -start-4 flex h-8 w-8 items-center justify-center rounded-full border bg-white p-2 dark:bg-black ">
        <Briefcase />
      </div>
      <div className="pl-5 dark:border-slate-700">
        <div className="flex justify-between">
          <div className="w-full">
            <div className="flex items-center justify-between">
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
                <div className="absolute -start-[6.5px] mt-[6px] flex h-3 w-3 items-center justify-center rounded-full border bg-white dark:bg-black "></div>
                <div>
                  <p className="text-sm">{title}</p>
                </div>
                <p className="text-xs text-neutral-500 dark:text-neutral-500">
                  {duration}
                </p>

                <ReadMore
                  location={location}
                  localeImage={localeImage}
                  company={company}
                  title={title}
                  pointers={pointers}
                />
                <div className="-ml-[6px] flex flex-wrap -space-x-2">
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
    </li>
  );
}
