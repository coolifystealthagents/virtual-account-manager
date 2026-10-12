export const octoberDate = '2026-10-12';

type Section = { heading: string; body: string };

export type OctoberBlog = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  thumbnail: string;
  sections: Section[];
  checklist: string[];
};

export type OctoberResearch = {
  slug: string;
  title: string;
  cluster: string;
  excerpt: string;
  thumbnail: string;
  question: string;
  method: string;
  findings: string[];
  sections: Section[];
  sources: { label: string; url: string }[];
};

export const octoberBlog: OctoberBlog[] = [
  {
    slug: 'customer-commitment-register',
    title: 'Build a Customer Commitment Register That Teams Trust',
    category: 'Customer coordination',
    excerpt: 'Turn promises from calls, email, and chat into owned, dated, verifiable actions without turning every note into a commitment.',
    thumbnail: '/thumbnails/october-12/customer-commitment-register.svg',
    sections: [
      { heading: 'Separate a commitment from a conversation', body: 'A useful register starts with a strict entry rule: record only an agreed deliverable, decision, or follow-up. Context belongs in meeting notes. The register should show the customer-facing wording, accountable owner, due date, dependency, and evidence needed to close the item.' },
      { heading: 'Capture the source before paraphrasing', body: 'Link each row to the approved email, ticket, or meeting record. If the wording is ambiguous, mark the item for owner confirmation instead of sharpening it into a promise the team never made. That small restraint protects both the relationship and the delivery team.' },
      { heading: 'Close with evidence, not a status color', body: 'A green label is not completion evidence. Add the sent message, delivered file, accepted change, or named customer confirmation. During the weekly review, reopen anything whose evidence does not match the original commitment.' }
    ],
    checklist: ['Define the entry rule', 'Name one accountable owner', 'Record the originating evidence', 'Set a confirmation state', 'Archive closure evidence']
  },
  {
    slug: 'renewal-dependency-map',
    title: 'Map Renewal Dependencies Before the Calendar Gets Tight',
    category: 'Renewal operations',
    excerpt: 'Expose the legal, commercial, product, security, and customer inputs that can quietly stall a renewal.',
    thumbnail: '/thumbnails/october-12/renewal-dependency-map.svg',
    sections: [
      { heading: 'Work backward from the real decision date', body: 'The contract end date is rarely the only clock. Procurement cutoffs, security reviews, budget meetings, notice periods, and executive approvals create earlier decision points. Put those dates on one map and label which are verified versus assumed.' },
      { heading: 'Give every dependency a provider and receiver', body: 'A dependency becomes manageable when the person supplying an input and the person consuming it are both visible. Record the requested artifact, acceptable format, due date, and escalation owner. Avoid assigning a vague department when a named role can own the handoff.' },
      { heading: 'Review uncertainty separately from lateness', body: 'An overdue task and an unknown requirement need different responses. Track unconfirmed dates, missing decision criteria, and unresolved customer process questions in an uncertainty lane so the account lead can resolve them before execution begins.' }
    ],
    checklist: ['Confirm notice terms', 'List internal approvals', 'Map customer procurement gates', 'Flag assumptions', 'Schedule decision reviews']
  },
  {
    slug: 'multi-threaded-stakeholder-map',
    title: 'Create a Multi-Threaded Stakeholder Map Without Guesswork',
    category: 'Relationship records',
    excerpt: 'Document influence, responsibilities, preferences, and open questions while keeping unsupported relationship claims out of the record.',
    thumbnail: '/thumbnails/october-12/multi-threaded-stakeholder-map.svg',
    sections: [
      { heading: 'Record observable roles first', body: 'Start with facts the team can verify: meeting participation, stated responsibilities, approval authority, requested outcomes, and communication preferences. Labels such as champion or detractor should require an owner, a date, and specific evidence.' },
      { heading: 'Map coverage around customer work', body: 'Coverage is stronger when contacts connect to active decisions rather than a target contact count. For each critical workflow, show who supplies context, who evaluates options, who approves, and who needs the outcome communicated.' },
      { heading: 'Treat the map as time-bound', body: 'Responsibilities change during reorganizations and leave. Add a reviewed date and an uncertainty marker to every important relationship. A monthly verification pass can retire stale assumptions without erasing the historical record.' }
    ],
    checklist: ['Use verified role evidence', 'Connect contacts to decisions', 'Mark unknown authority', 'Date every review', 'Keep historical changes']
  },
  {
    slug: 'executive-business-review-evidence-pack',
    title: 'Prepare an Executive Business Review Evidence Pack',
    category: 'Executive reviews',
    excerpt: 'Build a concise review packet that distinguishes verified facts, customer statements, internal interpretations, and decisions required.',
    thumbnail: '/thumbnails/october-12/executive-business-review-evidence-pack.svg',
    sections: [
      { heading: 'Design the pack around decisions', body: 'Begin with the two or three decisions the meeting must enable. Each page should support one decision with a source, owner, observation period, and clear limitation. Attractive slides cannot compensate for an undefined decision.' },
      { heading: 'Label evidence by origin', body: 'Separate customer-provided statements, product usage records, support history, contract facts, and internal commentary. When definitions differ across systems, state the discrepancy instead of blending the numbers into a false sense of precision.' },
      { heading: 'Create a controlled follow-up lane', body: 'Capture meeting outcomes as proposed, approved, or pending. Assign only approved actions, then connect each action to the commitment register. Sensitive commercial positions stay with the authorized account leader.' }
    ],
    checklist: ['Name decisions required', 'Cite every material claim', 'Reconcile metric definitions', 'Pre-brief accountable leaders', 'Log approved outcomes']
  },
  {
    slug: 'customer-request-triage-lanes',
    title: 'Design Customer Request Triage Lanes With Clear Boundaries',
    category: 'Request coordination',
    excerpt: 'Route requests by risk, authority, and information needed instead of relying on whoever notices the inbox first.',
    thumbnail: '/thumbnails/october-12/customer-request-triage-lanes.svg',
    sections: [
      { heading: 'Classify before assigning', body: 'Use a small set of observable attributes: request type, affected product or service, urgency evidence, data sensitivity, contractual relevance, and decision authority. The coordinator applies the taxonomy but does not make legal, security, or commercial judgments.' },
      { heading: 'Publish acceptance criteria for each lane', body: 'A request is ready for a lane only when required context is present. Define what the receiving team needs, where files may be stored, and which missing details return the request for clarification. This prevents repeated transfers that look like progress.' },
      { heading: 'Measure handoffs as well as closure', body: 'Track time to first qualified owner, clarification loops, reopened requests, and unresolved dependencies. Closure speed alone can reward premature answers. Review a small sample of completed items to confirm that the stated resolution matches the evidence.' }
    ],
    checklist: ['Define request classes', 'Set sensitive-data rules', 'Publish lane criteria', 'Name escalation owners', 'Audit reopened work']
  },
  {
    slug: 'account-risk-signal-log',
    title: 'Maintain an Account Risk Signal Log Without Scoring Theater',
    category: 'Risk coordination',
    excerpt: 'Capture concrete changes, competing explanations, and owner decisions without disguising opinion as a predictive health score.',
    thumbnail: '/thumbnails/october-12/account-risk-signal-log.svg',
    sections: [
      { heading: 'Describe the change, not the conclusion', body: 'A useful entry states what changed, when it changed, the source, and the comparison point. Reduced attendance, an unresolved support issue, or a new procurement step is evidence to investigate; none is automatically proof of churn risk.' },
      { heading: 'Require an alternative explanation', body: 'Before escalating, record at least one plausible competing interpretation and the evidence that would distinguish it. This habit reduces confirmation bias and gives the account owner a focused verification question.' },
      { heading: 'Expire signals deliberately', body: 'Every signal needs a review date and disposition: confirmed concern, resolved condition, monitoring item, or invalid observation. Leaving old warnings open makes the log noisy and weakens attention when a new material issue appears.' }
    ],
    checklist: ['Capture the baseline', 'Link the evidence', 'State uncertainty', 'Assign verification', 'Close or renew each signal']
  },
  {
    slug: 'customer-decision-history',
    title: 'Keep a Customer Decision History That Survives Handoffs',
    category: 'Account continuity',
    excerpt: 'Preserve what was decided, by whom, under which constraints, and what would justify revisiting it.',
    thumbnail: '/thumbnails/october-12/customer-decision-history.svg',
    sections: [
      { heading: 'Write the decision as a complete statement', body: 'Record the chosen option, decision owner, effective date, scope, and source. A note such as discussed pricing is not a decision. Include options explicitly rejected only when the record supports that conclusion.' },
      { heading: 'Preserve conditions and tradeoffs', body: 'A decision often depends on budget, timeline, staffing, security, or product constraints. Capture those conditions so a future account manager can distinguish an enduring preference from a temporary compromise.' },
      { heading: 'Link later changes instead of overwriting', body: 'When a decision changes, create a new entry that references the earlier one. The resulting chain shows why the team acted as it did and prevents an outdated screenshot from becoming the apparent source of truth.' }
    ],
    checklist: ['Name the decision owner', 'State scope and date', 'Record constraints', 'Link source evidence', 'Append revisions']
  },
  {
    slug: 'account-handoff-reconstruction',
    title: 'Reconstruct an Account Before Accepting a Handoff',
    category: 'Account continuity',
    excerpt: 'Use a structured evidence pass to separate current obligations from stale notes and undocumented assumptions.',
    thumbnail: '/thumbnails/october-12/account-handoff-reconstruction.svg',
    sections: [
      { heading: 'Establish the authoritative record set', body: 'List the contract record, current order details, open support work, approved account plan, recent meeting notes, and active commitment register. Record conflicts between sources rather than choosing the most convenient version.' },
      { heading: 'Build a dated open-loop inventory', body: 'Extract unresolved promises, customer questions, internal dependencies, renewal gates, and scheduled meetings. Each loop needs a source and a provisional owner. Unknown ownership should remain visible until an accountable leader assigns it.' },
      { heading: 'Validate with focused questions', body: 'Use the evidence gaps to create a short handoff interview. Ask about exceptions, sensitive relationships, unofficial workarounds, and pending decisions. After the meeting, circulate a factual summary for correction instead of treating memory as final proof.' }
    ],
    checklist: ['Inventory authoritative systems', 'Reconcile conflicting dates', 'List open commitments', 'Interview for exceptions', 'Confirm the new owner']
  },
  {
    slug: 'voice-of-customer-evidence-ledger',
    title: 'Turn Voice-of-Customer Notes Into an Evidence Ledger',
    category: 'Customer insight',
    excerpt: 'Make feedback traceable enough for product and service teams to evaluate without stripping away context.',
    thumbnail: '/thumbnails/october-12/voice-of-customer-evidence-ledger.svg',
    sections: [
      { heading: 'Store the observation at the right grain', body: 'One ledger entry should represent one distinct need, friction point, request, or positive outcome. Preserve the customer wording when permitted, but remove unnecessary personal data and link to the controlled source record.' },
      { heading: 'Code themes without erasing nuance', body: 'A theme tag helps aggregation, while context fields explain the workflow, user type, product area, and consequence. Keep the raw observation separate from the account team interpretation so later reviewers can challenge the coding.' },
      { heading: 'Close the feedback loop honestly', body: 'Record whether feedback was acknowledged, routed, evaluated, planned, declined, or still open. Do not imply a roadmap commitment. Customer-facing follow-up should use language approved by the responsible product or service owner.' }
    ],
    checklist: ['Set collection consent rules', 'Keep source context', 'Separate fact from interpretation', 'Route to a named owner', 'Record disposition']
  },
  {
    slug: 'account-contact-change-protocol',
    title: 'Run an Account Contact Change Protocol',
    category: 'Relationship continuity',
    excerpt: 'Respond to stakeholder departures and role changes with verification, access hygiene, and a respectful continuity plan.',
    thumbnail: '/thumbnails/october-12/account-contact-change-protocol.svg',
    sections: [
      { heading: 'Verify the change through an approved channel', body: 'A bounced email or social update may be a clue, not confirmation. Follow the organization’s approved process to verify the change, note the effective date, and avoid disclosing account details to an unverified replacement.' },
      { heading: 'Update access and communication routes', body: 'Review distribution lists, recurring invitations, shared workspaces, escalation trees, and approval paths. Route access changes to authorized administrators and retain an auditable record of what was changed and why.' },
      { heading: 'Rebuild context with the new owner', body: 'Prepare a concise factual brief covering active objectives, decisions, commitments, and open questions. Ask the new contact to confirm priorities rather than assuming that the predecessor’s preferences still apply.' }
    ],
    checklist: ['Verify the role change', 'Protect account information', 'Update communication lists', 'Review approval authority', 'Confirm new priorities']
  },
  {
    slug: 'service-credit-coordination-workflow',
    title: 'Coordinate Service Credit Requests Without Overstepping Authority',
    category: 'Commercial coordination',
    excerpt: 'Collect the right evidence, preserve contractual context, and route decisions without promising an outcome.',
    thumbnail: '/thumbnails/october-12/service-credit-coordination-workflow.svg',
    sections: [
      { heading: 'Open a fact record before discussing remedy', body: 'Capture the customer request, affected service, time window, incident references, communications, and requested resolution. Label unverified statements clearly. The coordinator assembles evidence but does not interpret contract rights.' },
      { heading: 'Route facts to the authorized reviewers', body: 'Legal, finance, service, and commercial owners may each have a defined role. Use a decision packet with source links, conflicting facts, deadlines, and approval requirements so reviewers do not have to reconstruct the case from email.' },
      { heading: 'Communicate only the approved decision', body: 'Track draft, reviewed, approved, and sent states separately. If review takes time, send an approved process update rather than implying eligibility or value. Store the final communication alongside the decision record.' }
    ],
    checklist: ['Capture the exact request', 'Link incident evidence', 'Identify contract owner', 'Track approvals', 'Archive final communication']
  },
  {
    slug: 'portfolio-attention-queue',
    title: 'Build a Portfolio Attention Queue From Verifiable Triggers',
    category: 'Portfolio operations',
    excerpt: 'Prioritize account review using dated triggers, capacity limits, and owner judgment instead of an unexplained composite score.',
    thumbnail: '/thumbnails/october-12/portfolio-attention-queue.svg',
    sections: [
      { heading: 'Choose triggers that point to work', body: 'Good triggers lead to a reviewable action: a renewal gate approaching, an executive meeting due, an unresolved commitment, a stakeholder change, or a service exception. Document the source and freshness rule for each trigger.' },
      { heading: 'Separate urgency from importance', body: 'Use two fields rather than one magic priority number. Urgency reflects time constraints; importance reflects potential relationship or operational consequence. Account leaders make the final tradeoff when the fields conflict.' },
      { heading: 'Cap work in progress', body: 'A queue cannot create capacity. Set a review limit for each cycle and record deferred items with a reason and next review date. Audit whether the queue repeatedly favors easily measured work over material but less structured customer needs.' }
    ],
    checklist: ['Define trigger evidence', 'Set freshness windows', 'Separate urgency and importance', 'Limit active reviews', 'Audit deferred items']
  }
];

