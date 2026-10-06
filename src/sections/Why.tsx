import { useLang } from '../i18n'
import { Reveal } from './Reveal'

export default function Why() {
  const { t } = useLang()

  return (
    <section id="why" className="bg-black">
      <div className="mx-auto max-w-[1200px] px-5 py-14 md:px-8 md:py-24">
        <Reveal>
          <p className="text-[12px] font-light uppercase leading-5 tracking-[0.17em] text-[rgb(250_250_250/55%)]">
            {t.why.label}
          </p>
          <h2 className="mt-2 max-w-[600px] text-[clamp(30px,3.4vw,48px)] font-bold leading-[1.1] tracking-[-0.5px] text-[#fafafa]">
            {t.why.heading}
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {t.why.items.map((f, i) => (
            <Reveal key={f.title}>
              <div className="flex h-full flex-col gap-3 rounded-[16px] bg-[#121212] p-6 md:p-8">
                <span className="text-[14px] font-bold leading-5 text-[rgb(250_250_250/55%)]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="text-[24px] font-bold leading-[30px] text-[#fafafa]">{f.title}</h3>
                <p className="text-[18px] leading-[26px] text-[rgb(250_250_250/70%)]">{f.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
