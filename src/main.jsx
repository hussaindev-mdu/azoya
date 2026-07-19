import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  BookOpenText,
  Check,
  ChevronRight,
  Clock3,
  Gem,
  Heart,
  Images,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Moon,
  Phone,
  Ruler,
  Scissors,
  Shirt,
  Sparkles,
  Store,
  Sun,
  Wand2,
} from 'lucide-react';
import './styles.css';

const workflow = [
  {
    title: 'Raw Material',
    text: 'Premium silk, cotton-silk, zari borders, blouse fabric, and lining are selected for the right age and fit.',
    icon: Gem,
  },
  {
    title: 'Cutting',
    text: 'Measurements are shaped into neat panels so the skirt fall, blouse balance, and comfort stay precise.',
    icon: Scissors,
  },
  {
    title: 'Aari / Emb Work',
    text: 'Aari, thread, stone, and festive embroidery details are crafted to match traditional South Indian styling.',
    icon: Wand2,
  },
  {
    title: 'Stitching',
    text: 'Each dress is stitched with soft finishing, age-friendly proportions, and movement for celebrations.',
    icon: Shirt,
  },
  {
    title: 'Pleating Iron',
    text: 'Pleats are pressed cleanly so the pattu pavadai keeps its graceful volume and ready-to-wear shape.',
    icon: Sparkles,
  },
  {
    title: 'Trimming',
    text: 'Loose threads, edge details, and extra allowance are trimmed for a neat boutique finish.',
    icon: Check,
  },
  {
    title: 'Finishing',
    text: 'Final checks cover lining, hooks, borders, embroidery, fall, and comfort before packing.',
    icon: Heart,
  },
  {
    title: 'Stock & Sale',
    text: 'Finished pieces move into stock for quick purchase, festive collections, and size-based selections.',
    icon: Store,
  },
];

const journey = [
  {
    year: 'Early 1970s',
    title: 'A humble beginning in Madurai',
    text: 'Sana Creation traces its roots to a 10x10 ft shop on Elukadal Street, Madurai, founded by Late P. A. Kamarudeen with hope, determination, and commitment to family.',
  },
  {
    year: 'Next generation',
    title: 'The family dream moved forward',
    text: 'His sons K. Mubarak Ali, Mohamed Sithik, and Sathik Ali joined the business at a young age, manufacturing men\'s garments and travelling through Madurai and Erode markets.',
  },
  {
    year: '1980',
    title: 'ASIYAS was established',
    text: 'The family founded ASIYAS, a girls\' garment manufacturing unit in Madurai. What began with five employees grew into a thriving enterprise.',
  },
  {
    year: 'Today',
    title: 'Azoya Pattu Pavadai reaches Tamil Nadu',
    text: 'Azoya Pattu Pavadai blends Tamil heritage with contemporary elegance and is available through leading retail stores across Tamil Nadu.',
  },
];

const collections = [
  {
    name: 'Azoya Pattu Pavadai ™',
    detail: 'Premium traditional girls\' wear with silk skirts, zari borders, festive blouse sets, and rich pleating.',
    color: 'from-azoya-rose to-azoya-gold',
  },
  {
    name: 'Rajakumari ®',
    detail: 'A princess-inspired girls\' wear line designed for celebrations, confidence, and timeless family memories.',
    color: 'from-azoya-teal to-azoya-lotus',
  },
  {
    name: 'Modern Traditional',
    detail: 'Comfortable contemporary cuts with South Indian detailing for birthdays, family events, and functions.',
    color: 'from-azoya-leaf to-azoya-gold',
  },
];

const sizes = ['6M', '1Y', '2Y', '3-5Y', '6-9Y', '10-12Y', '13-15Y'];

function pageFromPath(pathname) {
  if (pathname === '/about') return 'about';
  if (pathname === '/gallery') return 'gallery';
  if (pathname === '/contact') return 'contact';
  return 'home';
}

