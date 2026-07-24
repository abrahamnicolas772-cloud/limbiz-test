'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { FiSearch, FiX } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'
import { search, SearchResult } from '@/lib/search'

export default function SearchBar() {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => { if (isOpen && inputRef.current) inputRef.current.focus() }, [isOpen])
  useEffect(() => { if (query.length >= 2) setResults(search(query)); else setResults([]) }, [query])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') { setIsOpen(false); setQuery(''); setResults([]) }
    if (e.key === 'Enter' && results.length > 0) { router.push(results[0].url); setIsOpen(false); setQuery(''); setResults([]) }
  }

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-white/60 hover:text-white transition" aria-label="Search">
        <FiSearch size={20} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="absolute top-full left-0 right-0 mt-2 bg-black/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-4 z-50">
            <div className="flex items-center gap-3">
              <FiSearch className="text-blue-400 flex-shrink-0" size={20} />
              <input ref={inputRef} type="text" value={query} onChange={(e) => setQuery(e.target.value)} onKeyDown={handleKeyDown} placeholder="Search for services, tools, guides, pages..." className="flex-1 bg-transparent text-white placeholder-white/30 focus:outline-none" />
              {query && <button onClick={() => { setQuery(''); setResults([]) }} className="text-white/30 hover:text-white transition"><FiX size={18} /></button>}
            </div>
            {results.length > 0 && (
              <div className="mt-4 pt-4 border-t border-white/5">
                <div className="text-xs text-white/30 uppercase tracking-wider mb-2">{results.length} result{results.length > 1 ? 's' : ''}</div>
                <div className="space-y-1 max-h-60 overflow-y-auto">
                  {results.map((result) => (
                    <button key={result.id} onClick={() => { router.push(result.url); setIsOpen(false); setQuery(''); setResults([]) }} className="w-full flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-white/5 transition text-left">
                      <div><div className="text-white text-sm font-medium">{result.title}</div><div className="text-white/40 text-xs">{result.category} · {result.description.slice(0, 60)}...</div></div>
                      <span className="ml-auto text-xs text-blue-400/50">{result.category}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
            {query.length >= 2 && results.length === 0 && <div className="mt-4 pt-4 border-t border-white/5 text-white/40 text-sm text-center">No results found for "{query}"</div>}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
