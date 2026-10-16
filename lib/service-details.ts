export type ServiceDetail = {
  name: string;
  eyebrow: string;
  title: string;
  description: string;
  intro: string;
  need: string;
  steps: {title: string; body: string}[];
  deliverables: string[];
  boundary: string;
  faqs: {question: string; answer: string}[];
  cta: string;
};

export const serviceDetails: Record<string, ServiceDetail> = {
  'account-planning-support': {
    name: 'Account planning support', eyebrow: 'Structured account planning',
    title: 'Turn account strategy into a plan your team can use',
    description: 'Keep account plans, stakeholder maps, priorities, and follow-up actions current with structured virtual account planning support.',
    intro: 'Keep priorities, stakeholders, risks, opportunities, and next steps organized in one working account plan. We maintain the operating detail so your account owner can focus on judgment, relationships, and decisions.',
    need: 'Account plans lose value when they are updated only before a review. This service creates a repeatable maintenance rhythm for teams managing complex customer relationships, multiple stakeholders, or a growing book of business.',
    steps: [
      {title: 'Plan setup', body: 'Organize your approved template, source records, objectives, stakeholder details, and ownership rules.'},
      {title: 'Signal capture', body: 'Record approved updates from meetings, CRM activity, internal notes, and customer correspondence.'},
      {title: 'Plan maintenance', body: 'Refresh priorities, relationship maps, risks, open actions, and planning assumptions for owner review.'},
      {title: 'Review readiness', body: 'Prepare a current view of changes, overdue items, decisions needed, and unresolved questions.'}
    ],
    deliverables: ['Current account plans in your approved format', 'Stakeholder maps with roles, influence, and relationship notes', 'Action registers with owners, dates, and status', 'Risk and opportunity summaries for review', 'A visible change log and exception list'],
    boundary: 'Your account owner sets strategy, approves priorities, and decides how to engage each customer. Support staff organize approved information, maintain the plan, and surface gaps; they do not make commercial commitments or relationship decisions.',
    faqs: [
      {question: 'Can you work in our existing CRM or account-plan template?', answer: 'Yes. The workflow can follow your existing systems, fields, terminology, and access controls.'},
      {question: 'How often can plans be updated?', answer: 'The cadence can match your operating rhythm: after key meetings, weekly, monthly, or ahead of formal reviews.'},
      {question: 'Do you create the account strategy?', answer: 'No. Your authorized account leaders own strategy. We keep the facts, actions, and approved planning decisions organized and usable.'}
    ], cta: 'Make account plans easier to act on'
  },
  'renewal-coordination': {
    name: 'Renewal coordination', eyebrow: 'Renewal operations support',
    title: 'Keep every renewal milestone, owner, and dependency visible',
    description: 'Coordinate renewal timelines, approved materials, owners, dependencies, and escalation points without losing sight of the next milestone.',
    intro: 'Build a consistent renewal workflow around dates, approved materials, internal owners, and customer follow-up. We keep the process moving and surface gaps before they disappear into inboxes.',
    need: 'Renewals often involve account teams, finance, legal, product, and customer stakeholders. Coordination support gives each renewal a clear timeline and a shared operating record.',
    steps: [
      {title: 'Renewal intake', body: 'Capture contract dates, notice periods, account ownership, required inputs, and your approved process.'},
      {title: 'Timeline build', body: 'Map internal checkpoints, customer touchpoints, material deadlines, dependencies, and escalation dates.'},
      {title: 'Follow-through', body: 'Track approved outreach, collect status updates, prepare materials, and route missing inputs.'},
      {title: 'Exception review', body: 'Present upcoming milestones, stalled work, unresolved questions, and decisions needing attention.'}
    ],
    deliverables: ['Renewal calendar with milestone and notice dates', 'Owner and dependency tracker', 'Approved material and document checklist', 'Follow-up queue with status and next action', 'Exception summary for stalled workflows'],
    boundary: 'Your authorized team owns pricing, terms, negotiation, forecasts, and customer commitments. Support staff coordinate the approved workflow and prepare information; they do not negotiate or guarantee a renewal outcome.',
    faqs: [
      {question: 'How far ahead can renewal coordination begin?', answer: 'We follow the lead times in your process, whether the process starts several weeks or several months before renewal.'},
      {question: 'Can you coordinate across finance and legal?', answer: 'Yes, when those teams and escalation paths are part of the approved workflow. Their authorized owners still make legal, financial, and commercial decisions.'},
      {question: 'Does this replace a customer success manager?', answer: 'No. It gives account leaders a more reliable operating layer for milestones, materials, follow-up, and handoffs.'}
    ], cta: 'Bring structure to your renewal calendar'
  },
  'customer-meeting-support': {
    name: 'Customer meeting support', eyebrow: 'Before-and-after meeting support',
    title: 'Make customer meetings easier to prepare for and easier to act on',
    description: 'Prepare agendas, organize notes, document decisions, and track approved follow-up for customer meetings.',
    intro: 'Arrive with the right context, a focused agenda, and clear open questions. After the meeting, turn approved notes and decisions into accountable follow-up without adding another administrative burden.',
    need: 'Meeting value is often lost in scattered preparation and inconsistent follow-through. This service supports recurring check-ins, business reviews, onboarding calls, and escalation meetings.',
    steps: [
      {title: 'Context assembly', body: 'Gather approved account history, prior actions, current issues, milestones, and attendee details.'},
      {title: 'Agenda preparation', body: 'Draft an agenda, objectives, discussion prompts, and pre-read checklist for owner approval.'},
      {title: 'Record organization', body: 'Structure approved notes around decisions, commitments, questions, risks, and action owners.'},
      {title: 'Follow-up control', body: 'Prepare approved recap materials and maintain the action list through completion or escalation.'}
    ],
    deliverables: ['Meeting brief and approved agenda', 'Attendee and stakeholder context', 'Open-action and decision summary', 'Organized notes in your preferred format', 'Follow-up tracker with owners and due dates'],
    boundary: 'Your team leads the conversation, approves the agenda, confirms the meeting record, and owns every customer commitment. Support staff prepare and organize information; they do not speak for your business without authorization.',
    faqs: [
      {question: 'Can you support recurring customer meetings?', answer: 'Yes. A reusable preparation and follow-up workflow is especially useful for recurring meetings with a consistent format.'},
      {question: 'Will you attend or record meetings?', answer: 'That depends on the engagement, attendee consent, and your policies. The service can also work from client-provided notes and transcripts.'},
      {question: 'Can the recap go directly to the customer?', answer: 'Only through an approved send process. Your authorized owner reviews customer-facing messages and commitments first.'}
    ], cta: 'Build a better meeting follow-through rhythm'
  },
  'relationship-record-management': {
    name: 'Relationship record management', eyebrow: 'Reliable relationship context',
    title: 'Keep the customer context your team depends on',
    description: 'Keep customer contacts, stakeholder roles, preferences, interaction history, and relationship risks organized and current.',
    intro: 'Maintain clean stakeholder records, useful interaction history, communication preferences, and known relationship risks. Give account owners a dependable view before they reach out or make a decision.',
    need: 'Relationship knowledge becomes fragile when it lives in personal notes, inboxes, or one account owner’s memory. Preserve approved context through handoffs, growth, and role changes.',
    steps: [
      {title: 'Record standards', body: 'Define required fields, source rules, update triggers, data ownership, and access boundaries.'},
      {title: 'Profile maintenance', body: 'Organize approved contact details, roles, preferences, influence, history, and relationship notes.'},
      {title: 'Quality review', body: 'Identify duplicates, stale fields, missing context, conflicting records, and ownership gaps.'},
      {title: 'Change visibility', body: 'Route sensitive updates for review and keep a traceable record of approved changes.'}
    ],
    deliverables: ['Maintained stakeholder and contact profiles', 'Role, influence, and relationship maps', 'Structured interaction history', 'Data-quality and missing-information queue', 'Handoff-ready customer context summaries'],
    boundary: 'Your organization remains responsible for lawful basis, retention rules, privacy notices, and access decisions. Support staff work only with approved systems and escalate sensitive, disputed, or restricted information.',
    faqs: [
      {question: 'Can you clean up duplicate CRM records?', answer: 'Yes, within documented matching rules and review thresholds. Ambiguous merges and sensitive changes go to an authorized owner.'},
      {question: 'What relationship details can be maintained?', answer: 'Only information approved for business use, such as role, communication preference, interaction history, ownership, and relevant account context.'},
      {question: 'Can this support account handoffs?', answer: 'Yes. A structured record helps a new owner understand key contacts, recent interactions, open items, and known preferences.'}
    ], cta: 'Create a more dependable customer record'
  },
  'customer-request-coordination': {
    name: 'Customer request coordination', eyebrow: 'Request routing and follow-through',
    title: 'Give every customer request a clear owner and next step',
    description: 'Route customer requests, maintain ownership and status visibility, coordinate approved responses, and close the communication loop.',
    intro: 'Capture requests from approved channels, route them to the right team, track progress, and prepare status updates. Customers get a more consistent communication loop while specialists stay responsible for the answer.',
    need: 'Requests can cross support, billing, product, operations, and account teams. Coordination support creates one visible path from intake through response and closure.',
    steps: [
      {title: 'Request intake', body: 'Capture the request, customer context, urgency, source, attachments, and promised follow-up.'},
      {title: 'Classification and routing', body: 'Apply your categories and ownership rules, then route the item to the approved specialist.'},
      {title: 'Status coordination', body: 'Track dependencies, prompt owners, prepare approved updates, and escalate overdue items.'},
      {title: 'Closure check', body: 'Confirm the approved response was delivered and preserve open questions or follow-on actions.'}
    ],
    deliverables: ['Central request register with status and ownership', 'Categorized work queue and routing history', 'Internal follow-up and escalation log', 'Approved customer status-update drafts', 'Closure record with outstanding actions'],
    boundary: 'Subject-matter experts own technical, legal, financial, and policy answers. Support staff coordinate the workflow; they do not invent answers, override policies, or promise resolution times.',
    faqs: [
      {question: 'Which channels can feed the request queue?', answer: 'Approved sources can include shared inboxes, CRM records, forms, meeting notes, or support-system exports.'},
      {question: 'Is this a replacement for technical support?', answer: 'No. It complements specialist teams by maintaining ownership, context, status visibility, and customer follow-through.'},
      {question: 'What happens when a request is urgent or unclear?', answer: 'It follows your documented escalation path. An authorized owner decides priority, response, and any customer commitment.'}
    ], cta: 'Stop customer requests from falling between teams'
  },
  'portfolio-review-support': {
    name: 'Portfolio review support', eyebrow: 'Portfolio-level visibility',
    title: 'See where your customer portfolio needs attention',
    description: 'Prepare consistent customer portfolio views that help leaders compare priorities, risks, coverage gaps, and actions.',
    intro: 'Turn approved account data into a consistent review view across customers. Compare milestones, open actions, relationship coverage, risks, and exceptions so leaders can focus discussion where it matters most.',
    need: 'Leaders need more than a collection of account updates. This service creates a repeatable portfolio-review package for teams managing a shared book of business.',
    steps: [
      {title: 'Review design', body: 'Confirm portfolio scope, approved fields, definitions, reporting period, and decision questions.'},
      {title: 'Data assembly', body: 'Organize account updates into a consistent view and flag missing, stale, or conflicting inputs.'},
      {title: 'Exception analysis', body: 'Surface patterns in milestones, workload, relationship coverage, risks, and overdue actions.'},
      {title: 'Review package', body: 'Prepare the summary, account drill-downs, decision queue, and action register.'}
    ],
    deliverables: ['Standardized portfolio summary', 'Account-by-account review views', 'Priority and exception queue', 'Coverage and data-quality gaps', 'Leadership action register with owners'],
    boundary: 'Your leaders interpret the information, set priorities, and make staffing or commercial decisions. Support staff do not independently score customer health or predict outcomes without an approved methodology.',
    faqs: [
      {question: 'Can you use our existing health scores?', answer: 'Yes. We organize the review around your approved definitions, calculations, and presentation format.'},
      {question: 'How is this different from an account review?', answer: 'An account review examines one relationship in depth. A portfolio review applies consistent fields across many accounts.'},
      {question: 'Can you prepare monthly or quarterly reviews?', answer: 'Yes. The cadence can match your management rhythm with a repeatable intake deadline, quality check, and review package.'}
    ], cta: 'Make the next portfolio review more actionable'
  },
  'expansion-signal-support': {
    name: 'Expansion signal support', eyebrow: 'Opportunity signal coordination',
    title: 'Turn customer needs into qualified signals for review',
    description: 'Document customer needs, connect them to approved qualification criteria, and route expansion signals without promising outcomes.',
    intro: 'Capture credible needs and changes in customer context, organize the supporting evidence, and route qualified signals to the right commercial owner. Keep discovery visible without turning every mention into a sales claim.',
    need: 'Useful expansion signals are easy to lose in meeting notes and service conversations. A structured workflow separates observable customer needs from assumptions and makes ownership explicit.',
    steps: [
      {title: 'Signal capture', body: 'Record the customer statement, source, timing, context, and related account objective.'},
      {title: 'Qualification check', body: 'Apply your approved criteria and identify missing evidence or follow-up questions.'},
      {title: 'Owner routing', body: 'Send qualified signals to the authorized commercial owner with relevant context.'},
      {title: 'Disposition record', body: 'Track the owner’s decision, approved next step, and reason for deferral or closure.'}
    ],
    deliverables: ['Expansion signal register', 'Source and evidence summary', 'Qualification checklist', 'Commercial-owner review queue', 'Disposition and follow-up record'],
    boundary: 'Your commercial leaders decide whether an opportunity exists, what to offer, and how to engage. Support staff document and route signals; they do not forecast revenue, qualify buyers independently, or promise outcomes.',
    faqs: [
      {question: 'What counts as an expansion signal?', answer: 'Your process defines it. Examples may include an explicit new need, a change in scope, new stakeholders, or interest in an approved capability.'},
      {question: 'Does this replace sales discovery?', answer: 'No. It gives sales or account leaders organized context and evidence for their own discovery and qualification.'},
      {question: 'How are weak signals handled?', answer: 'They remain clearly labeled as unconfirmed, with missing evidence and an approved next step or closure reason.'}
    ], cta: 'Create a clearer path from signal to review'
  }
};
