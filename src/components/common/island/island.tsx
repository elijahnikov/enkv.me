import { Separator } from "@/components/ui/separator";
import ThemeSwitcher from "../theme-switcher";
import HeaderLinks from "../home-page/header-links";
import EmailButton from "./email-button";

export default function Island() {
  return (
    <div className="fixed bottom-[4dvh] left-[50%] right-[50%] z-50 flex h-14 w-[500px] -translate-x-2/4 items-center justify-center rounded-2xl border border-neutral-200/60 bg-white/10 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] backdrop-blur-md dark:border-neutral-800/70 dark:bg-neutral-900 dark:shadow-neutral-900">
      <EmailButton />
      <Separator orientation="vertical" className="mx-5 h-[40%]" />
      <HeaderLinks />
      <Separator orientation="vertical" className="mx-5 h-[40%]" />
      <ThemeSwitcher />
    </div>
  );
}
