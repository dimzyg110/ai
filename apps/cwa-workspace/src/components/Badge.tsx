import type { ReactNode } from 'react';

type Variant =
  | 'green'
  | 'teal'
  | 'amber'
  | 'rust'
  | 'slate'
  | 'soft'
  | 'outline';

const VARIANTS: Record<Variant, string> = {
  green: 'bg-cwa-green-soft text-cwa-green-deep border-cwa-green/30',
  teal: 'bg-cwa-teal-soft text-cwa-teal border-cwa-teal/30',
  amber: 'bg-cwa-amber-soft text-cwa-amber border-cwa-amber-border',
  rust: 'bg-orange-50 text-cwa-rust border-cwa-rust/30',
  slate: 'bg-slate-100 text-cwa-slate border-slate-200',
  soft: 'bg-cwa-surface text-cwa-muted border-cwa-border',
  outline: 'bg-white text-cwa-ink border-cwa-border',
};

export function Badge({
  children,
  variant = 'soft',
}: {
  children: ReactNode;
  variant?: Variant;
}) {
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded-full border text-[11.5px] font-medium ${VARIANTS[variant]}`}
    >
      {children}
    </span>
  );
}
