# Autodev Design System — multi-craft

**Craft is per site.** Each `SiteIdea.visualCraft` picks one of: `wallet` | `editorial` | `workbench` | `paper`.  
Wallet / Autodev-dashboard density is **one option**, not the only look.

The build prompt injects a **VISUAL CRAFT** block that overrides this doc when they conflict. Always obey:

1. VISUAL CRAFT block (user message)
2. LAYOUT ARCHETYPE block
3. This document for stack, banned patterns, and shared rules

---

## Shared bans (all crafts)

- Purple mesh / neon glow / rainbow gradient heroes
- Sticky blur marketing navbar + 3-column footer + centered hero + 3 identical feature Cards
- Tiny 16px Lucide spam rows pretending to be a feature section
- Bland empty white pages with no motion
- Stub routes that redirect or say "coming soon"
- Non-functional mock UIs, dead CTAs, "add your API key" placeholders, fake gray maps
- Running shadcn CLI or inventing non-allowed `components/ui/*`
- Skipping LibAry TextReveal on landing heroes
- Loading any Google font other than Inter

---

## Craft snapshots

### wallet
Dark `#141414` canvas, `#1e1e1e` sheets, `rounded-[20px]`, soft `#5c5c5c` labels, pill CTAs. Coinbase/Trust density. Prefer sheet + cell rows.

### editorial
Typographic product essay. Display serif/sans hierarchy, airy sections, action often below the fold. Not identical wallet sheets.

### workbench
Split panes / sidebar / mono workspace. Tool is the first viewport. Cool dark neutrals, denser controls.

### paper
Warm light canvas, ink type, hairline borders. Paper cards — not dark wallet chrome.

---

## Reference tokens (wallet defaults — remap for other crafts)

| Role | Hex | Use |
|------|-----|-----|
| Page bg | `#141414` | Wallet canvas (paper uses warm off-white) |
| Elevated sheet | `#1e1e1e` | Panels (paper uses light cards) |
| Hover mist | `#252525` | Row / control hover |
| Ring / hairline | `#2b2b2b` | `ring-1` / row dividers |
| Primary text | `#e4e4e4` | Titles (paper: near-ink) |
| Secondary | `#8a8a8a` | Supporting copy |
| Faint label | `#5c5c5c` | Section labels, meta |
| Accent | brand primary — muted slate-blue / sage / amber — **never** neon purple |

---

## 1. Stack for UI

- **Next.js 15 App Router** + TypeScript
- **Tailwind CSS v3**
- **LibAry** (`components/lib-ary/*`) — Button, Card, TextReveal, Icons, Tabs, Toast, Tooltip — **required on landings**
- **Fonts** via `next/font/google` from idea `fontPairing` (display + body variables)
- **lucide-react** OK for dense tool chrome; LibAry Icons for hero-scale marks
- **clsx** + **tailwind-merge** → `cn()` in `lib/utils.ts`
- Forms: hand-roll `components/ui/*` — **only** modules that ship in the Autodev template
- **Selectable libs** (when listed on the idea): currently **Mapbox** via `MAPBOX_ACCESS_TOKEN` / `NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN` + `@/components/mapbox/MapboxMap`

### LibAry (landings — mandatory)

```tsx
import { TextReveal } from "@/components/lib-ary/text-reveal/TextReveal";
import { Button } from "@/components/lib-ary/button/Button";
import { SparklesIcon } from "@/components/lib-ary/icons/Icons";

<SparklesIcon size={80} className="text-foreground" />
<TextReveal mode="word" as="h1" className="text-5xl font-semibold tracking-tight">
  {brandTitle}
</TextReveal>
```

### Allowed `components/ui` imports (forms / tools)

`button`, `card`, `input`, `label`, `badge`, `separator`, `textarea`, `select`, `checkbox`

**Forbidden:** `dropdown-menu`, `dialog`, `sheet`, `popover`, `avatar`, `switch`, or any other shadcn module not listed.

---

## 2. Typography

