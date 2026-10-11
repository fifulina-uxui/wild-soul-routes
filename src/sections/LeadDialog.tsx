import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { useLang } from '../i18n'
import { LeadFormFields } from './LeadForm'

type OpenLeadDialog = (tourTitle?: string) => void

const LeadDialogContext = createContext<OpenLeadDialog>(() => {})

/** Открыть диалог с формой заявки; tourTitle — название тура для заголовка */
export const useLeadDialog = () => useContext(LeadDialogContext)

export function LeadDialogProvider({ children }: { children: ReactNode }) {
  const { t } = useLang()
  const [tourTitle, setTourTitle] = useState<string | null>(null)
  const [open, setOpen] = useState(false)
  // key заставляет форму сбрасываться при каждом открытии
  const [instance, setInstance] = useState(0)

  const openDialog: OpenLeadDialog = (title) => {
    setTourTitle(title ?? null)
    setInstance((v) => v + 1)
    setOpen(true)
  }

  useEffect(() => {
    if (!open) return
    const previouslyFocused = document.activeElement as HTMLElement | null
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      previouslyFocused?.focus()
    }
  }, [open])

  return (
    <LeadDialogContext.Provider value={openDialog}>
      {children}
      {open && (
        <div
          className="fixed inset-0 z-[110] flex items-end justify-center bg-black/80 p-4 backdrop-blur-sm sm:items-center"
          onClick={() => setOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={tourTitle ?? t.lead.heading}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[88svh] w-full max-w-[520px] overflow-y-auto rounded-[8px] border border-[rgb(255_255_255/15%)] bg-[#0a0a0a] p-6 sm:p-10"
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <h2 className="text-[24px] font-bold leading-[30px] text-[#fafafa]">
                {tourTitle ?? t.lead.heading}
              </h2>
              <button
                type="button"
                aria-label="Close"
                autoFocus
                onClick={() => setOpen(false)}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[4px] text-[#fafafa] transition-colors duration-200 hover:bg-[rgb(255_255_255/10%)]"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M1 1l16 16M17 1L1 17" />
                </svg>
              </button>
            </div>
            <LeadFormFields key={instance} submitLabel={tourTitle ? t.tourDetail.signup : t.cta.lead} tourTitle={tourTitle ?? undefined} />
            {/* Страховочный нижний отступ: в скроллящемся контейнере padding-bottom может игнорироваться */}
            <div aria-hidden="true" className="h-4" />
          </div>
        </div>
      )}
    </LeadDialogContext.Provider>
  )
}
