# INTERRUPT — CapCut Walkthrough (Intro, Outro, Transitions)

A click-by-click guide. You build the **intro once**, save it, and reuse it on every
post. Same for the outro.

**The mental model:** think of the timeline as a stack of horizontal tracks. The
**main track** (bottom) is the spine — clips play left to right. **Overlay tracks**
(above it) sit on top, with their own opacity/blend settings.

```
Main track:    [bars][static][testcard][tear][======== MAIN VIDEO ========][endcard]
Overlay 1:                          [scanlines......][REC overlay..........][scanlines]
```

---

## How long is this?
- **Intro: ~0.6 seconds** · **Outro: ~1.2 seconds** · **Combined: ~1.8 seconds**
- Seconds, not minutes — on purpose. A long intro kills retention. This is a flash.

## 0. Before you start

1. Open CapCut → **New project**.
2. Set the canvas to **9:16** (click the ratio/aspect button, choose 9:16).
3. **Import these files** (click Import / Add media, select all at once):
   - `frame-bars-1080x1920.png`
   - `frame-testcard-1080x1920.png`
   - `frame-endcard-1080x1920.png`
   - `overlay-rec-1080x1920.png`
   - `static.mp4` (Prompt 1 clip you generated)
   - `scanlines.mp4` (Prompt 2 clip)
   - `tear.mp4` (Prompt 3 clip)
   - your **main video** for the post

**How to set a clip's length:** images default to ~3s. **Zoom into the timeline**
(pinch, or Ctrl+scroll / the zoom slider) so you can see individual frames, then
**drag the clip's right edge left** to shorten it. Short clips are easier to control
when zoomed in.

---

## 1. Build the INTRO (~0.6s)

Drag clips onto the **main track**, left to right, in this order:

| # | Clip | Length | What to do |
|---|---|---|---|
| 1 | `frame-bars.png` | **0.1s** (~2 frames) | Drag to the start. Zoom in, drag its right edge until it's tiny (a flash). |
| 2 | `static.mp4` | **0.15s** (~4 frames) | Place right after the bars. Trim to a very short burst. |
| 3 | `frame-testcard.png` | **0.25s** (~7 frames) | Place after the static. This is the "PLEASE STAND BY" card. |
| 4 | `tear.mp4` | **0.1s** (~3 frames) | Place after the test card — it wipes into your content. |

**That's the intro.** Roughly half a second. It should feel like a signal being cut.

### Add scanlines over the test card (the flicker)
1. Drag `scanlines.mp4` onto the **overlay track above** the main track.
2. Line it up so it sits over the test-card clip.
3. Trim it to the same length (~0.25s).
4. Select it → **Basic → Opacity** → set to **~40%**.
5. (Optional) **Blend → Screen** or **Add** for a glow.

### Add the sound
1. **Audio → Sound effects** → search "static" or "glitch" or "TV".
2. Drop it so the hit lands **at the start of the static clip** (clip 2).
3. Trim it to ~0.2s.

---

## 2. The MAIN VIDEO

1. Place your main video right after the tear clip on the main track.
2. **Add the REC overlay:** drag `overlay-rec.png` onto an **overlay track**.
3. Stretch its right edge so it covers the **entire main video**.
4. Select it → **Opacity ~70%** so it reads but doesn't dominate.

---

## 3. Build the OUTRO (~1.2s)

1. After the main video, place `frame-endcard.png` on the main track.
2. Set its length to **1.2s** (drag the edge).
3. (Optional) Put `scanlines.mp4` on the overlay track above it, ~20% opacity.
4. If the CTA on the end card needs changing, add a **Text** layer over it instead
   of editing the image (faster).

---

## 4. Transitions between shots (inside your video)

Whenever your main video cuts between scenes:
- Drop `static.mp4` or `tear.mp4` as a **2–3 frame insert** on the main track between
  the two shots, **or**
- Use **Transitions → Glitch** on the cut.
- Keep it consistent — same transition every time.

---

## 5. Full-video CRT texture (optional, strong effect)

1. Drag `scanlines.mp4` onto the **top overlay track**.
2. Stretch it across the **whole video** (intro → outro).
3. **Opacity ~15%**, **Blend → Screen**.
4. This gives the entire video a subtle "old broadcast" feel.

---

## 6. Export

- Resolution **1080×1920**
- Frame rate **30fps**
- Bitrate **high / recommended**
- Format MP4

---

## 7. Reuse it on every post (important)

You only build the intro/outro once.

1. Select **all the intro clips together** → right-click → **Create compound clip**
   (CapCut groups them into one block). Name it `INTRO`.
2. Do the same for the outro → name it `OUTRO`.
3. In future projects, copy/paste the `INTRO` and `OUTRO` compound clips, or export
   them as `INTRO.mp4` / `OUTRO.mp4` and re-import.

**The category number:** don't bake it into the intro. Add it as a **Text** layer
over the test card per post (or skip it — the chyron already names the category at
2–4s).

---

## Quick reference

| Element | File / source | Length | Track |
|---|---|---|---|
| Bars flash | `frame-bars.png` | 0.1s | Main |
| Static burst | `static.mp4` | 0.15s | Main |
| Test card | `frame-testcard.png` | 0.25s | Main |
| Scanlines (over card) | `scanlines.mp4` | 0.25s | Overlay |
| Tear | `tear.mp4` | 0.1s | Main |
| Main video | your clip | — | Main |
| REC overlay | `overlay-rec.png` | full video | Overlay |
| End card | `frame-endcard.png` | 1.2s | Main |
| CRT texture | `scanlines.mp4` | full video, 15% | Top overlay |
