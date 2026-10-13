import { Link } from 'react-router'
import { asset } from '../lib/asset'
import { useLang } from '../i18n'
import { useLeadDialog } from './LeadDialog'
import { Reveal } from './Reveal'

export default function Tours() {
  const { t } = useLang()
  const openLead = useLeadDialog()

  // Четыре ближайших тура по дате начала (формат «27 марта – 4 апреля 2027» / «Mar 27 – Apr 4, 2027»)
  const MONTHS: Record<string, number> = {
    января: 1, февраля: 2, марта: 3, апреля: 4, мая: 5, июня: 6,
    июля: 7, августа: 8, сентября: 9, октября: 10, ноября: 11, декабря: 12,
    jan: 1, feb: 2, mar: 3, apr: 4, may: 5, jun: 6, jul: 7, aug: 8, sep: 9, oct: 10, nov: 11, dec: 12,
  }
  const parseDate = (d: string): number | null => {
    // «27 марта – 4 апреля 2027» / «March 27 – April 4, 2027» / «8–17 апреля 2027»
    const day = Number(d.match(/\d+/)?.[0] ?? 1)
    const word = (d.match(/[а-яА-ЯA-Za-z]+/)?.[0] ?? '').toLowerCase()
    const month = MONTHS[word] ?? MONTHS[word.slice(0, 3)]
    const year = Number(d.match(/\d{4}/)?.[0] ?? 0)
    if (!month || !year) return null
    return year * 10000 + month * 100 + day
  }
  const ts = (d: string) => parseDate(d) ?? 99999999 // «Скоро» и прочее — в конец списка
  // Дата окончания — день и месяц могут быть только в начале строки:
  // «21–28 октября 2026», «May 28 – June 12, 2027» — берём последний месяц,
  // год и число, стоящее непосредственно перед годом
  const endTs = (d: string) => {
    const year = Number(d.match(/\d{4}/)?.[0] ?? 0)
    const dayMatch = d.match(/(\d{1,2})\D{0,10}\d{4}/)
    const words = d.toLowerCase().match(/[а-яёa-z]+/g) ?? []
    const months = words
      .map((w) => MONTHS[w] ?? MONTHS[w.slice(0, 3)])
      .filter((m): m is number => Boolean(m))
    const month = months[months.length - 1]
    if (!year || !dayMatch || !month) return 99999999 // «Скоро» считаем предстоящим
    return year * 10000 + month * 100 + Number(dayMatch[1])
  }
  const today = (() => {
    const n = new Date()
    return n.getFullYear() * 10000 + (n.getMonth() + 1) * 100 + n.getDate()
  })()
  // Ближайшие туры на главной — четыре предстоящих, по дате начала;
  // завершившиеся поездки не показываем
  const upcoming = t.tours.items.filter((tour) => endTs(tour.start) >= today)
  const nearest = upcoming.sort((a, b) => ts(a.start) - ts(b.start)).slice(0, 4)

  return (
    <section id="tours" className="bg-black">
      <div className="mx-auto max-w-[1200px] px-5 pb-7 pt-14 md:px-8 md:pt-24">
        <Reveal>
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div>
              <p className="text-[12px] uppercase leading-5 tracking-[0.17em] text-[rgb(250_250_250/55%)]">
                {t.tours.label}
              </p>
              <h2 className="mt-2 text-[clamp(30px,3.4vw,48px)] font-bold leading-[1.1] tracking-[-0.5px] text-[#fafafa]">
                {t.tours.heading}
              </h2>
            </div>
            <Link
              to="/tours"
              className="hidden min-h-[36.5px] items-center justify-center rounded-[4px] border border-[rgb(255_255_255/23%)] px-8 py-[6px] text-[16px] font-bold leading-[24.5px] text-[#fafafa] transition-colors duration-200 hover:border-[#fafafa] sm:inline-flex"
            >
              {t.tourDetail.back}
            </Link>
          </div>
        </Reveal>
      </div>

      <div className="flex flex-col gap-4 px-4 md:px-6">
        {nearest.length === 0 && (
          <p className="mx-auto w-full max-w-[1200px] px-1 text-[18px] leading-[26px] text-[rgb(250_250_250/70%)] md:px-2">
            {t.tours.empty}
          </p>
        )}
        {nearest.map((tour, i) => (
          <Reveal key={tour.id}>
            <article className="group relative min-h-[70vh] overflow-hidden">
              <img
                src={asset(tour.image)}
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
              {/* На мобильном текст занимает всю ширину — добавляем равномерную вуаль */}
              <div className="absolute inset-0 bg-black/40 sm:hidden" />
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/70 to-transparent" />

              <div
                className={`relative z-10 mx-auto flex h-full min-h-[70vh] w-full max-w-[1200px] items-center px-5 py-16 md:px-8 ${
                  i % 2 === 0 ? '' : 'justify-end'
                }`}
              >
                <div className="max-w-[560px]">
                  <p className="text-[12px] uppercase leading-5 tracking-[0.17em] text-[rgb(250_250_250/55%)]">
                    {tour.coords}
                  </p>
                  <h3 className="mt-3 text-[clamp(28px,3vw,44px)] font-bold leading-[1.08] text-[#fafafa]">
                    {tour.title}
                  </h3>
                  <p className="mt-3 text-[18px] leading-[26px] text-[rgb(250_250_250/70%)]">
                    {tour.description}
                  </p>

                  <dl className="mt-8 grid grid-cols-2 gap-4 border-t border-[rgb(255_255_255/15%)] pt-5 sm:grid-cols-3">
                    <div>
                      <dt className="text-[12px] uppercase leading-5 tracking-[0.12em] text-[rgb(250_250_250/55%)]">
                        {t.tours.meta.start}
                      </dt>
                      <dd className="mt-1 text-[18px] leading-[26px] text-[#fafafa]">{tour.start}</dd>
                      <p className="mt-1 text-[12px] leading-4 text-[#fafafa]">{tour.days}</p>
                    </div>
                    <div>
                      <dt className="text-[12px] uppercase leading-5 tracking-[0.12em] text-[rgb(250_250_250/55%)]">
                        {t.tours.meta.group}
                      </dt>
                      <dd className="mt-1 text-[18px] leading-[26px] text-[#fafafa]">
                        {t.tours.crewNames[tour.crew]}
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
                  </dl>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <Link
                      to={`/tours/${tour.id}`}
                      className="inline-flex min-h-[36.5px] w-full items-center justify-center rounded-[4px] bg-[#fafafa] px-8 py-[6px] text-[16px] font-bold leading-[24.5px] text-[rgb(0_0_0/87%)] transition-colors duration-200 hover:bg-[#e6e6e6] active:bg-[#d6d6d6] sm:w-auto"
                    >
                      {t.cta.more}
                    </Link>
                    <button
                      type="button"
                      onClick={() => openLead(tour.title)}
                      className="inline-flex min-h-[36.5px] w-full items-center justify-center rounded-[4px] border border-[rgb(255_255_255/23%)] px-8 py-[6px] text-[16px] font-bold leading-[24.5px] text-[#fafafa] transition-colors duration-200 hover:border-[#fafafa] sm:w-auto"
                    >
                      {t.cta.lead}
                    </button>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="px-5 pb-14 pt-10 sm:hidden">
        <Reveal>
          <Link
            to="/tours"
            className="inline-flex min-h-[36.5px] w-full items-center justify-center rounded-[4px] border border-[rgb(255_255_255/23%)] px-8 py-[6px] text-[16px] font-bold leading-[24.5px] text-[#fafafa] transition-colors duration-200 hover:border-[#fafafa]"
          >
            {t.tourDetail.back}
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
