# 3D Shirt Falling Animation

## Files

| File | Role |
|------|------|
| `web/public/models/tshirt.glb` | 3D model (shirt_baked.glb from Three.js community) |
| `web/src/components/ui/ShirtScene3D.tsx` | Scene logic: physics, materials, animation |
| `web/src/components/ui/ShirtPhysicsCanvas.tsx` | Wrapper — lazy-loads ShirtScene3D with SSR disabled |

## How it works

```
HeroBanner
  └── ShirtPhysicsCanvas          ← absolute inset-0, zIndex 5, pointer-events-none
        └── ShirtScene3D (lazy)   ← Three.js Canvas
              └── FallingTShirt × 6 (one per color)
```

Each shirt runs its own physics state via `useRef` + `useFrame`:

```
spawn at top (y ≈ 2.4)
  → fall (vy + scroll boost)
    → hit FLOOR_Y (-1.85)
      → landed: ease rotZ → ~75° (shirt flops sideways)
        → after 1.5s → respawn from top
```

## Key constants

```ts
SHIRT_SCALE = 0.72          // model display size — tune if too big/small
FLOOR_Y     = -1.85         // y coordinate where shirt "lands"
staggerY    = i * 0.75      // spread initial spawn positions so screen always has shirts
elapsed > 1.5               // seconds shirt stays on ground before respawning
```

## Physics tuning

| Variable | Location | Effect |
|----------|----------|--------|
| `SHIRT_SCALE` | line 14 | Size of each shirt in scene |
| `vy: -(0.32 … 0.60)` | `randomState()` | Base fall speed |
| `scrollBoost * 0.009` | `useFrame` | How much scrolling accelerates fall |
| `dt * 0.4` | `useFrame` | Y-axis spin speed while falling |
| `rotZFinal = dir * 0.42…0.67π` | `useFrame` | Tilt angle when landing |
| `elapsed > 1.5` | `useFrame` | Time lying on ground before respawn |

## Changing shirt colors

Edit `SHIRT_COLORS` in `ShirtScene3D.tsx`:

```ts
const SHIRT_COLORS = [
  "#bfdbfe", // sky blue
  "#c7d2fe", // lavender
  "#a5f3fc", // cyan
  "#bbf7d0", // mint
  "#fde68a", // warm yellow
  "#fecdd3", // blush pink
];
```

Number of colors = number of simultaneous shirts in scene.

## Replacing the 3D model

1. Get a `.glb` file (free sources: [Poly Pizza](https://poly.pizza/search/shirt), [CGTrader](https://cgtrader.com), [Fab.com](https://fab.com))
2. Place it at `web/public/models/tshirt.glb`
3. Adjust `SHIRT_SCALE` — start at `1.0` and tune up/down

## SSR note

`ShirtPhysicsCanvas` uses `dynamic(() => import(...), { ssr: false })` — required because Three.js uses browser APIs (`document`, `window`) that don't exist in Next.js SSR. The `"use client"` directive alone is not enough.

## Dependencies

```json
"@react-three/fiber": "^9.x",
"@react-three/drei": "^10.x",
"three": "^0.x",
"@types/three": "^0.x"
```
