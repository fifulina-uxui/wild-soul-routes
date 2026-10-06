import { useLang } from '../i18n'
import { Reveal } from './Reveal'

export default function Directions() {
  const { t } = useLang()

  return (
    <section id="directions" className="bg-black">
      <div className="mx-auto max-w-[1200px] px-5 py-14 md:px-8 md:py-24">
        <Reveal>
          <p className="text-[12px] font-light uppercase leading-5 tracking-[0.17em] text-[rgb(250_250_250/55%)]">
            {t.directions.label}
          </p>
          <h2 className="mt-2 max-w-[600px] text-[clamp(30px,3.4vw,48px)] font-bold leading-[1.1] tracking-[-0.5px] text-[#fafafa]">
            {t.directions.heading}
          </h2>
          <p className="mt-4 max-w-[600px] text-[18px] leading-[26px] text-[rgb(250_250_250/70%)]">
            {t.directions.text}
          </p>
        </Reveal>

        <Reveal className="mt-12">
          <ul className="grid grid-cols-1 border-t border-[rgb(255_255_255/15%)] sm:grid-cols-2">
            {t.directions.items.map((d) => (
              <li
                key={d.name}
                className="group flex items-baseline justify-between gap-4 border-b border-[rgb(255_255_255/15%)] py-5 transition-colors duration-200 hover:border-[#fafafa] sm:odd:border-r sm:odd:pr-8 sm:even:pl-8"
              >
                <span className="text-[24px] font-bold leading-[30px] text-[#fafafa]">
                  {d.name}
                </span>
                <span className="text-[14px] leading-5 text-[rgb(250_250_250/55%)]">
                  {d.count}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
