import { PageShell } from '../components/PageShell';
import { Section } from '../components/Section';
import { Callout } from '../components/Callout';
import { DataTable } from '../components/DataTable';
import { PipelineStrip } from '../components/PipelineStrip';
import { KPIGrid } from '../components/KPIGrid';
import { findPage } from '../lib/pages';

const meta = findPage('pharmacy-pipeline')!;

export default function PharmacyPipeline() {
  return (
    <PageShell meta={meta}>
      <Callout tone="info" title="Pharmacy = direct revenue">
        Pharmacies are CWA's primary commercial customer. They care about
        reliable product access, documentation, invoices, stock availability,
        ordering workflow, compliance confidence, controlled-drug handling and
        support when issues arise. Sales goal: convert pharmacies into active
        CWA accounts that order CWA / Cannex-supplied products.
      </Callout>

      <Section title="Pipeline stages" eyebrow="From lead to repeat ordering">
        <PipelineStrip
          stages={[
            {
              stage: 'New pharmacy lead',
              meaning: 'New enquiry or target pharmacy.',
            },
            {
              stage: 'Qualified',
              meaning: 'Suitable pharmacy account profile confirmed.',
            },
            {
              stage: 'Discovery completed',
              meaning: 'Pain points, current supply, stock gaps understood.',
            },
            {
              stage: 'Access pending',
              meaning: 'Account setup underway — documents, billing, delivery.',
            },
            {
              stage: 'Portal access granted',
              meaning: 'Pharmacy can view catalogue and place orders.',
            },
            {
              stage: 'First order pending',
              meaning: 'Account active but first order not yet placed.',
            },
            {
              stage: 'First order placed',
              meaning: 'Converted — initial fulfilment complete.',
            },
            {
              stage: 'Repeat ordering',
              meaning: 'Active commercial account, recurring orders.',
            },
            {
              stage: 'At risk',
              meaning: 'Order decline, complaint, fulfilment issue or inactivity.',
            },
            {
              stage: 'Reactivation',
              meaning: 'Previously active, currently being recovered.',
            },
          ]}
        />
      </Section>

      <Section title="Saved views" eyebrow="What sales looks at every day">
        <DataTable
          columns={[
            { key: 'view', header: 'View', width: '34%' },
            { key: 'filter', header: 'Filter' },
            { key: 'cadence', header: 'Cadence', width: '160px' },
          ]}
          rows={[
            {
              view: 'New Pharmacy Leads',
              filter: 'Stage = New pharmacy lead',
              cadence: 'Daily',
            },
            {
              view: 'Access Pending',
              filter: 'Stage = Access pending',
              cadence: 'Daily',
            },
            {
              view: 'First Order Pending',
              filter: 'Stage = First order pending',
              cadence: 'Daily',
            },
            {
              view: 'Active Ordering Pharmacies',
              filter: 'Stage = Repeat ordering',
              cadence: 'Weekly',
            },
            {
              view: 'At Risk Pharmacies',
              filter: 'Stage = At risk',
              cadence: 'Weekly',
            },
            {
              view: 'Reactivation List',
              filter: 'Stage = Reactivation',
              cadence: 'Weekly',
            },
          ]}
        />
      </Section>

      <Section title="Pharmacy discovery questions" eyebrow="What to ask">
        <ul>
          <li>How are you currently sourcing medicinal cannabis stock?</li>
          <li>How many SKUs do you typically carry, and which categories matter most?</li>
          <li>What documentation do you receive with each order today (CoA, GMP, batch info)?</li>
          <li>How is your current supplier handling Schedule 8 workflow and controlled-drug record-keeping?</li>
          <li>How is invoicing and reconciliation handled? Any disputes or delays?</li>
          <li>What does your fulfilment lead time look like? Where does it break down?</li>
          <li>Are you tied to specific clinics or prescribers? Any conflicted arrangements you're trying to clean up?</li>
          <li>What would make you confident enough to add a new supplier?</li>
        </ul>
      </Section>

      <Section title="Common objections + responses">
        <DataTable
          columns={[
            { key: 'objection', header: 'Objection', width: '35%' },
            { key: 'response', header: 'CWA response' },
          ]}
          rows={[
            {
              objection: '"We already have a supplier."',
              response:
                'Understood — CWA is positioned as the second, transparent supplier most pharmacies need for resilience. Single-supplier risk shows up first when documentation, S8 record-keeping or stockouts go wrong.',
            },
            {
              objection: '"Cannabis suppliers can\'t be trusted."',
              response:
                'That has been true for some operators. CWA exists because of that — every product we supply has a Product Trust Card with provenance, GMP evidence, CoA status and batch visibility.',
            },
            {
              objection: '"We had invoice problems with a previous distributor."',
              response:
                'Standard CWA workflow includes a clear invoice cycle, named reconciliation contact and a documented dispute process before escalation.',
            },
            {
              objection: '"We are already integrated with a closed-loop clinic."',
              response:
                'Understood. CWA does not require exclusivity. We supply the pharmacy, not the clinic relationship — and we never offer inducements that compromise prescriber independence.',
            },
            {
              objection: '"We don\'t have time to onboard a new supplier."',
              response:
                'Onboarding is structured to take days, not weeks. Let us walk you through the documentation pack and the first-order workflow before you commit anything.',
            },
          ]}
        />
      </Section>

      <Section title="KPIs for this pipeline" eyebrow="Targets">
        <KPIGrid
          items={[
            { label: 'New pharmacy leads', target: '10 / week', status: 'baseline' },
            { label: 'Pharmacy accounts approved', target: '5 / week', status: 'baseline' },
            { label: 'First orders placed', target: '3 / week', status: 'baseline' },
            { label: 'Time to access approval', target: '<5 business days', status: 'baseline' },
            { label: 'Repeat ordering pharmacies', target: '↑ monthly', status: 'baseline' },
            { label: 'Invoice disputes', target: '↓ monthly', status: 'baseline' },
            { label: 'Pharmacy reactivation rate', target: '↑ monthly', status: 'baseline' },
          ]}
        />
      </Section>
    </PageShell>
  );
}
