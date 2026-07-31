"use client";

import { useParams } from "next/navigation";
import { useState, useCallback } from "react";
import { MapboxMap } from "@/components/mapbox/MapboxMap";
import { useStore } from "@/lib/store";
import { Pin } from "@/lib/demoData";

export default function SharePage() {
  const { id } = useParams<{ id: string }>();
  const { data } = useStore();
  const [sharedNote, setSharedNote] = useState("");

  // In a real app, the hash/id would map to a specific room.
  // For demo, this shows the shared view with all data and allows adding pins.
  const handleMapClick = useCallback(
    (lngLat: { lng: number; lat: number }) => {
      // This page is "viewer" — but we let them add comments in spirit of collaboration.
      // Not adding actual data here to keep the demo clean — shows the map with existing marks.
    },
    [],
  );

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Share header */}
      <div className="bg-card ring-1 ring-border rounded-sm p-4 mb-6">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div>
            <h1 className="font-mono-console text-sm tracking-wider text-foreground uppercase">
              Shared Map
            </h1>
            <p className="font-mono-console text-[10px] text-muted-foreground mt-1">
              Room: {id || "demo"} · {data.pins.length} pins · {data.routes.length} routes
            </p>
          </div>
          <div className="flex items-center gap-2">
            <code className="font-mono-console text-[11px] bg-secondary px-3 py-1.5 rounded-sm text-muted-foreground ring-1 ring-border select-all">
              /share/{id || "demo"}
            </code>
            <button
              onClick={() => navigator.clipboard.writeText(window.location.href)}
              className="font-mono-console text-[10px] bg-primary/20 text-primary px-2 py-1 rounded-sm hover:bg-primary/30 transition-colors"
            >
              Copy link
            </button>
          </div>
        </div>
      </div>

      {/* Map pane */}
      <div className="rounded-sm overflow-hidden ring-1 ring-border">
        <MapboxMap
          className="h-[500px] sm:h-[600px] w-full"
          center={[-73.985, 40.752]}
          zoom={13}
          markers={data.pins.map((p) => ({
            id: p.id,
            lngLat: [p.lng, p.lat],
            color: p.color,
            popupHtml: `<b>${p.label || "Unnamed pin"}</b><br/><small>${p.note?.slice(0, 80) || ""}</small>`,
          }))}
        />
      </div>

      {/* Collaboration note */}
      <div className="mt-4 bg-card ring-1 ring-border rounded-sm p-3">
        <p className="font-mono-console text-[10px] text-muted-foreground tracking-wider">
          Share this link with your crew. They&apos;ll see all pins and routes.
          Map data is stored locally — each collaborator sees the same marks
          on their own device. (Full sync requires a backend; this demo uses
          shared localStorage for illustration.)
        </p>
      </div>
    </div>
  );
}