const commonSources = [
  { label: 'NIST Cybersecurity Framework 2.0', url: 'https://www.nist.gov/cyberframework' },
  { label: 'NIST Privacy Framework', url: 'https://www.nist.gov/privacy-framework' },
  { label: 'CISA Cybersecurity Performance Goals', url: 'https://www.cisa.gov/cybersecurity-performance-goals' },
  { label: 'FTC Protecting Personal Information guide', url: 'https://www.ftc.gov/business-guidance/resources/protecting-personal-information-guide-business' },
  { label: 'FTC Data Breach Response guide', url: 'https://www.ftc.gov/business-guidance/resources/data-breach-response-guide-business' },
  { label: 'SBA Manage Your Business', url: 'https://www.sba.gov/business-guide/manage-your-business' },
  { label: 'BLS Customer Service Representatives', url: 'https://www.bls.gov/ooh/office-and-administrative-support/customer-service-representatives.htm' },
  { label: 'U.S. Census Annual Business Survey', url: 'https://www.census.gov/programs-surveys/abs.html' },
  { label: 'SEC Cybersecurity Risk Management rules', url: 'https://www.sec.gov/newsroom/press-releases/2023-139' },
  { label: 'GSA Plain Language guidance', url: 'https://www.plainlanguage.gov/guidelines/' }
];

