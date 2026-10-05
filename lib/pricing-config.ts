// LIMBIZ Pricing Configuration - 50 States
// Source: LIMBIZ_Developer_Pricing_Config_50_States.json
// As of: 2026-09-25

export interface StateFeeConfig {
  code: string
  name: string
  baseline_initial_state_fee_usd: number
  baseline_is_final_checkout_amount: boolean
  show_notice_on_state_selection: boolean
  notice_en: string
  required_inputs_before_final_quote: string[]
  unresolved_outside_fee_may_apply: boolean
  official_source_url: string
  method_state_fee_usd?: Record<string, number>
  state_fee_formula?: {
    type: string
    per_member_usd: number
    min_usd: number
    max_usd: number
  }
}

export interface PackageConfig {
  name: string
  package_component_usd: number
  internal_limbiz_fee_pool_usd: number
  inherits: string | null
  additional_services: { id: string; label_en: string; term: string }[]
  replaces_inherited_service_ids?: Record<string, string>
}

export const packages: Record<string, PackageConfig> = {
  basic: {
    name: 'Basic',
    package_component_usd: 374,
    internal_limbiz_fee_pool_usd: 255,
    inherits: null,
    additional_services: [
      { id: 'business_names_domains', label_en: 'Business Names & Domains', term: 'included' },
      { id: 'llc_filing', label_en: 'LLC Filing', term: 'included' },
      { id: 'ein', label_en: 'EIN Registration', term: 'included' },
      { id: 'duns', label_en: 'D-U-N-S Application', term: 'included' },
      { id: 'dba', label_en: 'DBA / Fictitious Name', term: 'included' },
      { id: 'address', label_en: 'Business Address', term: 'included' },
      { id: 'agent', label_en: 'Registered Agent (1 Year)', term: 'included' },
      { id: 'email', label_en: 'Business Email Creation', term: 'included' },
      { id: 'ebook', label_en: '28 Essential Steps Book (Digital Version)', term: 'complimentary' },
      { id: 'basic_consult', label_en: '45-Minute Consultation (One Time)', term: 'complimentary' },
    ],
  },
  standard: {
    name: 'Standard',
    package_component_usd: 874,
    internal_limbiz_fee_pool_usd: 755,
    inherits: 'basic',
    additional_services: [
      { id: 'essential_documents', label_en: 'Essential Business Documents', term: 'support_external_costs' },
      { id: 'licenses', label_en: 'Licenses, Permits & Certificates Assessment + Assistance', term: 'support_external_costs' },
      { id: 'social', label_en: 'Social Media Setup', term: 'support_external_costs' },
      { id: 'sales_tax_permit', label_en: 'Sales Tax Permit (If Needed)', term: 'support_external_costs' },
      { id: 'starter_website', label_en: 'Starter Website / Landing Page', term: 'included' },
      { id: 'simple_logo', label_en: 'Simple Logo', term: 'included' },
      { id: 'digital_card', label_en: 'Digital Business Card', term: 'included' },
      { id: 'compliance', label_en: 'Compliance Monitoring (1 Year)', term: 'included_one_year' },
      { id: 'paperback', label_en: '28 Essential Steps Book (Paperback) - Free Shipping', term: 'complimentary' },
      { id: 'standard_consult', label_en: '3 x 60-Minute Consultations (Every 4 Months During the First Year)', term: 'included_one_year' },
    ],
  },
  premium: {
    name: 'Premium',
    package_component_usd: 1374,
    internal_limbiz_fee_pool_usd: 1255,
    inherits: 'standard',
    additional_services: [
      { id: 'funding', label_en: 'Funding Assistance', term: 'support_external_costs' },
      { id: 'business_credit', label_en: 'Business Credit Building', term: 'support_external_costs' },
      { id: 'tax_assist', label_en: 'Business Tax Assistance', term: 'support_external_costs' },
      { id: 'brand_guidelines', label_en: 'Full Brand Guidelines', term: 'included' },
      { id: 'professional_website', label_en: 'Professional Website', term: 'included' },
      { id: 'google_profile', label_en: 'Google Business Profile (If Eligible)', term: 'included_if_eligible' },
      { id: 'ecommerce', label_en: 'E-Commerce Platforms Setup', term: 'support_external_costs' },
      { id: 'trademark_copyright', label_en: 'Trademark Research & Guidance + Copyright Registration Assistance', term: 'guidance_filing_fees_separate' },
      { id: 'hardcover', label_en: '28 Essential Steps Book (Hardcover) - Free Shipping', term: 'complimentary' },
      { id: 'premium_consult', label_en: '6 x 90-Minute Consultations (Every 2 Months During the First Year)', term: 'included_one_year' },
    ],
    replaces_inherited_service_ids: {
      starter_website: 'professional_website',
      simple_logo: 'brand_guidelines',
      paperback: 'hardcover',
      standard_consult: 'premium_consult',
    },
  },
}

