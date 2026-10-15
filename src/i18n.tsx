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
    const description =
      lang === 'ru'
        ? 'Wild Soul Routes — авторские путешествия по Тибету, Непалу, Бутану и ЮАР с гидом и психологом, а также подбор круизов по всему миру. Небольшие группы, продуманные маршруты.'
        : 'Wild Soul Routes — journeys through Tibet, Nepal, Bhutan and South Africa with a guide and a psychologist, plus cruise selection worldwide. Small groups, thoughtful routes.'
    document.querySelector('meta[name="description"]')?.setAttribute('content', description)
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
