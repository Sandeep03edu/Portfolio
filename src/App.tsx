import { useCallback, useEffect, useState, type ReactNode } from "react";
import { AnimatePresence } from "framer-motion";
import { content } from "./content";
import type { SectionId } from "./types/content";
import { useTheme } from "./hooks/useTheme";
import { useReducedMotion } from "./hooks/useReducedMotion";
import { TabBar } from "./components/TabBar";
import { CommandPalette } from "./components/CommandPalette";
import { Boot } from "./components/Boot";
import { TerminalSection } from "./components/TerminalSection";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Achievements } from "./components/Achievements";
import { Competitive } from "./components/Competitive";
import { Education } from "./components/Education";
import { Writing } from "./components/Writing";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

const BODIES: Record<SectionId, () => ReactNode> = {
  whoami: () => <Hero />,
  about: () => <About />,
  experience: () => <Experience />,
  projects: () => <Projects />,
  skills: () => <Skills />,
  achievements: () => <Achievements />,
  competitive: () => <Competitive />,
  education: () => <Education />,
  writing: () => <Writing />,
  contact: () => <Contact />,
};

// A section with no data is skipped entirely.
const isEmpty = (id: SectionId) =>
  (id === "writing" && !content.articles.length) ||
  (id === "projects" && !content.projects.length) ||
  (id === "achievements" && !content.achievements.length) ||
  (id === "competitive" && !content.competitive.length) ||
  (id === "education" && !content.education.length) ||
  (id === "experience" && !content.experience.length) ||
  (id === "skills" && !content.skills.length);

function shouldBoot(reduced: boolean) {
  if (reduced || window.location.hash) return false;
  try {
    if (sessionStorage.getItem("booted")) return false;
    sessionStorage.setItem("booted", "1");
  } catch {
    /* ignore */
  }
  return true;
}

export default function App() {
  const { theme, setTheme, toggle } = useTheme();
  const reduced = useReducedMotion();
  const [booting, setBooting] = useState(() => shouldBoot(reduced));
  const [palette, setPalette] = useState(false);
  const endBoot = useCallback(() => setBooting(false), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const typing = e.target instanceof HTMLElement && /INPUT|TEXTAREA/.test(e.target.tagName);
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || (e.key === "/" && !typing)) {
        e.preventDefault();
        setPalette((p) => !p);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const sections = content.sections.filter((s) => !isEmpty(s.id));

  return (
    <>
      <a href="#about" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded focus:bg-accent focus:px-3 focus:py-2 focus:text-onaccent">
        Skip to content
      </a>
      <AnimatePresence>{booting && <Boot onDone={endBoot} />}</AnimatePresence>
      <TabBar theme={theme} onToggleTheme={toggle} onOpenPalette={() => setPalette(true)} />
      <main className="flex flex-col gap-10 pb-10 pt-20 sm:gap-14 sm:pt-24">
        {sections.map((s, i) => (
          <TerminalSection key={s.id} section={s} index={i + 1} ready={!booting} hideHeading={s.id === "whoami"}>
            {BODIES[s.id]()}
          </TerminalSection>
        ))}
      </main>
      <Footer onOpenPalette={() => setPalette(true)} />
      <CommandPalette open={palette} onClose={() => setPalette(false)} setTheme={setTheme} />
    </>
  );
}
