# INTERRUPT — Motion Spec: Intro & Outro (CapCut)

Frame-by-frame build sheets for the intro and outro, plus the reusable chyron and
tear transition. Build these ONCE, save as a CapCut template, reuse on every post.

**Frame rate:** 30 fps (all frame numbers below assume 30 fps).

---

## 0. The one rule that governs everything

**The intro must not delay the hook — the intro IS the hook.**

Research: **60–80% of viewers drop in the first 3 seconds.** Most creators kill
retention with a 2–3s logo animation before the content starts. Yours is the
opposite: a **0.6-second broadcast interrupt** that is itself the scroll-stop, then
it snaps straight into the visual. Never let it run longer than ~0.8s.

---

## 1. Asset checklist (build these first)

**Ready-made still frames are in `brand/exports/` — drop them straight into CapCut:**

| Asset | File | Use |
|---|---|---|
| Signal-hit bars frame | `frame-bars-1080x1920.png` | The 0.07–0.13s bars flash |
| Intro test card | `frame-testcard-1080x1920.png` | 0.30–0.53s "PLEASE STAND BY" card |
| Outro end card | `frame-endcard-1080x1920.png` | Final 1.2s logo + CTA |
| REC overlay (transparent) | `overlay-rec-1080x1920.png` | Drop on any video, top-left |
| Static / snow | `brand/textures/static.jpg` | Transition bursts |
| Tear texture | `brand/textures/torn-reveal.jpg` | Tear transitions |
| Sound: signal hit | CapCut SFX: "Glitch", "Camera Flash", "TV Static", "Retro TV" | Audio |
| Sound: sign-off tone | CapCut SFX: "Sub drop", "Deep whoosh", "VHS" | Audio |

**Tip:** CapCut's built-in **Effects → Retro/Glitch** and **Audio → Sound Effects**
contain almost everything here. You rarely need to source audio externally.

---

## 2. THE INTRO — "Signal Hit" (0.6s / 18 frames)

The purpose: a real pattern interrupt in the first half-second, that also *shows*
your category number so it's information, not decoration.

| Time | Frames | Visual | Sound | CapCut how-to |
|---|---|---|---|---|
| 0.00–0.07s | 0–2 | Full-frame **black** | silence | Insert a 2-frame black clip |
| 0.07–0.13s | 2–4 | **Color bars** flash, full-frame, harsh | **signal hit** (peak) | Bars PNG + **Effects → Glitch → Flash** + a 1-frame scale punch |
| 0.13–0.30s | 4–9 | **Static burst**, opacity flickering 60→100→70% | static crackle | Static overlay + **keyframe opacity** + **Effects → Retro → Scanline** |
| 0.27s | 8 | **1-frame subliminal flash** of the impossible visual (40% opacity) | — | Overlay the hero visual, 1 frame, opacity 40% |
| 0.30–0.53s | 9–16 | **Test card** + `PLEASE STAND BY` + big category number, slow zoom 100→104% | low electrical hum | Test-card PNG + Text (IBM Plex Mono) + **keyframe scale** |
| 0.53–0.60s | 16–18 | **Tear wipe** out into the content | whoosh | **Transitions → Glitch/Wipe** (see §5) |

**Why the subliminal flash (frame 8):** it plants the visual in the viewer's brain
0.3s before they consciously see it — a genuine pattern-interrupt trick.

**Mute test:** turn the sound off. The bars → static → test card sequence is a pure
visual interrupt. It must work silent (85% watch on mute).

---

## 3. THE OUTRO — "Sign-Off" (1.2s / 36 frames)

Purpose: brand recall + a single CTA. Feels like a station signing off.

| Time | Frames | Visual | Sound | CapCut how-to |
|---|---|---|---|---|
| 0.00–0.07s | 0–2 | **Tear wipe** in from the content | whoosh | **Transitions → Glitch/Wipe** |
| 0.07–0.20s | 2–6 | **Black** frame | — | black clip |
| 0.20–0.33s | 6–10 | **Color bars** animate in left→right | bar tone | Bars PNG + **keyframe a mask/wipe** |
| 0.33–0.80s | 10–24 | **Logo** scales in (95→100%) + `WE INTERRUPT THIS FEED` fades up | sign-off tone | Logo PNG + Text + **keyframe scale/opacity** |
| 0.80–1.20s | 24–36 | **CTA** text only: `FREE 12 INTERRUPTS → LINK IN BIO` | — | Text (Archivo Black, bone, one signal-red word) |

**The CTA must be one line and one action.** No "follow + like + comment + link" —
pick one. Change the CTA per post type (free guide / $27 / DFY), never the format.

---

## 4. The reusable CHYRON (category lower-third)

Appears at ~2–4s in every demo/teach post.

| Element | Spec |
|---|---|
| Bar | Full-width bar, height ~140px, at 72% screen height |
| Fill | CRT black `#0B0B0C` at 92% opacity |
| Left cap | A 6-color bar strip, 90px wide, full bar height |
| Text | `CATEGORY 0X — NAME` in IBM Plex Mono, bone, ~46px, letter-spacing 2 |
| Motion | Slides in from the left in 4 frames, holds 2s, slides out |
| Accent | The category number in signal red `#FF3B00` |

CapCut: build as a **text + sticker group**, save to "My Templates."

---

## 5. The TEAR transition (the signature cut)

Used at every scene change. It's what makes the channel feel like one broadcast.

