"use client";

import { Printer } from "lucide-react";
import { Button } from "../ui/button";

export default function PrintButton() {
  return (
    <Button
      size={"sm"}
      disabled
      className="flex	h-8 cursor-not-allowed space-x-1 rounded-lg border bg-gray-100 text-black hover:bg-gray-200 dark:bg-neutral-900 dark:text-white hover:dark:border-neutral-700 dark:hover:bg-neutral-800"
    >
      <Printer size={16} />
      <span>Print</span>
    </Button>
  );
}
