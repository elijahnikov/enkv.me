import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useLogSnag } from "@logsnag/next";
import { useState } from "react";

export default function ProjectContainer({
  trigger,
  view,
  title,
}: {
  trigger: React.ReactNode;
  title: string;
  view: React.ReactNode;
}) {
  const { track } = useLogSnag();
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [open, setOpen] = useState<boolean>(false);

  const trackReadMoreClick = () => {
    track({
      channel: "projects",
      event: "Opened project",
      icon: "💡",
      notify: true,
      tags: {
        title,
      },
    });
  };

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger onClick={trackReadMoreClick}>
          <div>{trigger}</div>
        </DialogTrigger>
        <DialogContent className="max-h-[90vh] min-w-[90vw] overflow-y-auto">
          <div className="mb-2 space-y-8">{view}</div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild onClick={trackReadMoreClick}>
        <div>{trigger}</div>
      </DrawerTrigger>
      <DrawerContent className="">
        <div className="mb-2 space-y-8 px-4 outline-none outline-0 ring-0">
          {view}
        </div>
      </DrawerContent>
    </Drawer>
  );
}