const galleryImages = [
  {
    src: '/media/gallery/azoya-gallery-01.jpeg',
    title: 'Azoya Pattu Pavadai',
    detail: 'Traditional silk finish with festive detailing.',
  },
  {
    src: '/media/gallery/azoya-gallery-02.jpeg',
    title: 'Rajakumari',
    detail: 'Princess-inspired occasion wear for girls.',
  },
  {
    src: '/media/gallery/azoya-gallery-03.jpeg',
    title: 'Celebration Wear',
    detail: 'Designed for birthdays, weddings, and family functions.',
  },
  {
    src: '/media/gallery/azoya-gallery-04.jpeg',
    title: 'Tamil Heritage',
    detail: 'Traditional styling shaped for modern comfort.',
  },
  {
    src: '/media/gallery/azoya-gallery-05.jpeg',
    title: 'Boutique Finish',
    detail: 'Pleating, trimming, and finishing ready for retail.',
  },
  {
    src: '/media/gallery/azoya-gallery-06.jpeg',
    title: 'Girls Wear',
    detail: 'Crafted for ages from 6 months to 15 years.',
  },
];

function GlassButton({ children, href, onClick, variant = 'primary' }) {
  const base =
    'inline-flex h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition duration-200 focus:outline-none focus:ring-4 focus:ring-azoya-lotus/25';
  const styles =
    variant === 'primary'
      ? 'bg-azoya-ink text-white shadow-glow hover:-translate-y-0.5 hover:bg-black dark:bg-white dark:text-azoya-ink dark:hover:bg-white/100'
      : 'border border-white/60 bg-white/50 text-azoya-ink backdrop-blur-xl hover:bg-white/70 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/20';

  return (
    <a className={`${base} ${styles}`} href={href} onClick={onClick}>
      {children}
    </a>
  );
}

function ThemeToggle({ theme, toggleTheme }) {
  const isDark = theme === 'dark';
  const Icon = isDark ? Sun : Moon;

  return (
    <button
      className="grid h-10 w-10 place-items-center rounded-full border border-white/60 bg-white/60 text-azoya-ink shadow-sm backdrop-blur-xl transition hover:bg-white/100 focus:outline-none focus:ring-4 focus:ring-azoya-lotus/25 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      title={isDark ? 'Light theme' : 'Dark theme'}
    >
      <Icon className="h-4 w-4" />
    </button>
  );
}

function LogoMark() {
  return (
    <span className="relative grid h-10 w-10 place-items-center rounded-full bg-white text-sm font-black text-azoya-ink shadow-sm">
      <span className="absolute left-3 top-2 h-4 w-3 rotate-[-32deg] rounded-full bg-red-600" />
      <span className="absolute right-3 top-2 h-4 w-3 rotate-[32deg] rounded-full bg-[#05036f]" />
      <span className="relative mt-3 text-[10px] tracking-normal">AZ</span>
    </span>
  );
}

function SiteHeader({ activePage, navigate, theme, toggleTheme, elevated = false }) {
  const linkClass = (page) =>
    `hover:text-azoya-rose dark:hover:text-azoya-lotus ${
      activePage === page ? 'text-azoya-rose dark:text-azoya-lotus' : 'text-black/60 dark:text-white/70'
    }`;

  return (
    <header
      className={`relative z-10 mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/50 bg-white/40 px-4 py-3 shadow-glass backdrop-blur-2xl dark:border-white/10 dark:bg-white/10 ${
        elevated ? 'mt-5' : ''
      }`}
    >
      <a className="flex items-center gap-3" href="/" onClick={(event) => navigate(event, '/')} aria-label="Sana Creation home">
        <LogoMark />
        <span className="leading-tight">
          <span className="block text-sm font-black dark:text-white">Sana Creation</span>
          <span className="block text-xs font-semibold text-black/50 dark:text-white/50">Azoya Pattu Pavadai</span>
        </span>
      </a>
      <nav className="hidden items-center gap-7 text-sm font-semibold md:flex">
        <a className={linkClass('home')} href="/" onClick={(event) => navigate(event, '/')}>
          Home
        </a>
        <a className={linkClass('about')} href="/about" onClick={(event) => navigate(event, '/about')}>
          About
        </a>
        <a className={linkClass('gallery')} href="/gallery" onClick={(event) => navigate(event, '/gallery')}>
          Gallery
        </a>
        <a className={linkClass('contact')} href="/contact" onClick={(event) => navigate(event, '/contact')}>
          Contact
        </a>
      </nav>
      <div className="flex items-center gap-2">
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        <a
          className="inline-flex h-10 items-center justify-center rounded-full bg-white/60 px-4 text-sm font-bold text-azoya-ink shadow-sm backdrop-blur-xl hover:bg-white/100 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
          href="/contact"
          onClick={(event) => navigate(event, '/contact')}
        >
          Enquire
        </a>
      </div>
    </header>
  );
}

