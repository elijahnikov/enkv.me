"use client";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { stacks } from "@/lib/data/stacks";
import _ from "lodash";

export default function Stacks() {
  return (
    <div className="flex flex-col justify-center">
      <h1 className="mb-4 text-lg font-semibold">Skills 🛠️</h1>
      <div className="flex justify-center">
        <div className="grid w-full grid-cols-2 gap-4 xl:gap-8">
          {Object.entries(stacks).map(([category, items]) => (
            <Card className="p-4" key={category}>
              <div className="mb-2 flex items-center space-x-2">
                <h2 className="text-sm font-semibold text-neutral-600 ">
                  {_.startCase(_.toLower(category))}
                </h2>
                <Badge className="border border-green-500 bg-green-400 text-black shadow-sm hover:bg-green-400">
                  {Object.entries(items).length}
                </Badge>
              </div>
              <div className="grid grid-cols-4 gap-2">
                <TooltipProvider>
                  {Object.entries(items).map(([name, src], index) => (
                    <Tooltip key={index}>
                      <TooltipTrigger>
                        <div className="flex items-center justify-center rounded-lg border border-neutral-200 px-2 shadow-sm">
                          <div>
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
                          </div>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent className="relative left-0 border-neutral-200 text-xs dark:border-neutral-800">
                        {name}
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </TooltipProvider>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
