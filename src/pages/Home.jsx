import { useNavigate } from 'react-router-dom'
import { ArrowRight, BookOpen, Code2, Github, Linkedin, Mail, Sparkles } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { portfolioPosts } from '../data/portfolioPosts'
import { projects } from '../data/projects'
import { skillCategories } from '../data/skills'
import PostCard from '../components/PostCard'

// ─── Hero ────────────────────────────────────────────────────────────────────
function Hero() {
  const { t } = useLanguage()
  const navigate = useNavigate()

  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center">
      <div className="max-w-6xl mx-auto px-6 py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: text */}
          <div className="space-y-6 animate-slide-up">
            <div>
              <p className="text-sm font-semibold text-[var(--accent)] mb-3 tracking-wide uppercase">
                {t('home.greeting')}
              </p>
              <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-[1.1] text-[var(--text-primary)] mb-4">
                Orhan<br />
                <span className="gradient-text">Secilmis.</span>
              </h1>
              <p className="text-xl font-medium text-[var(--text-secondary)]">
                {t('home.role')}
              </p>
            </div>

            <p className="text-[var(--text-secondary)] leading-relaxed max-w-md">
              {t('home.heroBio')}
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={() => navigate('/portfolio')}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 text-white text-sm font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-violet-500/20"
              >
                <BookOpen className="w-4 h-4" />
                {t('home.viewPortfolio')}
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => navigate('/projects')}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-primary)] text-sm font-medium hover:border-[var(--accent)] transition-colors"
              >
                <Code2 className="w-4 h-4" />
                {t('home.viewProjects')}
              </button>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4 pt-2">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:Uniton@live.dk"
                className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right: photo */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-violet-600/30 to-cyan-500/20 blur-3xl scale-110" />

              {/* Photo — falls back to initials if image not found */}
              <div className="relative w-64 h-72 sm:w-72 sm:h-80 rounded-3xl overflow-hidden shadow-2xl border border-[var(--border)]">
                <img
                  src="/orhan.jpg"
                  alt="Orhan Secilmis"
                  className="w-full h-full object-cover object-center"
                  onError={e => {
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />
                {/* Fallback gradient if photo missing */}
                <div
                  className="hidden absolute inset-0 bg-gradient-to-br from-violet-600 to-cyan-500 items-center justify-center"
                >
                  <span className="text-white text-8xl font-black select-none">OS</span>
                </div>
              </div>


            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="flex justify-center mt-16">
          <div className="flex flex-col items-center gap-2 text-[var(--text-muted)] animate-bounce">
            <div className="w-px h-8 bg-gradient-to-b from-transparent to-[var(--border)]" />
            <span className="text-xs">scroll</span>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Featured case project ──────────────────────────────────────────────────
function CaseHighlight() {
  const { t, localize } = useLanguage()
  const navigate = useNavigate()
  const post = portfolioPosts.find(p => p.slug === 'engestofte-gods-ai-case-project')

  if (!post) return null

  return (
    <section className="max-w-6xl mx-auto px-6 pt-12">
      <div
        onClick={() => navigate(`/portfolio/${post.slug}`)}
        className="card-hover cursor-pointer rounded-2xl border border-[var(--border)] bg-gradient-to-br from-violet-600/10 via-cyan-500/5 to-transparent p-8 sm:p-10 relative overflow-hidden group"
      >
        <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-gradient-to-br from-violet-600/20 to-cyan-500/20 blur-3xl" />

        <div className="relative flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-violet-600 to-cyan-600 text-white text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              {t('home.newCaseLabel')}
            </span>
            <span className="text-xs text-[var(--text-muted)]">{post.module}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] leading-tight group-hover:text-[var(--accent)] transition-colors">
            {localize(post.title)}
          </h2>

          <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed max-w-3xl">
            {localize(post.summary)}
          </p>

          <div className="flex flex-wrap gap-1.5">
            {post.tags.map(tag => (
              <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full tag-default border">{tag}</span>
            ))}
          </div>

          <div className="pt-2">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 text-white text-sm font-semibold group-hover:opacity-90 transition-opacity shadow-lg shadow-violet-500/20">
              {t('home.viewCase')}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Stats bar ───────────────────────────────────────────────────────────────
function StatsBar() {
  const { t } = useLanguage()
  const totalSkills = skillCategories.reduce((n, c) => n + c.skills.length, 0)

  const stats = [
    { value: portfolioPosts.length, label: t('home.statsModules'), color: 'text-violet-400' },
    { value: projects.length,       label: t('home.statsProjects'), color: 'text-cyan-400' },
    { value: totalSkills,           label: t('home.statsSkills'),   color: 'text-emerald-400' },
    { value: t('home.semester'),    label: 'Datamatiker',           color: 'text-amber-400' },
  ]

  return (
    <section className="border-y border-[var(--border)] bg-[var(--bg-surface)]">
      <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <div key={i} className="text-center">
            <div className={`text-3xl font-extrabold ${s.color}`}>{s.value}</div>
            <div className="text-xs text-[var(--text-muted)] mt-1">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

// ─── Section wrapper ─────────────────────────────────────────────────────────
function Section({ title, action, actionLabel, children }) {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-extrabold text-[var(--text-primary)]">{title}</h2>
        {action && (
          <button onClick={action} className="text-sm text-[var(--accent)] hover:underline flex items-center gap-1">
            {actionLabel} <ArrowRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
      {children}
    </section>
  )
}

// ─── Main ────────────────────────────────────────────────────────────────────
export default function Home() {
  const { t, localize } = useLanguage()
  const navigate = useNavigate()
  const recentPosts = portfolioPosts.slice(-3).reverse()
  const featuredProjects = projects.filter(p => p.featured).slice(0, 3)

  return (
    <div className="page-enter">
      <Hero />
      <CaseHighlight />
      <StatsBar />

      {/* Recent posts */}
      <Section title={t('home.recentPosts')} action={() => navigate('/portfolio')} actionLabel={t('home.seeAll')}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {recentPosts.map(post => <PostCard key={post.id} post={post} />)}
        </div>
      </Section>

      <div className="max-w-6xl mx-auto px-6">
        <div className="border-t border-[var(--border-subtle)]" />
      </div>

      {/* Featured projects */}
      <Section title={t('home.featuredProj')} action={() => navigate('/projects')} actionLabel={t('home.seeAll')}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredProjects.map(project => (
            <article
              key={project.id}
              className="card-hover rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-5 cursor-pointer group"
              onClick={() => navigate('/projects')}
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-semibold text-[var(--text-primary)] text-sm leading-snug group-hover:text-[var(--accent)] transition-colors">
                  {localize(project.title)}
                </h3>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium border ml-2 shrink-0 ${
                  project.status === 'active' ? 'tag-tools' :
                  project.status === 'wip'    ? 'tag-python' : 'tag-default'
                }`}>
                  {project.status}
                </span>
              </div>
              <p className="text-xs text-[var(--text-secondary)] mb-4 line-clamp-2 leading-relaxed">
                {localize(project.description)}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.slice(0, 3).map(tag => (
                  <span key={tag} className="text-[10px] px-1.5 py-0.5 rounded-full tag-default border">{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-[var(--border)] bg-[var(--bg-surface)]">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-sm font-semibold gradient-text">Orhan Secilmis</span>
          <span className="text-xs text-[var(--text-muted)]">
            Datamatiker · AI Applikationer · {t('home.semester')} · 2025
          </span>
          <div className="flex items-center gap-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors">
              <Github className="w-4 h-4" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
