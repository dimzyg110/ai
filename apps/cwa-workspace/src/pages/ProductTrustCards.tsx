import { PageShell } from '../components/PageShell';
import { Section, Subsection } from '../components/Section';
import { Callout } from '../components/Callout';
import { DataTable } from '../components/DataTable';
import { Badge } from '../components/Badge';
import { findPage } from '../lib/pages';

const meta = findPage('product-trust-cards')!;

const PROPERTIES = [
  { p: 'Product Name', t: 'Title' },
  {
    p: 'Supplied By',
    t: 'Select: CWA, Cannex, CWA + Cannex, Sponsor Partner',
  },
  { p: 'Sponsor', t: 'Select' },
  { p: 'Manufacturer', t: 'Text' },
  {
    p: 'Product Category',
    t: 'Select: Flower, Oil, Capsule, Pastille, Vape, Other',
  },
  { p: 'Schedule', t: 'Select: S4, S8, Other' },
  { p: 'SKU', t: 'Text' },
  { p: 'Barcode', t: 'Text' },
  {
    p: 'Status',
    t: 'Select: Draft, Pending Documentation, Internal Review, Ready for Portal, Active, Paused, Discontinued',
  },
  {
    p: 'GMP Evidence',
    t: 'Select: Available, Pending, Not Provided, Not Required',
  },
  { p: 'TGO 93 Evidence', t: 'Select: Available, Pending, Not Provided' },
  { p: 'CoA Status', t: 'Select: Available, Pending, Not Provided' },
  { p: 'CMI Status', t: 'Select: Available, Pending, Not Provided' },
  { p: 'Batch Visibility', t: 'Select: Complete, Partial, Missing' },
  { p: 'Expiry Visibility', t: 'Select: Complete, Partial, Missing' },
  { p: 'Supply Chain Visibility', t: 'Select: Complete, Partial, Missing' },
  { p: 'Transparency Score', t: 'Number (0–50)' },
  { p: 'Red Flag', t: 'Checkbox' },
  { p: 'Clinical Education Ready', t: 'Checkbox' },
  { p: 'Pharmacy Ready', t: 'Checkbox' },
  { p: 'Sponsor Ready', t: 'Checkbox' },
  { p: 'Owner', t: 'Person' },
  { p: 'Last Reviewed', t: 'Date' },
  { p: 'Next Review', t: 'Date' },
  { p: 'Notes', t: 'Text' },
];

