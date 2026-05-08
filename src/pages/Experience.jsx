import { Briefcase, GraduationCap, Heart } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

function TimelineItem({ title, org, period, current, description, tags }) {
  return (
    <div className="flex gap-4 pb-6 last:pb-0">
      <div className="flex flex-col items-center shrink-0">
        <div className="timeline-dot" />
        <div className="w-px flex-1 bg-[var(--border)] mt-2 last:hidden" />
      </div>
      <div>
        <div className="flex flex-wrap items-center gap-2 mb-1">
          <h3 className="font-semibold text-[var(--text-primary)] text-sm">{title}</h3>
          {current && (
            <span className="text-[10px] px-2 py-0.5 rounded-full tag-tools border">
              Nuværende
            </span>
          )}
        </div>
        <p className="text-sm font-medium text-[var(--accent)]">{org}</p>
        <p className="text-xs text-[var(--text-muted)] mt-0.5 mb-2">{period}</p>
        {description && (
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-2">{description}</p>
        )}
        {tags && (
          <div className="flex flex-wrap gap-1.5">
            {tags.map(tag => (
              <span key={tag} className="text-[10px] px-1.5 py-0.5 rounded-full tag-default border">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default function Experience() {
  const { t } = useLanguage()

  return (
    <div className="page-enter max-w-3xl mx-auto px-6 py-10 space-y-10">
      <div>
        <h1 className="text-3xl font-extrabold text-[var(--text-primary)] mb-2">
          {t('experience.title')}
        </h1>
        <p className="text-[var(--text-secondary)]">{t('experience.subtitle')}</p>
      </div>

      {/* Education */}
      <section className="rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-6">
        <h2 className="text-base font-bold text-[var(--text-primary)] flex items-center gap-2 mb-5">
          <GraduationCap className="w-4 h-4 text-[var(--accent)]" />
          {t('experience.education')}
        </h2>

        <TimelineItem
          title="Datamatiker — AP Computer Science in Software Development"
          org="UCL Erhvervsakademi og Professionshøjskole"
          period="Sept 2023 – Jun 2025"
          current={true}
          description="4. semester med fokus på AI-applikationer. Kurser inkluderer: Softwareudvikling, Databaser, Systemarkitektur, AI Applikationer, Professionel Kodeudvikling."
          tags={['Python', 'C#', 'SQL', 'React', 'AI', '.NET', 'Scrum']}
        />

        <TimelineItem
          title="STX — Naturvidenskabelig studentereksamen"
          org="Gymnasiet"
          period="2020 – 2023"
          description="A-niveau: Matematik, Fysik, Kemi. Stærk analytisk baggrund som fundamentet for IT-studiet."
          tags={['Matematik', 'Fysik', 'Analyse']}
        />
      </section>

      {/* Work */}
      <section className="rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-6">
        <h2 className="text-base font-bold text-[var(--text-primary)] flex items-center gap-2 mb-5">
          <Briefcase className="w-4 h-4 text-[var(--accent)]" />
          {t('experience.work')}
        </h2>

        <div className="py-8 text-center">
          <p className="text-sm text-[var(--text-muted)] italic">{t('experience.noWork')}</p>
        </div>
      </section>

      {/* Voluntary */}
      <section className="rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-6">
        <h2 className="text-base font-bold text-[var(--text-primary)] flex items-center gap-2 mb-5">
          <Heart className="w-4 h-4 text-[var(--accent)]" />
          {t('experience.voluntary')}
        </h2>

        <TimelineItem
          title="Open Source Bidragsyder"
          org="GitHub / Community"
          period="2024 – nu"
          current={true}
          description="Aktiv bidragsyder til open source Python-projekter inden for AI og developer tooling. Rapporterer bugs, forbedrer dokumentation og bidrager med mindre features."
          tags={['Open Source', 'Python', 'GitHub']}
        />
      </section>
    </div>
  )
}
