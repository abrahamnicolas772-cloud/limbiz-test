import { stateMap, STATES } from '@/lib/states'

export const stateData = stateMap
export const stateSlugs = STATES.map(s => s.slug)
export const allStates = STATES
