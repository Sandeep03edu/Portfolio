import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { allLinks, content, img } from "../content";
import type { Experience as Exp } from "../types/content";
import { Chips, LinkButtons } from "./LinkButtons";
import { Reveal } from "./Reveal";

function Entry({ e, last }: { e: Exp; last: boolean }) {
  const links = allLinks(e.links, e.github);
  const current = e.end.toLowerCase() === "present";
  return (
    <div className="relative grid grid-cols-[28px_1fr] gap-4 sm:grid-cols-[150px_28px_1fr] sm:gap-5">
      <p className="hidden pt-1 text-right font-mono text-xs leading-5 text-muted sm:block">
        {e.start}
        <br />
        <span className={current ? "text-accent" : ""}>{e.end}</span>
      </p>
      {/* graph rail */}
      <div className="relative flex justify-center" aria-hidden="true">
        {!last && <span className="absolute top-7 bottom-[-12px] w-px bg-line" />}
        <span
          className={`relative mt-1.5 h-3.5 w-3.5 rounded-full border-2 ${current ? "border-accent bg-accent/30" : "border-muted bg-surface"}`}
        />
      </div>
      <article className="min-w-0 pb-10">
        <div className="flex items-start gap-3">
          {e.logo && (
            <img src={img(e.logo)} alt="" width={40} height={40} loading="lazy" className="h-10 w-10 shrink-0 rounded-lg border border-line bg-white object-contain p-1" />
          )}
          <div className="min-w-0">
            <h3 className="text-lg font-semibold leading-snug sm:text-xl">{e.role}</h3>
            <p className="text-muted">
              {e.companyUrl ? (
                <a href={e.companyUrl} target="_blank" rel="noreferrer" className="link">
                  {e.company}
                </a>
              ) : (
                e.company
              )}
              <span className="font-mono text-xs sm:hidden">
                {" "}
                · {e.start} - {e.end}
              </span>
            </p>
          </div>
        </div>
        <ul className="prose-width mt-4 space-y-2">
          {e.points.map((p) => (
            <li key={p} className="flex gap-3 leading-relaxed text-muted">
              <span className="mt-[0.6em] h-1 w-2.5 shrink-0 bg-accent/70" aria-hidden="true" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 space-y-2">
          <Chips items={e.tools} label="tools" />
          <Chips items={e.languages} label="lang" />
        </div>
        {links.length > 0 && (
          <div className="mt-4">
            <LinkButtons links={links} size="sm" />
          </div>
        )}
      </article>
    </div>
  );
}

export function Experience() {
  const { experience, experienceVisible = 3 } = content;
  const [all, setAll] = useState(false);
  const list = all ? experience : experience.slice(0, experienceVisible);
  const hidden = experience.length - experienceVisible;
  return (
    <>
      <ol>
        {list.map((e, i) => (
          <Reveal as="li" key={e.id} i={i}>
            <Entry e={e} last={i === list.length - 1} />
          </Reveal>
        ))}
      </ol>
      {hidden > 0 && (
        <button type="button" onClick={() => setAll(!all)} className="btn sm:ml-[198px]" aria-expanded={all}>
          <ChevronDown className={`h-4 w-4 transition-transform ${all ? "rotate-180" : ""}`} aria-hidden />
          {all ? "git log --career --short" : `git log --career --all  (${hidden} more)`}
        </button>
      )}
    </>
  );
}
