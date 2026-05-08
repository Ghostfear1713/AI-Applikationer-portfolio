import { useState } from 'react'
import { Github, ExternalLink, Wrench } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { projects } from '../data/projects'

const STATUS_STYLE = {
  active:     'tag-tools',
  wip:        'tag-python',
  completed:  'tag-default',
}

export default function Projects() {
  const { t, localize } = useLanguage()
  const [filter, setFilter] = useState('all')

  const allTags = ['all', ...new Set(projects.flatMap(p => p.tags))]
  const filtered = filter === 'all'
    ? projects
    : projects.filter(p => p.tags.includes(filter))

  return (
    <div className="page-enter max-w-4xl mx-auto px-6 py-10 space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold text-[var(--text-primary)] mb-2">
          {t('projects.title')}
        </h1>
        <p className="text-[var(--text-secondary)]">{t('projects.subtitle')}</p>
      </div>

      {/* Filter bar */}
      <div className="flex flex-wrap gap-2">
        {allTags.slice(0, 10).map(tag => (
          <button
            key={tag}
            onClick={() => setFilter(tag)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors border ${
              filter === tag
                ? 'bg-gradient-to-r from-violet-600 to-cyan-600 text-white border-transparent'
                : 'border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--accent)]'
            }`}
          >
            {tag === 'all' ? t('projects.filterAll') : tag}
          </button>
        ))}
      </div>

      {/* Project grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filtered.map(project => (
          <article
            key={project.id}
            className="card-hover rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-6 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-3 mb-3">
              <h2 className="font-bold text-[var(--text-primary)] leading-snug">
                {localize(project.title)}
              </h2>
              <div className="flex items-center gap-2 shrink-0">
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium border ${STATUS_STYLE[project.status] ?? 'tag-default'}`}>
                  {t(`projects.status${project.status.charAt(0).toUpperCase() + project.status.slice(1)}`)}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4 flex-1">
              {localize(project.description)}
            </p>

            {/* Highlights */}
            {project.highlights && (
              <ul className="mb-4 space-y-1">
                {localize(project.highlights).map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                    <span className="text-[var(--accent)] mt-0.5 shrink-0">▸</span>
                    {h}
                  </li>
                ))}
              </ul>
            )}

            {/* Tech tags */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.tags.map(tag => (
                <span key={tag} className="text-[10px] px-1.5 py-0.5 rounded-full tag-default border">
                  {tag}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  {t('projects.viewCode')}
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  {t('projects.viewDemo')}
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
