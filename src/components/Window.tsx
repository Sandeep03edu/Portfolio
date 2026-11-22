import type { ReactNode } from "react";

interface Props {
  title: string;
  index?: number;
  children: ReactNode;
  className?: string;
}

/** OS-style window frame: traffic-light dots and a file-path title. */
export function Window({ title, index, children, className = "" }: Props) {
  return (
    <div className={`window overflow-hidden ${className}`}>
      <div className="flex items-center gap-3 border-b border-line bg-surface2/60 px-4 py-2.5">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        </div>
        <p className="min-w-0 flex-1 truncate text-center font-mono text-xs text-muted">{title}</p>
        {index !== undefined && (
          <span className="font-mono text-xs text-muted" aria-hidden="true">
            {String(index).padStart(2, "0")}
          </span>
        )}
      </div>
      {children}
    </div>
  );
}
