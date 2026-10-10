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

      {/* Направления широкими полосами с фото — как туры */}
      <div className="flex flex-col gap-4 px-4 pb-20 pt-8 md:px-6">
        {t.directionsPage.cards.map((card) => (
          <Reveal key={card.country}>
            <article className="group relative min-h-[55vh] overflow-hidden">
              <img
                src={asset(card.image)}
                alt={card.country}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/70 to-transparent" />

              <div className="relative z-10 mx-auto flex h-full min-h-[55vh] w-full max-w-[1200px] items-center px-5 py-14 md:px-8">
                <div className="max-w-[560px]">
                  <h2 className="text-[clamp(28px,3vw,44px)] font-bold leading-[1.08] text-[#fafafa]">
                    {card.country}
                  </h2>
                  <p className="mt-4 text-[18px] leading-[26px] text-[rgb(250_250_250/70%)]">
                    {card.text}
                  </p>
                  <div className="mt-8">
                    <Link
                      to={`/tours?c=${card.country}`}
                      className="inline-flex min-h-[42px] w-full items-center justify-center rounded-[4px] bg-[#fafafa] px-8 py-2 text-[16px] font-bold leading-[26px] text-[rgb(0_0_0/87%)] transition-colors duration-200 hover:bg-[#e6e6e6] active:bg-[#d6d6d6] sm:w-auto"
                    >
                      {t.nav.find((n) => n.href === '/tours')?.label}
                    </Link>
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
