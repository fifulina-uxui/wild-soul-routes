// Декоративная фигура «горизонт» на главной: огромное тонкое кольцо со
// свечением и орбитальной точкой. Лежит позади контента (z-index: -10),
// плывёт вверх по мере скролла страницы.
// Движение — только transform/opacity: scroll-timeline работает на композиторе,
// без JS; там, где scroll-timeline нет, фигура просто стоит на месте.
export default function HorizonShape() {
  return (
    <div aria-hidden="true" className="horizon-shape">
      <div className="horizon-glow" />
      <div className="horizon-ring">
        <div className="horizon-orbit">
          <span />
        </div>
      </div>
    </div>
  )
}
