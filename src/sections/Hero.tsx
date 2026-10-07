import { useLang } from '../i18n'
import { asset } from '../lib/asset'

export default function Hero() {
  const { t } = useLang()

  return (
    <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden">
      <img
        src={asset('images/hero-home.jpg')}
        alt="Эверест в закатном свете, полная луна над вершиной"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Тёмный горизонтальный градиент со стороны текста */}
      <div className="absolute inset-0 bg-black/25" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/10" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-5 py-16 md:px-8">
        <div className="max-w-[600px]">
          <p className="text-[14px] uppercase leading-5 tracking-[0.17em] text-[rgb(250_250_250/70%)]">
            {t.hero.tagline}
          </p>
          <h1 className="mt-4 text-[clamp(36px,4.7vw,64px)] font-bold leading-[1.05] text-[#fafafa]">
            {t.hero.title}
          </h1>
          <p className="mt-4 max-w-[560px] text-[18px] leading-[26px] text-[rgb(250_250_250/70%)]">
            {t.hero.subtitle}
          </p>
          {t.hero.subtitle2 && (
            <p className="mt-3 max-w-[560px] text-[18px] leading-[26px] text-[rgb(250_250_250/55%)]">
              {t.hero.subtitle2}
            </p>
          )}

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <a
              href="#tours"
              className="inline-flex min-h-[42px] items-center justify-center rounded-[4px] bg-[#fafafa] px-8 py-2 text-[16px] font-bold leading-[26px] text-[rgb(0_0_0/87%)] transition-colors duration-200 hover:bg-[#e6e6e6] active:bg-[#d6d6d6]"
            >
              {t.cta.choose}
            </a>
            <a
              href="#why"
              className="inline-flex min-h-[42px] items-center justify-center rounded-[4px] border border-[rgb(255_255_255/23%)] px-8 py-2 text-[16px] font-bold leading-[26px] text-[#fafafa] transition-colors duration-200 hover:border-[#fafafa]"
            >
              {t.cta.format}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
