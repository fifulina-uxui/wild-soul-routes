export interface Tour {
  id: string
  coords: string
  title: string
  description: string
  days: string
  price: string
  priceEarly: string
  start: string
  highlight: string
  image: string
}

export interface TourDetail {
  id: string
  intro: string
  program: { day: string; text: string }[]
  dates: { when: string; note: string }[]
  includes: string[]
}

export interface PageContent {
  nav: { href: string; label: string }[]
  cta: { lead: string; tours: string; more: string; submit: string; choose: string; format: string }
  hero: {
    tagline: string
    title: string
    subtitle: string
    subtitle2: string
  }
  tours: {
    label: string
    heading: string
    meta: { days: string; price: string; priceEarly: string; start: string; highlight: string }
    items: Tour[]
  }
  toursPage: {
    label: string
    heading: string
    subtitle: string
    stats: string
    all: string
  }
  tourDetail: {
    program: string
    dates: string
    includes: string
    back: string
    priceNote: string
  }
  tourDetails: TourDetail[]
  directions: {
    label: string
    heading: string
    text: string
    all: string
    items: { name: string; count: string }[]
  }
  directionsPage: {
    heading: string
    subtitle: string
    listLabel: string
    cards: { country: string; text: string; image: string }[]
  }
  why: {
    label: string
    heading: string
    items: { title: string; text: string }[]
  }
  journal: {
    label: string
    heading: string
    items: { id: string; tag: string; title: string; date: string; read: string; image: string }[]
  }
  blog: {
    subtitle: string
    back: string
  }
  articles: { id: string; intro: string; body: string[] }[]
  team: {
    label: string
    heading: string
    text: string
    items: { initials: string; name: string; role: string; text: string }[]
  }
  lead: {
    label: string
    heading: string
    text: string
    bullets: string[]
    form: {
      name: string
      namePlaceholder: string
      phone: string
      phonePlaceholder: string
      comment: string
      commentPlaceholder: string
      legal: string
    }
    success: { title: string; text: string }
  }
  footer: {
    tagline: string
  }
}

export const contacts = {
  address: { ru: 'Москва, ул. Тверская, 1, офис 12', en: '1 Tverskaya St, Office 12, Moscow' },
  phone: '+7 495 120-45-67',
  email: 'hello@wildsoulroutes.com',
}

