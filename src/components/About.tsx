import { content } from "../content";
import { Reveal } from "./Reveal";

export function About() {
  const { paragraphs, labels = [], facts } = content.about;
  const [lead, ...rest] = paragraphs;
  return (
    <div className="space-y-8">
      {lead && (
        <Reveal>
          <p className="prose-width text-lg leading-relaxed text-ink sm:text-xl">{lead}</p>
        </Reveal>
      )}

      {facts.length > 0 && (
        <Reveal i={1}>
          <dl className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {facts.map((f) => (
              <div key={f.label} className="rounded-xl border border-line bg-surface2/40 p-4">
                <dt className="font-mono text-xs text-amber">{f.label}</dt>
                <dd className="mt-1.5 text-[15px] leading-snug text-ink">{f.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      )}

      {rest.length > 0 && (
        <div className="grid gap-5 md:grid-cols-2">
          {rest.map((p, i) => (
            <Reveal key={i} i={i + 2} className="h-full">
              <article className="h-full rounded-xl border border-line bg-surface2/40 p-5 sm:p-6">
                {labels[i] && <p className="mb-2.5 font-mono text-xs text-accent">// {labels[i]}</p>}
                <p className="leading-relaxed text-muted">{p}</p>
              </article>
            </Reveal>
          ))}
        </div>
      )}
    </div>
  );
}
