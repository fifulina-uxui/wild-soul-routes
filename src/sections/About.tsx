import { useLang } from '../i18n'
import { asset } from '../lib/asset'
import { Reveal } from './Reveal'

export default function About() {
  const { t } = useLang()

  return (
    <section id="about">
      <div className="mx-auto max-w-[1200px] px-5 py-14 md:px-8 md:py-24">
        <Reveal>
          <div className="text-center">
            <p className="text-[12px] uppercase leading-5 tracking-[0.17em] text-[rgb(250_250_250/55%)]">
              {t.about.label}
            </p>
            <h2 className="mx-auto mt-2 max-w-[720px] text-[clamp(30px,3.4vw,48px)] font-bold leading-[1.1] tracking-[-0.5px] text-[#fafafa]">
              {t.about.heading}
            </h2>
            <p className="mx-auto mt-4 max-w-[600px] text-[18px] leading-[26px] text-[rgb(250_250_250/70%)]">
              {t.about.intro}
            </p>
          </div>
        </Reveal>

        {/* На мобильном карточки в одну колонку — зазор удвоен (56px) */}
        <div className="mt-12 grid grid-cols-1 gap-14 sm:grid-cols-2 sm:gap-4 lg:gap-8">
          {t.about.people.map((p) => (
            <Reveal key={p.name}>
              <div className="h-full">
                <div className="relative aspect-[3/2] w-full overflow-hidden rounded-[12px]">
                  <img
                    src={asset(p.photo)}
                    alt={p.name}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
                <div className="pt-5">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-[24px] font-bold leading-[30px] text-[#fafafa]">{p.name}</h3>
                    <a
                      href={p.instagram}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Instagram — ${p.name}`}
                      className="text-[rgb(250_250_250/55%)] transition-colors duration-200 hover:text-[#fafafa]"
                    >
                      <svg width="20" height="20" viewBox="0 0 256 256" fill="none" stroke="currentColor" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="36" y="36" width="184" height="184" rx="48" />
                        <circle cx="128" cy="128" r="42" />
                        <circle cx="196" cy="60" r="10" fill="currentColor" stroke="none" />
                      </svg>
                    </a>
                  </div>
                  <p className="mt-1 text-[14px] leading-5 text-[rgb(250_250_250/70%)]">{p.role}</p>
                  <p className="mt-4 text-[16px] leading-[24px] text-[rgb(250_250_250/55%)]">{p.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-12 border-t border-[rgb(255_255_255/15%)] pt-6 text-center">
            <p className="mx-auto max-w-[720px] text-[18px] leading-[26px] text-[rgb(250_250_250/70%)]">
              {t.about.outro}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
