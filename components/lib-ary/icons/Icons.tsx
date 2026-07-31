import type { ComponentType, ReactNode, SVGProps } from "react";
import * as Lucide from "lucide-react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function Icon({
  size = 16,
  children,
  strokeWidth = 2,
  ...props
}: IconProps & { children: ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      {children}
    </svg>
  );
}

export function ThumbsUpIcon({ size = 16, ...props }: IconProps) {
  return (
    <Icon size={size} {...props}>
      <path d="M7 11v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h3Zm0 0V8a4 4 0 0 1 4-4h.5a1.5 1.5 0 0 1 1.4 1l.6 2.5H18a2 2 0 0 1 1.9 2.6l-1.2 5A2 2 0 0 1 16.8 17H10a3 3 0 0 1-3-3Z" />
    </Icon>
  );
}

export function CheckIcon({ size = 16, ...props }: IconProps) {
  return (
    <Icon size={size} strokeWidth={2.5} {...props}>
      <path d="M20 6 9 17l-5-5" />
    </Icon>
  );
}

export function XIcon({ size = 16, ...props }: IconProps) {
  return (
    <Icon size={size} strokeWidth={2.5} {...props}>
      <path d="M18 6 6 18M6 6l12 12" />
    </Icon>
  );
}

export function ChevronRightIcon({ size = 16, ...props }: IconProps) {
  return (
    <Icon size={size} {...props}>
      <path d="m9 18 6-6-6-6" />
    </Icon>
  );
}

export function ChevronLeftIcon({ size = 16, ...props }: IconProps) {
  return (
    <Icon size={size} {...props}>
      <path d="m15 18-6-6 6-6" />
    </Icon>
  );
}

export function BotIcon({ size = 16, ...props }: IconProps) {
  return (
    <Icon size={size} {...props}>
      <rect x="4" y="8" width="16" height="12" rx="3" />
      <path d="M12 2v4M8 14h.01M16 14h.01M9 18h6" />
      <circle cx="12" cy="4" r="1" fill="currentColor" stroke="none" />
    </Icon>
  );
}

export function SparklesIcon({ size = 16, ...props }: IconProps) {
  return (
    <Icon size={size} {...props}>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8" />
      <circle cx="12" cy="12" r="2.5" />
    </Icon>
  );
}

export function LightbulbIcon({ size = 16, ...props }: IconProps) {
  return (
    <Icon size={size} {...props}>
      <path d="M9 18h6M10 21h4M8 14a5 5 0 1 1 8 0c-.7.9-1.2 1.5-1.4 2.5H9.4C9.2 15.5 8.7 14.9 8 14Z" />
    </Icon>
  );
}

export function PackageIcon({ size = 16, ...props }: IconProps) {
  return (
    <Icon size={size} {...props}>
      <path d="M16.5 9.4 7.5 4.2M21 16V8a2 2 0 0 0-1-1.7l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.7l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="M3.3 7 12 12l8.7-5M12 22V12" />
    </Icon>
  );
}

export function PaletteIcon({ size = 16, ...props }: IconProps) {
  return (
    <Icon size={size} {...props}>
      <path d="M12 22a10 10 0 1 1 10-10c0 2.2-1.8 3-3 3h-1.5a2.5 2.5 0 0 0-2.3 3.4A2 2 0 0 1 13 22Z" />
      <circle cx="7.5" cy="11.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="12" cy="7.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="16.5" cy="11.5" r="1" fill="currentColor" stroke="none" />
    </Icon>
  );
}

export function CodeIcon({ size = 16, ...props }: IconProps) {
  return (
    <Icon size={size} {...props}>
      <path d="m16 18 6-6-6-6M8 6l-6 6 6 6" />
    </Icon>
  );
}

export function TerminalIcon({ size = 16, ...props }: IconProps) {
  return (
    <Icon size={size} {...props}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="m7 9 3 3-3 3M12 15h5" />
    </Icon>
  );
}

export function DownloadIcon({ size = 16, ...props }: IconProps) {
  return (
    <Icon size={size} {...props}>
      <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
    </Icon>
  );
}

export function WrenchIcon({ size = 16, ...props }: IconProps) {
  return (
    <Icon size={size} {...props}>
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.5-2.5 2.5-2.5Z" />
    </Icon>
  );
}

export function HammerIcon({ size = 16, ...props }: IconProps) {
  return (
    <Icon size={size} {...props}>
      <path d="m15 12-8.5 8.5a2.1 2.1 0 1 1-3-3L12 9" />
      <path d="M18 10 21 7a2.1 2.1 0 0 0-3-3l-3 3" />
      <path d="m14 6 4 4" />
    </Icon>
  );
}

