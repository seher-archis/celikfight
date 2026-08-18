import { useEffect, useState } from "react";
import { disciplines, faqs, photos, pillars, programs, school, videos, week } from "./content";

const nav = [
  { href: "#hakkimizda", label: "Hakkımızda" },
  { href: "#dersler", label: "Dersler" },
  { href: "#program", label: "Program" },
  { href: "#galeri", label: "Galeri" },
  { href: "#sss", label: "Sık sorulanlar" },
  { href: "#iletisim", label: "İletişim" },
];

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.5 3.5A11 11 0 0 0 2.1 17.2L1 23l6-1.6A11 11 0 0 0 20.5 3.5Zm-8.5 17a9 9 0 0 1-4.6-1.3l-.3-.2-3.5.9.9-3.4-.2-.3A9 9 0 1 1 12 20.5Zm5.2-6.7c-.3-.1-1.7-.8-1.9-.9s-.5-.1-.6.1-.7.9-.9 1.1-.3.2-.6.1a7.4 7.4 0 0 1-2.2-1.4 8.2 8.2 0 0 1-1.5-1.9c-.2-.3 0-.4.1-.6l.5-.6.2-.3a.5.5 0 0 0 0-.5c0-.1-.6-1.6-.9-2.1s-.5-.5-.6-.5h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-1 2.2 5.2 5.2 0 0 0 1.1 2.8 12 12 0 0 0 4.5 4.1 15 15 0 0 0 1.5.5 3.6 3.6 0 0 0 1.6.1 2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .2-1.2c-.1-.1-.3-.2-.6-.3Z" />
    </svg>
  );
}

