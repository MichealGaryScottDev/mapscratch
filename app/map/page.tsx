"use client";

import { useState } from "react";
import { TextReveal } from "@/components/lib-ary/text-reveal/TextReveal";
import { Button } from "@/components/lib-ary/button/Button";
import { Card } from "@/components/lib-ary/card/Card";
import { Icons } from "@/components/lib-ary/icons/Icons";
import { MapboxMap } from "@/components/mapbox/MapboxMap";

interface Marker {
  id: string;
  lngLat: [number, number];
  color: string;
  popupHtml: string;
}

export default function MapPage() {
  const [mode, setMode] = useState<"view" | "drop">("view");
  const [markers, setMarkers] = useState<Marker[]>([
    {
      id: "1",
      lngLat: [-73.9857, 40.7484],
      color: "#6c8ea3",
      popupHtml: "<b>Empire State Building</b><br/>Midtown Manhattan",
    },
    {
      id: "2",
      lngLat: [-73.99, 40.75],
      color: "#6c8ea3",
      popupHtml: "<b>Times Square</b><br/>Broadway & 7th Ave",
    },
    {
      id: "3",
      lngLat: [-74.006, 40.7128],
      color: "#6c8ea3",
      popupHtml: "<b>City Hall</b><br/>Lower Manhattan",
    },
  ]);
  const [nextId, setNextId] = useState(4);

  const handleMapClick = (lngLat: [number, number]) => {
    if (mode !== "drop") return;
    const newMarker: Marker = {
      id: String(nextId),
      lngLat,
      color: "#6c8ea3",
      popupHtml: `<b>Issue #${nextId}</b><br/>${lngLat[1].toFixed(4)}, ${lngLat[0].toFixed(4)}`,
    };
    setMarkers((prev) => [...prev, newMarker]);
    setNextId((prev) => prev + 1);
    setMode("view");
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-zinc-800 bg-zinc-950 px-6 py-24 sm:px-8 lg:px-12">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/40 to-transparent" />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mb-8 flex justify-center">
            <Icons.MapPin size={80} className="text-zinc-300" />
          </div>
          <TextReveal mode="word" as="h1" className="text-4xl font-normal tracking-tight text-zinc-100 sm:text-5xl lg:text-6xl">
            MapScratch
          </TextReveal>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
            Drop pins on live maps, log urban issues, and sketch your city observations.
          </p>
        </div>
      </section>

      {/* Map + Controls */}
      <section className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <Card className="overflow-hidden border-zinc-800 bg-zinc-900/80 p-0">
            {/* Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-800 px-6 py-4">
              <div className="flex items-center gap-3">
                <span className="text-sm text-zinc-400">{markers.length} pins on map</span>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant={mode === "drop" ? "primary" : "default"}
                  size="sm"
                  onClick={() => setMode(mode === "drop" ? "view" : "drop")}
                >
                  <span className="mr-2 inline-flex">
                    {mode === "drop" ? <Icons.Crosshair size={16} /> : <Icons.Plus size={16} />}
                  </span>
                  {mode === "drop" ? "Done dropping" : "Drop pin"}
                </Button>
              </div>
            </div>

            {/* Map */}
            <div className="relative h-[70vh] w-full">
              <MapboxMap
                className="h-full w-full"
                center={[-73.9857, 40.7484]}
                zoom={12}
                markers={markers}
                onMapClick={handleMapClick}
              />
              {mode === "drop" && (
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                  <Icons.Crosshair size={48} className="animate-pulse text-zinc-300/70" />
                </div>
              )}
            </div>
          </Card>

          {/* Pin list */}
          <div className="mt-12">
            <h2 className="mb-6 text-xl font-medium text-zinc-200">Recent pins</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[...markers].reverse().map((marker) => (
                <Card key={marker.id} className="border-zinc-800 bg-zinc-900/80 p-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="h-3 w-3 flex-shrink-0 rounded-full"
                      style={{ backgroundColor: marker.color }}
                    />
                    <div
                      className="text-sm text-zinc-300"
                      dangerouslySetInnerHTML={{ __html: marker.popupHtml }}
                    />
                  </div>
                  <p className="mt-2 text-xs text-zinc-500">
                    {marker.lngLat[1].toFixed(4)}, {marker.lngLat[0].toFixed(4)}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}