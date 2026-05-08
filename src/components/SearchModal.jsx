import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, BookOpen, Code2, Layers, X, ArrowRight } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { portfolioPosts } from '../data/portfolioPosts'
import { projects } from '../data/projects'
import { skillCategories } from '../data/skills'

function buildIndex(localize) {
  const items = []

  portfolioPosts.forEach(post => {
    const text = [
      localize(post.title),
      localize(post.summary),
      ...post.tags,
      post.sections?.map(s => localize(s.content)).join(' ') ?? '',
    ].join(' ').toLowerCase()

    items.push({
      type: 'post',
      id: post.id,
      title: localize(post.title),
      subtitle: localize(post.summary),
      tags: post.tags,
      href: `/portfolio/${post.slug}`,
      text,
    })
  })

  projects.forEach(proj => {
    const text = [localize(proj.title), localize(proj.description), ...proj.tags].join(' ').toLowerCase()
    items.push({
      type: 'project',
      id: proj.id,
      title: localize(proj.title),
      subtitle: localize(proj.description),
      tags: proj.tags,
      href: '/projects',
      text,
    })
  })

  skillCategories.forEach(cat => {
    cat.skills.forEach(skill => {
      items.push({
        type: 'skill',
        id: `${cat.id}-${skill.name}`,
        title: skill.name,
        subtitle: `${skill.level}% · ${cat.id}`,
        href: '/skills',
        text: skill.name.toLowerCase(),
      })
    })
  })

  return items
}

const TYPE_META = {
  post:    { icon: BookOpen,  label: 'Sessions',   color: 'text-violet-400' },
  project: { icon: Code2,     label: 'Projects',   color: 'text-cyan-400' },
  skill:   { icon: Layers,    label: 'Skills',     color: 'text-emerald-400' },
}

export default function SearchModal({ isOpen, onClose }) {
  const { t, localize } = useLanguage()
  const navigate = useNavigate()
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [selectedIdx, setSelectedIdx] = useState(0)
  const inputRef = useRef(null)
  const indexRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      indexRef.current = buildIndex(localize)
      setQuery('')
      setResults([])
      setTimeout(() => inputRef.current?.focus(), 50)
    }
  }, [isOpen, localize])

  useEffect(() => {
    if (!query.trim()) { setResults([]); return }
    const q = query.toLowerCase()
    const matches = (indexRef.current ?? [])
      .filter(item => item.text.includes(q))
      .slice(0, 12)
    setResults(matches)
    setSelectedIdx(0)
  }, [query])

  useEffect(() => {
    const handler = e => {
      if (!isOpen) return
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowDown') setSelectedIdx(i => Math.min(i + 1, results.length - 1))
      if (e.key === 'ArrowUp') setSelectedIdx(i => Math.max(i - 1, 0))
      if (e.key === 'Enter' && results[selectedIdx]) {
        navigate(results[selectedIdx].href)
        onClose()
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [isOpen, results, selectedIdx, navigate, onClose])

  if (!isOpen) return null

  const grouped = results.reduce((acc, r) => {
    if (!acc[r.type]) acc[r.type] = []
    acc[r.type].push(r)
    return acc
  }, {})

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-16 px-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative w-full max-w-xl animate-scale-in">
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)] shadow-2xl overflow-hidden">
          {/* Input */}
          <div className="flex items-center gap-3 px-4 py-3 border-b border-[var(--border)]">
            <Search className="w-5 h-5 text-[var(--text-muted)] shrink-0" />
            <input
              ref={inputRef}
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder={t('search.placeholder')}
              className="flex-1 bg-transparent text-[var(--text-primary)] placeholder-[var(--text-muted)] text-sm outline-none"
            />
            {query && (
              <button onClick={() => setQuery('')} className="text-[var(--text-muted)] hover:text-[var(--text-secondary)]">
                <X className="w-4 h-4" />
              </button>
            )}
            <kbd className="hidden sm:block text-[10px] bg-[var(--bg-hover)] border border-[var(--border)] rounded px-1.5 py-0.5 font-mono text-[var(--text-muted)]">
              ESC
            </kbd>
          </div>

          {/* Results */}
          <div className="max-h-[60vh] overflow-y-auto">
            {!query && (
              <div className="py-12 text-center text-sm text-[var(--text-muted)]">
                {t('search.hint')}
              </div>
            )}

            {query && results.length === 0 && (
              <div className="py-12 text-center text-sm text-[var(--text-muted)]">
                {t('search.noResults')}
              </div>
            )}

            {Object.entries(grouped).map(([type, items]) => {
              const meta = TYPE_META[type]
              const Icon = meta.icon
              return (
                <div key={type} className="px-2 py-2">
                  <div className={`flex items-center gap-1.5 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest ${meta.color}`}>
                    <Icon className="w-3 h-3" />
                    {meta.label}
                  </div>
                  {items.map((item, i) => {
                    const globalIdx = results.indexOf(item)
                    const isSelected = globalIdx === selectedIdx
                    return (
                      <button
                        key={item.id}
                        onClick={() => { navigate(item.href); onClose() }}
                        className={`w-full flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg text-left transition-colors ${
                          isSelected
                            ? 'bg-[var(--accent-soft)] text-[var(--accent)]'
                            : 'hover:bg-[var(--bg-hover)]'
                        }`}
                      >
                        <div className="min-w-0">
                          <div className={`text-sm font-medium truncate ${isSelected ? 'text-[var(--accent)]' : 'text-[var(--text-primary)]'}`}>
                            {item.title}
                          </div>
                          {item.subtitle && (
                            <div className="text-xs text-[var(--text-muted)] truncate mt-0.5">
                              {item.subtitle}
                            </div>
                          )}
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-[var(--text-muted)] shrink-0" />
                      </button>
                    )
                  })}
                </div>
              )
            })}
          </div>

          {/* Footer hint */}
          {results.length > 0 && (
            <div className="px-4 py-2 border-t border-[var(--border)] flex items-center gap-3 text-[10px] text-[var(--text-muted)]">
              <span><kbd className="bg-[var(--bg-hover)] border border-[var(--border)] rounded px-1 py-0.5 font-mono">↑↓</kbd> Navigate</span>
              <span><kbd className="bg-[var(--bg-hover)] border border-[var(--border)] rounded px-1 py-0.5 font-mono">↵</kbd> Open</span>
              <span><kbd className="bg-[var(--bg-hover)] border border-[var(--border)] rounded px-1 py-0.5 font-mono">ESC</kbd> Close</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
