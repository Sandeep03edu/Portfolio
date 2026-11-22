import { content } from "../content";
import { Reveal } from "./Reveal";

export function Skills() {
  const groups = content.skills;
  return (
    <div className="font-mono text-sm">
      <p className="text-muted">skills/</p>
      <ul className="mt-1">
        {groups.map((g, i) => {
          const last = i === groups.length - 1;
          return (
            <Reveal as="li" key={g.group} i={i} className="grid grid-cols-[24px_1fr] sm:grid-cols-[32px_1fr]">
                <div className="relative" aria-hidden="true">
                  <span className={`absolute left-[7px] top-0 w-px bg-line ${last ? "h-[18px]" : "h-full"}`} />
                  <span className="absolute left-[7px] top-[18px] h-px w-3 bg-line sm:w-5" />
                </div>
                <div className="pb-6">
                  <h3 className="py-2 font-semibold text-amber">
                    {g.group} <span className="font-normal text-muted">({g.items.length})</span>
                  </h3>
                  <ul className="flex flex-wrap gap-2">
                    {g.items.map((s) => (
                      <li key={s} className="rounded-md border border-line bg-surface2/60 px-2.5 py-1 font-sans text-[14px] text-ink">
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
            </Reveal>
          );
        })}
      </ul>
    </div>
  );
}
