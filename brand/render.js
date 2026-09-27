// Renders the INTERRUPT brand SVGs to PNG at all required sizes.
// Usage: node brand/render.js
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const dir = __dirname;
const outDir = path.join(dir, "exports");
fs.mkdirSync(outDir, { recursive: true });

function loadSvg(file, textures) {
  let svg = fs.readFileSync(path.join(dir, file), "utf8");
  for (const [ref, tex] of Object.entries(textures)) {
    const b64 = fs.readFileSync(path.join(dir, "textures", tex)).toString("base64");
    svg = svg.split(ref).join(`data:image/jpeg;base64,${b64}`);
  }
  return Buffer.from(svg);
}

const TEX = {
  "textures/torn-reveal.jpg": "torn-reveal.jpg",
  "textures/static.jpg": "static.jpg",
};
const DARK = loadSvg("logo-final.svg", TEX);
const LIGHT = loadSvg("logo-light.svg", TEX);
const AVATAR = loadSvg("avatar.svg", {});
const YT = loadSvg("banner-youtube.svg", TEX);
const XB = loadSvg("banner-x.svg", TEX);
const FB = loadSvg("banner-facebook.svg", TEX);
const LI = loadSvg("banner-linkedin.svg", TEX);

const jobs = [
  [DARK, "logo-dark-2000.png", 2000],
  [DARK, "logo-dark-1200.png", 1200],
  [DARK, "logo-dark-800.png", 800],
  [LIGHT, "logo-light-2000.png", 2000],
  [LIGHT, "logo-light-1200.png", 1200],
  [LIGHT, "logo-light-800.png", 800],
  [AVATAR, "avatar-800.png", 800],
  [AVATAR, "avatar-400.png", 400],
  [AVATAR, "avatar-320.png", 320],
  [AVATAR, "avatar-200.png", 200],
  [AVATAR, "avatar-150.png", 150],
  [YT, "banner-youtube-2560x1440.png", 2560],
  [XB, "banner-x-1500x500.png", 1500],
  [FB, "banner-facebook-820x312.png", 820],
  [LI, "banner-linkedin-1128x191.png", 1128],
];

(async () => {
  for (const [buf, name, width] of jobs) {
    await sharp(buf, { density: 300 }).resize({ width }).png().toFile(path.join(outDir, name));
    console.log("wrote", name);
  }
  await sharp(DARK, { density: 300 }).resize({ width: 1600 }).png().toFile(path.join(dir, "preview-dark.png"));
  await sharp(LIGHT, { density: 300 }).resize({ width: 1600 }).png().toFile(path.join(dir, "preview-light.png"));
  console.log("done");
})();
