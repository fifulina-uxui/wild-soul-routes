import { useEffect, useMemo } from 'react'
import { asset } from '../lib/asset'
import { Link, useSearchParams } from 'react-router'
import Subpage from './Subpage'
import { Reveal } from '../sections/Reveal'
import { useLang } from '../i18n'
import { content, type PageContent } from '../data/content'

const countriesOf = (dict: PageContent) =>
  Array.from(
    new Set(
      dict.tours.items.flatMap((tour) =>
        tour.coords
          .split('— ')[1]
          .split('·')
          .map((c) => c.trim()),
      ),
    ),
  )

// Сортировка от ближайших туров: «Скоро» и прочее без даты — в конец списка
const MONTHS: Record<string, number> = {
  января: 1, февраля: 2, марта: 3, апреля: 4, мая: 5, июня: 6,
  июля: 7, августа: 8, сентября: 9, октября: 10, ноября: 11, декабря: 12,
  jan: 1, feb: 2, mar: 3, apr: 4, may: 5, jun: 6, jul: 7, aug: 8, sep: 9, oct: 10, nov: 11, dec: 12,
}
const startTs = (d: string): number => {
  const day = Number(d.match(/\d+/)?.[0] ?? 1)
  const word = (d.match(/[а-яА-ЯA-Za-z]+/)?.[0] ?? '').toLowerCase()
  const month = MONTHS[word] ?? MONTHS[word.slice(0, 3)]
  const year = Number(d.match(/\d{4}/)?.[0] ?? 0)
  if (!month || !year) return 99999999
  return year * 10000 + month * 100 + day
}

export default function ToursPage() {
  const { t, lang } = useLang()
  // Фильтр живёт в адресной строке: клик по стране меняет ?c=...,
  // поэтому URL и список не расходятся и переживают обновление страницы
  const [searchParams, setSearchParams] = useSearchParams()
  const country = searchParams.get('c')
  const selectCountry = (c: string | null) => setSearchParams(c ? { c } : {})

  const countries = useMemo(() => countriesOf(t), [t])

  // В адресе лежит локализованное название страны — при смене языка
  // переводим его по индексу в другом словаре, иначе список стал бы пустым
  useEffect(() => {
    if (!country || countries.includes(country)) return
    const other = lang === 'ru' ? countriesOf(content.en) : countriesOf(content.ru)
    const idx = other.indexOf(country)
    setSearchParams(idx >= 0 && countries[idx] ? { c: countries[idx] } : {}, { replace: true })
  }, [country, countries, lang, setSearchParams])

  const activeCountry = country && countries.includes(country) ? country : null
  const items = (activeCountry
    ? t.tours.items.filter((tour) =>
        tour.coords
          .split('— ')[1]
          .split('·')
          .map((c) => c.trim())
          .includes(activeCountry),
      )
    : t.tours.items
  )
    .slice()
    .sort((a, b) => startTs(a.start) - startTs(b.start))

  return (
    <Subpage flush>
      {/* Полоса-hero каталога */}
      <section className="relative flex h-[40vh] min-h-[300px] items-end overflow-hidden">
        <img
          src={asset('images/hero.webp')}
          fetchPriority="high"
          alt={t.toursPage.heading}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/20" />

        <div className="relative z-10 mx-auto w-full max-w-[1200px] px-5 pb-3 md:px-8">
          <h1 className="hero-in text-[clamp(36px,4.7vw,64px)] font-bold leading-[1.05] text-[#fafafa]">
            {t.toursPage.heading}
          </h1>
          <p
            className="hero-in mt-4 max-w-[520px] text-[18px] leading-[26px] text-[rgb(250_250_250/70%)]"
            style={{ animationDelay: '160ms' }}
          >
            {t.toursPage.subtitle}
          </p>
        </div>
      </section>

      {/* Фильтры по направлениям */}
      <div className="mx-auto max-w-[1200px] px-5 pt-5 md:px-8">
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => selectCountry(null)}
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
              onClick={() => selectCountry(c)}
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
        {items.map((tour, i) => (
          <Reveal key={tour.id} delay={(i % 3) * 80}>
            <article className="group relative min-h-[55vh] overflow-hidden rounded-[8px]">
              <img
                src={asset(tour.image)}
                alt={tour.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/30 to-transparent" />
              <div className="absolute inset-0 bg-black/40 sm:hidden" />
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/70 to-transparent" />

              <div className="relative z-10 mx-auto flex h-full min-h-[55vh] w-full max-w-[1200px] items-center px-5 py-14 md:px-8">
                <div className="w-full">
                  <Reveal delay={(i % 3) * 80 + 120}>
                    <p className="text-[12px] uppercase leading-5 tracking-[0.17em] text-[rgb(250_250_250/55%)]">
                      {tour.coords}
                    </p>
                  </Reveal>
                  <Reveal delay={(i % 3) * 80 + 220}>
                    <h2 className="mt-3 text-[clamp(28px,3vw,44px)] font-bold leading-[1.08] text-[#fafafa]">
                      {tour.title}
                    </h2>
                  </Reveal>
                  <Reveal delay={(i % 3) * 80 + 320}>
                    <p className="mt-3 text-[18px] leading-[26px] text-[rgb(250_250_250/70%)]">
                      {tour.description}
                    </p>
                  </Reveal>

                  <Reveal delay={(i % 3) * 80 + 440}>
                  <div className="mt-8 grid grid-cols-2 items-start gap-4 border-t border-[rgb(255_255_255/15%)] pt-5 lg:flex lg:items-start lg:justify-between lg:gap-10">
                    <div>
                      <dt className="text-[12px] uppercase leading-5 tracking-[0.12em] text-[rgb(250_250_250/55%)]">
                        {t.tours.meta.start}
                      </dt>
                      <dd className="mt-1 text-[18px] leading-[26px] text-[#fafafa]">{tour.start}</dd>
                    </div>
                    <div>
                      <dt className="text-[12px] uppercase leading-5 tracking-[0.12em] text-[rgb(250_250_250/55%)]">
                        {t.tours.meta.group}
                      </dt>
                      <dd className="mt-1 text-[18px] leading-[26px] text-[#fafafa]">
                        {tour.groupSize ?? t.tours.meta.groupSize}
                      </dd>
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
                    <div className="col-span-2 mt-4 lg:mt-0">
                      <Link
                        to={`/tours/${tour.id}`}
                        className="inline-flex min-h-[42px] w-full items-center justify-center rounded-[4px] bg-[#fafafa] px-8 py-2 text-[16px] font-bold leading-[26px] text-[rgb(0_0_0/87%)] transition-colors duration-200 hover:bg-[#e6e6e6] active:bg-[#d6d6d6] sm:w-auto"
                      >
                        {t.cta.more}
                      </Link>
                    </div>
                  </div>
                  </Reveal>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Subpage>
  )
}
