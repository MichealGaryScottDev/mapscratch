"use client";

import { TextReveal } from "@/components/lib-ary/text-reveal/TextReveal";
import { Button } from "@/components/lib-ary/button/Button";
import { SparklesIcon } from "@/components/lib-ary/icons/Icons";
import Link from "next/link";
import { MapboxMap } from "@/components/mapbox/MapboxMap";
import { useStore } from "@/lib/store";

export default function HomePage() {
  const { data } = useStore();

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 sm:py-16 lg:py-20">
      {/* Hero: workbench header — logo left, headline + CTA right */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start lg:items-center mb-16">
        {/* Left: oversized logo pin */}
        <div className="flex-shrink-0">
          <div className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center rounded-sm bg-secondary ring-1 ring-border">
            <svg
              viewBox="0 0 120 120"
              className="w-14 h-14 sm:w-16 sm:h-16"
              aria-hidden="true"
            >
              <path
                d="M60 12c-14.359 0-26 11.641-26 26 0 18.5 26 58 26 58s26-39.5 26-58c0-14.359-11.641-26-26-26zm0 38a12 12 0 1 1 0-24 12 12 0 0 1 0 24z"
                fill="#94a3b8"
              />
            </svg>
          </div>
        </div>

        {/* Right: headline + CTA */}
        <div className="flex-1 min-w-0">
          <TextReveal
            mode="word"
            as="h1"
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground"
          >
            Shared maps, marked together
          </TextReveal>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground max-w-xl font-mono-console">
            Drop pins, draw routes, attach notes. Share a link with your crew and
            plan together — no accounts, no noise.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/map">
              <Button variant="primary" size="lg">
                Start mapping
              </Button>
            </Link>
            <Link href="/map">
              <Button variant="ghost" size="lg">
                View demo map
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Mini map preview — the tool peeking through */}
      <div className="rounded-sm overflow-hidden ring-1 ring-border mb-12">
        <div className="bg-card py-2 px-4 border-b border-dashed border-border flex items-center gap-2">
          <span className="font-mono-console text-[10px] tracking-wider text-muted-foreground">
            LIVE PREVIEW · {data.pins.length} pins · {data.routes.length} routes
          </span>
        </div>
        <MapboxMap
          className="h-[350px] sm:h-[420px] w-full"
          center={[-73.985, 40.752]}
          zoom={13}
          markers={data.pins.slice(0, 5).map((p) => ({
            id: p.id,
            lngLat: [p.lng, p.lat],
            color: p.color,
            popupHtml: `<b>${p.label}</b>`,
          }))}
        />
      </div>

      {/* Sections: Drafting Table, Markers & Trails, Field Notes, Share Loop — rendered as a single workbench feature sheet */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Drafting Table */}
        <div className="bg-card ring-1 ring-border rounded-sm p-5">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <h3 className="font-mono-console text-xs tracking-wider text-foreground uppercase">
              Drafting Table
            </h3>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Open the map and start marking. Drop pins with a tap, sketch routes
            by clicking waypoints. Every mark saves instantly to your local
            workspace — no save button.
          </p>
        </div>

        {/* Markers & Trails */}
        <div className="bg-card ring-1 ring-border rounded-sm p-5">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-2 rounded-full bg-muted-foreground" />
            <h3 className="font-mono-console text-xs tracking-wider text-foreground uppercase">
              Markers &amp; Trails
            </h3>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Color-coded pins, polylines, and timestamped comments layer into a
            shared visual conversation. Filter by type, see who added what.
          </p>
        </div>

        {/* Field Notes */}
        <div className="bg-card ring-1 ring-border rounded-sm p-5">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-2 rounded-full bg-foreground/60" />
            <h3 className="font-mono-console text-xs tracking-wider text-foreground uppercase">
              Field Notes
            </h3>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Attach a note and a photo URL to any pin. Comments thread beneath each
            marker — perfect for trail conditions, gear reminders, or meetup spots.
          </p>
        </div>

        {/* Share Loop */}
        <div className="bg-card ring-1 ring-border rounded-sm p-5">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-2 rounded-full bg-primary/60" />
            <h3 className="font-mono-console text-xs tracking-wider text-foreground uppercase">
              Share Loop
            </h3>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Copy a unique URL hash and send it to your crew. Friends open the
            same map and add their own marks — collaboration with zero setup.
          </p>
        </div>
      </div>
    </div>
  );
}