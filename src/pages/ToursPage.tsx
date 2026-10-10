import { useMemo, useState } from 'react'
import { asset } from '../lib/asset'
import { Link, useSearchParams } from 'react-router'
import Subpage from './Subpage'
import { Reveal } from '../sections/Reveal'
import { useLang } from '../i18n'

export default function ToursPage() {
  const { t } = useLang()
  const [searchParams] = useSearchParams()
  const [country, setCountry] = useState<string | null>(searchParams.get('c'))

  const countries = useMemo(
    () =>
      Array.from(
        new Set(
          t.tours.items.flatMap((tour) =>
            tour.coords
              .split('— ')[1]
              .split('·')
              .map((c) => c.trim()),
          ),
        ),
      ),
    [t],
  )
  const items = country
    ? t.tours.items.filter((tour) =>
        tour.coords
          .split('— ')[1]
          .split('·')
          .map((c) => c.trim())
          .includes(country),
      )
    : t.tours.items

  return (
    <Subpage flush>
      {/* Полоса-hero каталога */}
      <section className="relative flex h-[40vh] min-h-[300px] items-end overflow-hidden">
        <img
          src={asset('images/hero.jpg')}
          alt={t.toursPage.heading}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/20" />

        <div className="relative z-10 mx-auto w-full max-w-[1200px] px-5 pb-12 md:px-8">
          <Reveal>
            <h1 className="text-[clamp(36px,4.7vw,64px)] font-bold leading-[1.05] text-[#fafafa]">
              {t.toursPage.heading}
            </h1>
            <p className="mt-4 max-w-[520px] text-[18px] leading-[26px] text-[rgb(250_250_250/70%)]">
              {t.toursPage.subtitle}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Фильтры по направлениям */}
      <div className="mx-auto max-w-[1200px] px-5 pt-10 md:px-8">
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setCountry(null)}
            className={`inline-flex min-h-[42px] items-center justify-center rounded-[4px] border px-8 py-2 text-[16px] font-bold leading-[26px] transition-colors duration-200 ${
              country === null
                ? 'border-[#fafafa] bg-[#fafafa] text-[rgb(0_0_0/87%)] hover:bg-[#e6e6e6] active:bg-[#d6d6d6]'
                : 'border-[rgb(255_255_255/23%)] text-[#fafafa] hover:border-[#fafafa]'
            }`}
          >
            {t.toursPage.all}
          </button>
          {countries.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCountry(c)}
              className={`inline-flex min-h-[42px] items-center justify-center rounded-[4px] border px-8 py-2 text-[16px] font-bold leading-[26px] transition-colors duration-200 ${
                country === c
                  ? 'border-[#fafafa] bg-[#fafafa] text-[rgb(0_0_0/87%)] hover:bg-[#e6e6e6] active:bg-[#d6d6d6]'
                  : 'border-[rgb(255_255_255/23%)] text-[#fafafa] hover:border-[#fafafa]'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Список туров карточками с фото-фоном — как на главной */}
      <div className="flex flex-col gap-4 px-4 pb-20 pt-8 md:px-6">
        {items.map((tour) => (
          <Reveal key={tour.id}>
            <article className="group relative min-h-[55vh] overflow-hidden">
              <img
                src={asset(tour.image)}
                alt={tour.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/70 to-transparent" />

              <div className="relative z-10 mx-auto flex h-full min-h-[55vh] w-full max-w-[1200px] items-center px-5 py-14 md:px-8">
                <div className="w-full">
                  <p className="text-[12px] uppercase leading-5 tracking-[0.17em] text-[rgb(250_250_250/55%)]">
                    {tour.coords}
                  </p>
                  <h2 className="mt-3 text-[clamp(28px,3vw,44px)] font-bold leading-[1.08] text-[#fafafa]">
                    {tour.title}
                  </h2>
                  <p className="mt-3 text-[18px] leading-[26px] text-[rgb(250_250_250/70%)]">
                    {tour.description}
                  </p>

                  <div className="mt-8 grid grid-cols-2 items-start gap-4 border-t border-[rgb(255_255_255/15%)] pt-5 lg:flex lg:items-start lg:justify-between lg:gap-10">
                    <div>
                      <dt className="text-[12px] uppercase leading-5 tracking-[0.12em] text-[rgb(250_250_250/55%)]">
                        {t.tours.meta.start}
                      </dt>
                      <dd className="mt-1 text-[18px] leading-[26px] text-[#fafafa]">{tour.start}</dd>
                      {tour.spots && (
                        <p className="mt-1 text-[12px] leading-4 text-[#fafafa]">{tour.spots}</p>
                      )}
                    </div>
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
                      <dd className="mt-1 text-[18px] leading-[26px] text-[#fafafa]">
                        {tour.priceEarly}{' '}
                        <span className="text-[14px] leading-5 text-[#fafafa] line-through">
                          {tour.price}
                        </span>
                      </dd>
                      <p className="mt-1 whitespace-pre-line text-[12px] leading-4 text-[#fafafa]">
                        {t.tours.meta.priceEarly}
                      </p>
                    </div>
                    <div>
                      <dt className="text-[12px] uppercase leading-5 tracking-[0.12em] text-[rgb(250_250_250/55%)]">
                        {t.tours.meta.crew}
                      </dt>
                      <dd className="mt-1 text-[18px] leading-[26px] text-[#fafafa]">
                        {t.tours.crewNames[tour.crew]}
                      </dd>
                    </div>
                    <div className="col-span-2 mt-4 flex lg:mt-0">
                      <Link
                        to={`/tours/${tour.id}`}
                        className="inline-flex min-h-[42px] w-full items-center justify-center rounded-[4px] bg-[#fafafa] px-8 py-2 text-[16px] font-bold leading-[26px] text-[rgb(0_0_0/87%)] transition-colors duration-200 hover:bg-[#e6e6e6] active:bg-[#d6d6d6] sm:w-auto"
                      >
                        {t.cta.more}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Subpage>
  )
}
