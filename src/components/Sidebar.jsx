import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import {
  Home, User, Briefcase, Code2, BookOpen, Layers,
  Mail, Target, Search, Sun, Moon, Globe, ChevronDown,
  ChevronRight, GraduationCap, Zap,
} from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'
import { useLanguage } from '../contexts/LanguageContext'
import { portfolioPosts } from '../data/portfolioPosts'

const NAV_ITEMS = [
  { to: '/',            icon: Home,      key: 'home' },
  { to: '/about',       icon: User,      key: 'about' },
  { to: '/experience',  icon: Briefcase, key: 'experience' },
  { to: '/projects',    icon: Code2,     key: 'projects' },
  { to: '/portfolio',   icon: BookOpen,  key: 'portfolio' },
  { to: '/skills',      icon: Layers,    key: 'skills' },
  { to: '/contact',     icon: Mail,      key: 'contact' },
  { to: '/goals',       icon: Target,    key: 'goals' },
]

function NavItem({ to, icon: Icon, label, end, onClick }) {
  return (
    <NavLink
      to={to}
      end={end}
      onClick={onClick}
      className={({ isActive }) =>
        `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150 group
        ${isActive
          ? 'bg-[var(--accent-soft)] text-[var(--accent)]'
          : 'text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)]'
        }`
      }
    >
      <Icon className="w-4 h-4 shrink-0" />
      <span>{label}</span>
    </NavLink>
  )
}

export default function Sidebar({ isOpen, onClose, onSearchClick }) {
  const { isDark, toggleTheme } = useTheme()
  const { lang, toggleLang, t, localize } = useLanguage()
  const navigate = useNavigate()
  const [modulesOpen, setModulesOpen] = useState(true)

  const grouped = portfolioPosts.reduce((acc, post) => {
    const key = post.module
    if (!acc[key]) acc[key] = []
    acc[key].push(post)
    return acc
  }, {})

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
          onClick={onClose}
        />
      )}

      {/* Sidebar panel */}
      <aside
        className={`
          fixed md:relative z-50 md:z-auto
          flex flex-col h-full w-[272px] shrink-0
          bg-[var(--bg-surface)] border-r border-[var(--border)]
          transition-transform duration-250 ease-out
          md:translate-x-0
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        {/* Logo / Identity */}
        <div className="px-5 pt-6 pb-5 border-b border-[var(--border-subtle)]">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center shrink-0">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-bold text-sm text-[var(--text-primary)] leading-tight">Dev Portfolio</div>
              <div className="text-xs text-[var(--text-muted)] leading-tight">AI Applikationer · 4. sem</div>
            </div>
          </div>

          {/* Search button */}
          <button
            onClick={() => { onSearchClick(); onClose() }}
            className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-[var(--text-muted)] bg-[var(--bg-hover)] hover:text-[var(--text-primary)] transition-colors border border-[var(--border-subtle)]"
          >
            <Search className="w-3.5 h-3.5" />
            <span className="flex-1 text-left">{t('search.placeholder')}</span>
            <kbd className="text-[10px] bg-[var(--bg-surface)] border border-[var(--border)] rounded px-1.5 py-0.5 font-mono text-[var(--text-muted)]">
              Ctrl K
            </kbd>
          </button>
        </div>

        {/* Main Navigation */}
        <nav className="px-3 py-3 border-b border-[var(--border-subtle)]">
          <div className="text-[10px] font-semibold uppercase tracking-widest text-[var(--text-muted)] px-3 mb-2">
            Navigation
          </div>
          <div className="flex flex-col gap-0.5">
            {NAV_ITEMS.map(item => (
              <NavItem
                key={item.key}
                to={item.to}
                icon={item.icon}
                label={t(`nav.${item.key}`)}
                end={item.to === '/'}
                onClick={onClose}
              />
            ))}
          </div>
        </nav>

        {/* School Modules tree */}
        <div className="px-3 py-3 flex-1 overflow-y-auto">
          <button
            onClick={() => setModulesOpen(o => !o)}
            className="w-full flex items-center justify-between px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors"
          >
            <span className="flex items-center gap-1.5">
              <GraduationCap className="w-3 h-3" />
              {t('nav.modules')}
            </span>
            {modulesOpen
              ? <ChevronDown className="w-3 h-3" />
              : <ChevronRight className="w-3 h-3" />
            }
          </button>

          {modulesOpen && (
            <div className="mt-1 flex flex-col gap-0.5 animate-fade-in">
              {Object.entries(grouped).map(([module, posts]) => (
                <div key={module}>
                  <div className="px-3 py-1 text-[11px] text-[var(--text-muted)] font-medium truncate">
                    {module}
                  </div>
                  {posts.map(post => (
                    <NavLink
                      key={post.id}
                      to={`/portfolio/${post.slug}`}
                      onClick={onClose}
                      className={({ isActive }) =>
                        `flex items-center gap-2 pl-5 pr-3 py-1.5 rounded-lg text-xs transition-colors
                        ${isActive
                          ? 'text-[var(--accent)] bg-[var(--accent-soft)]'
                          : 'text-[var(--text-muted)] hover:text-[var(--text-secondary)] hover:bg-[var(--bg-hover)]'
                        }`
                      }
                    >
                      <span className="w-1 h-1 rounded-full bg-current shrink-0" />
                      <span className="truncate">{localize(post.title)}</span>
                    </NavLink>
                  ))}
                </div>
              ))}

              <NavLink
                to="/portfolio"
                onClick={onClose}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs text-[var(--accent)] hover:bg-[var(--accent-soft)] transition-colors"
              >
                <span>→ {t('nav.allSessions')}</span>
              </NavLink>
            </div>
          )}
        </div>

        {/* Bottom controls */}
        <div className="px-4 py-4 border-t border-[var(--border-subtle)] flex items-center justify-between">
          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)] transition-colors"
            title={isDark ? t('ui.lightMode') : t('ui.darkMode')}
          >
            {isDark
              ? <><Sun className="w-3.5 h-3.5" /> <span>Light</span></>
              : <><Moon className="w-3.5 h-3.5" /> <span>Dark</span></>
            }
          </button>

          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)] transition-colors font-medium"
            title={t('ui.language')}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{lang === 'da' ? 'DA → EN' : 'EN → DA'}</span>
          </button>
        </div>
      </aside>
    </>
  )
}
