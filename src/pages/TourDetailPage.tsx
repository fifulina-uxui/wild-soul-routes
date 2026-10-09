import { Link, Navigate, useParams } from 'react-router'
import { asset } from '../lib/asset'
import Subpage from './Subpage'
import { Reveal } from '../sections/Reveal'
import { BackButton } from '../components/BackButton'
import { useLang } from '../i18n'

const section = 'mx-auto max-w-[1200px] px-5 pt-14 md:px-8 md:pt-20'
const h2 = 'text-[clamp(28px,3vw,44px)] font-bold leading-[1.08] text-[#fafafa]'
const bodyText = 'text-[18px] leading-[26px] text-[rgb(250_250_250/70%)]'
const metaLabel = 'text-[12px] uppercase leading-5 tracking-[0.12em] text-[rgb(250_250_250/55%)]'
const ctaPrimary =
  'inline-flex min-h-[48px] items-center justify-center rounded-[4px] bg-[#fafafa] px-8 py-2 text-[16px] font-bold leading-[26px] text-[rgb(0_0_0/87%)] transition-colors duration-200 hover:bg-[#e6e6e6] active:bg-[#d6d6d6]'

function ListItems({ items }: { items: string[] }) {
  return (
    <ul className="mt-8 flex flex-col gap-4 border-t border-[rgb(255_255_255/15%)] pt-5">
      {items.map((item) => (
        <li key={item.slice(0, 48)} className={`flex gap-3 ${bodyText}`}>
          <span className="text-[rgb(250_250_250/40%)]">—</span>
          {item}
        </li>
      ))}
    </ul>
  )
}

