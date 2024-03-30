import PageLayout from "@/components/common/layout/global-layout";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";

import { Inter as FontSans } from "next/font/google";
import Providers from "./providers";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Elijah Posnikov",
  description: "Portfolio for Elijah Posnikov",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers>
          <PageLayout>{children}</PageLayout>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
