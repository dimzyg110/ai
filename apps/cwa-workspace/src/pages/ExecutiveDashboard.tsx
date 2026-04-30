import { PageShell } from '../components/PageShell';
import { Section, Subsection } from '../components/Section';
import { Callout } from '../components/Callout';
import { DataTable } from '../components/DataTable';
import { KPIGrid } from '../components/KPIGrid';
import { Badge } from '../components/Badge';
import { findPage } from '../lib/pages';

const meta = findPage('')!;

export default function ExecutiveDashboard() {
  return (
    <PageShell meta={meta}>
      <Callout tone="principle" title="Operating thesis">
        CWA / Cannex exists to raise the standard of medicinal cannabis supply.
        The market currently rewards speed, hype and closed arrangements. That
        will not last. As regulation, professional scrutiny and patient-safety
        expectations increase, pharmacies and prescribers will need to
        understand where products come from, how they are made, what
        documentation supports them and whether the supply pathway is ethical
        and reliable. This dashboard tracks the commercial work required to
        get ahead of that shift.
      </Callout>

      <Section title="Strategic position" eyebrow="The moat">
        <p>
          CWA / Cannex wins by becoming the most trusted medicinal cannabis
          supply and education infrastructure in Australia. We help pharmacies,
          prescribers and sponsors understand:
        </p>
        <ul>
          <li>where products come from and who made them</li>
          <li>what documentation supports them</li>
          <li>whether quality evidence (GMP, CoA, TGO 93) is available</li>
          <li>whether supply is reliable and fulfilment is transparent</li>
          <li>whether commercial arrangements are ethical and defensible</li>
        </ul>
        <Callout tone="info" title="Strategic moat">
          The more educated the buyer or prescriber becomes, the more valuable
          CWA / Cannex becomes. Low-information operators may appear successful
          today because they exploit confusion. CWA builds for the next phase
          of the market — where documentation, provenance, GMP, S8 handling,
          invoice transparency and ethical arrangements all matter.
        </Callout>
      </Section>

      <Section title="This week's commercial focus" eyebrow="Operating cadence">
        <DataTable
          columns={[
            { key: 'priority', header: 'Priority', width: '90px' },
            { key: 'focus', header: 'Focus area' },
            { key: 'owner', header: 'Owner', width: '180px' },
            {
              key: 'status',
              header: 'Status',
              width: '120px',
              render: () => <Badge variant="soft">—</Badge>,
            },
          ]}
          rows={[
            {
              priority: '1',
              focus: 'Convert pharmacy leads into ordering accounts',
              owner: 'Sales / Ops',
            },
            {
              priority: '2',
              focus:
                'Educate prescribers on product provenance and supply chain',
              owner: 'Dima / Clinical Education',
            },
            {
              priority: '3',
              focus: 'Progress sponsor distribution conversations',
              owner: 'Dima',
            },
            {
              priority: '4',
              focus:
                'Complete Product Trust Cards for CWA / Cannex products',
              owner: 'Ops / Compliance',
            },
            {
              priority: '5',
              focus: 'Identify trust barriers blocking conversion',
              owner: 'Sales / Ops',
            },
            {
              priority: '6',
              focus: 'Improve website lead capture',
              owner: 'Web / Sales',
            },
          ]}
        />
      </Section>

      <Section title="Dashboard snapshot" eyebrow="Targets">
        <KPIGrid
          items={[
            {
              label: 'New pharmacy leads',
              target: '10 / week',
              status: 'baseline',
            },
            {
              label: 'Pharmacy accounts approved',
              target: '5 / week',
              status: 'baseline',
            },
            {
              label: 'First orders placed',
              target: '3 / week',
              status: 'baseline',
            },
            {
              label: 'Prescribers in education',
              target: '10 / month',
              status: 'baseline',
            },
            {
              label: 'Provenance enquiries',
              target: '10 / month',
              status: 'baseline',
            },
            {
              label: 'Sponsor enquiries',
              target: '2 / week',
              status: 'baseline',
            },
            {
              label: 'Sponsor onboarding discussions',
              target: '1 / week',
              status: 'baseline',
            },
            {
              label: 'Product Trust Cards completed',
              target: '10 / month',
              status: 'baseline',
            },
            {
              label: 'Products with full documentation',
              target: '95%',
              status: 'baseline',
            },
            {
              label: 'Website qualified leads',
              target: '20 / month',
              status: 'baseline',
            },
            {
              label: 'Trust barriers resolved',
              target: '5 / month',
              status: 'baseline',
            },
          ]}
        />
      </Section>

      <Section title="The three audiences" eyebrow="Who we sell to">
        <Subsection title="1. Pharmacies — direct sales buyer">
          <p>
            Pharmacies are the primary commercial customer. They care about
            reliable product access, documentation, invoices, stock
            availability, ordering workflow, compliance confidence, controlled
            drug handling, and support when issues arise.
          </p>
          <p>
            <strong>Sales goal:</strong> Convert pharmacies into active CWA
            accounts that order CWA / Cannex-supplied products.
          </p>
        </Subsection>
        <Subsection title="2. Prescribers — education and influence stakeholder">
          <p>
            Prescribers may not purchase from CWA, but they influence product
            selection, patient confidence and pharmacy fulfilment pathways.
            They should be educated on product provenance, sponsor visibility,
            GMP evidence, CoA relevance, TGO 93 quality expectations, S8
            responsibilities and pharmacy fulfilment pathways — and on why
            closed-loop, kickback-driven models create risk.
          </p>
          <p>
            <strong>Sales goal:</strong> Make CWA / Cannex the trusted
            education and fulfilment-support infrastructure behind credible
            prescribers.
          </p>
        </Subsection>
        <Subsection title="3. Sponsors — commercial sales clients">
          <p>
            Sponsors care about distribution, pharmacy access, documentation
            management, product onboarding, reporting, reconciliation, stock
            movement, market credibility and avoiding poor pharmacy/supply
            experiences.
          </p>
          <p>
            <strong>Sales goal:</strong> Convert sponsors into distribution
            clients using CWA's pharmacy network, documentation process and
            transparency standard.
          </p>
        </Subsection>
      </Section>

      <Section title="Dashboard logic" eyebrow="What the system answers">
        <DataTable
          columns={[
            { key: 'q', header: 'Question', width: '38%' },
            { key: 'a', header: 'Answer' },
          ]}
          rows={[
            {
              q: 'Who are we selling to?',
              a: 'Pharmacies and sponsors directly; prescribers indirectly through education and fulfilment support.',
            },
            {
              q: 'What stage are they at?',
              a: 'Not just pipeline stage — also education maturity and trust maturity.',
            },
            {
              q: 'What blocks conversion?',
              a: 'Greed, kickbacks, closed-door arrangements, invoicing issues, product distrust, poor documentation, unclear supply chain.',
            },
            {
              q: 'Which products are trustworthy?',
              a: 'Products supplied by CWA and Cannex with proper documentation, GMP evidence, CoA, batch visibility and sponsor transparency.',
            },
            {
              q: 'Is the website generating qualified demand?',
              a: 'Yes — pharmacy leads, prescriber education interest, sponsor distribution enquiries.',
            },
          ]}
        />
      </Section>

      <Callout tone="compliance" title="Regulatory framing">
        Most medicinal cannabis products are unapproved therapeutic goods,
        generally Schedule 4 or Schedule 8. Advertising prescription medicines
        to the public is prohibited. Education must remain professionally
        targeted. CWA's commercial model assumes ethical, defensible
        information flow — never patient-facing product promotion, never
        practitioner inducement.
      </Callout>
    </PageShell>
  );
}