export const content: Record<'ru' | 'en', PageContent> = {
  ru: {
    nav: [
      { href: '/tours', label: 'Туры' },
      { href: '/directions', label: 'Направления' },
      { href: '/blog', label: 'Блог' },
      { href: '/contacts', label: 'Контакты' },
    ],
    cta: {
      lead: 'Оставить заявку',
      tours: 'Смотреть туры',
      more: 'Подробнее',
      submit: 'Отправить заявку',
      choose: 'Выбрать путешествие',
      format: 'Узнать о формате',
    },
    hero: {
      tagline: 'Путешествия с душой',
      title: 'Маршруты, которые хочется прожить',
      subtitle: 'Исследовательские путешествия с гидом и психологом',
      subtitle2: 'Смысл в каждом шаге',
    },
    tours: {
      label: 'Маршруты',
      heading: 'Ближайшие туры',
      meta: { days: 'Длительность', price: 'Стоимость', priceEarly: 'по раннему бронированию до 31.12.2026', start: 'Даты', highlight: 'Главное' },
      items: [
        {
          id: 'tibet',
          coords: '28.14° N · 86.85° E — Тибет',
          title: 'Тибет: Сила Кайласа',
          description:
            'Эверест с севера, древние храмы и города, культура Тибета и кора вокруг священного Кайласа.',
          days: '16 дней',
          price: '3 490 $',
          priceEarly: '3 390 $',
          start: '28 мая – 12 июня 2027',
          highlight: 'Эверест',
          image: 'images/tour-tibet.jpg',
        },
        {
          id: 'nepal',
          coords: '27.71° N · 85.32° E — Непал',
          title: 'Непал: сердце Гималаев',
          description:
            'Непал с разных сторон: древние храмы Катманду, джунгли Читвана с носорогами и спокойная Покхара у озера с йогой и медитациями.',
          days: '10 дней',
          price: '2 390 $',
          priceEarly: '2 290 $',
          start: '8–17 апреля 2027',
          highlight: 'Катманду',
          image: 'images/tour-nepal.jpg',
        },
        {
          id: 'nepal-bhutan',
          coords: '27.47° N · 89.64° E — Непал · Бутан',
          title: 'Непал и Бутан: земля Дракона',
          description:
            'Древние монастыри Бутана, гималайские долины и традиционные деревни. 9 дней среди природы и культуры страны, где массовый туризм ещё не изменил привычный уклад жизни.',
          days: '9 дней',
          price: '3 490 $',
          priceEarly: '3 390 $',
          start: '27 марта – 4 апреля 2027',
          highlight: 'Тигриное гнездо',
          image: 'images/tour-bhutan.jpg',
        },
        {
          id: 'nepal-tour',
          coords: '27.71° N · 85.32° E — Непал',
          title: 'Непал экскурсионный',
          description:
            'Классика долины Катманду без трекинга: храмы и дворцы трёх городов-музеев, рассвет над Гималаями в Нагаркоте и тихая Покхара.',
          days: '8 дней',
          price: '3 490 $',
          priceEarly: '3 390 $',
          start: '21–28 октября 2026',
          highlight: 'Нагаркот',
          image: 'images/tour-nepal.jpg',
        },
        {
          id: 'nepal-trek',
          coords: '27.98° N · 86.71° E — Непал',
          title: 'Непал: путь к Эвересту',
          description:
            'Трек с прохождением трёх перевалов 5000+, посещение базового лагеря Эвереста, виды на четыре восьмитысячника.',
          days: '20 дней',
          price: '3 490 $',
          priceEarly: '3 390 $',
          start: '20 апреля – 9 мая 2027',
          highlight: 'Эверест',
          image: 'images/tour-everest.jpg',
        },
        {
          id: 'cappadocia',
          coords: '38.64° N · 34.83° E — Турция',
          title: 'Каппадокия и Стамбул',
          description:
            'Полёт на воздушном шаре над долинами на рассвете, подземные города и два дня в Стамбуле с гидом. Маршрут, который мы сами проезжаем каждый год.',
          days: '8 дней',
          price: '3 490 $',
          priceEarly: '3 390 $',
          start: '18–25 апреля 2027',
          highlight: 'Гёреме',
          image: 'images/tour-cappadocia.jpg',
        },
        {
          id: 'georgia',
          coords: '41.72° N · 44.78° E — Грузия',
          title: 'Вкусы Грузии',
          description:
            'Кахетия, Сванетия и Казбеги: семейные винодельни, горные башни и застолья, куда зовут только своих. Гастрономический маршрут без туристических мест.',
          days: '6 дней',
          price: '3 490 $',
          priceEarly: '3 390 $',
          start: '8–13 июня 2027',
          highlight: 'Кахетия',
          image: 'images/tour-georgia.jpg',
        },
        {
          id: 'andaman',
          coords: '7.88° N · 98.39° E — Таиланд',
          title: 'Острова Андаманского моря',
          description:
            'Карстовые острова, тихие лагуны и ночёвки в бунгало над водой. Сноркелинг, каяки и рассветы, ради которых стоит проснуться в пять утра.',
          days: '11 дней',
          price: '3 490 $',
          priceEarly: '3 390 $',
          start: '15–25 января 2027',
          highlight: 'Пхукет',
          image: 'images/tour-andaman.jpg',
        },
      ],
    },
    toursPage: {
      label: 'Каталог',
      heading: 'Туры',
      subtitle: 'Маршруты, которые мы прошли сами и готовы пройти с вами.',
      stats: '8 туров · 6 направлений',
      all: 'Все',
    },
    tourDetail: {
      program: 'Программа по дням',
      dates: 'Ближайшие заезды',
      includes: 'Что включено',
      back: 'Все туры',
      priceNote: 'за человека при двухместном размещении',
    },
    tourDetails: [
      {
        id: 'tibet',
        intro:
          'Двенадцать дней вокруг двух главных гор Азии: северная стена Эвереста от монастыря Ронгбук и кора вокруг священного Кайласа. Идём медленно, с запасом на акклиматизацию, — и каждый вечер собираемся группой, чтобы проговорить день.',
        program: [
          { day: 'День 1', text: 'Прилёт в Лхасу. Спокойный день акклиматизации, вечерняя прогулка по Баркхору.' },
          { day: 'День 2', text: 'Лхаса: дворец Потала и храм Джоканг — сердце тибетского буддизма.' },
          { day: 'День 3', text: 'Монастыри Дрепунг и Сера — дебаты монахов во внутреннем дворе.' },
          { day: 'День 4', text: 'Переезд к бирюзовому озеру Ямдрок, ночёвка в Гьянце.' },
          { day: 'День 5', text: 'Монастырь Пелкор Чоде и ступа Кумбум, Ташилунпо в Шигадзе.' },
          { day: 'День 6', text: 'Переезд в Сакью — древний монастырь-гарнизон серых стен.' },
          { day: 'День 7', text: 'Путь к Ронгбуку. Закат под северной стеной Эвереста.' },
          { day: 'День 8', text: 'Рассвет у монастыря Ронгбук — Эверест в первых лучах. Переезд в Сагу.' },
          { day: 'День 9', text: 'Дорога на запад через высокогорные плато. Первый вид на Кайлас — Дарчен.' },
          { day: 'День 10', text: 'День отдыха в Дарчене: подготовка к коре, вечерняя встреча группы.' },
          { day: 'День 11', text: 'Начало коры: трек до монастыря Дирапук у северной стены Кайласа.' },
          { day: 'День 12', text: 'Самый высокий день: перевал Дролма-Ла (5630 м), спуск к Зутулпуку.' },
          { day: 'День 13', text: 'Завершение коры. Тихий вечер и большой разговор в группе.' },
          { day: 'День 14', text: 'Закат у священного озера Манасаровар.' },
          { day: 'День 15', text: 'Начало обратного пути — ночёвка в Саге.' },
          { day: 'День 16', text: 'Возвращение в Лхасу и вылет домой.' },
        ],
        dates: [{ when: '28 мая – 12 июня 2027', note: 'набор открыт' }],
        includes: [
          'Сопровождение гида и психолога всю дорогу',
          'Пермиты на Тибет и визовая поддержка',
          'Проживание: отели в городах, гестхаусы в горах',
          'Все переезды и джипы по маршруту',
          'Групповые встречи каждый вечер',
        ],
      },
      {
        id: 'nepal',
        intro:
          'Непал с разных сторон за десять дней: древние храмы и ступы Катманду, сафари в джунглях Читвана, где по траве ходят носороги, и тихая Покхара у озера — с утренней йогой и медитациями на берегу.',
        program: [
          { day: 'День 1', text: 'Прилёт в Катманду. Знакомство с группой за непальским ужином.' },
          { day: 'День 2', text: 'Буддханатх и Сваямбхунатх: великие ступы и обезьяний храм.' },
          { day: 'День 3', text: 'Бхактапур — город-музей под открытым небом, гончарный квартал.' },
          { day: 'День 4', text: 'Переезд в Читван — национальный парк джунглей на юге Непала.' },
          { day: 'День 5', text: 'Сафари в Читване: носороги, крокодилы и, если повезёт, тигр. Каноэ по реке Рапти на закате.' },
          { day: 'День 6', text: 'Переезд в Покхару — город у подножия Аннапурны.' },
          { day: 'День 7', text: 'Утренняя йога у озера Пхева, лодки и храм мира на закате.' },
          { day: 'День 8', text: 'Рассвет на Сарангкоте: Аннапурна и Мачхапучхре в розовом свете. Дневная медитация.' },
          { day: 'День 9', text: 'Свободный день в Покхаре: параплан, прогулки или тихий берег озера.' },
          { day: 'День 10', text: 'Возвращение в Катманду и вылет домой.' },
        ],
        dates: [{ when: '8–17 апреля 2027', note: 'набор открыт' }],
        includes: [
          'Сопровождение гида и психолога',
          'Проживание в отелях с завтраками',
          'Все трансферы и переезд Катманду — Покхара',
          'Входные билеты в храмы и дворцы',
          'Вечерние встречи группы',
        ],
      },
      {
        id: 'nepal-bhutan',
        intro:
          'Две гималайские страны в одном путешествии: шумная, храмовая долина Катманду и тихий Бутан — королевство, где счастье считают официально. Финал маршрута — подъём к Такцангу, монастырю на отвесной скале.',
        program: [
          { day: 'День 1', text: 'Прилёт в Катманду. Знакомство с группой за непальским ужином.' },
          { day: 'День 2', text: 'Буддханатх и Пашупатинатх: главные святыни долины.' },
          { day: 'День 3', text: 'Перелёт в Паро (Бутан) — один из самых красивых заходов на посадку в мире. Переезд в Тхимпху.' },
          { day: 'День 4', text: 'Тхимпху: дзонг Ташичо, гигантский Будда Дорденма и традиционная деревня.' },
          { day: 'День 5', text: 'Перевал Дочу-Ла с 108 ступами, спуск в долину Пунакхи.' },
          { day: 'День 6', text: 'Дзонг Пунакхи у слияния двух рек, подвесной мост и прогулка по рисовым террасам.' },
          { day: 'День 7', text: 'Возвращение в Паро. Вечерняя встреча группы.' },
          { day: 'День 8', text: 'Подъём к Такцангу — Тигриному гнезду (3120 м). Главный день маршрута.' },
          { day: 'День 9', text: 'Перелёт в Катманду и вылет домой.' },
        ],
        dates: [{ when: '27 марта – 4 апреля 2027', note: 'набор открыт' }],
        includes: [
          'Сопровождение гида и психолога',
          'Виза в Бутан и сбор SDF',
          'Перелёт Катманду — Паро — Катманду',
          'Проживание в отелях, все переезды',
          'Вечерние встречи группы',
        ],
      },
      {
        id: 'nepal-tour',
        intro:
          'Непал без рюкзака и высоты: храмы, дворцы и ремесленные кварталы долины Катманду, рассвет над Гималаями в Нагаркоте и два тихих дня у озера в Покхаре. Маршрут для тех, кто хочет культуру и горы — из окна отеля.',
        program: [
          { day: 'День 1', text: 'Прилёт в Катманду. Вечерняя прогулка по Тамелю.' },
          { day: 'День 2', text: 'Сваямбхунатх на закате — обезьяний храм над городом.' },
          { day: 'День 3', text: 'Патан: дворцовая площадь, Золотой храм и мастерские по металлу.' },
          { day: 'День 4', text: 'Бхактапур: гончарный квартал и джу-джу дхау — королевский йогурт.' },
          { day: 'День 5', text: 'Переезд в Нагаркот. Закат над цепью восьмитысячников прямо с террасы.' },
          { day: 'День 6', text: 'Рассвет над Гималаями, переезд в Покхару.' },
          { day: 'День 7', text: 'Озеро Пхева, храм мира и свободный вечер у воды.' },
          { day: 'День 8', text: 'Возвращение в Катманду и вылет домой.' },
        ],
        dates: [
          { when: '21–28 октября 2026', note: 'набор открыт' },
          { when: '7–14 марта 2027', note: 'набор открыт' },
        ],
        includes: [
          'Сопровождение гида и психолога',
          'Отели с завтраками по всему маршруту',
          'Все трансферы и входные билеты',
          'Рассвет в Нагаркоте с видом на Эверест',
          'Вечерние встречи группы',
        ],
      },
      {
        id: 'nepal-trek',
        intro:
          'Двадцать дней в самом высокогорном регионе планеты: три перевала выше пяти тысяч — Конгма-Ла, Чо-Ла и Ренджо-Ла, ночёвка над облаками в Горак-Шепе и базовый лагерь Эвереста. С одной точки — четыре восьмитысячника сразу.',
        program: [
          { day: 'День 1', text: 'Прилёт в Катманду. Проверка снаряжения, знакомство с группой.' },
          { day: 'День 2', text: 'Перелёт в Луклу (2840 м), переход в Пакдинг вдоль реки Дудх-Коси.' },
          { day: 'День 3', text: 'Подъём в Намче-Базар (3440 м) — столицу шерпов.' },
          { day: 'День 4', text: 'День акклиматизации: смотровая площадка с первым видом на Эверест.' },
          { day: 'День 5', text: 'Переход в Тенгбоче (3860 м) — главный монастырь региона.' },
          { day: 'День 6', text: 'Переход в Дингбоче (4410 м) под стеной Ама-Даблам.' },
          { day: 'День 7', text: 'Акклиматизация: радиальный подъём на Нангкар-Цанг (5083 м).' },
          { day: 'День 8', text: 'Переход в Чукхунг (4730 м). Вечерняя встреча группы.' },
          { day: 'День 9', text: 'Первый перевал — Конгма-Ла (5535 м). Спуск в Лобуче.' },
          { day: 'День 10', text: 'Переход в Горак-Шеп (5140 м), закат на Кала-Паттар (5644 м).' },
          { day: 'День 11', text: 'Базовый лагерь Эвереста (5364 м) — главная точка маршрута.' },
          { day: 'День 12', text: 'Переход в Дзонгла у подножия второго перевала.' },
          { day: 'День 13', text: 'Перевал Чо-Ла (5420 м), спуск в долину Гокио.' },
          { day: 'День 14', text: 'Бирюзовые озёра Гокио. Тихий вечер у третьего озера.' },
          { day: 'День 15', text: 'Подъём на Гокио-Ри (5357 м): Эверест, Лхоцзе, Макалу и Чо-Ойю в одной панораме.' },
          { day: 'День 16', text: 'Третий перевал — Ренджо-Ла (5360 м). Спуск в Тхаме.' },
          { day: 'День 17', text: 'Возвращение в Намче-Базар. Горячий душ и праздничный ужин.' },
          { day: 'День 18', text: 'Длинный спуск в Луклу. Финальный вечер в горах.' },
          { day: 'День 19', text: 'Перелёт в Катманду, прощальный ужин с группой.' },
          { day: 'День 20', text: 'Вылет домой.' },
        ],
        dates: [{ when: '20 апреля – 9 мая 2027', note: 'набор открыт' }],
        includes: [
          'Сопровождение гида и психолога',
          'Перелёт Катманду — Лукла — Катманду',
          'Пермиты на национальный парк Сагарматха и регион Кхумбу',
          'Ночёвки в ти-хаусах, портеры на группу',
          'Вечерние встречи группы',
        ],
      },
      {
        id: 'cappadocia',
        intro:
          'Восемь дней между двумя мирами: рассветные воздушные шары над долинами Каппадокии и шумный, вкусный Стамбул. Маршрут, который мы проезжаем сами каждый год и обновляем любимыми местами.',
        program: [
          { day: 'День 1', text: 'Прилёт, переезд в Гёреме. Вечер в пещерном отеле.' },
          { day: 'День 2', text: 'Рассвет: полёт на воздушном шаре. Долина Любви и смотровая Учисар.' },
          { day: 'День 3', text: 'Подземный город Деринкую и трек по долине Ихлара.' },
          { day: 'День 4', text: 'Розовая долина на закате, гончарная мастерская в Аваносе.' },
          { day: 'День 5', text: 'Перелёт в Стамбул. Султанахмет: Айя-София и Голубая мечеть.' },
          { day: 'День 6', text: 'Босфор на пароме, Галата и специи Египетского базара.' },
          { day: 'День 7', text: 'Свободный день: хамам, современное искусство или Азиатская сторона.' },
          { day: 'День 8', text: 'Вылет домой.' },
        ],
        dates: [
          { when: '18–25 апреля 2027', note: 'осталось 3 места' },
          { when: '9–16 октября 2027', note: 'набор открыт' },
        ],
        includes: [
          'Сопровождение гида и психолога',
          'Пещерный отель в Гёреме и отель в Стамбуле',
          'Полёт на воздушном шаре',
          'Внутренний перелёт и все трансферы',
          'Вечерние встречи группы',
        ],
      },
      {
        id: 'georgia',
        intro:
          'Шесть дней вкусов и гор: семейные винодельни Кахетии, башни Сванетии на горизонте и застолья, куда зовут только своих. Гастрономический маршрут вдали от туристических мест.',
        program: [
          { day: 'День 1', text: 'Прилёт в Тбилиси. Старый город, серные бани и первый ужин.' },
          { day: 'День 2', text: 'Кахетия: семейная винодельня, квеври и обед у винодела дома.' },
          { day: 'День 3', text: 'Сигнахи — город любви над Алазанской долиной. Дегустации и тоне.' },
          { day: 'День 4', text: 'Военно-грузинская дорога: Ананури, перевал Крестовый, Казбеги.' },
          { day: 'День 5', text: 'Церковь Гергети на фоне Казбека. Возвращение в Тбилиси, прощальное застолье.' },
          { day: 'День 6', text: 'Вылет домой.' },
        ],
        dates: [
          { when: '8–13 июня 2027', note: 'набор открыт' },
          { when: '19–24 сентября 2027', note: 'осталось 5 мест' },
        ],
        includes: [
          'Сопровождение гида и психолога',
          'Проживание: бутик-отели и гостевые дома',
          'Все дегустации и домашние застолья',
          'Трансферы и джипы в горах',
          'Вечерние встречи группы',
        ],
      },
      {
        id: 'andaman',
        intro:
          'Одиннадцать дней на островах Андаманского моря: карстовые скалы, тихие лагуны, сноркелинг и рассветы, ради которых стоит проснуться в пять утра. Тёплый финал сезона — и время наконец выдохнуть.',
        program: [
          { day: 'День 1', text: 'Прилёт на Пхукет. Первый вечер у моря.' },
          { day: 'День 2', text: 'Переезд в Краби, пляж Рейли — скалы прямо из воды.' },
          { day: 'День 3', text: 'Каяки в мангровых лагунах, закат на пляже.' },
          { day: 'День 4', text: 'Паром на Пхи-Пхи. Смотровая площадка над двумя бухтами.' },
          { day: 'День 5', text: 'Сноркелинг у бухты Майя и пляж обезьян.' },
          { day: 'День 6', text: 'Переезд на Ко-Ланта — самый тихий остров маршрута.' },
          { day: 'День 7', text: 'День у моря: пляж, массаж, ничегонеделание.' },
          { day: 'День 8', text: 'Национальный парк Му-Ко-Ланта, маяк на закате.' },
          { day: 'День 9', text: 'Перелёт в Бангкок. Вечерний китайский квартал.' },
          { day: 'День 10', text: 'Храмы Бангкока и прощальный ужин на крыше.' },
          { day: 'День 11', text: 'Вылет домой.' },
        ],
        dates: [
          { when: '15–25 января 2027', note: 'набор открыт' },
          { when: '12–22 февраля 2027', note: 'осталось 6 мест' },
        ],
        includes: [
          'Сопровождение гида и психолога',
          'Отели и бунгало у воды',
          'Все паромы, трансферы и внутренний перелёт',
          'Сноркелинг и каяки с инструкторами',
          'Вечерние встречи группы',
        ],
      },
    ],
    directionsPage: {
      heading: 'Направления',
      subtitle: 'Мы работаем только с регионами, которые знаем лично. Каждое направление — это проверенные гиды, понятная логистика и маршруты, которые мы регулярно обновляем.',
      listLabel: 'Все регионы',
      cards: [
        { country: 'Тибет', text: 'Высокогорье, монастыри и кора вокруг священного Кайласа.', image: 'images/tour-tibet.jpg' },
        { country: 'Непал', text: 'Ступы Катманду и рассветы над Аннапурной.', image: 'images/tour-nepal.jpg' },
        { country: 'Бутан', text: 'Дзонги, перевал Дочу-Ла и монастырь Такцанг на скале.', image: 'images/tour-bhutan.jpg' },
        { country: 'Турция', text: 'Каппадокия, Ликийская тропа и Стамбул.', image: 'images/tour-cappadocia.jpg' },
        { country: 'Грузия', text: 'Кахетия, Сванетия и Военно-грузинская дорога.', image: 'images/tour-georgia.jpg' },
        { country: 'Таиланд', text: 'Острова Андаманского моря и Бангкок.', image: 'images/tour-andaman.jpg' },
      ],
    },
    directions: {
      label: 'География',
      heading: 'Направления',
      text: 'Мы работаем только с регионами, которые знаем лично. Каждое направление — это проверенные гиды, понятная логистика и маршруты, которые мы регулярно обновляем.',
      all: 'Все направления',
      items: [
        { name: 'Тибет', count: '3 маршрута' },
        { name: 'Непал', count: '4 маршрута' },
        { name: 'Бутан', count: '2 маршрута' },
        { name: 'Кавказ', count: '5 маршрутов' },
        { name: 'Каппадокия', count: '3 маршрута' },
        { name: 'Кахетия', count: '2 маршрута' },
        { name: 'Сванетия', count: '2 маршрута' },
        { name: 'Ликийская тропа', count: '1 маршрут' },
        { name: 'Андаманское море', count: '3 маршрута' },
        { name: 'Бангкок', count: '2 маршрута' },
      ],
    },
    why: {
      label: 'Подход',
      heading: 'Почему с нами удобно',
      items: [
        {
          title: 'Авторские маршруты',
          text: 'Каждый маршрут мы сначала проезжаем сами: проверяем дороги, гостиницы и гидов. В программе — только места, куда мы готовы возвращаться.',
        },
        {
          title: 'Маленькие группы',
          text: 'До 8 человек в группе. Это значит: тихие утренние точки без толпы, живое общение с гидом и гибкость в программе каждого дня.',
        },
        {
          title: 'Логистика под ключ',
          text: 'Билеты, трансферы, разрешения и страховка — на нас. Вы получаете один документ с понятным планом и просто собираете рюкзак.',
        },
        {
          title: 'Поддержка 24/7',
          text: 'Координатор на связи весь тур: поможет с задержкой рейса, заменой отеля или аптечкой в горах. Решаем вопросы за минуты, а не за дни.',
        },
      ],
    },
    journal: {
      label: 'Блог',
      heading: 'Читаем перед поездкой',
      items: [
        {
          id: 'cappadocia-calendar',
          tag: 'Календарь поездок',
          title: 'Когда ехать в Каппадокию: честный календарь по месяцам',
          date: '18 сентября 2026',
          read: '7 минут',
          image: 'images/tour-cappadocia.jpg',
        },
        {
          id: 'tibet-trek',
          tag: 'Тибет',
          title: 'Трек к Эвересту без спешки: как устроен наш маршрут',
          date: '2 сентября 2026',
          read: '11 минут',
          image: 'images/tour-tibet.jpg',
        },
        {
          id: 'georgia-food',
          tag: 'Грузия',
          title: 'Грузия для гурманов: семь мест, где кормят как дома',
          date: '21 августа 2026',
          read: '6 минут',
          image: 'images/tour-georgia.jpg',
        },
      ],
    },
    blog: {
      subtitle: 'Заметки команды о маршрутах, сезонах и местах, которые мы любим.',
      back: 'Все статьи',
    },
    articles: [
      {
        id: 'cappadocia-calendar',
        intro:
          'Каппадокия хороша почти всегда, но «почти» — ключевое слово. Мы ездим туда каждый год и собрали честный календарь: когда шары летают каждое утро, а когда неделю стоят из-за ветра.',
        body: [
          'Апрель и май — самые предсказуемые месяцы. Ночи ещё прохладные, дни около +20, долины зелёные, а шары поднимаются девять утра из десяти. Толп меньше, чем летом, а цены на отели ещё не взлетели.',
          'Июнь и июль — жара и очереди. Шары летают, но рассвет встречаете в компании ещё пятисот человек на смотровой. Если едете летом, живите в Гёреме, а не в Ургюпе: к стартовым площадкам ближе, и рассвет можно встретить прямо с террасы отеля.',
          'Сентябрь и октябрь — наш любимый сезон. Воздух прозрачный, виноград уже собран, в Аваносе работают гончары без спешки. Именно в октябре мы водим наши группы: свет мягкий, а вечера достаточно длинные для прогулок по Розовой долине.',
          'Ноябрь — лотерея. Шары могут не летать несколько дней подряд, зато подземные города пусты, а снег на туфовых грибах — отдельный вид красоты. Зимой ехать стоит только тем, кто готов к отменам ради фотографий заснеженных долин.',
          'Итог простой: хотите гарантированный полёт — апрель, май, конец сентября. Хотите тишины и снега — декабрь, но держите в запасе пару свободных дней.',
        ],
      },
      {
        id: 'tibet-trek',
        intro:
          'Главная ошибка в Тибете — спешка. Высота не прощает амбиций, поэтому наш маршрут к Эвересту и Кайласу построен вокруг медленной акклиматизации, а не вокруг галочек в списке достопримечательностей.',
        body: [
          'Первые два дня мы вообще никуда не идём. Лхаса лежит на 3650 метрах, и это уже высота. Мы гуляем по Баркхору, пьём сладкий чай в чайных и даём организму время. Только на третий день выезжаем к озеру Ямдрок.',
          'К Ронгбуку и северной стене Эвереста приезжаем на пятый день, когда высота 5000 метров уже не пугает. Ночуем в гестхаусе у монастыря: условия простые, но рассвет над Эверестом из окна стоит любого пятизвёздочного отеля.',
          'Кора вокруг Кайласа — три дня ходьбы. Первый день мягкий: тропа вдоль реки к Дирапуку. Второй — самый тяжёлый и самый красивый: перевал Дролма-Ла, 5630 метров. Третий день короткий, и к вечеру мы уже в Дарчене, где горячий душ и большой разговор в группе.',
          'Каждый вечер в маршруте — час тишины или разговора. В горах это работает иначе, чем в городе: высота и усталость снимают защитные слои, и люди говорят честнее. Это не побочный эффект путешествия — это его суть.',
          'Если сомневаетесь, потянете ли: наш темп — шаг и пауза, шаг и пауза. Маршрут проходили люди 55+ без горного опыта. Главное — честно заполнить анкету здоровья перед поездкой и довериться акклиматизации.',
        ],
      },
      {
        id: 'georgia-food',
        intro:
          'Грузию нельзя понять через рестораны для туристов. Настоящая кухня — в домах, где хлеб пекут в тоне при вас, а тосты длятся дольше, чем сам ужин. Семь мест, куда мы возим друзей.',
        body: [
          'Сигналаки в Тбилиси — дворик за ковровым магазином на Авлабаре. Хинкали здесь лепят утром, и к часу дня их уже нет. Приходите к одиннадцати и берите с бараниной.',
          'В Кахетии мы останавливаемся у Гиорги — винодела в третьем поколении. Квеври в его марани старше любого из нас, а обед накрывает его мама: лобио, мцвади и домашний сулугуни, который тянется на метр.',
          'Сигнахи: кафе «Окра» на краю городской стены. Вид на Алазанскую долину, хачапури по-имеретински и чача, которую приносят в графине без этикетки. Заказывайте сезонные овощи — их привозят с утреннего рынка.',
          'В Местиа, в Сванетии, — гостевой дом Наны. Кубдари с мясом она готовит только под заказ с вечера, поэтому предупреждаем её заранее. Заодно она покажет, как правильно есть: руками и не спеша.',
          'В Казбеги не едим в отелях — спускаемся к семье в Гергети. Харчо здесь варят на казане над огнём, а к застолью подключаются соседи. Тосты за горы, за дорогу, за гостей — и в какой-то момент вы поймёте, что это и есть групповая терапия по-грузински.',
          'И два адреса на дорогу: хлебная в Гудаури у третьего километра — пури из тоне горячее некуда, и чайная в Пасанаури, где родились хинкали. Просто, громко и очень честно.',
        ],
      },
    ],
    team: {
      label: 'Люди',
      heading: 'Команда',
      text: 'Нас четверо, и каждый отвечает за свой регион. Мы не передаём туры подрядчикам — ведём группы сами.',
      items: [
        {
          initials: 'ЮФ',
          name: 'Юлия Фёдорова',
          role: 'Основатель, автор маршрутов',
          text: '14 лет в экспедиционном туризме. Прошла Ликийскую тропу, трижды была у Эвереста.',
        },
        {
          initials: 'ТН',
          name: 'Тензин Норбу',
          role: 'Гид по Тибету и Непалу',
          text: 'Родился в Лхасе. Знает каждый монастырь долины и говорит на пяти языках.',
        },
        {
          initials: 'МО',
          name: 'Марк Оганесян',
          role: 'Гид по Кавказу и Грузии',
          text: 'Альпинист и сомелье-любитель. Ведёт горные и гастрономические программы.',
        },
        {
          initials: 'АС',
          name: 'Анна Соколова',
          role: 'Координатор путешествий',
          text: 'Отвечает за логистику и поддержку в пути. Решает любой вопрос за один звонок.',
        },
      ],
    },
    lead: {
      label: 'Заявка',
      heading: 'Оставить заявку',
      text: 'Расскажите, куда хотите поехать, — в течение рабочего дня предложим маршрут, даты и честную смету. Если планов пока нет, просто оставьте контакты: поможем выбрать.',
      bullets: [
        '— Отвечаем в течение рабочего дня',
        '— Бронь без предоплаты в течение 3 дней',
        '— Отмена с полным возвратом за 30 дней до тура',
      ],
      form: {
        name: 'Имя',
        namePlaceholder: 'Как к вам обращаться',
        phone: 'Телефон',
        phonePlaceholder: '+7 ___ ___-__-__',
        comment: 'Куда хочется',
        commentPlaceholder: 'Например: Тибет в октябре, вдвоём',
        legal: 'Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных.',
      },
      success: {
        title: 'Заявка отправлена',
        text: 'Спасибо! Координатор свяжется с вами в течение рабочего дня.',
      },
    },
    footer: {
      tagline: 'Сделано с любовью к горам',
    },
  },
  en: {
    nav: [
      { href: '/tours', label: 'Tours' },
      { href: '/directions', label: 'Destinations' },
      { href: '/blog', label: 'Blog' },
      { href: '/contacts', label: 'Contacts' },
    ],
    cta: {
      lead: 'Plan my trip',
      tours: 'Explore tours',
      more: 'Learn more',
      submit: 'Send request',
      choose: 'Choose a journey',
      format: 'About the format',
    },
    hero: {
      tagline: 'Travel with soul',
      title: 'Routes you will want to live',
      subtitle: 'Exploratory journeys with a guide and a psychologist',
      subtitle2: 'Meaning in every step',
    },
    tours: {
      label: 'Routes',
      heading: 'Upcoming tours',
      meta: { days: 'Duration', price: 'Price', priceEarly: 'early booking until Dec 31, 2026', start: 'Dates', highlight: 'Highlight' },
      items: [
        {
          id: 'tibet',
          coords: '28.14° N · 86.85° E — Tibet',
          title: 'Tibet: The Power of Kailash',
          description:
            'Everest from the north, ancient temples and towns, the culture of Tibet and the kora around sacred Kailash.',
          days: '16 days',
          price: '$3,490',
          priceEarly: '$3,390',
          start: 'May 28 – Jun 12, 2027',
          highlight: 'Everest',
          image: 'images/tour-tibet.jpg',
        },
        {
          id: 'nepal',
          coords: '27.71° N · 85.32° E — Nepal',
          title: 'Nepal: Heart of the Himalayas',
          description:
            'Nepal from every side: the ancient temples of Kathmandu, the rhino jungles of Chitwan and peaceful Pokhara by the lake with yoga and meditation.',
          days: '10 days',
          price: '$2,390',
          priceEarly: '$2,290',
          start: 'Apr 8–17, 2027',
          highlight: 'Kathmandu',
          image: 'images/tour-nepal.jpg',
        },
        {
          id: 'nepal-bhutan',
          coords: '27.47° N · 89.64° E — Nepal · Bhutan',
          title: 'Nepal & Bhutan: Land of the Dragon',
          description:
            'Ancient monasteries of Bhutan, Himalayan valleys and traditional villages. 9 days among the nature and culture of a country where mass tourism has not yet changed the way of life.',
          days: '9 days',
          price: '$3,490',
          priceEarly: '$3,390',
          start: 'Mar 27 – Apr 4, 2027',
          highlight: 'Tiger’s Nest',
          image: 'images/tour-bhutan.jpg',
        },
        {
          id: 'nepal-tour',
          coords: '27.71° N · 85.32° E — Nepal',
          title: 'Nepal, the cultural route',
          description:
            'The classics of the Kathmandu Valley without trekking: temples and palaces of three museum cities, a Himalayan sunrise in Nagarkot and quiet Pokhara.',
          days: '8 days',
          price: '$3,490',
          priceEarly: '$3,390',
          start: 'Oct 21–28, 2026',
          highlight: 'Nagarkot',
          image: 'images/tour-nepal.jpg',
        },
        {
          id: 'nepal-trek',
          coords: '27.98° N · 86.71° E — Nepal',
          title: 'Nepal: The Road to Everest',
          description:
            'A trek across three 5,000+ metre passes, a visit to Everest Base Camp and views of four eight-thousanders.',
          days: '20 days',
          price: '$3,490',
          priceEarly: '$3,390',
          start: 'Apr 20 – May 9, 2027',
          highlight: 'Everest',
          image: 'images/tour-everest.jpg',
        },
        {
          id: 'cappadocia',
          coords: '38.64° N · 34.83° E — Türkiye',
          title: 'Cappadocia & Istanbul',
          description:
            'A dawn balloon flight over the valleys, underground cities and two days in Istanbul with a guide. A route we travel ourselves every year.',
          days: '8 days',
          price: '$3,490',
          priceEarly: '$3,390',
          start: 'Apr 18–25, 2027',
          highlight: 'Göreme',
          image: 'images/tour-cappadocia.jpg',
        },
        {
          id: 'georgia',
          coords: '41.72° N · 44.78° E — Georgia',
          title: 'Tastes of Georgia',
          description:
            'Kakheti, Svaneti and Kazbegi: family wineries, mountain towers and feasts reserved for friends. A gastronomic route away from the tourist trail.',
          days: '6 days',
          price: '$3,490',
          priceEarly: '$3,390',
          start: 'Jun 8–13, 2027',
          highlight: 'Kakheti',
          image: 'images/tour-georgia.jpg',
        },
        {
          id: 'andaman',
          coords: '7.88° N · 98.39° E — Thailand',
          title: 'Islands of the Andaman Sea',
          description:
            'Karst islands, quiet lagoons and nights in overwater bungalows. Snorkeling, kayaks and sunrises worth waking up at five for.',
          days: '11 days',
          price: '$3,490',
          priceEarly: '$3,390',
          start: 'Jan 15–25, 2027',
          highlight: 'Phuket',
          image: 'images/tour-andaman.jpg',
        },
      ],
    },
    toursPage: {
      label: 'Catalog',
      heading: 'Tours',
      subtitle: 'Routes we have travelled ourselves and are ready to share with you.',
      stats: '8 tours · 6 destinations',
      all: 'All',
    },
    tourDetail: {
      program: 'Day-by-day program',
      dates: 'Upcoming departures',
      includes: "What's included",
      back: 'All tours',
      priceNote: 'per person in a double room',
    },
    tourDetails: [
      {
        id: 'tibet',
        intro:
          'Twelve days around two of Asia’s greatest mountains: Everest’s north face from Rongbuk Monastery and the kora around sacred Kailash. We move slowly, with time to acclimatize — and gather as a group every evening to talk the day through.',
        program: [
          { day: 'Day 1', text: 'Arrival in Lhasa. A quiet acclimatization day, evening walk around Barkhor.' },
          { day: 'Day 2', text: 'Lhasa: the Potala Palace and Jokhang Temple — the heart of Tibetan Buddhism.' },
          { day: 'Day 3', text: 'Drepung and Sera monasteries — monks debating in the courtyard.' },
          { day: 'Day 4', text: 'Drive to turquoise Yamdrok Lake, overnight in Gyantse.' },
          { day: 'Day 5', text: 'Pelkor Chode Monastery and the Kumbum stupa, Tashilhunpo in Shigatse.' },
          { day: 'Day 6', text: 'Drive to Sakya — the ancient grey-walled monastery.' },
          { day: 'Day 7', text: 'The road to Rongbuk. Sunset beneath Everest’s north face.' },
          { day: 'Day 8', text: 'Sunrise at Rongbuk Monastery — Everest in first light. Drive to Saga.' },
          { day: 'Day 9', text: 'West across the high plateaus. First sight of Kailash — Darchen.' },
          { day: 'Day 10', text: 'Rest day in Darchen: preparing for the kora, evening group meeting.' },
          { day: 'Day 11', text: 'The kora begins: trek to Dirapuk Monastery at Kailash’s north face.' },
          { day: 'Day 12', text: 'The highest day: Drolma-La pass (5,630 m), descent to Zutulpuk.' },
          { day: 'Day 13', text: 'The kora completed. A quiet evening and a long group conversation.' },
          { day: 'Day 14', text: 'Sunset at sacred Lake Manasarovar.' },
          { day: 'Day 15', text: 'The road back begins — overnight in Saga.' },
          { day: 'Day 16', text: 'Return to Lhasa and flight home.' },
        ],
        dates: [{ when: 'May 28 – Jun 12, 2027', note: 'open for booking' }],
        includes: [
          'Guide and psychologist with the group throughout',
          'Tibet permits and visa support',
          'Accommodation: city hotels, mountain guesthouses',
          'All transfers and jeeps along the route',
          'Group meetings every evening',
        ],
      },
      {
        id: 'nepal',
        intro:
          'Every side of Nepal in ten days: the ancient temples and stupas of Kathmandu, a safari in the jungles of Chitwan where rhinos roam the grasslands, and quiet Pokhara by the lake — with morning yoga and meditation on the shore.',
        program: [
          { day: 'Day 1', text: 'Arrival in Kathmandu. Meet the group over a Nepali dinner.' },
          { day: 'Day 2', text: 'Boudhanath and Swayambhunath: the great stupas and the monkey temple.' },
          { day: 'Day 3', text: 'Bhaktapur — an open-air museum city and its potters’ quarter.' },
          { day: 'Day 4', text: 'Drive to Chitwan — the jungle national park in Nepal’s south.' },
          { day: 'Day 5', text: 'Safari in Chitwan: rhinos, crocodiles and, with luck, a tiger. Sunset canoe on the Rapti river.' },
          { day: 'Day 6', text: 'Drive to Pokhara — the town at the foot of Annapurna.' },
          { day: 'Day 7', text: 'Morning yoga by Lake Phewa, boats and the World Peace Pagoda at sunset.' },
          { day: 'Day 8', text: 'Sunrise at Sarangkot: Annapurna and Machhapuchhre in pink light. Daytime meditation.' },
          { day: 'Day 9', text: 'Free day in Pokhara: paragliding, walks or the quiet lakeside.' },
          { day: 'Day 10', text: 'Return to Kathmandu and flight home.' },
        ],
        dates: [{ when: 'Apr 8–17, 2027', note: 'open for booking' }],
        includes: [
          'Guide and psychologist with the group',
          'Hotel accommodation with breakfasts',
          'All transfers and the Kathmandu–Pokhara drive',
          'Entrance tickets to temples and palaces',
          'Evening group meetings',
        ],
      },
      {
        id: 'nepal-bhutan',
        intro:
          'Two Himalayan countries in one journey: the busy temple-filled Kathmandu Valley and quiet Bhutan — the kingdom that officially measures happiness. The finale is the climb to Taktsang, the monastery on a sheer cliff.',
        program: [
          { day: 'Day 1', text: 'Arrival in Kathmandu. Meet the group over a Nepali dinner.' },
          { day: 'Day 2', text: 'Boudhanath and Pashupatinath: the valley’s main shrines.' },
          { day: 'Day 3', text: 'Flight to Paro (Bhutan) — one of the most beautiful landings in the world. Transfer to Thimphu.' },
          { day: 'Day 4', text: 'Thimphu: Tashichho Dzong, the giant Buddha Dordenma and a traditional village.' },
          { day: 'Day 5', text: 'Dochu-La pass with its 108 stupas, descent into the Punakha valley.' },
          { day: 'Day 6', text: 'Punakha Dzong at the meeting of two rivers, a suspension bridge and rice terraces.' },
          { day: 'Day 7', text: 'Return to Paro. Evening group meeting.' },
          { day: 'Day 8', text: 'The climb to Taktsang — the Tiger’s Nest (3,120 m). The key day of the route.' },
          { day: 'Day 9', text: 'Flight to Kathmandu and onward home.' },
        ],
        dates: [{ when: 'Mar 27 – Apr 4, 2027', note: 'open for booking' }],
        includes: [
          'Guide and psychologist with the group',
          'Bhutan visa and SDF fee',
          'Kathmandu–Paro–Kathmandu flights',
          'Hotel accommodation and all transfers',
          'Evening group meetings',
        ],
      },
      {
        id: 'nepal-tour',
        intro:
          'Nepal without a backpack or altitude: temples, palaces and artisan quarters of the Kathmandu Valley, a Himalayan sunrise in Nagarkot and two quiet days by the lake in Pokhara. Culture and mountains — from your hotel window.',
        program: [
          { day: 'Day 1', text: 'Arrival in Kathmandu. An evening walk through Thamel.' },
          { day: 'Day 2', text: 'Swayambhunath at sunset — the monkey temple above the city.' },
          { day: 'Day 3', text: 'Patan: the palace square, the Golden Temple and metalwork studios.' },
          { day: 'Day 4', text: 'Bhaktapur: the potters’ quarter and juju dhau — the king of yoghurts.' },
          { day: 'Day 5', text: 'Transfer to Nagarkot. Sunset over the eight-thousanders right from the terrace.' },
          { day: 'Day 6', text: 'Himalayan sunrise, transfer to Pokhara.' },
          { day: 'Day 7', text: 'Lake Phewa, the World Peace Pagoda and a free evening by the water.' },
          { day: 'Day 8', text: 'Return to Kathmandu and flight home.' },
        ],
        dates: [
          { when: 'Oct 21–28, 2026', note: 'open for booking' },
          { when: 'Mar 7–14, 2027', note: 'open for booking' },
        ],
        includes: [
          'Guide and psychologist with the group',
          'Hotels with breakfasts along the route',
          'All transfers and entrance tickets',
          'Sunrise in Nagarkot with a view of Everest',
          'Evening group meetings',
        ],
      },
      {
        id: 'nepal-trek',
        intro:
          'Twenty days in the highest region on Earth: three passes above five thousand metres — Kongma-La, Cho-La and Renjo-La, a night above the clouds at Gorak Shep and Everest Base Camp itself. Four eight-thousanders from a single viewpoint.',
        program: [
          { day: 'Day 1', text: 'Arrival in Kathmandu. Gear check, meet the group.' },
          { day: 'Day 2', text: 'Flight to Lukla (2,840 m), walk to Phakding along the Dudh Kosi river.' },
          { day: 'Day 3', text: 'The climb to Namche Bazaar (3,440 m) — the Sherpa capital.' },
          { day: 'Day 4', text: 'Acclimatization day: a viewpoint with the first sight of Everest.' },
          { day: 'Day 5', text: 'Trek to Tengboche (3,860 m) — the region’s main monastery.' },
          { day: 'Day 6', text: 'Trek to Dingboche (4,410 m) beneath the wall of Ama Dablam.' },
          { day: 'Day 7', text: 'Acclimatization: a day climb to Nangkartshang (5,083 m).' },
          { day: 'Day 8', text: 'Trek to Chukhung (4,730 m). Evening group meeting.' },
          { day: 'Day 9', text: 'First pass — Kongma-La (5,535 m). Descent to Lobuche.' },
          { day: 'Day 10', text: 'Trek to Gorak Shep (5,140 m), sunset on Kala Patthar (5,644 m).' },
          { day: 'Day 11', text: 'Everest Base Camp (5,364 m) — the heart of the route.' },
          { day: 'Day 12', text: 'Trek to Dzongla at the foot of the second pass.' },
          { day: 'Day 13', text: 'Cho-La pass (5,420 m), descent into the Gokyo valley.' },
          { day: 'Day 14', text: 'The turquoise Gokyo lakes. A quiet evening by the third lake.' },
          { day: 'Day 15', text: 'The climb to Gokyo Ri (5,357 m): Everest, Lhotse, Makalu and Cho Oyu in one panorama.' },
          { day: 'Day 16', text: 'Third pass — Renjo-La (5,360 m). Descent to Thame.' },
          { day: 'Day 17', text: 'Back to Namche Bazaar. A hot shower and a celebratory dinner.' },
          { day: 'Day 18', text: 'The long descent to Lukla. Final evening in the mountains.' },
          { day: 'Day 19', text: 'Flight to Kathmandu, farewell dinner with the group.' },
          { day: 'Day 20', text: 'Flight home.' },
        ],
        dates: [{ when: 'Apr 20 – May 9, 2027', note: 'open for booking' }],
        includes: [
          'Guide and psychologist with the group',
          'Kathmandu–Lukla–Kathmandu flights',
          'Sagarmatha National Park and Khumbu region permits',
          'Teahouse nights, group porters',
          'Evening group meetings',
        ],
      },
      {
        id: 'cappadocia',
        intro:
          'Eight days between two worlds: dawn balloon flights over Cappadocia’s valleys and the loud, delicious Istanbul. A route we travel ourselves every year, updated with new favourite places.',
        program: [
          { day: 'Day 1', text: 'Arrival, transfer to Göreme. Evening in a cave hotel.' },
          { day: 'Day 2', text: 'Sunrise: hot-air balloon flight. Love Valley and Uçhisar viewpoint.' },
          { day: 'Day 3', text: 'Derinkuyu underground city and a trek through Ihlara Valley.' },
          { day: 'Day 4', text: 'Rose Valley at sunset, a pottery workshop in Avanos.' },
          { day: 'Day 5', text: 'Flight to Istanbul. Sultanahmet: Hagia Sophia and the Blue Mosque.' },
          { day: 'Day 6', text: 'A Bosphorus ferry, Galata and the spices of the Egyptian Bazaar.' },
          { day: 'Day 7', text: 'Free day: hammam, contemporary art, or the Asian side.' },
          { day: 'Day 8', text: 'Flight home.' },
        ],
        dates: [
          { when: 'Apr 18–25, 2027', note: '3 spots left' },
          { when: 'Oct 9–16, 2027', note: 'open for booking' },
        ],
        includes: [
          'Guide and psychologist with the group',
          'Cave hotel in Göreme and hotel in Istanbul',
          'Hot-air balloon flight',
          'Domestic flight and all transfers',
          'Evening group meetings',
        ],
      },
      {
        id: 'georgia',
        intro:
          'Six days of tastes and mountains: family wineries of Kakheti, Svan towers on the horizon and feasts reserved for friends. A gastronomic route away from the tourist trail.',
        program: [
          { day: 'Day 1', text: 'Arrival in Tbilisi. Old town, sulphur baths and the first dinner.' },
          { day: 'Day 2', text: 'Kakheti: a family winery, qvevri and lunch at the winemaker’s home.' },
          { day: 'Day 3', text: 'Sighnaghi — the city of love above the Alazani Valley. Tastings and tone bread.' },
          { day: 'Day 4', text: 'The Georgian Military Highway: Ananuri, the Cross Pass, Kazbegi.' },
          { day: 'Day 5', text: 'Gergeti Church against Mount Kazbek. Return to Tbilisi, farewell feast.' },
          { day: 'Day 6', text: 'Flight home.' },
        ],
        dates: [
          { when: 'Jun 8–13, 2027', note: 'open for booking' },
          { when: 'Sep 19–24, 2027', note: '5 spots left' },
        ],
        includes: [
          'Guide and psychologist with the group',
          'Accommodation: boutique hotels and guesthouses',
          'All tastings and home feasts',
          'Transfers and mountain jeeps',
          'Evening group meetings',
        ],
      },
      {
        id: 'andaman',
        intro:
          'Eleven days on the islands of the Andaman Sea: karst cliffs, quiet lagoons, snorkeling and sunrises worth waking at five for. A warm finale — and time to finally exhale.',
        program: [
          { day: 'Day 1', text: 'Arrival in Phuket. First evening by the sea.' },
          { day: 'Day 2', text: 'Transfer to Krabi, Railay Beach — cliffs rising straight from the water.' },
          { day: 'Day 3', text: 'Kayaks in the mangrove lagoons, sunset on the beach.' },
          { day: 'Day 4', text: 'Ferry to Phi Phi. The viewpoint above the twin bays.' },
          { day: 'Day 5', text: 'Snorkeling at Maya Bay and Monkey Beach.' },
          { day: 'Day 6', text: 'Transfer to Koh Lanta — the quietest island of the route.' },
          { day: 'Day 7', text: 'A day by the sea: beach, massage, sweet idleness.' },
          { day: 'Day 8', text: 'Mu Ko Lanta National Park, the lighthouse at sunset.' },
          { day: 'Day 9', text: 'Flight to Bangkok. Evening in Chinatown.' },
          { day: 'Day 10', text: 'The temples of Bangkok and a farewell rooftop dinner.' },
          { day: 'Day 11', text: 'Flight home.' },
        ],
        dates: [
          { when: 'Jan 15–25, 2027', note: 'open for booking' },
          { when: 'Feb 12–22, 2027', note: '6 spots left' },
        ],
        includes: [
          'Guide and psychologist with the group',
          'Hotels and waterfront bungalows',
          'All ferries, transfers and the domestic flight',
          'Snorkeling and kayaks with instructors',
          'Evening group meetings',
        ],
      },
    ],
    directionsPage: {
      heading: 'Destinations',
      subtitle: 'We only work in regions we know first-hand. Every destination means trusted guides, clear logistics and routes we update regularly.',
      listLabel: 'All regions',
      cards: [
        { country: 'Tibet', text: 'Highlands, monasteries and the kora around sacred Kailash.', image: 'images/tour-tibet.jpg' },
        { country: 'Nepal', text: 'The stupas of Kathmandu and sunrises over Annapurna.', image: 'images/tour-nepal.jpg' },
        { country: 'Bhutan', text: 'Dzongs, the Dochu-La pass and the Tiger’s Nest on a cliff.', image: 'images/tour-bhutan.jpg' },
        { country: 'Türkiye', text: 'Cappadocia, the Lycian Way and Istanbul.', image: 'images/tour-cappadocia.jpg' },
        { country: 'Georgia', text: 'Kakheti, Svaneti and the Georgian Military Highway.', image: 'images/tour-georgia.jpg' },
        { country: 'Thailand', text: 'The islands of the Andaman Sea and Bangkok.', image: 'images/tour-andaman.jpg' },
      ],
    },
    directions: {
      label: 'Geography',
      heading: 'Destinations',
      text: 'We only work in regions we know first-hand. Every destination means trusted guides, clear logistics and routes we update regularly.',
      all: 'All destinations',
      items: [
        { name: 'Tibet', count: '3 routes' },
        { name: 'Nepal', count: '4 routes' },
        { name: 'Bhutan', count: '2 routes' },
        { name: 'Caucasus', count: '5 routes' },
        { name: 'Cappadocia', count: '3 routes' },
        { name: 'Kakheti', count: '2 routes' },
        { name: 'Svaneti', count: '2 routes' },
        { name: 'Lycian Way', count: '1 route' },
        { name: 'Andaman Sea', count: '3 routes' },
        { name: 'Bangkok', count: '2 routes' },
      ],
    },
    why: {
      label: 'Approach',
      heading: 'Why travel with us',
      items: [
        {
          title: 'Original routes',
          text: 'We travel every route ourselves first: checking roads, lodges and guides. Only places we would happily return to make the program.',
        },
        {
          title: 'Small groups',
          text: 'Up to 8 people. That means quiet mornings without crowds, real conversations with the guide and flexibility every single day.',
        },
        {
          title: 'End-to-end logistics',
          text: 'Flights, transfers, permits and insurance — all on us. You get one document with a clear plan and simply pack your bag.',
        },
        {
          title: '24/7 support',
          text: 'A coordinator stays in touch throughout the tour: flight delays, hotel changes or a first-aid kit in the mountains — solved in minutes, not days.',
        },
      ],
    },
    journal: {
      label: 'Blog',
      heading: 'Read before you go',
      items: [
        {
          id: 'cappadocia-calendar',
          tag: 'Travel calendar',
          title: 'When to go to Cappadocia: an honest month-by-month calendar',
          date: 'Sep 18, 2026',
          read: '7 min',
          image: 'images/tour-cappadocia.jpg',
        },
        {
          id: 'tibet-trek',
          tag: 'Tibet',
          title: 'An unhurried trek to Everest: how our route works',
          date: 'Sep 2, 2026',
          read: '11 min',
          image: 'images/tour-tibet.jpg',
        },
        {
          id: 'georgia-food',
          tag: 'Georgia',
          title: 'Georgia for gourmands: seven places that feed you like family',
          date: 'Aug 21, 2026',
          read: '6 min',
          image: 'images/tour-georgia.jpg',
        },
      ],
    },
    blog: {
      subtitle: 'Notes from our team on routes, seasons and the places we love.',
      back: 'All articles',
    },
    articles: [
      {
        id: 'cappadocia-calendar',
        intro:
          'Cappadocia is good almost any time — but “almost” is the keyword. We travel there every year and have put together an honest calendar: when the balloons fly every morning, and when the wind grounds them for a week.',
        body: [
          'April and May are the most predictable months. Nights are still cool, days are around 20°C, the valleys are green, and the balloons take off nine mornings out of ten. Crowds are smaller than in summer, and hotel prices have not yet soared.',
          'June and July mean heat and queues. The balloons fly, but you share the sunrise with five hundred other people at the viewpoint. If you come in summer, stay in Göreme rather than Ürgüp: closer to the launch sites, and the sunrise is right from your hotel terrace.',
          'September and October are our favourite season. The air is clear, the grapes are harvested, and the potters of Avanos work unhurried. October is when we lead our groups: soft light and evenings long enough for walks through Rose Valley.',
          'November is a lottery. Balloons may stay grounded for days, but the underground cities are empty, and snow on the fairy chimneys is a beauty of its own. In winter, come only if you are ready for cancellations in exchange for snowy valleys.',
          'The bottom line: for a guaranteed flight choose April, May or late September. For silence and snow — December, but keep a couple of spare days.',
        ],
      },
      {
        id: 'tibet-trek',
        intro:
          'The main mistake in Tibet is haste. Altitude does not forgive ambition, so our route to Everest and Kailash is built around slow acclimatization, not around ticking off sights.',
        body: [
          'For the first two days we go nowhere at all. Lhasa lies at 3,650 metres, and that is already altitude. We stroll around Barkhor, drink sweet tea in teahouses and give the body time. Only on day three do we drive to Yamdrok Lake.',
          'We reach Rongbuk and Everest’s north face on day five, when 5,000 metres no longer feels frightening. We sleep in the monastery guesthouse: simple conditions, but sunrise over Everest from your window beats any five-star hotel.',
          'The kora around Kailash is three days of walking. Day one is gentle: a trail along the river to Dirapuk. Day two is the hardest and the most beautiful: the Drolma-La pass at 5,630 metres. Day three is short, and by evening we are back in Darchen — a hot shower and a long group conversation.',
          'Every evening on the route holds an hour of silence or talk. In the mountains it works differently than in the city: altitude and fatigue peel away the protective layers, and people speak more honestly. That is not a side effect of the journey — it is the point.',
          'If you doubt you can make it: our pace is step and pause, step and pause. People over 55 with no mountain experience have completed this route. The key is to fill in the health questionnaire honestly and trust the acclimatization.',
        ],
      },
      {
        id: 'georgia-food',
        intro:
          'You cannot understand Georgia through tourist restaurants. The real cuisine lives in homes where bread is baked in a tone oven right in front of you, and toasts last longer than the dinner itself. Seven places where we take our friends.',
        body: [
          'Signalaki in Tbilisi — a courtyard behind a carpet shop in Avlabari. The khinkali are folded in the morning, and by 1 pm they are gone. Come at eleven and order the lamb ones.',
          'In Kakheti we stay with Giorgi, a third-generation winemaker. The qvevri in his marani are older than any of us, and lunch is laid out by his mother: lobio, mtsvadi and homemade suluguni that stretches a metre long.',
          'Sighnaghi: the Okra café at the edge of the city wall. A view over the Alazani Valley, Imeretian khachapuri and chacha served in an unlabelled decanter. Order the seasonal vegetables — they come from the morning market.',
          'In Mestia, Svaneti, it is Nana’s guesthouse. She cooks kubdari with meat only if ordered the evening before, so we let her know in advance. She will also show you how to eat it properly: with your hands, unhurried.',
          'In Kazbegi we skip the hotels and go down to a family in Gergeti. The kharcho simmers in a cauldron over open fire, and neighbours join the feast. Toasts to the mountains, to the road, to the guests — and at some point you realise this is group therapy, Georgian-style.',
          'And two addresses for the road: the bakery in Gudauri at the third kilometre — puri from the tone, impossibly hot; and the teahouse in Pasanauri, where khinkali were born. Simple, loud and very honest.',
        ],
      },
    ],
    team: {
      label: 'People',
      heading: 'Team',
      text: 'Four of us, each responsible for their own region. We never hand tours to contractors — we lead the groups ourselves.',
      items: [
        {
          initials: 'YF',
          name: 'Yulia Fyodorova',
          role: 'Founder, route designer',
          text: '14 years in expedition travel. Hiked the Lycian Way and stood before Everest three times.',
        },
        {
          initials: 'TN',
          name: 'Tenzin Norbu',
          role: 'Guide, Tibet & Nepal',
          text: 'Born in Lhasa. Knows every monastery in the valley and speaks five languages.',
        },
        {
          initials: 'MO',
          name: 'Mark Hovhannisyan',
          role: 'Guide, Caucasus & Georgia',
          text: 'Mountaineer and amateur sommelier. Leads mountain and gastronomic programs.',
        },
        {
          initials: 'AS',
          name: 'Anna Sokolova',
          role: 'Travel coordinator',
          text: 'Handles logistics and on-trip support. Solves any problem with a single call.',
        },
      ],
    },
    lead: {
      label: 'Request',
      heading: 'Plan my trip',
      text: 'Tell us where you want to go — within one business day we will suggest a route, dates and an honest estimate. No plans yet? Just leave your contacts and we will help you choose.',
      bullets: [
        '— We reply within one business day',
        '— Booking held for 3 days with no prepayment',
        '— Full refund for cancellations 30 days before the tour',
      ],
      form: {
        name: 'Name',
        namePlaceholder: 'What should we call you',
        phone: 'Phone',
        phonePlaceholder: '+7 ___ ___-__-__',
        comment: 'Where to',
        commentPlaceholder: 'E.g. Tibet in October, two people',
        legal: 'By submitting, you agree to the personal data processing policy.',
      },
      success: {
        title: 'Request sent',
        text: 'Thank you! A coordinator will reach out within one business day.',
      },
    },
    footer: {
      tagline: 'Made with love for the mountains',
    },
  },
}
