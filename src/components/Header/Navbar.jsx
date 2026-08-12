import { useEffect, useState } from 'react'
import '../../assets/css/main.css'

const Navbar = ({ locale, theme, onToggleTheme, language, onLanguageChange }) => {
  const [isLangOpen, setIsLangOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const languages = [
    { code: 'ru', label: 'RU', name: 'Русский' },
    { code: 'en', label: 'EN', name: 'English' },
    { code: 'zh', label: 'ZH', name: '中文' },
    { code: 'uz', label: 'UZ', name: 'O\'zbek' },
    { code: 'tr', label: 'TR', name: 'Türkçe' }
  ]

  const currentLang = languages.find(lang => lang.code === language)

  useEffect(() => {
    document.body.classList.toggle('no-scroll', isMobileMenuOpen)
    return () => document.body.classList.remove('no-scroll')
  }, [isMobileMenuOpen])

  useEffect(() => {
    if (!isMobileMenuOpen) return
    const onKeyDown = event => {
      if (event.key === 'Escape') setIsMobileMenuOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [isMobileMenuOpen])

  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  return (
    <nav className="nav">
      <div className='container nav__wrapper'>
        <a href="#top" className="logo">TEXTIME</a>
        <ul className="menu">
          <li><a href="#about">{locale.nav.about}</a></li>
          <li><a href="#collection">{locale.nav.collection}</a></li>
          <li><a href="#contact">{locale.nav.contact}</a></li>
        </ul>
        <div className="nav__tools">
          <button className="theme-button" onClick={onToggleTheme}>
            <span className="theme-icon">{theme === 'dark' ? '☀️' : '🌙'}</span>
            {theme === 'dark' ? locale.nav.light : locale.nav.dark}
          </button>
          <div className="lang-dropdown">
            <button
              className="lang-button"
              onClick={() => setIsLangOpen(!isLangOpen)}
              aria-expanded={isLangOpen}
              aria-haspopup="listbox"
            >
              <span className="lang-label">{currentLang.label}</span>
              <span className="lang-arrow">{isLangOpen ? '▲' : '▼'}</span>
            </button>
            {isLangOpen && (
              <ul className="lang-menu" role="listbox">
                {languages.map((lang) => (
                  <li key={lang.code} role="option" aria-selected={lang.code === language}>
                    <button
                      className={`lang-option ${lang.code === language ? 'active' : ''}`}
                      onClick={() => {
                        onLanguageChange(lang.code)
                        setIsLangOpen(false)
                      }}
                    >
                      <span className="lang-code">{lang.label}</span>
                      <span className="lang-name">{lang.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <button
            type="button"
            className={`nav__burger ${isMobileMenuOpen ? 'is-open' : ''}`}
            onClick={() => setIsMobileMenuOpen(open => !open)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
      {isLangOpen && <div className="lang-overlay" onClick={() => setIsLangOpen(false)} />}

      <div id="mobile-menu" className={`mobile-menu ${isMobileMenuOpen ? 'is-open' : ''}`}>
        <ul className="mobile-menu__list">
          <li><a href="#about" onClick={closeMobileMenu}>{locale.nav.about}</a></li>
          <li><a href="#collection" onClick={closeMobileMenu}>{locale.nav.collection}</a></li>
          <li><a href="#contact" onClick={closeMobileMenu}>{locale.nav.contact}</a></li>
        </ul>
      </div>
      {isMobileMenuOpen && <div className="mobile-menu-overlay" onClick={closeMobileMenu} />}
    </nav>
  )
}

export default Navbar
