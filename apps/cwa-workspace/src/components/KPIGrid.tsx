export type KPI = {
  label: string;
  target: string;
  current?: string;
  status?: 'on-track' | 'behind' | 'at-risk' | 'baseline';
  note?: string;
};

const STATUS_DOT: Record<NonNullable<KPI['status']>, string> = {
  'on-track': 'bg-cwa-green',
  behind: 'bg-amber-500',
  'at-risk': 'bg-cwa-rust',
  baseline: 'bg-cwa-muted',
};

export function KPIGrid({ items }: { items: KPI[] }) {
  return (
    <div className="not-prose grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 my-5">
      {items.map((k) => (
        <div
          key={k.label}
          className="border border-cwa-border rounded-lg p-4 bg-white shadow-card"
        >
          <div className="flex items-start justify-between gap-2">
            <div className="text-[12px] tracking-wide uppercase text-cwa-muted font-semibold">
              {k.label}
            </div>
            {k.status && (
              <span
                className={`inline-block w-2 h-2 rounded-full mt-1.5 ${STATUS_DOT[k.status]}`}
              />
            )}
          </div>
          <div className="flex items-baseline gap-3 mt-2">
            <div className="text-[22px] font-bold text-cwa-ink font-serif">
              {k.current ?? '—'}
            </div>
            <div className="text-[12px] text-cwa-muted">
              target {k.target}
            </div>
          </div>
          {k.note && (
            <div className="text-[12px] text-cwa-muted mt-2 leading-5">
              {k.note}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
