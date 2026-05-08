import { Search, Menu, Sun, Moon, Globe } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'
import { useLanguage } from '../contexts/LanguageContext'

export default function Header({ onMenuClick, onSearchClick }) {
  const { isDark, toggleTheme } = useTheme()
  const { lang, toggleLang } = useLanguage()

  return (
    <header className="md:hidden flex items-center justify-between px-4 h-14 border-b border-[var(--border)] bg-[var(--bg-surface)] sticky top-0 z-30">
      {/* Left: hamburger + title */}
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="p-2 rounded-lg text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)] transition-colors"
          aria-label="Toggle menu"
        >
          <Menu className="w-5 h-5" />
        </button>
        <span className="font-semibold text-sm gradient-text">Portfolio</span>
      </div>

      {/* Right: controls */}
      <div className="flex items-center gap-1">
        <button
          onClick={onSearchClick}
          className="p-2 rounded-lg text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)] transition-colors"
          aria-label="Search"
        >
          <Search className="w-4 h-4" />
        </button>

        <button
          onClick={toggleLang}
          className="flex items-center gap-1 px-2 py-1.5 rounded-lg text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)] transition-colors text-xs font-medium"
          aria-label="Toggle language"
        >
          <Globe className="w-3.5 h-3.5" />
          <span className="uppercase">{lang}</span>
        </button>

        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)] transition-colors"
          aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>
      </div>
    </header>
  )
}
