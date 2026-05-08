import { useState } from "react";
import Icon from "@/components/ui/icon";

const LOGO_IMAGE = "https://cdn.poehali.dev/projects/bd7e7b90-35c3-49cd-913f-4b7db5da15f7/files/c452687c-8fc1-4883-9cf1-d825aa7e8bd8.jpg";
const DASH_IMAGE = "https://cdn.poehali.dev/projects/bd7e7b90-35c3-49cd-913f-4b7db5da15f7/files/adc27d5b-3383-4ce1-9ad1-b1fbb9b82616.jpg";

const Y = "#fec30a";
const B = "#0f0f0f";

const NAV_LINKS = ["Как работает", "Результаты", "Тарифы", "FAQ"];

const STATS = [
  { value: "430+", label: "сайтов уже в ТОП" },
  { value: "30 дней", label: "до первых позиций" },
  { value: "94%", label: "пользователей продлевают" },
  { value: "0 ч.", label: "ручной работы с вас" },
];

const HOW = [
  {
    icon: "Globe",
    title: "Подключаете сайт",
    text: "Вводите адрес сайта, выбираете тематику и регион. Никакого доступа к коду — только URL.",
  },
  {
    icon: "Cpu",
    title: "Сервис всё делает сам",
    text: "Алгоритм анализирует конкурентов, оптимизирует страницы и работает с факторами ранжирования Яндекса.",
  },
  {
    icon: "TrendingUp",
    title: "Наблюдаете за ростом",
    text: "В личном кабинете видите позиции в реальном времени. График идёт вверх — вы просто наблюдаете.",
  },
];

const FEATURES = [
  { icon: "Zap", title: "Полностью автоматически", text: "Никаких SEO-специалистов, подрядчиков и ручной работы. Сервис делает всё сам 24/7." },
  { icon: "BarChart2", title: "Позиции в реальном времени", text: "Личный кабинет показывает текущие позиции по каждому запросу. Данные обновляются ежедневно." },
  { icon: "Shield", title: "Только белые методы", text: "Работаем строго по требованиям Яндекса. Никаких рисков санкций и фильтров." },
  { icon: "Eye", title: "Прозрачная аналитика", text: "Видите каждое действие системы: что сделано, какой результат, какая позиция сейчас." },
];

const VS = [
  { param: "Стоимость в месяц", seo: "от 30 000 ₽", us: "от 2 900 ₽" },
  { param: "Время запуска", seo: "2–4 недели", us: "5 минут" },
  { param: "Прозрачность", seo: "Отчёт раз в месяц", us: "Данные в реальном времени" },
  { param: "Зависимость", seo: "Один человек = риск", us: "Сервис работает 24/7" },
  { param: "Первые результаты", seo: "3–6 месяцев", us: "От 30 дней" },
  { param: "Управление", seo: "Звонки, согласования", us: "Личный кабинет" },
];

const TARIFFS = [
  {
    name: "Старт",
    price: "2 900",
    desc: "Для небольших сайтов",
    features: ["1 сайт", "До 50 запросов", "Обновление позиций раз в 3 дня", "Базовая аналитика"],
    highlight: false,
  },
  {
    name: "Бизнес",
    price: "7 900",
    desc: "Для растущего бизнеса",
    features: ["До 5 сайтов", "До 500 запросов", "Ежедневное обновление позиций", "Полная аналитика", "Приоритетная поддержка"],
    highlight: true,
  },
  {
    name: "Про",
    price: "19 900",
    desc: "Для агентств и крупных сайтов",
    features: ["Неограниченно сайтов", "Неограниченно запросов", "Мониторинг в реальном времени", "API доступ", "Персональный менеджер"],
    highlight: false,
  },
];

