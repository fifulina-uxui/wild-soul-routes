import { useEffect, useRef, useState } from 'react'
import { Navigate, useParams } from 'react-router'
import { asset } from '../lib/asset'
import Subpage from './Subpage'
import { Reveal } from '../sections/Reveal'
import { BackButton } from '../components/BackButton'
import LeadForm from '../sections/LeadForm'
import { useLang } from '../i18n'

const PER_PAGE = 9
// Несимметричная раскладка: сумма 24 = 4 ряда по 6 колонок
const SPANS = [4, 2, 2, 2, 2, 3, 3, 4, 2]
const spanClass: Record<number, string> = {
  2: 'sm:col-span-2',
  3: 'sm:col-span-3',
  4: 'sm:col-span-4',
  6: 'sm:col-span-6',
}

function TourGallery({ images, alt }: { images: string[]; alt: string }) {
  const [page, setPage] = useState(0)
  const [open, setOpen] = useState<number | null>(null)
  const topRef = useRef<HTMLDivElement>(null)
  const pages = Math.ceil(images.length / PER_PAGE)
  const shown = images.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE)
  const { t } = useLang()

  const goToPage = (next: number) => {
    setPage(next)
    topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  useEffect(() => {
    if (open === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(null)
      if (e.key === 'ArrowRight') setOpen((v) => (v === null ? v : Math.min(images.length - 1, v + 1)))
      if (e.key === 'ArrowLeft') setOpen((v) => (v === null ? v : Math.max(0, v - 1)))
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open === null, images.length])

  const pagerBtn =
    'inline-flex min-h-[36.5px] items-center justify-center rounded-[4px] border border-[rgb(255_255_255/23%)] px-6 py-[6px] text-[16px] font-bold leading-[24.5px] text-[#fafafa] transition-colors duration-200 hover:border-[#fafafa] disabled:pointer-events-none disabled:opacity-30'

  const navBtn =
    'absolute top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-[4px] bg-[rgb(255_255_255/12%)] text-[#fafafa] backdrop-blur-md transition-colors duration-200 hover:bg-[rgb(255_255_255/25%)] disabled:pointer-events-none disabled:opacity-30'

  return (
    <div className="mt-10 scroll-mt-24" ref={topRef}>
      <div className="grid grid-cols-2 auto-rows-[140px] gap-2 sm:auto-rows-[220px] sm:grid-cols-6 sm:gap-3">
        {shown.map((img, i) => (
          <button
            key={`${img}-${i}`}
            type="button"
            onClick={() => setOpen(page * PER_PAGE + i)}
            className={`group relative cursor-zoom-in overflow-hidden ${spanClass[SPANS[i % SPANS.length]] ?? 'sm:col-span-2'}`}
          >
            <img
              src={asset(img)}
              alt={alt}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            />
          </button>
        ))}
      </div>
      <div className="mt-6 flex items-center justify-between">
        <button
          type="button"
          onClick={() => goToPage(Math.max(0, page - 1))}
          disabled={page === 0}
          className={pagerBtn}
        >
          {t.tourDetail.galleryPrev}
        </button>
        <p className="text-[14px] leading-5 text-[rgb(250_250_250/55%)]">
          {page + 1} / {pages}
        </p>
        <button
          type="button"
          onClick={() => goToPage(Math.min(pages - 1, page + 1))}
          disabled={page === pages - 1}
          className={pagerBtn}
        >
          {t.tourDetail.galleryNext}
        </button>
      </div>

      {open !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-10"
          onClick={() => setOpen(null)}
        >
          <button
            type="button"
            aria-label="Close"
            onClick={() => setOpen(null)}
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-[4px] bg-[rgb(255_255_255/12%)] text-[#fafafa] backdrop-blur-md transition-colors duration-200 hover:bg-[rgb(255_255_255/25%)]"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M1 1l16 16M17 1L1 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Previous"
            disabled={open === 0}
            onClick={(e) => {
              e.stopPropagation()
              setOpen((v) => Math.max(0, (v ?? 0) - 1))
            }}
            className={`${navBtn} left-3 sm:left-6`}
          >
            <svg width="10" height="18" viewBox="0 0 10 18" fill="none">
              <path d="M9 1L1 9l8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <img
            src={asset(images[open])}
            alt={alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-full max-w-full object-contain"
          />
          <button
            type="button"
            aria-label="Next"
            disabled={open === images.length - 1}
            onClick={(e) => {
              e.stopPropagation()
              setOpen((v) => Math.min(images.length - 1, (v ?? 0) + 1))
            }}
            className={`${navBtn} right-3 sm:right-6`}
          >
            <svg width="10" height="18" viewBox="0 0 10 18" fill="none">
              <path d="M1 1l8 8-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      )}
    </div>
  )
}

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

            <div className="mt-8 grid max-w-[1100px] grid-cols-2 items-start gap-4 border-t border-[rgb(255_255_255/15%)] pt-5 sm:grid-cols-3 lg:grid-cols-[1fr_1fr_1fr_1fr_auto]">
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
                <p className="mt-1 whitespace-pre-line text-[12px] leading-4 text-[#fafafa]">{t.tours.meta.priceEarly}</p>
              </div>
              <div>
                <dt className={metaLabel}>{t.tours.meta.crew}</dt>
                <dd className="mt-1 text-[18px] leading-[26px] text-[#fafafa]">
                  {t.tours.crewNames[tour.crew]}
                </dd>
              </div>
              <div className="col-span-2 mt-4 flex sm:col-span-3 lg:col-span-1 lg:mt-0 lg:justify-end">
                <a href="#lead" className={`${ctaPrimary} w-full sm:w-auto`}>
                  {t.tourDetail.signup}
                </a>
              </div>
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

      {/* Галерея тура */}
      {detail.gallery && (
        <section className={section}>
          <Reveal>
            <TourGallery images={detail.gallery} alt={tour.title} />
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
            <div className="mt-8 flex flex-col gap-8 sm:flex-row sm:items-start sm:gap-10">
              <div className="flex flex-1 flex-col gap-4 border-t border-[rgb(255_255_255/15%)] pt-6">
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
              <div className="relative aspect-square w-full max-w-[240px] shrink-0 overflow-hidden bg-[rgb(255_255_255/4%)]">
                {detail.guide.photo ? (
                  <img
                    src={asset(detail.guide.photo)}
                    alt={detail.guide.name}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                ) : (
                  <span className="absolute inset-0 flex items-center justify-center text-[32px] font-bold text-[rgb(250_250_250/30%)]">
                    {detail.guide.name
                      .split(' ')
                      .map((w) => w[0])
                      .join('')}
                  </span>
                )}
              </div>
            </div>
          </Reveal>
        </section>
      )}

      {/* Записаться + ещё раз стоимость */}
      <section className={section}>
        <Reveal>
          <div className="flex flex-col gap-6 border-t border-[rgb(255_255_255/15%)] pt-10 md:flex-row md:items-end md:justify-between">
            {priceBlock}
            <a href="#lead" className={ctaPrimary}>
              {t.tourDetail.signup}
            </a>
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

      {/* Условия бронирования и скидки — два блока рядом */}
      {(detail.booking || detail.discounts) && (
        <section
          className={`mx-auto grid max-w-[1200px] grid-cols-1 gap-14 px-5 pt-14 md:gap-10 md:px-8 md:pt-20 ${
            detail.discounts ? 'md:grid-cols-2' : ''
          }`}
        >
          {detail.booking && (
            <Reveal>
              <h2 className={h2}>{t.tourDetail.booking}</h2>
              <ListItems items={detail.booking} />
            </Reveal>
          )}
          {detail.discounts && (
            <Reveal>
              <h2 className={h2}>{t.tourDetail.discounts}</h2>
              <ListItems items={detail.discounts} />
            </Reveal>
          )}
        </section>
      )}

      {/* Форма заявки + особенности тура слева */}
      <LeadForm
        submitLabel={t.tourDetail.signup}
        aside={
          detail.features ? (
            <div>
              <h2 className="text-[clamp(28px,3vw,44px)] font-bold leading-[1.08] text-[#fafafa]">
                {t.tourDetail.features}
              </h2>
              <ul className="mt-8 flex flex-col gap-4 border-t border-[rgb(255_255_255/15%)] pt-5 text-[18px] leading-[26px] text-[rgb(250_250_250/70%)]">
                {detail.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
          ) : undefined
        }
      />
    </Subpage>
  )
}
