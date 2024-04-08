import { Clock, MapPin } from "lucide-react";
import Image from "next/image";

export default function ProfileHeader() {
  const now = new Date();
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "Europe/London",
    hour12: true,
    hour: "numeric",
    minute: "numeric",
    timeZoneName: "short",
  });
  const currentTimeInLondon = formatter.format(now);
  return (
    <div>
      <div className="">
        <div className="">
          <Image
            src={
              "https://utfs.io/f/248fc5d3-0da0-4d86-85a1-a44e48020e27-h2az4q.jpg"
            }
            className="ml-4 rounded-full border-[8px] border-white shadow-sm drop-shadow-[rgba(0,_0,_0,_0.24)_0px_0.5px_1px] dark:border-neutral-500"
            alt="headshot"
            sizes="100vw"
            width={200}
            height={200}
          />
        </div>

        <div className="mt-4 w-full pl-0 sm:mt-0 sm:pl-6">
          <div className="flex items-center space-x-1">
            <h1 className="mt-4 text-[48px] font-bold">Elijah Posnikov</h1>
          </div>
          <p className="text-md mt-2 w-[80%] text-neutral-700 dark:text-neutral-300/80">
            Hey there 👋🏻! {`I'm`} a software developer with a keen eye for
            detail and fueled by a passion for crafting delightful experiences
            that are inclusive and intuitive.
          </p>
          <p className="mt-2 font-bold text-neutral-700">
            Currently Software Developer at Airfinity
          </p>
          <div className="mt-2 flex">
            <div className="items-center text-sm font-semibold text-neutral-600">
              <p>Based in London - United Kingdom 🇬🇧,</p>
              <p>where it is currently {currentTimeInLondon}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
