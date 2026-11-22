import { useEffect, useState } from "react";
import { prompt } from "../content";

interface Props {
  command: string;
  /** Start typing when true. */
  run: boolean;
  /** Skip the animation and show the full command. */
  instant: boolean;
  onDone: () => void;
}

/** A shell prompt that types out its command once, then reports completion. */
export function Prompt({ command, run, instant, onDone }: Props) {
  const [count, setCount] = useState(instant ? command.length : 0);
  const done = count >= command.length;

  useEffect(() => {
    if (instant) {
      setCount(command.length);
      onDone();
      return;
    }
    if (!run) return;
    if (done) {
      const t = setTimeout(onDone, 160);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setCount((c) => c + 1), 32);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [run, instant, count]);

  return (
    <p className="font-mono text-[13px] leading-6 sm:text-sm">
      <span className="sr-only">{`${prompt} $ ${command}`}</span>
      <span aria-hidden="true">
        <span className="text-accent">{prompt}</span>
        <span className="text-muted">:~$ </span>
        <span className="text-ink">{command.slice(0, count)}</span>
        {(!done || !run) && <span className="caret" />}
      </span>
    </p>
  );
}
