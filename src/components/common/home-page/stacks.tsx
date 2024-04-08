import { Card } from "@/components/ui/card";
import { stacks } from "@/lib/stacks";
import _ from "lodash";

export default function Stacks() {
  return (
    <div className="grid grid-cols-2 gap-6">
      {Object.entries(stacks).map(([category, items]) => (
        <Card className="p-4" key={category}>
          <h2 className="text-sm font-semibold text-neutral-600 sm:mb-2">
            {_.startCase(_.toLower(category))}
          </h2>
          <div className="wrap flex flex-wrap gap-2">
            {Object.entries(items)
              .slice(0, 5)
              .map(([name, src], index) => (
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
                  {/* <p className="text-xs text-neutral-600">{name}</p> */}
                </div>
              ))}
          </div>
        </Card>
      ))}
    </div>
  );
}
