import { useCallback, useState, type ReactNode } from "react";
import type { Section } from "../types/content";
import { useInView } from "../hooks/useInView";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { markTyped, wasTyped } from "../hooks/session";
import { Prompt } from "./Prompt";
import { RevealContext } from "./Reveal";
import { Window } from "./Window";

interface Props {
  section: Section;
  index: number;
  children: ReactNode;
  /** Extra gate, e.g. wait for the boot intro before typing. */
  ready?: boolean;
  /** Hide the visible heading (the hero has its own). */
  hideHeading?: boolean;
}

/** One page section: a window whose prompt types a command, then shows the output. */
export function TerminalSection({ section, index, children, ready = true, hideHeading }: Props) {
  const reduced = useReducedMotion();
  const [instant] = useState(() => reduced || wasTyped(section.id));
  const [shown, setShown] = useState(instant);
  const { ref, inView } = useInView<HTMLElement>();

  const done = useCallback(() => {
    setShown(true);
    markTyped(section.id);
  }, [section.id]);

  return (
    <section
      id={section.id}
      ref={ref}
      aria-labelledby={`${section.id}-heading`}
      className="mx-auto w-full max-w-[1360px] px-4 sm:px-6"
    >
      <Window title={section.window} index={index}>
        <div className="p-4 sm:p-6 md:p-8">
          <Prompt command={section.command} run={inView && ready} instant={instant} onDone={done} />
          <RevealContext.Provider value={shown}>
            <h2
              id={`${section.id}-heading`}
              className={
                hideHeading
                  ? "sr-only"
                  : `mt-5 text-3xl font-semibold tracking-tight transition-opacity duration-500 sm:text-4xl ${shown ? "opacity-100" : "opacity-0"}`
              }
            >
              {section.heading}
            </h2>
            <div className="mt-6">{children}</div>
          </RevealContext.Provider>
        </div>
      </Window>
    </section>
  );
}