const CASES = [
  {
    id: 0,
    niche: "Юридические услуги",
    domain: "pravo-consult.ru",
    period: "Март → Август 2024",
    months: "5 мес",
    trafficGrowth: "+218%",
    topCount: 12,
    queries: [
      { kw: "юрист по недвижимости москва",   was: 54,  now: 3 },
      { kw: "составить договор купли продажи", was: 89,  now: 5 },
      { kw: "юридическая консультация онлайн", was: 43,  now: 2 },
      { kw: "раздел имущества при разводе",    was: 120, now: 7 },
      { kw: "арбитражный юрист цена",          was: 67,  now: 4 },
      { kw: "услуги адвоката по уголовным",    was: 95,  now: 9 },
    ],
    chart: [68, 55, 44, 32, 18, 9, 4],
  },
  {
    id: 1,
    niche: "Стоматология",
    domain: "smile-clinic.ru",
    period: "Январь → Май 2024",
    months: "4 мес",
    trafficGrowth: "+310%",
    topCount: 18,
    queries: [
      { kw: "имплантация зубов под ключ",  was: 78,  now: 3 },
      { kw: "виниры цена москва",          was: 102, now: 6 },
      { kw: "лечение зубов без боли",      was: 56,  now: 2 },
      { kw: "брекеты взрослым стоимость",  was: 88,  now: 5 },
      { kw: "удаление зуба мудрости цена", was: 34,  now: 1 },
      { kw: "протезирование зубов москва", was: 145, now: 8 },
    ],
    chart: [75, 60, 42, 28, 16, 8, 3],
  },
  {
    id: 2,
    niche: "Интернет-магазин",
    domain: "techno-shop.ru",
    period: "Февраль → Август 2024",
    months: "6 мес",
    trafficGrowth: "+420%",
    topCount: 34,
    queries: [
      { kw: "купить iphone 15 pro москва", was: 110, now: 4 },
      { kw: "ноутбук для работы до 50000", was: 87,  now: 3 },
      { kw: "беспроводные наушники sony",  was: 63,  now: 2 },
      { kw: "планшет для ребёнка 2024",    was: 95,  now: 5 },
      { kw: "умная колонка яндекс цена",   was: 72,  now: 3 },
      { kw: "купить телевизор самсунг 55", was: 130, now: 7 },
    ],
    chart: [90, 72, 55, 38, 22, 12, 5],
  },
];

