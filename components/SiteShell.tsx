"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Thin top bar — monospace wordmark, border-dashed */}
      <header className="sticky top-0 z-30 bg-background/80 backdrop-blur-sm border-b border-dashed border-border">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-4 h-10">
          <Link
            href="/"
            className="font-mono-console text-xs tracking-wider text-muted-foreground hover:text-foreground transition-colors"
          >
            mapscratch v0.1
          </Link>

          <nav className="flex items-center gap-6">
            <Link
              href="/"
              className={`font-mono-console text-xs tracking-wider transition-colors ${
                pathname === "/" || pathname.startsWith("/share")
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              /home
            </Link>
            <Link
              href="/map"
              className={`font-mono-console text-xs tracking-wider transition-colors ${
                pathname === "/map"
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              /map
            </Link>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1">{children}</main>

      {/* Footer — monospace one-liner */}
      <footer className="border-t border-dashed border-border py-3">
        <div className="max-w-5xl mx-auto px-4">
          <p className="font-mono-console text-[10px] text-muted-foreground tracking-wider">
            MapScratch · off-grid mode · data stored locally
          </p>
        </div>
      </footer>
    </div>
  );
}