**Always Inter.** Load Inter via `next/font/google` for both display and body. Set `--font-sans` and mirror `--font-display` to the same family. Apply `inter.className` on `<body>`. Do not import Newsreader, Space Grotesk, Playfair, Fraunces, JetBrains Mono, or any other face.

| Role | Notes |
|------|--------|
| Hero / product name | Brand is the hero signal — size + weight hierarchy with Inter |
| Section title | Clear hierarchy; follow craft density |
| Body | Readable; muted secondary color per craft |
| Soft section label | Quiet meta — not uppercase tracking spam |
| Meta / mono | `font-mono` OK for workbench output (system mono stack) |

Avoid shouty `font-black` / `uppercase tracking-widest` chrome.

---

## 3. Color tokens

Map brand palette into CSS variables. Wallet/workbench stay dark-first; paper uses warm light canvas; editorial may be dark ink-on-near-black without copying wallet sheet chrome.

Map brand accent into `--primary` as HSL channels.
```css
:root {
  --background: 0 0% 8%;          /* ~#141414 */
  --foreground: 0 0% 89%;         /* ~#e4e4e4 */
  --card: 0 0% 12%;               /* ~#1e1e1e */
  --card-foreground: 0 0% 89%;
  --primary: /* brand accent HSL channels */;
  --primary-foreground: 0 0% 8%;
  --secondary: 0 0% 15%;
  --secondary-foreground: 0 0% 89%;
  --muted: 0 0% 15%;
  --muted-foreground: 0 0% 54%;   /* ~#8a8a8a */
  --accent: 0 0% 15%;
  --accent-foreground: 0 0% 89%;
  --destructive: 0 45% 63%;       /* soft red like #c97a7a */
  --border: 0 0% 17%;             /* ~#2b2b2b */
  --input: 0 0% 17%;
  --ring: /* match primary */;
  --radius: 1.25rem;              /* ~20px sheets */
}
```

**Light theme only** if the idea’s visual direction explicitly demands paper/daylight — still use sheet language (`rounded-[20px]`, soft labels, pill CTAs), not purple-on-white SaaS.

**Accent:** one muted brand color. Prefer cool slate-blue, sage, or soft amber. Ban rainbow UI and purple/indigo mesh.

---

## 4. Atmosphere (allowed wash)

Page background may use **one** soft radial wash — matching Autodev:

```css
background:
  radial-gradient(ellipse 80% 50% at 50% -10%, <accent at ~12% alpha>, transparent 55%),
  #141414;
```

Banned: multi-stop purple meshes, linear rainbow heroes, glow blobs, aurora stacks.

---

## 5. Surfaces — sheets, not “cards”

Default composition = **wallet sheets**:

- Panel: `rounded-[20px] bg-[#1e1e1e] ring-1 ring-[#2b2b2b]` (or `bg-card ring-1 ring-border`)
- List rows: `px-4 py-3.5` with `border-b border-[#2b2b2b]/80` between cells — **not** a grid of identical Card boxes
- Nested inset: `rounded-[16px] bg-[#181818] ring-1 ring-[#2b2b2b]`
- Hover row: `hover:bg-[#252525]`
- **No** heavy `shadow-xl` / colored glows
- Radius: sheets `rounded-[20px]`, controls `rounded-[10px]`–`rounded-xl`, CTAs often `rounded-full`

Avoid wrapping everything in shadcn `Card` with `shadow-sm` — prefer sheet + cell rows.

---

## 6. Spacing & shell

- Base 4px. Comfortable gaps: `gap-4` / `gap-5`, section stack `space-y-5` / `gap-6`
- Shell: `mx-auto max-w-lg` or `max-w-xl` for tool/wallet products; `max-w-5xl` only when archetype needs width
- Padding: `px-4 sm:px-5`, generous bottom pad for mobile
- One job per section: soft label + one sheet or one interactive block

---

## 7. Buttons & CTAs

