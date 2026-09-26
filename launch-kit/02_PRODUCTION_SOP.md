# INTERRUPT — Production SOP (Standard Operating Procedure)

One repeatable workflow so every post looks and sounds like the same brand.
Target: **~45 minutes per post** once practiced.

---

## 0. The stack

| Job | Tool | Notes |
|---|---|---|
| Video generation | **Veo 3.1** + **Kling 3.0** | Generate the same prompt on both, keep the better take |
| Character consistency | **Runway Gen-4** | Only if using a recurring AI host character |
| Voiceover | **ElevenLabs** | One voice, locked settings — never change |
| Assembly / captions | **CapCut** or **Descript** | Animated word-by-word captions, 9:16 |
| Screenshots | Native analytics (TikTok/IG/YT) | REAL only — never fake proof |
| Storage | Google Drive folder `INTERRUPT/POSTS/[NN]` | One folder per post |

**Do NOT lock the product to one model.** Your prompts are model-agnostic on
purpose — this is what protects you from a single tool shutting down (the Sora lesson).

---

## 1. Per-post workflow

1. **Pick the post** from `01_FIRST_10_POST_SCRIPTS.md` (or the 30-post calendar).
2. **Copy the AI prompt.** Append the category negative prompt.
3. **Generate 2–3 takes** on Veo and/or Kling.
4. **Review takes against the QA checklist (§4).** Reject camera drift immediately.
5. **Pick the cleanest take.** Note which take and why (this becomes a process post later).
6. **Assemble in CapCut:**
   - Intro sting (0.5s) — same every time
   - Category chip (top-left, 2–4s)
   - Animated word-by-word captions (bottom-third, white, one orange keyword/line)
   - Voiceover track (the INTERRUPT voice)
   - Sound design: intro whoosh, ambient bed, "interrupt" cue on the pattern break
   - Outro frame — same every time
7. **Export:** 9:16, 1080×1920, H.264, ≥8 Mbps.
8. **QA pass** (§4) before posting.
9. **Post** with the caption + comment seed.
10. **Log it** in `03_PROOF_CAPTURE_TRACKER.md`.

---

## 2. Generation settings (starting points)

- **Aspect ratio:** 9:16 vertical, always.
- **Duration:** generate 5–8s clips; assemble to a 20–35s final.
- **Camera:** ALWAYS specify "locked camera, no zoom, pan, tilt, or rotation" —
  camera drift is the #1 failure mode across every category. The model "moves" the
  camera to fake the effect.
- **Lighting:** specify "lit consistently with the scene" — the illusion breaks if
  the effect element is lit differently from the room.
- **Motion:** state the interrupt as a **verb + direction**, never a vibe.
  Write "the water flows upward into the glass," never "surreal water."

---

## 3. Master negative-prompt checklist

Append the relevant lines to every prompt. The full master list:

```
frozen limbs, rigid pose, standing, walking normally, floating upright,
normal physics, ground contact, strings, wires, visible hands, visible support,
jumping instead of floating, extra limbs, distorted anatomy, wrong number of fingers,
blurry subject, jump cuts, broken motion, hard cuts, camera shake, camera drift,
text, watermark, logo, play button
```

**Per-category additions:**
- **Gravity:** `strings, wires, visible hand, visible support, falling, resting on a surface`
- **Scale:** `normal size, distorted anatomy, extra limbs`
- **Impossible Objects:** `walls, door frame in wall, mismatched lighting`
- **Glitch:** `distortion of face beyond glitch, camera drift`
- **Body:** `extra fingers, wrong limb count, distorted proportions`
- **Time:** `normal speed, no freeze, camera drift`

---

## 4. QA checklist (run before every post)

- [ ] Camera is locked — no drift, no shake, no zoom
- [ ] Lighting is consistent between the effect and the scene
- [ ] No text/watermark/logo artifacts from the model
- [ ] The pattern interrupt is readable **in the first frame** (no build-up)
- [ ] Captions are animated, word-by-word, one orange keyword per line
- [ ] Intro sting + outro frame present
- [ ] Voice is the INTERRUPT voice, same settings
- [ ] Sound cue lands on the pattern break
- [ ] Duration 20–35s
- [ ] At least one visible proof of human judgment (prompt reveal, failed take, choice)
- [ ] Export is 9:16, 1080×1920
- [ ] AI disclosure applied if the content reads as photorealistic

---

## 5. AI disclosure policy (compliance)

- **Labels are NOT a ranking penalty** on TikTok, YouTube, or Meta — but
  **undisclosed photorealistic AI gets removed** (TikTok pulled 51,618 such videos
  in H2 2025).
- **Overtly surreal content** (obvious impossible physics, stylized) is generally
  label-exempt. **Photorealistic content that could be mistaken for real must be
  labeled.**
- When in doubt, disclose. Getting caught undisclosed costs far more than the label.
- Never generate: dead-celebrity deepfakes, sensitive-topic content, or anything
  designed to deceive about real events.

---

## 6. Weekly rhythm

| Day | Task |
|---|---|
| Mon | Generate 5 posts' visuals (batch generation) |
| Tue | Assemble + QA 5 posts |
| Wed–Sun | Post 1/day (5/week) |
| Daily | Reply to every comment in first person |
| Sun | Update tracker, pick next week's 5 from calendar |

**Batching is the key to consistency.** Generate and assemble in batches, post daily.
