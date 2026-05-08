import { useNavigate } from 'react-router-dom'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import TagBadge from './TagBadge'

export default function PostCard({ post, compact = false }) {
  const { localize, t } = useLanguage()
  const navigate = useNavigate()

  const date = new Date(post.date).toLocaleDateString('da-DK', {
    day: 'numeric', month: 'short', year: 'numeric',
  })

  return (
    <article
      onClick={() => navigate(`/portfolio/${post.slug}`)}
      className="card-hover cursor-pointer rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-5 group"
    >
      {/* Header row */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[var(--accent-soft)] text-[var(--accent)]">
            {t('portfolio.meta.session')} {post.sessionNumber}
          </span>
          <span className="text-xs text-[var(--text-muted)]">{post.module}</span>
        </div>
        <div className="flex items-center gap-3 text-xs text-[var(--text-muted)] shrink-0">
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {date}
          </span>
          {post.readTime && (
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {post.readTime} {t('portfolio.meta.readTime')}
            </span>
          )}
        </div>
      </div>

      {/* Title */}
      <h3 className="font-semibold text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent)] transition-colors leading-snug">
        {localize(post.title)}
      </h3>

      {/* Summary */}
      {!compact && (
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4 line-clamp-2">
          {localize(post.summary)}
        </p>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between gap-2 mt-auto">
        <div className="flex flex-wrap gap-1.5">
          {post.tags.slice(0, 4).map(tag => (
            <TagBadge key={tag} tag={tag} size="xs" />
          ))}
          {post.tags.length > 4 && (
            <span className="text-[10px] text-[var(--text-muted)]">+{post.tags.length - 4}</span>
          )}
        </div>
        <ArrowRight className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--accent)] group-hover:translate-x-1 transition-all shrink-0" />
      </div>
    </article>
  )
}
