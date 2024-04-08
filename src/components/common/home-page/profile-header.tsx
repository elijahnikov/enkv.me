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
      <div className="flex">
        <div className="">
          <Image
            src={
              "https://utfs.io/f/248fc5d3-0da0-4d86-85a1-a44e48020e27-h2az4q.jpg"
            }
            className="rounded-full shadow-sm dark:border-neutral-500"
            alt="headshot"
            sizes="100vw"
            width={150}
            height={150}
          />
        </div>

        <div className="mt-4 w-full pl-0 sm:mt-0 sm:pl-6">
          <div className="flex items-center space-x-1">
            <h1 className="text-2xl font-bold">Elijah Posnikov</h1>
          </div>
          <p className="mt-2 w-[90%] text-xs text-neutral-700 dark:text-neutral-300/80">
            Hey there👋🏻! {`I'm`} a software developer with a keen eye for detail
            and a passion for turning awesome ideas into sleek, user friendly
            software solutions.
          </p>
          {/* <div className="mt-2 text-xs text-neutral-700 dark:text-neutral-300/80">
            <p>
              I develop things as a Software Developer at{" "}
              <a
                href="https://www.airfinity.com/"
                className="text-sm font-semibold text-black underline dark:text-white"
              >
                Airfinity
              </a>
            </p>
          </div> */}
          {/* <div className="mt-4 flex items-center space-x-3 text-xs dark:text-white">
            <div className="flex items-center space-x-1">
              <MapPin className="dark:text-neutral-100" size={14} />
              <p>London - United Kingdom</p>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="dark:text-neutral-100" size={14} />
              <p>{currentTimeInLondon}</p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
