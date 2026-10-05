import { Link } from 'react-router'
import Subpage from './Subpage'
import { Reveal } from '../sections/Reveal'
import { BackButton } from '../components/BackButton'
import { useLang } from '../i18n'

export default function DirectionsPage() {
  const { t } = useLang()

  return (
    <Subpage flush>
      {/* Полоса-hero */}
      <section className="relative flex h-[40vh] min-h-[300px] items-end overflow-hidden">
        <img
          src="images/hero.jpg"
          alt={t.directionsPage.heading}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/20" />

        <div className="relative z-10 mx-auto w-full max-w-[1200px] px-5 pb-12 md:px-8">
          <Reveal>
            <div className="mb-6">
              <BackButton to="/" label={t.cta.home} />
            </div>
            <h1 className="text-[clamp(36px,4.7vw,64px)] font-bold leading-[1.05] text-[#fafafa]">
              {t.directionsPage.heading}
            </h1>
            <p className="mt-4 max-w-[560px] text-[18px] leading-[26px] text-[rgb(250_250_250/70%)]">
              {t.directionsPage.subtitle}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Карточки стран с фото */}
      <div className="flex flex-col gap-4 px-4 pt-8 md:px-6">
        {t.directionsPage.cards.map((card) => (
          <Reveal key={card.country}>
            <Link
              to={`/tours?c=${encodeURIComponent(card.country)}`}
              className="group relative block min-h-[45vh] overflow-hidden rounded-[8px]"
            >
              <img
                src={card.image}
                alt={card.country}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/70 to-transparent" />

              <div className="relative z-10 mx-auto flex h-full min-h-[45vh] w-full max-w-[1200px] items-center px-5 py-14 md:px-8">
                <div className="w-full">
                  <h2 className="text-[clamp(28px,3vw,44px)] font-bold leading-[1.08] text-[#fafafa]">
                    {card.country}
                  </h2>
                  <p className="mt-3 max-w-[560px] text-[18px] leading-[26px] text-[rgb(250_250_250/70%)]">
                    {card.text}
                  </p>
                  <p className="mt-8 inline-flex items-center gap-2 border-t border-[rgb(255_255_255/15%)] pt-5 text-[12px] font-bold uppercase leading-5 tracking-[0.17em] text-[#fafafa]">
                    {t.nav.find((n) => n.href === '/tours')?.label}
                    <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                  </p>
                </div>
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
