import { useEffect, useState } from 'react'
import Navbar from './components/Header/Navbar'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import Desc from './components/Header/Desc'
import Collection from './components/Products/Collection'
import translations from './translations'

const App = () => {
  const [theme, setTheme] = useState('light')
  const [language, setLanguage] = useState('ru')
  const locale = translations[language]

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

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
    </div>
  )
}

export default App