export const octoberResearch: OctoberResearch[] = [
  {
    slug: 'renewal-readiness-evidence-model',
    title: 'A Renewal Readiness Evidence Model for Account Portfolios',
    cluster: 'Renewal operations research',
    excerpt: 'A reproducible framework for testing whether a renewal record is decision-ready without predicting the customer outcome.',
    thumbnail: '/thumbnails/october-12/renewal-readiness-evidence-model.svg',
    question: 'Which observable records show that a renewal can enter accountable review?',
    method: 'The model scores evidence presence across five gates: terms, dates, stakeholders, dependencies, and decision routing. It does not score sentiment or forecast renewal probability.',
    findings: ['Readiness is a record-quality condition, not an outcome forecast.', 'Unknown dates should remain distinct from late tasks.', 'A complete packet preserves conflicts rather than silently resolving them.'],
    sections: [
      { heading: 'Unit of analysis', body: 'The unit is one renewal record at a stated review date. Reviewers examine the authoritative agreement, notice terms, customer process evidence, internal approval route, and open dependencies. Each item is marked present, missing, conflicting, or not applicable.' },
      { heading: 'Five evidence gates', body: 'The terms gate confirms current contractual references. The timing gate records verified milestones. The stakeholder gate identifies decision and communication roles. The dependency gate exposes prerequisite work. The routing gate shows who can approve each commercial decision.' },
      { heading: 'Interpretation boundaries', body: 'Passing all gates means a responsible owner can review the case with visible evidence. It does not mean the customer will renew, that timing will hold, or that any commercial position is advisable. Those conclusions remain with authorized leaders.' },
      { heading: 'Replication procedure', body: 'Freeze the record at the review date, apply the field definitions, retain links to source material, and have a second reviewer inspect disagreements. Publish missingness and exclusions with any aggregate result.' }
    ],
    sources: commonSources
  },
  {
    slug: 'stakeholder-continuity-control-study',
    title: 'Stakeholder Continuity Controls in Managed Accounts',
    cluster: 'Relationship continuity research',
    excerpt: 'A control-oriented study design for evaluating whether account knowledge can survive a stakeholder change.',
    thumbnail: '/thumbnails/october-12/stakeholder-continuity-control-study.svg',
    question: 'Can a new account owner reconstruct responsibilities and active decisions from approved records?',
    method: 'A blinded reviewer follows a fixed reconstruction protocol using role evidence, decision history, commitment records, access routes, and dated verification fields.',
    findings: ['Contact quantity is not a substitute for documented responsibility.', 'Decision conditions are essential handoff context.', 'Stale records need an explicit expiration state.'],
    sections: [
      { heading: 'Control definition', body: 'Continuity is defined as the ability to locate the current responsible roles, active decisions, customer commitments, communication route, and known uncertainties without relying on private memory. The test does not evaluate relationship strength.' },
      { heading: 'Review instrument', body: 'For each control, the reviewer records found, missing, contradictory, or inaccessible. The instrument also captures the age of the newest verification and whether personal data is limited to what the operating purpose requires.' },
      { heading: 'Failure analysis', body: 'Failures are grouped by absent evidence, ambiguous authority, stale information, access restriction, or conflicting systems. This taxonomy points to a repairable information control rather than assigning blame to the departing person.' },
      { heading: 'Limits and ethics', body: 'The protocol should use approved business records and minimum necessary personal information. It cannot infer influence, loyalty, or intent. Customer privacy, employment policy, and contractual rules govern collection and access.' }
    ],
    sources: [commonSources[1], commonSources[0], commonSources[2], commonSources[3], commonSources[4], commonSources[9], commonSources[5], commonSources[7], commonSources[6], commonSources[8]]
  },
  {
    slug: 'customer-request-aging-measurement',
    title: 'Measuring Customer Request Aging Without Hiding Handoffs',
    cluster: 'Request operations research',
    excerpt: 'A queue measurement design that distinguishes waiting, clarification, active work, decision review, and customer response.',
    thumbnail: '/thumbnails/october-12/customer-request-aging-measurement.svg',
    question: 'How can teams describe request age without collapsing unlike states into one misleading clock?',
    method: 'The protocol reconstructs state transitions from timestamps and samples source evidence for classifications, reopens, and closure claims.',
    findings: ['Total age should be reported beside time in each state.', 'Clarification loops reveal intake quality problems.', 'Closure requires evidence that matches the request.'],
    sections: [
      { heading: 'Clock and state definitions', body: 'The primary clock begins at accepted intake, while a separate received timestamp preserves earlier contact. States have mutually exclusive definitions and named entry events. Pauses are never deleted; they are labeled by reason and owner.' },
      { heading: 'Sampling design', body: 'Select records across request classes, channels, and age bands using a documented rule. Inspect the originating request, transition evidence, assignment trail, and closure artifact. Report records excluded because required evidence was unavailable.' },
      { heading: 'Metrics with context', body: 'Publish median and distribution bands for total age and state duration, plus clarification count, transfer count, reopen rate, and evidence-backed closure rate. Avoid combining request classes whose workflows or authority differ materially.' },
      { heading: 'Operational use', body: 'Use findings to improve intake criteria, routing ownership, decision capacity, and customer updates. Do not turn an observational baseline into a service promise or employee performance conclusion without a separately governed process.' }
    ],
    sources: [commonSources[9], commonSources[5], commonSources[6], commonSources[0], commonSources[1], commonSources[2], commonSources[3], commonSources[4], commonSources[7], commonSources[8]]
  },
  {
    slug: 'meeting-commitment-closure-audit',
    title: 'Auditing Closure Evidence for Customer Meeting Commitments',
    cluster: 'Commitment research',
    excerpt: 'A traceability method for following selected meeting commitments from approved notes to verifiable closure.',
    thumbnail: '/thumbnails/october-12/meeting-commitment-closure-audit.svg',
    question: 'Do meeting commitments retain their meaning, ownership, and evidence as they move into execution?',
    method: 'The audit traces a stratified sample through note approval, register entry, assignment, changes, delivery evidence, and customer-facing closeout.',
    findings: ['Approved wording is the baseline for traceability.', 'Owner changes need a visible transfer event.', 'A completed checkbox alone is insufficient closure evidence.'],
    sections: [
      { heading: 'Population and selection', body: 'Define the population as commitments from approved customer meeting records in a fixed period. Stratify by commitment type, materiality, and due-date band. Publish the selection rule so the sample cannot favor clean cases.' },
      { heading: 'Trace fields', body: 'The trace captures source wording, accountable owner, due date, changes with approval, dependencies, delivery artifact, and customer communication. Reviewers flag semantic drift when the delivered item differs from the recorded promise.' },
      { heading: 'Exception taxonomy', body: 'Classify exceptions as missing source, ambiguous language, unassigned ownership, undocumented change, inaccessible evidence, incomplete delivery, or unsupported closure. A case can carry more than one exception.' },
      { heading: 'Responsible reporting', body: 'Report counts and examples with sensitive details removed. The audit evaluates the control path, not an individual’s intent. Remediation should strengthen approval, handoff, and evidence practices.' }
    ],
    sources: [commonSources[3], commonSources[9], commonSources[0], commonSources[1], commonSources[2], commonSources[4], commonSources[5], commonSources[6], commonSources[7], commonSources[8]]
  },
  {
    slug: 'portfolio-segmentation-governance-review',
    title: 'A Governance Review for Account Portfolio Segmentation',
    cluster: 'Portfolio governance research',
    excerpt: 'A review framework for testing whether segmentation rules are explainable, current, and connected to actual service choices.',
    thumbnail: '/thumbnails/october-12/portfolio-segmentation-governance-review.svg',
    question: 'Can the team explain why an account is in a segment and which governed operating choice follows?',
    method: 'The review inspects rule definitions, data lineage, exceptions, refresh cadence, access controls, and downstream actions across a dated account sample.',
    findings: ['A segment needs an explicit operating purpose.', 'Manual exceptions require owners and expiration dates.', 'Missing data should not silently become a low-priority classification.'],
    sections: [
      { heading: 'Purpose and rule inventory', body: 'Document the decision each segment informs, the eligible population, field definitions, thresholds, exclusions, and accountable owner. Retire labels that do not change any governed workflow.' },
      { heading: 'Data lineage test', body: 'Trace each material input to its source, transformation, refresh time, and access boundary. Sample accounts near thresholds and records with missing values. Record whether reviewers can reproduce the assigned segment.' },
      { heading: 'Exception governance', body: 'Inspect overrides for stated reason, approving role, supporting evidence, effective date, and expiration. Compare exception patterns across the portfolio to identify rules that repeatedly fail to represent the intended operating distinction.' },
      { heading: 'Fairness and limitations', body: 'Segmentation can concentrate attention and shape customer experience. Review proxy risks, missingness, and disparate effects with qualified owners. This framework documents controls; it does not certify fairness or recommend commercial treatment.' }
    ],
    sources: [commonSources[7], commonSources[0], commonSources[1], commonSources[2], commonSources[3], commonSources[4], commonSources[5], commonSources[6], commonSources[8], commonSources[9]]
  }
];
