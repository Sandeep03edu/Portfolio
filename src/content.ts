import raw from "../content/portfolio.json";
import type { Link, Portfolio } from "./types/content";

export const content = raw as unknown as Portfolio;

/** URL of a file in public/images, respecting the GitHub Pages base path. */
export const img = (file?: string) => (file ? `${import.meta.env.BASE_URL}images/${file}` : "");

/** Links plus an optional "github" field, with empty values dropped. */
export function allLinks(links: Link[] = [], github?: string): Link[] {
  const out = links.filter((l) => l.url);
  if (github && !out.some((l) => l.url === github)) out.push({ label: "GitHub", url: github });
  return out;
}

export const prompt = `${content.site.terminalUser}@${content.site.terminalHost}`;
