import { useEffect, useRef, useState } from 'react'
import { Code2, Layers, Brain, Database, Wrench, Users } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { skillCategories, badgeColors } from '../data/skills'

const ICONS = { Code2, Layers, Brain, Database, Wrench, Users }

function SkillBar({ skill, visible }) {
  return (
    <div className="group">
      <div className="flex items-center justify-between mb-1.5">
        <div className="flex items-center gap-2">
          <span className="text-sm text-[var(--text-primary)]">{skill.name}</span>
          <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-medium ${badgeColors[skill.badge] ?? badgeColors.beginner}`}>
            {skill.badge}
          </span>
        </div>
        <span className="text-xs text-[var(--text-muted)]">{skill.level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-[var(--bg-hover)] overflow-hidden">
        <div
          className="h-full skill-bar-fill rounded-full"
          style={{ width: visible ? `${skill.level}%` : '0%' }}
        />
      </div>
    </div>
  )
}

function SkillCategory({ cat, visible }) {
  const { t } = useLanguage()
  const Icon = ICONS[cat.icon] ?? Layers

  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-5">
      <div className="flex items-center gap-2 mb-5">
        <div className={`w-8 h-8 rounded-lg flex items-center justify-center bg-[var(--accent-soft)]`}>
          <Icon className="w-4 h-4 text-[var(--accent)]" />
        </div>
        <h2 className="font-bold text-[var(--text-primary)] text-sm">
          {t(`skills.categories.${cat.id}`)}
        </h2>
      </div>
      <div className="space-y-4">
        {cat.skills.map(skill => (
          <SkillBar key={skill.name} skill={skill} visible={visible} />
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  const { t } = useLanguage()
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="page-enter max-w-4xl mx-auto px-6 py-10 space-y-8" ref={ref}>
      <div>
        <h1 className="text-3xl font-extrabold text-[var(--text-primary)] mb-2">
          {t('skills.title')}
        </h1>
        <p className="text-[var(--text-secondary)]">{t('skills.subtitle')}</p>
      </div>

      {/* Proficiency legend */}
      <div className="flex flex-wrap gap-3">
        {Object.entries(badgeColors).map(([level, cls]) => (
          <span key={level} className={`text-xs px-2.5 py-1 rounded-full font-medium ${cls}`}>
            {t(`skills.proficiency.${level}`)}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {skillCategories.map(cat => (
          <SkillCategory key={cat.id} cat={cat} visible={visible} />
        ))}
      </div>
    </div>
  )
}
