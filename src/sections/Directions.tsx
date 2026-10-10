import { Link } from 'react-router'
import { useLang } from '../i18n'
import { Reveal } from './Reveal'

export default function Directions() {
  const { t } = useLang()

  return (
    <section id="directions" className="bg-black">
      <div className="mx-auto max-w-[1200px] px-5 py-14 md:px-8 md:py-24">
        <Reveal>
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div>
              <p className="text-[12px] uppercase leading-5 tracking-[0.17em] text-[rgb(250_250_250/55%)]">
                {t.directions.label}
              </p>
              <h2 className="mt-2 max-w-[600px] text-[clamp(30px,3.4vw,48px)] font-bold leading-[1.1] tracking-[-0.5px] text-[#fafafa]">
                {t.directions.heading}
              </h2>
              <p className="mt-4 max-w-[600px] text-[18px] leading-[26px] text-[rgb(250_250_250/70%)]">
                {t.directions.text}
              </p>
            </div>
            <Link
              to="/directions"
              className="hidden min-h-[36.5px] items-center justify-center rounded-[4px] border border-[rgb(255_255_255/23%)] px-8 py-[6px] text-[16px] font-bold leading-[24.5px] text-[#fafafa] transition-colors duration-200 hover:border-[#fafafa] sm:inline-flex"
            >
              {t.directions.all}
            </Link>
          </div>
        </Reveal>

        <Reveal className="mt-12">
          <ul className="grid grid-cols-1 border-t border-[rgb(255_255_255/15%)] sm:grid-cols-2">
            {t.directions.items.map((d) => (
              <li
                key={d.name}
                className="group border-b border-[rgb(255_255_255/15%)] transition-colors duration-200 hover:border-[#fafafa] sm:odd:border-r sm:odd:pr-8 sm:even:pl-8"
              >
                <Link
                  to={`/tours?c=${d.name}`}
                  className="flex items-baseline justify-between gap-4 py-5"
                >
                  <span className="text-[24px] font-bold leading-[30px] text-[#fafafa] transition-transform duration-200 group-hover:translate-x-1">
                    {d.name}
                  </span>
                  <span className="text-[14px] leading-5 text-[rgb(250_250_250/55%)] transition-colors duration-200 group-hover:text-[#fafafa]">
                    {d.count}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="mt-10 sm:hidden">
          <Reveal>
            <Link
              to="/directions"
              className="inline-flex min-h-[36.5px] w-full items-center justify-center rounded-[4px] border border-[rgb(255_255_255/23%)] px-8 py-[6px] text-[16px] font-bold leading-[24.5px] text-[#fafafa] transition-colors duration-200 hover:border-[#fafafa]"
            >
              {t.directions.all}
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
