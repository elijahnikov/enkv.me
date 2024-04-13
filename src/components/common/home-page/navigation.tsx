import { cn } from "@/lib/utils";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();
  return (
    <div className="mt-4 w-full">
      <nav className="relative z-0 flex w-full justify-around  text-center text-sm xl:w-[250px]">
        <Link
          href="/"
          className={cn(
            "flex-1 px-2 py-1.5",
            pathname === "/" ? "text-black" : "text-neutral-700/80",
          )}
        >
          Home
        </Link>
        <Link
          href="/projects"
          className={cn(
            "flex-1 px-2 py-1.5",
            pathname === "/projects" ? "text-black" : "text-neutral-700/80",
          )}
        >
          Projects
        </Link>
        <span
          className={cn(
            "absolute bottom-0 left-0 -z-10 h-full w-1/2 origin-center rounded-md border border-neutral-200 bg-neutral-300/20 shadow-sm transition-all duration-300",
            pathname === "/projects" ? "left-[50%]" : "left-[0%]",
          )}
        ></span>
      </nav>
    </div>
  );
}
