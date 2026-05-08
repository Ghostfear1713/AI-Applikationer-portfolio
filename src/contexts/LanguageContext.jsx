import { createContext, useContext, useState } from 'react'
import { translations } from '../data/translations'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('portfolio-lang') || 'da'
  })

  const toggleLang = () => {
    const next = lang === 'da' ? 'en' : 'da'
    setLang(next)
    localStorage.setItem('portfolio-lang', next)
  }

  const t = (key) => {
    const keys = key.split('.')
    let val = translations[lang]
    for (const k of keys) {
      val = val?.[k]
    }
    return val ?? key
  }

  const localize = (obj) => {
    if (!obj) return ''
    if (typeof obj === 'string') return obj
    return obj[lang] ?? obj['en'] ?? ''
  }

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t, localize, isDanish: lang === 'da' }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be inside LanguageProvider')
  return ctx
}
