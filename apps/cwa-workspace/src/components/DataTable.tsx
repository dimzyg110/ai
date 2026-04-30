import type { ReactNode } from 'react';

export type Column<T> = {
  key: keyof T | string;
  header: string;
  width?: string;
  render?: (row: T) => ReactNode;
  align?: 'left' | 'right' | 'center';
};

export function DataTable<T extends Record<string, unknown>>({
  columns,
  rows,
  zebra = true,
}: {
  columns: Column<T>[];
  rows: T[];
  zebra?: boolean;
}) {
  return (
    <div className="not-prose my-5 border border-cwa-border rounded-lg overflow-hidden">
      <table className="w-full text-[13.5px]">
        <thead>
          <tr className="bg-cwa-surface text-cwa-slate text-left">
            {columns.map((c) => (
              <th
                key={String(c.key)}
                style={{ width: c.width }}
                className={`px-3 py-2.5 font-semibold text-[12px] tracking-wide uppercase text-cwa-muted border-b border-cwa-border ${
                  c.align === 'right'
                    ? 'text-right'
                    : c.align === 'center'
                      ? 'text-center'
                      : ''
                }`}
              >
                {c.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className={`align-top ${
                zebra && i % 2 === 1 ? 'bg-cwa-surface/40' : 'bg-white'
              } border-b border-cwa-border-soft last:border-0`}
            >
              {columns.map((c) => (
                <td
                  key={String(c.key)}
                  className={`px-3 py-2.5 text-cwa-slate leading-6 ${
                    c.align === 'right'
                      ? 'text-right'
                      : c.align === 'center'
                        ? 'text-center'
                        : ''
                  }`}
                >
                  {c.render
                    ? c.render(row)
                    : ((row as Record<string, ReactNode>)[
                        c.key as string
                      ] as ReactNode)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