export default function App() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = lightbox || open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightbox, open]);

  return (
    <>
      <div className="noise" />

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors ${
          scrolled ? "bg-ink/90 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-5 md:h-24 md:px-8">
          <a href="#ust" className="flex items-center">
            <img
              src="/logo-white.png"
              alt="Çelik Fight Academy"
              className="h-16 w-auto drop-shadow-[0_1px_10px_rgba(0,0,0,0.6)] md:h-20"
            />
          </a>
          <nav className="hidden items-center gap-8 xl:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[12px] font-medium text-bone/70 transition hover:text-bone"
              >
                {item.label}
              </a>
            ))}
            <a
              href={school.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-blood px-4 py-2 text-[12px] font-semibold text-white hover:bg-blood-hot"
            >
              <WhatsAppIcon className="h-3.5 w-3.5" />
              İlk ders
            </a>
          </nav>
          <button
            type="button"
            className="text-[13px] font-medium xl:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Kapat" : "Menü"}
          </button>
        </div>
        {open && (
          <div className="border-t border-line bg-ink px-5 py-6 xl:hidden">
            <div className="flex flex-col gap-4">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-lg"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={school.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex w-fit items-center gap-2 bg-blood px-4 py-2.5 text-sm font-semibold"
              >
                İlk dersi sor
              </a>
            </div>
          </div>
        )}
      </header>

      <main id="ust">
        <section className="relative min-h-[100svh] overflow-hidden">
          <img
            src="/photos/salon/img_1106_cover.jpg"
            alt="Çelik Fight Academy grubu"
            className="absolute inset-0 h-full w-full object-cover object-[center_48%]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,6,6,0.55)_0%,rgba(6,6,6,0.25)_40%,rgba(6,6,6,0.9)_100%)]" />
          <div className="relative mx-auto flex min-h-[100svh] max-w-[1400px] flex-col justify-end px-5 pb-14 pt-32 md:px-8">
            <p className="text-sm font-medium text-bone/70">Kağıthane · Çağlayan</p>
            <h1 className="mt-3 max-w-4xl font-display text-6xl leading-[0.9] md:text-8xl">
              Kickboks, Muay Thai ve MMA
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-bone/75 md:text-lg">
              Çelik Fight Academy’de grup dersleri. Deneyim gerekmez — ilk dersi yazarak ayarlayın.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={school.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="bg-blood px-6 py-3 text-sm font-semibold text-white hover:bg-blood-hot"
              >
                WhatsApp’tan yaz
              </a>
              <a href="#program" className="border border-bone/25 px-6 py-3 text-sm font-semibold hover:border-bone">
                Ders programı
              </a>
            </div>
          </div>
        </section>

        <section id="hakkimizda" className="bg-ink">
          <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-8 md:py-24">
            <div className="grid gap-12 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <h2 className="font-display text-5xl md:text-6xl">Hakkımızda</h2>
                <p className="mt-6 max-w-md text-[16px] leading-relaxed text-muted">
                  Çelik Fight Academy, İstanbul Kağıthane’de kickboks, muay thai ve MMA dersi veren bir
                  dövüş okuludur. Dersler grup halinde işlenir. Teknik, kondisyon ve ring çalışması aynı
                  antrenmanın içindedir.
                </p>
                <p className="mt-4 max-w-md text-[16px] leading-relaxed text-muted">
                  Çağlayan metro ve metrobüse 5 dakika. İlk ders için aramanız veya WhatsApp’tan yazmanız
                  yeterli — grubu birlikte seçeriz.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
                <img
                  src="/photos/salon/img_1648.jpg"
                  alt="Çelik Fight Academy grubu"
                  className="h-full min-h-[280px] w-full object-cover"
                />
                <img
                  src="/photos/salon/img_1296.jpg"
                  alt="Team Çelik"
                  className="hidden h-full min-h-[280px] w-full object-cover sm:block"
                />
              </div>
            </div>
            <div className="mt-16 grid gap-10 border-t border-line pt-12 sm:grid-cols-2 lg:grid-cols-4">
              {pillars.map((item) => (
                <article key={item.title}>
                  <h3 className="text-base font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="dersler">
          {disciplines.map((item) => (
            <article key={item.id} className="group relative min-h-[70svh] overflow-hidden">
              <img src={item.image} alt={item.title} className="img-zoom absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/20" />
              <div className="relative mx-auto flex min-h-[70svh] max-w-[1400px] items-end px-5 py-16 md:px-8">
                <div className="max-w-xl">
                  <h2 className="font-display text-6xl md:text-7xl">{item.title}</h2>
                  <p className="mt-4 text-[16px] leading-relaxed text-bone/80">{item.text}</p>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section id="program" className="bg-panel">
          <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-8 md:py-24">
            <div className="max-w-2xl">
              <h2 className="font-display text-5xl md:text-6xl">Ders programı</h2>
              <p className="mt-4 text-[16px] leading-relaxed text-muted">
                Kickboks ve Muay Thai pazartesi, çarşamba, cuma. MMA salı, perşembe, cumartesi. 3 aylık
                üyelik alana 1 ay hediye.
              </p>
            </div>

            <div className="mt-10 overflow-x-auto border border-line">
              <table className="w-full min-w-[720px] border-collapse text-left text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="px-4 py-3 font-medium text-muted">Saat</th>
                    {week.days.map((day) => (
                      <th key={day} className="px-3 py-3 font-medium">
                        {day}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {week.rows.map((row) => (
                    <tr key={row.time} className="border-t border-line">
                      <td className="whitespace-nowrap px-4 py-3 text-muted">{row.time}</td>
                      {row.cells.map((cell, i) => (
                        <td key={`${row.time}-${i}`} className="px-3 py-3">
                          {cell ? <span className="text-bone">{cell}</span> : <span className="text-line">—</span>}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {programs.map((program) => (
                <article key={program.id} className="border border-line bg-ink p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold">{program.title}</h3>
                      <p className="mt-1 text-sm text-muted">{program.days}</p>
                    </div>
                    <p className="font-display text-4xl text-blood">{program.price}₺</p>
                  </div>
                  <ul className="mt-5 space-y-2 text-sm">
                    {program.groups.map((group) => (
                      <li key={group.name} className="flex justify-between border-t border-line pt-2">
                        <span className="text-muted">{group.name}</span>
                        <span>{group.time}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <a
              href={school.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 bg-blood px-6 py-3 text-sm font-semibold text-white hover:bg-blood-hot"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Uygun grubu sor
            </a>
          </div>
        </section>

        <section className="bg-ink">
          <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-8 md:py-24">
            <h2 className="font-display text-5xl md:text-6xl">Salondan</h2>
            <p className="mt-4 max-w-lg text-[16px] text-muted">Antrenman videosu — kendi çekimimiz.</p>
            <div className="mt-8 overflow-hidden bg-black">
              {videos.map((video) => (
                <video
                  key={video.src}
                  className="aspect-video w-full object-cover"
                  controls
                  playsInline
                  preload="metadata"
                  poster={video.poster}
                >
                  <source src={video.src} type="video/mp4" />
                </video>
              ))}
            </div>
          </div>
        </section>

        <section id="galeri" className="bg-panel">
          <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-8 md:py-24">
            <h2 className="font-display text-5xl md:text-6xl">Galeri</h2>
            <div className="mt-10 columns-1 gap-3 sm:columns-2 lg:columns-3">
              {photos.map((photo) => (
                <button
                  key={photo.src}
                  type="button"
                  onClick={() => setLightbox(photo.src)}
                  className="group mb-3 block w-full overflow-hidden"
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className={`img-zoom w-full object-cover ${
                      photo.span === "tall"
                        ? "aspect-[3/4]"
                        : photo.span === "square"
                          ? "aspect-square"
                          : "aspect-[16/10]"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </section>

        <section id="sss" className="bg-ink">
          <div className="mx-auto max-w-[800px] px-5 py-20 md:px-8 md:py-24">
            <h2 className="font-display text-5xl md:text-6xl">Sık sorulanlar</h2>
            <div className="mt-10 divide-y divide-line border-y border-line">
              {faqs.map((item, i) => {
                const isOpen = openFaq === i;
                return (
                  <div key={item.q}>
                    <button
                      type="button"
                      className="flex w-full items-center justify-between gap-4 py-5 text-left"
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      aria-expanded={isOpen}
                    >
                      <span className="text-[16px] font-medium">{item.q}</span>
                      <span className="text-muted">{isOpen ? "–" : "+"}</span>
                    </button>
                    {isOpen && <p className="pb-5 text-[15px] leading-relaxed text-muted">{item.a}</p>}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="iletisim" className="bg-panel">
          <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-20 md:px-8 md:py-24 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-5xl md:text-6xl">İletişim</h2>
              <dl className="mt-8 space-y-7">
                <div>
                  <dt className="text-sm text-muted">Adres</dt>
                  <dd className="mt-1 max-w-sm text-lg leading-snug">{school.address}</dd>
                  <p className="mt-2 text-sm text-blood">{school.transit}</p>
                </div>
                <div>
                  <dt className="text-sm text-muted">Telefon</dt>
                  <dd className="mt-1">
                    <a href={`tel:${school.phoneTel}`} className="text-2xl font-semibold hover:text-blood">
                      {school.phoneDisplay}
                    </a>
                  </dd>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={school.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-blood px-5 py-3 text-sm font-semibold text-white hover:bg-blood-hot"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    WhatsApp
                  </a>
                  <a
                    href={school.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="border border-white/20 px-5 py-3 text-sm font-semibold hover:border-white"
                  >
                    Instagram
                  </a>
                </div>
              </dl>
            </div>
            <iframe
              title="Çelik Fight Academy konumu"
              src={school.mapEmbed}
              className="min-h-[360px] w-full grayscale contrast-125"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
      </main>

      <footer className="border-t border-line bg-ink">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-5 py-8 md:px-8">
          <img src="/logo-white.png" alt="" className="h-12 w-auto opacity-80" />
          <p className="text-sm text-muted">Kağıthane / İstanbul</p>
        </div>
      </footer>

      {lightbox && (
        <button
          type="button"
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/92 p-5"
          onClick={() => setLightbox(null)}
          aria-label="Kapat"
        >
          <img src={lightbox} alt="" className="max-h-[90vh] max-w-full object-contain" />
        </button>
      )}
    </>
  );
}
