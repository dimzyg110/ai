import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { GROUP_ORDER, PAGES } from '../lib/pages';

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  if (collapsed) {
    return (
      <aside className="w-12 shrink-0 border-r border-cwa-border bg-cwa-surface flex flex-col items-center py-4">
        <button
          onClick={() => setCollapsed(false)}
          className="text-cwa-muted hover:text-cwa-ink"
          title="Expand sidebar"
        >
          ☰
        </button>
      </aside>
    );
  }

  return (
    <aside className="w-72 shrink-0 border-r border-cwa-border bg-cwa-surface flex flex-col">
      <div className="px-4 pt-5 pb-4 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2 text-cwa-green-deep font-semibold">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded bg-cwa-green text-white text-[11px] font-bold">
              CWA
            </span>
            <span className="font-serif text-[15px]">Sales &amp; Trust OS</span>
          </div>
          <div className="text-[11px] text-cwa-muted mt-1">
            Cannabis Warehouse Australia / Cannex
          </div>
        </div>
        <button
          onClick={() => setCollapsed(true)}
          className="text-cwa-muted hover:text-cwa-ink text-sm"
          title="Collapse sidebar"
        >
          ⇤
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto px-2 pb-6">
        {GROUP_ORDER.map((group) => {
          const items = PAGES.filter((p) => p.group === group);
          return (
            <div key={group}>
              <div className="nav-section-label">{group}</div>
              {items.map((p) => (
                <NavLink
                  key={p.slug}
                  to={p.slug ? `/${p.slug}` : '/'}
                  end={p.slug === ''}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? 'active' : ''}`
                  }
                >
                  <span className="text-cwa-green text-[13px] w-4 inline-flex justify-center">
                    {p.icon}
                  </span>
                  <span className="truncate">{p.shortTitle}</span>
                </NavLink>
              ))}
            </div>
          );
        })}
      </nav>

      <div className="border-t border-cwa-border px-4 py-3 text-[11px] text-cwa-muted leading-relaxed">
        Trust-led B2B sales. Education as the conversion engine. Documentation
        as the differentiator.
      </div>
    </aside>
  );
}
