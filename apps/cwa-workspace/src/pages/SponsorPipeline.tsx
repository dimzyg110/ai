import { PageShell } from '../components/PageShell';
import { Section } from '../components/Section';
import { Callout } from '../components/Callout';
import { DataTable } from '../components/DataTable';
import { PipelineStrip } from '../components/PipelineStrip';
import { KPIGrid } from '../components/KPIGrid';
import { findPage } from '../lib/pages';

const meta = findPage('sponsor-pipeline')!;

export default function SponsorPipeline() {
  return (
    <PageShell meta={meta}>
      <Callout tone="info" title="Sponsors are commercial clients">
        Other sponsors are also CWA clients. They care about distribution,
        pharmacy access, documentation management, product onboarding,
        reporting, reconciliation, stock movement, market credibility and
        avoiding poor pharmacy/supply experiences. Sales goal: convert
        sponsors into distribution clients using CWA's pharmacy network,
        documentation process and transparency standard.
      </Callout>

      <Section title="Sponsor pipeline stages">
        <PipelineStrip
          stages={[
            { stage: 'New sponsor lead', meaning: 'Sponsor identified or referred.' },
            { stage: 'Discovery booked', meaning: 'Initial meeting booked.' },
            {
              stage: 'Discovery completed',
              meaning: 'Product / distribution / documentation needs understood.',
            },
            {
              stage: 'Documentation requested',
              meaning: 'CWA has requested product documentation pack.',
            },
            {
              stage: 'Documentation received',
              meaning: 'Sponsor has provided product documentation.',
            },
            {
              stage: 'Product review underway',
              meaning: 'CWA reviewing product suitability and red flags.',
            },
            {
              stage: 'Commercial model discussed',
              meaning:
                'Fees, terms, reporting and reconciliation aligned.',
            },
            {
              stage: 'Agreement pending',
              meaning: 'Awaiting contract / signoff.',
            },
            {
              stage: 'Onboarding active',
              meaning: 'Product setup underway in catalogue, portal and ops.',
            },
            {
              stage: 'Live sponsor',
              meaning: 'Products active and moving through CWA distribution.',
            },
            {
              stage: 'Dormant / paused',
              meaning: 'No current activity — review or recover.',
            },
          ]}
        />
      </Section>

      <Section title="Sponsor onboarding pack" eyebrow="What we ask for">
        <ul>
          <li>Sponsor entity, ABN and TGA sponsor status confirmation</li>
          <li>GMP evidence for manufacturing site(s)</li>
          <li>TGO 93 compliance evidence</li>
          <li>Certificate of Analysis (CoA) for each batch supplied</li>
          <li>Consumer Medicine Information (CMI) where applicable</li>
          <li>Batch and expiry visibility process</li>
          <li>Storage and transport requirements (S4 / S8)</li>
          <li>Recall and adverse-event escalation process</li>
          <li>Reporting and reconciliation expectations</li>
          <li>Pricing, payment terms and dispute process</li>
        </ul>
      </Section>

      <Section title="Commercial model summary">
        <DataTable
          columns={[
            { key: 'theme', header: 'Theme', width: '32%' },
            { key: 'cwa', header: 'CWA position' },
          ]}
          rows={[
            {
              theme: 'Inventory model',
              cwa: 'Inventory can be warehoused in a compliant environment with structured inbound and outbound flows.',
            },
            {
              theme: 'Pricing approach',
              cwa: 'Transaction-based, aligned to movement — not margin extraction or fixed overhead.',
            },
            {
              theme: 'Reporting',
              cwa: 'Monthly stock movement, pharmacy demand signal and reconciliation reports.',
            },
            {
              theme: 'Pharmacy access',
              cwa: 'Distribution into CWA pharmacy network with consistent fulfilment workflow.',
            },
            {
              theme: 'Documentation',
              cwa: 'Sponsor docs maintained centrally and surfaced through Product Trust Cards.',
            },
            {
              theme: 'Ethical model',
              cwa: 'No prescriber inducements, no closed-loop arrangements, no opaque kickbacks.',
            },
          ]}
        />
      </Section>

      <Section title="Discovery questions for sponsors">
        <ul>
          <li>What is your current Australian distribution footprint?</li>
          <li>Which products are TGA-listed / unapproved / pending?</li>
          <li>How many SKUs do you expect to move through CWA in the first 6 months?</li>
          <li>What documentation is already production-ready vs. pending?</li>
          <li>Where has your previous distribution model broken down — operationally, commercially or ethically?</li>
          <li>Are you carrying any inherited closed-loop or inducement-driven arrangements you want to clean up?</li>
          <li>What does success look like in 90 days? In 12 months?</li>
        </ul>
      </Section>

      <Section title="KPIs for sponsor pipeline" eyebrow="Targets">
        <KPIGrid
          items={[
            { label: 'New sponsor enquiries', target: '2 / week', status: 'baseline' },
            { label: 'Sponsor discovery calls', target: '1 / week', status: 'baseline' },
            { label: 'Onboarding packs received', target: '2 / month', status: 'baseline' },
            { label: 'Products reviewed', target: '5 / month', status: 'baseline' },
            { label: 'Products activated', target: '3 / month', status: 'baseline' },
            { label: 'Sponsor reporting delivered', target: 'Monthly', status: 'baseline' },
            { label: 'Sponsor invoice / reconciliation disputes', target: '↓ monthly', status: 'baseline' },
          ]}
        />
      </Section>
    </PageShell>
  );
}
