import { Link } from 'react-router'
import { asset } from '../lib/asset'
import Subpage from './Subpage'
import { Reveal } from '../sections/Reveal'
import { useLang } from '../i18n'

export default function DirectionsPage() {
  const { t } = useLang()

  return (
    <Subpage flush>
      {/* Полоса-hero */}
      <section className="relative flex h-[40vh] min-h-[300px] items-end overflow-hidden">
        <img
          src={asset('images/hero.jpg')}
          alt={t.directionsPage.heading}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/20" />

        <div className="relative z-10 mx-auto w-full max-w-[1200px] px-5 pb-12 md:px-8">
          <Reveal>
            <h1 className="text-[clamp(36px,4.7vw,64px)] font-bold leading-[1.05] text-[#fafafa]">
              {t.directionsPage.heading}
            </h1>
            <p className="mt-4 max-w-[560px] text-[18px] leading-[26px] text-[rgb(250_250_250/70%)]">
              {t.directionsPage.subtitle}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Карточки стран с фото — 3 в ряд */}
      <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-6 px-5 pt-12 sm:grid-cols-2 md:px-8 lg:grid-cols-3">
        {t.directionsPage.cards.map((card) => (
          <Reveal key={card.country}>
            <Link
              to={`/tours?c=${encodeURIComponent(card.country)}`}
              className="group flex h-full flex-col overflow-hidden rounded-[8px] bg-[rgb(255_255_255/4%)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={asset(card.image)}
                  alt={card.country}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h2 className="text-[24px] font-bold leading-[30px] text-[#fafafa]">
                  {card.country}
                </h2>
                <p className="mt-3 text-[18px] leading-[26px] text-[rgb(250_250_250/70%)]">
                  {card.text}
                </p>
                <div className="mt-8 flex-1" />
                <span className="inline-flex min-h-[36.5px] w-full items-center justify-center rounded-[4px] bg-[#fafafa] px-8 py-[6px] text-[16px] font-bold leading-[24.5px] text-[rgb(0_0_0/87%)] transition-colors duration-200 group-hover:bg-[#e6e6e6]">
                  {t.nav.find((n) => n.href === '/tours')?.label}
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>

      {/* Все регионы списком */}
      <div className="mx-auto max-w-[1200px] px-5 py-14 md:px-8 md:py-20">
        <Reveal>
          <h2 className="text-[clamp(28px,3vw,44px)] font-bold leading-[1.08] text-[#fafafa]">
            {t.directionsPage.listLabel}
          </h2>
        </Reveal>
        <Reveal className="mt-8">
          <ul className="grid grid-cols-1 border-t border-[rgb(255_255_255/15%)] sm:grid-cols-2">
            {t.directions.items.map((d) => (
              <li
                key={d.name}
                className="flex items-baseline justify-between gap-4 border-b border-[rgb(255_255_255/15%)] py-5 sm:odd:pr-8 sm:even:pl-8"
              >
                <span className="text-[24px] font-bold leading-[30px] text-[#fafafa]">{d.name}</span>
                <span className="text-[14px] leading-5 text-[rgb(250_250_250/55%)]">{d.count}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Subpage>
  )
}
