import { createContext, useContext, type ReactNode } from "react";
import { motion } from "framer-motion";

export const RevealContext = createContext(true);

interface Props {
  children: ReactNode;
  i?: number;
  className?: string;
  /** Render as a list item so lists stay valid HTML. */
  as?: "div" | "li";
}

/** Fades its children in after the section's command has "run". */
export function Reveal({ children, i = 0, className, as = "div" }: Props) {
  const shown = useContext(RevealContext);
  const C = as === "li" ? motion.li : motion.div;
  return (
    <C
      className={className}
      initial={false}
      animate={shown ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
      transition={{ duration: 0.4, delay: shown ? Math.min(i, 12) * 0.05 : 0, ease: "easeOut" }}
    >
      {children}
    </C>
  );
}