export const statusLabels: Record<string, string> = {
  included: 'Included',
  complimentary: 'Complimentary',
  support_external_costs: 'LIMBIZ support included; external costs may apply',
  included_one_year: 'Included for 1 year',
  included_if_eligible: 'Included if eligible',
  guidance_filing_fees_separate: 'Guidance included; official filing fees separate',
}

export const states: StateFeeConfig[] = [
  { code: 'AL', name: 'Alabama', baseline_initial_state_fee_usd: 225, baseline_is_final_checkout_amount: false, show_notice_on_state_selection: true, notice_en: 'The $225 baseline includes paper name reservation. Online name reservation makes the fixed state base $228; payment fees may also apply.', required_inputs_before_final_quote: ['filing_method'], unresolved_outside_fee_may_apply: true, official_source_url: 'https://www.sos.alabama.gov/business-entities/llcs', method_state_fee_usd: { paper: 225, online: 228 } },
  { code: 'AK', name: 'Alaska', baseline_initial_state_fee_usd: 250, baseline_is_final_checkout_amount: true, show_notice_on_state_selection: false, notice_en: '', required_inputs_before_final_quote: [], unresolved_outside_fee_may_apply: false, official_source_url: 'https://www.commerce.alaska.gov/web/cbpl/Corporations/CorporationFormsFees' },
  { code: 'AZ', name: 'Arizona', baseline_initial_state_fee_usd: 50, baseline_is_final_checkout_amount: false, show_notice_on_state_selection: true, notice_en: 'A newspaper publication charge applies if the statutory-agent address is outside Maricopa or Pima County; confirm county and newspaper price.', required_inputs_before_final_quote: ['statutory_agent_county'], unresolved_outside_fee_may_apply: true, official_source_url: 'https://azcc.gov/faqs/BusinessServicesFAQs' },
  { code: 'AR', name: 'Arkansas', baseline_initial_state_fee_usd: 45, baseline_is_final_checkout_amount: false, show_notice_on_state_selection: true, notice_en: 'The $45 baseline is for online filing; paper filing is $50.', required_inputs_before_final_quote: ['filing_method'], unresolved_outside_fee_may_apply: false, official_source_url: 'https://www.sos.arkansas.gov/business-commercial-services-bcs/forms-fees/llc', method_state_fee_usd: { online: 45, paper: 50 } },
  { code: 'CA', name: 'California', baseline_initial_state_fee_usd: 90, baseline_is_final_checkout_amount: true, show_notice_on_state_selection: true, notice_en: 'The $90 baseline includes the $20 initial Statement of Information. A separate $800 annual LLC tax may be due under state rules.', required_inputs_before_final_quote: [], unresolved_outside_fee_may_apply: false, official_source_url: 'https://www.sos.ca.gov/business-programs/business-entities/filing-tips/llc' },
  { code: 'CO', name: 'Colorado', baseline_initial_state_fee_usd: 50, baseline_is_final_checkout_amount: true, show_notice_on_state_selection: false, notice_en: '', required_inputs_before_final_quote: [], unresolved_outside_fee_may_apply: false, official_source_url: 'https://www.sos.state.co.us/pubs/info_center/fees/business.html' },
  { code: 'CT', name: 'Connecticut', baseline_initial_state_fee_usd: 120, baseline_is_final_checkout_amount: true, show_notice_on_state_selection: false, notice_en: '', required_inputs_before_final_quote: [], unresolved_outside_fee_may_apply: false, official_source_url: 'https://business.ct.gov/knowledge-base/articles/domestic-limited-liability-companies-forms-and-fees' },
  { code: 'DE', name: 'Delaware', baseline_initial_state_fee_usd: 110, baseline_is_final_checkout_amount: true, show_notice_on_state_selection: true, notice_en: 'A separate $300 annual LLC tax is not included in the initial package price.', required_inputs_before_final_quote: [], unresolved_outside_fee_may_apply: false, official_source_url: 'https://corp.delaware.gov/paytaxes/' },
  { code: 'FL', name: 'Florida', baseline_initial_state_fee_usd: 125, baseline_is_final_checkout_amount: true, show_notice_on_state_selection: true, notice_en: 'Annual reports and later renewals are separate from the initial package price.', required_inputs_before_final_quote: [], unresolved_outside_fee_may_apply: false, official_source_url: 'https://dos.fl.gov/sunbiz/forms/fees/llc-fees/' },
  { code: 'GA', name: 'Georgia', baseline_initial_state_fee_usd: 105, baseline_is_final_checkout_amount: false, show_notice_on_state_selection: true, notice_en: 'The $105 baseline is for online filing; paper filing is $110.', required_inputs_before_final_quote: ['filing_method'], unresolved_outside_fee_may_apply: false, official_source_url: 'https://sos.ga.gov/sites/default/files/2024-10/Reference%20-%20Filing%20Fees%20%28Effective%2011.30.2024%29.pdf', method_state_fee_usd: { online: 105, paper: 110 } },
  { code: 'HI', name: 'Hawaii', baseline_initial_state_fee_usd: 51, baseline_is_final_checkout_amount: true, show_notice_on_state_selection: false, notice_en: '', required_inputs_before_final_quote: [], unresolved_outside_fee_may_apply: false, official_source_url: 'https://cca.hawaii.gov/breg/registration/dllc/' },
  { code: 'ID', name: 'Idaho', baseline_initial_state_fee_usd: 100, baseline_is_final_checkout_amount: false, show_notice_on_state_selection: true, notice_en: 'The $100 baseline is for online filing; paper filing is $120.', required_inputs_before_final_quote: ['filing_method'], unresolved_outside_fee_may_apply: false, official_source_url: 'https://sos.idaho.gov/business-services-resources/business-forms/', method_state_fee_usd: { online: 100, paper: 120 } },
  { code: 'IL', name: 'Illinois', baseline_initial_state_fee_usd: 150, baseline_is_final_checkout_amount: false, show_notice_on_state_selection: true, notice_en: 'An online payment processor charge may apply; confirm before collecting payment.', required_inputs_before_final_quote: [], unresolved_outside_fee_may_apply: true, official_source_url: 'https://www.ilsos.gov/departments/business_services/fees/limited_liability_company.html' },
  { code: 'IN', name: 'Indiana', baseline_initial_state_fee_usd: 95, baseline_is_final_checkout_amount: false, show_notice_on_state_selection: true, notice_en: 'The $95 baseline is for online filing; paper filing is $100. A payment processor fee may apply.', required_inputs_before_final_quote: ['filing_method'], unresolved_outside_fee_may_apply: true, official_source_url: 'https://www.in.gov/sos/business/division-forms/business-forms/', method_state_fee_usd: { online: 95, paper: 100 } },
  { code: 'IA', name: 'Iowa', baseline_initial_state_fee_usd: 50, baseline_is_final_checkout_amount: true, show_notice_on_state_selection: false, notice_en: '', required_inputs_before_final_quote: [], unresolved_outside_fee_may_apply: false, official_source_url: 'https://sos.iowa.gov/businesses/business-entity-forms-and-fees' },
  { code: 'KS', name: 'Kansas', baseline_initial_state_fee_usd: 85, baseline_is_final_checkout_amount: false, show_notice_on_state_selection: true, notice_en: 'The $85 baseline is for online filing; paper filing is $90.', required_inputs_before_final_quote: ['filing_method'], unresolved_outside_fee_may_apply: false, official_source_url: 'https://sos.ks.gov/businesses/filing-center.html', method_state_fee_usd: { online: 85, paper: 90 } },
  { code: 'KY', name: 'Kentucky', baseline_initial_state_fee_usd: 40, baseline_is_final_checkout_amount: true, show_notice_on_state_selection: false, notice_en: '', required_inputs_before_final_quote: [], unresolved_outside_fee_may_apply: false, official_source_url: 'https://www.sos.ky.gov/bus/business-filings/Pages/Fees.aspx' },
  { code: 'LA', name: 'Louisiana', baseline_initial_state_fee_usd: 100, baseline_is_final_checkout_amount: false, show_notice_on_state_selection: true, notice_en: 'Local or portal charges may apply; confirm as relevant to the selected filing route.', required_inputs_before_final_quote: [], unresolved_outside_fee_may_apply: true, official_source_url: 'https://www.sos.la.gov/business-services/forms-fee-schedule' },
  { code: 'ME', name: 'Maine', baseline_initial_state_fee_usd: 175, baseline_is_final_checkout_amount: true, show_notice_on_state_selection: false, notice_en: '', required_inputs_before_final_quote: [], unresolved_outside_fee_may_apply: false, official_source_url: 'https://www.maine.gov/sos/corporations-commissions/i-need-a-business-form/limited-liability-company-forms' },
  { code: 'MD', name: 'Maryland', baseline_initial_state_fee_usd: 100, baseline_is_final_checkout_amount: false, show_notice_on_state_selection: true, notice_en: 'The $100 baseline is the standard filing charge. Expedited review may add $50; same-day service costs more. Electronic payments may incur a $4.50 convenience fee.', required_inputs_before_final_quote: ['filing_method', 'payment_method'], unresolved_outside_fee_may_apply: true, official_source_url: 'https://dat.maryland.gov/Documents/Accessible%20Documents/Charter%20-%20Create%20or%20Start%20a%20Business/Articles%20of%20Organization%20for%20a%20Limited%20Liability%20Company_0526-A.pdf', method_state_fee_usd: { standard: 100, expedited: 150, same_day_online: 425 } },
  { code: 'MA', name: 'Massachusetts', baseline_initial_state_fee_usd: 500, baseline_is_final_checkout_amount: false, show_notice_on_state_selection: true, notice_en: 'The $500 baseline uses paper or in-person filing; electronic filing is $520. Annual report fees are separate.', required_inputs_before_final_quote: ['filing_method'], unresolved_outside_fee_may_apply: false, official_source_url: 'https://www.sec.state.ma.us/divisions/corporations/filing-fees/filing-fees.htm', method_state_fee_usd: { paper_or_in_person: 500, online: 520 } },
  { code: 'MI', name: 'Michigan', baseline_initial_state_fee_usd: 50, baseline_is_final_checkout_amount: true, show_notice_on_state_selection: false, notice_en: '', required_inputs_before_final_quote: [], unresolved_outside_fee_may_apply: false, official_source_url: 'https://www.michigan.gov/lara/bureau-list/cscl/corps/forms/limited-liability-company-forms' },
  { code: 'MN', name: 'Minnesota', baseline_initial_state_fee_usd: 135, baseline_is_final_checkout_amount: false, show_notice_on_state_selection: true, notice_en: 'The $135 baseline is for mail filing; online or in-person filing is $155.', required_inputs_before_final_quote: ['filing_method'], unresolved_outside_fee_may_apply: false, official_source_url: 'https://www.sos.mn.gov/business-liens/business-forms-fees/limited-liability-company-forms/', method_state_fee_usd: { mail: 135, online_or_in_person: 155 } },
  { code: 'MS', name: 'Mississippi', baseline_initial_state_fee_usd: 50, baseline_is_final_checkout_amount: true, show_notice_on_state_selection: false, notice_en: '', required_inputs_before_final_quote: [], unresolved_outside_fee_may_apply: false, official_source_url: 'https://sos.ms.gov/sites/default/files/fees_and_forms/Services%20%26%20Fees%20Document.pdf' },
  { code: 'MO', name: 'Missouri', baseline_initial_state_fee_usd: 50, baseline_is_final_checkout_amount: false, show_notice_on_state_selection: true, notice_en: 'The $50 baseline is for online filing; paper filing is $105. A portal technology fee may apply.', required_inputs_before_final_quote: ['filing_method'], unresolved_outside_fee_may_apply: true, official_source_url: 'https://www.sos.mo.gov/business/corporations/faq', method_state_fee_usd: { online: 50, paper: 105 } },
  { code: 'MT', name: 'Montana', baseline_initial_state_fee_usd: 35, baseline_is_final_checkout_amount: true, show_notice_on_state_selection: false, notice_en: '', required_inputs_before_final_quote: [], unresolved_outside_fee_may_apply: false, official_source_url: 'https://sosmt.gov/business/fees/' },
  { code: 'NE', name: 'Nebraska', baseline_initial_state_fee_usd: 125, baseline_is_final_checkout_amount: false, show_notice_on_state_selection: true, notice_en: 'The $125 baseline includes the $25 proof-of-publication filing. A required newspaper publication and portal charges are additional.', required_inputs_before_final_quote: ['filing_method'], unresolved_outside_fee_may_apply: true, official_source_url: 'https://sos.nebraska.gov/business-services/forms-and-fee-information', method_state_fee_usd: { online_fixed_charges: 125, paper_fixed_charges: 140 } },
  { code: 'NV', name: 'Nevada', baseline_initial_state_fee_usd: 425, baseline_is_final_checkout_amount: true, show_notice_on_state_selection: true, notice_en: 'The $425 initial state total includes formation, the initial list and state business license for an ordinary nonexempt LLC. Later renewals are separate.', required_inputs_before_final_quote: [], unresolved_outside_fee_may_apply: false, official_source_url: 'https://www.leg.state.nv.us/NRS/NRS-086.html' },
  { code: 'NH', name: 'New Hampshire', baseline_initial_state_fee_usd: 100, baseline_is_final_checkout_amount: true, show_notice_on_state_selection: false, notice_en: '', required_inputs_before_final_quote: [], unresolved_outside_fee_may_apply: false, official_source_url: 'https://www.sos.nh.gov/corporations-0/forms-and-fees/limited-liability-companies' },
  { code: 'NJ', name: 'New Jersey', baseline_initial_state_fee_usd: 100, baseline_is_final_checkout_amount: true, show_notice_on_state_selection: true, notice_en: 'Annual reports are separate from the initial package price.', required_inputs_before_final_quote: [], unresolved_outside_fee_may_apply: false, official_source_url: 'https://www.nj.gov/treasury/revenue/fees.shtml' },
  { code: 'NM', name: 'New Mexico', baseline_initial_state_fee_usd: 50, baseline_is_final_checkout_amount: true, show_notice_on_state_selection: false, notice_en: '', required_inputs_before_final_quote: [], unresolved_outside_fee_may_apply: false, official_source_url: 'https://www.nmlegis.gov/Sessions/15%20Regular/final/SB0438.PDF' },
  { code: 'NY', name: 'New York', baseline_initial_state_fee_usd: 250, baseline_is_final_checkout_amount: false, show_notice_on_state_selection: true, notice_en: 'The $250 baseline includes the $50 Certificate of Publication. Required publication in two newspapers costs extra and varies by county.', required_inputs_before_final_quote: ['publication_county'], unresolved_outside_fee_may_apply: true, official_source_url: 'https://dos.ny.gov/certificate-publication-domestic-limited-liability-company-0' },
  { code: 'NC', name: 'North Carolina', baseline_initial_state_fee_usd: 125, baseline_is_final_checkout_amount: true, show_notice_on_state_selection: false, notice_en: '', required_inputs_before_final_quote: [], unresolved_outside_fee_may_apply: false, official_source_url: 'https://www.sosnc.gov/fees/by_title/_Business_Registration_limited_liability_companies' },
  { code: 'ND', name: 'North Dakota', baseline_initial_state_fee_usd: 135, baseline_is_final_checkout_amount: true, show_notice_on_state_selection: false, notice_en: '', required_inputs_before_final_quote: [], unresolved_outside_fee_may_apply: false, official_source_url: 'https://www.sos.nd.gov/business/business-services/business-structures/limited-liability-company-llc' },
  { code: 'OH', name: 'Ohio', baseline_initial_state_fee_usd: 99, baseline_is_final_checkout_amount: true, show_notice_on_state_selection: false, notice_en: '', required_inputs_before_final_quote: [], unresolved_outside_fee_may_apply: false, official_source_url: 'https://www.ohiosos.gov/business/business-filing-forms' },
  { code: 'OK', name: 'Oklahoma', baseline_initial_state_fee_usd: 100, baseline_is_final_checkout_amount: false, show_notice_on_state_selection: true, notice_en: 'An online service fee may apply; confirm before collecting payment.', required_inputs_before_final_quote: [], unresolved_outside_fee_may_apply: true, official_source_url: 'https://oklahoma.gov/business/launch/register-your-business.html' },
  { code: 'OR', name: 'Oregon', baseline_initial_state_fee_usd: 100, baseline_is_final_checkout_amount: true, show_notice_on_state_selection: false, notice_en: '', required_inputs_before_final_quote: [], unresolved_outside_fee_may_apply: false, official_source_url: 'https://sos.oregon.gov/business/Documents/business-registry-forms/br-fee-schedule.pdf' },
  { code: 'PA', name: 'Pennsylvania', baseline_initial_state_fee_usd: 125, baseline_is_final_checkout_amount: true, show_notice_on_state_selection: false, notice_en: '', required_inputs_before_final_quote: [], unresolved_outside_fee_may_apply: false, official_source_url: 'https://www.pa.gov/agencies/dos/programs/business/fees-and-payments' },
  { code: 'RI', name: 'Rhode Island', baseline_initial_state_fee_usd: 150, baseline_is_final_checkout_amount: true, show_notice_on_state_selection: true, notice_en: 'Annual tax and report charges are separate from the initial package price.', required_inputs_before_final_quote: [], unresolved_outside_fee_may_apply: false, official_source_url: 'https://www.sos.ri.gov/divisions/business-services/business-basics/costs-and-fees' },
  { code: 'SC', name: 'South Carolina', baseline_initial_state_fee_usd: 110, baseline_is_final_checkout_amount: false, show_notice_on_state_selection: true, notice_en: 'The $110 baseline uses paper filing; online filing is $125.', required_inputs_before_final_quote: ['filing_method'], unresolved_outside_fee_may_apply: false, official_source_url: 'https://sos.sc.gov/services-and-filings/business-filings/limited-liability-companies', method_state_fee_usd: { paper: 110, online: 125 } },
  { code: 'SD', name: 'South Dakota', baseline_initial_state_fee_usd: 150, baseline_is_final_checkout_amount: false, show_notice_on_state_selection: true, notice_en: 'The $150 baseline is for online filing; paper filing is $165.', required_inputs_before_final_quote: ['filing_method'], unresolved_outside_fee_may_apply: false, official_source_url: 'https://sdsos.gov/Division%20of%20Business%20Services/Filing%20Fees/default.aspx', method_state_fee_usd: { online: 150, paper: 165 } },
  { code: 'TN', name: 'Tennessee', baseline_initial_state_fee_usd: 300, baseline_is_final_checkout_amount: false, show_notice_on_state_selection: true, notice_en: 'The state fee depends on the number of LLC members: $300 minimum for 1-6 members, then $50 per additional member, capped at $3,000.', required_inputs_before_final_quote: ['member_count'], unresolved_outside_fee_may_apply: false, official_source_url: 'https://sos.tn.gov/businesses/fees', state_fee_formula: { type: 'per_member_with_floor_ceiling', per_member_usd: 50, min_usd: 300, max_usd: 3000 } },
  { code: 'TX', name: 'Texas', baseline_initial_state_fee_usd: 300, baseline_is_final_checkout_amount: true, show_notice_on_state_selection: false, notice_en: '', required_inputs_before_final_quote: [], unresolved_outside_fee_may_apply: false, official_source_url: 'https://www.sos.state.tx.us/corp/instructions/205.shtml' },
  { code: 'UT', name: 'Utah', baseline_initial_state_fee_usd: 59, baseline_is_final_checkout_amount: true, show_notice_on_state_selection: false, notice_en: '', required_inputs_before_final_quote: [], unresolved_outside_fee_may_apply: false, official_source_url: 'https://commerce.utah.gov/corporations/business-entities/considerations-in-forming-a-limited-liability-company/' },
  { code: 'VT', name: 'Vermont', baseline_initial_state_fee_usd: 155, baseline_is_final_checkout_amount: true, show_notice_on_state_selection: false, notice_en: '', required_inputs_before_final_quote: [], unresolved_outside_fee_may_apply: false, official_source_url: 'https://legislature.vermont.gov/statutes/section/11/025/04012' },
  { code: 'VA', name: 'Virginia', baseline_initial_state_fee_usd: 100, baseline_is_final_checkout_amount: true, show_notice_on_state_selection: false, notice_en: '', required_inputs_before_final_quote: [], unresolved_outside_fee_may_apply: false, official_source_url: 'https://www.scc.virginia.gov/businesses/forms-and-fees/virginia-limited-liability-companies/' },
  { code: 'WA', name: 'Washington', baseline_initial_state_fee_usd: 180, baseline_is_final_checkout_amount: false, show_notice_on_state_selection: true, notice_en: 'The $180 baseline uses paper filing; online filing is $200. Initial-report requirements and later renewals should be checked.', required_inputs_before_final_quote: ['filing_method'], unresolved_outside_fee_may_apply: true, official_source_url: 'https://www.sos.wa.gov/corporations-charities/business-entities/filings-forms-information', method_state_fee_usd: { paper: 180, online: 200 } },
  { code: 'WV', name: 'West Virginia', baseline_initial_state_fee_usd: 100, baseline_is_final_checkout_amount: true, show_notice_on_state_selection: false, notice_en: '', required_inputs_before_final_quote: [], unresolved_outside_fee_may_apply: false, official_source_url: 'https://sos.wv.gov/register-new-wv-business' },
  { code: 'WI', name: 'Wisconsin', baseline_initial_state_fee_usd: 130, baseline_is_final_checkout_amount: false, show_notice_on_state_selection: true, notice_en: 'The $130 baseline is for online filing; paper filing is $170.', required_inputs_before_final_quote: ['filing_method'], unresolved_outside_fee_may_apply: false, official_source_url: 'https://apps.dfi.wi.gov/apps/CorpFormation/directions.aspx?type=12', method_state_fee_usd: { online: 130, paper: 170 } },
  { code: 'WY', name: 'Wyoming', baseline_initial_state_fee_usd: 100, baseline_is_final_checkout_amount: false, show_notice_on_state_selection: true, notice_en: 'An online convenience fee may apply; confirm before collecting payment.', required_inputs_before_final_quote: [], unresolved_outside_fee_may_apply: true, official_source_url: 'https://sos.wyo.gov/Business/docs/HowToCreateAWyomingCompany.pdf' },
]