function HomePage({ activePage, navigate, theme, toggleTheme }) {
  return (
    <main className="min-h-screen overflow-hidden bg-azoya-mist text-azoya-ink transition-colors duration-300 dark:bg-[#10121a] dark:text-white">
      <section className="relative min-h-[92vh] px-4 py-5 sm:px-6 lg:px-8">
        <div className="absolute inset-0">
          <img
            src="/media/azoya-pattu-hero.png"
            alt="Silk pattu pavadai fabric and boutique garment craftsmanship"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(245,248,251,0.94)_0%,rgba(245,248,251,0.78)_36%,rgba(245,248,251,0.18)_68%,rgba(21,21,31,0.20)_100%)] dark:bg-[linear-gradient(110deg,rgba(16,18,26,0.94)_0%,rgba(16,18,26,0.80)_42%,rgba(16,18,26,0.34)_74%,rgba(16,18,26,0.58)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-azoya-mist to-transparent dark:from-[#10121a]" />
        </div>

        <SiteHeader activePage={activePage} navigate={navigate} theme={theme} toggleTheme={toggleTheme} />

        <div id="top" className="relative z-10 mx-auto grid max-w-7xl gap-8 pb-12 pt-16 lg:grid-cols-[1.02fr_0.98fr] lg:pt-24">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/40 px-4 py-2 text-sm font-bold text-azoya-rose shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/10 dark:text-azoya-lotus">
              <Sparkles className="h-4 w-4" />
              Sana Creation presents premium traditional girls' wear
            </div>
            <h1 className="max-w-4xl text-balance text-5xl font-black leading-[1.02] tracking-normal text-azoya-ink sm:text-6xl lg:text-7xl dark:text-white">
              Azoya Pattu Pavadai ™
            </h1>
            <p className="mt-5 max-w-2xl text-lg font-medium leading-8 text-black/70 sm:text-xl dark:text-white/70">
              From the house of Sana Creation, Azoya blends Tamil heritage with contemporary elegance for girls from 6
              months to 15 years. Crafted for celebrations, confidence, and the joy of childhood.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <GlassButton href="#collections">
                View Products <ArrowRight className="h-4 w-4" />
              </GlassButton>
              <GlassButton href="/gallery" onClick={(event) => navigate(event, '/gallery')} variant="secondary">
                Gallery <Images className="h-4 w-4" />
              </GlassButton>
              <GlassButton href="#process" variant="secondary">
                Process <ChevronRight className="h-4 w-4" />
              </GlassButton>
            </div>
          </div>

          <aside className="self-end rounded-[2rem] border border-white/60 bg-white/40 p-5 shadow-glass backdrop-blur-2xl lg:mt-28 dark:border-white/10 dark:bg-white/10">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-bold text-black/50 dark:text-white/50">Company</p>
                <h2 className="mt-1 text-3xl font-black">Sana Creation</h2>
              </div>
              <span className="grid h-12 w-12 place-items-center rounded-full bg-azoya-gold/20 text-azoya-rose">
                <Gem className="h-6 w-6" />
              </span>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {[
                ['6M+', 'Starts'],
                ['15Y', 'Up to'],
                ['8', 'Steps'],
              ].map(([value, label]) => (
                <div key={label} className="rounded-2xl border border-white/60 bg-white/50 p-4 text-center dark:border-white/10 dark:bg-white/10">
                  <p className="text-2xl font-black">{value}</p>
                  <p className="mt-1 text-xs font-bold uppercase text-black/50 dark:text-white/50">{label}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-2xl bg-azoya-ink p-4 text-white">
              <p className="text-sm font-semibold text-white/70">Product brands</p>
              <p className="mt-2 text-lg font-bold leading-6">
                Azoya Pattu Pavadai ™ and Rajakumari ®, made for traditional celebrations and modern comfort.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section id="collections" className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-azoya-rose">Products</p>
              <h2 className="mt-3 text-3xl font-black sm:text-5xl">Tamil tradition, boutique finish</h2>
            </div>
            <p className="max-w-md text-base font-medium leading-7 text-black/60 dark:text-white/60">
              Every piece is planned around age, occasion, movement, fabric weight, and the festive finish families
              expect.
            </p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {collections.map((item) => (
              <article
                key={item.name}
                className="group overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/60 p-5 shadow-glass backdrop-blur-xl dark:border-white/10 dark:bg-white/10"
              >
                <div className={`h-2 rounded-full bg-gradient-to-r ${item.color}`} />
                <h3 className="mt-7 text-2xl font-black">{item.name}</h3>
                <p className="mt-3 min-h-24 text-base font-medium leading-7 text-black/60 dark:text-white/60">{item.detail}</p>
                <div className="mt-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-azoya-ink text-white transition group-hover:translate-x-1 dark:bg-white dark:text-azoya-ink">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-7 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-azoya-teal">Workshop Flow</p>
            <h2 className="mt-3 text-3xl font-black sm:text-5xl">Made step by step</h2>
            <p className="mt-4 text-base font-medium leading-7 text-black/60 dark:text-white/60">
              Every Azoya and Rajakumari piece passes through a clear production flow before it reaches stock and sale.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {workflow.map((step, index) => {
              const Icon = step.icon;
              return (
                <article
                  key={step.title}
                  className="rounded-[1.35rem] border border-white/70 bg-white/50 p-4 shadow-glass backdrop-blur-xl dark:border-white/10 dark:bg-white/10"
                >
                  <div className="flex items-start gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-azoya-ink text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-black uppercase text-black/40 dark:text-white/40">Step {index + 1}</p>
                      <h3 className="mt-1 text-lg font-black">{step.title}</h3>
                      <p className="mt-2 text-sm font-medium leading-6 text-black/60 dark:text-white/60">{step.text}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="sizes" className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-white/70 bg-white/50 p-6 shadow-glass backdrop-blur-2xl sm:p-8 dark:border-white/10 dark:bg-white/10">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-azoya-teal/10 text-azoya-teal">
              <Ruler className="h-6 w-6" />
            </div>
            <h2 className="mt-5 text-3xl font-black sm:text-5xl">Sizes from baby to teen</h2>
            <p className="mt-4 text-base font-medium leading-7 text-black/60 dark:text-white/60">
              Sana Creation supports girls from 6 months to 15 years, with sizing that keeps comfort, fall, and festive
              wear in balance.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {sizes.map((size) => (
                <span
                  key={size}
                  className="inline-flex h-11 items-center rounded-full border border-white/70 bg-white/70 px-4 text-sm font-black text-azoya-ink dark:border-white/10 dark:bg-white/10 dark:text-white"
                >
                  {size}
                </span>
              ))}
            </div>
          </div>
          <div id="visit" className="rounded-[2rem] bg-azoya-ink p-6 text-white shadow-glow sm:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-azoya-gold">
              <Clock3 className="h-6 w-6" />
            </div>
            <h2 className="mt-5 text-3xl font-black sm:text-5xl">Available across Tamil Nadu</h2>
            <p className="mt-4 text-base font-medium leading-7 text-white/70">
              Azoya Pattu Pavadai is proudly available through leading retail stores across Tamil Nadu for weddings,
              naming ceremonies, birthdays, temple visits, and festivals.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {['Boutique finishing', 'Aari / embroidery work', 'Pleating iron finish', 'Traditional silk details'].map(
                (item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/10 p-4">
                    <Check className="h-5 w-5 text-azoya-gold" />
                    <span className="text-sm font-bold">{item}</span>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function InnerPageShell({ activePage, navigate, theme, toggleTheme, children }) {
  return (
    <main className="min-h-screen overflow-hidden bg-azoya-mist px-4 pb-16 text-azoya-ink transition-colors duration-300 sm:px-6 lg:px-8 dark:bg-[#10121a] dark:text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_18%_8%,rgba(228,112,155,0.22),transparent_28%),radial-gradient(circle_at_88%_12%,rgba(15,141,147,0.18),transparent_28%),linear-gradient(180deg,#f5f8fb_0%,#ffffff_100%)] dark:bg-[radial-gradient(circle_at_18%_8%,rgba(228,112,155,0.18),transparent_30%),radial-gradient(circle_at_88%_12%,rgba(15,141,147,0.16),transparent_30%),linear-gradient(180deg,#10121a_0%,#171825_100%)]" />
      <SiteHeader activePage={activePage} navigate={navigate} theme={theme} toggleTheme={toggleTheme} elevated />
      <div className="relative z-10 mx-auto max-w-7xl pt-14">{children}</div>
    </main>
  );
}

function AboutPage({ activePage, navigate, theme, toggleTheme }) {
  return (
    <InnerPageShell activePage={activePage} navigate={navigate} theme={theme} toggleTheme={toggleTheme}>
      <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/50 px-4 py-2 text-sm font-bold text-azoya-rose shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/10 dark:text-azoya-lotus">
            <BookOpenText className="h-4 w-4" />
            Journey of our client
          </div>
          <h1 className="text-balance text-5xl font-black leading-[1.03] sm:text-6xl">The story of Sana Creation</h1>
          <p className="mt-5 max-w-2xl text-lg font-medium leading-8 text-black/60 dark:text-white/60">
            A story of vision, perseverance, and family legacy that began over five decades ago in Madurai, and grew
            into a trusted name in traditional girls' wear.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <GlassButton href="#journey">
              Explore Journey <ArrowRight className="h-4 w-4" />
            </GlassButton>
            <GlassButton href="/" onClick={(event) => navigate(event, '/')} variant="secondary">
              Back Home <ChevronRight className="h-4 w-4" />
            </GlassButton>
          </div>
        </div>
        <div className="rounded-[2rem] border border-white/70 bg-white/50 p-6 shadow-glass backdrop-blur-2xl sm:p-8 dark:border-white/10 dark:bg-white/10">
          <div className="grid gap-4">
            {[
              ['Founder', 'Late P. A. Kamarudeen began the family business on Elukadal Street, Madurai.'],
              ['Legacy', 'K. Mubarak Ali, Mohamed Sithik, and Sathik Ali carried the family dream forward.'],
              ['Manufacturing', 'ASIYAS grew from five employees into a network supporting 100+ artisans and workers.'],
              ['Brands', 'Azoya Pattu Pavadai ™ and Rajakumari ® celebrate heritage, quality, and childhood joy.'],
            ].map(([label, text]) => (
              <article key={label} className="rounded-[1.35rem] border border-white/70 bg-white/60 p-4 dark:border-white/10 dark:bg-white/10">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-azoya-teal">{label}</p>
                <p className="mt-2 text-base font-bold leading-7 text-black/70 dark:text-white/70">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section id="journey" className="mt-12 grid gap-4 lg:grid-cols-4">
        {journey.map((item) => (
          <article
            key={item.year}
            className="rounded-[1.5rem] border border-white/70 bg-white/55 p-5 shadow-glass backdrop-blur-xl dark:border-white/10 dark:bg-white/10"
          >
            <p className="text-sm font-black text-azoya-rose dark:text-azoya-lotus">{item.year}</p>
            <h2 className="mt-3 text-xl font-black">{item.title}</h2>
            <p className="mt-3 text-sm font-medium leading-6 text-black/60 dark:text-white/60">{item.text}</p>
          </article>
        ))}
      </section>
      <section className="mt-5 rounded-[2rem] bg-azoya-ink p-6 text-white shadow-glow sm:p-8">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-azoya-gold">Our values</p>
        <h2 className="mt-3 text-3xl font-black sm:text-4xl">Heritage, quality, and cherished celebrations</h2>
        <p className="mt-4 max-w-4xl text-base font-medium leading-8 text-white/70">
          From a humble 10x10 shop to a trusted name in traditional girls' wear, Sana Creation continues with the same
          passion that started it all: to preserve tradition, inspire confidence, and create timeless memories for
          generations to come.
        </p>
      </section>
    </InnerPageShell>
  );
}

function GalleryPage({ activePage, navigate, theme, toggleTheme }) {
  return (
    <InnerPageShell activePage={activePage} navigate={navigate} theme={theme} toggleTheme={toggleTheme}>
      <section className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/50 px-4 py-2 text-sm font-bold text-azoya-rose shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/10 dark:text-azoya-lotus">
            <Images className="h-4 w-4" />
            Product gallery
          </div>
          <h1 className="text-balance text-5xl font-black leading-[1.03] sm:text-6xl">Azoya and Rajakumari collections</h1>
          <p className="mt-5 max-w-2xl text-lg font-medium leading-8 text-black/60 dark:text-white/60">
            A closer look at Sana Creation's traditional girls' wear, from festive pattu pavadai styling to celebration
            dresses designed for childhood memories.
          </p>
        </div>
        <GlassButton href="/contact" onClick={(event) => navigate(event, '/contact')}>
          Enquire Now <ArrowRight className="h-4 w-4" />
        </GlassButton>
      </section>

      <section className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {galleryImages.map((image) => (
          <article
            key={image.src}
            className="group overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/55 p-3 shadow-glass backdrop-blur-xl dark:border-white/10 dark:bg-white/10"
          >
            <div className="overflow-hidden rounded-[1.25rem] bg-white/50 dark:bg-white/10">
              <img
                className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                src={image.src}
                alt={`${image.title} by Sana Creation`}
                loading="lazy"
              />
            </div>
            <div className="p-3">
              <h2 className="text-xl font-black">{image.title}</h2>
              <p className="mt-2 text-sm font-medium leading-6 text-black/60 dark:text-white/60">{image.detail}</p>
            </div>
          </article>
        ))}
      </section>
    </InnerPageShell>
  );
}

function ContactPage({ activePage, navigate, theme, toggleTheme }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    dressType: 'Azoya Pattu Pavadai ™',
    message: '',
  });
  const [formStatus, setFormStatus] = useState({ type: 'idle', message: '' });

  const updateFormData = (event) => {
    const { name, value } = event.target;
    setFormData((currentData) => ({ ...currentData, [name]: value }));
  };

  const sendEnquiry = async (event) => {
    event.preventDefault();

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setFormStatus({
        type: 'error',
        message: 'EmailJS is not configured yet. Add the service ID, template ID, and public key in .env.local.',
      });
      return;
    }

    setFormStatus({ type: 'sending', message: 'Sending enquiry...' });

    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: {
            to_email: 'sanacreationmduoffl@gmail.com',
            company_name: 'Sana Creation',
            from_name: formData.name,
            from_phone: formData.phone,
            dress_type: formData.dressType,
            message: formData.message,
          },
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || 'EmailJS request failed');
      }

      setFormData({
        name: '',
        phone: '',
        dressType: 'Azoya Pattu Pavadai ™',
        message: '',
      });
      setFormStatus({ type: 'success', message: 'Enquiry sent successfully. Sana Creation will receive it by email.' });
    } catch (error) {
      setFormStatus({
        type: 'error',
        message: 'Unable to send right now. Please call 8681855099 or email sanacreationmduoffl@gmail.com.',
      });
    }
  };

  return (
    <InnerPageShell activePage={activePage} navigate={navigate} theme={theme} toggleTheme={toggleTheme}>
      <section className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/50 px-4 py-2 text-sm font-bold text-azoya-rose shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/10 dark:text-azoya-lotus">
            <MessageCircle className="h-4 w-4" />
            Contact Sana Creation
          </div>
          <h1 className="text-balance text-5xl font-black leading-[1.03] sm:text-6xl">Enquire about products and stock</h1>
          <p className="mt-5 max-w-xl text-lg font-medium leading-8 text-black/60 dark:text-white/60">
            Use this page for Azoya Pattu Pavadai, Rajakumari, baby girl dress sizing, ready stock, festive collections,
            and custom work details.
          </p>
          <div className="mt-8 grid gap-3">
            {[
              [Phone, 'Phone', '8681855099 / 9443881908', 'tel:8681855099'],
              [Mail, 'Email', 'sanacreationmduoffl@gmail.com', 'mailto:sanacreationmduoffl@gmail.com'],
              [Instagram, 'Instagram', '@azoya.in', 'https://www.instagram.com/azoya.in'],
              [MapPin, 'Address', '12D/4A, TNHB Colony, Villapuram, Madurai - 625011', 'https://share.google/pm9wWWIQiBG6tgNkb'],
            ].map(([Icon, label, text, href]) => (
              <div key={label} className="flex items-center gap-4 rounded-[1.35rem] border border-white/70 bg-white/50 p-4 shadow-glass backdrop-blur-xl dark:border-white/10 dark:bg-white/10">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-azoya-ink text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-black/40 dark:text-white/40">{label}</p>
                  {href ? (
                    <a
                      className="text-base font-bold text-black/70 hover:text-azoya-rose dark:text-white/70 dark:hover:text-azoya-lotus"
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel={href.startsWith('http') ? 'noreferrer' : undefined}
                    >
                      {text}
                    </a>
                  ) : (
                    <p className="text-base font-bold leading-6 text-black/70 dark:text-white/70">{text}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <form
          className="rounded-[2rem] border border-white/70 bg-white/50 p-5 shadow-glass backdrop-blur-2xl sm:p-7 dark:border-white/10 dark:bg-white/10"
          onSubmit={sendEnquiry}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-bold text-black/60 dark:text-white/60">
              Name
              <input
                className="h-12 rounded-2xl border border-white/70 bg-white/75 px-4 font-semibold text-azoya-ink outline-none placeholder:text-black/40 focus:ring-4 focus:ring-azoya-lotus/20 dark:border-white/10 dark:bg-white/10 dark:text-white dark:placeholder:text-white/40"
                name="name"
                placeholder="Customer name"
                required
                value={formData.name}
                onChange={updateFormData}
              />
            </label>
            <label className="grid gap-2 text-sm font-bold text-black/60 dark:text-white/60">
              Phone
              <input
                className="h-12 rounded-2xl border border-white/70 bg-white/75 px-4 font-semibold text-azoya-ink outline-none placeholder:text-black/40 focus:ring-4 focus:ring-azoya-lotus/20 dark:border-white/10 dark:bg-white/10 dark:text-white dark:placeholder:text-white/40"
                name="phone"
                placeholder="Mobile number"
                required
                value={formData.phone}
                onChange={updateFormData}
              />
            </label>
            <label className="grid gap-2 text-sm font-bold text-black/60 sm:col-span-2 dark:text-white/60">
              Dress Type
              <select
                className="h-12 rounded-2xl border border-white/70 bg-white/75 px-4 font-semibold text-azoya-ink outline-none focus:ring-4 focus:ring-azoya-lotus/20 dark:border-white/10 dark:bg-white/10 dark:text-white"
                name="dressType"
                value={formData.dressType}
                onChange={updateFormData}
              >
                <option>Azoya Pattu Pavadai ™</option>
                <option>Rajakumari ®</option>
                <option>Modern traditional dress</option>
                <option>Baby girl set</option>
                <option>Aari / embroidery work</option>
              </select>
            </label>
            <label className="grid gap-2 text-sm font-bold text-black/60 sm:col-span-2 dark:text-white/60">
              Message
              <textarea
                className="min-h-36 resize-none rounded-2xl border border-white/70 bg-white/75 p-4 font-semibold text-azoya-ink outline-none placeholder:text-black/40 focus:ring-4 focus:ring-azoya-lotus/20 dark:border-white/10 dark:bg-white/10 dark:text-white dark:placeholder:text-white/40"
                name="message"
                placeholder="Age, size, occasion, color preference, and timeline"
                required
                value={formData.message}
                onChange={updateFormData}
              />
            </label>
          </div>
          {formStatus.message ? (
            <p
              className={`mt-5 rounded-2xl px-4 py-3 text-sm font-bold ${
                formStatus.type === 'success'
                  ? 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300'
                  : formStatus.type === 'error'
                    ? 'bg-red-500/10 text-red-700 dark:text-red-300'
                    : 'bg-azoya-teal/10 text-azoya-teal dark:text-white/70'
              }`}
            >
              {formStatus.message}
            </p>
          ) : null}
          <div className="mt-5 flex justify-end">
            <button
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-azoya-ink px-5 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-black disabled:cursor-not-allowed disabled:opacity-60 dark:bg-white dark:text-azoya-ink dark:hover:bg-white/100"
              disabled={formStatus.type === 'sending'}
              type="submit"
            >
              {formStatus.type === 'sending' ? 'Sending...' : 'Send Enquiry'} <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </form>
      </section>
    </InnerPageShell>
  );
}

function App() {
  const [activePage, setActivePage] = useState(() => pageFromPath(window.location.pathname));
  const [theme, setTheme] = useState(() => {
    const savedTheme = window.localStorage.getItem('azoya-theme');
    if (savedTheme === 'dark' || savedTheme === 'light') return savedTheme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    const handlePopState = () => setActivePage(pageFromPath(window.location.pathname));
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem('azoya-theme', theme);
  }, [theme]);

  const navigate = (event, path) => {
    event.preventDefault();
    window.history.pushState({}, '', path);
    setActivePage(pageFromPath(path));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleTheme = () => setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));

  if (activePage === 'about') {
    return <AboutPage activePage={activePage} navigate={navigate} theme={theme} toggleTheme={toggleTheme} />;
  }
  if (activePage === 'gallery') {
    return <GalleryPage activePage={activePage} navigate={navigate} theme={theme} toggleTheme={toggleTheme} />;
  }
  if (activePage === 'contact') {
    return <ContactPage activePage={activePage} navigate={navigate} theme={theme} toggleTheme={toggleTheme} />;
  }
  return <HomePage activePage={activePage} navigate={navigate} theme={theme} toggleTheme={toggleTheme} />;
}

createRoot(document.getElementById('root')).render(<App />);
