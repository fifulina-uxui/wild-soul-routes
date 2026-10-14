import { asset } from '../lib/asset'

// Векторная фигура «горы и солнце» на главной: большая line-иллюстрация
// позади контента (контент поднят обёрткой z-10 в Home). Сама по себе
// не движется — только плавно смещается вверх по мере скролла страницы
// (CSS scroll-timeline, без JS; без его поддержки стоит на месте).
export default function HorizonShape() {
  return (
    <div aria-hidden="true" className="horizon-shape">
      <img src={asset('images/horizon.svg')} alt="" className="horizon-figure" />
    </div>
  )
}
