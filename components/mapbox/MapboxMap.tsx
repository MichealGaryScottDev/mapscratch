"use client";

import { useEffect, useRef, useState } from "react";
import { getMapboxToken } from "@/lib/mapbox";

export type MapMarker = {
  id: string;
  /** [lng, lat] */
  lngLat: [number, number];
  color?: string;
  popupHtml?: string;
};

type MapboxMapProps = {
  className?: string;
  /** [lng, lat] */
  center?: [number, number];
  zoom?: number;
  styleUrl?: string;
  /** Markers rendered as Mapbox markers */
  markers?: MapMarker[];
  /** Click map → [lng, lat] (for pin-drop UIs) */
  onMapClick?: (lngLat: [number, number]) => void;
};

/**
 * Interactive Mapbox GL map.
 * Token is read from NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN / MAPBOX_ACCESS_TOKEN
 * (Autodev injects both into .env.local — do NOT hardcode or re-prompt for the token).
 */
export function MapboxMap({
  className = "",
  center = [-73.9857, 40.7484],
  zoom = 11,
  styleUrl = "mapbox://styles/mapbox/dark-v11",
  markers = [],
  onMapClick,
}: MapboxMapProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);
  const onClickRef = useRef(onMapClick);
  onClickRef.current = onMapClick;

  useEffect(() => {
    const token = getMapboxToken();
    if (!token) {
      setError(
        "Map unavailable — MAPBOX_ACCESS_TOKEN missing in Autodev root .env (mirrored to this project).",
      );
      return;
    }
    if (!ref.current) return;

    let cancelled = false;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let map: any = null;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const markerObjs: any[] = [];

    (async () => {
      try {
        const mapboxgl = (await import("mapbox-gl")).default;
        await import("mapbox-gl/dist/mapbox-gl.css");
        if (cancelled || !ref.current) return;
        mapboxgl.accessToken = token;
        map = new mapboxgl.Map({
          container: ref.current,
          style: styleUrl,
          center,
          zoom,
          attributionControl: true,
        });
        map.addControl(
          new mapboxgl.NavigationControl({ visualizePitch: true }),
          "top-right",
        );

        map.on("click", (e: { lngLat: { lng: number; lat: number } }) => {
          onClickRef.current?.([e.lngLat.lng, e.lngLat.lat]);
        });

        const paintMarkers = () => {
          for (const m of markerObjs) m.remove();
          markerObjs.length = 0;
          for (const m of markers) {
            const el = document.createElement("div");
            el.style.width = "14px";
            el.style.height = "14px";
            el.style.borderRadius = "50%";
            el.style.background = m.color || "#6c8ea3";
            el.style.border = "2px solid #fff";
            el.style.boxShadow = "0 1px 4px rgba(0,0,0,.45)";
            el.style.cursor = "pointer";
            const marker = new mapboxgl.Marker({ element: el })
              .setLngLat(m.lngLat)
              .addTo(map);
            if (m.popupHtml) {
              marker.setPopup(
                new mapboxgl.Popup({ offset: 12 }).setHTML(m.popupHtml),
              );
            }
            markerObjs.push(marker);
          }
        };

        map.on("load", paintMarkers);
        if (map.isStyleLoaded()) paintMarkers();
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "Map failed to load");
        }
      }
    })();

    return () => {
      cancelled = true;
      for (const m of markerObjs) m.remove();
      map?.remove();
    };
  }, [center[0], center[1], zoom, styleUrl, JSON.stringify(markers)]);

  if (error) {
    return (
      <div
        className={`flex min-h-[420px] items-center justify-center rounded-[20px] bg-[#1e1e1e] ring-1 ring-[#2b2b2b] px-6 text-center text-sm text-[#8a8a8a] ${className}`}
      >
        {error}
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={`min-h-[420px] w-full overflow-hidden rounded-[20px] ring-1 ring-[#2b2b2b] ${className}`}
    />
  );
}

export default MapboxMap;
