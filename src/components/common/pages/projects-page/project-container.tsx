import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useLogSnag } from "@logsnag/next";
import { useState } from "react";

export default function ProjectContainer({
  trigger,
  view,
}: {
  trigger: React.ReactNode;
  view: React.ReactNode;
}) {
  const { track } = useLogSnag();
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [open, setOpen] = useState<boolean>(false);

  const trackReadMoreClick = () => {
    // track({
    //   channel: "work-experience",
    //   event: "Read more",
    //   icon: "📖",
    //   notify: true,
    // });
  };

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger onClick={trackReadMoreClick}>
          <div>{trigger}</div>
        </DialogTrigger>
        <DialogContent className="max-h-[90vh] min-w-[90vw] overflow-y-auto">
          <div className="mb-2 space-y-8">{view}</div>
          <DialogFooter className="pt-2">
            <DialogClose asChild className="w-full">
              <Button variant="outline">Close</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild onClick={trackReadMoreClick}>
        <div>{trigger}</div>
      </DrawerTrigger>
      <DrawerContent className="w-[100vw]">
        <div className="mb-2 space-y-8 px-4 outline-none outline-0 ring-0">
          {view}
        </div>
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
