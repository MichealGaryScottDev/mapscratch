# Orynth Product Submit — recorded flow

URL: https://www.orynth.dev/projects/submit
Account: devorynth@gmail.com (Google)

## Steps (1–13)

1. Click **Product** card (Apps, tools, SaaS…)
2. **Product name** → `#name` (max 40) → **Next**
3. **One line pitch** → `#tagline` (max 50) → **Next**
4. **Where can people try it** → `#websiteUrl` → **Next**
5. **What makes it special** → TipTap (max 500) → **Next**
6. **Logo** → upload SVG/PNG → **Next**
7. **Screenshots** → multi upload → **Next**
8. **Categories** → exactly 3 `#cat-*` → **Next**
9. → **Next** (no Autodev fill)
10. → **Next** (no Autodev fill)
11. **First comment** → TipTap (max 500) → **Next**
12. → **Next**
13. **Submit product** — dashboard approves → clicks **Submit product**
14. **Verify ownership** — download `.txt` → `public/.well-known/ory-verify.txt` → git push + redeploy → click **Verify ownership**

Automation: `src/orynth-submit.ts` (Playwright). Logo SVG → PNG via
`setInputFiles`. Dashboard approval submits; ownership verify follows.

## This ship

```json
{
  "productName": "MapScratch",
  "oneLinePitch": "Shared maps, marked together",
  "websiteUrl": "https://mapscratch.loomship.xyz",
  "whatMakesItSpecial": "Drop pins on a shared Mapbox map and add notes or photo links. Draw routes with freehand lines that everyone in the group sees. Comment on any pin or route to update trail conditions. A unique URL hash opens the same map for friends, who can add their own marks. Everything saves to localStorage with demo data preloaded, so you can try it right away.",
  "logoAbsolutePath": "C:\\Users\\noahw\\Downloads\\CodingProjects\\OrynthAutoDev\\projects\\mapscratch\\listing\\logo.svg",
  "screenshotAbsolutePaths": [
    "C:\\Users\\noahw\\Downloads\\CodingProjects\\OrynthAutoDev\\projects\\mapscratch\\listing\\screenshots\\01-map.png",
    "C:\\Users\\noahw\\Downloads\\CodingProjects\\OrynthAutoDev\\projects\\mapscratch\\listing\\screenshots\\02-home.png"
  ],
  "categories": [
    "Productivity",
    "Platforms",
    "Open Source"
  ],
  "categoryIds": [
    "cat-productivity",
    "cat-platform",
    "cat-open-source"
  ],
  "firstComment": "Hey Orynth, built this for my weekend hiking crew because group texts get messy fast. It's just Mapbox plus localStorage, no backend, so the URL hash carries the state. I'd love to know if the shared link flow feels natural when you open it on your phone."
}
```
