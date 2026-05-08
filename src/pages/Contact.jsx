import { useState } from 'react'
import { Mail, Github, Linkedin, Send, CheckCircle2, MapPin, Clock } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

export default function Contact() {
  const { t } = useLanguage()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    const mailto = `mailto:Uniton@live.dk?subject=Portfolio Contact: ${encodeURIComponent(form.name)}&body=${encodeURIComponent(`Fra: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`
    window.location.href = mailto
    setSent(true)
  }

  const links = [
    {
      icon: Mail,
      label: t('contact.email'),
      value: 'Uniton@live.dk',
      href: 'mailto:Uniton@live.dk',
      color: 'text-violet-400',
    },
    {
      icon: Github,
      label: t('contact.github'),
      value: 'github.com',
      href: 'https://github.com',
      color: 'text-[var(--text-secondary)]',
    },
    {
      icon: Linkedin,
      label: t('contact.linkedin'),
      value: 'linkedin.com/in/',
      href: 'https://linkedin.com',
      color: 'text-cyan-400',
    },
  ]

  return (
    <div className="page-enter max-w-3xl mx-auto px-6 py-10 space-y-10">
      <div>
        <h1 className="text-3xl font-extrabold text-[var(--text-primary)] mb-2">
          {t('contact.title')}
        </h1>
        <p className="text-[var(--text-secondary)]">{t('contact.subtitle')}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left: info */}
        <div className="space-y-5">
          {/* Contact links */}
          <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-5 space-y-4">
            {links.map(link => {
              const Icon = link.icon
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-[var(--bg-hover)] flex items-center justify-center shrink-0">
                    <Icon className={`w-4 h-4 ${link.color}`} />
                  </div>
                  <div>
                    <div className="text-xs text-[var(--text-muted)]">{link.label}</div>
                    <div className="text-sm text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                      {link.value}
                    </div>
                  </div>
                </a>
              )
            })}
          </div>

          {/* Availability */}
          <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-5">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <h3 className="font-semibold text-[var(--text-primary)] text-sm">
                {t('contact.availability')}
              </h3>
            </div>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              {t('contact.availText')}
            </p>
            <div className="mt-3 flex items-center gap-2 text-xs text-[var(--text-muted)]">
              <MapPin className="w-3.5 h-3.5" />
              <span>Danmark</span>
              <Clock className="w-3.5 h-3.5 ml-2" />
              <span>CET (UTC+1)</span>
            </div>
          </div>
        </div>

        {/* Right: form */}
        <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-5">
          <h3 className="font-bold text-[var(--text-primary)] mb-4 text-sm">
            {t('contact.message')}
          </h3>

          {sent ? (
            <div className="py-8 text-center space-y-3">
              <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
              <p className="text-sm text-[var(--text-secondary)]">
                Din standard mail-app er åbnet. Send din besked derfra.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                required
                placeholder={t('contact.namePlaceholder')}
                value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                className="w-full px-3 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--bg-hover)] text-[var(--text-primary)] placeholder-[var(--text-muted)] text-sm outline-none focus:border-[var(--accent)] transition-colors"
              />
              <input
                required
                type="email"
                placeholder={t('contact.emailPlaceholder')}
                value={form.email}
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                className="w-full px-3 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--bg-hover)] text-[var(--text-primary)] placeholder-[var(--text-muted)] text-sm outline-none focus:border-[var(--accent)] transition-colors"
              />
              <textarea
                required
                rows={5}
                placeholder={t('contact.msgPlaceholder')}
                value={form.message}
                onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                className="w-full px-3 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--bg-hover)] text-[var(--text-primary)] placeholder-[var(--text-muted)] text-sm outline-none focus:border-[var(--accent)] transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-gradient-to-r from-violet-600 to-cyan-600 text-white text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                <Send className="w-4 h-4" />
                {t('contact.send')}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
