import { useLang } from '../i18n'
import { asset } from '../lib/asset'
import { Reveal } from './Reveal'

export default function About() {
  const { t } = useLang()

  return (
    <section id="about">
      <div className="mx-auto max-w-[1200px] px-5 py-14 md:px-8 md:py-24">
        <Reveal>
          <p className="text-[12px] uppercase leading-5 tracking-[0.17em] text-[rgb(250_250_250/55%)]">
            {t.about.label}
          </p>
          <h2 className="mt-2 max-w-[720px] text-[clamp(30px,3.4vw,48px)] font-bold leading-[1.1] tracking-[-0.5px] text-[#fafafa]">
            {t.about.heading}
          </h2>
          <p className="mt-4 max-w-[600px] text-[18px] leading-[26px] text-[rgb(250_250_250/70%)]">
            {t.about.intro}
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-8">
          {t.about.people.map((p) => (
            <Reveal key={p.name}>
              <div className="flex h-full flex-col gap-3 border-t border-[rgb(255_255_255/15%)] pt-6">
                <div className="flex items-center gap-4">
                  <div className="relative aspect-square w-[72px] shrink-0 overflow-hidden rounded-[8px] bg-[rgb(255_255_255/4%)]">
                    <img
                      src={asset(p.photo)}
                      alt={p.name}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-[24px] font-bold leading-[30px] text-[#fafafa]">{p.name}</h3>
                    <p className="text-[14px] leading-5 text-[rgb(250_250_250/70%)]">{p.role}</p>
                  </div>
                </div>
                <p className="text-[18px] leading-[26px] text-[rgb(250_250_250/55%)]">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-12 max-w-[720px] border-t border-[rgb(255_255_255/15%)] pt-6 text-[18px] leading-[26px] text-[#fafafa]">
            {t.about.outro}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
