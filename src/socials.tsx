import type { ComponentType } from "react";
import { Code2, FileText, Mail } from "lucide-react";
import { FaLinkedin } from "react-icons/fa6";
import { SiCodeforces, SiGithub, SiInstagram, SiLeetcode, SiMedium } from "react-icons/si";
import { content } from "./content";

type Icon = ComponentType<{ className?: string; "aria-hidden"?: boolean | "true" | "false" }>;
type Key = keyof typeof content.links;

// Display names and icons for each key in content.links. Only keys with a value are shown.
const META: Record<Key, { label: string; icon: Icon }> = {
  email: { label: "Email", icon: Mail },
  resume: { label: "Resume", icon: FileText },
  linkedin: { label: "LinkedIn", icon: FaLinkedin },
  github: { label: "GitHub", icon: SiGithub },
  instagram: { label: "Instagram", icon: SiInstagram },
  medium: { label: "Medium", icon: SiMedium },
  codeforces: { label: "Codeforces", icon: SiCodeforces },
  leetcode: { label: "LeetCode", icon: SiLeetcode },
  atcoder: { label: "AtCoder", icon: Code2 },
};

export interface Social {
  key: Key;
  label: string;
  url: string;
  display: string;
  icon: Icon;
}

export const socials: Social[] = (Object.keys(META) as Key[])
  .filter((k) => content.links[k])
  .map((k) => {
    const v = content.links[k] as string;
    const url = k === "email" ? `mailto:${v}` : v;
    const display = k === "email" ? v : v.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
    return { key: k, label: META[k].label, icon: META[k].icon, url, display };
  });

export const social = (k: Key) => socials.find((s) => s.key === k);
