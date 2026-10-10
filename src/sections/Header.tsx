import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router'
import { useLang } from '../i18n'
import LangSwitcher from './LangSwitcher'
import Logo from './Logo'

const ctaClass =
  'rounded-[4px] bg-[#fafafa] px-8 py-[6px] text-[16px] font-bold leading-[24.5px] text-[rgb(0_0_0/87%)] transition-colors duration-200 hover:bg-[#e6e6e6] active:bg-[#d6d6d6]'

const navClass = (active: boolean, size: string) =>
  `rounded-md px-2 py-1 ${size} transition-colors duration-200 hover:text-[#fafafa] ${
    active ? 'text-[#fafafa]' : 'text-[rgb(250_250_250/70%)]'
  }`

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { t } = useLang()
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 160)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Закрывать меню при переходе на другую страницу
  useEffect(() => setOpen(false), [pathname])

  // Блокировать скролл страницы, пока открыто меню
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const burger = (className: string) => (
    <button
      type="button"
      onClick={() => setOpen(true)}
      aria-label="Открыть меню"
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
        <div className="mx-auto flex max-w-[1316px] items-center gap-6 px-6 py-4 md:px-8">
          <div className="flex flex-1 items-center">
            <Logo />
          </div>
          <nav className="hidden items-center gap-4 lg:flex">
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
          <div className="flex flex-1 items-center justify-end gap-5">
            <LangSwitcher />
            <Link to="/contacts" className={`hidden sm:inline-block ${ctaClass}`}>
              {t.cta.lead}
            </Link>
            {burger('lg:hidden')}
          </div>
        </div>
      </header>

      {/* Плавающая стеклянная панель при скролле — как у Starlink: логотип + CTA */}
      <div
        className={`fixed inset-x-0 top-4 z-40 transition-all duration-300 ${
          scrolled ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-4 opacity-0'
        }`}
      >
        <div className="mx-auto max-w-[1200px] px-4 md:px-8">
          <div className="floating-glass flex items-center justify-between rounded-[8px] p-4">
            <Logo />
            <nav className="hidden items-center gap-4 md:flex">
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
            <div className="flex items-center gap-4">
              <LangSwitcher compact />
              <Link to="/contacts" className={`hidden sm:inline-block ${ctaClass}`}>
                {t.cta.lead}
              </Link>
              {burger('md:hidden')}
            </div>
          </div>
        </div>
      </div>

      {/* Мобильное меню на весь экран */}
      <div
        className={`fixed inset-0 z-50 flex flex-col bg-black/95 backdrop-blur-xl transition-opacity duration-300 lg:hidden ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4 md:px-8">
          <Logo />
          <button
            type="button"
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
              style={{ transitionDelay: open ? `${80 + i * 50}ms` : '0ms' }}
              className={({ isActive }) =>
                `py-3 text-[32px] font-bold leading-[1.15] tracking-[-0.5px] transition-all duration-300 ${
                  open ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
                } ${isActive ? 'text-[#fafafa]' : 'text-[rgb(250_250_250/55%)] hover:text-[#fafafa]'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <div className="mt-8 w-fit">
            <LangSwitcher />
          </div>
        </nav>

        <div className="px-6 pb-8 md:px-8">
          <Link
            to="/contacts#lead"
            className={`flex min-h-[48px] w-full items-center justify-center ${ctaClass}`}
          >
            {t.cta.lead}
          </Link>
        </div>
      </div>
    </>
  )
}
