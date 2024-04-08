"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
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

export function ReadMore({
  pointers,
  company,
  title,
}: {
  pointers: string[];
  company: string;
  title: string;
}) {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <div className="mb-1 mt-2 cursor-pointer text-sm text-neutral-500 underline">
            Read more
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{company}</DialogDescription>
          </DialogHeader>
          <div className="mt-2 space-y-2">
            {pointers.map((pointers, index) => (
              <p
                className="mt-1 text-sm text-neutral-700 dark:text-neutral-400"
                key={index}
              >
                - {pointers}
              </p>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <div className="mb-1 mt-2 cursor-pointer text-sm underline">
          Read more
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>{title}</DrawerTitle>
          <DrawerDescription>{company}</DrawerDescription>
        </DrawerHeader>
        <div className="mt-2 space-y-2">
          {pointers.map((pointers, index) => (
            <p
              className="mt-1 text-sm text-neutral-600 dark:text-neutral-300"
              key={index}
            >
              - {pointers}
            </p>
          ))}
        </div>
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

function ProfileForm({ className }: React.ComponentProps<"form">) {
  return (
    <form className={cn("grid items-start gap-4", className)}>
      <Button type="submit">Save changes</Button>
    </form>
  );
}
