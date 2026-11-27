// ============================================
// DBA / Fictitious Name — Done konplè 51 eta
// Soti nan PDF LIMBIZ_DBA_2026_FINAL
// ============================================

export interface DBAState {
  code: string
  name: string
  baseFee: number | null        // null si pa gen DBA registry
  filingOffice: string
  publication: string           // 'No', 'Yes', oswa deskripsyon
  term: string
  businessLicense: string
  keyRule: string
  notes?: string
}

export const DBA_STATES: DBAState[] = [
  { code: 'AL', name: 'Alabama', baseFee: 30, filingOffice: 'State SOS', publication: 'No general notice', term: '5 yrs', businessLicense: 'Local license / tax review', keyRule: 'Trade name registration optional; local operating rules separate' },
  { code: 'AK', name: 'Alaska', baseFee: 25, filingOffice: 'State', publication: 'No', term: '5 yrs', businessLicense: '$50/year business license', keyRule: 'Current Alaska business license required for business-name registration; regulated trades may need professional licenses' },
  { code: 'AZ', name: 'Arizona', baseFee: 10, filingOffice: 'State SOS', publication: 'No', term: '5 yrs', businessLicense: 'City / sector rules', keyRule: 'State trade-name registration optional; county certificate rules may differ' },
  { code: 'AR', name: 'Arkansas', baseFee: null, filingOffice: 'State / county', publication: 'Depends', term: 'Depends', businessLicense: 'Local business / sector review', keyRule: 'LLCs and corporations state filing; sole proprietors generally county filing', notes: '$22.50-$25 + local' },
  { code: 'CA', name: 'California', baseFee: null, filingOffice: 'County Clerk', publication: '4 weekly issues', term: '5 yrs', businessLicense: 'City license; zoning; sector permits', keyRule: 'Publication after filing, with timing and proof requirements; county fee and publisher fee separate', notes: 'County-specific (~$23-$54)' },
  { code: 'CO', name: 'Colorado', baseFee: 20, filingOffice: 'State SOS', publication: 'No', term: 'Entity-dependent', businessLicense: 'City sales/use tax and permits', keyRule: 'Trade-name duration/maintenance varies by entity type; do not assume every filing renews annually' },
  { code: 'CT', name: 'Connecticut', baseFee: 20, filingOffice: 'Town Clerk', publication: 'No general notice', term: '5 yrs often', businessLicense: 'Municipal / sector review', keyRule: 'Town-by-town fee and filing location', notes: 'Town fee (often ~$20)' },
  { code: 'DE', name: 'Delaware', baseFee: 25, filingOffice: 'Div. of Revenue / One Stop', publication: 'No', term: 'No fixed expiry shown', businessLicense: 'Business license generally required', keyRule: 'Statewide DBA registry effective Feb 2, 2026; standard Delaware license often ~$75 first location/year; trade-name-only pathway for qualifying cases' },
  { code: 'DC', name: 'District of Columbia', baseFee: 55, filingOffice: 'DLCP', publication: 'No general notice', term: '2 yrs', businessLicense: 'Basic Business License if applicable', keyRule: 'Separate occupational and activity permits may apply' },
  { code: 'FL', name: 'Florida', baseFee: 50, filingOffice: 'Sunbiz', publication: '1 notice BEFORE filing', term: '5 yrs', businessLicense: '$ local business tax receipts / permits', keyRule: 'Applicant certifies newspaper ad; no proof upload with application; newspaper charge additional; $50 renewal' },
  { code: 'GA', name: 'Georgia', baseFee: null, filingOffice: 'Superior Court Clerk', publication: '2 weekly issues', term: 'No fixed expiry shown', businessLicense: 'City/county occupation tax certificate', keyRule: 'Register county of principal business; publication and filing charges vary', notes: 'County-specific (often $150+)' },
  { code: 'HI', name: 'Hawaii', baseFee: 50, filingOffice: 'DCCA', publication: 'No', term: '5 yrs', businessLicense: 'General Excise Tax; sector review', keyRule: 'State trade-name registration; taxes / professional licensing separate' },
  { code: 'ID', name: 'Idaho', baseFee: 25, filingOffice: 'State SOS', publication: 'No', term: 'No expiry shown', businessLicense: 'Local / regulated activity', keyRule: 'Paper channel may cost more', notes: '$25 online' },
  { code: 'IL', name: 'Illinois', baseFee: 120, filingOffice: 'State (entities) / county (sole)', publication: '3 weeks for county filers', term: '5-year cycle', businessLicense: 'Local licenses, zoning, sales tax', keyRule: 'Entity assumed-name fee varies with year in five-year cycle; 2026 LLC fee $120 plus processor charge' },
  { code: 'IN', name: 'Indiana', baseFee: null, filingOffice: 'State / County Recorder', publication: 'Depends', term: 'Depends', businessLicense: 'City / sector review', keyRule: 'Entity filing differs from sole proprietor filings', notes: '$20-$30' },
  { code: 'IA', name: 'Iowa', baseFee: null, filingOffice: 'State / county', publication: 'No general notice', term: 'Depends', businessLicense: 'Local / sector review', keyRule: 'Separate filing paths by entity type', notes: '$5-$7' },
  { code: 'KS', name: 'Kansas', baseFee: null, filingOffice: 'No general state registry', publication: '—', term: '—', businessLicense: 'Local license / zoning review', keyRule: 'Do not interpret no DBA registry as no business permit requirements' },
  { code: 'KY', name: 'Kentucky', baseFee: 20, filingOffice: 'State / County Clerk', publication: 'No general notice', term: '5 yrs', businessLicense: 'City / county occupational license', keyRule: 'Entity and recording obligations vary', notes: '$20 state + local record fee' },
  { code: 'LA', name: 'Louisiana', baseFee: null, filingOffice: 'Parish Clerk; possible state trade name', publication: 'Depends', term: 'Depends', businessLicense: 'Local occupational license / sales tax', keyRule: 'Parish assumed-name path and optional state trade-name registration are different services', notes: 'Parish-specific' },
  { code: 'ME', name: 'Maine', baseFee: 125, filingOffice: 'State (entity) / town (sole)', publication: 'No general notice', term: 'Depends', businessLicense: 'Municipal and occupation permits', keyRule: 'Sole proprietors file locally; state entity fees depend on business form', notes: '$125 LLC example' },
  { code: 'MD', name: 'Maryland', baseFee: 25, filingOffice: 'State SDAT', publication: 'No general notice', term: '5 yrs', businessLicense: 'Trader license / sales-use tax as applicable', keyRule: 'Trade-name registration separate from Maryland operating authorizations' },
  { code: 'MA', name: 'Massachusetts', baseFee: null, filingOffice: 'City / Town Clerk', publication: 'No general notice', term: '4 yrs', businessLicense: 'Local license, occupancy and zoning', keyRule: 'Every city/town sets its own certificate fee', notes: 'Town/city-specific (~$40-$65)' },
  { code: 'MI', name: 'Michigan', baseFee: 25, filingOffice: 'State (entities) / county (sole)', publication: 'No general notice', term: '5 yrs', businessLicense: 'City / professional review', keyRule: 'Assumed-name filing differs between LLC/corporation and individuals', notes: '$25 entity example' },
  { code: 'MN', name: 'Minnesota', baseFee: null, filingOffice: 'State SOS', publication: '2 newspaper issues', term: '1 yr or as applicable', businessLicense: 'Industry / local review', keyRule: 'Publication cost separate; check renewal rules for filing type', notes: '$30-$50' },
  { code: 'MS', name: 'Mississippi', baseFee: 25, filingOffice: 'State', publication: 'No general notice', term: '5 yrs', businessLicense: 'Local privilege tax / sector permits', keyRule: 'Optional registration under applicable category' },
  { code: 'MO', name: 'Missouri', baseFee: 7, filingOffice: 'State', publication: 'No', term: '5 yrs', businessLicense: 'City/county / sales tax review', keyRule: 'Fictitious-name filing separate from licenses' },
  { code: 'MT', name: 'Montana', baseFee: 20, filingOffice: 'State', publication: 'No', term: '5 yrs.', businessLicense: 'Local / professional permits', keyRule: 'Online name filing; sector requirements separate' },
  { code: 'NE', name: 'Nebraska', baseFee: null, filingOffice: 'State', publication: 'Publish once + proof', term: '10 yrs', businessLicense: 'Local business / sector review', keyRule: 'Evidence of publication deadline important; cost outside government base fee', notes: '$100-$110' },
  { code: 'NV', name: 'Nevada', baseFee: null, filingOffice: 'County Clerk', publication: 'No general notice', term: '5 yrs', businessLicense: 'State business license + local license', keyRule: 'Each county where business is conducted may require separate fictitious-firm-name filing', notes: 'County-specific (Clark ~$25)' },
  { code: 'NH', name: 'New Hampshire', baseFee: 50, filingOffice: 'State', publication: 'No', term: '5 yrs,', businessLicense: 'Town / professional review', keyRule: 'State trade name and business permits separate' },
  { code: 'NJ', name: 'New Jersey', baseFee: null, filingOffice: 'State (entities) / county (sole)', publication: 'No general notice.', term: '5 yrs often', businessLicense: 'NJ tax registration / sector / municipality', keyRule: 'LLCs use alternate-name system; sole proprietors/general partnerships use county trade-name filing', notes: 'Entity / county-dependent (~$50)' },
  { code: 'NM', name: 'New Mexico', baseFee: null, filingOffice: 'No general state/county registry', publication: '—', term: '—', businessLicense: 'Municipal / sector rules', keyRule: 'Lack of general DBA registration does not waive licenses' },
  { code: 'NY', name: 'New York', baseFee: 25, filingOffice: 'State for LLC/corp; county for sole', publication: 'Depends on pathway', term: 'No fixed expiry shown', businessLicense: 'Sales tax / local / occupation permits', keyRule: 'LLC assumed-name certificate $25; corporations may pay county fees; sole proprietors file county', notes: '$25 LLC state' },
  { code: 'NC', name: 'North Carolina', baseFee: 26, filingOffice: 'County Register of Deeds', publication: 'No', term: 'No expiry shown', businessLicense: 'Local / professional / tax review', keyRule: 'One registration can list multiple counties in statewide database' },
  { code: 'ND', name: 'North Dakota', baseFee: 25, filingOffice: 'State', publication: 'No', term: '5 yrs', businessLicense: 'Local / occupational review', keyRule: 'State trade-name procedure' },
  { code: 'OH', name: 'Ohio', baseFee: 39, filingOffice: 'State', publication: 'No', term: '5 yrs', businessLicense: 'Vendor license / other permits as needed', keyRule: 'Trade name vs fictitious name has different legal characteristics' },
  { code: 'OK', name: 'Oklahoma', baseFee: 25, filingOffice: 'State', publication: 'No general notice', term: 'Depends', businessLicense: 'Local / tax permits', keyRule: 'Trade-name report through state' },
  { code: 'OR', name: 'Oregon', baseFee: 50, filingOffice: 'State', publication: 'No', term: '2 yrs', businessLicense: 'City / sector / tax review', keyRule: 'Assumed-business-name filing' },
  { code: 'PA', name: 'Pennsylvania', baseFee: 70, filingOffice: 'State', publication: 'If individual named', term: 'As applicable', businessLicense: 'Local / regulated activity', keyRule: 'Publication required when an individual owner is listed in specified registration field; notice charge extra' },
  { code: 'RI', name: 'Rhode Island', baseFee: 50, filingOffice: 'State / municipality', publication: 'No general notice', term: 'No expiry shown', businessLicense: 'Municipal / professional licenses', keyRule: 'Entity and sole proprietor filing split', notes: '$50 example' },
  { code: 'SC', name: 'South Carolina', baseFee: null, filingOffice: 'No general registry', publication: '—', term: '—', businessLicense: 'Local business license frequently key', keyRule: 'Check municipality and profession; no standard state DBA filing' },
  { code: 'SD', name: 'South Dakota', baseFee: 10, filingOffice: 'State / county', publication: 'No', term: '5 yrs', businessLicense: 'Sales tax and local review', keyRule: 'Choice of filing path may depend on business type' },
  { code: 'TN', name: 'Tennessee', baseFee: 20, filingOffice: 'State / county', publication: 'Depends', term: '5 yrs', businessLicense: 'Local business tax license / permits', keyRule: 'LLCs and corporations generally state; other types may use county', notes: '$20 example' },
  { code: 'TX', name: 'Texas', baseFee: 25, filingOffice: 'State SOS (entities) / county (sole)', publication: 'No', term: 'Up to 10 yrs', businessLicense: 'Sales tax / local / professional permits', keyRule: 'Entities use SOS assumed-name certificate; sole proprietors/general partnerships generally county', notes: '$25 entity' },
  { code: 'UT', name: 'Utah', baseFee: 22, filingOffice: 'State', publication: 'No', term: '3 yrs', businessLicense: 'City license / sales tax', keyRule: 'Reference renewal $18' },
  { code: 'VT', name: 'Vermont', baseFee: 70, filingOffice: 'State', publication: 'No', term: '5 yrs', businessLicense: 'Sales tax / professional rules', keyRule: 'Registration timing and renewal rules apply' },
  { code: 'VA', name: 'Virginia', baseFee: 10, filingOffice: 'State SCC', publication: 'No', term: 'As applicable', businessLicense: 'Local BPOL / zoning / sector permits', keyRule: 'Statewide fictitious-name filing; local business licensing separate' },
  { code: 'WA', name: 'Washington', baseFee: 5, filingOffice: 'Dept. of Revenue', publication: 'No', term: 'No general expiry', businessLicense: 'Business License Application processing fee', keyRule: 'Plus nonrefundable processing fee and any city endorsements / activity licenses', notes: '$5 per trade name' },
  { code: 'WV', name: 'West Virginia', baseFee: 25, filingOffice: 'State', publication: 'No', term: 'Depends', businessLicense: 'Business registration / local taxes', keyRule: 'Certain sole-proprietor cases may be exempt from DBA fee', notes: '$25 example' },
  { code: 'WI', name: 'Wisconsin', baseFee: 15, filingOffice: 'State', publication: 'No', term: '10 yrs', businessLicense: 'Seller permit / local / sector', keyRule: 'Name registration optional in some circumstances' },
  { code: 'WY', name: 'Wyoming', baseFee: 100, filingOffice: 'State', publication: 'No', term: '10 yrs', businessLicense: 'Local / regulated activity', keyRule: 'Trade-name registration optional; notarization may apply; renewal often $50' },
]