| Step | Detail |
|---|---|
| 1 | Add a **tear strip** PNG (full width, ~400px tall) as an overlay |
| 2 | Keyframe it sliding vertically across the frame in **3–4 frames** |
| 3 | Add **Effects → Glitch → RGB Split** on the outgoing clip for those frames |
| 4 | Add a **static burst** (2 frames) under the tear |
| 5 | Optional: a 2-frame horizontal offset (misregistration) on the incoming clip |

CapCut alternative: **Transitions → Glitch** category, then overlay the tear strip
for brand consistency.

---

## 6. Audio design (the sonic logo)

| Moment | Sound | Notes |
|---|---|---|
| Intro hit | Sharp static burst / CRT power-on | The "interrupt" cue — same every post |
| Intro bed | Low electrical hum (test card) | −22 LUFS, subtle |
| Tear transition | Short whoosh | Same whoosh every time |
| Outro | Low sign-off tone / sub drop | Same tone every time |

**Do NOT use trending audio.** It makes the channel trend-dependent and drowns the
visual interrupt. Use a consistent, original sound design instead — that becomes
your audio brand.

---

## 7. Build once, reuse forever

1. Build the **intro** on a 9:16 canvas → export `INTRO.mp4` (0.6s).
2. Build the **outro** on a 9:16 canvas → export `OUTRO.mp4` (1.2s).
3. Build the **chyron** and **tear** as CapCut templates.
4. For every post: drop `INTRO.mp4` at the head, your visual in the middle,
   `OUTRO.mp4` at the tail. Reuse the same chyron + tear.

**This is the anchor.** Same intro, same outro, same chyron, same tear, same sound —
every single post. That repetition is what makes a faceless AI channel read as a brand.

---

## 7.5 AI video prompts for the intro/outro motion

Generate these short clips with **Veo / Kling / Runway**, then use them as overlays and
transitions in CapCut. **AI video makes the motion; the still frames make the text.**

**Prompt 1 — Static burst (0.5s loop)**
```
Dense analog television static filling the frame, black and white snow, heavy film
grain, rapid flickering, occasional horizontal glitch lines, no objects, no text,
seamless loop, 9:16 vertical.
```
**Negative:** `color, objects, text, smooth motion, watermark`

**Prompt 2 — CRT scanline flicker (loop, overlay)**
```
A subtle CRT television screen flicker: horizontal scanlines drifting slowly
downward, faint phosphor glow pulsing, slight vignette, dark charcoal tone, no
content, seamless loop, 9:16 vertical.
```
**Negative:** `text, objects, bright colors, fast motion, watermark`

**Prompt 3 — Torn reveal / signal tear (the signature transition)**
```
A horizontal tear rips open across a dark charcoal surface, revealing static and
broadcast color bars behind it, the torn paper edges peeling and trembling, dust
particles, dramatic lighting, slow motion, locked camera, 9:16 vertical.
```
**Negative:** `text, clean straight edges, neon, camera drift, watermark`

**Prompt 4 — Color-bar glitch flash (0.3s)**
```
Broadcast SMPTE color bars flash on screen and immediately glitch with RGB split
and horizontal tearing, then cut to black, harsh, fast, 9:16 vertical.
```
**Negative:** `text, slow motion, soft, watermark`

**Prompt 5 — CRT switch-on (intro alternative)**
```
A vintage CRT television switching on: a bright horizontal white line expands into
a glowing screen filled with static, then settles, warm phosphor glow, film grain,
locked camera, 9:16 vertical.
```
**Negative:** `text, objects, color, watermark`

**How to use them:**
- **Intro:** `frame-bars` still (2 frames) → Prompt 1 static clip (4 frames) → `frame-testcard` still (with a Prompt 2 scanline clip overlaid) → Prompt 3 tear → content.
- **Transitions:** use Prompt 1 or Prompt 3 between shots.
- **Overlay:** loop Prompt 2 at ~15% opacity over the whole video for CRT texture.
- Keep every clip **short** (0.3–0.5s) — these are flashes, not sequences.

**Shortcut — one "broadcast glitch pack" clip:** if you'd rather generate once, use
this single prompt to get a 5–8s glitch sequence, then **cut it up** in CapCut for
the bars/static/scanline/tear pieces:

```
A vintage television signal being interrupted: broadcast SMPTE color bars flash on
screen, then the screen erupts into dense analog static with flickering scanlines,
the image tears open horizontally revealing static and color bars behind it, glitch
artifacts, RGB split, warm phosphor glow, heavy film grain, harsh analog broadcast
aesthetic, dark charcoal tones, locked camera, no text, no logos, 9:16 vertical.
```
**Negative:** `text, logos, watermark, neon purple, glossy 3D, camera drift`

**Trade-off:** the pack is faster to generate but you lose exact timing and can't
reuse elements as cleanly — you'll still slice it into separate pieces. Best of both:
generate the pack, then trim the tear out and save it separately for transitions.

---

## 8. QA checklist (run before exporting every post)

- [ ] Intro ≤ 0.8s
- [ ] The impossible visual appears within the first 0.6s
- [ ] Intro works with sound OFF
- [ ] Chyron reads `CATEGORY 0X — NAME` and is legible on mute
- [ ] Tear transition used at every cut
- [ ] Outro has ONE CTA, one line
- [ ] Same sounds as every previous post
- [ ] Export 9:16, 1080×1920, H.264, ≥8 Mbps
