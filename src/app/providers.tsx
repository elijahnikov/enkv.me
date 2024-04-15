"use client";

import { ProjectViewProvider } from "@/context/projectView";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    // <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
    <ProjectViewProvider>{children}</ProjectViewProvider>
    // </ThemeProvider>
  );
}
