import type { ReactNode } from 'react';

type Tone = 'info' | 'compliance' | 'warning' | 'success' | 'principle';

const TONES: Record<Tone, { wrap: string; icon: string; label: string }> = {
  info: {
    wrap: 'border-cwa-green bg-cwa-green-soft text-cwa-green-deep',
    icon: '◆',
    label: 'Note',
  },
  compliance: {
    wrap: 'border-cwa-amber-border bg-cwa-amber-soft text-cwa-amber',
    icon: '⚠',
    label: 'Compliance',
  },
  warning: {
    wrap: 'border-cwa-rust bg-orange-50 text-cwa-rust',
    icon: '⚑',
    label: 'Caution',
  },
  success: {
    wrap: 'border-cwa-teal bg-cwa-teal-soft text-cwa-teal',
    icon: '✓',
    label: 'Outcome',
  },
  principle: {
    wrap: 'border-cwa-green-deep bg-cwa-green-soft text-cwa-green-deep',
    icon: '◇',
    label: 'Principle',
  },
};

export function Callout({
  tone = 'info',
  title,
  children,
}: {
  tone?: Tone;
  title?: string;
  children: ReactNode;
}) {
  const t = TONES[tone];
  return (
    <div
      className={`border-l-[3px] ${t.wrap} px-4 py-3 my-4 rounded-r-md not-prose`}
    >
      <div className="flex items-start gap-3">
        <span className="text-[14px] mt-0.5">{t.icon}</span>
        <div className="flex-1">
          <div className="text-[11px] font-semibold tracking-wider uppercase opacity-80">
            {title ?? t.label}
          </div>
          <div className="text-[14px] leading-6 mt-1">{children}</div>
        </div>
      </div>
    </div>
  );
}
