import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteShell } from "@/components/SiteShell";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MapScratch — Shared maps, marked together",
  description:
    "Collaborative map annotation for outdoor crews. Drop pins, draw routes, attach notes, and share links with your group.",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${inter.className} font-sans min-h-screen`}
        style={{ "--font-display": inter.style.fontFamily } as React.CSSProperties}
      >
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}