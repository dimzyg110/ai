import type { ReactNode } from 'react';

export function Section({
  title,
  eyebrow,
  children,
}: {
  title: string;
  eyebrow?: string;
  children: ReactNode;
}) {
  return (
    <section className="mt-10">
      {eyebrow && (
        <div className="text-[11px] font-semibold tracking-wider uppercase text-cwa-green-deep mb-1">
          {eyebrow}
        </div>
      )}
      <h2 className="text-[26px] leading-tight font-bold text-cwa-ink mt-1 mb-4 font-serif">
        {title}
      </h2>
      <div className="prose-cwa">{children}</div>
    </section>
  );
}

export function Subsection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="mt-6">
      <h3 className="text-[18px] font-semibold text-cwa-ink mt-6 mb-2 font-serif">
        {title}
      </h3>
      <div className="prose-cwa">{children}</div>
    </div>
  );
}
