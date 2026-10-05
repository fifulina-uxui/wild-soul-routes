import { Link } from 'react-router'
import Subpage from './Subpage'
import { Reveal } from '../sections/Reveal'
import { BackButton } from '../components/BackButton'
import { useLang } from '../i18n'

export default function BlogPage() {
  const { t } = useLang()

  return (
    <Subpage flush>
      {/* Полоса-hero */}
      <section className="relative flex h-[40vh] min-h-[300px] items-end overflow-hidden">
        <img
          src="images/hero.jpg"
          alt={t.journal.heading}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/20" />

        <div className="relative z-10 mx-auto w-full max-w-[1200px] px-5 pb-12 md:px-8">
          <Reveal>
            <div className="mb-6">
              <BackButton to="/" label={t.cta.home} />
            </div>
            <h1 className="text-[clamp(36px,4.7vw,64px)] font-bold leading-[1.05] text-[#fafafa]">
              {t.nav.find((n) => n.href === '/blog')?.label}
            </h1>
            <p className="mt-4 max-w-[560px] text-[18px] leading-[26px] text-[rgb(250_250_250/70%)]">
              {t.blog.subtitle}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Статьи карточками — как блок блога на главной */}
      <div className="mx-auto max-w-[1200px] px-5 py-10 md:px-8 md:py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {t.journal.items.map((post) => (
            <Reveal key={post.id}>
              <Link to={`/blog/${post.id}`} className="group flex h-full flex-col">
                <div className="overflow-hidden rounded-[8px]">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <p className="mt-5 text-[12px] font-bold uppercase leading-5 tracking-[0.17em] text-[rgb(250_250_250/55%)]">
                  {post.tag}
                </p>
                <h2 className="mt-2 text-[24px] font-bold leading-[30px] text-[#fafafa] transition-colors duration-200 group-hover:text-[rgb(250_250_250/70%)]">
                  {post.title}
                </h2>
                <p className="mt-auto pt-4 text-[14px] leading-5 text-[rgb(250_250_250/55%)]">
                  {post.date} · {post.read}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </Subpage>
  )
}
