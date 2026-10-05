import { useLang, type Lang } from '../i18n'

const langs: Lang[] = ['ru', 'en']

export default function LangSwitcher({ compact = false }: { compact?: boolean }) {
  const { lang, setLang } = useLang()

  return (
    <div
      role="group"
      aria-label="Language"
      className="flex items-center rounded-[8px] bg-[rgb(255_255_255/15%)] p-[2px]"
    >
      {langs.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`rounded-[6px] font-medium uppercase transition-colors duration-200 ${
            compact ? 'px-3 py-[3px] text-[12px] leading-[18px]' : 'px-4 py-1 text-[13px] leading-[20px]'
          } ${
            lang === l
              ? 'bg-[rgb(255_255_255/20%)] text-[#fafafa]'
              : 'text-[rgb(250_250_250/55%)] hover:text-[rgb(250_250_250/80%)]'
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  )
}
