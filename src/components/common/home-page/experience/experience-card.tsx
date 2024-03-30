import { Badge } from "@/components/ui/badge";
import { type ExperienceType } from "@/lib/experience";
import { stacks } from "@/lib/stacks";
import { Briefcase, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ExperienceCard({
  experience,
}: {
  experience: ExperienceType;
}) {
  const { company, website, roles, location } = experience;
  const extractedObjects = Object.entries(stacks).reduce(
    (acc: Record<string, string>, [_, childObject]) => {
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
                <h1 className="mt-[3px] text-lg font-semibold text-gray-900 dark:text-white">
                  {company}
                </h1>
                <Link href={website} target="_blank" className="ml-2 mt-1">
                  <ExternalLink size={16} />
                </Link>
              </div>
              <Badge variant={"outline"} className="text-xs">
                {location}
              </Badge>
            </div>
            {roles.map(({ duration, pointers, stack, title, id }) => (
              <div key={id} className="mt-4">
                <div className="absolute -start-[6.5px] mt-[6px] flex h-3 w-3 items-center justify-center rounded-full border bg-white dark:bg-black "></div>
                <div>
                  <p className="text-md">{title}</p>
                </div>
                <p className="text-xs text-neutral-500 dark:text-neutral-500">
                  {duration}
                </p>
                <div className="mt-2 space-y-2">
                  {pointers.map((pointers, index) => (
                    <p
                      className="mt-1 text-sm text-neutral-600 dark:text-neutral-300"
                      key={index}
                    >
                      - {pointers}
                    </p>
                  ))}
                </div>
                <div className="mt-3 flex space-x-2">
                  {stack.map((stk, index) => {
                    const src = extractedObjects[stk];
                    return (
                      <Badge
                        variant={"outline"}
                        className="h-5 rounded-md"
                        key={index}
                      >
                        {src && (
                          <Image
                            width={12}
                            height={12}
                            src={src}
                            alt={stk}
                            className="mr-1"
                          />
                        )}
                        {stk}
                      </Badge>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </li>
  );
}
