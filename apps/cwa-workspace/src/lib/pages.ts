export type PageMeta = {
  slug: string;
  title: string;
  shortTitle: string;
  group: 'Overview' | 'Pipelines' | 'Trust & Product' | 'Enablement' | 'Operations';
  icon: string;
  description: string;
};

export const PAGES: PageMeta[] = [
  {
    slug: '',
    title: 'Executive Dashboard',
    shortTitle: 'Executive Dashboard',
    group: 'Overview',
    icon: '◆',
    description:
      'Pharmacy sales, prescriber education, sponsor partnerships, product trust readiness and website-led demand at a glance.',
  },
  {
    slug: 'stakeholder-crm',
    title: 'Stakeholder CRM',
    shortTitle: 'Stakeholder CRM',
    group: 'Overview',
    icon: '◇',
    description:
      'One master database for pharmacies, prescribers, sponsors, clinics and internal contacts — with education and trust maturity.',
  },
  {
    slug: 'pharmacy-pipeline',
    title: 'Pharmacy Sales Pipeline',
    shortTitle: 'Pharmacy Pipeline',
    group: 'Pipelines',
    icon: '◈',
    description:
      'Convert pharmacies into active CWA accounts that order CWA / Cannex-supplied products.',
  },
  {
    slug: 'prescriber-education',
    title: 'Prescriber Education Pipeline',
    shortTitle: 'Prescriber Education',
    group: 'Pipelines',
    icon: '◉',
    description:
      'Educate prescribers on product provenance, GMP, CoA, TGO 93, S8 and supply pathways. Trust-led, not product-led.',
  },
  {
    slug: 'sponsor-pipeline',
    title: 'Sponsor Partnership Pipeline',
    shortTitle: 'Sponsor Pipeline',
    group: 'Pipelines',
    icon: '◎',
    description:
      'Convert sponsors into distribution clients using CWA pharmacy access, documentation and transparency standards.',
  },
  {
    slug: 'product-trust-cards',
    title: 'Product Trust Cards',
    shortTitle: 'Product Trust Cards',
    group: 'Trust & Product',
    icon: '✦',
    description:
      'Transparency profile for every CWA / Cannex-supplied product — documentation, provenance, readiness and red flags.',
  },
  {
    slug: 'product-library',
    title: 'CWA / Cannex Product Library',
    shortTitle: 'Product Library',
    group: 'Trust & Product',
    icon: '✧',
    description:
      'The narrowed product universe CWA stands behind: only products we supply or are preparing to supply.',
  },
  {
    slug: 'trust-barriers',
    title: 'Trust Barrier Register',
    shortTitle: 'Trust Barrier Register',
    group: 'Trust & Product',
    icon: '⚑',
    description:
      'Track kickbacks, closed-door arrangements, invoicing issues, documentation gaps and ethical concerns blocking conversion.',
  },
  {
    slug: 'website-resource-centre',
    title: 'Website Resource Centre',
    shortTitle: 'Website Resource Centre',
    group: 'Enablement',
    icon: '◐',
    description:
      'Public site architecture, gated portal sections, audience CTAs, lead magnets and compliance-safe copy.',
  },
  {
    slug: 'education-hub',
    title: 'Education Asset Library',
    shortTitle: 'Education Hub',
    group: 'Enablement',
    icon: '◑',
    description:
      'Prescriber education modules: provenance, GMP, CoA, TGO 93, S8, pharmacy fulfilment, closed-loop risk, clinical credibility.',
  },
  {
    slug: 'sales-scripts',
    title: 'Sales Scripts',
    shortTitle: 'Sales Scripts',
    group: 'Enablement',
    icon: '◒',
    description:
      'Cold, warm, recovery and reactivation sequences — plus pharmacy and sponsor discovery and call structures.',
  },
  {
    slug: 'compliance-queue',
    title: 'Compliance Review Queue',
    shortTitle: 'Compliance Queue',
    group: 'Operations',
    icon: '◧',
    description:
      'Content and product items awaiting clinical, compliance or commercial review before publish or activation.',
  },
  {
    slug: 'kpi-dashboard',
    title: 'KPI Dashboard',
    shortTitle: 'KPI Dashboard',
    group: 'Operations',
    icon: '◨',
    description:
      'Pharmacy, prescriber education, sponsor, product trust and trust-barrier KPIs in one operational view.',
  },
  {
    slug: 'weekly-review',
    title: 'Weekly Commercial Review',
    shortTitle: 'Weekly Review',
    group: 'Operations',
    icon: '◩',
    description:
      'Cadence for weekly review of pipeline movement, education engagement, trust barriers and product readiness.',
  },
];

export const GROUP_ORDER: PageMeta['group'][] = [
  'Overview',
  'Pipelines',
  'Trust & Product',
  'Enablement',
  'Operations',
];

export function findPage(slug: string): PageMeta | undefined {
  return PAGES.find((p) => p.slug === slug);
}
