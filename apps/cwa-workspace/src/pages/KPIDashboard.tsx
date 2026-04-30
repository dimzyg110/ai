import { PageShell } from '../components/PageShell';
import { Section } from '../components/Section';
import { Callout } from '../components/Callout';
import { KPIGrid } from '../components/KPIGrid';
import { DataTable } from '../components/DataTable';
import { findPage } from '../lib/pages';

const meta = findPage('kpi-dashboard')!;

export default function KPIDashboard() {
  return (
    <PageShell meta={meta}>
      <Callout tone="info" title="Why these KPIs">
        Pipeline KPIs measure pharmacy and sponsor commercial work.
        Education KPIs measure prescriber influence. Trust KPIs measure
        whether the differentiator (documentation, provenance, ethics) is
        actually being built. Track all three, not just sales velocity.
      </Callout>

      <Section title="Pharmacy" eyebrow="Direct revenue">
        <KPIGrid
          items={[
            { label: 'New pharmacy leads', target: '10 / week', status: 'baseline' },
            { label: 'Pharmacy accounts approved', target: '5 / week', status: 'baseline' },
            { label: 'First orders placed', target: '3 / week', status: 'baseline' },
            { label: 'Time to access approval', target: '<5 business days', status: 'baseline' },
            { label: 'Repeat ordering pharmacies', target: '↑ monthly', status: 'baseline' },
            { label: 'Invoice disputes', target: '↓ monthly', status: 'baseline' },
            { label: 'Reactivation rate', target: '↑ monthly', status: 'baseline' },
          ]}
        />
      </Section>

      <Section title="Prescriber education" eyebrow="Influence">
        <KPIGrid
          items={[
            { label: 'Prescribers invited', target: '20 / month', status: 'baseline' },
            { label: 'Prescribers engaged', target: '10 / month', status: 'baseline' },
            { label: 'Module completions', target: '10 / month', status: 'baseline' },
            { label: 'Provenance enquiries', target: '10 / month', status: 'baseline' },
            { label: 'Pharmacy fulfilment discussions', target: '5 / month', status: 'baseline' },
            { label: 'Compliant referrals tracked', target: 'Track only where compliant', status: 'baseline' },
            { label: 'Education feedback score', target: '8+/10', status: 'baseline' },
          ]}
        />
      </Section>

      <Section title="Sponsor partnerships" eyebrow="Distribution clients">
        <KPIGrid
          items={[
            { label: 'New sponsor enquiries', target: '2 / week', status: 'baseline' },
            { label: 'Sponsor discovery calls', target: '1 / week', status: 'baseline' },
            { label: 'Onboarding packs received', target: '2 / month', status: 'baseline' },
            { label: 'Products reviewed', target: '5 / month', status: 'baseline' },
            { label: 'Products activated', target: '3 / month', status: 'baseline' },
            { label: 'Sponsor reporting delivered', target: 'Monthly', status: 'baseline' },
            { label: 'Sponsor invoice disputes', target: '↓ monthly', status: 'baseline' },
          ]}
        />
      </Section>

      <Section title="Product trust" eyebrow="Documentation moat">
        <KPIGrid
          items={[
            { label: 'Trust Cards completed', target: '10 / month', status: 'baseline' },
            { label: 'Products with CoA available', target: '95%', status: 'baseline' },
            { label: 'Products with GMP evidence', target: '95%', status: 'baseline' },
            { label: 'Batch / expiry visibility', target: '95%', status: 'baseline' },
            { label: 'Products with red flag', target: '0', status: 'baseline' },
            { label: 'Average transparency score', target: '40+/50', status: 'baseline' },
            { label: 'Products education-ready', target: '↑ monthly', status: 'baseline' },
          ]}
        />
      </Section>

      <Section title="Trust barriers" eyebrow="What blocks conversion">
        <KPIGrid
          items={[
            { label: 'New barriers logged', target: 'Track weekly', status: 'baseline' },
            { label: 'High-severity unresolved', target: '0', status: 'baseline' },
            { label: 'Invoice-related barriers', target: '↓ monthly', status: 'baseline' },
            { label: 'Documentation barriers', target: '↓ monthly', status: 'baseline' },
            { label: 'Kickback / closed-loop concerns', target: 'Track + escalate', status: 'baseline' },
            { label: 'Barriers resolved', target: '5 / month', status: 'baseline' },
          ]}
        />
      </Section>

      <Section title="Website" eyebrow="Top of funnel">
        <KPIGrid
          items={[
            { label: 'Website qualified leads', target: '20 / month', status: 'baseline' },
            { label: 'Pharmacy form submissions', target: '8 / month', status: 'baseline' },
            { label: 'Prescriber education registrations', target: '8 / month', status: 'baseline' },
            { label: 'Sponsor enquiries from site', target: '4 / month', status: 'baseline' },
            { label: 'Lead → discovery call rate', target: '40%+', status: 'baseline' },
            { label: 'Bounce rate (audience pages)', target: '<55%', status: 'baseline' },
          ]}
        />
      </Section>

      <Section title="Reporting cadence">
        <DataTable
          columns={[
            { key: 'cadence', header: 'Cadence', width: '180px' },
            { key: 'review', header: 'What is reviewed' },
            { key: 'owner', header: 'Owner', width: '180px' },
          ]}
          rows={[
            { cadence: 'Daily', review: 'New pharmacy leads, access pending, first-order pending, urgent trust barriers.', owner: 'Sales / Ops' },
            { cadence: 'Weekly', review: 'All pipelines, education engagement, barriers resolved, Trust Card progression.', owner: 'Dima + Ops' },
            { cadence: 'Monthly', review: 'KPI scorecard vs. targets, sponsor reporting, product readiness.', owner: 'Leadership' },
            { cadence: 'Quarterly', review: 'Strategic moat — education and trust maturity distribution across pipeline.', owner: 'Leadership' },
          ]}
        />
      </Section>
    </PageShell>
  );
}
