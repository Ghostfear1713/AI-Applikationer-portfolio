import { useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import {
  ArrowLeft, Calendar, Clock, Tag, BookOpen,
  MessageSquare, Zap, Search, Target, CheckCircle2,
  Link2, Code, Copy, Check, ChevronLeft, ChevronRight,
} from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { portfolioPosts } from '../data/portfolioPosts'
import TagBadge from '../components/TagBadge'
import RightNav from '../components/RightNav'

const SECTION_META = {
  learned:    { icon: BookOpen,       color: 'text-violet-400' },
  reflections:{ icon: MessageSquare,  color: 'text-cyan-400' },
  challenges: { icon: Zap,            color: 'text-amber-400' },
  curiosity:  { icon: Search,         color: 'text-emerald-400' },
  approach:   { icon: Target,         color: 'text-rose-400' },
  outcome:    { icon: CheckCircle2,   color: 'text-teal-400' },
}

function ProseContent({ text }) {
  if (!text) return null
  const paragraphs = text.split('\n\n')
  return (
    <div className="prose-content space-y-2">
      {paragraphs.map((para, i) => {
        if (para.startsWith('**') || para.includes('\n-') || para.includes('\n•')) {
          const lines = para.split('\n')
          return (
            <div key={i} className="space-y-1">
              {lines.map((line, j) => {
                if (line.startsWith('**') && line.endsWith('**')) {
                  return <p key={j} className="font-semibold text-[var(--text-primary)] mt-3 first:mt-0">{line.replace(/\*\*/g, '')}</p>
                }
                if (line.startsWith('- ') || line.startsWith('• ')) {
                  return (
                    <div key={j} className="flex items-start gap-2 text-sm">
                      <span className="text-[var(--accent)] mt-0.5 shrink-0">▸</span>
                      <span dangerouslySetInnerHTML={{ __html: line.replace(/^[-•]\s*/, '').replace(/`([^`]+)`/g, '<code class="font-mono text-xs bg-[var(--accent-soft)] text-[var(--accent)] px-1.5 py-0.5 rounded">$1</code>') }} />
                    </div>
                  )
                }
                if (line.trim() === '') return null
                return (
                  <p key={j} className="text-sm text-[var(--text-secondary)] leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: line.replace(/`([^`]+)`/g, '<code class="font-mono text-xs bg-[var(--accent-soft)] text-[var(--accent)] px-1.5 py-0.5 rounded">$1</code>').replace(/\*\*([^*]+)\*\*/g, '<strong class="text-[var(--text-primary)] font-semibold">$1</strong>') }} />
                )
              })}
            </div>
          )
        }
        return (
          <p key={i} className="text-sm text-[var(--text-secondary)] leading-relaxed"
            dangerouslySetInnerHTML={{ __html: para.replace(/`([^`]+)`/g, '<code class="font-mono text-xs bg-[var(--accent-soft)] text-[var(--accent)] px-1.5 py-0.5 rounded">$1</code>').replace(/\*\*([^*]+)\*\*/g, '<strong class="text-[var(--text-primary)] font-semibold">$1</strong>') }} />
        )
      })}
    </div>
  )
}

function CodeBlock({ snippet }) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    await navigator.clipboard.writeText(snippet.code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="rounded-xl border border-[var(--border)] overflow-hidden my-4">
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-[var(--border)] bg-[var(--bg-hover)]">
        <div className="flex items-center gap-2">
          <Code className="w-3.5 h-3.5 text-[var(--text-muted)]" />
          <span className="text-xs font-medium text-[var(--text-secondary)]">{snippet.title}</span>
          {snippet.language && (
            <span className="text-[10px] px-1.5 py-0.5 rounded tag-python border">{snippet.language}</span>
          )}
        </div>
        <button
          onClick={copy}
          className="flex items-center gap-1 text-xs text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors"
        >
          {copied
            ? <><Check className="w-3 h-3 text-emerald-400" /><span className="text-emerald-400">Kopieret</span></>
            : <><Copy className="w-3 h-3" /><span>Kopiér</span></>
          }
        </button>
      </div>
      <pre className="code-block rounded-none border-0 text-sm">
        <code>{snippet.code}</code>
      </pre>
    </div>
  )
}

export default function PortfolioPost() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const { t, localize } = useLanguage()

  const post = portfolioPosts.find(p => p.slug === slug)
  const postIdx = portfolioPosts.findIndex(p => p.slug === slug)
  const prevPost = portfolioPosts[postIdx - 1]
  const nextPost = portfolioPosts[postIdx + 1]

  if (!post) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-20 text-center">
        <p className="text-[var(--text-muted)] mb-4">Session ikke fundet.</p>
        <button onClick={() => navigate('/portfolio')} className="text-[var(--accent)] hover:underline">
          ← {t('ui.backToPortfolio')}
        </button>
      </div>
    )
  }

  const date = new Date(post.date).toLocaleDateString('da-DK', {
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',
  })

  const tocSections = [
    { id: 'meta',    label: 'Oversigt' },
    ...post.sections.map(s => ({
      id: s.id,
      label: t(`portfolio.sections.${s.id}`),
    })),
    ...(post.codeSnippets?.length ? [{ id: 'snippets', label: t('portfolio.sections.snippets') }] : []),
    ...(post.resources?.length   ? [{ id: 'resources', label: t('portfolio.sections.resources') }] : []),
  ]

  return (
    <div className="page-enter flex gap-0">
      {/* Main content */}
      <article className="flex-1 max-w-3xl mx-auto px-6 py-10 min-w-0">
        {/* Back */}
        <button
          onClick={() => navigate('/portfolio')}
          className="flex items-center gap-1.5 text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          {t('ui.backToPortfolio')}
        </button>

        {/* Hero */}
        <header id="section-meta" className="mb-10">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="px-3 py-1 rounded-full bg-gradient-to-r from-violet-600 to-cyan-600 text-white text-xs font-bold">
              {t('portfolio.meta.session')} {post.sessionNumber}
            </span>
            <span className="text-sm text-[var(--text-muted)]">{post.module}</span>
          </div>

          <h1 className="text-2xl md:text-3xl font-extrabold text-[var(--text-primary)] leading-tight mb-4">
            {localize(post.title)}
          </h1>

          <div className="flex flex-wrap gap-4 text-xs text-[var(--text-muted)] mb-5">
            <span className="flex items-center gap-1.5 capitalize">
              <Calendar className="w-3.5 h-3.5" />
              {date}
            </span>
            {post.readTime && (
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime} {t('portfolio.meta.readTime')}
              </span>
            )}
          </div>

          {/* Summary card */}
          <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-5 mb-5">
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed italic">
              {localize(post.summary)}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {post.tags.map(tag => <TagBadge key={tag} tag={tag} />)}
          </div>
        </header>

        {/* Sections */}
        <div className="space-y-8">
          {post.sections.map(section => {
            const meta = SECTION_META[section.id] ?? {}
            const Icon = meta.icon ?? BookOpen
            return (
              <section key={section.id} id={`section-${section.id}`} className="scroll-mt-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`post-section-icon ${meta.color ?? 'text-[var(--accent)]'}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <h2 className="font-bold text-[var(--text-primary)]">
                    {t(`portfolio.sections.${section.id}`)}
                  </h2>
                </div>
                <div className="pl-11">
                  <ProseContent text={localize(section.content)} />
                </div>
              </section>
            )
          })}

          {/* Code snippets */}
          {post.codeSnippets?.length > 0 && (
            <section id="section-snippets" className="scroll-mt-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="post-section-icon">
                  <Code className="w-4 h-4" />
                </div>
                <h2 className="font-bold text-[var(--text-primary)]">
                  {t('portfolio.sections.snippets')}
                </h2>
              </div>
              <div className="pl-11 space-y-4">
                {post.codeSnippets.map(snippet => (
                  <CodeBlock key={snippet.id} snippet={snippet} />
                ))}
              </div>
            </section>
          )}

          {/* Resources */}
          {post.resources?.length > 0 && (
            <section id="section-resources" className="scroll-mt-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="post-section-icon">
                  <Link2 className="w-4 h-4" />
                </div>
                <h2 className="font-bold text-[var(--text-primary)]">
                  {t('portfolio.sections.resources')}
                </h2>
              </div>
              <div className="pl-11">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {post.resources.map((r, i) => (
                    <a
                      key={i}
                      href={r.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--bg-card)] hover:border-[var(--accent)] transition-colors group"
                    >
                      <Link2 className="w-3.5 h-3.5 text-[var(--accent)] shrink-0" />
                      <span className="text-sm text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors truncate">
                        {r.title}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </section>
          )}
        </div>

        {/* Prev / Next navigation */}
        <div className="flex justify-between gap-4 mt-12 pt-8 border-t border-[var(--border)]">
          {prevPost ? (
            <Link
              to={`/portfolio/${prevPost.slug}`}
              className="flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors group max-w-xs"
            >
              <ChevronLeft className="w-4 h-4 shrink-0 group-hover:-translate-x-0.5 transition-transform" />
              <span className="truncate">{localize(prevPost.title)}</span>
            </Link>
          ) : <div />}

          {nextPost ? (
            <Link
              to={`/portfolio/${nextPost.slug}`}
              className="flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors group max-w-xs text-right"
            >
              <span className="truncate">{localize(nextPost.title)}</span>
              <ChevronRight className="w-4 h-4 shrink-0 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          ) : <div />}
        </div>
      </article>

      {/* Right TOC */}
      <RightNav sections={tocSections} />
    </div>
  )
}
