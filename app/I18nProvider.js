'use client'

import { InextProvider } from 'react-inext'
import in from './in'

export default function InProvider({ children }) {
  return (
    <InextProvider in={in}>
      {children}
    </InextProvider>
  )
}