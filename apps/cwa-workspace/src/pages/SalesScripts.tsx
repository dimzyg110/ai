import { PageShell } from '../components/PageShell';
import { Section } from '../components/Section';
import { Callout } from '../components/Callout';
import { Toggle } from '../components/Toggle';
import { DataTable } from '../components/DataTable';
import { findPage } from '../lib/pages';

const meta = findPage('sales-scripts')!;

export default function SalesScripts() {
  return (
    <PageShell meta={meta}>
      <Callout tone="info" title="How to use this page">
        These are reference scripts, not templates to copy verbatim. Use them
        to maintain consistent positioning across cold outreach, warm intros,
        recovery and reactivation. Every script should be tailored to the
        stakeholder's education and trust maturity.
      </Callout>

      <Section title="Cold outbound — net new" eyebrow="Sequence 1">
        <Toggle title="Email 1 — Pattern interrupt" defaultOpen meta="Subject: This isn't a product pitch">
          <p><strong>Subject options</strong></p>
          <ul>
            <li>You don't need another supplier</li>
            <li>This isn't a product pitch</li>
          </ul>
          <p><strong>Body</strong></p>
          <p>
            Hi {`{{First Name}}`},<br />
            <br />
            This isn't a product pitch.<br />
            <br />
            Most pharmacies and brands we speak to don't have a product
            problem — they have a supply and workflow problem. Too many
            touchpoints, unclear stock, inconsistent fulfilment.<br />
            <br />
            CWA was built to remove that layer of friction. We sit between
            product, pharmacy and prescriber as a licensed distribution layer
            — simplifying ordering, fulfilment, and access.<br />
            <br />
            If this is even partially relevant, happy to show you how it works
            in practice.<br />
            <br />
            Best,<br />
            Dima
          </p>
          <p><strong>CTA:</strong> Worth a quick look?</p>
        </Toggle>
        <Toggle title="Email 2 — Insight" meta="Subject: Where supply breaks down">
          <p>
            Hi {`{{First Name}}`},<br />
            <br />
            Quick insight from what we're seeing: most breakdowns in medicinal
            cannabis supply aren't clinical — they're operational. Fragmented
            suppliers, poor visibility, inconsistent delivery.<br />
            <br />
            CWA standardises that layer into one system. Not more choice —
            cleaner execution.<br />
            <br />
            If useful, I can walk you through how partners are structuring
            this.<br />
            <br />
            Best,<br />
            Dima
          </p>
          <p><strong>CTA:</strong> Open to seeing it?</p>
        </Toggle>
        <Toggle title="Email 3 — Offer" meta="Subject: Simple way to evaluate this">
          <p>
            Hi {`{{First Name}}`},<br />
            <br />
            If helpful, we can run a very simple evaluation: current ordering
            flow, where friction exists, and what it looks like through CWA.
            No obligation — just clarity.<br />
            <br />
            Best,<br />
            Dima
          </p>
          <p><strong>CTA:</strong> Want me to map that with you?</p>
        </Toggle>
      </Section>

      <Section title="Warm intro / referral" eyebrow="Sequence 2">
        <Toggle title="Email 1 — Context-led" defaultOpen meta="Subject: Intro via {{Referrer}}">
          <p>
            Hi {`{{First Name}}`},<br />
            <br />
            {`{{Referrer}}`} suggested we connect. They mentioned you're
            active in the medicinal cannabis space, so thought it made sense
            to reach out.<br />
            <br />
            CWA operates as a licensed distribution layer supporting pharmacy
            ordering, fulfilment and market access pathways. The goal is
            simple — reduce operational friction and make supply easier to
            run.<br />
            <br />
            If useful, happy to share a quick overview tailored to how you're
            currently operating.<br />
            <br />
            Best,<br />
            Dima
          </p>
          <p><strong>CTA:</strong> Open to a short intro?</p>
        </Toggle>
        <Toggle title="Email 2 — Tailored relevance" meta="Subject: Based on your setup">
          <p>
            Hi {`{{First Name}}`},<br />
            <br />
            Based on what {`{{Referrer}}`} mentioned, a couple of areas where
            we typically help:<br />
          </p>
          <ul>
            <li>consolidating supplier relationships</li>
            <li>improving order visibility</li>
            <li>stabilising fulfilment timelines</li>
          </ul>
          <p>Not a major system change — more a simplification layer.</p>
        </Toggle>
      </Section>

      <Section title="Re-engagement (lapsed clients)" eyebrow="Sequence 3">
        <Toggle title="Email 1 — Neutral reset" defaultOpen meta="Subject: Should we reconnect?">
          <p>
            Hi {`{{First Name}}`},<br />
            <br />
            It's been a while since you last ordered through CWA, so I wanted
            to check in.<br />
            <br />
            No assumptions on our end — just keen to understand whether
            timing changed, priorities shifted, or there was something in the
            experience we should address.<br />
            <br />
            We've continued refining operations, fulfilment and platform
            workflows since then.<br />
            <br />
            Best,<br />
            Dima
          </p>
        </Toggle>
        <Toggle title="Email 2 — Value reframe" meta="Subject: What's changed since you last used CWA">
          <ul>
            <li>improved fulfilment consistency</li>
            <li>clearer order visibility</li>
            <li>tighter operational workflows</li>
          </ul>
          <p>
            The focus has been reducing friction and making the system more
            predictable. If previous experience was a factor in pausing, it
            may be worth revisiting.
          </p>
        </Toggle>
      </Section>

      <Section title="Recovery (previous issues)" eyebrow="Sequence 4">
        <Toggle title="Email 1 — Direct acknowledgement" meta="Subject: We should address this properly">
          <p>
            Hi {`{{First Name}}`},<br />
            <br />
            I wanted to reach out directly regarding your previous experience
            with CWA. If there were issues that impacted ordering or
            fulfilment, that's on us to address properly.<br />
            <br />
            We've been actively tightening operational workflows, fulfilment
            reliability, and visibility across orders.<br />
            <br />
            I'd value the opportunity to understand exactly what didn't work
            from your perspective.<br />
            <br />
            Best,<br />
            Dima
          </p>
        </Toggle>
        <Toggle title="Email 2 — Rebuild trust" meta="Subject: If we fixed the issue, would you revisit?">
          <p>
            Simple question: if the issues you experienced were resolved,
            would you consider using CWA again? If yes — we'll prioritise
            fixing the exact gaps that mattered. If no — still valuable for
            us to understand why.
          </p>
        </Toggle>
      </Section>

      <Section title="High-frequency clients who stopped" eyebrow="Sequence 5">
        <Toggle title="Email 1 — Performance gap" meta="Subject: Noticed a drop-off">
          <p>
            We noticed you were ordering consistently through CWA and then
            activity dropped off. Usually that signals one of two things —
            something changed operationally, or something didn't meet
            expectations.
          </p>
          <p>You were exactly the type of partner the platform is designed for.</p>
        </Toggle>
        <Toggle title="Email 2 — Win-back (non-discount)" meta="Subject: Let's reset this properly">
          <ul>
            <li>review previous friction points</li>
            <li>map your current ordering needs</li>
            <li>ensure the workflow actually fits how you operate now</li>
          </ul>
          <p>No pressure to resume — just a clean reassessment.</p>
        </Toggle>
      </Section>

      <Section title="Light reactivation" eyebrow="Sequence 6">
        <Toggle title="Single touch" meta="Subject: Still relevant?">
          <p>
            Hi {`{{First Name}}`},<br />
            <br />
            Quick one — is medicinal cannabis supply still something you're
            actively working on at the moment?<br />
            <br />
            If yes, happy to reconnect. If not, I'll leave it with you for now.<br />
            <br />
            Best,<br />
            Dima
          </p>
        </Toggle>
      </Section>

      <Section title="Pharmacy acquisition" eyebrow="Sequence A">
        <Toggle title="Email 1 — Intro / problem-solution">
          <p>
            We work with pharmacies that want a more reliable, compliant way
            to access medicinal cannabis products without dealing with
            fragmented supplier relationships, unclear stock visibility, or
            unnecessary ordering friction. CWA acts as a licensed
            distribution layer connecting pharmacies to a curated product
            range, streamlined ordering, and dependable fulfilment.
          </p>
        </Toggle>
        <Toggle title="Email 2 — Operational clarity">
          <ul>
            <li>browse a compliant catalogue</li>
            <li>filter by relevant product attributes</li>
            <li>place orders through a structured portal</li>
            <li>receive fulfilment with clear status tracking</li>
          </ul>
        </Toggle>
        <Toggle title="Email 3 — Credibility / trust">
          <p>
            Infrastructure needs to be built for compliance, not adapted to
            it later. CWA is structured as a licensed medicinal cannabis
            distribution business designed around compliant handling,
            fulfilment and access workflows.
          </p>
        </Toggle>
        <Toggle title="Email 4 — Close the loop">
          <p>
            If improving medicinal cannabis ordering, fulfilment and product
            access for your pharmacy is relevant this quarter, I'd be glad to
            connect. If not, no issue at all — happy to leave this with you
            and reconnect later.
          </p>
        </Toggle>
      </Section>

      <Section title="Sponsor / brand acquisition" eyebrow="Sequence B">
        <Toggle title="Email 1 — Market entry angle">
          <p>
            We work with medicinal cannabis brands and sponsors that want to
            enter or scale in the Australian clinical market without having
            to build the full local distribution layer themselves.
          </p>
        </Toggle>
        <Toggle title="Email 2 — Commercial model">
          <ul>
            <li>inventory warehoused in a compliant environment</li>
            <li>structured inbound and outbound flows</li>
            <li>transaction-based pricing rather than margin-led</li>
          </ul>
        </Toggle>
        <Toggle title="Email 3 — Access + execution">
          <p>
            Distribution is only useful if it creates access. CWA is designed
            around compliant inventory flow, pharmacy fulfilment, connected
            market access pathways and scalable operating support.
          </p>
        </Toggle>
        <Toggle title="Email 4 — Close the loop">
          <p>
            If Australian distribution and market access are active
            priorities, I'd be glad to connect. If timing isn't right, happy
            to leave this with you.
          </p>
        </Toggle>
      </Section>

      <Section title="Discovery question bank" eyebrow="Universal">
        <DataTable
          columns={[
            { key: 'theme', header: 'Theme', width: '28%' },
            { key: 'q', header: 'Question' },
          ]}
          rows={[
            { theme: 'Current setup', q: 'Walk me through how supply works for you today.' },
            { theme: 'Friction', q: 'Where does the current process most often break down?' },
            { theme: 'Documentation', q: 'What documentation do you receive with each order?' },
            { theme: 'Trust', q: 'What would make you confident enough to add a new supplier?' },
            { theme: 'Ethical posture', q: 'Are you carrying any inherited closed-loop or inducement-driven arrangements you want to clean up?' },
            { theme: 'Decision', q: 'Who else needs to be involved in a decision like this?' },
            { theme: 'Time', q: 'If we could solve [X], what would change in the next 90 days?' },
          ]}
        />
      </Section>
    </PageShell>
  );
}
