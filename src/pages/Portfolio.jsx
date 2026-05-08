import { useState } from 'react'
import { Search, BookOpen, Filter } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { portfolioPosts } from '../data/portfolioPosts'
import PostCard from '../components/PostCard'

export default function Portfolio() {
  const { t, localize } = useLanguage()
  const [query, setQuery] = useState('')
  const [activeTag, setActiveTag] = useState('all')

  const allTags = ['all', ...new Set(portfolioPosts.flatMap(p => p.tags))]

  const filtered = portfolioPosts
    .filter(post => {
      const matchesTag = activeTag === 'all' || post.tags.includes(activeTag)
      if (!matchesTag) return false
      if (!query.trim()) return true
      const q = query.toLowerCase()
      return (
        localize(post.title).toLowerCase().includes(q) ||
        localize(post.summary).toLowerCase().includes(q) ||
        post.tags.some(t => t.toLowerCase().includes(q))
      )
    })
    .slice()
    .reverse()

  return (
    <div className="page-enter max-w-4xl mx-auto px-6 py-10 space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <BookOpen className="w-5 h-5 text-[var(--accent)]" />
          <h1 className="text-3xl font-extrabold text-[var(--text-primary)]">
            {t('portfolio.title')}
          </h1>
        </div>
        <p className="text-[var(--text-secondary)]">{t('portfolio.subtitle')}</p>
      </div>

      {/* Search + filters */}
      <div className="space-y-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-muted)]" />
          <input
            type="text"
            placeholder={t('portfolio.search')}
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-primary)] placeholder-[var(--text-muted)] text-sm outline-none focus:border-[var(--accent)] transition-colors"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {allTags.slice(0, 12).map(tag => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-colors border ${
                activeTag === tag
                  ? 'bg-gradient-to-r from-violet-600 to-cyan-600 text-white border-transparent'
                  : 'border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--accent)]'
              }`}
            >
              {tag === 'all' ? t('portfolio.filterAll') : tag}
            </button>
          ))}
        </div>
      </div>

      {/* Count */}
      <p className="text-xs text-[var(--text-muted)]">
        {filtered.length} {filtered.length === 1 ? 'session' : 'sessioner'}
        {(query || activeTag !== 'all') ? ' matchede' : ' i alt'}
      </p>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="py-16 text-center text-[var(--text-muted)]">
          <BookOpen className="w-10 h-10 mx-auto mb-3 opacity-30" />
          <p>{t('portfolio.noResults')}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  )
}
