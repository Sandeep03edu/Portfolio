import { useCallback, useEffect, useState } from "react";

export type Theme = "dark" | "light";

const current = (): Theme =>
  document.documentElement.dataset.theme === "light" ? "light" : "dark";

/** Theme follows the system until the user picks one; the pick is remembered. */
export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(current);

  const setTheme = useCallback((t: Theme) => {
    document.documentElement.dataset.theme = t;
    try {
      localStorage.setItem("theme", t);
    } catch {
      /* storage blocked: theme still applies for this visit */
    }
    setThemeState(t);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: light)");
    const onChange = () => {
      let saved: string | null = null;
      try {
        saved = localStorage.getItem("theme");
      } catch {
        /* ignore */
      }
      if (!saved) {
        const t: Theme = mq.matches ? "light" : "dark";
        document.documentElement.dataset.theme = t;
        setThemeState(t);
      }
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return { theme, setTheme, toggle: () => setTheme(theme === "dark" ? "light" : "dark") };
}
