import HeaderLinks from "@/components/common/home-page/header-links";
import ProfileHeader from "@/components/common/home-page/profile-header";
import ThemeSwitcher from "@/components/common/theme-switcher";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col rounded-t-2xl border-[0.5px] bg-white text-black dark:border-neutral-700 dark:bg-black dark:text-white">
      <div className="flex h-14 items-center rounded-t-2xl border-b-[0.5px] px-4 dark:border-neutral-700 dark:bg-neutral-900/70">
        <div className="w-full" />
        <ThemeSwitcher />
      </div>
      <div className="p-10">
        <ProfileHeader />
        <HeaderLinks />
      </div>
    </main>
  );
}