export const ENTITY_TYPES = [
  { value: 'individual', label: 'Individual / Sole Proprietor' },
  { value: 'partnership', label: 'General Partnership' },
  { value: 'llc', label: 'LLC' },
  { value: 'corporation', label: 'Corporation' },
  { value: 'other', label: 'Other' },
]

export const BUSINESS_ACTIVITIES = [
  { value: 'retail', label: 'Retail / E-commerce' },
  { value: 'food', label: 'Food / Beverage' },
  { value: 'construction', label: 'Construction / Trades' },
  { value: 'professional', label: 'Professional Services' },
  { value: 'health', label: 'Health / Wellness' },
  { value: 'realestate', label: 'Real Estate' },
  { value: 'transport', label: 'Transportation' },
  { value: 'other', label: 'Other' },
]

export const ADDITIONAL_FEES = {
  publication: { label: 'Newspaper publication', description: 'Publisher quote required', default: 0 },
  certifiedCopies: { label: 'Certified copies', description: 'If requested', default: 25 },
  processing: { label: 'Payment processing', description: '3% of total', default: 0 },
}

export function getDBAState(code: string): DBAState | undefined {
  return DBA_STATES.find(s => s.code === code)
}

export function getDBAFee(code: string): number {
  const state = getDBAState(code)
  return state?.baseFee ?? 25
}

export function requiresPublication(code: string): boolean {
  const state = getDBAState(code)
  if (!state) return false
  return state.publication !== 'No' && state.publication !== '—' && state.publication !== 'No general notice'
}

export function isLocalFee(code: string): boolean {
  const state = getDBAState(code)
  return state?.baseFee === null
}
