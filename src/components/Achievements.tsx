import { allLinks, content } from "../content";
import { LinkButtons } from "./LinkButtons";
import { Reveal } from "./Reveal";

export function Achievements() {
  return (
    <ol className="divide-y divide-line border-y border-line">
      {content.achievements.map((a, i) => (
        <Reveal as="li" key={a.title} i={i} className="grid gap-3 py-5 sm:grid-cols-[56px_1fr_auto] sm:items-center sm:gap-6">
            <span className="font-mono text-sm text-accent" aria-hidden="true">
              [{String(i + 1).padStart(2, "0")}]
            </span>
            <div>
              <h3 className="text-lg font-semibold leading-snug">{a.title}</h3>
              <p className="mt-1 text-muted">{a.detail}</p>
            </div>
            <LinkButtons links={allLinks(a.links, a.github)} size="sm" />
        </Reveal>
      ))}
    </ol>
  );
}
