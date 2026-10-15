import { contacts } from '../data/content'

const socials = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/wildsoul.routes',
    icon: (
      <svg width="20" height="20" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true">
        <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z" />
      </svg>
    ),
  },
  {
    label: 'Telegram',
    href: 'https://t.me/wildsoulroutes',
    icon: (
      <svg width="20" height="20" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true">
        <path d="M228.65,27.35a16,16,0,0,0-16.25-3.55l-176,56A16,16,0,0,0,34.9,111.31l72.6,29,29,72.6A16,16,0,0,0,151.6,224a15.7,15.7,0,0,0,5.15-.85,16,16,0,0,0,9.9-10.31l56-176A16,16,0,0,0,228.65,27.35ZM151.6,196.4l-24.9-62.26,52.4-52.4a8,8,0,0,0-11.32-11.32l-52.4,52.4-62.26-24.9L209,44.67Z" />
      </svg>
    ),
  },
]

const emailIcon = (
  <svg width="20" height="20" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true">
    <path d="M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48Zm-8.34,16L128,133.15,40.34,64ZM32,192V78.66l92.57,73.44a8,8,0,0,0,10.86,0L224,78.66V192Z" />
  </svg>
)

export function SocialIcons({
  className = '',
  withEmail = false,
}: {
  className?: string
  withEmail?: boolean
}) {
  return (
    <div className={`items-center gap-1 ${className}`}>
      {socials.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noreferrer"
          aria-label={s.label}
          className="flex h-10 w-10 items-center justify-center rounded-[4px] text-[rgb(250_250_250/70%)] transition-colors duration-200 hover:bg-[rgb(255_255_255/10%)] hover:text-[#fafafa]"
        >
          {s.icon}
        </a>
      ))}
      {withEmail && (
        <a
          href={`mailto:${contacts.email}`}
          aria-label="E-mail"
          className="flex h-10 w-10 items-center justify-center rounded-[4px] text-[rgb(250_250_250/70%)] transition-colors duration-200 hover:bg-[rgb(255_255_255/10%)] hover:text-[#fafafa]"
        >
          {emailIcon}
        </a>
      )}
    </div>
  )
}
