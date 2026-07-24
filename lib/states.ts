export interface StateData {
  id: string
  name: string
  abbreviation: string
  filingFee: number
  slug: string
}

export const STATES: StateData[] = [
  { id: 'alabama', name: 'Alabama', abbreviation: 'AL', filingFee: 150, slug: 'alabama' },
  { id: 'alaska', name: 'Alaska', abbreviation: 'AK', filingFee: 250, slug: 'alaska' },
  { id: 'arizona', name: 'Arizona', abbreviation: 'AZ', filingFee: 90, slug: 'arizona' },
  { id: 'arkansas', name: 'Arkansas', abbreviation: 'AR', filingFee: 45, slug: 'arkansas' },
  { id: 'california', name: 'California', abbreviation: 'CA', filingFee: 70, slug: 'california' },
  { id: 'colorado', name: 'Colorado', abbreviation: 'CO', filingFee: 50, slug: 'colorado' },
  { id: 'connecticut', name: 'Connecticut', abbreviation: 'CT', filingFee: 120, slug: 'connecticut' },
  { id: 'delaware', name: 'Delaware', abbreviation: 'DE', filingFee: 90, slug: 'delaware' },
  { id: 'florida', name: 'Florida', abbreviation: 'FL', filingFee: 125, slug: 'florida' },
  { id: 'georgia', name: 'Georgia', abbreviation: 'GA', filingFee: 100, slug: 'georgia' },
  { id: 'hawaii', name: 'Hawaii', abbreviation: 'HI', filingFee: 50, slug: 'hawaii' },
  { id: 'idaho', name: 'Idaho', abbreviation: 'ID', filingFee: 100, slug: 'idaho' },
  { id: 'illinois', name: 'Illinois', abbreviation: 'IL', filingFee: 150, slug: 'illinois' },
  { id: 'indiana', name: 'Indiana', abbreviation: 'IN', filingFee: 95, slug: 'indiana' },
  { id: 'iowa', name: 'Iowa', abbreviation: 'IA', filingFee: 50, slug: 'iowa' },
  { id: 'kansas', name: 'Kansas', abbreviation: 'KS', filingFee: 165, slug: 'kansas' },
  { id: 'kentucky', name: 'Kentucky', abbreviation: 'KY', filingFee: 40, slug: 'kentucky' },
  { id: 'louisiana', name: 'Louisiana', abbreviation: 'LA', filingFee: 100, slug: 'louisiana' },
  { id: 'maine', name: 'Maine', abbreviation: 'ME', filingFee: 175, slug: 'maine' },
  { id: 'maryland', name: 'Maryland', abbreviation: 'MD', filingFee: 100, slug: 'maryland' },
  { id: 'massachusetts', name: 'Massachusetts', abbreviation: 'MA', filingFee: 500, slug: 'massachusetts' },
  { id: 'michigan', name: 'Michigan', abbreviation: 'MI', filingFee: 50, slug: 'michigan' },
  { id: 'minnesota', name: 'Minnesota', abbreviation: 'MN', filingFee: 155, slug: 'minnesota' },
  { id: 'mississippi', name: 'Mississippi', abbreviation: 'MS', filingFee: 50, slug: 'mississippi' },
  { id: 'missouri', name: 'Missouri', abbreviation: 'MO', filingFee: 50, slug: 'missouri' },
  { id: 'montana', name: 'Montana', abbreviation: 'MT', filingFee: 70, slug: 'montana' },
  { id: 'nebraska', name: 'Nebraska', abbreviation: 'NE', filingFee: 120, slug: 'nebraska' },
  { id: 'nevada', name: 'Nevada', abbreviation: 'NV', filingFee: 425, slug: 'nevada' },
  { id: 'new-hampshire', name: 'New Hampshire', abbreviation: 'NH', filingFee: 100, slug: 'new-hampshire' },
  { id: 'new-jersey', name: 'New Jersey', abbreviation: 'NJ', filingFee: 125, slug: 'new-jersey' },
  { id: 'new-mexico', name: 'New Mexico', abbreviation: 'NM', filingFee: 50, slug: 'new-mexico' },
  { id: 'new-york', name: 'New York', abbreviation: 'NY', filingFee: 200, slug: 'new-york' },
  { id: 'north-carolina', name: 'North Carolina', abbreviation: 'NC', filingFee: 125, slug: 'north-carolina' },
  { id: 'north-dakota', name: 'North Dakota', abbreviation: 'ND', filingFee: 135, slug: 'north-dakota' },
  { id: 'ohio', name: 'Ohio', abbreviation: 'OH', filingFee: 99, slug: 'ohio' },
  { id: 'oklahoma', name: 'Oklahoma', abbreviation: 'OK', filingFee: 100, slug: 'oklahoma' },
  { id: 'oregon', name: 'Oregon', abbreviation: 'OR', filingFee: 100, slug: 'oregon' },
  { id: 'pennsylvania', name: 'Pennsylvania', abbreviation: 'PA', filingFee: 125, slug: 'pennsylvania' },
  { id: 'rhode-island', name: 'Rhode Island', abbreviation: 'RI', filingFee: 150, slug: 'rhode-island' },
  { id: 'south-carolina', name: 'South Carolina', abbreviation: 'SC', filingFee: 110, slug: 'south-carolina' },
  { id: 'south-dakota', name: 'South Dakota', abbreviation: 'SD', filingFee: 150, slug: 'south-dakota' },
  { id: 'tennessee', name: 'Tennessee', abbreviation: 'TN', filingFee: 100, slug: 'tennessee' },
  { id: 'texas', name: 'Texas', abbreviation: 'TX', filingFee: 300, slug: 'texas' },
  { id: 'utah', name: 'Utah', abbreviation: 'UT', filingFee: 70, slug: 'utah' },
  { id: 'vermont', name: 'Vermont', abbreviation: 'VT', filingFee: 125, slug: 'vermont' },
  { id: 'virginia', name: 'Virginia', abbreviation: 'VA', filingFee: 100, slug: 'virginia' },
  { id: 'washington', name: 'Washington', abbreviation: 'WA', filingFee: 200, slug: 'washington' },
  { id: 'west-virginia', name: 'West Virginia', abbreviation: 'WV', filingFee: 100, slug: 'west-virginia' },
  { id: 'wisconsin', name: 'Wisconsin', abbreviation: 'WI', filingFee: 130, slug: 'wisconsin' },
  { id: 'wyoming', name: 'Wyoming', abbreviation: 'WY', filingFee: 100, slug: 'wyoming' },
]

export const stateMap: Record<string, StateData> = STATES.reduce((acc, state) => {
  acc[state.slug] = state
  return acc
}, {} as Record<string, StateData>)

export const stateByAbbr: Record<string, StateData> = STATES.reduce((acc, state) => {
  acc[state.abbreviation] = state
  return acc
}, {} as Record<string, StateData>)
