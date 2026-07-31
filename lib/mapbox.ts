/** Mapbox access — Autodev injects both keys with the same token. */
export function getMapboxToken(): string {
  return (
    process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN?.trim() ||
    process.env.MAPBOX_ACCESS_TOKEN?.trim() ||
    ""
  );
}
