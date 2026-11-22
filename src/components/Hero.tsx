import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FileText, Mail } from "lucide-react";
import { content, img } from "../content";
import { social, socials } from "../socials";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { Reveal } from "./Reveal";

function RotatingRole({ roles }: { roles: string[] }) {
  const reduced = useReducedMotion();
  const [i, setI] = useState(0);
  useEffect(() => {
    if (reduced || roles.length < 2) return;
    const t = setInterval(() => setI((n) => (n + 1) % roles.length), 2400);
    return () => clearInterval(t);
  }, [reduced, roles.length]);
  return (
    <span className="relative inline-flex h-[1.5em] min-w-0 overflow-hidden align-bottom">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={roles[i]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="whitespace-nowrap text-accent"
        >
          {roles[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export function Hero() {
  const { profile } = content;
  const resume = social("resume");
  const email = social("email");
  const icons = socials.filter((s) => s.key !== "email" && s.key !== "resume");

  return (
    <div className="grid items-center gap-8 md:grid-cols-[1fr_auto] md:gap-12">
      <div className="min-w-0">
        <Reveal i={0}>
          <p className="font-mono text-sm text-muted">
            <span className="text-amber">#</span> {profile.handle}
          </p>
          <h1 className="mt-2 text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
        </Reveal>
        <Reveal i={1}>
          <p className="mt-4 text-lg text-ink sm:text-xl">
            {profile.title} <span className="text-muted">at</span> {profile.company}
          </p>
          <p className="mt-2 font-mono text-sm text-muted sm:text-base">
            <span aria-hidden="true">&gt; </span>
            <span className="sr-only">Roles: {profile.roles.join(", ")}</span>
            <span aria-hidden="true">
              <RotatingRole roles={profile.roles} />
            </span>
          </p>
        </Reveal>
        <Reveal i={2}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{profile.intro}</p>
        </Reveal>
        <Reveal i={3}>
          <div className="mt-7 flex flex-wrap gap-2.5">
            {resume && (
              <a href={resume.url} target="_blank" rel="noreferrer" className="btn-primary">
                <FileText className="h-4 w-4" aria-hidden /> Resume
              </a>
            )}
            {email && (
              <a href={email.url} className="btn">
                <Mail className="h-4 w-4" aria-hidden /> {email.display}
              </a>
            )}
          </div>
          <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Profiles">
            {icons.map((s) => (
              <li key={s.key}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  title={s.label}
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-lg border border-line text-muted transition-colors hover:border-accent hover:text-accent"
                >
                  <s.icon className="h-[18px] w-[18px]" aria-hidden />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      {profile.photo && (
        <Reveal i={2} className="mx-auto w-full max-w-[280px] md:w-[340px] md:max-w-none">
          <figure className="overflow-hidden rounded-xl border border-line bg-surface2">
            <img
              src={img(profile.photo)}
              alt={profile.name}
              width={600}
              height={600}
              className="aspect-[4/5] w-full object-cover object-[50%_22%]"
            />
            <figcaption className="flex items-center justify-between border-t border-line px-3 py-2 font-mono text-[11px] text-muted">
              <span>{profile.photo}</span>
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                {profile.company}
              </span>
            </figcaption>
          </figure>
        </Reveal>
      )}
    </div>
  );
}
