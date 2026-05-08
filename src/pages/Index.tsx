import { useState } from "react";
import Icon from "@/components/ui/icon";

const DASH_IMAGE = "https://cdn.poehali.dev/projects/bd7e7b90-35c3-49cd-913f-4b7db5da15f7/files/adc27d5b-3383-4ce1-9ad1-b1fbb9b82616.jpg";

const Y = "#fec30a";
const B = "#0f0f0f";

const NAV_LINKS = ["Услуги", "Тарифы", "Результаты", "О нас", "Контакты"];

const STATS = [
  { value: "7 лет", label: "на рынке SEO" },
  { value: "430+", label: "сайтов в ТОП" },
  { value: "94%", label: "клиентов продлевают" },
  { value: "30 дней", label: "до первых результатов" },
];

const SERVICES = [
  {
    icon: "Search",
    title: "Продвижение в Яндексе",
    desc: "Выводим сайт в ТОП-10 Яндекса по коммерческим запросам. Работаем с семантикой, структурой и поведенческими факторами.",
  },
  {
    icon: "BarChart2",
    title: "SEO-аудит сайта",
    desc: "Полный технический и контентный аудит. Выявляем ошибки, которые мешают росту позиций, даём чёткий план исправлений.",
  },
  {
    icon: "FileText",
    title: "Контент под SEO",
    desc: "Пишем тексты, которые нравятся и поисковикам, и людям. Оптимизируем структуру страниц и мета-теги.",
  },
  {
    icon: "Link",
    title: "Наращивание ссылок",
    desc: "Безопасное получение качественных обратных ссылок. Только белые методы, без риска санкций.",
  },
  {
    icon: "MapPin",
    title: "Локальное SEO",
    desc: "Продвижение в Яндекс.Картах и геосервисах. Привлекаем клиентов из вашего города или района.",
  },
  {
    icon: "Settings",
    title: "Технический SEO",
    desc: "Скорость загрузки, мобильная версия, структурированные данные, исправление ошибок краулинга.",
  },
];

const TARIFFS = [
  {
    name: "Старт",
    price: "9 900",
    period: "мес",
    desc: "Для небольших сайтов и начинающего бизнеса",
    features: [
      "До 50 запросов",
      "Технический аудит",
      "Оптимизация 5 страниц",
      "Ежемесячный отчёт",
      "Поддержка по email",
    ],
    highlight: false,
  },
  {
    name: "Бизнес",
    price: "24 900",
    period: "мес",
    desc: "Для активно растущего бизнеса",
    features: [
      "До 200 запросов",
      "Полный SEO-аудит",
      "Оптимизация 20 страниц",
      "Контент 4 статьи/мес",
      "Наращивание ссылок",
      "Еженедельный отчёт",
      "Приоритетная поддержка",
    ],
    highlight: true,
  },
  {
    name: "Про",
    price: "49 900",
    period: "мес",
    desc: "Для крупных сайтов и интернет-магазинов",
    features: [
      "Неограниченные запросы",
      "Полный аудит + анализ конкурентов",
      "Оптимизация всех страниц",
      "Контент без ограничений",
      "Агрессивное линкбилдинг",
      "Ежедневная аналитика",
      "Персональный менеджер",
    ],
    highlight: false,
  },
];

const STEPS = [
  { num: "01", title: "Анализ и аудит", text: "Изучаем сайт, нишу и конкурентов. Формируем семантическое ядро и стратегию." },
  { num: "02", title: "Техническая оптимизация", text: "Исправляем ошибки, ускоряем сайт, настраиваем мета-теги и структуру." },
  { num: "03", title: "Контент и ссылки", text: "Создаём SEO-тексты, получаем качественные ссылки, работаем с поведенческими факторами." },
  { num: "04", title: "Рост и отчётность", text: "Отслеживаем позиции и трафик, корректируем стратегию, предоставляем прозрачные отчёты." },
];

const WHY = [
  { icon: "Shield", title: "Только белые методы", text: "Работаем строго в рамках требований Яндекса. Никаких рисков санкций." },
  { icon: "Eye", title: "Полная прозрачность", text: "Еженедельные отчёты с реальными цифрами. Видите каждый рубль и каждую позицию." },
  { icon: "Zap", title: "Результат от 30 дней", text: "Первые движения в позициях уже в первый месяц. Гарантируем рост трафика." },
  { icon: "Users", title: "Команда экспертов", text: "15 специалистов: SEO-аналитики, контентщики, технари и линкбилдеры." },
];

