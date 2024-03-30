import { Badge } from "@/components/ui/badge";
import { stacks } from "@/lib/stacks";
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
          <div>
            {Object.entries(items)
              // .slice(0, 9)
              .map(([name, src], index) => (
                <Badge className="mr-2" variant={"outline"} key={index}>
                  {src !== "" && (
                    <Image
                      width={12}
                      height={12}
                      src={src}
                      alt={name}
                      className="mr-1"
                    />
                  )}
                  {name}
                </Badge>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
