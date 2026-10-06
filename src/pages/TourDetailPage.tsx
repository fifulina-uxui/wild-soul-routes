import { Link, Navigate, useParams } from 'react-router'
import Subpage from './Subpage'
import { Reveal } from '../sections/Reveal'
import { BackButton } from '../components/BackButton'
import { useLang } from '../i18n'

export default function TourDetailPage() {
  const { t } = useLang()
  const { id } = useParams()

  const tour = t.tours.items.find((item) => item.id === id)
  const detail = t.tourDetails.find((item) => item.id === id)

  if (!tour || !detail) return <Navigate to="/tours" replace />

  return (
    <Subpage flush>
      {/* Hero тура */}
      <section className="relative flex h-[56vh] min-h-[380px] items-end overflow-hidden">
        <img
          src={`/${tour.image}`}
          alt={tour.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/20" />

        <div className="relative z-10 mx-auto w-full max-w-[1200px] px-5 pb-10 md:px-8">
          <Reveal>
            <BackButton to="/tours" label={t.tourDetail.back} />
            <p className="mt-6 text-[12px] uppercase leading-5 tracking-[0.17em] text-[rgb(250_250_250/55%)]">
              {tour.coords}
            </p>
            <h1 className="mt-3 max-w-[720px] text-[clamp(36px,4.7vw,64px)] font-bold leading-[1.05] text-[#fafafa]">
              {tour.title}
            </h1>

            <div className="mt-8 grid max-w-[720px] grid-cols-3 gap-4 border-t border-[rgb(255_255_255/15%)] pt-5">
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
            </div>
          </Reveal>
        </div>
      </section>

      {/* Вводное описание */}
      <section className="mx-auto max-w-[1200px] px-5 pt-14 md:px-8 md:pt-20">
        <Reveal>
          <p className="max-w-[720px] text-[18px] leading-[26px] text-[rgb(250_250_250/70%)]">
            {detail.intro}
          </p>
        </Reveal>
      </section>

      {/* Программа по дням */}
      <section className="mx-auto max-w-[1200px] px-5 pt-14 md:px-8 md:pt-20">
        <Reveal>
          <h2 className="text-[clamp(28px,3vw,44px)] font-bold leading-[1.08] text-[#fafafa]">
            {t.tourDetail.program}
          </h2>
        </Reveal>
        <div className="mt-8 border-t border-[rgb(255_255_255/15%)]">
          {detail.program.map((step, i) => (
            <Reveal key={step.day}>
              <div className="grid grid-cols-[64px_1fr] gap-4 border-b border-[rgb(255_255_255/15%)] py-5 md:grid-cols-[120px_1fr] md:gap-10">
                <p className="text-[12px] uppercase leading-5 tracking-[0.12em] text-[rgb(250_250_250/55%)]">
                  {String(i + 1).padStart(2, '0')} · {step.day}
                </p>
                <p className="text-[18px] leading-[26px] text-[rgb(250_250_250/70%)]">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Даты и что включено */}
      <section className="mx-auto grid max-w-[1200px] grid-cols-1 gap-14 px-5 pt-14 md:grid-cols-2 md:gap-10 md:px-8 md:pt-20">
        <Reveal>
          <h2 className="text-[clamp(28px,3vw,44px)] font-bold leading-[1.08] text-[#fafafa]">
            {t.tourDetail.dates}
          </h2>
          <div className="mt-8 border-t border-[rgb(255_255_255/15%)]">
            {detail.dates.map((date) => (
              <div
                key={date.when}
                className="flex items-baseline justify-between gap-4 border-b border-[rgb(255_255_255/15%)] py-5"
              >
                <p className="text-[18px] leading-[26px] text-[#fafafa]">{date.when}</p>
                <p className="text-[12px] uppercase leading-5 tracking-[0.12em] text-[rgb(250_250_250/55%)]">
                  {date.note}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <h2 className="text-[clamp(28px,3vw,44px)] font-bold leading-[1.08] text-[#fafafa]">
            {t.tourDetail.includes}
          </h2>
          <ul className="mt-8 flex flex-col gap-4 border-t border-[rgb(255_255_255/15%)] pt-5">
            {detail.includes.map((item) => (
              <li key={item} className="flex gap-3 text-[18px] leading-[26px] text-[rgb(250_250_250/70%)]">
                <span className="text-[rgb(250_250_250/40%)]">—</span>
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* Цена и заявка */}
      <section className="mx-auto max-w-[1200px] px-5 py-14 md:px-8 md:py-20">
        <Reveal>
          <div className="flex flex-col gap-6 border-t border-[rgb(255_255_255/15%)] pt-10 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[12px] uppercase leading-5 tracking-[0.12em] text-[rgb(250_250_250/55%)]">
                {t.tours.meta.price}
              </p>
              <p className="mt-2 text-[clamp(28px,3vw,44px)] font-bold leading-[1.08] text-[#fafafa]">
                {tour.price}
              </p>
              <p className="mt-2 text-[14px] leading-5 text-[rgb(250_250_250/55%)]">
                {t.tourDetail.priceNote}
              </p>
            </div>
            <Link
              to="/contacts"
              className="inline-flex min-h-[48px] items-center justify-center rounded-[4px] bg-[#fafafa] px-8 py-2 text-[16px] font-bold leading-[26px] text-[rgb(0_0_0/87%)] transition-colors duration-200 hover:bg-[#e6e6e6] active:bg-[#d6d6d6]"
            >
              {t.cta.lead}
            </Link>
          </div>
        </Reveal>
      </section>
    </Subpage>
  )
}
