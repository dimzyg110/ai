import { PageShell } from '../components/PageShell';
import { Section } from '../components/Section';
import { Callout } from '../components/Callout';
import { DataTable } from '../components/DataTable';
import { Badge } from '../components/Badge';
import { KPIGrid } from '../components/KPIGrid';
import { findPage } from '../lib/pages';

const meta = findPage('trust-barriers')!;

export default function TrustBarriers() {
  return (
    <PageShell meta={meta}>
      <Callout tone="principle" title="What we're tracking">
        Greed, kickbacks, closed-door arrangements, invoicing issues, product
        distrust, documentation gaps and unclear supply chains — these are the
        real reasons CWA loses or delays deals. The Trust Barrier Register
        makes them visible, attributable and actionable.
      </Callout>

      <Section title="Schema" eyebrow="Properties">
        <DataTable
          columns={[
            { key: 'p', header: 'Property', width: '36%' },
            { key: 't', header: 'Type' },
          ]}
          rows={[
            { p: 'Barrier', t: 'Title' },
            { p: 'Barrier Type', t: 'Select: Kickback Concern, Closed-Door Arrangement, Invoicing Issue, Product Quality Concern, Documentation Gap, Supply Issue, Pricing Concern, Ethical Concern, Other' },
            { p: 'Stakeholder', t: 'Relation → Stakeholder CRM' },
            { p: 'Product', t: 'Relation → Product Trust Cards' },
            { p: 'Severity', t: 'Select: High, Medium, Low' },
            { p: 'Commercial Impact', t: 'Select: Blocks Sale, Delays Sale, Damages Trust, Minor' },
            { p: 'Compliance Risk', t: 'Select: High, Medium, Low' },
            { p: 'Description', t: 'Text' },
            { p: 'Evidence / Notes', t: 'Text' },
            { p: 'Owner', t: 'Person' },
            { p: 'Action Required', t: 'Text' },
            { p: 'Due Date', t: 'Date' },
            { p: 'Status', t: 'Select: Open, Investigating, Actioned, Resolved, Closed' },
            { p: 'Preventative Fix', t: 'Text' },
          ]}
        />
      </Section>

      <Section title="Starter trust barriers" eyebrow="Real-world examples">
        <DataTable
          columns={[
            { key: 'barrier', header: 'Barrier', width: '32%' },
            {
              key: 'type',
              header: 'Type',
              width: '22%',
              render: (r: { type: string }) => (
                <Badge variant="amber">{r.type}</Badge>
              ),
            },
            { key: 'fix', header: 'Preventative fix' },
          ]}
          rows={[
            { barrier: '"We do not trust cannabis suppliers."', type: 'Product Quality Concern', fix: 'Show Product Trust Card, CoA, GMP evidence and supply-chain documentation.' },
            { barrier: '"Previous distributor had invoice issues."', type: 'Invoicing Issue', fix: 'Provide clear invoice workflow, named reconciliation contact and dispute process.' },
            { barrier: '"Clinic seems tied to one pharmacy / product."', type: 'Closed-Door Arrangement', fix: 'Position CWA as open, transparent supply support — patient and pharmacy choice preserved.' },
            { barrier: '"Prescriber does not know where products are from."', type: 'Documentation Gap', fix: 'Provide provenance education module.' },
            { barrier: '"Sponsor cannot provide documents quickly."', type: 'Documentation Gap', fix: 'Sponsor onboarding checklist and activation gate.' },
            { barrier: '"Commercial arrangements look conflicted."', type: 'Ethical Concern', fix: 'No kickbacks, no hidden inducements, transparent B2B commercial terms.' },
          ]}
        />
        <Callout tone="compliance" title="Ethical benchmark">
          Even where CWA is not a Medicines Australia member, the Code of
          Conduct ethos around ethical promotion of prescription medicines and
          interactions with healthcare professionals — including avoiding
          inappropriate influence and providing accurate, balanced
          information — is a useful benchmark for a defensible B2B model.
        </Callout>
      </Section>

      <Section title="Severity matrix" eyebrow="How to triage">
        <DataTable
          columns={[
            { key: 'severity', header: 'Severity', width: '120px' },
            { key: 'examples', header: 'Examples' },
            { key: 'response', header: 'Response time' },
          ]}
          rows={[
            { severity: 'High', examples: 'Kickback / inducement allegation, S8 mishandling, invoice fraud signal, recall issue, ethical concern.', response: 'Same day; named owner; compliance review.' },
            { severity: 'Medium', examples: 'Documentation gap, repeated invoice dispute, fulfilment failure, sponsor unresponsive.', response: '48 hours; named owner.' },
            { severity: 'Low', examples: 'One-off fulfilment delay, minor portal issue, single complaint.', response: '5 business days.' },
          ]}
        />
      </Section>

      <Section title="KPIs" eyebrow="Targets">
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
    </PageShell>
  );
}
