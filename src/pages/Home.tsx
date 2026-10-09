import { Link } from 'react-router'
import Header from '../sections/Header'
import Hero from '../sections/Hero'
import Tours from '../sections/Tours'
import Directions from '../sections/Directions'
import Why from '../sections/Why'
import Journal from '../sections/Journal'
import Team from '../sections/Team'
import { Reveal } from '../sections/Reveal'
import Footer from '../sections/Footer'
import { useLang } from '../i18n'

export default function Home() {
  const { t } = useLang()

  return (
    <div className="bg-black text-[#fafafa]">
      <Header />
      <main>
        <Hero />
        <Tours />
        <Directions />
        <Why />
        <Journal />
        <Team />
        <section className="mx-auto max-w-[1200px] px-5 pb-16 md:px-8 md:pb-24">
          <Reveal>
            <div className="flex flex-col gap-6 border-t border-[rgb(255_255_255/15%)] pt-14 md:flex-row md:items-center md:justify-between">
              <p className="max-w-[420px] text-[18px] leading-[26px] text-[rgb(250_250_250/70%)]">
                {t.cta.consultText}
              </p>
              <Link
                to="/contacts"
                className="inline-flex min-h-[48px] w-full shrink-0 items-center justify-center rounded-[4px] bg-[#fafafa] px-8 py-2 text-[16px] font-bold leading-[26px] text-[rgb(0_0_0/87%)] transition-colors duration-200 hover:bg-[#e6e6e6] active:bg-[#d6d6d6] sm:w-auto"
              >
                {t.cta.consult}
              </Link>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </div>
  )
}
