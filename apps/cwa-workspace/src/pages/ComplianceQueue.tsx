import { PageShell } from '../components/PageShell';
import { Section } from '../components/Section';
import { Callout } from '../components/Callout';
import { DataTable } from '../components/DataTable';
import { Badge } from '../components/Badge';
import { findPage } from '../lib/pages';

const meta = findPage('compliance-queue')!;

export default function ComplianceQueue() {
  return (
    <PageShell meta={meta}>
      <Callout tone="compliance" title="Hard rule">
        Nothing surfaces externally — content, product card, sponsor
        activation, education module — without an entry in this queue, an
        owner, a reviewer, and a documented approval. CWA's transparency
        story breaks if we cut corners here.
      </Callout>

      <Section title="Review register schema">
        <DataTable
          columns={[
            { key: 'f', header: 'Field', width: '32%' },
            { key: 'p', header: 'Purpose' },
          ]}
          rows={[
            { f: 'Content item', p: 'Page / module / product card / quiz / email / website copy.' },
            { f: 'Owner', p: 'Person responsible for the item.' },
            { f: 'Clinical reviewer', p: 'Required for clinical or therapeutic content.' },
            { f: 'Compliance reviewer', p: 'Required for everything published externally.' },
            { f: 'Version', p: 'Locked at publish.' },
            { f: 'Date reviewed', p: 'Approval date.' },
            { f: 'Next review date', p: 'Periodic review cadence.' },
            { f: 'Status', p: 'Draft / In review / Approved / Rejected.' },
            { f: 'Notes', p: 'Required if rejected; explain required changes.' },
          ]}
        />
      </Section>

      <Section title="Risk classification">
        <DataTable
          columns={[
            {
              key: 'risk',
              header: 'Risk',
              width: '120px',
              render: (r: { risk: string }) => (
                <Badge
                  variant={
                    r.risk === 'High' || r.risk === 'Restricted'
                      ? 'rust'
                      : r.risk === 'Medium'
                        ? 'amber'
                        : 'green'
                  }
                >
                  {r.risk}
                </Badge>
              ),
            },
            { key: 'examples', header: 'Examples' },
            { key: 'review', header: 'Review required' },
          ]}
          rows={[
            { risk: 'Low', examples: 'Operational education, platform walkthroughs, pharmacy ordering guide.', review: 'Ops review.' },
            { risk: 'Medium', examples: 'Regulatory access pathways, pharmacy workflow, sponsor onboarding pack.', review: 'Compliance review.' },
            { risk: 'High', examples: 'Clinical treatment considerations, product-specific content, prescriber-facing material.', review: 'Clinical + compliance review.' },
            { risk: 'Restricted', examples: 'Patient-specific guidance, therapeutic claims, promotional product comparisons.', review: 'Do not publish without formal approval; default = reject.' },
          ]}
        />
      </Section>

      <Section title="Hard blocks before publish">
        <ul>
          <li>Disclaimer missing.</li>
          <li>Audience gating unclear.</li>
          <li>Module 2 (clinical) lacks clinical reviewer signoff.</li>
          <li>Product-specific claims appear publicly.</li>
          <li>Certificate disclaimer missing.</li>
          <li>Public page reads like product advertising.</li>
          <li>Quiz questions lead users toward product selection.</li>
          <li>No version number assigned.</li>
        </ul>
      </Section>

      <Section title="Standard review cadences">
        <DataTable
          columns={[
            { key: 'item', header: 'Item', width: '36%' },
            { key: 'cadence', header: 'Review cadence' },
          ]}
          rows={[
            { item: 'Education modules (clinical)', cadence: 'Quarterly + on regulatory change.' },
            { item: 'Education modules (operational)', cadence: 'Six-monthly.' },
            { item: 'Product Trust Cards', cadence: 'On batch / sponsor change; minimum quarterly.' },
            { item: 'Sponsor onboarding pack', cadence: 'Annually.' },
            { item: 'Public site copy', cadence: 'Six-monthly + on regulatory change.' },
            { item: 'Email sequences', cadence: 'Six-monthly.' },
            { item: 'KPI definitions', cadence: 'Annually.' },
          ]}
        />
      </Section>

      <Section title="Queue views" eyebrow="What ops looks at">
        <DataTable
          columns={[
            { key: 'v', header: 'View', width: '36%' },
            { key: 'f', header: 'Filter' },
          ]}
          rows={[
            { v: 'Awaiting compliance review', f: 'Status = In review AND Compliance reviewer = empty' },
            { v: 'Awaiting clinical review', f: 'Risk = High AND Clinical reviewer = empty' },
            { v: 'Rejected — needs rework', f: 'Status = Rejected' },
            { v: 'Approved this week', f: 'Status = Approved AND Date reviewed = last 7 days' },
            { v: 'Due for periodic review', f: 'Next review date <= today + 14 days' },
            { v: 'Restricted items', f: 'Risk = Restricted' },
          ]}
        />
      </Section>
    </PageShell>
  );
}
