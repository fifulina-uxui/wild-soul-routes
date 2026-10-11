import { useState, type FormEvent, type ReactNode } from 'react'
import { Link } from 'react-router'
import { useLang } from '../i18n'
import { Reveal } from './Reveal'

const inputClass =
  'h-14 w-full rounded-[4px] border border-[rgb(255_255_255/40%)] bg-transparent px-4 text-[16px] leading-6 text-[#fafafa] placeholder:text-[rgb(250_250_250/60%)] transition-colors duration-200 focus:border-[#fafafa] focus:outline-none'

const labelClass = 'mb-2 block text-[18px] leading-[26px] text-[rgb(250_250_250/70%)]'

/** Сама форма заявки без обёртки — используется и в секции, и в диалоге */
export function LeadFormFields({ submitLabel, tourTitle }: { submitLabel?: string; tourTitle?: string }) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const { t, lang } = useLang()

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (status === 'sending') return
    const endpoint = import.meta.env.VITE_LEAD_ENDPOINT as string | undefined
    const data = new FormData(e.currentTarget)
    const payload = {
      name: data.get('name'),
      telegram: data.get('telegram'),
      email: data.get('email'),
      comment: data.get('comment'),
      tour: tourTitle ?? null,
      lang,
      page: window.location.href,
    }
    setStatus('sending')
    try {
      if (!endpoint) throw new Error('VITE_LEAD_ENDPOINT is not configured')
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="flex min-h-[280px] flex-col items-start justify-center gap-4 rounded-[16px] bg-[#121212] p-8">
        <h3 className="text-[24px] font-bold leading-[30px] text-[#fafafa]">
          {t.lead.success.title}
        </h3>
        <p className="text-[18px] leading-[26px] text-[rgb(250_250_250/70%)]">
          {t.lead.success.text}
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <div>
        <label htmlFor="lead-name" className={labelClass}>
          {t.lead.form.name}
        </label>
        <input id="lead-name" name="name" required placeholder={t.lead.form.namePlaceholder} className={inputClass} />
      </div>
      <div>
        <label htmlFor="lead-telegram" className={labelClass}>
          {t.lead.form.telegram}
        </label>
        <input
          id="lead-telegram"
          name="telegram"
          type="text"
          placeholder={t.lead.form.telegramPlaceholder}
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="lead-email" className={labelClass}>
          {t.lead.form.email}
        </label>
        <input
          id="lead-email"
          name="email"
          type="email"
          required
          placeholder={t.lead.form.emailPlaceholder}
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="lead-comment" className={labelClass}>
          {t.lead.form.comment}
        </label>
        <textarea
          id="lead-comment"
          name="comment"
          rows={3}
          placeholder={t.lead.form.commentPlaceholder}
          className="w-full resize-none rounded-[4px] border border-[rgb(255_255_255/40%)] bg-transparent px-4 py-4 text-[16px] leading-6 text-[#fafafa] placeholder:text-[rgb(250_250_250/60%)] transition-colors duration-200 focus:border-[#fafafa] focus:outline-none"
        />
      </div>
      <button
        type="submit"
        disabled={status === 'sending'}
        className="mt-2 inline-flex min-h-[48px] w-full items-center justify-center rounded-[4px] bg-[#fafafa] px-8 py-2 text-[16px] font-bold leading-[26px] text-[rgb(0_0_0/87%)] transition-colors duration-200 hover:bg-[#e6e6e6] active:bg-[#d6d6d6] disabled:cursor-wait disabled:opacity-60"
      >
        {status === 'sending' ? t.lead.form.sending : (submitLabel ?? t.cta.submit)}
      </button>
      {status === 'error' && (
        <p role="alert" className="text-[14px] leading-5 text-[#f2b8b8]">
          {t.lead.form.error}
        </p>
      )}
      <p className="text-[14px] leading-5 text-[rgb(250_250_250/55%)]">
        {t.lead.form.legal}{' '}
        <Link
          to="/privacy"
          className="underline decoration-[rgb(250_250_250/40%)] underline-offset-4 transition-colors duration-200 hover:text-[#fafafa]"
        >
          {t.lead.form.legalLink}
        </Link>
      </p>
    </form>
  )
}

export default function LeadForm({ submitLabel, aside }: { submitLabel?: string; aside?: ReactNode }) {
  const { t } = useLang()

  return (
    <section id="lead" className="bg-black">
      <div className="mx-auto max-w-[1200px] px-5 py-16 md:px-8 md:py-24">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            {aside ?? (
              <>
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
              </>
            )}
          </Reveal>

          <Reveal>
            <div id="lead-form" className="scroll-mt-24">
              <LeadFormFields submitLabel={submitLabel} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
