import { useLang } from '../i18n'
import { asset } from '../lib/asset'
import { Reveal } from './Reveal'

export default function Team() {
  const { t } = useLang()

  return (
    <section id="team">
      <div className="mx-auto max-w-[1200px] px-5 py-14 md:px-8 md:py-24">
        <Reveal>
          <p className="text-[12px] uppercase leading-5 tracking-[0.17em] text-[rgb(250_250_250/55%)]">
            {t.team.label}
          </p>
          <h2 className="mt-2 max-w-[600px] text-[clamp(30px,3.4vw,48px)] font-bold leading-[1.1] tracking-[-0.5px] text-[#fafafa]">
            {t.team.heading}
          </h2>
          <p className="mt-4 max-w-[600px] text-[18px] leading-[26px] text-[rgb(250_250_250/70%)]">
            {t.team.text}
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-8">
          {t.team.items.map((m) => (
            <Reveal key={m.name}>
              <div className="flex h-full flex-col gap-3 border-t border-[rgb(255_255_255/15%)] pt-6">
                <div className="relative aspect-square w-full max-w-[120px] overflow-hidden rounded-[8px] bg-[rgb(255_255_255/4%)]">
                  {m.photo ? (
                    <img
                      src={asset(m.photo)}
                      alt={m.name}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  ) : (
                    <span className="absolute inset-0 flex items-center justify-center text-[32px] font-bold text-[rgb(250_250_250/30%)]">
                      {m.initials}
                    </span>
                  )}
                </div>
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-[20px] font-bold leading-7 text-[#fafafa]">{m.name}</h3>
                  <a
                    href={m.instagram}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Instagram — ${m.name}`}
                    className="text-[rgb(250_250_250/55%)] transition-colors duration-200 hover:text-[#fafafa]"
                  >
                    <svg width="20" height="20" viewBox="0 0 256 256" fill="none" stroke="currentColor" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="36" y="36" width="184" height="184" rx="48" />
                      <circle cx="128" cy="128" r="42" />
                      <circle cx="180" cy="76" r="12" fill="currentColor" stroke="none" />
                    </svg>
                  </a>
                </div>
                <p className="text-[14px] leading-5 text-[rgb(250_250_250/70%)]">
                  {m.role}
                </p>
                <p className="text-[18px] leading-[26px] text-[rgb(250_250_250/55%)]">{m.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
