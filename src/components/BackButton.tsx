import { Link } from 'react-router-dom'

export function BackButton({ to, label }: { to: string; label: string }) {
  return (
    <Link
      to={to}
      className="inline-flex items-center gap-2 rounded-full border border-[rgb(255_255_255/20%)] bg-[rgb(255_255_255/12%)] px-5 py-2 text-[14px] font-bold leading-5 text-[#fafafa] backdrop-blur-md transition-colors duration-200 hover:bg-[rgb(255_255_255/22%)]"
    >
      <svg width="16" height="16" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true">
        <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z" />
      </svg>
      {label}
    </Link>
  )
}
