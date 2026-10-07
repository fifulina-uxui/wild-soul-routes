import { Link } from 'react-router'
import { asset } from '../lib/asset'
import { useLang } from '../i18n'
import { Reveal } from './Reveal'

export default function Journal() {
  const { t } = useLang()

  return (
    <section id="journal" className="bg-black">
      <div className="mx-auto max-w-[1200px] px-5 py-14 md:px-8 md:py-24">
        <Reveal>
          <p className="text-[12px] uppercase leading-5 tracking-[0.17em] text-[rgb(250_250_250/55%)]">
            {t.journal.label}
          </p>
          <h2 className="mt-2 max-w-[600px] text-[clamp(30px,3.4vw,48px)] font-bold leading-[1.1] tracking-[-0.5px] text-[#fafafa]">
            {t.journal.heading}
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {t.journal.items.map((post) => (
            <Reveal key={post.id}>
              <Link to={`/blog/${post.id}`} className="group flex h-full flex-col">
                <div className="overflow-hidden rounded-[8px]">
                  <img
                    src={asset(post.image)}
                    alt={post.title}
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <p className="mt-5 text-[12px] uppercase leading-5 tracking-[0.17em] text-[rgb(250_250_250/55%)]">
                  {post.tag}
                </p>
                <h3 className="mt-2 text-[24px] font-bold leading-[30px] text-[#fafafa] transition-colors duration-200 group-hover:text-[rgb(250_250_250/70%)]">
                  {post.title}
                </h3>
                <p className="mt-auto pt-4 text-[14px] leading-5 text-[rgb(250_250_250/55%)]">
                  {post.date} · {post.read}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <Link
            to="/blog"
            className="inline-flex min-h-[36.5px] w-full items-center justify-center rounded-[4px] border border-[rgb(255_255_255/23%)] px-8 py-[6px] text-[16px] font-bold leading-[24.5px] text-[#fafafa] transition-colors duration-200 hover:border-[#fafafa] sm:w-auto"
          >
            {t.blog.back}
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