// Helper functions
export function getStateBySlug(slug: string): StateFeeConfig | undefined {
  const normalized = slug.toLowerCase().replace(/-/g, '')
  return states.find(s => 
    s.name.toLowerCase().replace(/\s+/g, '') === normalized ||
    s.code.toLowerCase() === normalized ||
    s.name.toLowerCase().replace(/\s+/g, '-') === slug.toLowerCase()
  )
}

export function calculatePrice(packageId: string, stateFee: number): number {
  const pkg = packages[packageId]
  if (!pkg) return 0
  return pkg.package_component_usd + stateFee
}

export function getStateFeeForMethod(state: StateFeeConfig, method?: string): number {
  if (method && state.method_state_fee_usd && state.method_state_fee_usd[method]) {
    return state.method_state_fee_usd[method]
  }
  return state.baseline_initial_state_fee_usd
}

export function calculateTennesseeFee(memberCount: number): number {
  const base = 300
  const perMember = 50
  const max = 3000
  if (memberCount <= 6) return base
  return Math.min(max, base + (memberCount - 6) * perMember)
}

export const serviceDropdowns = {
  essential_documents: {
    heading: 'Examples of Essential Business Documents',
    examples: ['Operating Agreement', 'Non-Disclosure Agreement (NDA)', 'Independent Contractor Agreement', 'Client Service Agreement', 'Vendor / Supplier Agreement'],
    helper: 'Examples of business document templates and assistance; scope is confirmed with the client. Attorney review or custom legal drafting, if needed, is separate.'
  },
  licenses: {
    heading: 'Examples of Licenses, Permits & Certificates',
    examples: ['Local Business License / Business Tax Receipt', 'Professional / Occupational License', 'Home Occupation Permit', 'Health / Food Service Permit', 'Certificate of Occupancy', 'Certificate of Good Standing'],
    helper: 'Examples only. Requirements depend on business activity and location. LIMBIZ assessment and assistance are included; government and third-party fees are separate.'
  },
  social: {
    heading: 'Social Media Setup Options',
    examples: ['TikTok Business Account', 'Facebook Page', 'Instagram Professional Account', 'YouTube Channel', 'LinkedIn Company Page', 'Pinterest Business Account', 'WhatsApp Business'],
    helper: 'Setup for up to 2 eligible platforms chosen by the client; advertising and paid features are separate.',
    limit: 2
  },
  compliance: {
    heading: 'Compliance Monitoring (1 Year)',
    examples: ['State annual report deadline reminders', 'Registered Agent renewal reminders', 'Applicable license and permit renewal reminders', 'DBA / Fictitious Name renewal reminders (if applicable)', 'Sales tax and business tax deadline reminders (if applicable)', 'Business address renewal reminders', 'Domain and business email renewal reminders'],
    helper: 'Monitoring and reminders during the first year; preparing or filing reports or tax returns is a separate service.'
  },
  ecommerce: {
    heading: 'E-Commerce Platform Setup Options',
    examples: ['TikTok Shop Seller Center', 'Amazon Seller Central', 'eBay Seller Account', 'Etsy Shop', 'Walmart Marketplace', 'Shopify Store', 'WooCommerce Store', 'BigCommerce Store', 'Squarespace Commerce'],
    helper: 'Setup assistance for 1 platform chosen by the client. Marketplace acceptance is not guaranteed; seller, subscription, and third-party fees are separate.',
    limit: 1
  },
}

export const LIMBIZ_FEE_POOLS = {
  basic: 255,
  standard: 755,
  premium: 1255,
}

export const PACKAGE_COMPONENTS = {
  basic: 374,
  standard: 874,
  premium: 1374,
}