const RESULTS = [
  { site: "Интернет-магазин электроники", before: "82 позиция", after: "ТОП-3", growth: "+340% трафика", months: "6 мес" },
  { site: "Юридическая компания", before: "Не в ТОП-100", after: "ТОП-5", growth: "+180% заявок", months: "4 мес" },
  { site: "Стоматологическая клиника", before: "45 позиция", after: "ТОП-7", growth: "+220% визитов", months: "5 мес" },
];

export default function Index() {
  const [form, setForm] = useState({ name: "", phone: "", site: "" });
  const [sent, setSent] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-white text-[#0f0f0f]" style={{ fontFamily: "'Golos Text', sans-serif" }}>

      {/* ===== NAV ===== */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-black/8">
        <div className="max-w-7xl mx-auto px-5 md:px-10 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 shrink-0">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-sm" style={{ background: Y, color: B, fontFamily: "'Oswald', sans-serif" }}>
              US
            </div>
            <span className="font-bold text-base tracking-wide" style={{ fontFamily: "'Oswald', sans-serif" }}>
              УМНЫЙ<span style={{ color: Y }}>СЕРВИС</span>
            </span>
          </a>

          <nav className="hidden md:flex gap-7 text-sm text-black/55">
            {NAV_LINKS.map((l) => (
              <a key={l} href={`#${l}`} className="hover:text-[#0f0f0f] transition-colors">{l}</a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href="tel:+78001234567" className="hidden md:flex items-center gap-1.5 text-sm font-semibold text-[#0f0f0f]">
              <Icon name="Phone" size={14} style={{ color: Y }} />
              8 800 123-45-67
            </a>
            <button
              className="text-sm font-bold px-4 py-2 rounded-lg transition-all hover:opacity-90"
              style={{ background: Y, color: B }}
            >
              Бесплатный аудит
            </button>
            <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
              <Icon name={menuOpen ? "X" : "Menu"} size={22} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-black/8 bg-white px-5 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((l) => (
              <a key={l} href={`#${l}`} className="text-sm text-black/70 hover:text-[#0f0f0f]" onClick={() => setMenuOpen(false)}>{l}</a>
            ))}
            <a href="tel:+78001234567" className="text-sm font-semibold">8 800 123-45-67</a>
          </div>
        )}
      </header>

      {/* ===== HERO ===== */}
      <section className="pt-16 bg-[#0f0f0f] relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 40px, #fff 40px, #fff 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, #fff 40px, #fff 41px)"
        }} />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-10 blur-[120px]" style={{ background: Y }} />

        <div className="relative max-w-7xl mx-auto px-5 md:px-10 pt-16 pb-0 grid md:grid-cols-2 gap-10 items-center">
          <div className="pb-16 md:pb-20">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6 border" style={{ borderColor: "rgba(254,195,10,0.4)", color: Y, background: "rgba(254,195,10,0.08)" }}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: Y }} />
              Продвижение в Яндексе
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5" style={{ fontFamily: "'Oswald', sans-serif" }}>
              ВЫВЕДЕМ ВАШ САЙТ<br />
              <span style={{ color: Y }}>В ТОП ЯНДЕКСА</span><br />
              ЗА 30 ДНЕЙ
            </h1>

            <p className="text-white/55 text-lg leading-relaxed mb-8 max-w-lg">
              Умные технологии SEO-продвижения. Увеличиваем трафик, заявки и продажи. Только белые методы — без риска санкций.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <button
                className="font-bold px-7 py-4 rounded-xl text-base transition-all hover:scale-105"
                style={{ background: Y, color: B }}
              >
                Получить бесплатный аудит
              </button>
              <button className="border border-white/20 text-white px-7 py-4 rounded-xl text-base hover:border-white/50 transition-all flex items-center justify-center gap-2">
                <Icon name="Play" size={16} />
                Как мы работаем
              </button>
            </div>

            {/* Mini stats */}
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((s, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="text-2xl font-bold" style={{ color: Y, fontFamily: "'Oswald', sans-serif" }}>{s.value}</div>
                  <div className="text-white/40 text-xs leading-tight">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Dashboard image */}
          <div className="relative hidden md:block">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl" style={{ boxShadow: `0 0 80px rgba(254,195,10,0.15)` }}>
              <img src={DASH_IMAGE} alt="SEO аналитика" className="w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f]/60 via-transparent to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-6 rounded-xl px-4 py-3 border border-white/10 backdrop-blur-md bg-white/5">
              <div className="text-xs text-white/50 mb-0.5">Рост трафика</div>
              <div className="text-xl font-bold text-white flex items-center gap-1" style={{ fontFamily: "'Oswald', sans-serif" }}>
                <Icon name="TrendingUp" size={16} style={{ color: Y }} />
                +340%
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TICKER ===== */}
      <div className="py-3 overflow-hidden" style={{ background: Y }}>
        <div className="flex gap-12 text-sm font-bold text-[#0f0f0f] whitespace-nowrap animate-marquee" style={{ animation: "marquee 20s linear infinite" }}>
          {Array(3).fill(["ТОП Яндекса", "Белые методы", "Рост трафика", "SEO-аудит бесплатно", "Результат за 30 дней", "430+ проектов", "Без рисков санкций"]).flat().map((t, i) => (
            <span key={i} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0f0f0f]/40" />
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* ===== SERVICES ===== */}
      <section id="Услуги" className="py-20 max-w-7xl mx-auto px-5 md:px-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: Y }}>
            <div className="h-px w-6" style={{ background: Y }} />
            Что мы делаем
            <div className="h-px w-6" style={{ background: Y }} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "'Oswald', sans-serif" }}>НАШИ УСЛУГИ</h2>
          <p className="text-black/45 mt-2 max-w-xl mx-auto text-sm">Комплексное SEO-продвижение под ключ или отдельные услуги — выбирайте что нужно</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => (
            <div key={i} className="group p-6 rounded-2xl border border-black/8 hover:border-[#fec30a] transition-all duration-300 hover:shadow-[0_4px_30px_rgba(254,195,10,0.1)] bg-white cursor-default">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-colors" style={{ background: "rgba(254,195,10,0.1)" }}>
                <Icon name={s.icon as string} size={20} style={{ color: Y }} />
              </div>
              <h3 className="font-bold text-base mb-2" style={{ fontFamily: "'Oswald', sans-serif" }}>{s.title}</h3>
              <p className="text-black/50 text-sm leading-relaxed">{s.desc}</p>
              <div className="mt-4 flex items-center gap-1 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: Y }}>
                Подробнее <Icon name="ArrowRight" size={12} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== HOW ===== */}
      <section className="py-20 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: Y }}>
              <div className="h-px w-6" style={{ background: Y }} />
              Процесс работы
              <div className="h-px w-6" style={{ background: Y }} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "'Oswald', sans-serif" }}>КАК МЫ РАБОТАЕМ</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {STEPS.map((step, i) => (
              <div key={i} className="relative p-6 rounded-2xl border border-white/8 bg-white/[0.03] hover:border-[#fec30a]/40 transition-all">
                <div className="text-5xl font-bold absolute top-5 right-5 leading-none select-none" style={{ color: "rgba(254,195,10,0.07)", fontFamily: "'Oswald', sans-serif" }}>
                  {step.num}
                </div>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-4 text-xs font-bold" style={{ background: Y, color: B, fontFamily: "'Oswald', sans-serif" }}>
                  {step.num}
                </div>
                <h3 className="font-bold text-white mb-2" style={{ fontFamily: "'Oswald', sans-serif" }}>{step.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TARIFFS ===== */}
      <section id="Тарифы" className="py-20 max-w-7xl mx-auto px-5 md:px-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: Y }}>
            <div className="h-px w-6" style={{ background: Y }} />
            Прозрачные цены
            <div className="h-px w-6" style={{ background: Y }} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "'Oswald', sans-serif" }}>ТАРИФЫ</h2>
          <p className="text-black/45 mt-2 text-sm">Без скрытых платежей. Фиксированная цена с первого дня.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TARIFFS.map((t, i) => (
            <div
              key={i}
              className="relative rounded-2xl p-7 flex flex-col transition-all duration-300"
              style={t.highlight
                ? { background: B, border: `2px solid ${Y}`, boxShadow: `0 8px 40px rgba(254,195,10,0.2)` }
                : { background: "white", border: "1px solid rgba(0,0,0,0.08)" }
              }
            >
              {t.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold" style={{ background: Y, color: B }}>
                  Популярный
                </div>
              )}

              <div className="mb-5">
                <div className="text-sm font-semibold uppercase tracking-wider mb-1" style={{ color: t.highlight ? Y : "rgba(0,0,0,0.4)" }}>
                  {t.name}
                </div>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-4xl font-bold" style={{ color: t.highlight ? "white" : B, fontFamily: "'Oswald', sans-serif" }}>
                    {t.price}
                  </span>
                  <span className="text-sm" style={{ color: t.highlight ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.35)" }}>₽/{t.period}</span>
                </div>
                <p className="text-xs" style={{ color: t.highlight ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.4)" }}>{t.desc}</p>
              </div>

              <ul className="space-y-2.5 flex-1 mb-6">
                {t.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm" style={{ color: t.highlight ? "rgba(255,255,255,0.75)" : "rgba(0,0,0,0.65)" }}>
                    <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: Y }}>
                      <Icon name="Check" size={10} style={{ color: B }} />
                    </div>
                    {f}
                  </li>
                ))}
              </ul>

              <button
                className="w-full py-3.5 rounded-xl font-bold text-sm transition-all hover:opacity-90"
                style={t.highlight
                  ? { background: Y, color: B }
                  : { background: "rgba(0,0,0,0.06)", color: B }
                }
              >
                Выбрать тариф
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ===== RESULTS ===== */}
      <section id="Результаты" className="py-20 bg-[#f7f7f5]">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: Y }}>
              <div className="h-px w-6" style={{ background: Y }} />
              Кейсы
              <div className="h-px w-6" style={{ background: Y }} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "'Oswald', sans-serif" }}>РЕЗУЛЬТАТЫ КЛИЕНТОВ</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {RESULTS.map((r, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-black/8 hover:border-[#fec30a] transition-all hover:shadow-[0_4px_30px_rgba(254,195,10,0.1)]">
                <div className="text-sm font-semibold text-[#0f0f0f] mb-4">{r.site}</div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex-1 text-center p-3 rounded-xl bg-black/4">
                    <div className="text-xs text-black/40 mb-1">Было</div>
                    <div className="font-bold text-sm text-black/60">{r.before}</div>
                  </div>
                  <Icon name="ArrowRight" size={16} style={{ color: Y }} />
                  <div className="flex-1 text-center p-3 rounded-xl" style={{ background: "rgba(254,195,10,0.1)", border: `1px solid rgba(254,195,10,0.3)` }}>
                    <div className="text-xs text-black/40 mb-1">Стало</div>
                    <div className="font-bold text-sm" style={{ color: B }}>{r.after}</div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-sm font-bold" style={{ color: Y }}>
                    <Icon name="TrendingUp" size={14} />
                    {r.growth}
                  </div>
                  <div className="text-xs text-black/35 flex items-center gap-1">
                    <Icon name="Clock" size={11} />
                    {r.months}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY US ===== */}
      <section id="О нас" className="py-20 max-w-7xl mx-auto px-5 md:px-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: Y }}>
              <div className="h-px w-6" style={{ background: Y }} />
              Почему мы
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "'Oswald', sans-serif" }}>
              УМНЫЙ ПОДХОД —<br />
              <span style={{ color: Y }}>РЕАЛЬНЫЕ РЕЗУЛЬТАТЫ</span>
            </h2>
            <p className="text-black/50 text-sm leading-relaxed mb-8">
              Мы не обещаем волшебства. Мы работаем системно, прозрачно и по данным. Каждое решение основано на аналитике, а не догадках.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {WHY.map((w, i) => (
                <div key={i} className="flex gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(254,195,10,0.1)" }}>
                    <Icon name={w.icon as string} size={18} style={{ color: Y }} />
                  </div>
                  <div>
                    <div className="font-bold text-sm mb-1">{w.title}</div>
                    <div className="text-black/45 text-xs leading-relaxed">{w.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Numbers */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { val: "7+", label: "лет опыта в SEO" },
              { val: "430+", label: "успешных проектов" },
              { val: "15", label: "экспертов в команде" },
              { val: "94%", label: "клиентов продлевают договор" },
            ].map((n, i) => (
              <div key={i} className="rounded-2xl p-6 text-center" style={{ background: i === 1 ? B : "#f7f7f5" }}>
                <div className="text-4xl font-bold mb-1" style={{ color: i === 1 ? Y : B, fontFamily: "'Oswald', sans-serif" }}>{n.val}</div>
                <div className="text-xs" style={{ color: i === 1 ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.45)" }}>{n.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FORM ===== */}
      <section id="Контакты" className="py-20 bg-[#0f0f0f] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full blur-[100px] opacity-15" style={{ background: Y }} />
        <div className="relative max-w-2xl mx-auto px-5 md:px-10 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: Y }}>
            <div className="h-px w-6" style={{ background: Y }} />
            Начать продвижение
            <div className="h-px w-6" style={{ background: Y }} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3" style={{ fontFamily: "'Oswald', sans-serif" }}>
            ПОЛУЧИТЕ БЕСПЛАТНЫЙ АУДИТ
          </h2>
          <p className="text-white/45 text-sm mb-8">
            Оставьте заявку — свяжемся в течение часа, проведём аудит сайта и предложим стратегию продвижения
          </p>

          {sent ? (
            <div className="rounded-2xl p-10 border text-center" style={{ borderColor: "rgba(254,195,10,0.3)", background: "rgba(254,195,10,0.05)" }}>
              <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: Y }}>
                <Icon name="Check" size={24} style={{ color: B }} />
              </div>
              <div className="text-white font-bold text-lg mb-2">Заявка отправлена!</div>
              <div className="text-white/45 text-sm">Свяжемся с вами в течение часа</div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="rounded-2xl p-7 border text-left space-y-4" style={{ borderColor: "rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.03)" }}>
              <div>
                <label className="block text-xs text-white/45 mb-1.5">Ваше имя</label>
                <input
                  type="text"
                  required
                  placeholder="Иван Петров"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl text-sm text-white outline-none transition-all"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
                  onFocus={e => e.target.style.borderColor = Y}
                  onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
                />
              </div>
              <div>
                <label className="block text-xs text-white/45 mb-1.5">Телефон</label>
                <input
                  type="tel"
                  required
                  placeholder="+7 (999) 000-00-00"
                  value={form.phone}
                  onChange={e => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl text-sm text-white outline-none transition-all"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
                  onFocus={e => e.target.style.borderColor = Y}
                  onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
                />
              </div>
              <div>
                <label className="block text-xs text-white/45 mb-1.5">Адрес сайта</label>
                <input
                  type="url"
                  placeholder="https://example.ru"
                  value={form.site}
                  onChange={e => setForm({ ...form, site: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl text-sm text-white outline-none transition-all"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
                  onFocus={e => e.target.style.borderColor = Y}
                  onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 rounded-xl font-bold text-sm transition-all hover:opacity-90 hover:scale-[1.01]"
                style={{ background: Y, color: B }}
              >
                Получить бесплатный аудит →
              </button>
              <p className="text-center text-xs text-white/25">Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности</p>
            </form>
          )}
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-[#0a0a0a] border-t border-white/5 py-10">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs" style={{ background: Y, color: B, fontFamily: "'Oswald', sans-serif" }}>US</div>
                <span className="font-bold text-white text-sm" style={{ fontFamily: "'Oswald', sans-serif" }}>УМНЫЙ<span style={{ color: Y }}>СЕРВИС</span></span>
              </div>
              <p className="text-white/35 text-xs leading-relaxed">SEO-продвижение в Яндексе. Умные технологии для реального роста вашего бизнеса.</p>
            </div>
            {[
              { title: "Услуги", links: ["SEO-аудит", "Продвижение в Яндексе", "Контент", "Ссылки", "Локальное SEO"] },
              { title: "Компания", links: ["О нас", "Команда", "Кейсы", "Блог", "Контакты"] },
              { title: "Контакты", links: ["8 800 123-45-67", "info@умныйсервис.рф", "Москва, ул. Примерная 1", "Пн–Пт 9:00–18:00"] },
            ].map((col, i) => (
              <div key={i}>
                <div className="text-white text-xs font-bold uppercase tracking-wider mb-3">{col.title}</div>
                <ul className="space-y-2">
                  {col.links.map((l, j) => (
                    <li key={j}><a href="#" className="text-white/35 text-xs hover:text-white/70 transition-colors">{l}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row justify-between gap-2 items-center">
            <div className="text-white/25 text-xs">© 2024 Умный Сервис. Все права защищены.</div>
            <div className="flex gap-4 text-white/25 text-xs">
              <a href="#" className="hover:text-white/50 transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-white/50 transition-colors">Оферта</a>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
