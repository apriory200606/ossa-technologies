// app/page.tsx

'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
// import Turnstile from 'react-turnstile';

export default function OSSATechnologiesWebsite() {
  const languages = {
    ru: {
      heroTitle: 'Инфраструктурные решения для бизнеса',
      heroDesc:
        'Серверы, системы безопасности, дата-центры и IT-инфраструктура enterprise-уровня.',
      contact: 'Связаться с нами',
      solutions: 'Смотреть решения',
    },
    en: {
      heroTitle: 'Enterprise Infrastructure Solutions',
      heroDesc:
        'Servers, security systems, datacenter and enterprise IT infrastructure.',
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

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()

  console.log('FORM SUBMIT')

  setLoading(true)
  setError('')

  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    })

    if (!res.ok) {
      throw new Error('Failed')
    }

    setSuccess(true)

    setName('')
    setEmail('')
    setMessage('')
  } catch (err) {
    setError('Ошибка отправки')
  } finally {
    setLoading(false)
  }
};

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      {/* HEADER */}
      <header className="border-b border-slate-800 sticky top-0 backdrop-blur bg-slate-950/80 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          {/* LOGO */}
          <div className="flex items-center gap-4">
            <Image
              src="/logo.png"
              alt="OSSA Technologies"
              width={52}
              height={52}
              className="object-contain"
              priority
            />

            <div>
              <div className="text-2xl font-bold tracking-widest">OSSA</div>
              <div className="text-xs text-slate-400 tracking-[0.3em] uppercase">
                Technologies
              </div>
            </div>
          </div>

          <nav className="hidden md:flex gap-8 text-sm text-slate-300">
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
            <a href="#catalog" className="hover:text-white transition">
              Каталог
            </a>

            <a href="#about" className="hover:text-white transition">
              О компании
            </a>

            <a href="#services" className="hover:text-white transition">
              Решения
            </a>

            <a href="#advantages" className="hover:text-white transition">
              Преимущества
            </a>

            <a href="#contacts" className="hover:text-white transition">
              Контакты
            </a>
          </nav>

            <a
              href="#contacts"
              className="bg-blue-600 hover:bg-blue-500 transition px-5 py-2 rounded-2xl text-sm font-medium shadow-lg shadow-blue-900/30 inline-flex items-center"
            >
              Получить предложение
            </a>
        </div>
        {mobileMenuOpen && (
  <div className="md:hidden bg-slate-900 border-t border-slate-800 px-6 py-6 space-y-4">
    
    <a href="#catalog" className="block text-slate-300">
      Каталог
    </a>

    <a href="#about" className="block text-slate-300">
      О компании
    </a>

    <a href="#services" className="block text-slate-300">
      Решения
    </a>

    <a href="#contacts" className="block text-slate-300">
      Контакты
    </a>

  </div>
)}
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        
        {/* HERO BACKGROUND IMAGE */}
        <Image
          src="/hero.jpg"
          alt="Datacenter"
          fill
          priority
          className="object-cover opacity-20"
        />

        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-slate-950"></div>

        <div className="max-w-7xl mx-auto px-6 py-28 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 border border-blue-700/40 bg-blue-500/10 px-4 py-2 rounded-full text-sm text-blue-300 mb-6">
              Enterprise Infrastructure Solutions
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight mb-6">
              {currentLang.heroTitle.split('для бизнеса')[0]}
              <span className="text-blue-500"> для бизнеса</span>
            </h1>

            <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mb-10">
              {currentLang.heroDesc}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contacts"
                className="bg-blue-600 hover:bg-blue-500 px-7 py-4 rounded-2xl font-medium transition shadow-xl shadow-blue-900/40 inline-flex items-center justify-center"
              >
                {currentLang.contact}
              </a>

              <a
                href="#services"
                className="border border-slate-700 hover:border-slate-500 px-7 py-4 rounded-2xl font-medium transition text-slate-200 inline-flex items-center justify-center"
              >
                {currentLang.solutions}
              </a>
            </div>
          </div>

          {/* RIGHT HERO CARD */}
          <div>
            <div className="bg-slate-900/90 backdrop-blur border border-slate-800 rounded-[2rem] p-8 shadow-2xl shadow-black/40">
              <div className="grid grid-cols-2 gap-4">
                
                <div className="bg-slate-800 rounded-2xl p-5">
                  <div className="text-blue-400 text-sm mb-2">
                    Infrastructure
                  </div>

                  <div className="text-2xl font-bold">
                    Enterprise
                  </div>
                </div>

                <div className="bg-slate-800 rounded-2xl p-5">
                  <div className="text-blue-400 text-sm mb-2">
                    Security
                  </div>

                  <div className="text-2xl font-bold">
                    24/7
                  </div>
                </div>

                {/* CENTER IMAGE */}
                <div className="bg-slate-800 rounded-2xl p-5 col-span-2 h-56 relative overflow-hidden border border-slate-700">
                  <Image
                    src="/datacenter.jpg"
                    alt="Datacenter"
                    fill
                    className="object-cover opacity-40"
                  />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-7xl font-bold tracking-widest text-blue-500">
                        OSSA
                      </div>

                      <div className="text-slate-300 uppercase tracking-[0.4em] text-xs mt-2">
                        Technologies
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="max-w-7xl mx-auto px-6 py-16 lg:py-24"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}
          <div className="relative h-[500px] rounded-[2rem] overflow-hidden border border-slate-800">
            <Image
              src="/office.jpg"
              alt="OSSA Technologies"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <div className="text-blue-400 uppercase tracking-[0.3em] text-sm mb-4">
              О компании
            </div>

            <h2 className="text-4xl font-bold mb-6">
              Международная технологическая компания
            </h2>

            <p className="text-slate-300 leading-relaxed text-lg mb-6">
              OSSA Technologies специализируется на поставках серверов,
              систем безопасности и IT-инфраструктуры enterprise-класса.
            </p>

            <p className="text-slate-400 leading-relaxed">
              Мы объединяем инженерную экспертизу, прямые поставки из Китая
              и современные технологии для построения надёжной инфраструктуры бизнеса.
            </p>
          </div>

        </div>
      </section>

      {/* CATALOG */}
      <section
        id="catalog"
        className="max-w-7xl mx-auto px-6 py-16 lg:py-24"
      >
        <div className="mb-14">
          <div className="text-blue-400 uppercase tracking-[0.3em] text-sm mb-4">
            Enterprise Catalog
          </div>

          <h2 className="text-4xl font-bold mb-6">
            Популярные решения
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10">

            {/* CARD 1 */}
            <div className="bg-slate-900 border border-slate-800 rounded-[2rem] overflow-hidden">
              <div className="relative h-56">
                <Image
                  src="/servers/server-1.jpg"
                  alt="OSSA Server"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-8">
                <div className="text-blue-500 text-sm mb-3">
                  OSSA Server Line
                </div>

                <div className="text-2xl font-bold mb-4">
                  OSSA-SRV R240
                </div>

                <p className="text-slate-400 mb-6">
                  Rack enterprise server platform for virtualization and AI workloads.
                </p>

                <button className="bg-blue-600 hover:bg-blue-500 transition px-5 py-3 rounded-2xl text-sm">
                  Подробнее
                </button>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="bg-slate-900 border border-slate-800 rounded-[2rem] overflow-hidden">
              <div className="relative h-56">
                <Image
                  src="/servers/security.jpg"
                  alt="AI Security"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-8">
                <div className="text-blue-500 text-sm mb-3">
                  Security Systems
                </div>

                <div className="text-2xl font-bold mb-4">
                  OSSA Vision AI
                </div>

                <p className="text-slate-400 mb-6">
                  AI-based video analytics and enterprise surveillance systems.
                </p>

                <button className="bg-blue-600 hover:bg-blue-500 transition px-5 py-3 rounded-2xl text-sm">
                  Подробнее
                </button>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="bg-slate-900 border border-slate-800 rounded-[2rem] overflow-hidden">
              <div className="relative h-56">
                <Image
                  src="/servers/datacenter.jpg"
                  alt="Datacenter"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-8">
                <div className="text-blue-500 text-sm mb-3">
                  Infrastructure
                </div>

                <div className="text-2xl font-bold mb-4">
                  OSSA Datacenter
                </div>

                <p className="text-slate-400 mb-6">
                  Datacenter infrastructure and enterprise networking solutions.
                </p>

                <a
                  href="#contacts"
                  className="bg-blue-600 hover:bg-blue-500 transition px-5 py-3 rounded-2xl text-sm inline-flex items-center justify-center"
                >
                  Подробнее
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section
        id="contacts"
        className="bg-slate-900 border-t border-slate-800"
      >
      <div className="max-w-7xl mx-auto px-6 py-24">
    
      <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* LEFT */}
      <div>

        <div className="text-blue-400 uppercase tracking-[0.3em] text-sm mb-4">
          Контакты
        </div>

        <h2 className="text-5xl font-bold mb-6">
          Готовы обсудить ваш проект
        </h2>

        <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-xl">
          Свяжитесь с нами для получения коммерческого предложения
          и консультации по инфраструктурным решениям.
        </p>

        <div className="space-y-4 text-slate-300">
          <div>sales@ossa-tech.com</div>
          <div>support@ossa-tech.com</div>
          <div>Telegram / WeChat / WhatsApp</div>
        </div>

      </div>

      {/* RIGHT */}
      <div className="bg-slate-950 border border-slate-800 rounded-[2rem] p-10 shadow-2xl shadow-black/40">

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ваше имя"
            className="w-full bg-slate-900 border border-slate-700 rounded-2xl px-5 py-4 outline-none focus:border-blue-600"
          />

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full bg-slate-900 border border-slate-700 rounded-2xl px-5 py-4 outline-none focus:border-blue-600"
          />

          <textarea
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Опишите ваш проект"
            className="w-full bg-slate-900 border border-slate-700 rounded-2xl px-5 py-4 outline-none focus:border-blue-600"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-500 transition rounded-2xl py-4 font-semibold shadow-xl shadow-blue-900/40 disabled:opacity-50"
          >
            {loading ? 'Отправка...' : 'Отправить запрос'}
          </button>

          {success && (
            <div className="text-green-400">
              Заявка успешно отправлена
            </div>
          )}

          {error && (
            <div className="text-red-400">
              {error}
            </div>
          )}

            </form>

          </div>

        </div>

      </div>
      </section>
    </div>
  );
}