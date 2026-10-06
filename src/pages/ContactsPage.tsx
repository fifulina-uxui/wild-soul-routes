import Subpage from './Subpage'
import LeadForm from '../sections/LeadForm'
import { Reveal } from '../sections/Reveal'
import { contacts } from '../data/content'
import { useLang } from '../i18n'

export default function ContactsPage() {
  const { lang } = useLang()
  const ru = lang === 'ru'

  const rows = [
    { label: ru ? 'Адрес' : 'Address', value: contacts.address[lang] },
    { label: ru ? 'Телефон' : 'Phone', value: contacts.phone, href: `tel:${contacts.phone.replace(/[^+\d]/g, '')}` },
    { label: 'E-mail', value: contacts.email, href: `mailto:${contacts.email}` },
  ]

  return (
    <Subpage>
      <section className="bg-black">
        <div className="mx-auto max-w-[1200px] px-5 py-14 md:px-8 md:py-24">
          <Reveal>
            <p className="text-[12px] uppercase leading-5 tracking-[0.17em] text-[rgb(250_250_250/55%)]">
              {ru ? '07 — Контакты' : '07 — Contacts'}
            </p>
            <h2 className="mt-2 max-w-[600px] text-[clamp(30px,3.4vw,48px)] font-bold leading-[1.1] tracking-[-0.5px] text-[#fafafa]">
              {ru ? 'Мы на связи' : 'Get in touch'}
            </h2>
          </Reveal>

          <div className="mt-12 grid max-w-[720px] grid-cols-1 gap-8 sm:grid-cols-3">
            {rows.map((row) => (
              <Reveal key={row.label}>
                <div className="flex flex-col gap-2">
                  <p className="text-[12px] uppercase leading-5 tracking-[0.17em] text-[rgb(250_250_250/55%)]">
                    {row.label}
                  </p>
                  {row.href ? (
                    <a
                      href={row.href}
                      className="text-[18px] leading-[26px] text-[#fafafa] transition-colors duration-200 hover:text-[rgb(250_250_250/70%)]"
                    >
                      {row.value}
                    </a>
                  ) : (
                    <p className="text-[18px] leading-[26px] text-[#fafafa]">{row.value}</p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <LeadForm />
    </Subpage>
  )
}
