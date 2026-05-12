// OSSA Technologies — Production Ready Next.js Structure
// Recommended stack:
// - Next.js 15+
// - React
// - Tailwind CSS
// - Vercel
// - TypeScript
// - App Router
//
// Recommended project structure:
//
// app/
// ├── page.tsx
// ├── about/page.tsx
// ├── services/page.tsx
// ├── servers/page.tsx
// ├── security/page.tsx
// ├── contacts/page.tsx
// ├── globals.css
// └── layout.tsx
//
// components/
// ├── Header.tsx
// ├── Footer.tsx
// ├── Hero.tsx
// ├── Services.tsx
// ├── Catalog.tsx
// └── ContactForm.tsx
//
// public/
// ├── logo.svg
// ├── hero.jpg
// ├── datacenter.jpg
// └── servers/
//
// Deployment:
// 1. Install Node.js
// 2. Create Next.js project
// 3. Copy this file into app/page.tsx
// 4. Run npm install
// 5. Run npm run dev
// 6. Deploy to Vercel
//
// SEO recommendations:
// - Add metadata in layout.tsx
// - Use keywords: servers, datacenter, AI surveillance, infrastructure
// - Add English version later
// - Connect Google Search Console and Yandex Webmaster
//
// Recommended domains:
// - ossa-tech.com
// - ossa-tech.ru
//
// Corporate email:
// - sales@ ossa-tech.com
// - support@ ossa-tech.com
//
// Suggested integrations:
// - Telegram Bot
// - Bitrix24 CRM
// - Google Analytics
// - Yandex Metrika
//
// Production recommendations:
// - Cloudflare CDN
// - SSL certificate
// - Daily backups
// - Corporate VPS later
//
export default function OSSATechnologiesWebsite() {
  const languages = {
    ru: {
      heroTitle: 'Инфраструктурные решения для бизнеса',
      heroDesc: 'Серверы, системы безопасности, дата-центры и IT-инфраструктура enterprise-уровня.',
      contact: 'Связаться с нами',
      solutions: 'Смотреть решения',
    },
    en: {
      heroTitle: 'Enterprise Infrastructure Solutions',
      heroDesc: 'Servers, security systems, datacenter and enterprise IT infrastructure.',
      contact: 'Contact Us',
      solutions: 'View Solutions',
    },
  };

  const currentLang = languages.ru;

  const services = [
    {
      title: 'Серверные решения',
      desc: 'Поставка, настройка и внедрение enterprise серверов и инфраструктуры.',
    },
    {
      title: 'Видеонаблюдение',
      desc: 'IP-видеонаблюдение, AI-аналитика и системы мониторинга.',
    },
    {
      title: 'СКУД и безопасность',
      desc: 'Контроль доступа, интеграция систем безопасности и защита объектов.',
    },
    {
      title: 'IT-инфраструктура',
      desc: 'Сети, дата-центры, коммутация и корпоративные IT-решения.',
    },
    {
      title: 'Техническая поддержка',
      desc: 'Сервисное сопровождение и удалённая поддержка 24/7.',
    },
    {
      title: 'OEM и Китай',
      desc: 'Прямые поставки оборудования и OEM-производство под брендом OSSA.',
    },
  ];

  const advantages = [
    'Прямые поставки из Китая',
    'Enterprise-подход',
    'Инженерная экспертиза',
    'Работа по РФ и СНГ',
    'Интеграция под ключ',
    'Поддержка и сервис',
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      <header className="border-b border-slate-800 sticky top-0 backdrop-blur bg-slate-950/80 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <div className="text-3xl font-bold tracking-widest">OSSA</div>
            <div className="text-xs text-slate-400 tracking-[0.3em] uppercase">
              Technologies
            </div>
          </div>

          <nav className="hidden md:flex gap-8 text-sm text-slate-300">
            <a href="#catalog" className="hover:text-white transition">Каталог</a>
            <a href="#about" className="hover:text-white transition">О компании</a>
            <a href="#services" className="hover:text-white transition">Решения</a>
            <a href="#advantages" className="hover:text-white transition">Преимущества</a>
            <a href="#contacts" className="hover:text-white transition">Контакты</a>
          </nav>

          <button className="bg-blue-600 hover:bg-blue-500 transition px-5 py-2 rounded-2xl text-sm font-medium shadow-lg shadow-blue-900/30">
            Получить предложение
          </button>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-slate-950"></div>

        <div className="max-w-7xl mx-auto px-6 py-28 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 border border-blue-700/40 bg-blue-500/10 px-4 py-2 rounded-full text-sm text-blue-300 mb-6">
              Enterprise Infrastructure Solutions
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight mb-6">
              {currentLang.heroTitle.split('для бизнеса')[0]}
              <span className="text-blue-500"> для бизнеса</span>
            </h1>

            <p className="text-slate-300 text-lg leading-relaxed max-w-xl mb-10">
              {currentLang.heroDesc}
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-600 hover:bg-blue-500 px-7 py-4 rounded-2xl font-medium transition shadow-xl shadow-blue-900/40">
                {currentLang.contact}
              </button>

              <button className="border border-slate-700 hover:border-slate-500 px-7 py-4 rounded-2xl font-medium transition text-slate-200">
                {currentLang.solutions}
              </button>
            </div>
          </div>

          <div>
            <div className="bg-slate-900 border border-slate-800 rounded-[2rem] p-8 shadow-2xl shadow-black/40">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-800 rounded-2xl p-5">
                  <div className="text-blue-400 text-sm mb-2">Infrastructure</div>
                  <div className="text-2xl font-bold">Enterprise</div>
                </div>

                <div className="bg-slate-800 rounded-2xl p-5">
                  <div className="text-blue-400 text-sm mb-2">Security</div>
                  <div className="text-2xl font-bold">24/7</div>
                </div>

                <div className="bg-slate-800 rounded-2xl p-5 col-span-2 h-44 flex items-center justify-center border border-slate-700">
                  <div className="text-center">
                    <div className="text-7xl font-bold tracking-widest text-blue-500">OSSA</div>
                    <div className="text-slate-400 uppercase tracking-[0.4em] text-xs mt-2">
                      Technologies
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-blue-400 uppercase tracking-[0.3em] text-sm mb-4">
              О компании
            </div>

            <h2 className="text-4xl font-bold mb-6">
              Международная технологическая компания
            </h2>

            <p className="text-slate-300 leading-relaxed text-lg mb-6">
              OSSA Technologies специализируется на поставках серверов, систем безопасности и IT-инфраструктуры enterprise-класса.
            </p>

            <p className="text-slate-400 leading-relaxed">
              Мы объединяем инженерную экспертизу, прямые поставки из Китая и современные технологии для построения надёжной инфраструктуры бизнеса.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {advantages.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:border-blue-700/50 transition"
              >
                <div className="text-blue-500 text-3xl font-bold mb-4">0{idx + 1}</div>
                <div className="text-slate-200 font-medium">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="catalog" className="max-w-7xl mx-auto px-6 py-24">
        <div className="mb-14">
          <div className="text-blue-400 uppercase tracking-[0.3em] text-sm mb-4">
            Enterprise Catalog
          </div>

          <h2 className="text-4xl font-bold mb-6">
            Популярные решения
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            <div className="bg-slate-900 border border-slate-800 rounded-[2rem] p-8">
              <div className="text-blue-500 text-sm mb-3">OSSA Server Line</div>
              <div className="text-2xl font-bold mb-4">OSSA-SRV R240</div>
              <p className="text-slate-400 mb-6">
                Rack enterprise server platform for virtualization and AI workloads.
              </p>
              <button className="bg-blue-600 hover:bg-blue-500 transition px-5 py-3 rounded-2xl text-sm">
                Подробнее
              </button>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-[2rem] p-8">
              <div className="text-blue-500 text-sm mb-3">Security Systems</div>
              <div className="text-2xl font-bold mb-4">OSSA Vision AI</div>
              <p className="text-slate-400 mb-6">
                AI-based video analytics and enterprise surveillance systems.
              </p>
              <button className="bg-blue-600 hover:bg-blue-500 transition px-5 py-3 rounded-2xl text-sm">
                Подробнее
              </button>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-[2rem] p-8">
              <div className="text-blue-500 text-sm mb-3">Infrastructure</div>
              <div className="text-2xl font-bold mb-4">OSSA Datacenter</div>
              <p className="text-slate-400 mb-6">
                Datacenter infrastructure and enterprise networking solutions.
              </p>
              <button className="bg-blue-600 hover:bg-blue-500 transition px-5 py-3 rounded-2xl text-sm">
                Подробнее
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-slate-900/50 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="mb-14">
            <div className="text-blue-400 uppercase tracking-[0.3em] text-sm mb-4">
              Решения
            </div>

            <h2 className="text-4xl font-bold">
              Основные направления
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-slate-950 border border-slate-800 rounded-[2rem] p-8 hover:border-blue-700/40 hover:-translate-y-1 transition-all"
              >
                <div className="text-blue-500 text-5xl font-bold mb-6">
                  0{idx + 1}
                </div>

                <h3 className="text-2xl font-semibold mb-4">
                  {service.title}
                </h3>

                <p className="text-slate-400 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="advantages" className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="text-blue-400 uppercase tracking-[0.3em] text-sm mb-4">
            Почему OSSA Technologies
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Надёжная инфраструктура для критически важных задач
          </h2>

          <p className="text-slate-400 text-lg leading-relaxed">
            Мы строим масштабируемые решения для производств, агробизнеса, складов, офисов и enterprise-клиентов.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="bg-slate-900 border border-slate-800 rounded-[2rem] p-10">
            <div className="text-5xl font-bold text-blue-500 mb-4">24/7</div>
            <div className="text-2xl font-semibold mb-4">Поддержка</div>
            <p className="text-slate-400 leading-relaxed">
              Постоянный мониторинг и сопровождение инфраструктуры.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-[2rem] p-10">
            <div className="text-5xl font-bold text-blue-500 mb-4">OEM</div>
            <div className="text-2xl font-semibold mb-4">Китай</div>
            <p className="text-slate-400 leading-relaxed">
              Прямые поставки и OEM-производство под брендом OSSA.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-[2rem] p-10">
            <div className="text-5xl font-bold text-blue-500 mb-4">AI</div>
            <div className="text-2xl font-semibold mb-4">Аналитика</div>
            <p className="text-slate-400 leading-relaxed">
              Интеллектуальные системы видеонаблюдения и безопасности.
            </p>
          </div>
        </div>
      </section>

      <section id="contacts" className="bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-blue-400 uppercase tracking-[0.3em] text-sm mb-4">
                Контакты
              </div>

              <h2 className="text-5xl font-bold mb-6">
                Готовы обсудить ваш проект
              </h2>

              <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-xl">
                Свяжитесь с нами для получения коммерческого предложения и консультации по инфраструктурным решениям.
              </p>

              <div className="space-y-4 text-slate-300">
                <div>sales@ossa-tech.com</div>
                <div>support@ossa-tech.com</div>
                <div>Telegram / WeChat / WhatsApp</div>
              </div>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-[2rem] p-10 shadow-2xl shadow-black/40">
              <div className="space-y-5">
                <input
                  placeholder="Ваше имя"
                  className="w-full bg-slate-900 border border-slate-700 rounded-2xl px-5 py-4 outline-none focus:border-blue-600"
                />

                <input
                  placeholder="Email"
                  className="w-full bg-slate-900 border border-slate-700 rounded-2xl px-5 py-4 outline-none focus:border-blue-600"
                />

                <textarea
                  rows={5}
                  placeholder="Опишите ваш проект"
                  className="w-full bg-slate-900 border border-slate-700 rounded-2xl px-5 py-4 outline-none focus:border-blue-600"
                />

                <button className="w-full bg-blue-600 hover:bg-blue-500 transition rounded-2xl py-4 font-semibold shadow-xl shadow-blue-900/40">
                  Отправить запрос
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row gap-6 items-center justify-between">
          <div>
            <div className="text-2xl font-bold tracking-widest"> OSSA </div>
            <div className="text-xs uppercase tracking-[0.3em] text-slate-500">
              Technologies
            </div>
          </div>

          <div className="text-slate-500 text-sm text-center">
            Infrastructure. Intelligence. Integrity.
          </div>

          <div className="text-slate-600 text-sm">
            © 2026 OSSA Technologies
          </div>
        </div>
      </footer>
    </div>
  );
}
