import { cn } from "@/lib/utils";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const nav = [
    {
      href: "/",
      name: "Home",
    },
    {
      href: "/projects",
      name: "Projects",
    },
  ];
  return (
    <div className="mt-8 w-full">
      <nav className="relative z-0 mx-auto flex w-full justify-center justify-around rounded-md border border-neutral-200 bg-neutral-100 text-center text-sm dark:border-neutral-800 dark:bg-neutral-900 sm:w-[500px] ">
        {nav.map((n, index) => (
          <Link
            key={index}
            href={n.href}
            className={cn(
              "flex-1 px-2 py-1.5",
              pathname === n.href
                ? "text-black dark:text-white"
                : "text-neutral-700/80 dark:text-neutral-400",
            )}
          >
            {n.name}
          </Link>
        ))}
        <span
          className={cn(
            "absolute bottom-0 left-0 -z-10 h-full w-1/2 origin-center rounded-md border border-neutral-200 bg-white shadow-sm transition-all duration-300 dark:border-neutral-700 dark:bg-black",
            pathname === "/projects" ? "left-[50%]" : "left-[0%]",
          )}
        ></span>
      </nav>
    </div>
  );
}