export default function ProductTrustCards() {
  return (
    <PageShell meta={meta}>
      <Callout tone="principle" title="Scope discipline">
        Product Trust Cards only cover products CWA and Cannex supply or are
        preparing to supply. The card is not a marketing asset — it is the
        documentation backbone that proves CWA's transparency claim and is
        surfaced to pharmacies and approved professionals through the gated
        portal.
      </Callout>

      <Section title="Database schema" eyebrow="Properties">
        <DataTable
          columns={[
            { key: 'p', header: 'Property', width: '36%' },
            { key: 't', header: 'Type' },
          ]}
          rows={PROPERTIES}
        />
      </Section>

      <Section title="Transparency scoring" eyebrow="0–50">
        <p>
          Each Product Trust Card receives a transparency score across 10
          documentation and visibility dimensions, scored 0–5 each. Average
          target: <strong>40+ / 50</strong>. Anything below 30 is flagged for
          review before activation.
        </p>
        <DataTable
          columns={[
            { key: 'dim', header: 'Dimension', width: '40%' },
            { key: 'desc', header: 'What 5/5 looks like' },
          ]}
          rows={[
            { dim: 'GMP evidence', desc: 'Current GMP certificate on file, manufacturer site verified.' },
            { dim: 'TGO 93 compliance', desc: 'Documented evidence of TGO 93 conformance.' },
            { dim: 'CoA quality', desc: 'Per-batch CoA available with cannabinoid profile, contaminants, microbial results.' },
            { dim: 'CMI / professional info', desc: 'Up-to-date CMI or professional product information available where applicable.' },
            { dim: 'Batch visibility', desc: 'Batch number traceable from manufacturer to dispense.' },
            { dim: 'Expiry visibility', desc: 'Expiry visible to pharmacy at order time.' },
            { dim: 'Supply chain visibility', desc: 'Manufacturer → sponsor → CWA → pharmacy chain documented.' },
            { dim: 'Sponsor responsiveness', desc: 'Sponsor responds to documentation requests within SLA.' },
            { dim: 'Recall readiness', desc: 'Documented recall and adverse-event process.' },
            { dim: 'Ethical posture', desc: 'No inducement, kickback or closed-loop arrangement attached to product.' },
          ]}
        />
      </Section>

      <Section title="Activation status" eyebrow="What unlocks the card">
        <DataTable
          columns={[
            { key: 's', header: 'Status', width: '180px' },
            { key: 'm', header: 'Meaning' },
            { key: 'g', header: 'Gate' },
          ]}
          rows={[
            { s: 'Draft', m: 'Card created, fields incomplete.', g: 'Internal only.' },
            { s: 'Pending Documentation', m: 'Awaiting GMP / CoA / CMI / batch info.', g: 'Internal only.' },
            { s: 'Internal Review', m: 'All docs received, under compliance review.', g: 'Internal only.' },
            { s: 'Ready for Portal', m: 'Approved for gated portal display.', g: 'Visible to approved professionals.' },
            { s: 'Active', m: 'Live and orderable through pharmacy workflow.', g: 'Surfaced in pharmacy ordering.' },
            { s: 'Paused', m: 'Temporarily suspended (supply, quality or commercial reason).', g: 'Hidden from pharmacy ordering.' },
            { s: 'Discontinued', m: 'No longer supplied.', g: 'Archive only.' },
          ]}
        />
      </Section>

      <Section title="Standard saved views" eyebrow="What ops looks at">
        <DataTable
          columns={[
            { key: 'view', header: 'View', width: '36%' },
            { key: 'filter', header: 'Filter' },
          ]}
          rows={[
            { view: 'CWA / Cannex Active Products', filter: 'Supplied By contains CWA or Cannex; Status = Active' },
            { view: 'Pharmacy Ready Products', filter: 'Pharmacy Ready = checked' },
            { view: 'Prescriber Education Ready', filter: 'Clinical Education Ready = checked' },
            { view: 'Sponsor Partner Products', filter: 'Supplied By = Sponsor Partner' },
            { view: 'Products Pending Documentation', filter: 'Status = Pending Documentation' },
            { view: 'Red Flag Products', filter: 'Red Flag = checked' },
            { view: 'Ready for Portal', filter: 'Status = Ready for Portal' },
            { view: 'Low Transparency (review)', filter: 'Transparency Score < 30' },
          ]}
        />
      </Section>

      <Section title="Trust Card template" eyebrow="What gets shown to pharmacies">
        <Subsection title="1. Product overview">
          <ul>
            <li>Product name, category, SKU, schedule, sponsor, manufacturer</li>
            <li>Supplied by: CWA / Cannex / CWA + Cannex / Sponsor Partner</li>
            <li>Status badge (Active, Paused, etc.)</li>
          </ul>
        </Subsection>
        <Subsection title="2. Quality documentation">
          <ul>
            <li>GMP evidence — status + last reviewed date</li>
            <li>TGO 93 conformance — status + evidence reference</li>
            <li>CoA — per-batch availability, last batch viewed</li>
            <li>CMI / product info — version + date</li>
          </ul>
        </Subsection>
        <Subsection title="3. Supply chain visibility">
          <ul>
            <li>Manufacturer → sponsor → CWA → pharmacy</li>
            <li>Batch traceability status</li>
            <li>Expiry visibility status</li>
          </ul>
        </Subsection>
        <Subsection title="4. Operational readiness">
          <ul>
            <li>Pharmacy Ready — yes / no</li>
            <li>Clinical Education Ready — yes / no</li>
            <li>Sponsor Ready — yes / no</li>
          </ul>
        </Subsection>
        <Subsection title="5. Transparency score">
          <ul>
            <li>0–50 score</li>
            <li>Red flag indicator if applicable</li>
            <li>Last reviewed / next review date</li>
          </ul>
        </Subsection>
        <Subsection title="6. Professional summary (gated)">
          <ul>
            <li>Manufacturing site context</li>
            <li>Sponsor relationship and ethical posture</li>
            <li>Known supply constraints</li>
            <li>Notes on previous recall or adverse-event history (if any)</li>
          </ul>
        </Subsection>
      </Section>

      <Section title="Red flags" eyebrow="When to pause">
        <DataTable
          columns={[
            { key: 'flag', header: 'Red flag', width: '40%' },
            {
              key: 'severity',
              header: 'Severity',
              width: '120px',
              render: (r: { severity: string }) => (
                <Badge
                  variant={
                    r.severity === 'High'
                      ? 'rust'
                      : r.severity === 'Medium'
                        ? 'amber'
                        : 'soft'
                  }
                >
                  {r.severity}
                </Badge>
              ),
            },
            { key: 'action', header: 'Action' },
          ]}
          rows={[
            { flag: 'Sponsor cannot provide GMP evidence within SLA', severity: 'High', action: 'Pause activation; escalate to compliance.' },
            { flag: 'CoA missing or inconsistent across batches', severity: 'High', action: 'Pause; do not surface to pharmacy.' },
            { flag: 'Batch / expiry not visible to pharmacy at order time', severity: 'Medium', action: 'Resolve before Active status.' },
            { flag: 'Inherited inducement / closed-loop arrangement attached', severity: 'High', action: 'Decline product or restructure.' },
            { flag: 'Recall history with unclear root cause', severity: 'Medium', action: 'Document and review with clinical reviewer.' },
            { flag: 'Sponsor unresponsive on adverse-event escalation', severity: 'High', action: 'Escalate; consider de-listing.' },
          ]}
        />
      </Section>
    </PageShell>
  );
}
