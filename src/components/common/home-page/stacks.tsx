import { buttonVariants } from "@/components/ui/button";
import { stacks } from "@/lib/stacks";
import { cn } from "@/lib/utils";
import _ from "lodash";
import Image from "next/image";

export default function Stacks() {
  return (
    <div className="mt-8">
      <h1 className="mb-4 text-xl font-semibold">Skills</h1>
      {Object.entries(stacks).map(([category, items]) => (
        <div className="my-2" key={category}>
          <h2 className="mb-2 ml-1 text-sm font-semibold">
            {_.startCase(_.toLower(category))}
          </h2>
          <div className="grid grid-cols-6 gap-2">
            {Object.entries(items).map(([name, src], index) => (
              <div
                className={cn(
                  "flex h-8 px-2",
                  buttonVariants({ variant: "outline", size: "sm" }),
                )}
                key={index}
              >
                {src !== "" && (
                  <Image
                    width={12}
                    height={12}
                    src={src}
                    alt={name}
                    className="mr-2"
                  />
                )}
                {name}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
