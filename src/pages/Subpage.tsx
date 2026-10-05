import type { ReactNode } from 'react'
import Header from '../sections/Header'
import Footer from '../sections/Footer'

export default function Subpage({ children, flush = false }: { children: ReactNode; flush?: boolean }) {
  return (
    <div className="flex min-h-screen flex-col bg-black text-[#fafafa]">
      <Header />
      <main className={`flex-1 ${flush ? '' : 'pt-[72px]'}`}>{children}</main>
      <Footer />
    </div>
  )
}
