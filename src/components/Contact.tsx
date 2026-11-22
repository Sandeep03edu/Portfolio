import { useState } from "react";
import { Check, Copy, Mail } from "lucide-react";
import { content } from "../content";
import { social, socials } from "../socials";
import { Reveal } from "./Reveal";

export function Contact() {
  const email = social("email");
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(content.links.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard blocked; the address is visible and selectable anyway */
    }
  };
  return (
    <div className="grid gap-10 lg:grid-cols-2">
      <Reveal>
        <p className="text-2xl font-semibold leading-snug sm:text-3xl">{content.contact.heading}</p>
        <p className="mt-3 max-w-md leading-relaxed text-muted">{content.contact.message}</p>
        {email && (
          <div className="mt-6 flex flex-wrap items-center gap-2.5">
            <a href={email.url} className="btn-primary">
              <Mail className="h-4 w-4" aria-hidden /> Send an email
            </a>
            <button type="button" onClick={copy} className="btn" aria-live="polite">
              {copied ? <Check className="h-4 w-4 text-accent" aria-hidden /> : <Copy className="h-4 w-4" aria-hidden />}
              <span className="select-all">{email.display}</span>
              <span className="sr-only">{copied ? "copied" : "copy email address"}</span>
            </button>
          </div>
        )}
      </Reveal>
      <Reveal i={1}>
        <ul className="rounded-xl border border-line bg-bg/60 p-4 font-mono text-[13px] leading-7">
          {socials.map((s) => (
            <li key={s.key} className="flex min-w-0 items-center gap-2">
              <span className="shrink-0 text-muted">reply from</span>
              <s.icon className="h-3.5 w-3.5 shrink-0 text-amber" aria-hidden />
              <a
                href={s.url}
                target={s.key === "email" ? undefined : "_blank"}
                rel="noreferrer"
                className="min-w-0 truncate text-ink hover:text-accent"
              >
                <span className="sr-only">{s.label}: </span>
                {s.display}
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  );
}
