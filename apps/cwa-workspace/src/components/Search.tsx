import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PAGES } from '../lib/pages';

export function Search() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState('');
  const nav = useNavigate();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const matches = q
    ? PAGES.filter(
        (p) =>
          p.title.toLowerCase().includes(q.toLowerCase()) ||
          p.description.toLowerCase().includes(q.toLowerCase()) ||
          p.group.toLowerCase().includes(q.toLowerCase()),
      )
    : PAGES;

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="hidden md:flex items-center gap-2 px-3 py-1.5 text-[12.5px] text-cwa-muted bg-white border border-cwa-border rounded-md hover:bg-cwa-surface"
        title="Search (⌘K)"
      >
        <span>⌕</span>
        <span>Search</span>
        <span className="ml-2 text-[11px] border border-cwa-border rounded px-1 py-0.5 font-mono">
          ⌘K
        </span>
      </button>
    );
  }

  return (
    <div
      className="fixed inset-0 z-50 bg-cwa-ink/30 flex items-start justify-center pt-[12vh] px-4"
      onClick={() => setOpen(false)}
    >
      <div
        className="w-full max-w-xl bg-white rounded-lg shadow-card-hover border border-cwa-border overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-4 py-3 border-b border-cwa-border flex items-center gap-2">
          <span className="text-cwa-muted">⌕</span>
          <input
            autoFocus
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search pages…"
            className="flex-1 outline-none text-[14px] bg-transparent placeholder:text-cwa-muted"
          />
          <button
            onClick={() => setOpen(false)}
            className="text-[11px] text-cwa-muted border border-cwa-border rounded px-1.5 py-0.5 font-mono"
          >
            esc
          </button>
        </div>
        <ul className="max-h-[60vh] overflow-y-auto">
          {matches.map((p) => (
            <li key={p.slug}>
              <button
                onClick={() => {
                  nav(p.slug ? `/${p.slug}` : '/');
                  setOpen(false);
                  setQ('');
                }}
                className="w-full text-left px-4 py-3 hover:bg-cwa-surface border-b border-cwa-border-soft last:border-0"
              >
                <div className="flex items-center gap-2">
                  <span className="text-cwa-green text-[13px] w-4 inline-flex justify-center">
                    {p.icon}
                  </span>
                  <span className="text-[14px] font-medium text-cwa-ink">
                    {p.title}
                  </span>
                  <span className="ml-auto text-[11px] text-cwa-muted">
                    {p.group}
                  </span>
                </div>
                <div className="text-[12.5px] text-cwa-muted leading-5 mt-1 ml-6">
                  {p.description}
                </div>
              </button>
            </li>
          ))}
          {matches.length === 0 && (
            <li className="px-4 py-6 text-[13px] text-cwa-muted">
              No matches.
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
