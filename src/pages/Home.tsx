import { Link } from 'react-router'
import Header from '../sections/Header'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Formats from '../sections/Formats'
import Tours from '../sections/Tours'
import Directions from '../sections/Directions'
import Why from '../sections/Why'
import Journal from '../sections/Journal'
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
        <About />
        <Formats />
        <Tours />
        <Directions />
        <Why />
        <Journal />
        <section className="mx-auto max-w-[1200px] px-5 pb-16 md:px-8 md:pb-24">
          <Reveal>
            <div className="flex flex-col items-center gap-6 text-center">
              <h2 className="max-w-[720px] text-[clamp(30px,3.4vw,48px)] font-bold leading-[1.1] tracking-[-0.5px] text-[#fafafa]">
                {t.cta.consultHeading}
              </h2>
              <p className="max-w-[560px] text-[18px] leading-[26px] text-[rgb(250_250_250/70%)]">
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
