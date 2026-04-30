import { PageShell } from '../components/PageShell';
import { Section } from '../components/Section';
import { Callout } from '../components/Callout';
import { DataTable } from '../components/DataTable';
import { PipelineStrip } from '../components/PipelineStrip';
import { Badge } from '../components/Badge';
import { findPage } from '../lib/pages';

const meta = findPage('stakeholder-crm')!;

const FIELDS = [
  { property: 'Name / Organisation', type: 'Title' },
  {
    property: 'Stakeholder Type',
    type: 'Select: Pharmacy, Prescriber, Sponsor, Clinic, Internal, Other',
  },
  { property: 'Contact Person', type: 'Text' },
  { property: 'Role', type: 'Text' },
  { property: 'Email', type: 'Email' },
  { property: 'Phone', type: 'Phone' },
  { property: 'State', type: 'Select' },
  { property: 'Commercial Priority', type: 'Select: High, Medium, Low' },
  { property: 'Education Maturity', type: 'Select (see below)' },
  { property: 'Trust Maturity', type: 'Select (see below)' },
  { property: 'Pipeline Stage', type: 'Select (per stakeholder type)' },
  { property: 'Main Pain Point', type: 'Multi-select' },
  { property: 'Main Opportunity', type: 'Multi-select' },
  { property: 'Products of Interest', type: 'Relation → Product Library' },
  { property: 'Preferred Pharmacy', type: 'Text' },
  { property: 'Sponsor Relationship', type: 'Text' },
  { property: 'Next Action', type: 'Text' },
  { property: 'Next Action Date', type: 'Date' },
  { property: 'Owner', type: 'Person' },
  { property: 'Last Contacted', type: 'Date' },
  { property: 'Status', type: 'Select: Active, Waiting, Won, Lost, Nurture' },
  { property: 'Notes', type: 'Text' },
];

export default function StakeholderCRM() {
  return (
    <PageShell meta={meta}>
      <Callout tone="info" title="Single source of truth">
        Instead of separate, disconnected databases for pharmacies, prescribers
        and sponsors, this is one master CRM with a Stakeholder Type field. It
        avoids fragmentation, keeps trust and education maturity visible, and
        makes cross-segment relationships (e.g. clinic + preferred pharmacy)
        easy to track.
      </Callout>

      <Section title="Database schema" eyebrow="Properties">
        <DataTable
          columns={[
            { key: 'property', header: 'Property', width: '40%' },
            { key: 'type', header: 'Type' },
          ]}
          rows={FIELDS}
        />
      </Section>

      <Section title="Education maturity" eyebrow="Trust-led segmentation">
        <p>
          The Australian medicinal cannabis market is not mature. Education
          maturity tells the salesperson what to do next.
        </p>
        <PipelineStrip
          approach={[
            'Basic education',
            'Product provenance education',
            'Documentation and supply-chain proof',
            'CWA / Cannex positioning',
            'Partnership / education pathway',
            'Relationship deepening',
          ]}
          stages={[
            {
              stage: 'Unaware',
              meaning:
                'Does not understand product origin, GMP, CoA, supply chain or legal risk.',
            },
            {
              stage: 'Product-aware',
              meaning:
                'Knows products but not quality or supply differences.',
            },
            {
              stage: 'Compliance-aware',
              meaning:
                'Understands Schedule 8 / prescription medicine risk.',
            },
            {
              stage: 'Trust-seeking',
              meaning:
                'Wants better, cleaner, more defensible supply.',
            },
            {
              stage: 'Clinically credible',
              meaning:
                'Uses product knowledge to improve professional practice.',
            },
            {
              stage: 'Advocate',
              meaning:
                'Actively values transparent supply and refers others.',
            },
          ]}
        />
      </Section>

      <Section title="Trust maturity" eyebrow="Where they sit emotionally">
        <DataTable
          columns={[
            { key: 'stage', header: 'Stage', width: '180px' },
            { key: 'meaning', header: 'Meaning' },
          ]}
          rows={[
            {
              stage: 'Low trust',
              meaning:
                'Has been burned by poor suppliers, invoicing or closed arrangements.',
            },
            { stage: 'Curious', meaning: 'Interested but unsure.' },
            {
              stage: 'Evaluating',
              meaning: 'Comparing CWA to current supplier.',
            },
            {
              stage: 'Trust-building',
              meaning:
                'Reviewing documentation, workflow and product information.',
            },
            {
              stage: 'Converted',
              meaning: 'Active account / active supporter.',
            },
            {
              stage: 'Advocate',
              meaning: 'Recommends the CWA model.',
            },
          ]}
        />
      </Section>

      <Section title="Suggested CRM views" eyebrow="Saved filters">
        <DataTable
          columns={[
            { key: 'view', header: 'View', width: '36%' },
            { key: 'filter', header: 'Filter' },
            {
              key: 'audience',
              header: 'Audience',
              width: '22%',
              render: (r: { audience: string }) => (
                <Badge variant="green">{r.audience}</Badge>
              ),
            },
          ]}
          rows={[
            {
              view: 'High-priority pharmacy leads',
              filter:
                'Stakeholder Type = Pharmacy AND Commercial Priority = High AND Status = Active',
              audience: 'Pharmacy',
            },
            {
              view: 'Prescribers in education',
              filter:
                'Stakeholder Type = Prescriber AND Education Maturity ≥ Product-aware',
              audience: 'Prescriber',
            },
            {
              view: 'Sponsor opportunities',
              filter: 'Stakeholder Type = Sponsor AND Status = Active',
              audience: 'Sponsor',
            },
            {
              view: 'Trust-building accounts',
              filter: 'Trust Maturity = Trust-building OR Evaluating',
              audience: 'Mixed',
            },
            {
              view: 'Reactivation list',
              filter:
                'Status = Nurture AND Last Contacted > 60 days AND Trust Maturity ≥ Curious',
              audience: 'Mixed',
            },
            {
              view: 'Compliance-sensitive contacts',
              filter:
                'Main Pain Point contains "Documentation gap" OR "Ethical concern"',
              audience: 'Mixed',
            },
          ]}
        />
      </Section>
    </PageShell>
  );
}
