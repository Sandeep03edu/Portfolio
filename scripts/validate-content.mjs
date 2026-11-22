// Checks content/portfolio.json before every dev/build run.
// 1. Matches the JSON schema (typos, missing fields, bad URLs).
// 2. Every referenced image exists in public/images.
// 3. No emoji characters anywhere in the content.
import { readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import Ajv from "ajv";
import addFormats from "ajv-formats";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const read = (p) => JSON.parse(readFileSync(join(root, p), "utf8"));

let content;
try {
  content = read("content/portfolio.json");
} catch (err) {
  console.error(`\ncontent/portfolio.json is not valid JSON:\n  ${err.message}\n`);
  process.exit(1);
}

const ajv = new Ajv({ allErrors: true, strict: false });
addFormats(ajv);
const validate = ajv.compile(read("content/portfolio.schema.json"));
const problems = [];

if (!validate(content)) {
  for (const e of validate.errors) {
    problems.push(`${e.instancePath || "(root)"} ${e.message}${e.params?.additionalProperty ? `: "${e.params.additionalProperty}"` : ""}`);
  }
}

// Image files must exist.
const images = [];
const walk = (node, path) => {
  if (Array.isArray(node)) return node.forEach((v, i) => walk(v, `${path}/${i}`));
  if (node && typeof node === "object") {
    for (const [k, v] of Object.entries(node)) {
      if (["image", "logo", "photo", "avatar", "ogImage"].includes(k) && typeof v === "string" && v) images.push([`${path}/${k}`, v]);
      walk(v, `${path}/${k}`);
    }
  }
};
walk(content, "");
for (const [path, file] of images) {
  if (!existsSync(join(root, "public/images", file))) problems.push(`${path} points to public/images/${file}, which does not exist`);
}

// No emojis.
const emoji = /\p{Extended_Pictographic}/u;
const raw = readFileSync(join(root, "content/portfolio.json"), "utf8");
raw.split("\n").forEach((line, i) => {
  if (emoji.test(line)) problems.push(`line ${i + 1} contains an emoji: ${line.trim()}`);
});

if (problems.length) {
  console.error(`\ncontent/portfolio.json has ${problems.length} problem(s):\n`);
  problems.forEach((p) => console.error(`  - ${p}`));
  console.error("");
  process.exit(1);
}
console.log("content/portfolio.json looks good.");
