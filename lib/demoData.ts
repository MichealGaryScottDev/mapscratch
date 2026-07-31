export interface Pin {
  id: string;
  lng: number;
  lat: number;
  label: string;
  note: string;
  photoUrl?: string;
  color: string;
  createdAt: string;
}

export interface RouteLine {
  id: string;
  coordinates: [number, number][];
  label: string;
  color: string;
  createdAt: string;
}

export interface Comment {
  id: string;
  targetId: string;
  text: string;
  author: string;
  createdAt: string;
}

export interface MapScratchData {
  pins: Pin[];
  routes: RouteLine[];
  comments: Comment[];
}

export function generateDemoData(): MapScratchData {
  const now = new Date().toISOString();
  return {
    pins: [
      {
        id: "pin-demo-1",
        lng: -73.987,
        lat: 40.752,
        label: "Trailhead — Panther Gorge",
        note: "Meet here at 6am. Park at the small lot off Route 73. Bring bug spray.",
        photoUrl: "",
        color: "#94a3b8",
        createdAt: now,
      },
      {
        id: "pin-demo-2",
        lng: -73.995,
        lat: 40.74,
        label: "Water crossing (low)",
        note: "Good spot to refill bottles. Water was clear and cold last time.",
        photoUrl: "",
        color: "#64748b",
        createdAt: now,
      },
      {
        id: "pin-demo-3",
        lng: -73.978,
        lat: 40.758,
        label: "Halfway Camp",
        note: "Flat ground for 3 tents. Fire ring already here. Stunning view east at sunrise.",
        photoUrl: "",
        color: "#e2e8f0",
        createdAt: now,
      },
      {
        id: "pin-demo-4",
        lng: -73.969,
        lat: 40.765,
        label: "Overlook — Best Photo Op",
        note: "360 view of the High Peaks. Tripod recommended.",
        photoUrl: "",
        color: "#94a3b8",
        createdAt: now,
      },
      {
        id: "pin-demo-5",
        lng: -74.005,
        lat: 40.738,
        label: "Parking & Bodega",
        note: "Last stop for snacks and coffee. Opens at 7am.",
        photoUrl: "",
        color: "#64748b",
        createdAt: now,
      },
    ],
    routes: [
      {
        id: "route-demo-1",
        coordinates: [
          [-73.987, 40.752],
          [-73.985, 40.748],
          [-73.983, 40.747],
          [-73.978, 40.758],
          [-73.975, 40.761],
          [-73.969, 40.765],
        ],
        label: "Main ridge approach",
        color: "#94a3b8",
        createdAt: now,
      },
    ],
    comments: [
      {
        id: "comment-demo-1",
        targetId: "pin-demo-1",
        text: "I'll bring an extra headlamp for anyone who forgets.",
        author: "Jenna",
        createdAt: now,
      },
      {
        id: "comment-demo-2",
        targetId: "pin-demo-1",
        text: "Should we push the time to 6:30? Sunrise is later now.",
        author: "Marcus",
        createdAt: now,
      },
      {
        id: "comment-demo-3",
        targetId: "pin-demo-3",
        text: "Confirmed — plenty of level ground. I counted 5 flat spots.",
        author: "Kai",
        createdAt: now,
      },
    ],
  };
}