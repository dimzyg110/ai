import { PageShell } from '../components/PageShell';
import { Section } from '../components/Section';
import { Callout } from '../components/Callout';
import { DataTable } from '../components/DataTable';
import { Badge } from '../components/Badge';
import { findPage } from '../lib/pages';

const meta = findPage('product-library')!;

export default function ProductLibrary() {
  return (
    <PageShell meta={meta}>
      <Callout tone="info" title="Narrow on purpose">
        The Product Library only contains products CWA and Cannex actively
        supply or are preparing to supply. The market has thousands of SKUs
        floating around — most without sufficient documentation. CWA's
        commercial leverage comes from a smaller, transparent, defensible
        catalogue, not a long list.
      </Callout>

      <Section title="Library principles">
        <ul>
          <li>Every product has a Product Trust Card before it appears here.</li>
          <li>Products with red flags are excluded until resolved.</li>
          <li>The library is the source of truth for the gated pharmacy portal.</li>
          <li>Sponsor-partner products are clearly labelled and held to the same documentation standard.</li>
          <li>Pricing, stock availability and lead times are managed in the operational system, not in this library.</li>
        </ul>
      </Section>

      <Section title="Library schema" eyebrow="Fields">
        <DataTable
          columns={[
            { key: 'p', header: 'Property', width: '36%' },
            { key: 't', header: 'Type' },
          ]}
          rows={[
            { p: 'Product Name', t: 'Title' },
            { p: 'Trust Card', t: 'Relation → Product Trust Cards' },
            { p: 'Supplied By', t: 'Select: CWA, Cannex, CWA + Cannex, Sponsor Partner' },
            { p: 'Sponsor', t: 'Text' },
            { p: 'Manufacturer', t: 'Text' },
            { p: 'Category', t: 'Select: Flower, Oil, Capsule, Pastille, Vape, Other' },
            { p: 'Schedule', t: 'Select: S4, S8, Other' },
            { p: 'Status', t: 'Select (mirrors Trust Card)' },
            { p: 'Pharmacy Ready', t: 'Checkbox' },
            { p: 'Transparency Score', t: 'Number' },
            { p: 'Owner', t: 'Person' },
            { p: 'Last Reviewed', t: 'Date' },
          ]}
        />
      </Section>

      <Section title="Example library structure" eyebrow="Illustrative only">
        <Callout tone="warning" title="Placeholder data">
          The rows below are illustrative. Real product entries should only be
          added once each has an approved Trust Card, owner and review date.
        </Callout>
        <DataTable
          columns={[
            { key: 'name', header: 'Product', width: '28%' },
            {
              key: 'supplied',
              header: 'Supplied by',
              render: (r: { supplied: string }) => (
                <Badge variant="green">{r.supplied}</Badge>
              ),
            },
            { key: 'category', header: 'Category' },
            { key: 'schedule', header: 'Schedule' },
            {
              key: 'status',
              header: 'Status',
              render: (r: { status: string }) => (
                <Badge
                  variant={
                    r.status === 'Active'
                      ? 'green'
                      : r.status === 'Pending Documentation'
                        ? 'amber'
                        : 'soft'
                  }
                >
                  {r.status}
                </Badge>
              ),
            },
            { key: 'score', header: 'Score', align: 'right' },
          ]}
          rows={[
            { name: 'Example Flower 18 — 10g', supplied: 'CWA', category: 'Flower', schedule: 'S8', status: 'Active', score: '46/50' },
            { name: 'Example Oil 25 — 30ml', supplied: 'Cannex', category: 'Oil', schedule: 'S4', status: 'Active', score: '44/50' },
            { name: 'Example Capsule 10 — 30 pack', supplied: 'CWA + Cannex', category: 'Capsule', schedule: 'S4', status: 'Ready for Portal', score: '41/50' },
            { name: 'Sponsor Partner Pastille 5', supplied: 'Sponsor Partner', category: 'Pastille', schedule: 'S4', status: 'Pending Documentation', score: '—' },
            { name: 'Sponsor Partner Vape 1.0', supplied: 'Sponsor Partner', category: 'Vape', schedule: 'S8', status: 'Internal Review', score: '32/50' },
          ]}
        />
      </Section>

      <Section title="Sponsor-partner products" eyebrow="How they're treated">
        <p>
          Sponsor-partner products are clearly labelled as such. They are held
          to the same documentation, transparency and ethical standards as
          CWA / Cannex products — and they only appear in the library after
          their Trust Card reaches Ready for Portal status.
        </p>
        <ul>
          <li>Same Trust Card schema and review cadence.</li>
          <li>Sponsor name surfaced clearly on the card.</li>
          <li>No product can be activated without sponsor accountability for documentation.</li>
          <li>Red flags trigger pause regardless of supplier identity.</li>
        </ul>
      </Section>
    </PageShell>
  );
}
