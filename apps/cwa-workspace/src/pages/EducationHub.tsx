import { PageShell } from '../components/PageShell';
import { Section } from '../components/Section';
import { Callout } from '../components/Callout';
import { DataTable } from '../components/DataTable';
import { Toggle } from '../components/Toggle';
import { Badge } from '../components/Badge';
import { findPage } from '../lib/pages';

const meta = findPage('education-hub')!;

export default function EducationHub() {
  return (
    <PageShell meta={meta}>
      <Callout tone="principle" title="Positioning">
        Prescribers who understand product provenance, documentation and
        supply-chain quality are better placed to support safe, informed and
        credible medicinal cannabis care. The hub is professional education,
        not product promotion. Education is gated behind professional
        verification.
      </Callout>

      <Section title="Module library" eyebrow="Foundation 8">
        <DataTable
          columns={[
            { key: 'n', header: '#', width: '50px' },
            { key: 'title', header: 'Title' },
            { key: 'purpose', header: 'Purpose' },
            {
              key: 'audience',
              header: 'Audience',
              width: '160px',
              render: (r: { audience: string }) => (
                <Badge variant="green">{r.audience}</Badge>
              ),
            },
          ]}
          rows={[
            { n: '1', title: 'Why product provenance matters', purpose: 'Where products come from and why it matters for patient confidence and clinical defensibility.', audience: 'All HCPs' },
            { n: '2', title: 'Understanding GMP evidence', purpose: 'What GMP confirms (and what it does not) — manufacturing site oversight, audit posture.', audience: 'Prescribers / Pharmacy' },
            { n: '3', title: 'CoA and batch testing', purpose: 'How to read a Certificate of Analysis: cannabinoid profile, contaminants, microbial results.', audience: 'Prescribers / Pharmacy' },
            { n: '4', title: 'TGO 93 and quality standards', purpose: 'Minimum Australian quality requirements for medicinal cannabis.', audience: 'Prescribers / Pharmacy' },
            { n: '5', title: 'Schedule 8 supply responsibilities', purpose: 'Professional seriousness of controlled-drug prescribing and dispensing — record-keeping, storage, audit.', audience: 'Prescribers / Pharmacy' },
            { n: '6', title: 'Pharmacy fulfilment pathways', purpose: 'How prescriptions can be supplied efficiently with less friction.', audience: 'Prescribers / Clinic ops' },
            { n: '7', title: 'Avoiding closed-loop risk', purpose: 'Ethical risk of kickbacks and conflicted models — and how to spot them in your own workflow.', audience: 'Prescribers' },
            { n: '8', title: 'Becoming a credible clinical lead', purpose: 'Position education as professional advantage in a maturing market.', audience: 'Prescribers' },
          ]}
        />
      </Section>

      <Section title="Module 1 — Why product provenance matters">
        <Toggle title="Learning objectives" defaultOpen>
          <ul>
            <li>Identify why product provenance is a clinical and regulatory issue, not a marketing one.</li>
            <li>Distinguish manufacturer, sponsor and distributor responsibilities.</li>
            <li>Recognise documentation expectations a credible prescriber should set with pharmacy and supplier.</li>
          </ul>
        </Toggle>
        <Toggle title="Sections">
          <ol className="list-decimal pl-6">
            <li>What "provenance" means for medicinal cannabis</li>
            <li>Manufacturer vs. sponsor vs. distributor</li>
            <li>Why it matters when products are unapproved therapeutic goods</li>
            <li>Red flags to watch for in supply chains</li>
            <li>What credible prescribers ask their pharmacy and supplier for</li>
          </ol>
        </Toggle>
        <Toggle title="Quiz examples">
          <ul>
            <li>Who is responsible for product quality at the manufacturing site?</li>
            <li>What does a sponsor's responsibility include?</li>
            <li>What documents should be available before supply is arranged?</li>
            <li>What is the role of CoA in batch-level confidence?</li>
            <li>True or false: provenance is primarily a marketing concern.</li>
          </ul>
        </Toggle>
      </Section>

      <Section title="Module 2 — GMP evidence">
        <Toggle title="Learning objectives">
          <ul>
            <li>Understand what GMP certification confirms.</li>
            <li>Recognise the difference between certified manufacturing and ad-hoc claims.</li>
            <li>Apply GMP awareness when discussing product origin with pharmacy.</li>
          </ul>
        </Toggle>
        <Toggle title="Sections">
          <ol className="list-decimal pl-6">
            <li>What GMP is and what it certifies</li>
            <li>What GMP does not certify</li>
            <li>Why GMP evidence matters for unapproved therapeutic goods</li>
            <li>How CWA documents GMP evidence per product</li>
            <li>Red flags when GMP evidence cannot be produced</li>
          </ol>
        </Toggle>
      </Section>

      <Section title="Module 3 — CoA and batch testing">
        <Toggle title="Learning objectives">
          <ul>
            <li>Read a typical CoA and identify cannabinoid profile, contaminants and microbial results.</li>
            <li>Recognise CoA limitations (it is batch-specific, not a guarantee of clinical effect).</li>
            <li>Use CoA awareness in patient discussion and documentation.</li>
          </ul>
        </Toggle>
      </Section>

      <Section title="Module 4 — TGO 93 and quality standards">
        <Toggle title="Learning objectives">
          <ul>
            <li>Understand the minimum quality requirements TGO 93 sets for medicinal cannabis.</li>
            <li>Distinguish TGO 93 conformance from broader regulatory approval.</li>
            <li>Use TGO 93 framing when assessing supply-chain credibility.</li>
          </ul>
        </Toggle>
      </Section>

      <Section title="Module 5 — Schedule 8 responsibilities">
        <Toggle title="Learning objectives">
          <ul>
            <li>Understand prescriber and pharmacy obligations under Schedule 8.</li>
            <li>Identify common record-keeping, storage and audit failure points.</li>
            <li>Recognise how supply-side discipline reduces clinical and audit risk.</li>
          </ul>
        </Toggle>
      </Section>

      <Section title="Module 6 — Pharmacy fulfilment pathways">
        <Toggle title="Learning objectives">
          <ul>
            <li>Understand how a prescription becomes a dispensed product.</li>
            <li>Recognise where fulfilment friction creates patient and prescriber pain.</li>
            <li>Identify what a structured pharmacy fulfilment workflow looks like.</li>
          </ul>
        </Toggle>
      </Section>

      <Section title="Module 7 — Avoiding closed-loop risk">
        <Toggle title="Learning objectives">
          <ul>
            <li>Identify closed-loop / kickback / conflicted-arrangement red flags.</li>
            <li>Understand the regulatory and reputational exposure these create.</li>
            <li>Use awareness to clean up own workflow and protect clinical independence.</li>
          </ul>
        </Toggle>
      </Section>

      <Section title="Module 8 — Becoming a credible clinical lead">
        <Toggle title="Learning objectives">
          <ul>
            <li>Position education and documentation literacy as professional advantage.</li>
            <li>Identify how a maturing regulatory environment will reward informed prescribers.</li>
            <li>Use CWA / Cannex infrastructure as supporting evidence — not as a marketing relationship.</li>
          </ul>
        </Toggle>
      </Section>

      <Section title="Compliance review fields" eyebrow="Required for every module">
        <DataTable
          columns={[
            { key: 'f', header: 'Field' },
            { key: 'd', header: 'Description' },
          ]}
          rows={[
            { f: 'Audience', d: 'Healthcare professionals only.' },
            { f: 'Source references', d: 'Documented internally before publish.' },
            { f: 'Clinical reviewer', d: 'Required for clinical modules (2, 3, 4, 5).' },
            { f: 'Compliance reviewer', d: 'Required for all modules.' },
            { f: 'Version number', d: 'Locked at publish.' },
            { f: 'Date reviewed / next review', d: 'Both required.' },
            { f: 'Classification', d: 'Internal / gated HCP / public professional.' },
          ]}
        />
      </Section>
    </PageShell>
  );
}
