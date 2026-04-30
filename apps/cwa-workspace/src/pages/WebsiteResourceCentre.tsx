import { PageShell } from '../components/PageShell';
import { Section, Subsection } from '../components/Section';
import { Callout } from '../components/Callout';
import { DataTable } from '../components/DataTable';
import { Badge } from '../components/Badge';
import { findPage } from '../lib/pages';

const meta = findPage('website-resource-centre')!;

export default function WebsiteResourceCentre() {
  return (
    <PageShell meta={meta}>
      <Callout tone="info" title="Website = three conversion pathways">
        The site has three audiences and three CTAs. Pharmacies convert into
        ordering accounts. Prescribers convert into education engagement.
        Sponsors convert into distribution conversations. The site is the
        top of all three pipelines.
      </Callout>

      <Section title="Conversion pathways" eyebrow="Audience → CTA">
        <DataTable
          columns={[
            {
              key: 'audience',
              header: 'Audience',
              width: '180px',
              render: (r: { audience: string }) => (
                <Badge variant="green">{r.audience}</Badge>
              ),
            },
            { key: 'public', header: 'Public CTA' },
            { key: 'gated', header: 'Gated CTA (post-verification)' },
          ]}
          rows={[
            { audience: 'Pharmacy', public: 'Request Pharmacy Access', gated: 'View Product Documentation' },
            { audience: 'Prescriber', public: 'Access Professional Education', gated: 'View Product Provenance Resources' },
            { audience: 'Sponsor', public: 'Discuss Distribution', gated: 'Submit Product Onboarding Pack' },
          ]}
        />
      </Section>

      <Section title="Public site architecture">
        <DataTable
          columns={[
            { key: 'page', header: 'Page', width: '34%' },
            { key: 'purpose', header: 'Purpose' },
          ]}
          rows={[
            { page: 'For Pharmacies', purpose: 'Convert buyers — ordering, documentation, support, controlled-drug workflow.' },
            { page: 'For Prescribers', purpose: 'Educate influence stakeholders — provenance, GMP, CoA, S8, fulfilment.' },
            { page: 'For Sponsors', purpose: 'Convert commercial clients — distribution, documentation, reporting.' },
            { page: 'Product Transparency Framework', purpose: 'Build trust — explain what every Trust Card includes and why.' },
            { page: 'Supply Chain Standards', purpose: 'Differentiate CWA / Cannex — manufacturer → sponsor → CWA → pharmacy visibility.' },
            { page: 'Resource Centre', purpose: 'Capture leads — gated downloads behind professional verification.' },
            { page: 'Contact / Request Access', purpose: 'Convert demand — three audience-specific forms.' },
          ]}
        />
      </Section>

      <Section title="Gated portal sections" eyebrow="Behind verification">
        <DataTable
          columns={[
            { key: 'section', header: 'Section', width: '36%' },
            { key: 'audience', header: 'Audience' },
          ]}
          rows={[
            { section: 'Product Trust Cards', audience: 'Pharmacies / approved professionals' },
            { section: 'CoA / CMI library', audience: 'Pharmacies / approved professionals' },
            { section: 'Product provenance resources', audience: 'Prescribers / clinics' },
            { section: 'Pharmacy ordering guide', audience: 'Pharmacies' },
            { section: 'Sponsor onboarding guide', audience: 'Sponsors' },
            { section: 'Sponsor reporting', audience: 'Sponsors' },
            { section: 'Supply-chain documentation', audience: 'Approved users' },
          ]}
        />
      </Section>

      <Section title="Approved language vs. avoid" eyebrow="Compliance-safe copy">
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
            { use: 'Licensed wholesale distribution', avoid: '"Best cannabis online"' },
            { use: 'Compliant supply pathways', avoid: 'Disease or therapeutic claims' },
            { use: 'Product provenance and documentation', avoid: 'Patient testimonials about product effects' },
            { use: 'For healthcare professionals only', avoid: 'Public-facing product comparisons' },
            { use: 'Reduce operational friction', avoid: '"Get your script filled fast"' },
            { use: 'Independent clinical decision-making', avoid: 'Anything implying inducement or referral fee' },
          ]}
        />
      </Section>

      <Section title="Lead magnets" eyebrow="What we offer in exchange for verification">
        <Subsection title="Pharmacy">
          <ul>
            <li>Pharmacy ordering guide (PDF)</li>
            <li>S8 record-keeping checklist</li>
            <li>Documentation pack overview</li>
            <li>Sample Product Trust Card</li>
          </ul>
        </Subsection>
        <Subsection title="Prescriber">
          <ul>
            <li>Provenance and supply-chain primer</li>
            <li>CoA interpretation guide</li>
            <li>TGO 93 explainer</li>
            <li>Closed-loop risk briefing</li>
          </ul>
        </Subsection>
        <Subsection title="Sponsor">
          <ul>
            <li>Sponsor onboarding pack</li>
            <li>Distribution model summary</li>
            <li>Reporting and reconciliation overview</li>
            <li>Documentation expectations checklist</li>
          </ul>
        </Subsection>
      </Section>

      <Section title="Footer compliance" eyebrow="Required everywhere">
        <Callout tone="compliance">
          Cannabis Warehouse Australia Pty Ltd operates within applicable
          Australian regulatory frameworks. Information on this website is
          provided for business and professional audiences only and does not
          constitute medical advice or product promotion to the general
          public.
        </Callout>
      </Section>
    </PageShell>
  );
}
