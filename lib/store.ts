"use client";

import { useLocalStorage } from "@/lib/useLocalStorage";
import { MapScratchData, generateDemoData, Pin, RouteLine, Comment } from "@/lib/demoData";

const STORAGE_KEY = "mapscratch-data";

function seedIfEmpty(data: MapScratchData | null): MapScratchData {
  if (!data || (data.pins.length === 0 && data.routes.length === 0)) {
    return generateDemoData();
  }
  return data;
}

export function useStore() {
  const [raw, setRaw] = useLocalStorage<MapScratchData | null>(STORAGE_KEY, null);
  const data = seedIfEmpty(raw);

  const save = (newData: MapScratchData) => setRaw(newData);

  const addPin = (pin: Pin) => {
    save({ ...data, pins: [...data.pins, pin] });
  };

  const updatePin = (id: string, patch: Partial<Pin>) => {
    const pins = data.pins.map((p) => (p.id === id ? { ...p, ...patch } : p));
    save({ ...data, pins });
  };

  const deletePin = (id: string) => {
    const pins = data.pins.filter((p) => p.id !== id);
    const comments = data.comments.filter((c) => c.targetId !== id);
    save({ ...data, pins, comments });
  };

  const addRoute = (route: RouteLine) => {
    save({ ...data, routes: [...data.routes, route] });
  };

  const deleteRoute = (id: string) => {
    const routes = data.routes.filter((r) => r.id !== id);
    const comments = data.comments.filter((c) => c.targetId !== id);
    save({ ...data, routes, comments });
  };

  const addComment = (comment: Comment) => {
    save({ ...data, comments: [...data.comments, comment] });
  };

  const deleteComment = (id: string) => {
    const comments = data.comments.filter((c) => c.id !== id);
    save({ ...data, comments });
  };

  return {
    data,
    addPin,
    updatePin,
    deletePin,
    addRoute,
    deleteRoute,
    addComment,
    deleteComment,
  };
}