export default function TourDetailPage() {
  const { t } = useLang()
  const { id } = useParams()

  const tour = t.tours.items.find((item) => item.id === id)
  const detail = t.tourDetails.find((item) => item.id === id)

  if (!tour || !detail) return <Navigate to="/tours" replace />

  const priceBlock = (
    <div>
      <p className={metaLabel}>{t.tours.meta.price}</p>
      <p className="mt-2 text-[clamp(28px,3vw,44px)] font-bold leading-[1.08] text-[#fafafa]">
        {tour.priceEarly}{' '}
        <span className="text-[0.6em] font-normal text-[#fafafa] line-through">{tour.price}</span>
      </p>
      <p className="mt-2 text-[14px] leading-5 text-[#fafafa]">
        {t.tours.meta.priceEarly} · {t.tourDetail.priceNote}
      </p>
    </div>
  )

  return (
    <Subpage flush>
      {/* Hero: название, даты, длительность, стоимость, кнопка */}
      <section className="relative flex min-h-[56vh] items-end overflow-hidden">
        <img
          src={asset(tour.image)}
          alt={tour.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/20" />

        <div className="relative z-10 mx-auto w-full max-w-[1200px] px-5 pb-10 pt-40 md:px-8">
          <Reveal>
            <BackButton to="/tours" label={t.tourDetail.back} />
            <p className="mt-6 text-[12px] uppercase leading-5 tracking-[0.17em] text-[rgb(250_250_250/55%)]">
              {tour.coords}
            </p>
            <h1 className="mt-3 max-w-[720px] text-[clamp(36px,4.7vw,64px)] font-bold leading-[1.05] text-[#fafafa]">
              {tour.title}
            </h1>

            <div className="mt-8 grid max-w-[900px] grid-cols-2 gap-4 border-t border-[rgb(255_255_255/15%)] pt-5 sm:grid-cols-3">
              <div>
                <dt className={metaLabel}>{t.tours.meta.start}</dt>
                <dd className="mt-1 text-[18px] leading-[26px] text-[#fafafa]">{tour.start}</dd>
              </div>
              <div>
                <dt className={metaLabel}>{t.tours.meta.days}</dt>
                <dd className="mt-1 text-[18px] leading-[26px] text-[#fafafa]">{tour.days}</dd>
              </div>
              <div>
                <dt className={metaLabel}>{t.tours.meta.price}</dt>
                <dd className="mt-1 text-[18px] leading-[26px] text-[#fafafa]">
                  {tour.priceEarly}{' '}
                  <span className="text-[14px] leading-5 text-[#fafafa] line-through">
                    {tour.price}
                  </span>
                </dd>
                <p className="mt-1 text-[12px] leading-4 text-[#fafafa]">{t.tours.meta.priceEarly}</p>
              </div>
            </div>

            <div className="mt-8">
              <Link to="/contacts" className={ctaPrimary}>
                {t.tourDetail.signup}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Вводное описание */}
      <section className={section}>
        <Reveal>
          <p className={`max-w-[720px] ${bodyText}`}>{detail.intro}</p>
        </Reveal>
      </section>

      {/* Даты заездов — только если их несколько */}
      {detail.dates.length > 1 && (
        <section className={section}>
          <Reveal>
            <h2 className={h2}>{t.tourDetail.dates}</h2>
            <div className="mt-8 max-w-[720px] border-t border-[rgb(255_255_255/15%)]">
              {detail.dates.map((date) => (
                <div
                  key={date.when}
                  className="flex items-baseline justify-between gap-4 border-b border-[rgb(255_255_255/15%)] py-5"
                >
                  <p className="text-[18px] leading-[26px] text-[#fafafa]">{date.when}</p>
                  <p className={metaLabel}>{date.note}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </section>
      )}

      {/* Что вас ждёт */}
      {detail.highlights && (
        <section className={section}>
          <Reveal>
            <h2 className={h2}>{t.tourDetail.highlights}</h2>
            <div className="max-w-[720px]">
              <ListItems items={detail.highlights} />
            </div>
          </Reveal>
        </section>
      )}

      {/* Программа по дням */}
      <section className={section}>
        <Reveal>
          <h2 className={h2}>{t.tourDetail.program}</h2>
        </Reveal>
        <div className="mt-8 border-t border-[rgb(255_255_255/15%)]">
          {detail.program.map((step) => (
            <Reveal key={step.day}>
              <div className="grid grid-cols-1 gap-2 border-b border-[rgb(255_255_255/15%)] py-5 md:grid-cols-[240px_1fr] md:gap-10">
                <p className="text-[18px] font-bold leading-[26px] text-[#fafafa]">{step.day}</p>
                <p className={bodyText}>{step.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Кто гид */}
      {detail.guide && (
        <section className={section}>
          <Reveal>
            <h2 className={h2}>{t.tourDetail.guide}</h2>
            <div className="mt-8 flex max-w-[720px] flex-col gap-4 border-t border-[rgb(255_255_255/15%)] pt-6">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-[24px] font-bold leading-[30px] text-[#fafafa]">
                  {detail.guide.name}
                </h3>
                <a
                  href={detail.guide.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Instagram — ${detail.guide.name}`}
                  className="text-[rgb(250_250_250/55%)] transition-colors duration-200 hover:text-[#fafafa]"
                >
                  <svg width="20" height="20" viewBox="0 0 256 256" fill="none" stroke="currentColor" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="36" y="36" width="184" height="184" rx="48" />
                    <circle cx="128" cy="128" r="42" />
                    <circle cx="180" cy="76" r="12" fill="currentColor" stroke="none" />
                  </svg>
                </a>
              </div>
              <p className="text-[14px] leading-5 text-[rgb(250_250_250/70%)]">{detail.guide.role}</p>
              <p className={bodyText}>{detail.guide.text}</p>
            </div>
          </Reveal>
        </section>
      )}

      {/* Записаться + ещё раз стоимость */}
      <section className={section}>
        <Reveal>
          <div className="flex flex-col gap-6 border-t border-[rgb(255_255_255/15%)] pt-10 md:flex-row md:items-end md:justify-between">
            {priceBlock}
            <Link to="/contacts" className={ctaPrimary}>
              {t.tourDetail.signup}
            </Link>
          </div>
        </Reveal>
      </section>

      {/* В стоимость входит / Не входит */}
      <section
        className={`mx-auto grid max-w-[1200px] grid-cols-1 gap-14 px-5 pt-14 md:gap-10 md:px-8 md:pt-20 ${
          detail.excludes ? 'md:grid-cols-2' : ''
        }`}
      >
        <Reveal>
          <h2 className={h2}>{t.tourDetail.includes}</h2>
          <ListItems items={detail.includes} />
        </Reveal>
        {detail.excludes && (
          <Reveal>
            <h2 className={h2}>{t.tourDetail.excludes}</h2>
            <ListItems items={detail.excludes} />
          </Reveal>
        )}
      </section>

      {/* Условия бронирования и скидки */}
      {(detail.booking || detail.discounts) && (
        <section className={section}>
          <div className="grid grid-cols-1 gap-14 md:grid-cols-2 md:gap-10">
            {detail.booking && (
              <Reveal>
                <h2 className={h2}>{t.tourDetail.booking}</h2>
                <div className="mt-8 flex flex-col gap-4 border-t border-[rgb(255_255_255/15%)] pt-5">
                  {detail.booking.map((p) => (
                    <p key={p.slice(0, 48)} className={bodyText}>
                      {p}
                    </p>
                  ))}
                </div>
              </Reveal>
            )}
            {detail.discounts && (
              <Reveal>
                <h2 className={h2}>{t.tourDetail.discounts}</h2>
                <ListItems items={detail.discounts} />
              </Reveal>
            )}
          </div>
        </section>
      )}

      {/* Особенности тура */}
      {detail.features && (
        <section className={section}>
          <Reveal>
            <h2 className={h2}>{t.tourDetail.features}</h2>
            <div className="max-w-[720px]">
              <ListItems items={detail.features} />
            </div>
          </Reveal>
        </section>
      )}

      {/* Остались вопросы */}
      <section className="mx-auto max-w-[1200px] px-5 py-14 md:px-8 md:py-20">
        <Reveal>
          <div className="flex flex-col gap-6 border-t border-[rgb(255_255_255/15%)] pt-10 md:flex-row md:items-center md:justify-between">
            <p className={`max-w-[420px] ${bodyText}`}>{t.tourDetail.questionsText}</p>
            <Link to="/contacts" className={ctaPrimary}>
              {t.tourDetail.questions}
            </Link>
          </div>
        </Reveal>
      </section>
    </Subpage>
  )
}
