import type { October13Research } from './october13';
export const october27ResearchDate='2026-10-27';
type VamResearch = October13Research & { date: string };

export const october27Research: VamResearch[] = [
  {
    "slug": "vam-escalation-wait",
    "title": "Where Does Virtual Account Management Escalation Time Go?",
    "cluster": "virtual account management",
    "excerpt": "A protocol separating owner wait, dependency wait, system delay, and rework in virtual account management escalations.",
    "thumbnail": "/daily27/virtualaccountmanager/vam-escalation-wait.webp",
    "question": "How much escalation time is spent waiting for an internal owner, an external dependency, a system action, or rework?",
    "method": "Review one declared virtual account management workflow per case, preserve the source and owner, and report limitations beside the finding.",
    "findings": [
      "A protocol separating owner wait, dependency wait, system delay, and rework in virtual account management escalations."
    ],
    "sections": [
      {
        "heading": "Research question and scope",
        "body": "How much escalation time is spent waiting for an internal owner, an external dependency, a system action, or rework? The scope is the operational record held by the team, not the legal, financial, clinical, or employment conclusion that may follow.\n\nThe study is deliberately narrow. It asks what the record can show in a defined population and window, using a stated evidence standard. It does not estimate an industry rate or claim that one staffing model caused an outcome."
      },
      {
        "heading": "Population and unit of analysis",
        "body": "Escalations opened during a defined month, including resolved, open, and reopened items.\n\nThe unit is one escalation and its state intervals. Keeping the unit explicit prevents linked events from being counted as independent cases. Record openings, additions, withdrawals, resolutions, and unresolved end-of-window cases."
      },
      {
        "heading": "Definitions and measures",
        "body": "Predefine the start event, stop event, pause rule, missing-evidence treatment, and the period and time zone. Measure median hours by wait reason, oldest open escalation, and share waiting on a dependency owner.\n\nA count needs its denominator and window before it becomes a measure. Publish the definitions with the result so two reports are not mistaken for comparable."
      },
      {
        "heading": "Evidence and data dictionary",
        "body": "Each case needs the issue and time raised, the dependency and owner, the state changes, the response target, and the resolution confirmation. Record the source, observation time, field, and reviewer.\n\nKeep missing, unavailable, and confirmed negative as separate codes. A blank and a verified no are different states. Preserve the version observed because a later export can overwrite a value that was present during review."
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
        "body": "The record can show field presence, source currency, named ownership, and where the virtual account management record is thin. It can support a dependency-specific response target and an escalation owner review.\n\nIt cannot promise an outcome, a regulator's view, or a causal result. The protocol describes the escalation record, not whether the resolution was technically correct."
      },
      {
        "heading": "Limitations and error",
        "body": "A state change may be logged after the fact. A dependency delay can be hidden inside owner wait. Small samples may miss the oldest cases.\n\nReport the window, volume, mix, and exclusions beside the result. A single period may not represent another. If the sample is too small to support a comparison, say so."
      },
      {
        "heading": "Sensitivity and alternatives",
        "body": "Rerun the count with a different pause rule and a different treatment of unresolved cases. If the direction changes, report the finding as fragile.\n\nName the plausible alternatives: volume, system change, policy change, or client mix. Do not choose the most convenient explanation without evidence."
      },
      {
        "heading": "Privacy, access, and retention",
        "body": "Collect the minimum fields. Use named accounts, role-based access, masked identifiers, and an approved location. Log access and set a disposal date.\n\nPublic service and records guidance frames the measurement question, not a benchmark. The cited public sources frame method and context; they do not provide a result for this sample."
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
        "label": "FTC Advertising and Marketing Basics",
        "url": "https://www.ftc.gov/business-guidance/resources/advertising-marketing-basics"
      },
      {
        "label": "ICO Data Protection Guidance",
        "url": "https://ico.org.uk/for-organisations/"
      },
      {
        "label": "Project Management Institute Standards",
        "url": "https://www.pmi.org/standards"
      },
      {
        "label": "Association for Supply Chain Management",
        "url": "https://www.ascm.org/"
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
        "label": "U.S. General Services Administration",
        "url": "https://www.gsa.gov/"
      },
      {
        "label": "SEC Investment Adviser Compliance",
        "url": "https://www.sec.gov/investment/investment-adviser-compliance"
      },
      {
        "label": "GAO Assessing Data Reliability",
        "url": "https://www.gao.gov/products/gao-20-283g"
      },
      {
        "label": "ISO 31000 Risk Management",
        "url": "https://www.iso.org/iso-31000-risk-management.html"
      }
    ],
    "date": "2026-10-27"
  },
  {
    "slug": "vam-vendor-cycle",
    "title": "How Complete Is the Virtual Account Management Vendor Onboarding Packet at First Review?",
    "cluster": "virtual account management",
    "excerpt": "A protocol measuring whether virtual account management vendor packets carry identity, insurance, security, access, and owner acceptance before work starts.",
    "thumbnail": "/daily27/virtualaccountmanager/vam-vendor-cycle.webp",
    "question": "What share of vendor onboarding packets are complete at first review, and which missing item delays the start?",
    "method": "Review one declared virtual account management workflow per case, preserve the source and owner, and report limitations beside the finding.",
    "findings": [
      "A protocol measuring whether virtual account management vendor packets carry identity, insurance, security, access, and owner acceptance before work starts."
    ],
    "sections": [
      {
        "heading": "Research question and scope",
        "body": "What share of vendor onboarding packets are complete at first review, and which missing item delays the start? The scope is the operational record held by the team, not the legal, financial, clinical, or employment conclusion that may follow.\n\nThe study is deliberately narrow. It asks what the record can show in a defined population and window, using a stated evidence standard. It does not estimate an industry rate or claim that one staffing model caused an outcome."
      },
      {
        "heading": "Population and unit of analysis",
        "body": "Vendors entering onboarding during a defined quarter, including withdrawn and delayed vendors.\n\nThe unit is one vendor packet at first review. Keeping the unit explicit prevents linked events from being counted as independent cases. Record openings, additions, withdrawals, resolutions, and unresolved end-of-window cases."
      },
      {
        "heading": "Definitions and measures",
        "body": "Predefine the start event, stop event, pause rule, missing-evidence treatment, and the period and time zone. Measure complete-at-first-review rate, returns by missing item, and days from packet start to owner acceptance.\n\nA count needs its denominator and window before it becomes a measure. Publish the definitions with the result so two reports are not mistaken for comparable."
      },
      {
        "heading": "Evidence and data dictionary",
        "body": "Each case needs the vendor and scope, the required documents, the security review, the access list, and the owner acceptance. Record the source, observation time, field, and reviewer.\n\nKeep missing, unavailable, and confirmed negative as separate codes. A blank and a verified no are different states. Preserve the version observed because a later export can overwrite a value that was present during review."
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
        "body": "The record can show field presence, source currency, named ownership, and where the virtual account management record is thin. It can support a packet completeness checklist and a start-date gate.\n\nIt cannot promise an outcome, a regulator's view, or a causal result. The protocol measures packet completeness, not whether the vendor should have been selected."
      },
      {
        "heading": "Limitations and error",
        "body": "A vendor may start work before the packet is complete. A document may be present but expired. The sample may overrepresent cooperative vendors.\n\nReport the window, volume, mix, and exclusions beside the result. A single period may not represent another. If the sample is too small to support a comparison, say so."
      },
      {
        "heading": "Sensitivity and alternatives",
        "body": "Rerun the count with a different pause rule and a different treatment of unresolved cases. If the direction changes, report the finding as fragile.\n\nName the plausible alternatives: volume, system change, policy change, or client mix. Do not choose the most convenient explanation without evidence."
      },
      {
        "heading": "Privacy, access, and retention",
        "body": "Collect the minimum fields. Use named accounts, role-based access, masked identifiers, and an approved location. Log access and set a disposal date.\n\nPublic procurement and records guidance frames the documentation question. The cited public sources frame method and context; they do not provide a result for this sample."
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
        "label": "ICO Data Protection Guidance",
        "url": "https://ico.org.uk/for-organisations/"
      },
      {
        "label": "Association for Supply Chain Management",
        "url": "https://www.ascm.org/"
      },
      {
        "label": "FTC Protecting Personal Information",
        "url": "https://www.ftc.gov/business-guidance/resources/protecting-personal-information-guide-business"
      },
      {
        "label": "Internal Revenue Service",
        "url": "https://www.irs.gov/"
      },
      {
        "label": "Project Management Institute Standards",
        "url": "https://www.pmi.org/standards"
      },
      {
        "label": "FTC Advertising and Marketing Basics",
        "url": "https://www.ftc.gov/business-guidance/resources/advertising-marketing-basics"
      },
      {
        "label": "U.S. General Services Administration",
        "url": "https://www.gsa.gov/"
      },
      {
        "label": "NIST AI Risk Management Framework",
        "url": "https://www.nist.gov/itl/ai-risk-management-framework"
      },
      {
        "label": "ICO Records Management",
        "url": "https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/accountability-and-governance/"
      },
      {
        "label": "American Bar Association",
        "url": "https://www.americanbar.org/"
      }
    ],
    "date": "2026-10-27"
  },
  {
    "slug": "vam-capacity-error",
    "title": "How Accurate Is Virtual Account Management Capacity Forecasting?",
    "cluster": "virtual account management",
    "excerpt": "A protocol comparing forecast demand and handling time with actual virtual account management queue performance.",
    "thumbnail": "/daily27/virtualaccountmanager/vam-capacity-error.webp",
    "question": "How far does forecast capacity differ from actual demand and handling time, and which work type drives the error?",
    "method": "Review one declared virtual account management workflow per case, preserve the source and owner, and report limitations beside the finding.",
    "findings": [
      "A protocol comparing forecast demand and handling time with actual virtual account management queue performance."
    ],
    "sections": [
      {
        "heading": "Research question and scope",
        "body": "How far does forecast capacity differ from actual demand and handling time, and which work type drives the error? The scope is the operational record held by the team, not the legal, financial, clinical, or employment conclusion that may follow.\n\nThe study is deliberately narrow. It asks what the record can show in a defined population and window, using a stated evidence standard. It does not estimate an industry rate or claim that one staffing model caused an outcome."
      },
      {
        "heading": "Population and unit of analysis",
        "body": "Forecast weeks in a defined quarter, including normal, seasonal, and disrupted weeks.\n\nThe unit is one work type and one forecast week. Keeping the unit explicit prevents linked events from being counted as independent cases. Record openings, additions, withdrawals, resolutions, and unresolved end-of-window cases."
      },
      {
        "heading": "Definitions and measures",
        "body": "Predefine the start event, stop event, pause rule, missing-evidence treatment, and the period and time zone. Measure absolute forecast error by work type, weeks with a capacity gap, and deferred items by priority.\n\nA count needs its denominator and window before it becomes a measure. Publish the definitions with the result so two reports are not mistaken for comparable."
      },
      {
        "heading": "Evidence and data dictionary",
        "body": "Each case needs the forecast and assumptions, the actual volume, the handling time, the blocked time, and the deferral decision. Record the source, observation time, field, and reviewer.\n\nKeep missing, unavailable, and confirmed negative as separate codes. A blank and a verified no are different states. Preserve the version observed because a later export can overwrite a value that was present during review."
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
        "body": "The record can show field presence, source currency, named ownership, and where the virtual account management record is thin. It can support a capacity review and a priority deferral rule.\n\nIt cannot promise an outcome, a regulator's view, or a causal result. The protocol measures forecast accuracy, not individual productivity."
      },
      {
        "heading": "Limitations and error",
        "body": "A new work type may have no history. Handling time may exclude rework. A seasonal week can distort a short comparison.\n\nReport the window, volume, mix, and exclusions beside the result. A single period may not represent another. If the sample is too small to support a comparison, say so."
      },
      {
        "heading": "Sensitivity and alternatives",
        "body": "Rerun the count with a different pause rule and a different treatment of unresolved cases. If the direction changes, report the finding as fragile.\n\nName the plausible alternatives: volume, system change, policy change, or client mix. Do not choose the most convenient explanation without evidence."
      },
      {
        "heading": "Privacy, access, and retention",
        "body": "Collect the minimum fields. Use named accounts, role-based access, masked identifiers, and an approved location. Log access and set a disposal date.\n\nOperations and workforce guidance frames the capacity question, not a staffing recommendation. The cited public sources frame method and context; they do not provide a result for this sample."
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
        "label": "Internal Revenue Service",
        "url": "https://www.irs.gov/"
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
        "label": "FTC Advertising and Marketing Basics",
        "url": "https://www.ftc.gov/business-guidance/resources/advertising-marketing-basics"
      },
      {
        "label": "FTC Protecting Personal Information",
        "url": "https://www.ftc.gov/business-guidance/resources/protecting-personal-information-guide-business"
      },
      {
        "label": "U.S. General Services Administration",
        "url": "https://www.gsa.gov/"
      },
      {
        "label": "American Bar Association",
        "url": "https://www.americanbar.org/"
      },
      {
        "label": "SEC Investment Adviser Compliance",
        "url": "https://www.sec.gov/investment/investment-adviser-compliance"
      },
      {
        "label": "HHS HIPAA Privacy Rule",
        "url": "https://www.hhs.gov/hipaa/for-professionals/privacy/index.html"
      }
    ],
    "date": "2026-10-27"
  },
  {
    "slug": "vam-cross-training-coverage",
    "title": "Does Cross-Training Cover the Virtual Account Management Queue?",
    "cluster": "virtual account management",
    "excerpt": "A protocol testing whether every virtual account management lane has a backup who can complete the task without help.",
    "thumbnail": "/daily27/virtualaccountmanager/vam-cross-training-coverage.webp",
    "question": "What share of critical virtual account management lanes have a tested backup, and which lanes remain single-person dependencies?",
    "method": "Review one declared virtual account management workflow per case, preserve the source and owner, and report limitations beside the finding.",
    "findings": [
      "A protocol testing whether every virtual account management lane has a backup who can complete the task without help."
    ],
    "sections": [
      {
        "heading": "Research question and scope",
        "body": "What share of critical virtual account management lanes have a tested backup, and which lanes remain single-person dependencies? The scope is the operational record held by the team, not the legal, financial, clinical, or employment conclusion that may follow.\n\nThe study is deliberately narrow. It asks what the record can show in a defined population and window, using a stated evidence standard. It does not estimate an industry rate or claim that one staffing model caused an outcome."
      },
      {
        "heading": "Population and unit of analysis",
        "body": "Critical queues and roles in a defined period, including leave and turnover events.\n\nThe unit is one lane and one backup test. Keeping the unit explicit prevents linked events from being counted as independent cases. Record openings, additions, withdrawals, resolutions, and unresolved end-of-window cases."
      },
      {
        "heading": "Definitions and measures",
        "body": "Predefine the start event, stop event, pause rule, missing-evidence treatment, and the period and time zone. Measure lanes with a tested backup, backup tasks completed without help, and single-person lanes.\n\nA count needs its denominator and window before it becomes a measure. Publish the definitions with the result so two reports are not mistaken for comparable."
      },
      {
        "heading": "Evidence and data dictionary",
        "body": "Each case needs the lane and task, the primary owner, the backup, the practice date, and the result and remaining questions. Record the source, observation time, field, and reviewer.\n\nKeep missing, unavailable, and confirmed negative as separate codes. A blank and a verified no are different states. Preserve the version observed because a later export can overwrite a value that was present during review."
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
        "body": "The record can show field presence, source currency, named ownership, and where the virtual account management record is thin. It can support a coverage map and a practice calendar.\n\nIt cannot promise an outcome, a regulator's view, or a causal result. The protocol measures task coverage, not overall performance."
      },
      {
        "heading": "Limitations and error",
        "body": "Access may exist without task competence. A practice task may be easier than production. A recent role change may invalidate the map.\n\nReport the window, volume, mix, and exclusions beside the result. A single period may not represent another. If the sample is too small to support a comparison, say so."
      },
      {
        "heading": "Sensitivity and alternatives",
        "body": "Rerun the count with a different pause rule and a different treatment of unresolved cases. If the direction changes, report the finding as fragile.\n\nName the plausible alternatives: volume, system change, policy change, or client mix. Do not choose the most convenient explanation without evidence."
      },
      {
        "heading": "Privacy, access, and retention",
        "body": "Collect the minimum fields. Use named accounts, role-based access, masked identifiers, and an approved location. Log access and set a disposal date.\n\nWorkforce and internal-control guidance frames the coverage question. The cited public sources frame method and context; they do not provide a result for this sample."
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
        "label": "U.S. General Services Administration",
        "url": "https://www.gsa.gov/"
      },
      {
        "label": "FTC Advertising and Marketing Basics",
        "url": "https://www.ftc.gov/business-guidance/resources/advertising-marketing-basics"
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
        "label": "ICO Data Protection Guidance",
        "url": "https://ico.org.uk/for-organisations/"
      },
      {
        "label": "Project Management Institute Standards",
        "url": "https://www.pmi.org/standards"
      },
      {
        "label": "W3C Web Accessibility Initiative",
        "url": "https://www.w3.org/WAI/"
      },
      {
        "label": "OECD Employment",
        "url": "https://www.oecd.org/employment/"
      },
      {
        "label": "NIST AI Risk Management Framework",
        "url": "https://www.nist.gov/itl/ai-risk-management-framework"
      }
    ],
    "date": "2026-10-27"
  },
  {
    "slug": "vam-retention-compliance",
    "title": "Do Virtual Account Management Records Follow the Retention Schedule?",
    "cluster": "virtual account management",
    "excerpt": "A protocol measuring whether virtual account management records are kept, reviewed, and disposed of according to a written schedule.",
    "thumbnail": "/daily27/virtualaccountmanager/vam-retention-compliance.webp",
    "question": "What share of sampled virtual account management records follow the retention schedule, and where do holds or backups change the expected outcome?",
    "method": "Review one declared virtual account management workflow per case, preserve the source and owner, and report limitations beside the finding.",
    "findings": [
      "A protocol measuring whether virtual account management records are kept, reviewed, and disposed of according to a written schedule."
    ],
    "sections": [
      {
        "heading": "Research question and scope",
        "body": "What share of sampled virtual account management records follow the retention schedule, and where do holds or backups change the expected outcome? The scope is the operational record held by the team, not the legal, financial, clinical, or employment conclusion that may follow.\n\nThe study is deliberately narrow. It asks what the record can show in a defined population and window, using a stated evidence standard. It does not estimate an industry rate or claim that one staffing model caused an outcome."
      },
      {
        "heading": "Population and unit of analysis",
        "body": "Records created or due for disposal in a defined quarter, including held and archived items.\n\nThe unit is one record class and one retention decision. Keeping the unit explicit prevents linked events from being counted as independent cases. Record openings, additions, withdrawals, resolutions, and unresolved end-of-window cases."
      },
      {
        "heading": "Definitions and measures",
        "body": "Predefine the start event, stop event, pause rule, missing-evidence treatment, and the period and time zone. Measure records disposed on schedule, records retained past schedule without a hold, and records with a verified disposal.\n\nA count needs its denominator and window before it becomes a measure. Publish the definitions with the result so two reports are not mistaken for comparable."
      },
      {
        "heading": "Evidence and data dictionary",
        "body": "Each case needs the record class and system, the retention basis, the hold status, the disposal decision, and the confirmation. Record the source, observation time, field, and reviewer.\n\nKeep missing, unavailable, and confirmed negative as separate codes. A blank and a verified no are different states. Preserve the version observed because a later export can overwrite a value that was present during review."
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
        "body": "The record can show field presence, source currency, named ownership, and where the virtual account management record is thin. It can support a retention schedule review and a disposal verification.\n\nIt cannot promise an outcome, a regulator's view, or a causal result. The protocol measures schedule compliance, not whether a specific legal hold was correct."
      },
      {
        "heading": "Limitations and error",
        "body": "A backup may retain a copy after primary disposal. A legal hold may be recorded outside the system. A record may be misclassified.\n\nReport the window, volume, mix, and exclusions beside the result. A single period may not represent another. If the sample is too small to support a comparison, say so."
      },
      {
        "heading": "Sensitivity and alternatives",
        "body": "Rerun the count with a different pause rule and a different treatment of unresolved cases. If the direction changes, report the finding as fragile.\n\nName the plausible alternatives: volume, system change, policy change, or client mix. Do not choose the most convenient explanation without evidence."
      },
      {
        "heading": "Privacy, access, and retention",
        "body": "Collect the minimum fields. Use named accounts, role-based access, masked identifiers, and an approved location. Log access and set a disposal date.\n\nPublic records-management guidance frames the retention question, not a legal conclusion. The cited public sources frame method and context; they do not provide a result for this sample."
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
        "label": "FTC Advertising and Marketing Basics",
        "url": "https://www.ftc.gov/business-guidance/resources/advertising-marketing-basics"
      },
      {
        "label": "Association for Supply Chain Management",
        "url": "https://www.ascm.org/"
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
        "label": "FTC Protecting Personal Information",
        "url": "https://www.ftc.gov/business-guidance/resources/protecting-personal-information-guide-business"
      },
      {
        "label": "Internal Revenue Service",
        "url": "https://www.irs.gov/"
      },
      {
        "label": "SEC Investment Adviser Compliance",
        "url": "https://www.sec.gov/investment/investment-adviser-compliance"
      },
      {
        "label": "SAMHSA",
        "url": "https://www.samhsa.gov/"
      },
      {
        "label": "NAPEO",
        "url": "https://www.napeo.org/"
      }
    ],
    "date": "2026-10-27"
  }
];
