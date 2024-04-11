"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useLogSnag } from "@logsnag/next";

export function ReadMore({
  pointers,
  company,
  title,
  location,
}: {
  pointers: string[];
  company: string;
  title: string;
  location: string;
}) {
  const { track } = useLogSnag();
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const trackReadMoreClick = () => {
    track({
      channel: "work-experience",
      event: "Read more",
      icon: "📖",
      notify: true,
      tags: {
        company,
      },
    });
  };

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger onClick={trackReadMoreClick}>
          <div className="mb-1 mt-2 cursor-pointer text-xs text-neutral-500 underline">
            Read more
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>
              <div>{company}</div>
              <div>{location}</div>
            </DialogDescription>
          </DialogHeader>
          <div className="mb-2 space-y-8">
            {pointers.map((pointers, index) => (
              <p
                className="mt-1 text-sm text-neutral-700 dark:text-neutral-400"
                key={index}
              >
                - {pointers}
              </p>
            ))}
          </div>
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
        <div className="mb-1 mt-2 cursor-pointer text-xs text-neutral-500 underline">
          Read more
        </div>
      </DrawerTrigger>
      <DrawerContent className="w-[100vw]">
        <DrawerHeader className="text-left">
          <DrawerTitle>{title}</DrawerTitle>
          <DrawerDescription>{company}</DrawerDescription>
        </DrawerHeader>
        <div className="mb-2 space-y-8 px-4 outline-none outline-0 ring-0">
          {pointers.map((pointers, index) => (
            <p
              className="mt-1 text-sm text-neutral-700 dark:text-neutral-400"
              key={index}
            >
              - {pointers}
            </p>
          ))}
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
