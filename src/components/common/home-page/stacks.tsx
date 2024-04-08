import { buttonVariants } from "@/components/ui/button";
import { stacks } from "@/lib/stacks";
import { cn } from "@/lib/utils";
import _ from "lodash";
import Image from "next/image";

export default function Stacks() {
  return (
    <div>
      <h1 className="mb-4 text-xl font-semibold">Skills</h1>
      {Object.entries(stacks).map(([category, items]) => (
        <div className="my-2" key={category}>
          <h2 className="text-sm font-semibold sm:mb-2">
            {_.startCase(_.toLower(category))}
          </h2>
          <div className="wrap flex flex-wrap gap-2">
            {Object.entries(items).map(([name, src], index) => (
              <div
                key={index}
                className="flex items-center rounded-lg border px-2 shadow-sm"
              >
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
                <p className="text-xs text-neutral-600">{name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