export function GithubIcon({ size = 16, ...props }: IconProps) {
  return (
    <Icon size={size} {...props}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3.2-.4 6.5-1.6 6.5-7.1A5.5 5.5 0 0 0 19 4.1 5.1 5.1 0 0 0 18.9 1S17.7.7 15 2.5a12.3 12.3 0 0 0-6 0C6.3.7 5.1 1 5.1 1A5.1 5.1 0 0 0 5 4.1 5.5 5.5 0 0 0 3.5 7.8c0 5.4 3.3 6.7 6.5 7.1A4.8 4.8 0 0 0 9 18v4" />
      <path d="M9 18c-4 1.3-4-2-6.5-3" />
    </Icon>
  );
}

export function CloudIcon({ size = 16, ...props }: IconProps) {
  return (
    <Icon size={size} {...props}>
      <path d="M17.5 19H9a6 6 0 1 1 5.7-8A4.5 4.5 0 1 1 17.5 19Z" />
    </Icon>
  );
}

export function CameraIcon({ size = 16, ...props }: IconProps) {
  return (
    <Icon size={size} {...props}>
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3Z" />
      <circle cx="12" cy="13" r="3.5" />
    </Icon>
  );
}

export function SendIcon({ size = 16, ...props }: IconProps) {
  return (
    <Icon size={size} {...props}>
      <path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7Z" />
    </Icon>
  );
}

export function RocketIcon({ size = 16, ...props }: IconProps) {
  return (
    <Icon size={size} {...props}>
      <path d="M4.5 16.5c-1.5 1.3-2 3.5-2 3.5s2.2-.5 3.5-2c.7-.8.7-2 0-2.8a2 2 0 0 0-2.8 0Z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.9A12.9 12.9 0 0 1 22 2c0 2.7-.9 5.7-2.1 7.9A22 22 0 0 1 15 12l-3 3Z" />
      <path d="M9 12H4s.6-3.4 2.4-5.2C8 5.2 11 5 11 5" />
      <path d="M12 15v5s3.4-.6 5.2-2.4c1.6-1.6 1.8-4.6 1.8-4.6" />
    </Icon>
  );
}

export function AlertIcon({ size = 16, ...props }: IconProps) {
  return (
    <Icon size={size} {...props}>
      <path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" />
      <path d="M12 9v4M12 17h.01" />
    </Icon>
  );
}

export function PauseIcon({ size = 16, ...props }: IconProps) {
  return (
    <Icon size={size} {...props}>
      <rect x="6" y="4" width="4" height="16" rx="1" />
      <rect x="14" y="4" width="4" height="16" rx="1" />
    </Icon>
  );
}

export function PlayIcon({ size = 16, ...props }: IconProps) {
  return (
    <Icon size={size} {...props}>
      <path d="M6 4v16l14-8L6 4Z" fill="currentColor" stroke="none" />
    </Icon>
  );
}

export function CalendarIcon({ size = 16, ...props }: IconProps) {
  return (
    <Icon size={size} {...props}>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M16 3v4M8 3v4M3 11h18" />
    </Icon>
  );
}

export function ClockIcon({ size = 16, ...props }: IconProps) {
  return (
    <Icon size={size} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </Icon>
  );
}

export function KeyIcon({ size = 16, ...props }: IconProps) {
  return (
    <Icon size={size} {...props}>
      <circle cx="8" cy="15" r="5" />
      <path d="m12.5 11.5 8-8M18 4.5l2.5 2.5M16 6.5l2.5 2.5" />
    </Icon>
  );
}

export function ShieldIcon({ size = 16, ...props }: IconProps) {
  return (
    <Icon size={size} {...props}>
      <path d="M12 3 4 7v5c0 5 3.4 8.4 8 9.5 4.6-1.1 8-4.5 8-9.5V7l-8-4Z" />
    </Icon>
  );
}

export function ActivityIcon({ size = 16, ...props }: IconProps) {
  return (
    <Icon size={size} {...props}>
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </Icon>
  );
}

/** 4-square dashboard / overview. */
export function GridIcon({ size = 16, ...props }: IconProps) {
  return (
    <Icon size={size} {...props}>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </Icon>
  );
}

/** Settings gear — Control tab. */
export function SettingsIcon({ size = 16, ...props }: IconProps) {
  return (
    <Icon size={size} {...props}>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9c.3.6.9 1 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z" />
    </Icon>
  );
}

export function ExternalLinkIcon({ size = 16, ...props }: IconProps) {
  return (
    <Icon size={size} {...props}>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3" />
    </Icon>
  );
}

