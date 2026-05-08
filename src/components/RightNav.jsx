import { useEffect, useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

export default function RightNav({ sections }) {
  const { t } = useLanguage()
  const [active, setActive] = useState(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const visible = entries.filter(e => e.isIntersecting)
        if (visible.length > 0) {
          setActive(visible[0].target.id)
        }
      },
      { rootMargin: '-20% 0px -60% 0px' }
    )

    sections.forEach(s => {
      const el = document.getElementById(`section-${s.id}`)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [sections])

  if (!sections?.length) return null

  return (
    <aside className="hidden xl:flex flex-col w-52 shrink-0 pl-6 pt-8 sticky top-0 h-screen overflow-y-auto">
      <div className="text-[10px] font-semibold uppercase tracking-widest text-[var(--text-muted)] mb-3">
        {t('ui.toc')}
      </div>
      <nav className="flex flex-col gap-0.5">
        {sections.map(s => (
          <a
            key={s.id}
            href={`#section-${s.id}`}
            className={`text-xs py-1 px-2 rounded transition-colors truncate ${
              active === `section-${s.id}`
                ? 'text-[var(--accent)] bg-[var(--accent-soft)]'
                : 'text-[var(--text-muted)] hover:text-[var(--text-secondary)]'
            }`}
          >
            {s.label}
          </a>
        ))}
      </nav>
    </aside>
  )
}
