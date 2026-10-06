import { useState, type FormEvent } from 'react'
import { useLang } from '../i18n'
import { Reveal } from './Reveal'

const inputClass =
  'h-14 w-full rounded-[4px] border border-[rgb(255_255_255/23%)] bg-transparent px-4 text-[16px] leading-6 text-[#fafafa] placeholder:text-[rgb(250_250_250/40%)] transition-colors duration-200 focus:border-[#fafafa] focus:outline-none'

export default function LeadForm() {
  const [sent, setSent] = useState(false)
  const { t } = useLang()

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="lead" className="bg-black">
      <div className="mx-auto max-w-[1200px] px-5 py-16 md:px-8 md:py-24">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="text-[12px] uppercase leading-5 tracking-[0.17em] text-[rgb(250_250_250/55%)]">
              {t.lead.label}
            </p>
            <h2 className="mt-2 text-[clamp(30px,3.4vw,48px)] font-bold leading-[1.1] tracking-[-0.5px] text-[#fafafa]">
              {t.lead.heading}
            </h2>
            <p className="mt-4 max-w-[504px] text-[18px] leading-[26px] text-[rgb(250_250_250/70%)]">
              {t.lead.text}
            </p>
            <ul className="mt-8 flex flex-col gap-3 text-[14px] leading-5 text-[rgb(250_250_250/55%)]">
              {t.lead.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal>
            {sent ? (
              <div className="flex min-h-[280px] flex-col items-start justify-center gap-4 rounded-[16px] bg-[#121212] p-8">
                <h3 className="text-[24px] font-bold leading-[30px] text-[#fafafa]">
                  {t.lead.success.title}
                </h3>
                <p className="text-[18px] leading-[26px] text-[rgb(250_250_250/70%)]">
                  {t.lead.success.text}
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="flex flex-col gap-4">
                <div>
                  <label htmlFor="lead-name" className="mb-2 block text-[18px] leading-[26px] text-[rgb(250_250_250/70%)]">
                    {t.lead.form.name}
                  </label>
                  <input id="lead-name" name="name" required placeholder={t.lead.form.namePlaceholder} className={inputClass} />
                </div>
                <div>
                  <label htmlFor="lead-phone" className="mb-2 block text-[18px] leading-[26px] text-[rgb(250_250_250/70%)]">
                    {t.lead.form.phone}
                  </label>
                  <input
                    id="lead-phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder={t.lead.form.phonePlaceholder}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="lead-comment" className="mb-2 block text-[18px] leading-[26px] text-[rgb(250_250_250/70%)]">
                    {t.lead.form.comment}
                  </label>
                  <textarea
                    id="lead-comment"
                    name="comment"
                    rows={3}
                    placeholder={t.lead.form.commentPlaceholder}
                    className="w-full resize-none rounded-[4px] border border-[rgb(255_255_255/23%)] bg-transparent px-4 py-4 text-[16px] leading-6 text-[#fafafa] placeholder:text-[rgb(250_250_250/40%)] transition-colors duration-200 focus:border-[#fafafa] focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-2 inline-flex min-h-[48px] w-full items-center justify-center rounded-[4px] bg-[#fafafa] px-8 py-2 text-[16px] font-bold leading-[26px] text-[rgb(0_0_0/87%)] transition-colors duration-200 hover:bg-[#e6e6e6] active:bg-[#d6d6d6]"
                >
                  {t.cta.submit}
                </button>
                <p className="text-[14px] leading-5 text-[rgb(250_250_250/55%)]">
                  {t.lead.form.legal}
                </p>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
