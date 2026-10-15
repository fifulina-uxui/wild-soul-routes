import { Link } from 'react-router'
import { asset } from '../lib/asset'
import Subpage from './Subpage'
import { Reveal } from '../sections/Reveal'
import { useLeadDialog } from '../sections/LeadDialog'
import { useLang } from '../i18n'

export default function CruisesPage() {
  const { t } = useLang()
  const openLead = useLeadDialog()
  const c = t.cruisesPage

  return (
    <Subpage flush>
      {/* Полоса-hero */}
      <section className="relative flex h-[40vh] min-h-[300px] items-end overflow-hidden">
        <img
          src={asset('images/hero-cruises.webp')}
          alt={c.heading}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/20" />

        <div className="relative z-10 mx-auto w-full max-w-[1200px] px-5 pb-3 md:px-8">
          <h1 className="hero-in text-[clamp(36px,4.7vw,64px)] font-bold leading-[1.05] text-[#fafafa]">
            {c.heading}
          </h1>
        </div>
      </section>

      {/* Вводный текст */}
      <section className="mx-auto max-w-[1200px] px-5 pt-5 md:px-8 md:pt-8">
        <div className="max-w-[720px]">
          <Reveal>
            <p className="text-[18px] leading-[26px] text-[rgb(250_250_250/70%)]">{c.intro}</p>
          </Reveal>
        </div>
      </section>

      {/* Круизы вместе с нами — карточки как на странице туров, дата «Скоро», остальное абстрактно */}
      <section className="mx-auto max-w-[1200px] px-5 pt-14 md:px-8 md:pt-24">
        <Reveal>
          <h2 className="text-[clamp(30px,3.4vw,48px)] font-bold leading-[1.1] tracking-[-0.5px] text-[#fafafa]">
            {c.upcomingLabel}
          </h2>
        </Reveal>
      </section>

      <div className="flex flex-col gap-4 px-4 pt-8 md:px-6">
        {c.upcoming.map((u, i) => (
          <Reveal key={u.title} delay={(i % 3) * 80}>
            <article className="group relative min-h-[55vh] overflow-hidden rounded-[8px]">
              <img
                src={asset(u.image)}
                alt={u.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/30 to-transparent" />
              <div className="absolute inset-0 bg-black/40 sm:hidden" />
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/70 to-transparent" />

              <div className="relative z-10 mx-auto flex h-full min-h-[55vh] w-full max-w-[1200px] items-center px-5 py-14 md:px-8">
                <div className="w-full">
                  <h3 className="text-[clamp(28px,3vw,44px)] font-bold leading-[1.08] text-[#fafafa]">
                    {u.title}
                  </h3>
                  <p className="mt-3 max-w-[560px] text-[18px] leading-[26px] text-[rgb(250_250_250/70%)]">
                    {u.text}
                  </p>

                  <div className="mt-8 grid grid-cols-2 items-start gap-4 border-t border-[rgb(255_255_255/15%)] pt-5 lg:flex lg:items-start lg:justify-between lg:gap-10">
                    <div>
                      <dt className="text-[12px] uppercase leading-5 tracking-[0.12em] text-[rgb(250_250_250/55%)]">
                        {t.tours.meta.start}
                      </dt>
                      <dd className="mt-1 text-[18px] leading-[26px] text-[#fafafa]">{c.soon}</dd>
                    </div>
                    <div>
                      <dt className="text-[12px] uppercase leading-5 tracking-[0.12em] text-[rgb(250_250_250/55%)]">
                        {t.tours.meta.group}
                      </dt>
                      <dd className="mt-1 text-[18px] leading-[26px] text-[#fafafa]">—</dd>
                    </div>
                    <div>
                      <dt className="text-[12px] uppercase leading-5 tracking-[0.12em] text-[rgb(250_250_250/55%)]">
                        {t.tours.meta.price}
                      </dt>
                      <dd className="mt-1 text-[18px] leading-[26px] text-[#fafafa]">—</dd>
                    </div>
                    <div>
                      <dt className="text-[12px] uppercase leading-5 tracking-[0.12em] text-[rgb(250_250_250/55%)]">
                        {t.tours.meta.crew}
                      </dt>
                      <dd className="mt-1 text-[18px] leading-[26px] text-[#fafafa]">{c.leadTitle}</dd>
                    </div>
                    <div className="col-span-2 mt-4 lg:mt-0">
                      <button
                        type="button"
                        onClick={() => openLead(`${c.leadTitle}: ${u.title}`)}
                        className="inline-flex min-h-[42px] w-full items-center justify-center rounded-[4px] bg-[#fafafa] px-8 py-2 text-[16px] font-bold leading-[26px] text-[rgb(0_0_0/87%)] transition-colors duration-200 hover:bg-[#e6e6e6] active:bg-[#d6d6d6] sm:w-auto"
                      >
                        {t.cta.lead}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {/* Статьи */}
      <section className="mx-auto max-w-[1200px] px-5 pb-14 pt-14 md:px-8 md:pb-24 md:pt-24">
        <Reveal>
          <h2 className="text-[clamp(30px,3.4vw,48px)] font-bold leading-[1.1] tracking-[-0.5px] text-[#fafafa]">
            {c.articlesLabel}
          </h2>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {t.journal.items.map((post, i) => (
            <Reveal key={post.id} delay={(i % 3) * 80}>
              <Link to={`/blog/${post.id}`} className="group flex h-full flex-col">
                <div className="overflow-hidden rounded-[8px]">
                  <img
                    src={asset(post.image)}
                    alt={post.title}
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <p className="mt-5 text-[12px] uppercase leading-5 tracking-[0.17em] text-[rgb(250_250_250/55%)]">
                  {post.tag}
                </p>
                <h3 className="mt-2 text-[24px] font-bold leading-[30px] text-[#fafafa] transition-colors duration-200 group-hover:text-[rgb(250_250_250/70%)]">
                  {post.title}
                </h3>
                <p className="mt-auto pt-4 text-[14px] leading-5 text-[rgb(250_250_250/55%)]">
                  {post.date} · {post.read}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Финальный CTA по центру — как на главной */}
      <section className="mx-auto max-w-[1200px] border-t border-[rgb(255_255_255/15%)] px-5 pb-16 pt-14 md:px-8 md:pb-24 md:pt-24">
        <Reveal>
          <div className="flex flex-col items-center gap-6 text-center">
            <h2 className="max-w-[720px] text-[clamp(30px,3.4vw,48px)] font-bold leading-[1.1] tracking-[-0.5px] text-[#fafafa]">
              {c.ctaHeading}
            </h2>
            <div className="flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row">
              <button
                type="button"
                onClick={() => openLead(c.leadTitle)}
                className="inline-flex min-h-[42px] w-full shrink-0 items-center justify-center rounded-[4px] bg-[#fafafa] px-8 py-2 text-[16px] font-bold leading-[26px] text-[rgb(0_0_0/87%)] transition-colors duration-200 hover:bg-[#e6e6e6] active:bg-[#d6d6d6] sm:w-auto"
              >
                {c.lead}
              </button>
              <a
                href={c.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[42px] w-full shrink-0 items-center justify-center rounded-[4px] border border-[rgb(255_255_255/23%)] px-8 py-2 text-[16px] font-bold leading-[26px] text-[#fafafa] transition-colors duration-200 hover:border-[#fafafa] sm:w-auto"
              >
                {c.instagram}
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </Subpage>
  )
}
