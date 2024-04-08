"use client";

import { Rnd } from "react-rnd";

export default function Sticker({
  children,
  isSvg = true,
}: {
  children: React.ReactNode;
  isSvg?: boolean;
}) {
  return (
    <Rnd
      className="animate transition-500 flex items-center justify-center rounded-2xl border-2 border-dashed border-transparent hover:border-slate-200"
      default={{
        x: 200,
        y: 600,
        width: 220,
        height: 220,
      }}
    >
      {isSvg ? (
        <>
          <svg
            viewBox="0 0 128 128"
            className="absolute z-10 h-full w-full overflow-visible p-2	"
          >
            {children}
          </svg>
          <svg
            viewBox="0 0 128 128"
            className="sticker absolute h-full w-full overflow-visible p-2 drop-shadow-[rgba(0,_0,_0,_0.24)_0px_0.5px_1px]	"
          >
            {children}
          </svg>
        </>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="text-sticker h-full w-full drop-shadow-[rgba(0,_0,_0,_0.24)_0px_0.5px_1px]	"
          viewBox="0 0 128 128"
        >
          {children}
        </svg>
      )}
    </Rnd>
  );
}
