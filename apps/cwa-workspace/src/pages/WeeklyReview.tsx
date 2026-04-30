import { PageShell } from '../components/PageShell';
import { Section } from '../components/Section';
import { Callout } from '../components/Callout';
import { DataTable } from '../components/DataTable';
import { findPage } from '../lib/pages';

const meta = findPage('weekly-review')!;

export default function WeeklyReview() {
  return (
    <PageShell meta={meta}>
      <Callout tone="info" title="Why this exists">
        Weekly review is the cadence that holds the trust-led model together.
        Without it, pipelines drift, education stalls, and trust barriers
        accumulate quietly. 60–90 minutes once a week, same time, same agenda.
      </Callout>

      <Section title="Standing agenda" eyebrow="60–90 min">
        <DataTable
          columns={[
            { key: 't', header: 'Time', width: '100px' },
            { key: 'topic', header: 'Topic' },
            { key: 'output', header: 'Output' },
          ]}
          rows={[
            { t: '0–10', topic: 'Pharmacy pipeline — new leads, access pending, first orders, at-risk.', output: 'Named owner + next action for each.' },
            { t: '10–20', topic: 'Sponsor pipeline — discovery, documentation, activation, blockers.', output: 'Named owner + next action.' },
            { t: '20–35', topic: 'Prescriber education — engagement, provenance enquiries, fulfilment discussions.', output: 'Education maturity stage updates.' },
            { t: '35–45', topic: 'Trust barriers — high severity first; invoice / documentation / ethical concerns.', output: 'Escalation list + due dates.' },
            { t: '45–55', topic: 'Product readiness — Trust Cards in flight, red flags, sponsor responsiveness.', output: 'Activation gate decisions.' },
            { t: '55–65', topic: 'Website performance — qualified leads, audience-page conversion, friction.', output: 'Action list for web / sales.' },
            { t: '65–75', topic: 'Compliance queue — anything blocked, anything publishing this week.', output: 'Approval / rejection decisions.' },
            { t: '75–90', topic: 'Strategic — what is moving us toward the trust moat? What is not?', output: 'Two-sentence summary in Notion.' },
          ]}
        />
      </Section>

      <Section title="Pre-meeting checklist" eyebrow="Before review starts">
        <ul>
          <li>Pharmacy pipeline up to date (stage + next action + last contacted).</li>
          <li>Sponsor pipeline up to date.</li>
          <li>Prescriber education engagement updated for the week.</li>
          <li>Trust Barrier Register reviewed by owner.</li>
          <li>Product Trust Card statuses current.</li>
          <li>KPI Dashboard refreshed.</li>
          <li>Compliance queue items flagged for decision.</li>
        </ul>
      </Section>

      <Section title="Standard questions to answer">
        <ul>
          <li>What pharmacy moved one stage forward this week?</li>
          <li>What pharmacy went backwards or stalled — why?</li>
          <li>Which prescriber moved up an education or trust maturity stage?</li>
          <li>What trust barrier was resolved, and what new one was logged?</li>
          <li>Which product reached "Ready for Portal" or "Active" this week?</li>
          <li>Where did the website generate qualified demand we haven't followed up on?</li>
          <li>What did we publish this week that compliance approved?</li>
          <li>What's the single biggest unblock-needed for next week?</li>
        </ul>
      </Section>

      <Section title="Decisions log" eyebrow="What gets recorded">
        <DataTable
          columns={[
            { key: 'f', header: 'Field' },
            { key: 'd', header: 'Description' },
          ]}
          rows={[
            { f: 'Decision', d: 'Short statement of what was decided.' },
            { f: 'Owner', d: 'Person responsible for execution.' },
            { f: 'Due date', d: 'When it must be done.' },
            { f: 'Type', d: 'Commercial / Operational / Compliance / Strategic.' },
            { f: 'Stakeholder / product', d: 'Relation to CRM or Trust Card if applicable.' },
            { f: 'Status', d: 'Open / Done / Blocked / Cancelled.' },
            { f: 'Outcome note', d: 'One sentence — what happened.' },
          ]}
        />
      </Section>

      <Section title="Monthly close-out" eyebrow="Last review of the month">
        <ul>
          <li>Roll up KPIs vs. targets — note the three biggest gaps.</li>
          <li>Refresh strategic moat assessment (education and trust maturity distribution).</li>
          <li>Review sponsor reporting delivery.</li>
          <li>Review compliance queue throughput.</li>
          <li>Set next month's commercial focus and update the Executive Dashboard.</li>
        </ul>
      </Section>
    </PageShell>
  );
}
