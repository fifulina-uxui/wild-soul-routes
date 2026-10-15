import { Link, Navigate, useParams } from 'react-router'
import { asset } from '../lib/asset'
import Subpage from './Subpage'
import { Reveal } from '../sections/Reveal'
import { BackButton } from '../components/BackButton'
import { useLeadDialog } from '../sections/LeadDialog'
import { useLang } from '../i18n'

export default function CruiseDetailPage() {
  const { t } = useLang()
  const { id } = useParams()
  const openLead = useLeadDialog()
  const c = t.cruisesPage
  const cruise = c.upcoming.find((u) => u.slug === id)

  if (!cruise) return <Navigate to="/cruises" replace />

  return (
    <Subpage flush>
      {/* Hero направления */}
      <section className="relative flex h-[40vh] min-h-[300px] items-end overflow-hidden">
        <img
          src={asset(cruise.image)}
          alt={cruise.title}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/20" />

        <div className="relative z-10 mx-auto w-full max-w-[1200px] px-5 pb-6 pt-28 md:px-8">
          <div className="hero-in">
            <BackButton to="/cruises" label={c.back} />
          </div>
          <p className="hero-in mt-6 text-[12px] uppercase leading-5 tracking-[0.17em] text-[rgb(250_250_250/55%)]">
            {c.soon}
          </p>
          <h1
            className="hero-in mt-2 text-[clamp(36px,4.7vw,64px)] font-bold leading-[1.05] text-[#fafafa]"
            style={{ animationDelay: '120ms' }}
          >
            {cruise.title}
          </h1>
        </div>
      </section>

      {/* Описание */}
      <section className="mx-auto max-w-[1200px] px-5 pt-12 md:px-8 md:pt-16">
        <div className="max-w-[720px]">
          {cruise.details.map((p, i) => (
            <Reveal key={i} delay={i * 80}>
              <p className="mt-4 text-[18px] leading-[26px] text-[rgb(250_250_250/70%)] first:mt-0">
                {p}
              </p>
            </Reveal>
          ))}

          <Reveal delay={200}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <button
                type="button"
                onClick={() => openLead(`${c.leadTitle}: ${cruise.title}`)}
                className="inline-flex min-h-[42px] w-full items-center justify-center rounded-[4px] bg-[#fafafa] px-8 py-2 text-[16px] font-bold leading-[26px] text-[rgb(0_0_0/87%)] transition-colors duration-200 hover:bg-[#e6e6e6] active:bg-[#d6d6d6] sm:w-auto"
              >
                {t.cta.lead}
              </button>
              <Link
                to="/cruises"
                className="inline-flex min-h-[42px] w-full items-center justify-center rounded-[4px] border border-[rgb(255_255_255/23%)] px-8 py-2 text-[16px] font-bold leading-[26px] text-[#fafafa] transition-colors duration-200 hover:border-[#fafafa] sm:w-auto"
              >
                {c.back}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="pb-16 md:pb-24" />
    </Subpage>
  )
}