/** Globe / custom domain. */
export function GlobeIcon({ size = 16, ...props }: IconProps) {
  return (
    <Icon size={size} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18Z" />
    </Icon>
  );
}

export function TagIcon({ size = 16, ...props }: IconProps) {
  return (
    <Icon size={size} {...props}>
      <path d="M12.6 3H4a1 1 0 0 0-1 1v8.6a1 1 0 0 0 .3.7l8.4 8.4a1 1 0 0 0 1.4 0l8.6-8.6a1 1 0 0 0 0-1.4L13.3 3.3a1 1 0 0 0-.7-.3Z" />
      <circle cx="7.5" cy="7.5" r="1.2" fill="currentColor" stroke="none" />
    </Icon>
  );
}

export function InfoIcon({ size = 16, ...props }: IconProps) {
  return (
    <Icon size={size} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5M12 8h.01" />
    </Icon>
  );
}

export function CheckCircleIcon({ size = 16, ...props }: IconProps) {
  return (
    <Icon size={size} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12.5 2.5 2.5 4.5-5" />
    </Icon>
  );
}

export function XCircleIcon({ size = 16, ...props }: IconProps) {
  return (
    <Icon size={size} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="m15 9-6 6M9 9l6 6" />
    </Icon>
  );
}

export function HourglassIcon({ size = 16, ...props }: IconProps) {
  return (
    <Icon size={size} {...props}>
      <path d="M5 3h14M5 21h14M7 3v3a5 5 0 0 0 2.5 4.3L12 12l2.5-1.7A5 5 0 0 0 17 6V3M7 21v-3a5 5 0 0 1 2.5-4.3L12 12l2.5 1.7A5 5 0 0 1 17 18v3" />
    </Icon>
  );
}

/** Control / command center — panel with dials (nav Control tab). */
export function ControlIcon({ size = 16, ...props }: IconProps) {
  return (
    <Icon size={size} {...props}>
      <rect x="3" y="4" width="18" height="16" rx="2.5" />
      <circle cx="8" cy="10" r="2" />
      <path d="M8 12v4" />
      <circle cx="16" cy="14" r="2" />
      <path d="M16 8v4" />
      <path d="M11.5 9.5h3M11.5 14.5h3" />
    </Icon>
  );
}

export function LayersIcon({ size = 16, ...props }: IconProps) {
  return (
    <Icon size={size} {...props}>
      <path d="m12 2 9 5-9 5-9-5 9-5Z" />
      <path d="m3 12 9 5 9-5M3 17l9 5 9-5" />
    </Icon>
  );
}

/**
 * Namespace + lucide fallback — models invent `Icons.Music` / default import.
 * Prefer lucide-react names; custom *Icon exports still available.
 */
type AnyIcon = ComponentType<{ size?: number; className?: string; [k: string]: unknown }>;

const customByShortName: Record<string, AnyIcon> = {
  ThumbsUp: ThumbsUpIcon,
  Check: CheckIcon,
  X: XIcon,
  ChevronRight: ChevronRightIcon,
  ChevronLeft: ChevronLeftIcon,
  Bot: BotIcon,
  Sparkles: SparklesIcon,
  Lightbulb: LightbulbIcon,
  Package: PackageIcon,
  Palette: PaletteIcon,
  Code: CodeIcon,
  Terminal: TerminalIcon,
  Download: DownloadIcon,
  Wrench: WrenchIcon,
  Hammer: HammerIcon,
  Github: GithubIcon,
  Cloud: CloudIcon,
  Camera: CameraIcon,
  Send: SendIcon,
  Rocket: RocketIcon,
  Alert: AlertIcon,
  Pause: PauseIcon,
  Play: PlayIcon,
  Calendar: CalendarIcon,
  Clock: ClockIcon,
  Key: KeyIcon,
  Shield: ShieldIcon,
  Activity: ActivityIcon,
  Grid: GridIcon,
  Settings: SettingsIcon,
  ExternalLink: ExternalLinkIcon,
  Globe: GlobeIcon,
  Tag: TagIcon,
  Info: InfoIcon,
  CheckCircle: CheckCircleIcon,
  XCircle: XCircleIcon,
  Hourglass: HourglassIcon,
  Control: ControlIcon,
  Layers: LayersIcon,
};

export const Icons: Record<string, AnyIcon> = new Proxy(
  { ...customByShortName } as Record<string, AnyIcon>,
  {
    get(target, prop) {
      if (typeof prop !== "string") return undefined;
      if (prop in target) return target[prop];
      const L = Lucide as Record<string, unknown>;
      const hit = L[prop] ?? L[`${prop}Icon`];
      if (typeof hit === "function") return hit as AnyIcon;
      return AlertIcon;
    },
  },
);

export default Icons;
