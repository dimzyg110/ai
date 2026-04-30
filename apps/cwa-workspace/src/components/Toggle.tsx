import { useState, type ReactNode } from 'react';

export function Toggle({
  title,
  defaultOpen = false,
  children,
  meta,
}: {
  title: string;
  defaultOpen?: boolean;
  children: ReactNode;
  meta?: string;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="not-prose my-3 border border-cwa-border rounded-lg overflow-hidden bg-white">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-3 px-4 py-3 text-left hover:bg-cwa-surface transition-colors"
      >
        <div className="flex items-center gap-2">
          <span
            className={`text-cwa-muted text-[12px] transition-transform ${
              open ? 'rotate-90' : ''
            }`}
          >
            ▶
          </span>
          <span className="font-semibold text-cwa-ink text-[14.5px]">
            {title}
          </span>
        </div>
        {meta && <span className="text-[12px] text-cwa-muted">{meta}</span>}
      </button>
      {open && (
        <div className="px-5 py-4 border-t border-cwa-border-soft prose-cwa">
          {children}
        </div>
      )}
    </div>
  );
}
