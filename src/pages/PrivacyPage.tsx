import Subpage from './Subpage'
import { Reveal } from '../sections/Reveal'
import { contacts } from '../data/content'
import { useLang } from '../i18n'

export default function PrivacyPage() {
  const { lang } = useLang()
  const ru = lang === 'ru'

  return (
    <Subpage>
      <section className="bg-black">
        <div className="mx-auto max-w-[760px] px-5 py-14 md:px-8 md:py-24">
          <Reveal>
            <p className="text-[12px] uppercase leading-5 tracking-[0.17em] text-[rgb(250_250_250/55%)]">
              {ru ? 'Документы' : 'Legal'}
            </p>
            <h2 className="mt-2 text-[clamp(30px,3.4vw,48px)] font-bold leading-[1.1] tracking-[-0.5px] text-[#fafafa]">
              {ru ? 'Политика обработки персональных данных' : 'Personal Data Processing Policy'}
            </h2>
          </Reveal>

          <Reveal>
            <div className="mt-10 flex flex-col gap-6 text-[18px] leading-[26px] text-[rgb(250_250_250/70%)]">
              <p>
                {ru
                  ? 'Оставляя заявку на сайте, вы передаёте нам имя, контакт в Telegram, адрес электронной почты и текст комментария. Эти данные используются только для связи с вами по поводу тура и не передаются третьим лицам.'
                  : 'When you submit a request on this site, you share your name, Telegram contact, email address and comment. This data is used solely to contact you about the tour and is never shared with third parties.'}
              </p>
              <p>
                {ru
                  ? 'Вы можете запросить удаление своих данных в любой момент, написав нам на почту.'
                  : 'You may request deletion of your data at any time by emailing us.'}
              </p>
              <div className="mt-4 flex flex-col gap-1 border-t border-[rgb(255_255_255/15%)] pt-6 text-[14px] leading-5 text-[rgb(250_250_250/55%)]">
                <span>{contacts.legal[lang]}</span>
                <span>ID {contacts.id}</span>
                <span>{contacts.address[lang]}</span>
                <a
                  href={`mailto:${contacts.email}`}
                  className="transition-colors duration-200 hover:text-[#fafafa]"
                >
                  {contacts.email}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </Subpage>
  )
}
