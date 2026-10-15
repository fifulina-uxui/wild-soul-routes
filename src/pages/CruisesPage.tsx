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
          src={asset('images/tour-capetown.webp')}
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

      {/* Вводный текст и кнопки */}
      <section className="mx-auto max-w-[1200px] px-5 pt-14 md:px-8 md:pt-24">
        <div className="max-w-[720px]">
          <Reveal>
            <p className="text-[18px] leading-[26px] text-[rgb(250_250_250/70%)]">{c.intro}</p>
          </Reveal>
          <Reveal delay={160}>
            <h2 className="mt-10 text-[clamp(28px,3vw,44px)] font-bold leading-[1.08] text-[#fafafa]">
              {c.ctaHeading}
            </h2>
          </Reveal>
          <Reveal delay={320}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <button
                type="button"
                onClick={() => openLead(c.leadTitle)}
                className="inline-flex min-h-[42px] w-full items-center justify-center rounded-[4px] bg-[#fafafa] px-8 py-2 text-[16px] font-bold leading-[26px] text-[rgb(0_0_0/87%)] transition-colors duration-200 hover:bg-[#e6e6e6] active:bg-[#d6d6d6] sm:w-auto"
              >
                {c.lead}
              </button>
              <a
                href={c.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[42px] w-full items-center justify-center rounded-[4px] border border-[rgb(255_255_255/23%)] px-8 py-2 text-[16px] font-bold leading-[26px] text-[#fafafa] transition-colors duration-200 hover:border-[#fafafa] sm:w-auto"
              >
                {c.instagram}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Круизы вместе с нами — программы в разработке */}
      <section className="mx-auto max-w-[1200px] px-5 pt-14 md:px-8 md:pt-24">
        <Reveal>
          <div className="border-t border-[rgb(255_255_255/15%)] pt-6">
            <h2 className="text-[clamp(30px,3.4vw,48px)] font-bold leading-[1.1] tracking-[-0.5px] text-[#fafafa]">
              {c.upcomingLabel}
            </h2>
            <p className="mt-4 text-[14px] leading-5 text-[rgb(250_250_250/55%)]">{c.upcomingText}</p>
          </div>
        </Reveal>
      </section>

      {/* Статьи */}
      <section className="mx-auto max-w-[1200px] px-5 pb-20 pt-14 md:px-8 md:pt-24">
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
    </Subpage>
  )
}
