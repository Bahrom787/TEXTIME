import { useEffect, useState } from 'react'
import Navbar from './components/Header/Navbar'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import Desc from './components/Header/Desc'
import Collection from './components/Products/Collection'
import BackToTop from './components/BackToTop/BackToTop'
import AiAssistant from './components/AiAssistant/AiAssistant'
import translations from './translations'

const titleByLanguage = {
  ru: 'TEXTIME — оптовое производство одежды',
  en: 'TEXTIME — wholesale clothing production',
  uz: 'TEXTIME — ulgurji kiyim ishlab chiqarish',
  zh: 'TEXTIME — 批量服装生产',
  tr: 'TEXTIME — toptan kıyafet üretimi',
}

const App = () => {
  const [theme, setTheme] = useState('light')
  const [language, setLanguage] = useState('ru')
  const locale = translations[language]

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  useEffect(() => {
    document.documentElement.lang = language
    document.title = titleByLanguage[language] || titleByLanguage.ru
  }, [language])

  useEffect(() => {
    const revealItems = document.querySelectorAll(
      '.about__text-block, .about__item, .collection-header, .product-card, .footer__wrapper',
    )

    if (!('IntersectionObserver' in window)) {
      revealItems.forEach(item => item.classList.add('is-revealed'))
      return
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-revealed')
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )

    revealItems.forEach(item => {
      item.classList.add('reveal-on-scroll')
      observer.observe(item)
    })

    return () => observer.disconnect()
  }, [language])

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))
  }

  return (
    <div className={`app theme-${theme}`}>
      <Navbar
        locale={locale}
        theme={theme}
        onToggleTheme={toggleTheme}
        language={language}
        onLanguageChange={setLanguage}
      />
      <Desc locale={locale} />
      <Main locale={locale} />
      <Collection locale={locale} language={language} />
      <Footer locale={locale} />
      <BackToTop />
      <AiAssistant language={language} />
    </div>
  )
}

export default App
