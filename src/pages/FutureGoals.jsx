import { Target, Rocket, BookOpen, Calendar, CheckCircle2, Circle } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

function GoalItem({ text, done = false }) {
  return (
    <li className="flex items-start gap-2.5">
      {done
        ? <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
        : <Circle className="w-4 h-4 text-[var(--text-muted)] shrink-0 mt-0.5" />
      }
      <span className={`text-sm leading-relaxed ${done ? 'text-[var(--text-muted)] line-through' : 'text-[var(--text-secondary)]'}`}>
        {text}
      </span>
    </li>
  )
}

export default function FutureGoals() {
  const { t } = useLanguage()

  const shortTerm = [
    { text: 'Afslutte datamatiker-uddannelsen med flotte karakterer', done: false },
    { text: 'Bygge og deploye et komplet RAG-system med dette portfolio', done: false },
    { text: 'Lære LangGraph og bygge et multi-agent system', done: false },
    { text: 'Få en studierelevant praktikplads eller deltidsjob', done: false },
    { text: 'Bidrage til et større open source AI-projekt', done: false },
    { text: 'Opsætte CI/CD pipeline for alle personlige projekter', done: false },
  ]

  const longTerm = [
    { text: 'Arbejde som AI-ingeniør eller backend-udvikler i et tech-firma', done: false },
    { text: 'Videreuddanne mig evt. med en bachelor i software engineering', done: false },
    { text: 'Specialisere mig i LLM-systemer, RAG og agentarkitektur', done: false },
    { text: 'Bygge et eget open source-projekt med 100+ GitHub-stjerner', done: false },
    { text: 'Tale til en developer-konference om AI-applikationer', done: false },
  ]

  const nextLearn = [
    { topic: 'LangGraph', desc: 'Stateful multi-agent orkestration', tag: 'AI' },
    { topic: 'Kubernetes', desc: 'Container orchestration i skyen', tag: 'DevOps' },
    { topic: 'Rust', desc: 'Systems programming for performance-kritiske dele', tag: 'Lang' },
    { topic: 'GraphQL', desc: 'Fleksible API-designs', tag: 'API' },
    { topic: 'MLOps', desc: 'Model deployment og monitoring i produktion', tag: 'AI' },
  ]

  return (
    <div className="page-enter max-w-3xl mx-auto px-6 py-10 space-y-10">
      <div>
        <h1 className="text-3xl font-extrabold text-[var(--text-primary)] mb-2">
          {t('goals.title')}
        </h1>
        <p className="text-[var(--text-secondary)]">{t('goals.subtitle')}</p>
      </div>

      {/* Career vision */}
      <section className="rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-6">
        <div className="flex items-center gap-2 mb-4">
          <Rocket className="w-5 h-5 text-[var(--accent)]" />
          <h2 className="font-bold text-[var(--text-primary)]">{t('goals.career')}</h2>
        </div>
        <div className="space-y-3 text-sm text-[var(--text-secondary)] leading-relaxed">
          <p>
            Mit overordnede karrieremål er at arbejde som AI-ingeniør eller senior backend-udvikler med specialisering inden for LLM-systemer og RAG-arkitektur. Jeg vil bygge systemer, der kombinerer klassisk softwareingeniørkunst med de muligheder, moderne AI tilbyder.
          </p>
          <p>
            Jeg ser AI ikke som et modeord, men som en fundamentalt ny måde at bygge software på — og jeg vil være tidligt med til at definere, hvordan man gør det ordentligt: med fokus på pålidelighed, testbarhed og forklarbarhed.
          </p>
          <p>
            På lidt længere sigt vil jeg gerne arbejde i et internationalt miljø, eventuelt bidrage til open source-infrastruktur inden for AI-verktøjer, og måske undervise eller mentore andre udviklere.
          </p>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Short term */}
        <section className="rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-5">
          <div className="flex items-center gap-2 mb-4">
            <Calendar className="w-4 h-4 text-[var(--accent)]" />
            <h2 className="font-bold text-[var(--text-primary)] text-sm">{t('goals.shortTerm')}</h2>
          </div>
          <ul className="space-y-3">
            {shortTerm.map((g, i) => <GoalItem key={i} text={g.text} done={g.done} />)}
          </ul>
        </section>

        {/* Long term */}
        <section className="rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-5">
          <div className="flex items-center gap-2 mb-4">
            <Target className="w-4 h-4 text-[var(--accent)]" />
            <h2 className="font-bold text-[var(--text-primary)] text-sm">{t('goals.longTerm')}</h2>
          </div>
          <ul className="space-y-3">
            {longTerm.map((g, i) => <GoalItem key={i} text={g.text} done={g.done} />)}
          </ul>
        </section>
      </div>

      {/* Next to learn */}
      <section className="rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-5">
        <div className="flex items-center gap-2 mb-5">
          <BookOpen className="w-4 h-4 text-[var(--accent)]" />
          <h2 className="font-bold text-[var(--text-primary)] text-sm">{t('goals.learning')}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {nextLearn.map((item, i) => (
            <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-[var(--bg-hover)]">
              <div className="w-8 h-8 rounded-lg bg-[var(--accent-soft)] flex items-center justify-center shrink-0">
                <span className="text-[var(--accent)] text-xs font-bold">{item.tag}</span>
              </div>
              <div>
                <div className="font-semibold text-[var(--text-primary)] text-sm">{item.topic}</div>
                <div className="text-xs text-[var(--text-muted)]">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
