export type Stage = { stage: string; meaning: string };

export function PipelineStrip({
  stages,
  approach,
}: {
  stages: Stage[];
  approach?: string[];
}) {
  return (
    <div className="not-prose my-5 border border-cwa-border rounded-lg overflow-hidden">
      <table className="w-full text-[13.5px]">
        <thead>
          <tr className="bg-cwa-surface text-cwa-slate text-left">
            <th className="px-3 py-2.5 font-semibold text-[12px] tracking-wide uppercase text-cwa-muted border-b border-cwa-border w-1/4">
              Stage
            </th>
            <th className="px-3 py-2.5 font-semibold text-[12px] tracking-wide uppercase text-cwa-muted border-b border-cwa-border">
              Meaning
            </th>
            {approach && (
              <th className="px-3 py-2.5 font-semibold text-[12px] tracking-wide uppercase text-cwa-muted border-b border-cwa-border w-1/3">
                Sales / Education approach
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {stages.map((s, i) => (
            <tr
              key={s.stage}
              className={`align-top ${
                i % 2 === 1 ? 'bg-cwa-surface/40' : 'bg-white'
              } border-b border-cwa-border-soft last:border-0`}
            >
              <td className="px-3 py-2.5 font-medium text-cwa-ink">
                <span className="inline-flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cwa-green" />
                  {s.stage}
                </span>
              </td>
              <td className="px-3 py-2.5 text-cwa-slate leading-6">
                {s.meaning}
              </td>
              {approach && (
                <td className="px-3 py-2.5 text-cwa-slate leading-6">
                  {approach[i] ?? ''}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