- Primary: solid light pill on dark — e.g. `rounded-full bg-[#e4e4e4] text-[#141414] font-semibold` **or** solid `--primary` with readable foreground
- Secondary: `rounded-full bg-[#1e1e1e] ring-1 ring-[#2b2b2b] text-[#e4e4e4]`
- Ghost: text `#8a8a8a` → hover sheet
- One solid primary per cluster
- Map shadcn Button variants to this language via `className` / CVA — don’t ship default bright blue rectangles

---

## 8. Navigation & chrome

Follow the **LAYOUT ARCHETYPE** in the build prompt.

Forbidden cookie-cutter:
- Sticky blur `border-b` marketing nav on every ship
- Logo + 5 links + solid CTA right
- Three-column footer link farms

Prefer Autodev-like chrome when it fits:
- Centered title in a slim sticky header + mark top-left
- Floating bottom pill nav **only** for multi-view apps
- Tool-first: almost no chrome

Logo: always `/logo.svg`. Display as a **squircle** when used as an avatar (`rounded-[14px]`–`rounded-[22px]`), or as a bare mark (no plate) in headers.

---

## 9. Hero & first viewport

Every landing / marketing first viewport:

1. **Huge icon or logo** — LibAry icon at `size={64|80|96}` **or** `/logo.svg` displayed ≥72px
2. **TextReveal** — brand name + one headline via `<TextReveal mode="word">` (or `line`)
3. One short supporting sentence + one primary CTA (LibAry `Button`)
4. Optional soft radial wash only (see §4)

Wallet / tool products may open into the tool after that beat — still give the first paint a reveal + mark.

Rules:
- Brand name is hero-level — don't bury it under a louder headline
- No floating badge stickers on media
- No identical 3-card feature grids under every hero
- Feel sleek and deliberate — not a default Next starter

---

## 10. Forms & tools

- Put controls inside a sheet (`rounded-[20px] …`)
- Soft `text-[12px] text-[#5c5c5c]` labels above fields
- Inputs: dark fill, `ring-1 ring-[#2b2b2b]`, `rounded-[10px]`, light text
- Cell-style settings rows (label left, control right) for toggles/meta
- Primary submit: full-width pill
- Results: second sheet or cell list — not a loud Card carousel

---

## 11. Motion

Required on landings:
1. **TextReveal** word/line stagger on hero brand + headline
2. Soft opacity / translate on primary hover
3. One more intentional beat (sheet fade-in, map load, or icon settle)

Respect `prefers-reduced-motion` (TextReveal still mounts instantly if reduced).
No bounce spam, no purple glow pulses, no endless shimmer walls.

---

## 12. Quality checklist

- [ ] Craft obeyed (wallet / editorial / workbench / paper) — not forced wallet on every ship
- [ ] LibAry TextReveal on hero + huge icon/logo (≥72px)
- [ ] Soft section labels; sheets over bland Card grids
- [ ] Pill / LibAry CTAs; one primary
- [ ] `/logo.svg` used; squircle where product identity shows in lists
- [ ] Fonts via `next/font` from pairing; tokens in CSS variables
- [ ] Accent muted, singular — no purple mesh
- [ ] Selected libraries wired (e.g. real Mapbox map when `mapbox` selected)
- [ ] Mobile-first; tap targets ≥40px
- [ ] Real copy — zero lorem / “your amazing product”

---

## 13. Anti-patterns (reject)

- Purple / indigo gradient heroes
- Cream page + terracotta + decorative serif (AI default #2)
- Broadsheet hairline newspaper layouts
- Generic shadcn light SaaS: sticky blur nav → hero → 3 feature Cards → footer
- Glow, neon, glassmorphism soup
- Huge `rounded-3xl` colorful shadow cards
- Icon-row feature strips and pill-chip spam
- Stock photo grids as the product

---

## 14. File expectations

```
app/globals.css          # tokens + base + optional radial wash
app/layout.tsx           # Inter, metadata
app/page.tsx             # composition
components/ui/*          # allowed modules only
components/*             # product sections
lib/utils.ts
public/logo.svg          # from brand step — do not invent a worse mark
```

When in doubt: open a mental picture of the **Autodev approve / overview screens** — match that craft.
