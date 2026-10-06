import { Link } from 'react-router'

export function LogoMark({ size = 28, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* солнце */}
      <circle cx="34" cy="12" r="4.5" />
      {/* горный гребень */}
      <path d="M3 29 L14 17 L20 24 L28 13 L39 25 L45 19" />
      {/* извилистая тропа */}
      <path d="M3 41 C 11 38, 16 34, 24 35 C 32 36, 37 33, 45 34" />
    </svg>
  )
}

export default function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3 text-[#fafafa]">
      <LogoMark size={36} />
      <span className="flex flex-col leading-none">
        <span className="whitespace-nowrap text-[19px] font-bold tracking-[0.02em]">
          Wild Soul
        </span>
        <span
          aria-label="Routes"
          className="mt-1 flex w-full justify-between text-[13px] font-light uppercase leading-none text-[rgb(250_250_250/55%)]"
        >
          <span>R</span>
          <span>o</span>
          <span>u</span>
          <span>t</span>
          <span>e</span>
          <span>s</span>
        </span>
      </span>
    </Link>
  )
}
