import Header from '../sections/Header'
import Hero from '../sections/Hero'
import Tours from '../sections/Tours'
import Directions from '../sections/Directions'
import Why from '../sections/Why'
import Journal from '../sections/Journal'
import Team from '../sections/Team'
import Footer from '../sections/Footer'

export default function Home() {
  return (
    <div className="bg-black text-[#fafafa]">
      <Header />
      <main>
        <Hero />
        <Tours />
        <Directions />
        <Why />
        <Journal />
        <Team />
      </main>
      <Footer />
    </div>
  )
}
