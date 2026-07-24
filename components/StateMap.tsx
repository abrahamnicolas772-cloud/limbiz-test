'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ComposableMap, Geographies, Geography } from 'react-simple-maps'
import { stateByAbbr } from '@/lib/states'

const geoUrl = 'https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json'

interface StateMapProps {
  onStateSelect: (stateId: string) => void
  selectedState?: string
}

const stateLabels: Record<string, [number, number]> = {
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

  const handleStateClick = (geo: any) => {
    const abbr = getAbbr(geo)
    if (!abbr) return
    const state = stateByAbbr[abbr]
    if (state) {
      onStateSelect(state.slug)
      setTimeout(() => {
        document.getElementById('pricing-packages')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 200)
    }
  }

  const hoveredState = hoveredAbbr ? stateByAbbr[hoveredAbbr] : null

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      {/* Tooltip fixe en haut */}
      <div className="h-8 mb-2 flex items-center justify-center">
        {hoveredState ? (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full"
          >
            <span className="text-blue-300 font-semibold text-sm">{hoveredState.name}</span>
            <span className="text-blue-400/60 text-xs">({hoveredState.abbreviation})</span>
            <span className="text-white/30 text-[10px]">— Click for pricing</span>
          </motion.div>
        ) : (
          <span className="text-white/15 text-xs font-light tracking-wide">
            Hover over a state to see details
          </span>
        )}
      </div>

      <div className="relative w-full aspect-[1.5/1]">
        <ComposableMap
          projection="geoAlbersUsa"
          projectionConfig={{ scale: 1100 }}
          className="w-full h-full"
          style={{ background: 'transparent' }}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const abbr = getAbbr(geo)
                const state = abbr ? stateByAbbr[abbr] : null
                const isActive = !!state
                const isSelected = state?.slug === selectedState
                const isHovered = hoveredAbbr === abbr

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onClick={() => handleStateClick(geo)}
                    onMouseEnter={() => {
                      if (isActive) setHoveredAbbr(abbr)
                    }}
                    onMouseLeave={() => setHoveredAbbr(null)}
                    style={{
                      default: {
                        fill: isSelected ? '#2563eb' : isHovered ? '#2a5a9a' : isActive ? '#1e3a5f' : '#0f1a2e',
                        stroke: isSelected ? '#60a5fa' : isHovered ? '#60a5fa' : isActive ? '#2a4a7a' : '#1a2a3e',
                        strokeWidth: isSelected ? 1.5 : isHovered ? 1.2 : 0.6,
                        outline: 'none',
                        cursor: isActive ? 'pointer' : 'default',
                        transition: 'all 0.15s ease',
                      },
                      hover: {
                        fill: isActive ? '#2a5a9a' : '#1a2a3e',
                        stroke: isActive ? '#60a5fa' : '#2a3a4e',
                        strokeWidth: 1.2,
                        outline: 'none',
                        cursor: isActive ? 'pointer' : 'default',
                        transition: 'all 0.15s ease',
                      },
                      pressed: {
                        fill: '#2563eb',
                        stroke: '#93c5fd',
                        strokeWidth: 1.8,
                        outline: 'none',
                      },
                    }}
                  />
                )
              })
            }
          </Geographies>

          {/* Labels */}
          {Object.entries(stateLabels).map(([abbr, coords]) => {
            const state = stateByAbbr[abbr]
            if (!state) return null
            const isSelected = state.slug === selectedState
            const isHovered = hoveredAbbr === abbr
            return (
              <text
                key={abbr}
                textAnchor="middle"
                x={coords[0]}
                y={coords[1]}
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: isSelected ? '3px' : isHovered ? '2.6px' : '2.2px',
                  fontWeight: isSelected || isHovered ? 700 : 500,
                  fill: isSelected ? '#93c5fd' : isHovered ? '#ffffff' : '#ffffff50',
                  pointerEvents: 'none',
                  userSelect: 'none',
                  letterSpacing: '0.5px',
                  transition: 'all 0.15s ease',
                }}
              >
                {abbr}
              </text>
            )
          })}
        </ComposableMap>
      </div>

      <p className="text-center text-white/15 text-[10px] font-light tracking-wide mt-3">
        Click on a state to see specific pricing
      </p>
    </div>
  )
}
