import { ArrowUpRight } from "lucide-react";
import { content } from "../content";
import { Reveal } from "./Reveal";

export function Competitive() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {content.competitive.map((c, i) => (
        <Reveal key={c.platform} i={i}>
          <article className="flex h-full flex-col rounded-xl border border-line bg-surface2/40 p-5">
            <div className="flex items-center justify-between">
              <h3 className="font-mono text-sm text-amber">{c.platform}</h3>
              <a href={c.profileUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1 font-mono text-xs text-muted hover:text-accent">
                @{c.handle} <ArrowUpRight className="h-3 w-3" aria-hidden />
              </a>
            </div>
            <p className="mt-5 text-5xl font-bold tracking-tight">{c.rating}</p>
            <p className="mt-1 text-muted">
              max rating · <span className="text-ink">{c.rank}</span>
            </p>
            {c.bestRank && (
              <div className="mt-5 border-t border-line pt-4">
                <p className="font-mono text-xs text-muted">best rank</p>
                <p className="mt-1">
                  <span className="text-xl font-semibold text-accent">#{c.bestRank}</span>
                  {c.bestContest && (
                    <>
                      {" "}
                      <span className="text-muted">in </span>
                      {c.bestContestUrl ? (
                        <a href={c.bestContestUrl} target="_blank" rel="noreferrer" className="link">
                          {c.bestContest}
                        </a>
                      ) : (
                        c.bestContest
                      )}
                    </>
                  )}
                </p>
              </div>
            )}
          </article>
        </Reveal>
      ))}
    </div>
  );
}
