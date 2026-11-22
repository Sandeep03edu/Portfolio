import { content } from "../content";

export function Footer({ onOpenPalette }: { onOpenPalette: () => void }) {
  return (
    <footer className="mx-auto mt-4 flex max-w-[1360px] flex-col items-center justify-between gap-3 px-4 pb-10 font-mono text-xs text-muted sm:flex-row sm:px-6">
      <p>
        {content.site.footerNote} · {new Date().getFullYear()}
      </p>
      <button type="button" onClick={onOpenPalette} className="hover:text-accent">
        press / to run a command
      </button>
    </footer>
  );
}
