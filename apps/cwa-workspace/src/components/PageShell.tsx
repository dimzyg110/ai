import type { ReactNode } from 'react';
import type { PageMeta } from '../lib/pages';

export function PageShell({
  meta,
  children,
}: {
  meta: PageMeta;
  children: ReactNode;
}) {
  return (
    <div className="flex-1 overflow-y-auto">
      <div className="max-w-page mx-auto px-10 py-12 prose-cwa">
        <div className="text-[12px] text-cwa-muted tracking-wider uppercase mb-3">
          {meta.group} · CWA / Cannex Sales &amp; Trust OS
        </div>
        <h1 className="text-[40px] font-bold leading-tight tracking-tight text-cwa-ink mb-3 font-serif">
          {meta.title}
        </h1>
        <p className="text-[16px] leading-7 text-cwa-muted mb-8 max-w-[720px]">
          {meta.description}
        </p>
        <div className="border-t border-cwa-border-soft -mx-2 mb-2" />
        {children}
      </div>
    </div>
  );
}
