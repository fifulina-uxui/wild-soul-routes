import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { content, type PageContent } from './data/content'

export type Lang = 'ru' | 'en'

interface LangContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
  t: PageContent
}

const LangContext = createContext<LangContextValue>({
  lang: 'ru',
  setLang: () => {},
  t: content.ru,
})

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = localStorage.getItem('gorizont-lang')
    return saved === 'en' ? 'en' : 'ru'
  })

  const setLang = (next: Lang) => {
    setLangState(next)
    localStorage.setItem('gorizont-lang', next)
  }

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  return (
    <LangContext.Provider value={{ lang, setLang, t: content[lang] }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  return useContext(LangContext)
}
