import Image from "next/image";
import EmailButton from "./island/email-button";
import Navigation from "./navigation";
import ThemeSwitcher from "./theme-switcher";

export default function ProfileHeader() {
  const now = new Date();
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "Europe/London",
    hour12: true,
    hour: "numeric",
    minute: "numeric",
  });
  const currentTimeInLondon = formatter.format(now);

  return (
    <div className="mx-auto flex flex-col justify-center ">
      <div>
        <div className="flex justify-center">
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
        <div className="mx-auto mt-4 flex w-full max-w-[500px] flex-col justify-center pl-0 ">
          <div className="flex items-center space-x-1">
            <h1 className="mt-4 text-[42px] font-bold">Elijah Posnikov</h1>
          </div>
          <p className="text-md mt-2 w-[100%] text-[20px] text-neutral-700 dark:text-neutral-200 xl:text-[24px]">
            Software developer with a keen eye for detail and fueled by a
            passion for crafting delightful experiences that are inclusive and
            intuitive.
          </p>
          <p className="mt-2 text-neutral-700 dark:text-neutral-300">
            Currently Software Developer at Airfinity
          </p>
          <div className="mt-2 flex">
            <div className="items-center text-sm text-neutral-600 dark:text-neutral-300">
              <p>London, United Kingdom 🇬🇧 {currentTimeInLondon} 🕐</p>
            </div>
          </div>
          <div className="mt-6 flex w-max space-x-2">
            <EmailButton />
            <ThemeSwitcher />
          </div>
        </div>
        <Navigation />
      </div>
    </div>
  );
}
