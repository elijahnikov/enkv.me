import Image from "next/image";
import Link from "next/link";
import EmailButton from "./island/email-button";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useLogSnag } from "@logsnag/next";
import Navigation from "./navigation";

export default function ProfileHeader() {
  const pathname = usePathname();
  const { track } = useLogSnag();

  const now = new Date();
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "Europe/London",
    hour12: true,
    hour: "numeric",
    minute: "numeric",
  });
  const currentTimeInLondon = formatter.format(now);

  const links = [
    {
      id: 1,
      href: "/",
      name: "Home",
    },
    {
      id: 2,
      href: "/projects",
      name: "Projects",
    },
  ];

  return (
    <div className="left-0 mx-auto flex  flex-col justify-center xl:fixed xl:block xl:w-[600px]">
      <div className="xl:pl-16">
        <div className="flex justify-center xl:block">
          <Image
            src={
              "https://utfs.io/f/248fc5d3-0da0-4d86-85a1-a44e48020e27-h2az4q.jpg"
            }
            className="rounded-full"
            alt="headshot"
            sizes="100vw"
            width={200}
            height={200}
          />
        </div>
        <div className="mt-4 w-full flex-col pl-0 sm:mx-auto sm:flex sm:max-w-[500px] sm:justify-center xl:max-w-full">
          <div className="flex items-center space-x-1">
            <h1 className="mt-4 text-[42px] font-bold">Elijah Posnikov</h1>
          </div>
          <p className="text-md mt-2 w-[100%] text-neutral-700 dark:text-neutral-300/80 sm:text-[24px] xl:w-[80%]">
            Software developer with a keen eye for detail and fueled by a
            passion for crafting delightful experiences that are inclusive and
            intuitive.
          </p>
          <p className="mt-2 text-neutral-700">
            Currently Software Developer at Airfinity
          </p>
          <div className="mt-2 flex">
            <div className="items-center text-sm text-neutral-600">
              <p>London, United Kingdom 🇬🇧 {currentTimeInLondon} 🕐</p>
            </div>
          </div>
          <div className="mt-6 w-[30%]">
            <EmailButton />
          </div>
        </div>
        <Navigation />
      </div>
    </div>
  );
}
