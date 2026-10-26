import type { October13Research } from './october13';
export const october26ResearchDate='2026-10-26';
type VamResearch = October13Research & { date: string };
export const october26Research: VamResearch[] = [
  {
    "slug": "vam-aged-backlog-evidence",
    "title": "How Does Evidence Quality Change Across an Aged Virtual Account Management Backlog?",
    "cluster": "virtual account management",
    "excerpt": "A protocol for measuring missing source, owner, and destination evidence in aged virtual account management backlog items.",
    "thumbnail": "/daily26/virtualaccountmanager/vam-aged-backlog-evidence.webp",
    "question": "How does evidence quality change across an aged virtual account management backlog, and which missing inputs account for the oldest unresolved items?",
    "method": "Review one declared virtual account management workflow per case, preserve the source and owner, and report limitations beside the finding.",
    "findings": [
      "How does evidence quality change across an aged virtual account management backlog, and which missing inputs account for the oldest unresolved items? The scope is the operational record for virtual account management, not the legal, financial, or clinical conclusion that may follow.",
      "The study is deliberately narrow. It reports what the record can show in a defined population and window. It does not claim an industry rate or a causal staffing effect.",
      "Items open at the start of a defined month and still open at the end, plus items closed during the month for comparison."
    ],
    "sections": [
      {
        "heading": "Research question and scope",
        "body": "How does evidence quality change across an aged virtual account management backlog, and which missing inputs account for the oldest unresolved items? The scope is the operational record held by the team, not the legal, financial, clinical, or employment conclusion that may follow.\n\nThe study is deliberately narrow. It asks what the record can show in a defined population and window, using a stated evidence standard. It does not estimate an industry rate or claim that one staffing model caused an outcome."
      },
      {
        "heading": "Population and unit of analysis",
        "body": "Items open at the start of a defined month and still open at the end, plus items closed during the month for comparison.\n\nThe unit is one backlog item at the review date. Keeping the unit explicit prevents linked events from being counted as independent cases. Record openings, additions, withdrawals, resolutions, and unresolved end-of-window cases."
      },
      {
        "heading": "Definitions and measures",
        "body": "Predefine the start event, stop event, pause rule, missing-evidence treatment, and the period and time zone. Measure share with a complete source trail, oldest items by missing input, and reopened items after backlog cleanup.\n\nA count needs its denominator and window before it becomes a measure. Publish the definitions with the result so two reports are not mistaken for comparable."
      },
      {
        "heading": "Evidence and data dictionary",
        "body": "Each case needs the request and received date, the governing source and version, the owner and state history, the missing input code, and the destination confirmation. Record the source, observation time, field, and reviewer.\n\nKeep missing, unavailable, and confirmed negative as separate codes. A blank and a verified no are different states. Preserve the version observed because a later export can overwrite a value that was present during review."
      },
      {
        "heading": "Sampling and collection",
        "body": "Select cases from a frozen population with a written rule. Include ordinary, exception, reopened, and withdrawn items.\n\nCollect on a fixed cadence and preserve the source link. A sample that only includes clean cases will overstate completeness and hide the reason codes the owner needs."
      },
      {
        "heading": "Reviewer independence",
        "body": "Two reviewers classify the same cases before discussion. Compare first-pass judgments and group differences by evidence, definition, authority, or calculation.\n\nAgreement is not accuracy. Two reviewers can agree on the same incomplete file. Follow agreement with a completeness check and a source spot-check."
      },
      {
        "heading": "What the evidence can support",
        "body": "The record can show field presence, source currency, named ownership, and where the virtual account management record is thin. It can support a missing-input triage and an owner-group review.\n\nIt cannot promise an outcome, a regulator's view, or a causal result. The protocol describes the record, not whether the underlying service was correct."
      },
      {
        "heading": "Limitations and error",
        "body": "Older items may have been created under a different template. A recent cleanup may have closed items without a destination check. The sample may overrepresent items that were easy to find.\n\nReport the window, volume, mix, and exclusions beside the result. A single period may not represent another. If the sample is too small to support a comparison, say so."
      },
      {
        "heading": "Sensitivity and alternatives",
        "body": "Rerun the count with a different pause rule and a different treatment of unresolved cases. If the direction changes, report the finding as fragile.\n\nName the plausible alternatives: volume, system change, policy change, or client mix. Do not choose the most convenient explanation without evidence."
      },
      {
        "heading": "Privacy, access, and retention",
        "body": "Collect the minimum fields. Use named accounts, role-based access, masked identifiers, and an approved location. Log access and set a disposal date.\n\nPublic records and internal-control guidance frame the evidence standard; they do not provide a result for this sample. The cited public sources frame method and context; they do not provide a result for this sample."
      },
      {
        "heading": "Operational use and reporting",
        "body": "Publish the case flow, definitions, counts, unresolved items, disagreement summary, and limits together. Separate observations, calculations, and owner judgments.\n\nTest one change on a later window. If the measure does not move, the cause is likely upstream in the source or the rule."
      },
      {
        "heading": "Governance and stopping",
        "body": "Name the protocol owner, data custodian, operational owner, and the reviewer who can pause the study. The operational owner is the account director.\n\nPause on unauthorized disclosure or an unverifiable source. Record what would reopen the conclusion: a system change, a new policy, a different mix, or a material volume shift."
      },
      {
        "heading": "Applying the protocol to virtual account management",
        "body": "The protocol is written for client account and customer success teams. It asks what the virtual account management record can show in a defined window, not whether a particular staffing model caused an outcome.\n\nUse the same evidence standard for ordinary cases, exceptions, reopened items, and withdrawn items. If a case cannot be reconstructed, mark the gap and the owner rather than filling it from memory."
      },
      {
        "heading": "Reporting checklist for the owner",
        "body": "Report the population, window, definitions, case flow, unresolved items, and limits together. Separate observations, calculations, and owner judgments.\n\nA count without a denominator is not a finding, and a percentage without a source is not evidence. Name the next review date and the owner who will decide whether the finding still applies."
      },
      {
        "heading": "Replication note for virtual account management",
        "body": "Keep the protocol, codebook, sample file, and open items in one place. A reviewer who did not run the first pass should be able to repeat the selection and classification.\n\nIf the sample cannot support a comparison, describe what a larger review would need. The next step can still be a targeted fix to the source, template, or ownership rule."
      },
      {
        "heading": "Additional consideration for virtual account management",
        "body": "Record the operational constraint that shaped the evidence: access, system, staffing, or a policy limit. This keeps a missing record from being mistaken for a missing control.\n\nReview the constraint with the owner before changing the measure. The record may be thin because the source is unavailable, not because the team ignored the process."
      }
    ],
    "sources": [
      {
        "label": "Project Management Institute Standards",
        "url": "https://www.pmi.org/standards"
      },
      {
        "label": "Association for Supply Chain Management",
        "url": "https://www.ascm.org/"
      },
      {
        "label": "FTC Advertising and Marketing Basics",
        "url": "https://www.ftc.gov/business-guidance/resources/advertising-marketing-basics"
      },
      {
        "label": "ICO Data Protection Guidance",
        "url": "https://ico.org.uk/for-organisations/"
      },
      {
        "label": "Internal Revenue Service",
        "url": "https://www.irs.gov/"
      },
      {
        "label": "U.S. General Services Administration",
        "url": "https://www.gsa.gov/"
      },
      {
        "label": "FTC Protecting Personal Information",
        "url": "https://www.ftc.gov/business-guidance/resources/protecting-personal-information-guide-business"
      },
      {
        "label": "FINRA Rule 4511",
        "url": "https://www.finra.org/rules-guidance/rulebooks/finra-rules/4511"
      },
      {
        "label": "SHRM Talent Acquisition",
        "url": "https://www.shrm.org/"
      },
      {
        "label": "OECD Employment",
        "url": "https://www.oecd.org/employment/"
      }
    ],
    "date": "2026-10-26"
  },
  {
    "slug": "vam-duplicate-request-rate",
    "title": "How Often Do Duplicate Requests Enter the Virtual Account Management Queue?",
    "cluster": "virtual account management",
    "excerpt": "A protocol for detecting repeated virtual account management requests across channels before they become separate cases.",
    "thumbnail": "/daily26/virtualaccountmanager/vam-duplicate-request-rate.webp",
    "question": "How often does the same virtual account management request enter the queue more than once, and which channels or missing keys make duplication more likely?",
    "method": "Review one declared virtual account management workflow per case, preserve the source and owner, and report limitations beside the finding.",
    "findings": [
      "How often does the same virtual account management request enter the queue more than once, and which channels or missing keys make duplication more likely? The scope is the operational record for virtual account management, not the legal, financial, or clinical conclusion that may follow.",
      "The study is deliberately narrow. It reports what the record can show in a defined population and window. It does not claim an industry rate or a causal staffing effect.",
      "Requests received during a defined month, including requests later merged or withdrawn."
    ],
    "sections": [
      {
        "heading": "Research question and scope",
        "body": "How often does the same virtual account management request enter the queue more than once, and which channels or missing keys make duplication more likely? The scope is the operational record held by the team, not the legal, financial, clinical, or employment conclusion that may follow.\n\nThe study is deliberately narrow. It asks what the record can show in a defined population and window, using a stated evidence standard. It does not estimate an industry rate or claim that one staffing model caused an outcome."
      },
      {
        "heading": "Population and unit of analysis",
        "body": "Requests received during a defined month, including requests later merged or withdrawn.\n\nThe unit is one request at intake, linked to a case key. Keeping the unit explicit prevents linked events from being counted as independent cases. Record openings, additions, withdrawals, resolutions, and unresolved end-of-window cases."
      },
      {
        "heading": "Definitions and measures",
        "body": "Predefine the start event, stop event, pause rule, missing-evidence treatment, and the period and time zone. Measure duplicate requests per 100 intake items, duplicate rate by channel, and merged cases reopened.\n\nA count needs its denominator and window before it becomes a measure. Publish the definitions with the result so two reports are not mistaken for comparable."
      },
      {
        "heading": "Evidence and data dictionary",
        "body": "Each case needs the requester and channel, the requested outcome, the account or item key, the source record, and the linked case and merge decision. Record the source, observation time, field, and reviewer.\n\nKeep missing, unavailable, and confirmed negative as separate codes. A blank and a verified no are different states. Preserve the version observed because a later export can overwrite a value that was present during review."
      },
      {
        "heading": "Sampling and collection",
        "body": "Select cases from a frozen population with a written rule. Include ordinary, exception, reopened, and withdrawn items.\n\nCollect on a fixed cadence and preserve the source link. A sample that only includes clean cases will overstate completeness and hide the reason codes the owner needs."
      },
      {
        "heading": "Reviewer independence",
        "body": "Two reviewers classify the same cases before discussion. Compare first-pass judgments and group differences by evidence, definition, authority, or calculation.\n\nAgreement is not accuracy. Two reviewers can agree on the same incomplete file. Follow agreement with a completeness check and a source spot-check."
      },
      {
        "heading": "What the evidence can support",
        "body": "The record can show field presence, source currency, named ownership, and where the virtual account management record is thin. It can support an intake search rule and a channel-specific key requirement.\n\nIt cannot promise an outcome, a regulator's view, or a causal result. The protocol measures duplication in the record; it does not decide which request should control."
      },
      {
        "heading": "Limitations and error",
        "body": "Two requesters may describe one outcome with different words. A missing account key can make a duplicate look new. A merge can hide a second requester's constraint.\n\nReport the window, volume, mix, and exclusions beside the result. A single period may not represent another. If the sample is too small to support a comparison, say so."
      },
      {
        "heading": "Sensitivity and alternatives",
        "body": "Rerun the count with a different pause rule and a different treatment of unresolved cases. If the direction changes, report the finding as fragile.\n\nName the plausible alternatives: volume, system change, policy change, or client mix. Do not choose the most convenient explanation without evidence."
      },
      {
        "heading": "Privacy, access, and retention",
        "body": "Collect the minimum fields. Use named accounts, role-based access, masked identifiers, and an approved location. Log access and set a disposal date.\n\nPublic guidance on records and consumer communication frames the documentation question, not a duplication benchmark. The cited public sources frame method and context; they do not provide a result for this sample."
      },
      {
        "heading": "Operational use and reporting",
        "body": "Publish the case flow, definitions, counts, unresolved items, disagreement summary, and limits together. Separate observations, calculations, and owner judgments.\n\nTest one change on a later window. If the measure does not move, the cause is likely upstream in the source or the rule."
      },
      {
        "heading": "Governance and stopping",
        "body": "Name the protocol owner, data custodian, operational owner, and the reviewer who can pause the study. The operational owner is the account director.\n\nPause on unauthorized disclosure or an unverifiable source. Record what would reopen the conclusion: a system change, a new policy, a different mix, or a material volume shift."
      },
      {
        "heading": "Applying the protocol to virtual account management",
        "body": "The protocol is written for client account and customer success teams. It asks what the virtual account management record can show in a defined window, not whether a particular staffing model caused an outcome.\n\nUse the same evidence standard for ordinary cases, exceptions, reopened items, and withdrawn items. If a case cannot be reconstructed, mark the gap and the owner rather than filling it from memory."
      },
      {
        "heading": "Reporting checklist for the owner",
        "body": "Report the population, window, definitions, case flow, unresolved items, and limits together. Separate observations, calculations, and owner judgments.\n\nA count without a denominator is not a finding, and a percentage without a source is not evidence. Name the next review date and the owner who will decide whether the finding still applies."
      },
      {
        "heading": "Replication note for virtual account management",
        "body": "Keep the protocol, codebook, sample file, and open items in one place. A reviewer who did not run the first pass should be able to repeat the selection and classification.\n\nIf the sample cannot support a comparison, describe what a larger review would need. The next step can still be a targeted fix to the source, template, or ownership rule."
      },
      {
        "heading": "Additional consideration for virtual account management",
        "body": "Record the operational constraint that shaped the evidence: access, system, staffing, or a policy limit. This keeps a missing record from being mistaken for a missing control.\n\nReview the constraint with the owner before changing the measure. The record may be thin because the source is unavailable, not because the team ignored the process."
      }
    ],
    "sources": [
      {
        "label": "Association for Supply Chain Management",
        "url": "https://www.ascm.org/"
      },
      {
        "label": "Project Management Institute Standards",
        "url": "https://www.pmi.org/standards"
      },
      {
        "label": "U.S. General Services Administration",
        "url": "https://www.gsa.gov/"
      },
      {
        "label": "FTC Protecting Personal Information",
        "url": "https://www.ftc.gov/business-guidance/resources/protecting-personal-information-guide-business"
      },
      {
        "label": "ICO Data Protection Guidance",
        "url": "https://ico.org.uk/for-organisations/"
      },
      {
        "label": "Internal Revenue Service",
        "url": "https://www.irs.gov/"
      },
      {
        "label": "FTC Advertising and Marketing Basics",
        "url": "https://www.ftc.gov/business-guidance/resources/advertising-marketing-basics"
      },
      {
        "label": "FTC Data Breach Response Guide",
        "url": "https://www.ftc.gov/business-guidance/resources/data-breach-response-guide-business"
      },
      {
        "label": "NAMI",
        "url": "https://www.nami.org/"
      },
      {
        "label": "SBA Business Guide",
        "url": "https://www.sba.gov/business-guide"
      }
    ],
    "date": "2026-10-26"
  },
  {
    "slug": "vam-role-change-continuity",
    "title": "Does Virtual Account Management Handover Quality Survive a Role Change?",
    "cluster": "virtual account management",
    "excerpt": "A protocol for measuring open work, commitments, and access continuity across a virtual account management role change.",
    "thumbnail": "/daily26/virtualaccountmanager/vam-role-change-continuity.webp",
    "question": "After a role change, can a new owner continue the open virtual account management work and commitments from the record alone?",
    "method": "Review one declared virtual account management workflow per case, preserve the source and owner, and report limitations beside the finding.",
    "findings": [
      "After a role change, can a new owner continue the open virtual account management work and commitments from the record alone? The scope is the operational record for virtual account management, not the legal, financial, or clinical conclusion that may follow.",
      "The study is deliberately narrow. It reports what the record can show in a defined population and window. It does not claim an industry rate or a causal staffing effect.",
      "Role changes during a defined quarter, including planned moves, leave, and turnover."
    ],
    "sections": [
      {
        "heading": "Research question and scope",
        "body": "After a role change, can a new owner continue the open virtual account management work and commitments from the record alone? The scope is the operational record held by the team, not the legal, financial, clinical, or employment conclusion that may follow.\n\nThe study is deliberately narrow. It asks what the record can show in a defined population and window, using a stated evidence standard. It does not estimate an industry rate or claim that one staffing model caused an outcome."
      },
      {
        "heading": "Population and unit of analysis",
        "body": "Role changes during a defined quarter, including planned moves, leave, and turnover.\n\nThe unit is one role-change event and the open items at transfer. Keeping the unit explicit prevents linked events from being counted as independent cases. Record openings, additions, withdrawals, resolutions, and unresolved end-of-window cases."
      },
      {
        "heading": "Definitions and measures",
        "body": "Predefine the start event, stop event, pause rule, missing-evidence treatment, and the period and time zone. Measure items with an incoming owner, commitments missed during transition, and access removed on schedule.\n\nA count needs its denominator and window before it becomes a measure. Publish the definitions with the result so two reports are not mistaken for comparable."
      },
      {
        "heading": "Evidence and data dictionary",
        "body": "Each case needs the handover pack, the open item list, the commitment record, the access list, and the first-week decision log. Record the source, observation time, field, and reviewer.\n\nKeep missing, unavailable, and confirmed negative as separate codes. A blank and a verified no are different states. Preserve the version observed because a later export can overwrite a value that was present during review."
      },
      {
        "heading": "Sampling and collection",
        "body": "Select cases from a frozen population with a written rule. Include ordinary, exception, reopened, and withdrawn items.\n\nCollect on a fixed cadence and preserve the source link. A sample that only includes clean cases will overstate completeness and hide the reason codes the owner needs."
      },
      {
        "heading": "Reviewer independence",
        "body": "Two reviewers classify the same cases before discussion. Compare first-pass judgments and group differences by evidence, definition, authority, or calculation.\n\nAgreement is not accuracy. Two reviewers can agree on the same incomplete file. Follow agreement with a completeness check and a source spot-check."
      },
      {
        "heading": "What the evidence can support",
        "body": "The record can show field presence, source currency, named ownership, and where the virtual account management record is thin. It can support a handover template and a first-week review.\n\nIt cannot promise an outcome, a regulator's view, or a causal result. The protocol measures continuity of the record, not the quality of the departing owner's work."
      },
      {
        "heading": "Limitations and error",
        "body": "A handover meeting may carry context that never reaches the record. A temporary owner may make permanent decisions. The incoming owner may not know which commitments are external.\n\nReport the window, volume, mix, and exclusions beside the result. A single period may not represent another. If the sample is too small to support a comparison, say so."
      },
      {
        "heading": "Sensitivity and alternatives",
        "body": "Rerun the count with a different pause rule and a different treatment of unresolved cases. If the direction changes, report the finding as fragile.\n\nName the plausible alternatives: volume, system change, policy change, or client mix. Do not choose the most convenient explanation without evidence."
      },
      {
        "heading": "Privacy, access, and retention",
        "body": "Collect the minimum fields. Use named accounts, role-based access, masked identifiers, and an approved location. Log access and set a disposal date.\n\nRecords management and internal-control guidance frame the handover standard. The cited public sources frame method and context; they do not provide a result for this sample."
      },
      {
        "heading": "Operational use and reporting",
        "body": "Publish the case flow, definitions, counts, unresolved items, disagreement summary, and limits together. Separate observations, calculations, and owner judgments.\n\nTest one change on a later window. If the measure does not move, the cause is likely upstream in the source or the rule."
      },
      {
        "heading": "Governance and stopping",
        "body": "Name the protocol owner, data custodian, operational owner, and the reviewer who can pause the study. The operational owner is the account director.\n\nPause on unauthorized disclosure or an unverifiable source. Record what would reopen the conclusion: a system change, a new policy, a different mix, or a material volume shift."
      },
      {
        "heading": "Applying the protocol to virtual account management",
        "body": "The protocol is written for client account and customer success teams. It asks what the virtual account management record can show in a defined window, not whether a particular staffing model caused an outcome.\n\nUse the same evidence standard for ordinary cases, exceptions, reopened items, and withdrawn items. If a case cannot be reconstructed, mark the gap and the owner rather than filling it from memory."
      },
      {
        "heading": "Reporting checklist for the owner",
        "body": "Report the population, window, definitions, case flow, unresolved items, and limits together. Separate observations, calculations, and owner judgments.\n\nA count without a denominator is not a finding, and a percentage without a source is not evidence. Name the next review date and the owner who will decide whether the finding still applies."
      },
      {
        "heading": "Replication note for virtual account management",
        "body": "Keep the protocol, codebook, sample file, and open items in one place. A reviewer who did not run the first pass should be able to repeat the selection and classification.\n\nIf the sample cannot support a comparison, describe what a larger review would need. The next step can still be a targeted fix to the source, template, or ownership rule."
      },
      {
        "heading": "Additional consideration for virtual account management",
        "body": "Record the operational constraint that shaped the evidence: access, system, staffing, or a policy limit. This keeps a missing record from being mistaken for a missing control.\n\nReview the constraint with the owner before changing the measure. The record may be thin because the source is unavailable, not because the team ignored the process."
      }
    ],
    "sources": [
      {
        "label": "Internal Revenue Service",
        "url": "https://www.irs.gov/"
      },
      {
        "label": "Project Management Institute Standards",
        "url": "https://www.pmi.org/standards"
      },
      {
        "label": "U.S. General Services Administration",
        "url": "https://www.gsa.gov/"
      },
      {
        "label": "FTC Protecting Personal Information",
        "url": "https://www.ftc.gov/business-guidance/resources/protecting-personal-information-guide-business"
      },
      {
        "label": "FTC Advertising and Marketing Basics",
        "url": "https://www.ftc.gov/business-guidance/resources/advertising-marketing-basics"
      },
      {
        "label": "ICO Data Protection Guidance",
        "url": "https://ico.org.uk/for-organisations/"
      },
      {
        "label": "Association for Supply Chain Management",
        "url": "https://www.ascm.org/"
      },
      {
        "label": "SBA Strengthen Your Cybersecurity",
        "url": "https://www.sba.gov/business-guide/manage-your-business/strengthen-your-cybersecurity"
      },
      {
        "label": "CISA Secure Our World",
        "url": "https://www.cisa.gov/secure-our-world"
      },
      {
        "label": "ICO Records Management",
        "url": "https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/accountability-and-governance/"
      }
    ],
    "date": "2026-10-26"
  },
  {
    "slug": "vam-document-expiry-risk",
    "title": "What Share of Virtual Account Management Documents Reach Expiry Without a Review?",
    "cluster": "virtual account management",
    "excerpt": "A protocol for measuring document expiry risk and renewal timeliness in virtual account management operations.",
    "thumbnail": "/daily26/virtualaccountmanager/vam-document-expiry-risk.webp",
    "question": "What share of virtual account management documents reach expiry without a recorded review, and which document types or owners account for the gap?",
    "method": "Review one declared virtual account management workflow per case, preserve the source and owner, and report limitations beside the finding.",
    "findings": [
      "What share of virtual account management documents reach expiry without a recorded review, and which document types or owners account for the gap? The scope is the operational record for virtual account management, not the legal, financial, or clinical conclusion that may follow.",
      "The study is deliberately narrow. It reports what the record can show in a defined population and window. It does not claim an industry rate or a causal staffing effect.",
      "Documents with an expiry date in a defined quarter, including renewed, expired, and missing records."
    ],
    "sections": [
      {
        "heading": "Research question and scope",
        "body": "What share of virtual account management documents reach expiry without a recorded review, and which document types or owners account for the gap? The scope is the operational record held by the team, not the legal, financial, clinical, or employment conclusion that may follow.\n\nThe study is deliberately narrow. It asks what the record can show in a defined population and window, using a stated evidence standard. It does not estimate an industry rate or claim that one staffing model caused an outcome."
      },
      {
        "heading": "Population and unit of analysis",
        "body": "Documents with an expiry date in a defined quarter, including renewed, expired, and missing records.\n\nThe unit is one document and its expiry date. Keeping the unit explicit prevents linked events from being counted as independent cases. Record openings, additions, withdrawals, resolutions, and unresolved end-of-window cases."
      },
      {
        "heading": "Definitions and measures",
        "body": "Predefine the start event, stop event, pause rule, missing-evidence treatment, and the period and time zone. Measure documents reviewed before expiry, renewals started before the lead time, and process failures after expiry.\n\nA count needs its denominator and window before it becomes a measure. Publish the definitions with the result so two reports are not mistaken for comparable."
      },
      {
        "heading": "Evidence and data dictionary",
        "body": "Each case needs the document type and identifier, the issue and expiry dates, the source and version, the renewal request, and the destination confirmation. Record the source, observation time, field, and reviewer.\n\nKeep missing, unavailable, and confirmed negative as separate codes. A blank and a verified no are different states. Preserve the version observed because a later export can overwrite a value that was present during review."
      },
      {
        "heading": "Sampling and collection",
        "body": "Select cases from a frozen population with a written rule. Include ordinary, exception, reopened, and withdrawn items.\n\nCollect on a fixed cadence and preserve the source link. A sample that only includes clean cases will overstate completeness and hide the reason codes the owner needs."
      },
      {
        "heading": "Reviewer independence",
        "body": "Two reviewers classify the same cases before discussion. Compare first-pass judgments and group differences by evidence, definition, authority, or calculation.\n\nAgreement is not accuracy. Two reviewers can agree on the same incomplete file. Follow agreement with a completeness check and a source spot-check."
      },
      {
        "heading": "What the evidence can support",
        "body": "The record can show field presence, source currency, named ownership, and where the virtual account management record is thin. It can support a 30-day expiry watch and a lead-time rule by document type.\n\nIt cannot promise an outcome, a regulator's view, or a causal result. The protocol measures the review record, not whether a regulator would accept the document."
      },
      {
        "heading": "Limitations and error",
        "body": "A document may be renewed without updating the date field. A grace period may hide a late review. Documents without a structured date cannot be sampled.\n\nReport the window, volume, mix, and exclusions beside the result. A single period may not represent another. If the sample is too small to support a comparison, say so."
      },
      {
        "heading": "Sensitivity and alternatives",
        "body": "Rerun the count with a different pause rule and a different treatment of unresolved cases. If the direction changes, report the finding as fragile.\n\nName the plausible alternatives: volume, system change, policy change, or client mix. Do not choose the most convenient explanation without evidence."
      },
      {
        "heading": "Privacy, access, and retention",
        "body": "Collect the minimum fields. Use named accounts, role-based access, masked identifiers, and an approved location. Log access and set a disposal date.\n\nPublic recordkeeping and risk guidance frame the expiry question, not a compliance conclusion. The cited public sources frame method and context; they do not provide a result for this sample."
      },
      {
        "heading": "Operational use and reporting",
        "body": "Publish the case flow, definitions, counts, unresolved items, disagreement summary, and limits together. Separate observations, calculations, and owner judgments.\n\nTest one change on a later window. If the measure does not move, the cause is likely upstream in the source or the rule."
      },
      {
        "heading": "Governance and stopping",
        "body": "Name the protocol owner, data custodian, operational owner, and the reviewer who can pause the study. The operational owner is the account director.\n\nPause on unauthorized disclosure or an unverifiable source. Record what would reopen the conclusion: a system change, a new policy, a different mix, or a material volume shift."
      },
      {
        "heading": "Applying the protocol to virtual account management",
        "body": "The protocol is written for client account and customer success teams. It asks what the virtual account management record can show in a defined window, not whether a particular staffing model caused an outcome.\n\nUse the same evidence standard for ordinary cases, exceptions, reopened items, and withdrawn items. If a case cannot be reconstructed, mark the gap and the owner rather than filling it from memory."
      },
      {
        "heading": "Reporting checklist for the owner",
        "body": "Report the population, window, definitions, case flow, unresolved items, and limits together. Separate observations, calculations, and owner judgments.\n\nA count without a denominator is not a finding, and a percentage without a source is not evidence. Name the next review date and the owner who will decide whether the finding still applies."
      },
      {
        "heading": "Replication note for virtual account management",
        "body": "Keep the protocol, codebook, sample file, and open items in one place. A reviewer who did not run the first pass should be able to repeat the selection and classification.\n\nIf the sample cannot support a comparison, describe what a larger review would need. The next step can still be a targeted fix to the source, template, or ownership rule."
      },
      {
        "heading": "Additional consideration for virtual account management",
        "body": "Record the operational constraint that shaped the evidence: access, system, staffing, or a policy limit. This keeps a missing record from being mistaken for a missing control.\n\nReview the constraint with the owner before changing the measure. The record may be thin because the source is unavailable, not because the team ignored the process."
      }
    ],
    "sources": [
      {
        "label": "FTC Protecting Personal Information",
        "url": "https://www.ftc.gov/business-guidance/resources/protecting-personal-information-guide-business"
      },
      {
        "label": "Project Management Institute Standards",
        "url": "https://www.pmi.org/standards"
      },
      {
        "label": "Internal Revenue Service",
        "url": "https://www.irs.gov/"
      },
      {
        "label": "U.S. General Services Administration",
        "url": "https://www.gsa.gov/"
      },
      {
        "label": "ICO Data Protection Guidance",
        "url": "https://ico.org.uk/for-organisations/"
      },
      {
        "label": "Association for Supply Chain Management",
        "url": "https://www.ascm.org/"
      },
      {
        "label": "FTC Advertising and Marketing Basics",
        "url": "https://www.ftc.gov/business-guidance/resources/advertising-marketing-basics"
      },
      {
        "label": "International Labour Organization Data",
        "url": "https://www.ilo.org/data"
      },
      {
        "label": "ISO 31000 Risk Management",
        "url": "https://www.iso.org/iso-31000-risk-management.html"
      },
      {
        "label": "GAO Assessing Data Reliability",
        "url": "https://www.gao.gov/products/gao-20-283g"
      }
    ],
    "date": "2026-10-26"
  },
  {
    "slug": "vam-shared-inbox-coverage",
    "title": "Who Owns the Shared Virtual Account Management Inbox at First Response?",
    "cluster": "virtual account management",
    "excerpt": "A protocol for measuring first-responder coverage and duplicate answers in a shared virtual account management inbox.",
    "thumbnail": "/daily26/virtualaccountmanager/vam-shared-inbox-coverage.webp",
    "question": "At first response, is every virtual account management inbox message claimed by one responder with a named decision owner?",
    "method": "Review one declared virtual account management workflow per case, preserve the source and owner, and report limitations beside the finding.",
    "findings": [
      "At first response, is every virtual account management inbox message claimed by one responder with a named decision owner? The scope is the operational record for virtual account management, not the legal, financial, or clinical conclusion that may follow.",
      "The study is deliberately narrow. It reports what the record can show in a defined population and window. It does not claim an industry rate or a causal staffing effect.",
      "Messages received during a defined week, including answered, unanswered, and reassigned messages."
    ],
    "sections": [
      {
        "heading": "Research question and scope",
        "body": "At first response, is every virtual account management inbox message claimed by one responder with a named decision owner? The scope is the operational record held by the team, not the legal, financial, clinical, or employment conclusion that may follow.\n\nThe study is deliberately narrow. It asks what the record can show in a defined population and window, using a stated evidence standard. It does not estimate an industry rate or claim that one staffing model caused an outcome."
      },
      {
        "heading": "Population and unit of analysis",
        "body": "Messages received during a defined week, including answered, unanswered, and reassigned messages.\n\nThe unit is one inbound message and its first claim. Keeping the unit explicit prevents linked events from being counted as independent cases. Record openings, additions, withdrawals, resolutions, and unresolved end-of-window cases."
      },
      {
        "heading": "Definitions and measures",
        "body": "Predefine the start event, stop event, pause rule, missing-evidence treatment, and the period and time zone. Measure messages claimed within target, messages with two responders, and unanswered at shift end.\n\nA count needs its denominator and window before it becomes a measure. Publish the definitions with the result so two reports are not mistaken for comparable."
      },
      {
        "heading": "Evidence and data dictionary",
        "body": "Each case needs the message and timestamp, the lane and first responder, the claim or label, the response and owner, and the handoff or close state. Record the source, observation time, field, and reviewer.\n\nKeep missing, unavailable, and confirmed negative as separate codes. A blank and a verified no are different states. Preserve the version observed because a later export can overwrite a value that was present during review."
      },
      {
        "heading": "Sampling and collection",
        "body": "Select cases from a frozen population with a written rule. Include ordinary, exception, reopened, and withdrawn items.\n\nCollect on a fixed cadence and preserve the source link. A sample that only includes clean cases will overstate completeness and hide the reason codes the owner needs."
      },
      {
        "heading": "Reviewer independence",
        "body": "Two reviewers classify the same cases before discussion. Compare first-pass judgments and group differences by evidence, definition, authority, or calculation.\n\nAgreement is not accuracy. Two reviewers can agree on the same incomplete file. Follow agreement with a completeness check and a source spot-check."
      },
      {
        "heading": "What the evidence can support",
        "body": "The record can show field presence, source currency, named ownership, and where the virtual account management record is thin. It can support a lane ownership map and a shift-end coverage review.\n\nIt cannot promise an outcome, a regulator's view, or a causal result. The protocol measures the inbox record, not the quality of the customer answer."
      },
      {
        "heading": "Limitations and error",
        "body": "A read receipt may look like a claim. A responder may answer from a private thread. A shared label may be applied after the response.\n\nReport the window, volume, mix, and exclusions beside the result. A single period may not represent another. If the sample is too small to support a comparison, say so."
      },
      {
        "heading": "Sensitivity and alternatives",
        "body": "Rerun the count with a different pause rule and a different treatment of unresolved cases. If the direction changes, report the finding as fragile.\n\nName the plausible alternatives: volume, system change, policy change, or client mix. Do not choose the most convenient explanation without evidence."
      },
      {
        "heading": "Privacy, access, and retention",
        "body": "Collect the minimum fields. Use named accounts, role-based access, masked identifiers, and an approved location. Log access and set a disposal date.\n\nPublic service and records guidance frames the ownership question, not a staffing benchmark. The cited public sources frame method and context; they do not provide a result for this sample."
      },
      {
        "heading": "Operational use and reporting",
        "body": "Publish the case flow, definitions, counts, unresolved items, disagreement summary, and limits together. Separate observations, calculations, and owner judgments.\n\nTest one change on a later window. If the measure does not move, the cause is likely upstream in the source or the rule."
      },
      {
        "heading": "Governance and stopping",
        "body": "Name the protocol owner, data custodian, operational owner, and the reviewer who can pause the study. The operational owner is the account director.\n\nPause on unauthorized disclosure or an unverifiable source. Record what would reopen the conclusion: a system change, a new policy, a different mix, or a material volume shift."
      },
      {
        "heading": "Applying the protocol to virtual account management",
        "body": "The protocol is written for client account and customer success teams. It asks what the virtual account management record can show in a defined window, not whether a particular staffing model caused an outcome.\n\nUse the same evidence standard for ordinary cases, exceptions, reopened items, and withdrawn items. If a case cannot be reconstructed, mark the gap and the owner rather than filling it from memory."
      },
      {
        "heading": "Reporting checklist for the owner",
        "body": "Report the population, window, definitions, case flow, unresolved items, and limits together. Separate observations, calculations, and owner judgments.\n\nA count without a denominator is not a finding, and a percentage without a source is not evidence. Name the next review date and the owner who will decide whether the finding still applies."
      },
      {
        "heading": "Replication note for virtual account management",
        "body": "Keep the protocol, codebook, sample file, and open items in one place. A reviewer who did not run the first pass should be able to repeat the selection and classification.\n\nIf the sample cannot support a comparison, describe what a larger review would need. The next step can still be a targeted fix to the source, template, or ownership rule."
      },
      {
        "heading": "Additional consideration for virtual account management",
        "body": "Record the operational constraint that shaped the evidence: access, system, staffing, or a policy limit. This keeps a missing record from being mistaken for a missing control.\n\nReview the constraint with the owner before changing the measure. The record may be thin because the source is unavailable, not because the team ignored the process."
      }
    ],
    "sources": [
      {
        "label": "U.S. General Services Administration",
        "url": "https://www.gsa.gov/"
      },
      {
        "label": "Internal Revenue Service",
        "url": "https://www.irs.gov/"
      },
      {
        "label": "FTC Protecting Personal Information",
        "url": "https://www.ftc.gov/business-guidance/resources/protecting-personal-information-guide-business"
      },
      {
        "label": "Project Management Institute Standards",
        "url": "https://www.pmi.org/standards"
      },
      {
        "label": "ICO Data Protection Guidance",
        "url": "https://ico.org.uk/for-organisations/"
      },
      {
        "label": "Association for Supply Chain Management",
        "url": "https://www.ascm.org/"
      },
      {
        "label": "FTC Advertising and Marketing Basics",
        "url": "https://www.ftc.gov/business-guidance/resources/advertising-marketing-basics"
      },
      {
        "label": "CMS Medicare Learning Network",
        "url": "https://www.cms.gov/"
      },
      {
        "label": "NIST SP 800-53 Rev. 5",
        "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final"
      },
      {
        "label": "World Bank Philippines Overview",
        "url": "https://www.worldbank.org/en/country/philippines/overview"
      }
    ],
    "date": "2026-10-26"
  }
];
