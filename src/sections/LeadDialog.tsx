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
          className="fixed inset-0 z-[110] flex items-end justify-center bg-black/80 backdrop-blur-sm animate-[fade-in_0.25s_ease-out] sm:items-center sm:p-4"
          onClick={() => setOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={tourTitle ?? t.lead.heading}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[92svh] w-full overflow-y-auto overscroll-contain rounded-t-[16px] border border-b-0 border-[rgb(255_255_255/15%)] bg-[#0a0a0a] animate-[drawer-up_0.3s_ease-out] sm:max-h-[88svh] sm:max-w-[520px] sm:rounded-[8px] sm:border-b sm:animate-[fade-in_0.2s_ease-out]"
          >
            {/* Отступы на внутренней обёртке: padding-bottom самого скролл-контейнера
                браузеры могут обрезать, а у обёртки — нет */}
            <div className="p-6 pb-10 pt-3 sm:p-10 sm:pb-12">
              {/* Ручка drawer'а — только на мобильных */}
              <div aria-hidden="true" className="mx-auto mb-5 h-1 w-10 rounded-full bg-[rgb(255_255_255/25%)] sm:hidden" />
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
            </div>
          </div>
        </div>
      )}
    </LeadDialogContext.Provider>
  )
}
