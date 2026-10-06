import { Link } from 'react-router'
import { useLang } from '../i18n'
import { Reveal } from './Reveal'

export default function Tours() {
  const { t } = useLang()

  return (
    <section id="tours" className="bg-black">
      <div className="mx-auto max-w-[1200px] px-5 pb-7 pt-14 md:px-8 md:pt-24">
        <Reveal>
          <p className="text-[12px] font-light uppercase leading-5 tracking-[0.17em] text-[rgb(250_250_250/55%)]">
            {t.tours.label}
          </p>
          <h2 className="mt-2 text-[clamp(30px,3.4vw,48px)] font-bold leading-[1.1] tracking-[-0.5px] text-[#fafafa]">
            {t.tours.heading}
          </h2>
        </Reveal>
      </div>

      <div className="flex flex-col gap-4 px-4 md:px-6">
        {t.tours.items.map((tour, i) => (
          <Reveal key={tour.id}>
            <article className="group relative min-h-[70vh] overflow-hidden rounded-[8px]">
              <img
                src={tour.image}
                alt={tour.title}
                loading={i === 0 ? 'eager' : 'lazy'}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div
                className={`absolute inset-0 ${
                  i % 2 === 0
                    ? 'bg-gradient-to-r from-black/75 via-black/30 to-transparent'
                    : 'bg-gradient-to-l from-black/75 via-black/30 to-transparent'
                }`}
              />
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/70 to-transparent" />

              <div
                className={`relative z-10 mx-auto flex h-full min-h-[70vh] w-full max-w-[1200px] items-center px-5 py-16 md:px-8 ${
                  i % 2 === 0 ? '' : 'justify-end'
                }`}
              >
                <div className="max-w-[560px]">
                  <p className="text-[12px] font-light uppercase leading-5 tracking-[0.17em] text-[rgb(250_250_250/55%)]">
                    {tour.coords}
                  </p>
                  <h3 className="mt-3 text-[clamp(28px,3vw,44px)] font-bold leading-[1.08] text-[#fafafa]">
                    {tour.title}
                  </h3>
                  <p className="mt-3 text-[18px] leading-[26px] text-[rgb(250_250_250/70%)]">
                    {tour.description}
                  </p>

                  <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-[rgb(255_255_255/15%)] pt-5">
                    <div>
                      <dt className="text-[12px] uppercase leading-5 tracking-[0.12em] text-[rgb(250_250_250/55%)]">
                        {t.tours.meta.days}
                      </dt>
                      <dd className="mt-1 text-[18px] leading-[26px] text-[#fafafa]">{tour.days}</dd>
                    </div>
                    <div>
                      <dt className="text-[12px] uppercase leading-5 tracking-[0.12em] text-[rgb(250_250_250/55%)]">
                        {t.tours.meta.price}
                      </dt>
                      <dd className="mt-1 text-[18px] leading-[26px] text-[#fafafa]">{tour.price}</dd>
                    </div>
                    <div>
                      <dt className="text-[12px] uppercase leading-5 tracking-[0.12em] text-[rgb(250_250_250/55%)]">
                        {t.tours.meta.highlight}
                      </dt>
                      <dd className="mt-1 text-[18px] leading-[26px] text-[#fafafa]">{tour.highlight}</dd>
                    </div>
                  </dl>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <Link
                      to={`/tours/${tour.id}`}
                      className="inline-flex min-h-[36.5px] w-full items-center justify-center rounded-[4px] bg-[#fafafa] px-8 py-[6px] text-[16px] font-bold leading-[24.5px] text-[rgb(0_0_0/87%)] transition-colors duration-200 hover:bg-[#e6e6e6] active:bg-[#d6d6d6] sm:w-auto"
                    >
                      {t.cta.more}
                    </Link>
                    <Link
                      to="/contacts"
                      className="inline-flex min-h-[36.5px] w-full items-center justify-center rounded-[4px] border border-[rgb(255_255_255/23%)] px-8 py-[6px] text-[16px] font-bold leading-[24.5px] text-[#fafafa] transition-colors duration-200 hover:border-[#fafafa] sm:w-auto"
                    >
                      {t.cta.lead}
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
