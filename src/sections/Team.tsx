import { useLang } from '../i18n'
import { Reveal } from './Reveal'

export default function Team() {
  const { t } = useLang()

  return (
    <section id="team" className="bg-black">
      <div className="mx-auto max-w-[1200px] px-5 py-14 md:px-8 md:py-24">
        <Reveal>
          <p className="text-[12px] uppercase leading-5 tracking-[0.17em] text-[rgb(250_250_250/55%)]">
            {t.team.label}
          </p>
          <h2 className="mt-2 max-w-[600px] text-[clamp(30px,3.4vw,48px)] font-bold leading-[1.1] tracking-[-0.5px] text-[#fafafa]">
            {t.team.heading}
          </h2>
          <p className="mt-4 max-w-[600px] text-[18px] leading-[26px] text-[rgb(250_250_250/70%)]">
            {t.team.text}
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-8">
          {t.team.items.map((m) => (
            <Reveal key={m.name}>
              <div className="flex h-full flex-col gap-3 border-t border-[rgb(255_255_255/15%)] pt-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#121212] text-[14px] font-bold text-[rgb(250_250_250/70%)]">
                  {m.initials}
                </span>
                <h3 className="text-[20px] font-bold leading-7 text-[#fafafa]">{m.name}</h3>
                <p className="text-[14px] leading-5 text-[rgb(250_250_250/70%)]">
                  {m.role}
                </p>
                <p className="text-[18px] leading-[26px] text-[rgb(250_250_250/55%)]">{m.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
