import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router'
import { useLang } from '../i18n'
import { SocialIcons } from '../components/SocialIcons'
import LangSwitcher from './LangSwitcher'
import Logo from './Logo'

const ctaClass =
  'whitespace-nowrap rounded-[4px] bg-[#fafafa] px-8 py-2 text-[16px] font-bold leading-[26px] text-[rgb(0_0_0/87%)] transition-colors duration-200 hover:bg-[#e6e6e6] active:bg-[#d6d6d6]'

const navClass = (active: boolean, size: string) =>
  `rounded-md px-2 py-1 ${size} transition-colors duration-200 hover:text-[#fafafa] ${
    active ? 'text-[#fafafa]' : 'text-[rgb(250_250_250/70%)]'
  }`

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { t } = useLang()
  const { pathname } = useLocation()
  const closeRef = useRef<HTMLButtonElement>(null)
  const burgerRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 160)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Закрывать меню при переходе на другую страницу
  // (паттерн «корректировка состояния при рендере» вместо эффекта)
  const [prevPath, setPrevPath] = useState(pathname)
  if (prevPath !== pathname) {
    setPrevPath(pathname)
    if (open) setOpen(false)
  }

  // Блокировать скролл страницы, пока открыто меню; Escape закрывает;
  // фокус уходит на крестик и возвращается на бургер
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    if (!open) return
    closeRef.current?.focus()
    const burgerEl = burgerRef.current
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
      burgerEl?.focus()
    }
  }, [open])

  const burger = (className: string) => (
    <button
      type="button"
      ref={burgerRef}
      onClick={() => setOpen(true)}
      aria-label="Открыть меню"
      aria-expanded={open}
      className={`flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-[4px] transition-colors duration-200 hover:bg-[rgb(255_255_255/10%)] ${className}`}
    >
      <span className="h-[2px] w-5 bg-[#fafafa]" />
      <span className="h-[2px] w-5 bg-[#fafafa]" />
      <span className="h-[2px] w-5 bg-[#fafafa]" />
    </button>
  )

  return (
    <>
      {/* Шапка поверх фотографии */}
      <header className="absolute inset-x-0 top-0 z-30">
        <div className="mx-auto flex max-w-[1316px] items-center gap-6 px-4 py-4 md:px-8">
          <div className="flex items-center">
            <Logo />
          </div>
          <nav className="hidden items-center gap-4 lg:ml-16 lg:flex">
            {t.nav.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) => navClass(isActive, 'text-[16px] leading-6')}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="flex flex-1 items-center justify-end gap-3 lg:gap-5">
            <div className="hidden lg:block">
              <LangSwitcher />
            </div>
            <SocialIcons className="hidden lg:flex" />
            <Link to="/contacts#lead-form" className={`hidden sm:inline-block ${ctaClass}`}>
              {t.cta.lead}
            </Link>
            {burger('lg:hidden')}
          </div>
        </div>
      </header>

      {/* Плавающая стеклянная панель при скролле — как у Starlink: логотип + CTA */}
      <div
        inert={!scrolled}
        aria-hidden={!scrolled}
        className={`fixed inset-x-0 top-4 z-40 transition-all duration-300 ${
          scrolled ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-4 opacity-0'
        }`}
      >
        <div className="mx-auto max-w-[1200px] px-4 md:px-8">
          <div className="floating-glass flex items-center rounded-[8px] p-4">
            <Logo />
            <nav className="ml-[88px] hidden items-center gap-4 md:flex">
              {t.nav.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  className={({ isActive }) => navClass(isActive, 'text-[16px] leading-5')}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
            <div className="ml-auto flex items-center gap-3 md:gap-4">
              <div className="hidden md:block">
                <LangSwitcher compact />
              </div>
              <SocialIcons className="hidden md:flex" />
              <Link to="/contacts#lead-form" className={`hidden sm:inline-block ${ctaClass}`}>
                {t.cta.lead}
              </Link>
              {burger('md:hidden')}
            </div>
          </div>
        </div>
      </div>

      {/* Мобильное меню на весь экран */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Меню"
        inert={!open}
        aria-hidden={!open}
        className={`fixed inset-0 z-50 flex flex-col bg-black/95 backdrop-blur-xl transition-opacity duration-300 lg:hidden ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4 md:px-8">
          <Logo />
          <button
            type="button"
            ref={closeRef}
            onClick={() => setOpen(false)}
            aria-label="Закрыть меню"
            className="flex h-10 w-10 items-center justify-center rounded-[4px] transition-colors duration-200 hover:bg-[rgb(255_255_255/10%)]"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#fafafa" strokeWidth="2" strokeLinecap="round">
              <path d="M4 4 L16 16 M16 4 L4 16" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-1 flex-col gap-1 px-6 pt-10 md:px-8">
          {t.nav.map((item, i) => (
            <NavLink
              key={item.href}
              to={item.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${80 + i * 50}ms` : '0ms' }}
              className={({ isActive }) =>
                `py-3 text-[20px] font-normal leading-[1.3] transition-all duration-300 ${
                  open ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
                } ${isActive ? 'text-[#fafafa]' : 'text-[rgb(250_250_250/55%)] hover:text-[#fafafa]'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <div className="mt-8 flex flex-col items-start gap-4">
            <LangSwitcher />
            <SocialIcons className="flex" />
          </div>
        </nav>

        <div className="px-6 pb-8 md:px-8">
          <Link
            to="/contacts#lead-form"
            onClick={() => setOpen(false)}
            className={`flex min-h-[42px] w-full items-center justify-center ${ctaClass}`}
          >
            {t.cta.lead}
          </Link>
        </div>
      </div>
    </>
  )
}
