import { useLang } from '../i18n'
import { Reveal } from './Reveal'

export default function Formats() {
  const { t } = useLang()

  return (
    <section id="format">
      <div className="mx-auto max-w-[1200px] px-5 py-14 md:px-8 md:py-24">
        <Reveal>
          <p className="text-[12px] uppercase leading-5 tracking-[0.17em] text-[rgb(250_250_250/55%)]">
            {t.formats.label}
          </p>
          <h2 className="mt-2 max-w-[720px] text-[clamp(30px,3.4vw,48px)] font-bold leading-[1.1] tracking-[-0.5px] text-[#fafafa]">
            {t.formats.heading}
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {t.formats.items.map((f) => (
            <Reveal key={f.title}>
              <div className="flex h-full flex-col gap-3 border-t border-[rgb(255_255_255/15%)] pt-6">
                <h3 className="text-[24px] font-bold leading-[30px] text-[#fafafa]">{f.title}</h3>
                <p className="text-[18px] leading-[26px] text-[rgb(250_250_250/70%)]">{f.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-12 space-y-4 border-t border-[rgb(255_255_255/15%)] pt-6">
            {t.formats.outro.map((line) => (
              <p
                key={line}
                className="max-w-[860px] text-[18px] leading-[26px] text-[rgb(250_250_250/70%)]"
              >
                {line}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
