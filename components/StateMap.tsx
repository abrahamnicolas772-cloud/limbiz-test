'use client'

import { useState } from 'react'
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps'
import { stateByAbbr } from '@/lib/states'

const geoUrl = 'https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json'

interface StateMapProps {
  onStateSelect: (stateId: string) => void
  selectedState?: string
}

// Centroïdes approximatifs pour les labels
const centroids: Record<string, [number, number]> = {
  'AL': [-86.8, 32.7], 'AK': [-153, 63], 'AZ': [-112, 34.5], 'AR': [-92.4, 34.8],
  'CA': [-119.5, 36.8], 'CO': [-105.5, 39], 'CT': [-72.7, 41.6], 'DE': [-75.5, 39],
  'FL': [-81.5, 28], 'GA': [-83.4, 32.6], 'HI': [-155.5, 20], 'ID': [-114.7, 44],
  'IL': [-89, 40], 'IN': [-86.1, 40], 'IA': [-93.5, 42], 'KS': [-98.3, 38.5],
  'KY': [-85.3, 37.5], 'LA': [-92, 31], 'ME': [-69, 45.5], 'MD': [-76.8, 39],
  'MA': [-71.5, 42.3], 'MI': [-84.5, 44], 'MN': [-94, 46], 'MS': [-89.7, 32.7],
  'MO': [-92.5, 38.5], 'MT': [-110, 47], 'NE': [-99.7, 41.5], 'NV': [-117, 39],
  'NH': [-71.5, 44], 'NJ': [-74.5, 40], 'NM': [-106, 34.5], 'NY': [-75, 43],
  'NC': [-79, 35.5], 'ND': [-100.5, 47.5], 'OH': [-82.5, 40.3], 'OK': [-97.5, 35.5],
  'OR': [-120.5, 44], 'PA': [-77.5, 41], 'RI': [-71.5, 41.6], 'SC': [-81, 33.5],
  'SD': [-100, 44.5], 'TN': [-86, 35.8], 'TX': [-99, 31], 'UT': [-112, 39.5],
  'VT': [-72.5, 44], 'VA': [-78.5, 37.5], 'WA': [-120.5, 47.5], 'WV': [-80.5, 38.5],
  'WI': [-90, 44.5], 'WY': [-107.5, 43],
}

export default function StateMap({ onStateSelect, selectedState }: StateMapProps) {
  const [hoveredAbbr, setHoveredAbbr] = useState<string | null>(null)
  const getAbbr = (geo: any) => geo.properties.iso_3166_2 || geo.properties.abbr || geo.properties.postal
  const hoveredState = hoveredAbbr ? stateByAbbr[hoveredAbbr] : null

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      <div className="h-10 mb-3 flex items-center justify-center">
        {hoveredState ? (
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full">
            <span className="text-blue-300 font-semibold text-sm">{hoveredState.name}</span>
            <span className="text-blue-400/60 text-xs">({hoveredState.abbreviation})</span>
            <span className="text-white/30 text-[10px]">— Click for pricing</span>
          </div>
        ) : (
          <span className="text-white/15 text-xs font-light tracking-wide">
            Click on a state below or use the dropdown to see specific pricing.
          </span>
        )}
      </div>

      <div className="relative w-full aspect-[1.5/1] rounded-2xl overflow-hidden border border-white/[0.06]">
        <ComposableMap
          projection="geoAlbersUsa"
          projectionConfig={{ scale: 1100 }}
          style={{ width: '100%', height: '100%', background: '#060d14' }}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const abbr = getAbbr(geo)
                const state = abbr ? stateByAbbr[abbr] : null
                const isActive = !!state
                const isSelected = state?.slug === selectedState
                const isHovered = hoveredAbbr === abbr && isActive

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onClick={() => {
                      if (isActive && state) {
                        onStateSelect(state.slug)
                        setTimeout(() => {
                          document.getElementById('pricing-packages')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                        }, 500)
                      }
                    }}
                    onMouseEnter={() => { if (isActive) setHoveredAbbr(abbr) }}
                    onMouseLeave={() => setHoveredAbbr(null)}
                    style={{
                      default: {
                        fill: isSelected ? '#2563eb' : isActive ? '#0f1f3a' : '#081020',
                        stroke: isSelected ? '#60a5fa' : isActive ? '#1a3050' : '#0d1525',
                        strokeWidth: isSelected ? 1.2 : 0.5,
                        outline: 'none',
                        cursor: isActive ? 'pointer' : 'default',
                      },
                      hover: {
                        fill: isActive ? '#1e4d8c' : '#081020',
                        stroke: isActive ? '#3b7abf' : '#0d1525',
                        strokeWidth: 1,
                        outline: 'none',
                        cursor: isActive ? 'pointer' : 'default',
                      },
                      pressed: {
                        fill: '#2563eb',
                        stroke: '#60a5fa',
                        strokeWidth: 1.5,
                        outline: 'none',
                      },
                    }}
                  />
                )
              })
            }
          </Geographies>

          {/* Labels via Marker */}
          {Object.entries(centroids).map(([abbr, coords]) => {
            const state = stateByAbbr[abbr]
            if (!state) return null
            const isSelected = state.slug === selectedState
            const isHovered = hoveredAbbr === abbr
            // Afficher tous les labels // Afficher seulement au survol/sélection
            
            return (
              <Marker key={abbr} coordinates={coords} style={{ pointerEvents: "none" }}>
                <text
                  textAnchor="middle"
                  style={{
                    fontFamily: 'system-ui, sans-serif',
                    fontSize: isSelected ? "10px" : "7px",
                    fontWeight: isSelected ? 700 : 500,
                    fill: isSelected ? "#93c5fd" : "#ffffff80",
                    paintOrder: 'stroke',
                    stroke: '#000000',
                    strokeWidth: "2px",
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    pointerEvents: 'none',
                  }}
                >
                  {abbr}
                </text>
              </Marker>
            )
          })}
        </ComposableMap>
      </div>

      <p className="text-center text-white/15 text-[10px] font-light tracking-wide mt-3">
        Hover over a state to see its abbreviation — Click for pricing
      </p>
    </div>
  )
}
