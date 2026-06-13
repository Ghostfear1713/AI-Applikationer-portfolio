import { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Search, Sun, Moon, Globe, Menu, X, Zap, Sparkles } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'
import { useLanguage } from '../contexts/LanguageContext'

const NAV_LINKS = [
  { to: '/',           key: 'home',       end: true },
  { to: '/about',      key: 'about' },
  { to: '/experience', key: 'experience' },
  { to: '/projects',   key: 'projects' },
  { to: '/portfolio',  key: 'portfolio' },
  { to: '/skills',     key: 'skills' },
  { to: '/contact',    key: 'contact' },
]

export default function Navbar({ onSearchClick }) {
  const { isDark, toggleTheme } = useTheme()
  const { lang, toggleLang, t } = useLanguage()
  const navigate = useNavigate()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMobileOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const navLinkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors duration-150 ${
      isActive
        ? 'text-[var(--accent)]'
        : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
    }`

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-200 ${
          scrolled || mobileOpen
            ? 'bg-[var(--bg-surface)]/95 backdrop-blur-md border-b border-[var(--border)] shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-6">
          {/* Logo / Name */}
          <button
            onClick={() => { navigate('/'); setMobileOpen(false) }}
            className="font-bold text-lg gradient-text tracking-tight shrink-0"
          >
            Orhan Secilmis
          </button>

          {/* Desktop nav links */}
          <nav className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map(link => (
              <NavLink key={link.key} to={link.to} end={link.end} className={navLinkClass}>
                {t(`nav.${link.key}`)}
              </NavLink>
            ))}
          </nav>

          {/* Desktop controls */}
          <div className="hidden md:flex items-center gap-2 shrink-0">
            <button
              onClick={() => { navigate('/portfolio/engestofte-gods-ai-case-project'); setMobileOpen(false) }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-violet-600 to-cyan-600 text-white text-xs font-bold hover:opacity-90 transition-opacity shadow-md shadow-violet-500/20"
            >
              <Sparkles className="w-3.5 h-3.5" />
              {t('nav.caseLink')}
            </button>
            <button
              onClick={onSearchClick}
              className="p-2 rounded-lg text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)] transition-colors"
              title={`${t('search.placeholder')} (Ctrl+K)`}
            >
              <Search className="w-4 h-4" />
            </button>
            <button
              onClick={toggleLang}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)] transition-colors"
              title={t('ui.language')}
            >
              <Globe className="w-3.5 h-3.5" />
              <span className="uppercase">{lang}</span>
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)] transition-colors"
              title={isDark ? t('ui.lightMode') : t('ui.darkMode')}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>

          {/* Mobile controls */}
          <div className="flex md:hidden items-center gap-1">
            <button
              onClick={onSearchClick}
              className="p-2 rounded-lg text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] transition-colors"
            >
              <Search className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileOpen(o => !o)}
              className="p-2 rounded-lg text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] transition-colors"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileOpen && (
          <div className="md:hidden border-t border-[var(--border)] bg-[var(--bg-surface)]/98 backdrop-blur-md animate-fade-in">
            <nav className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
              <button
                onClick={() => { navigate('/portfolio/engestofte-gods-ai-case-project'); setMobileOpen(false) }}
                className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg bg-gradient-to-r from-violet-600 to-cyan-600 text-white text-sm font-bold mb-1"
              >
                <Sparkles className="w-4 h-4" />
                {t('nav.caseLink')}
              </button>
              {NAV_LINKS.map(link => (
                <NavLink
                  key={link.key}
                  to={link.to}
                  end={link.end}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-[var(--accent-soft)] text-[var(--accent)]'
                        : 'text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)]'
                    }`
                  }
                >
                  {t(`nav.${link.key}`)}
                </NavLink>
              ))}
              <div className="flex items-center gap-2 px-3 py-2 mt-1 border-t border-[var(--border-subtle)]">
                <button
                  onClick={toggleLang}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] transition-colors"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>{lang === 'da' ? 'DA → EN' : 'EN → DA'}</span>
                </button>
                <button
                  onClick={toggleTheme}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] transition-colors"
                >
                  {isDark ? <><Sun className="w-3.5 h-3.5" /> Light</> : <><Moon className="w-3.5 h-3.5" /> Dark</>}
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Spacer so content doesn't hide under fixed navbar */}
      <div className="h-16" />
    </>
  )
}
