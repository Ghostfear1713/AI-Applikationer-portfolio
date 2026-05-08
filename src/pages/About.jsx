import { GraduationCap, MapPin, Calendar, Sparkles, BookOpen } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

function SectionHeading({ icon: Icon, children }) {
  return (
    <h2 className="text-base font-bold text-[var(--text-primary)] flex items-center gap-2 mb-4">
      <span className="w-1 h-5 rounded-full bg-gradient-to-b from-violet-500 to-cyan-500 inline-block" />
      {Icon && <Icon className="w-4 h-4 text-[var(--accent)]" />}
      {children}
    </h2>
  )
}

export default function About() {
  const { t } = useLanguage()

  const currentlyLearning = [
    'LangGraph & Multi-Agent Systems',
    'RAG-pipelines & vector databases',
    'Spec-Driven Development',
    'Scrum & Agile (System Development)',
    'Docker & container orchestration',
  ]

  return (
    <div className="page-enter max-w-3xl mx-auto px-6 py-10 space-y-8">
      {/* Hero */}
      <section>
        <div className="flex flex-col sm:flex-row items-start gap-6 mb-6">
          {/* Photo */}
          <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0 shadow-lg border border-[var(--border)]">
            <img
              src="/orhan.jpg"
              alt="Orhan Secilmis"
              className="w-full h-full object-cover object-center"
              onError={e => {
                e.target.style.display = 'none'
                e.target.parentElement.classList.add('bg-gradient-to-br', 'from-violet-600', 'to-cyan-500')
                e.target.parentElement.innerHTML = '<span class="text-white text-3xl font-black w-full h-full flex items-center justify-center">OS</span>'
              }}
            />
          </div>
          <div>
            <h1 className="text-3xl font-extrabold text-[var(--text-primary)] mb-1">
              Orhan Secilmis
            </h1>
            <p className="text-[var(--accent)] font-medium mb-3">
              {t('home.role')} · AI Applikationer
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-[var(--text-secondary)]">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" /> Søborg, Danmark
              </span>
              <span className="flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5" /> Datamatiker 4. sem
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" /> 30 år
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-6 space-y-4">
        <SectionHeading>{t('about.title')}</SectionHeading>
        <p className="text-[var(--text-secondary)] leading-relaxed">{t('about.bio1')}</p>
        <p className="text-[var(--text-secondary)] leading-relaxed">{t('about.bio2')}</p>
        <p className="text-[var(--text-secondary)] leading-relaxed">{t('about.bio3')}</p>
      </section>

      {/* Education */}
      <section className="rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-6">
        <SectionHeading icon={GraduationCap}>{t('about.education')}</SectionHeading>
        <div className="space-y-5">

          {/* AI Applikationer */}
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="timeline-dot mt-1.5" />
              <div className="w-px flex-1 bg-[var(--border)] mt-2" />
            </div>
            <div className="pb-4">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h3 className="font-semibold text-[var(--text-primary)] text-sm">Datamatiker (AP Computer Science)</h3>
                <span className="text-[10px] px-2 py-0.5 rounded-full tag-tools border">Nuværende</span>
              </div>
              <p className="text-sm text-[var(--accent)]">UCL Erhvervsakademi og Professionshøjskole</p>
              <p className="text-xs text-[var(--text-muted)] mt-0.5 mb-2">2023 – 2025</p>
              <ul className="space-y-1">
                {[
                  '4. semester — AI Applikationer (LLM APIs, RAG, Code Agents)',
                  'Systemudvikling med Scrum og Agile',
                  'Afsluttet valgfag: Unity & spiludvikling',
                  'Tidligere: Softwareudvikling, Databaser, Systemarkitektur',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                    <span className="text-[var(--accent)] mt-0.5 shrink-0">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* Two-column: interests + currently learning */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <section className="rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-5">
          <SectionHeading icon={Sparkles}>{t('about.interests')}</SectionHeading>
          <ul className="space-y-2">
            {t('about.interestsList').map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                <span className="text-[var(--accent)] mt-0.5">▸</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-5">
          <SectionHeading icon={BookOpen}>{t('about.currentlyLearning')}</SectionHeading>
          <ul className="space-y-2">
            {currentlyLearning.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                <span className="text-emerald-400 mt-0.5">→</span>
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  )
}
