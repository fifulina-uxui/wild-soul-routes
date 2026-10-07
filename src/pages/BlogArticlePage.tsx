import { Link, Navigate, useParams } from 'react-router'
import { asset } from '../lib/asset'
import Subpage from './Subpage'
import { Reveal } from '../sections/Reveal'
import { BackButton } from '../components/BackButton'
import { useLang } from '../i18n'

export default function BlogArticlePage() {
  const { t } = useLang()
  const { id } = useParams()

  const post = t.journal.items.find((item) => item.id === id)
  const article = t.articles.find((item) => item.id === id)

  if (!post || !article) return <Navigate to="/blog" replace />

  return (
    <Subpage flush>
      {/* Hero статьи */}
      <section className="relative flex h-[56vh] min-h-[380px] items-end overflow-hidden">
        <img
          src={asset(post.image)}
          alt={post.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/20" />

        <div className="relative z-10 mx-auto w-full max-w-[1200px] px-5 pb-10 md:px-8">
          <Reveal>
            <BackButton to="/blog" label={t.blog.back} />
            <p className="mt-6 text-[12px] uppercase leading-5 tracking-[0.17em] text-[rgb(250_250_250/55%)]">
              {post.tag}
            </p>
            <h1 className="mt-3 max-w-[820px] text-[clamp(30px,4vw,56px)] font-bold leading-[1.08] text-[#fafafa]">
              {post.title}
            </h1>
            <p className="mt-5 border-t border-[rgb(255_255_255/15%)] pt-5 text-[14px] leading-5 text-[rgb(250_250_250/70%)]">
              {post.date} · {post.read}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Текст статьи */}
      <article className="mx-auto max-w-[720px] px-5 py-14 md:py-20">
        <Reveal>
          <p className="text-[20px] font-bold leading-[28px] text-[#fafafa]">{article.intro}</p>
        </Reveal>
        {article.body.map((paragraph) => (
          <Reveal key={paragraph.slice(0, 32)}>
            <p className="mt-8 text-[18px] leading-[26px] text-[rgb(250_250_250/70%)]">{paragraph}</p>
          </Reveal>
        ))}

        <Reveal>
          <div className="mt-14 flex flex-col gap-6 border-t border-[rgb(255_255_255/15%)] pt-10 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-[380px] text-[18px] leading-[26px] text-[rgb(250_250_250/70%)]">
              {t.toursPage.subtitle}
            </p>
            <Link
              to="/tours"
              className="inline-flex min-h-[48px] shrink-0 items-center justify-center rounded-[4px] bg-[#fafafa] px-8 py-2 text-[16px] font-bold leading-[26px] text-[rgb(0_0_0/87%)] transition-colors duration-200 hover:bg-[#e6e6e6] active:bg-[#d6d6d6]"
            >
              {t.cta.choose}
            </Link>
          </div>
        </Reveal>
      </article>
    </Subpage>
  )
}
