import { PageShell } from '../components/PageShell';
import { Section } from '../components/Section';
import { Callout } from '../components/Callout';
import { DataTable } from '../components/DataTable';
import { PipelineStrip } from '../components/PipelineStrip';
import { KPIGrid } from '../components/KPIGrid';
import { findPage } from '../lib/pages';

const meta = findPage('prescriber-education')!;

export default function PrescriberEducation() {
  return (
    <PageShell meta={meta}>
      <Callout tone="principle" title="Why this exists">
        Prescribers may not buy from CWA, but they shape product selection,
        patient confidence and pharmacy fulfilment pathways. Educate them on
        provenance, quality and supply ethics — and CWA / Cannex becomes the
        trusted infrastructure behind credible prescribers. This is not a
        sales page. It is a credibility and influence engine.
      </Callout>

      <Section title="Education pipeline stages" eyebrow="From identified to advocate">
        <PipelineStrip
          stages={[
            { stage: 'New prescriber', meaning: 'Identified or referred.' },
            {
              stage: 'Education invited',
              meaning: 'Sent professional education material.',
            },
            {
              stage: 'Education engaged',
              meaning: 'Opened, attended, replied or requested information.',
            },
            {
              stage: 'Product provenance enquiry',
              meaning: 'Asked where products come from and who made them.',
            },
            {
              stage: 'Supply pathway discussion',
              meaning: 'Wants to understand pharmacy fulfilment options.',
            },
            {
              stage: 'Preferred pharmacy mapped',
              meaning:
                'Prescriber has nominated or discussed a pharmacy fulfilment pathway.',
            },
            {
              stage: 'Ongoing education',
              meaning: 'Receives updates and modules.',
            },
            {
              stage: 'Clinical advocate',
              meaning:
                'Values transparency and supports better product knowledge in their network.',
            },
          ]}
        />
      </Section>

      <Section title="Education themes" eyebrow="What we teach">
        <DataTable
          columns={[
            { key: 'theme', header: 'Theme', width: '34%' },
            { key: 'purpose', header: 'Purpose' },
          ]}
          rows={[
            {
              theme: 'Product provenance',
              purpose: 'Where products come from and who made them.',
            },
            {
              theme: 'GMP evidence',
              purpose: 'Why manufacturing evidence matters.',
            },
            {
              theme: 'TGO 93',
              purpose:
                'Minimum quality requirements for medicinal cannabis in Australia.',
            },
            {
              theme: 'CoA interpretation',
              purpose: 'What batch-level testing can and cannot show.',
            },
            {
              theme: 'Schedule 8 responsibilities',
              purpose:
                'Professional seriousness of controlled-drug prescribing and supply.',
            },
            {
              theme: 'Pharmacy fulfilment',
              purpose: 'How patients can access prescribed products efficiently.',
            },
            {
              theme: 'Closed-loop risk',
              purpose:
                'Why kickbacks and opaque arrangements undermine trust and increase regulatory exposure.',
            },
            {
              theme: 'Clinical credibility',
              purpose:
                'How informed prescribers stand out from low-information, high-volume operators.',
            },
          ]}
        />
      </Section>

      <Section title="Approved prescriber-facing language" eyebrow="What we say and don't say">
        <DataTable
          columns={[
            {
              key: 'use',
              header: 'Use',
              width: '50%',
              render: (r: { use: string }) => (
                <span className="text-cwa-green-deep">{r.use}</span>
              ),
            },
            {
              key: 'avoid',
              header: 'Avoid',
              render: (r: { avoid: string }) => (
                <span className="text-cwa-rust">{r.avoid}</span>
              ),
            },
          ]}
          rows={[
            {
              use: 'Access professional education resources',
              avoid: '"Prescribe our products"',
            },
            {
              use: 'Understand product provenance and supply chain',
              avoid: '"Choose CWA products"',
            },
            {
              use: 'View pharmacy fulfilment options',
              avoid: '"Send patients to our pharmacy"',
            },
            {
              use: 'Compliance-aligned supply infrastructure',
              avoid: 'Any disease, therapeutic or "best product" claim',
            },
            {
              use: 'Independent clinical decision-making',
              avoid: 'Patient acquisition language',
            },
          ]}
        />
        <Callout tone="compliance" title="Hard rule">
          The prescriber must never be financially induced — directly or
          indirectly — to choose a product, pharmacy or supplier. CWA's model
          is education-led, not inducement-led.
        </Callout>
      </Section>

      <Section title="Pharmacy + prescriber supply workflow" eyebrow="Streamlined model">
        <DataTable
          columns={[
            { key: 'step', header: 'Step', width: '70px' },
            { key: 'action', header: 'Action' },
          ]}
          rows={[
            {
              step: '1',
              action:
                'Prescriber learns about product provenance and supply-chain standards.',
            },
            {
              step: '2',
              action: 'Prescriber makes an independent clinical decision.',
            },
            { step: '3', action: 'Patient chooses or nominates a pharmacy.' },
            {
              step: '4',
              action: 'Pharmacy orders through CWA if onboarded.',
            },
            {
              step: '5',
              action:
                'CWA supports supply, documentation and order visibility.',
            },
            {
              step: '6',
              action:
                'Pharmacy dispenses according to applicable requirements.',
            },
            {
              step: '7',
              action:
                'CWA maintains product documentation and support pathway.',
            },
          ]}
        />
      </Section>

      <Section title="KPIs for prescriber education" eyebrow="Targets">
        <KPIGrid
          items={[
            { label: 'Prescribers invited', target: '20 / month', status: 'baseline' },
            { label: 'Prescribers engaged', target: '10 / month', status: 'baseline' },
            { label: 'Module completions', target: '10 / month', status: 'baseline' },
            { label: 'Provenance enquiries', target: '10 / month', status: 'baseline' },
            { label: 'Pharmacy fulfilment discussions', target: '5 / month', status: 'baseline' },
            { label: 'Prescriber → pharmacy referrals', target: 'Track only where compliant', status: 'baseline' },
            { label: 'Education feedback score', target: '8+/10', status: 'baseline' },
          ]}
        />
      </Section>
    </PageShell>
  );
}