const FAQ = [
  {
    q: "Нужен ли мне доступ к сайту или коду?",
    a: "Нет. Вы просто указываете URL сайта. Всё остальное сервис делает через анализ и внешнюю оптимизацию. Доступ к панели управления сайтом не нужен.",
  },
  {
    q: "Когда будут первые результаты?",
    a: "Первые движения в позициях заметны через 2–4 недели. Устойчивый рост — от 30 дней. Сроки зависят от конкурентности ниши и возраста сайта.",
  },
  {
    q: "Это безопасно для сайта? Не попаду под санкции Яндекса?",
    a: "Сервис использует только белые методы: работа с семантикой, поведенческими факторами и внешними сигналами в рамках требований Яндекса. Санкции исключены.",
  },
  {
    q: "Можно подключить несколько сайтов?",
    a: "Да. На тарифе «Бизнес» — до 5 сайтов, на «Про» — без ограничений. Каждый сайт продвигается отдельно в своём личном кабинете.",
  },
  {
    q: "Что будет после 7 бесплатных дней?",
    a: "После пробного периода вы выбираете подходящий тариф и продолжаете продвижение. Никакого автоматического списания — только если вы сами подключите оплату.",
  },
  {
    q: "Подходит ли для любой ниши?",
    a: "Сервис работает с большинством коммерческих ниш: услуги, e-commerce, клиники, юристы, строительство и другие. Перед стартом алгоритм оценивает конкурентность.",
  },
];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCase, setActiveCase] = useState(0);
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white text-[#0f0f0f]" style={{ fontFamily: "'Golos Text', sans-serif" }}>

      {/* ===== NAV ===== */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-black/8">
        <div className="max-w-7xl mx-auto px-5 md:px-10 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 shrink-0">
            <div className="w-9 h-9 rounded-lg overflow-hidden border-2 flex-shrink-0" style={{ borderColor: Y }}>
              <img src={LOGO_IMAGE} alt="Сео Ракета" className="w-full h-full object-cover" />
            </div>
            <span className="font-bold text-base tracking-wide" style={{ fontFamily: "'Oswald', sans-serif" }}>
              СЕО<span style={{ color: Y }}> РАКЕТА</span>
            </span>
          </a>

          <nav className="hidden md:flex gap-7 text-sm text-black/55">
            {NAV_LINKS.map((l) => (
              <a key={l} href={`#${l}`} className="hover:text-[#0f0f0f] transition-colors">{l}</a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden md:block text-sm font-medium text-black/60 hover:text-black transition-colors">
              Войти
            </button>
            <button className="text-sm font-bold px-4 py-2 rounded-lg transition-all hover:opacity-90" style={{ background: Y, color: B }}>
              7 дней бесплатно
            </button>
            <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
              <Icon name={menuOpen ? "X" : "Menu"} size={22} />
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t border-black/8 bg-white px-5 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((l) => (
              <a key={l} href={`#${l}`} className="text-sm text-black/70 hover:text-[#0f0f0f]" onClick={() => setMenuOpen(false)}>{l}</a>
            ))}
            <button className="text-sm font-bold py-2.5 rounded-lg w-full" style={{ background: Y, color: B }}>
              7 дней бесплатно
            </button>
          </div>
        )}
      </header>

      {/* ===== HERO ===== */}
      <section className="pt-32 pb-20 max-w-7xl mx-auto px-5 md:px-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest mb-5 px-3 py-1.5 rounded-full border" style={{ color: Y, borderColor: "rgba(254,195,10,0.3)", background: "rgba(254,195,10,0.06)" }}>
              <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: Y }} />
              Автоматическое SEO-продвижение
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-5" style={{ fontFamily: "'Oswald', sans-serif" }}>
              ВЫВЕДИ САЙТ<br />
              В ТОП ЯНДЕКСА<br />
              <span style={{ color: Y }}>БЕЗ УСИЛИЙ</span>
            </h1>
            <p className="text-black/55 text-lg leading-relaxed mb-8 max-w-lg">
              Подключаете сайт — сервис сам продвигает его в поиске. Никаких SEO-специалистов, подрядчиков и ручной работы.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <button className="flex items-center justify-center gap-2 font-bold px-6 py-3.5 rounded-xl text-sm transition-all hover:opacity-90" style={{ background: Y, color: B }}>
                <Icon name="Rocket" size={16} />
                Начать — 7 дней бесплатно
              </button>
              <button className="flex items-center justify-center gap-2 text-sm font-medium px-6 py-3.5 rounded-xl border border-black/12 hover:border-black/25 transition-all">
                <Icon name="Play" size={14} />
                Смотреть демо
              </button>
            </div>

            {/* Free period badge */}
            <div className="inline-flex items-center gap-3 px-4 py-3 rounded-xl border border-black/8 bg-[#f7f7f5]">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(254,195,10,0.15)" }}>
                <Icon name="Gift" size={16} style={{ color: Y }} />
              </div>
              <div className="text-xs text-black/55 leading-snug">
                <span className="font-bold text-black">7 дней продвижения бесплатно</span> — без карты, отмена в любой момент
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden border border-black/8 shadow-2xl">
              <img src={DASH_IMAGE} alt="Личный кабинет" className="w-full" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl px-4 py-3 shadow-xl border border-black/8 flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "rgba(16,185,129,0.1)" }}>
                <Icon name="TrendingUp" size={18} className="text-emerald-500" />
              </div>
              <div>
                <div className="text-xs text-black/40">Рост позиций за месяц</div>
                <div className="font-bold text-sm text-emerald-500">+47 запросов в ТОП-10</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="py-12 border-y border-black/6 bg-[#f7f7f5]">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-black/8">
            {STATS.map((s, i) => (
              <div key={i} className="text-center md:px-8">
                <div className="text-3xl md:text-4xl font-black mb-1" style={{ fontFamily: "'Oswald', sans-serif", color: B }}>{s.value}</div>
                <div className="text-xs text-black/45 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MARQUEE ===== */}
      <div className="py-4 overflow-hidden border-b border-black/6" style={{ background: Y }}>
        <div className="flex animate-marquee whitespace-nowrap" style={{ width: "max-content" }}>
          {Array.from({ length: 2 }).map((_, gi) => (
            <div key={gi} className="flex items-center">
              {[
                "Автоматическое продвижение",
                "Рост позиций в Яндексе",
                "Без SEO-специалистов",
                "Личный кабинет 24/7",
                "Первые результаты от 30 дней",
                "7 дней бесплатно",
                "Только белые методы",
                "Прозрачная аналитика",
              ].map((text, i) => (
                <span key={i} className="flex items-center gap-4 px-6 text-sm font-bold uppercase tracking-widest" style={{ color: B }}>
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: B, opacity: 0.4 }} />
                  {text}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ===== КАК РАБОТАЕТ ===== */}
      <section id="Как работает" className="py-24 max-w-7xl mx-auto px-5 md:px-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: Y }}>
            <div className="h-px w-6" style={{ background: Y }} />
            Просто как раз-два-три
            <div className="h-px w-6" style={{ background: Y }} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "'Oswald', sans-serif" }}>КАК ЭТО РАБОТАЕТ</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {HOW.map((h, i) => (
            <div key={i} className="relative">
              {i < HOW.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[calc(50%+40px)] right-[-calc(50%-40px)] h-px border-t-2 border-dashed border-black/10 z-0" />
              )}
              <div className="relative z-10 text-center">
                <div className="inline-flex flex-col items-center">
                  <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-5 relative" style={{ background: "rgba(254,195,10,0.1)" }}>
                    <Icon name={h.icon} size={32} style={{ color: Y }} />
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-black" style={{ background: Y, color: B, fontFamily: "'Oswald', sans-serif" }}>{i + 1}</div>
                  </div>
                  <h3 className="font-bold text-lg mb-2" style={{ fontFamily: "'Oswald', sans-serif" }}>{h.title}</h3>
                  <p className="text-black/50 text-sm leading-relaxed max-w-xs">{h.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="py-24 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "'Oswald', sans-serif" }}>ЧТО ДЕЛАЕТ СЕРВИС</h2>
            <p className="text-white/40 mt-2 text-sm">Всё включено. Вы только наблюдаете.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {FEATURES.map((f, i) => (
              <div key={i} className="rounded-2xl p-6 border border-white/8 hover:border-white/20 transition-all" style={{ background: "rgba(255,255,255,0.03)" }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: "rgba(254,195,10,0.12)" }}>
                  <Icon name={f.icon} size={20} style={{ color: Y }} />
                </div>
                <h3 className="font-bold text-white mb-2 text-sm">{f.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== VS SEO-СПЕЦИАЛИСТ ===== */}
      <section className="py-24 max-w-7xl mx-auto px-5 md:px-10">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: Y }}>
            <div className="h-px w-6" style={{ background: Y }} />
            Сравнение
            <div className="h-px w-6" style={{ background: Y }} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "'Oswald', sans-serif" }}>МЫ VS SEO-СПЕЦИАЛИСТ</h2>
          <p className="text-black/45 mt-2 text-sm">Почему сервис выгоднее найма подрядчика</p>
        </div>

        <div className="rounded-2xl border border-black/8 overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-3 bg-[#f7f7f5] border-b border-black/8">
            <div className="px-6 py-4 text-sm font-semibold text-black/40 uppercase tracking-wider">Параметр</div>
            <div className="px-6 py-4 text-sm font-semibold text-black/40 uppercase tracking-wider text-center border-l border-black/8">SEO-специалист</div>
            <div className="px-6 py-4 text-sm font-bold text-center border-l border-black/8" style={{ color: Y }}>
              <span style={{ fontFamily: "'Oswald', sans-serif" }}>СЕО РАКЕТА</span>
            </div>
          </div>

          {VS.map((row, i) => (
            <div key={i} className={`grid grid-cols-3 border-b border-black/5 ${i % 2 === 0 ? "bg-white" : "bg-[#fafafa]"}`}>
              <div className="px-6 py-4 text-sm font-medium text-black/70">{row.param}</div>
              <div className="px-6 py-4 text-sm text-black/40 text-center border-l border-black/5 flex items-center justify-center gap-1.5">
                <Icon name="X" size={13} className="text-red-400 flex-shrink-0" />
                {row.seo}
              </div>
              <div className="px-6 py-4 text-sm font-semibold text-center border-l border-black/5 flex items-center justify-center gap-1.5" style={{ color: "#16a34a" }}>
                <Icon name="Check" size={13} className="flex-shrink-0" />
                {row.us}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button className="font-bold px-8 py-3.5 rounded-xl text-sm transition-all hover:opacity-90" style={{ background: Y, color: B }}>
            Попробовать 7 дней бесплатно
          </button>
        </div>
      </section>

      {/* ===== КЕЙСЫ — ПОЗИЦИИ ===== */}
      <section id="Результаты" className="py-24 bg-[#f7f7f5]">
        <div className="max-w-7xl mx-auto px-5 md:px-10">

          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: Y }}>
              <div className="h-px w-6" style={{ background: Y }} />
              Топвизор — реальные данные
              <div className="h-px w-6" style={{ background: Y }} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "'Oswald', sans-serif" }}>РОСТ ПОЗИЦИЙ КЛИЕНТОВ</h2>
            <p className="text-black/45 mt-2 text-sm">Реальные запросы, реальные позиции. Данные из Топвизора.</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            {CASES.map((c, i) => (
              <button
                key={c.id}
                onClick={() => setActiveCase(i)}
                className="flex-1 text-left px-5 py-4 rounded-xl border transition-all duration-200"
                style={activeCase === i
                  ? { background: B, borderColor: B, color: "#fff" }
                  : { background: "#fff", borderColor: "rgba(0,0,0,0.1)", color: "rgba(0,0,0,0.45)" }
                }
              >
                <div className="font-bold text-sm" style={{ fontFamily: "'Oswald', sans-serif" }}>{c.niche}</div>
                <div className="text-xs mt-0.5 opacity-50">{c.domain}</div>
              </button>
            ))}
          </div>

          {CASES.map((c, i) => i !== activeCase ? null : (
            <div key={c.id} className="grid lg:grid-cols-3 gap-6">

              <div className="lg:col-span-2 rounded-2xl overflow-hidden border border-black/8 bg-white">
                <div className="px-5 py-4 flex items-center justify-between border-b border-black/8 bg-black/[0.02]">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full" style={{ background: Y }} />
                    <span className="text-sm font-semibold">Снятие позиций — {c.period}</span>
                  </div>
                  <span className="text-xs text-black/30 flex items-center gap-1">
                    <Icon name="BarChart2" size={12} />
                    Топвизор
                  </span>
                </div>

                <div className="grid grid-cols-12 px-5 py-2.5 border-b border-black/5 bg-black/[0.01]">
                  <div className="col-span-6 text-xs text-black/35 uppercase tracking-wider">Поисковый запрос</div>
                  <div className="col-span-2 text-xs text-black/35 uppercase tracking-wider text-center">Было</div>
                  <div className="col-span-2 text-xs text-black/35 uppercase tracking-wider text-center">Стало</div>
                  <div className="col-span-2 text-xs text-black/35 uppercase tracking-wider text-center">Рост</div>
                </div>

                {c.queries.map((q, qi) => {
                  const diff = q.was - q.now;
                  const isTop = q.now <= 10;
                  return (
                    <div key={qi} className="grid grid-cols-12 px-5 py-3.5 border-b border-black/5 hover:bg-black/[0.015] transition-colors items-center">
                      <div className="col-span-6 text-sm text-black/75 truncate pr-4">{q.kw}</div>
                      <div className="col-span-2 text-center">
                        <span className="text-sm font-mono text-black/35 bg-black/5 px-2 py-0.5 rounded">{q.was}</span>
                      </div>
                      <div className="col-span-2 text-center">
                        <span className="text-sm font-bold font-mono px-2 py-0.5 rounded"
                          style={isTop
                            ? { background: "rgba(254,195,10,0.15)", color: "#b8870a" }
                            : { background: "rgba(0,0,0,0.05)", color: "rgba(0,0,0,0.6)" }
                          }
                        >
                          {q.now}
                        </span>
                      </div>
                      <div className="col-span-2 text-center flex items-center justify-center gap-1">
                        <Icon name="ArrowUp" size={12} className="text-emerald-500" />
                        <span className="text-sm font-bold text-emerald-600">+{diff}</span>
                      </div>
                    </div>
                  );
                })}

                <div className="px-5 py-3 flex items-center gap-4 bg-black/[0.01]">
                  <div className="flex items-center gap-1.5 text-xs text-black/35">
                    <div className="w-3 h-3 rounded-sm" style={{ background: "rgba(254,195,10,0.2)", border: "1px solid rgba(254,195,10,0.5)" }} />
                    ТОП-10
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-black/35">
                    <Icon name="ArrowUp" size={11} className="text-emerald-500" />
                    Рост позиции
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="rounded-2xl p-5 border border-black/8 bg-white">
                  <div className="text-xs text-black/40 uppercase tracking-wider mb-4">Динамика средней позиции</div>
                  <div className="flex items-end gap-1.5 h-24 mb-3">
                    {c.chart.map((val, ci) => {
                      const maxVal = Math.max(...c.chart);
                      const heightPct = ((maxVal - val) / maxVal) * 100;
                      const isLast = ci === c.chart.length - 1;
                      return (
                        <div key={ci} className="flex-1 flex flex-col justify-end h-full">
                          <div className="w-full rounded-t transition-all"
                            style={{ height: `${Math.max(8, heightPct)}%`, background: isLast ? Y : "rgba(254,195,10,0.25)" }}
                          />
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex justify-between text-xs text-black/30">
                    <span>Старт</span>
                    <span style={{ color: Y }}>Сейчас</span>
                  </div>
                </div>

                <div className="rounded-2xl p-5 border border-black/8 bg-white space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="text-xs text-black/40">Рост трафика</div>
                    <div className="text-xl font-bold text-emerald-600" style={{ fontFamily: "'Oswald', sans-serif" }}>{c.trafficGrowth}</div>
                  </div>
                  <div className="h-px bg-black/5" />
                  <div className="flex justify-between items-center">
                    <div className="text-xs text-black/40">Запросов в ТОП-10</div>
                    <div className="text-xl font-bold" style={{ fontFamily: "'Oswald', sans-serif" }}>{c.topCount}</div>
                  </div>
                  <div className="h-px bg-black/5" />
                  <div className="flex justify-between items-center">
                    <div className="text-xs text-black/40">Срок</div>
                    <div className="text-xl font-bold" style={{ fontFamily: "'Oswald', sans-serif" }}>{c.months}</div>
                  </div>
                </div>

                <button className="w-full py-3.5 rounded-xl font-bold text-sm transition-all hover:opacity-90" style={{ background: Y, color: B }}>
                  Попробовать 7 дней бесплатно
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== ТАРИФЫ ===== */}
      <section id="Тарифы" className="py-24 max-w-7xl mx-auto px-5 md:px-10">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: Y }}>
            <div className="h-px w-6" style={{ background: Y }} />
            Подписка
            <div className="h-px w-6" style={{ background: Y }} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "'Oswald', sans-serif" }}>ТАРИФЫ</h2>
          <p className="text-black/45 mt-2 text-sm">7 дней продвижения бесплатно на любом тарифе · Без карты</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {TARIFFS.map((t, i) => (
            <div
              key={i}
              className="rounded-2xl p-7 border transition-all"
              style={t.highlight
                ? { background: B, borderColor: B, color: "#fff" }
                : { background: "#fff", borderColor: "rgba(0,0,0,0.08)" }
              }
            >
              {t.highlight && (
                <div className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-4" style={{ background: Y, color: B }}>
                  Популярный
                </div>
              )}
              <div className="text-sm font-semibold mb-1" style={{ color: t.highlight ? "rgba(255,255,255,0.6)" : "rgba(0,0,0,0.45)" }}>{t.desc}</div>
              <div className="text-2xl font-black mb-1" style={{ fontFamily: "'Oswald', sans-serif" }}>{t.name}</div>
              <div className="flex items-end gap-1 mb-6">
                <span className="text-4xl font-black" style={{ fontFamily: "'Oswald', sans-serif", color: t.highlight ? Y : B }}>{t.price}</span>
                <span className="text-sm mb-1" style={{ color: t.highlight ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.35)" }}>₽/мес</span>
              </div>

              <div className="space-y-3 mb-7">
                {t.features.map((f, fi) => (
                  <div key={fi} className="flex items-center gap-2.5 text-sm">
                    <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: t.highlight ? "rgba(254,195,10,0.2)" : "rgba(0,0,0,0.05)" }}>
                      <Icon name="Check" size={10} style={{ color: t.highlight ? Y : "rgba(0,0,0,0.5)" }} />
                    </div>
                    <span style={{ color: t.highlight ? "rgba(255,255,255,0.75)" : "rgba(0,0,0,0.65)" }}>{f}</span>
                  </div>
                ))}
              </div>

              <button
                className="w-full py-3 rounded-xl font-bold text-sm transition-all hover:opacity-90"
                style={t.highlight
                  ? { background: Y, color: B }
                  : { background: "rgba(0,0,0,0.06)", color: B }
                }
              >
                7 дней бесплатно
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section id="FAQ" className="py-24 bg-[#f7f7f5]">
        <div className="max-w-3xl mx-auto px-5 md:px-10">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: Y }}>
              <div className="h-px w-6" style={{ background: Y }} />
              Вопросы и ответы
              <div className="h-px w-6" style={{ background: Y }} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "'Oswald', sans-serif" }}>ЧАСТЫЕ ВОПРОСЫ</h2>
          </div>

          <div className="space-y-3">
            {FAQ.map((item, i) => (
              <div key={i} className="rounded-2xl border border-black/8 bg-white overflow-hidden">
                <button
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 hover:bg-black/[0.01] transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-semibold text-sm">{item.q}</span>
                  <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-all" style={{ background: openFaq === i ? Y : "rgba(0,0,0,0.06)" }}>
                    <Icon name={openFaq === i ? "Minus" : "Plus"} size={12} style={{ color: openFaq === i ? B : "rgba(0,0,0,0.5)" }} />
                  </div>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5">
                    <div className="h-px bg-black/5 mb-4" />
                    <p className="text-sm text-black/55 leading-relaxed">{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-24 bg-[#0f0f0f]">
        <div className="max-w-2xl mx-auto px-5 md:px-10 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest mb-5 px-3 py-1.5 rounded-full border" style={{ color: Y, borderColor: "rgba(254,195,10,0.25)", background: "rgba(254,195,10,0.06)" }}>
            <Icon name="Gift" size={12} style={{ color: Y }} />
            7 дней продвижения — бесплатно
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4" style={{ fontFamily: "'Oswald', sans-serif" }}>
            НАЧНИТЕ РАСТИ<br />
            <span style={{ color: Y }}>ПРЯМО СЕЙЧАС</span>
          </h2>
          <p className="text-white/45 mb-10 text-sm">
            Введите email — мы пришлём инструкцию по подключению первого сайта
          </p>

          {emailSent ? (
            <div className="flex items-center justify-center gap-2 text-emerald-400 font-semibold">
              <Icon name="CheckCircle" size={20} />
              Отлично! Проверьте почту
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); if (email) setEmailSent(true); }}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ваш@email.ru"
                className="flex-1 px-4 py-3.5 rounded-xl text-sm outline-none bg-white/8 border border-white/12 text-white placeholder-white/30 focus:border-white/30 transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3.5 rounded-xl font-bold text-sm transition-all hover:opacity-90 whitespace-nowrap"
                style={{ background: Y, color: B }}
              >
                7 дней бесплатно
              </button>
            </form>
          )}

          <div className="mt-5 flex items-center justify-center gap-4 text-xs text-white/25">
            <span className="flex items-center gap-1"><Icon name="Check" size={11} />7 дней бесплатно</span>
            <span className="flex items-center gap-1"><Icon name="Check" size={11} />Без карты</span>
            <span className="flex items-center gap-1"><Icon name="Check" size={11} />Отмена в 1 клик</span>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="py-8 border-t border-black/8">
        <div className="max-w-7xl mx-auto px-5 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md overflow-hidden border flex-shrink-0" style={{ borderColor: Y }}>
              <img src={LOGO_IMAGE} alt="Сео Ракета" className="w-full h-full object-cover" />
            </div>
            <span className="font-bold text-sm" style={{ fontFamily: "'Oswald', sans-serif" }}>
              СЕО<span style={{ color: Y }}> РАКЕТА</span>
            </span>
          </div>
          <div className="text-xs text-black/35">© 2024 СЕО Ракета. Все права защищены.</div>
          <div className="flex gap-5 text-xs text-black/40">
            <a href="#" className="hover:text-black transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-black transition-colors">Оферта</a>
          </div>
        </div>
      </footer>

    </div>
  );
}