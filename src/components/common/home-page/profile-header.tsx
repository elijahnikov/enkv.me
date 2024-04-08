import Image from "next/image";

export default function ProfileHeader() {
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
        </div>
      </div>
    </div>
  );
}
