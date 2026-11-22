import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { content, prompt } from "../content";

/** Short, skippable connect line before the page. Shown once per tab session. */
export function Boot({ onDone }: { onDone: () => void }) {
  const cmd = `ssh ${prompt}`;
  const [n, setN] = useState(0);
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    if (n < cmd.length) {
      const t = setTimeout(() => setN(n + 1), 22);
      return () => clearTimeout(t);
    }
    const a = setTimeout(() => setConnected(true), 120);
    const b = setTimeout(onDone, 520);
    return () => {
      clearTimeout(a);
      clearTimeout(b);
    };
  }, [n, cmd.length, onDone]);

  useEffect(() => {
    const skip = () => onDone();
    window.addEventListener("keydown", skip);
    return () => window.removeEventListener("keydown", skip);
  }, [onDone]);

  return (
    <motion.div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-bg px-6"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onDone}
      aria-hidden="true"
    >
      <div className="w-full max-w-md font-mono text-sm">
        <p>
          <span className="text-muted">$ </span>
          {cmd.slice(0, n)}
          {!connected && <span className="caret" />}
        </p>
        {connected && (
          <p className="mt-1 text-accent">
            Connected. Welcome to {content.profile.name}'s portfolio.
          </p>
        )}
      </div>
    </motion.div>
  );
}
