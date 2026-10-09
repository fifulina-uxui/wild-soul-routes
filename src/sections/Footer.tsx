import { Link } from 'react-router'
import { contacts } from '../data/content'
import { useLang } from '../i18n'
import Logo from './Logo'

export default function Footer() {
  const { lang, t } = useLang()

  return (
    <footer id="contacts" className="border-t border-[rgb(255_255_255/15%)] bg-black">
      <div className="mx-auto max-w-[1300px] px-5 py-5 md:px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <Logo />

          <nav className="flex flex-wrap gap-x-4 gap-y-1.5 text-[14px] leading-5 text-[rgb(250_250_250/55%)]">
            {t.nav.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="transition-colors duration-200 hover:text-[#fafafa]"
              >
                {item.label}
              </Link>
            ))}
            <Link to="/contacts" className="transition-colors duration-200 hover:text-[#fafafa]">
              {t.lead.heading}
            </Link>
          </nav>

          <div className="flex flex-col gap-1 text-[14px] leading-5 text-[rgb(250_250_250/55%)] md:items-end">
            <span>
              {contacts.legal}, ID {contacts.id}
            </span>
            <span>{contacts.address[lang]}</span>
            <a
              href={`mailto:${contacts.email}`}
              className="transition-colors duration-200 hover:text-[#fafafa]"
            >
              {contacts.email}
            </a>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-1 border-t border-[rgb(255_255_255/10%)] pt-4 text-[12px] leading-5 text-[rgb(250_250_250/40%)] md:flex-row md:justify-between">
          <span>© 2026 Wild Soul Routes</span>
          <span>{t.footer.tagline}</span>
        </div>
      </div>
    </footer>
  )
}
