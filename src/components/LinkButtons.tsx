import type { ComponentType } from "react";
import { Award, ExternalLink, Globe, Image, Monitor, PlayCircle, Smartphone } from "lucide-react";
import { SiGithub, SiGoogleplay, SiMedium, SiYoutube } from "react-icons/si";
import type { Link } from "../types/content";

type Icon = ComponentType<{ className?: string; "aria-hidden"?: boolean | "true" | "false" }>;

/** Picks an icon from the link label or URL. */
export function iconFor(link: Link): Icon {
  const l = link.label.toLowerCase();
  const u = link.url.toLowerCase();
  if (u.includes("github.com") && !l.includes("desktop")) return SiGithub;
  if (l.includes("play store") || u.includes("play.google.com")) return SiGoogleplay;
  if (l.includes("medium") || u.includes("medium.com")) return SiMedium;
  if (u.includes("youtube.com") || u.includes("youtu.be")) return SiYoutube;
  if (l.includes("certificate")) return Award;
  if (l.includes("desktop")) return Monitor;
  if (l.includes("mobile")) return Smartphone;
  if (l.includes("screenshot")) return Image;
  if (l.includes("demo") || l.includes("video")) return PlayCircle;
  if (l.includes("web") || l.includes("website")) return Globe;
  return ExternalLink;
}

export function LinkButtons({ links, size = "md" }: { links: Link[]; size?: "sm" | "md" }) {
  if (!links.length) return null;
  return (
    <ul className="flex flex-wrap gap-2">
      {links.map((link) => {
        const Icon = iconFor(link);
        return (
          <li key={link.url + link.label}>
            <a
              href={link.url}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className={`btn ${size === "sm" ? "px-2.5 py-1.5 text-xs" : ""}`}
            >
              <Icon className="h-3.5 w-3.5" aria-hidden />
              {link.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export function Chips({ items, label }: { items?: string[]; label?: string }) {
  if (!items?.length) return null;
  return (
    <div className="flex flex-wrap items-center gap-1.5">
      {label && <span className="mr-1 font-mono text-xs text-muted">{label}</span>}
      {items.map((t) => (
        <span key={t} className="chip">
          {t}
        </span>
      ))}
    </div>
  );
}
