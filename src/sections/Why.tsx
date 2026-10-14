import { useLang } from '../i18n'
import { asset } from '../lib/asset'
import { Reveal } from './Reveal'

export default function Why() {
  const { t } = useLang()

  return (
    <section id="why" className="relative overflow-hidden">
      <img
        src={asset('images/why-bg.jpg')}
        alt="Взлётная полоса в Лукле среди гималайских гор"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />

      <div className="relative z-10 mx-auto max-w-[1200px] px-5 py-14 md:px-8 md:py-24">
        <Reveal>
          <p className="text-[12px] uppercase leading-5 tracking-[0.17em] text-[rgb(250_250_250/55%)]">
            {t.why.label}
          </p>
          <h2 className="mt-2 max-w-[600px] text-[clamp(30px,3.4vw,48px)] font-bold leading-[1.1] tracking-[-0.5px] text-[#fafafa]">
            {t.why.heading}
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {t.why.items.map((f, i) => (
            <Reveal key={f.title}>
              <div className="flex h-full flex-col gap-3 border-t border-[rgb(255_255_255/15%)] pt-6">
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
