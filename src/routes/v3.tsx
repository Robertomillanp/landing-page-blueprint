import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  User,
  ShoppingBag,
  ArrowRight,
  Plus,
  ShieldCheck,
  Gem,
  Globe2,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

import hero from "@/assets/hero-players.jpg";
import arg from "@/assets/jersey-argentina.jpg";
import fra from "@/assets/jersey-france.jpg";
import bra from "@/assets/jersey-brazil.jpg";
import por from "@/assets/jersey-portugal.jpg";
import retro from "@/assets/col-retro.jpg";
import c2022 from "@/assets/col-2022.jpg";
import winners from "@/assets/col-winners.jpg";

export const Route = createFileRoute("/v3")({
  head: () => ({
    meta: [
      { title: "FUTBOLTTOP — Pasión. Historia. Camiseta." },
      {
        name: "description",
        content:
          "Camisetas de selecciones icónicas. Para quienes viven el fútbol más allá de los 90 minutos.",
      },
    ],
  }),
  component: V3Page,
});

// ───────────────────────────── HEADER ─────────────────────────────
function TopHeader() {
  const nav = [
    { label: "COLECCIONES", href: "#colecciones" },
    { label: "SELECCIONES", href: "#vendidas" },
    { label: "NOVEDADES", href: "#drop" },
    { label: "SOBRE NOSOTROS", href: "#sobre" },
  ];
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="container-wk grid grid-cols-3 items-center h-20">
        <nav className="flex items-center gap-7 text-[11px] tracking-[0.18em] font-semibold">
          {nav.map((n) => (
            <a key={n.label} href={n.href} className="hover:text-gold transition-colors">
              {n.label}
            </a>
          ))}
        </nav>
        <a href="#inicio" className="justify-self-center text-center leading-none">
          <div className="font-display text-2xl tracking-wide">
            FUTBOL<span className="text-gold">TTOP</span>
          </div>
          <div className="text-[8px] tracking-[0.35em] text-muted-foreground mt-1">
            PASIÓN · HISTORIA · CAMISETA
          </div>
        </a>
        <div className="justify-self-end flex items-center gap-6 text-[11px] tracking-[0.18em]">
          <button className="flex items-center gap-1.5 hover:text-gold transition">
            <Search className="h-4 w-4" /> BUSCAR
          </button>
          <button className="hover:text-gold transition">
            <User className="h-4 w-4" />
          </button>
          <button className="flex items-center gap-1.5 hover:text-gold transition">
            <ShoppingBag className="h-4 w-4" /> CARRITO (0)
          </button>
        </div>
      </div>
    </header>
  );
}

// ───────────────────────────── HERO ─────────────────────────────
function Hero() {
  return (
    <section id="inicio" className="relative min-h-[760px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${hero})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

      <div className="container-wk relative pt-40 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <div className="eyebrow mb-6">MÁS QUE CAMISETAS</div>
          <h1 className="font-display text-6xl md:text-7xl leading-[0.95] uppercase">
            Historias
            <br />
            que nos
            <br />
            <span className="text-gold">unen</span>
          </h1>
          <p className="mt-8 text-muted-foreground text-base max-w-md leading-relaxed">
            Camisetas de selecciones icónicas. Para quienes viven el fútbol más allá de los 90
            minutos.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#colecciones"
              className="inline-flex items-center gap-2 bg-gold text-primary-foreground text-xs tracking-[0.18em] font-semibold uppercase px-7 py-4 rounded hover:brightness-110 transition"
            >
              Explorar colección <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#vendidas"
              className="inline-flex items-center gap-2 border border-border text-xs tracking-[0.18em] font-semibold uppercase px-7 py-4 rounded hover:border-gold hover:text-gold transition"
            >
              Ver más vendidas
            </a>
          </div>
        </motion.div>

        {/* Seal */}
        <div className="hidden md:flex absolute right-10 bottom-16 h-28 w-28 rounded-full border border-gold/50 items-center justify-center text-[9px] tracking-[0.25em] text-gold uppercase rotate-12">
          <span className="absolute">Calidad Premium</span>
        </div>
      </div>
    </section>
  );
}

// ───────────────────────────── BESTSELLERS ─────────────────────────────
const bestsellers = [
  { name: "España 2010 Home", tag: "Campeones del Mundo", price: "€49,90", img: arg },
  { name: "Brasil 2002 Home", tag: "Pentacampeones", price: "€49,90", img: bra },
  { name: "Francia 1998 Home", tag: "Campeones del Mundo", price: "€49,90", img: fra },
  { name: "Argentina 1986 Home", tag: "Campeones del Mundo", price: "€49,90", img: por },
];

function Bestsellers() {
  return (
    <section id="vendidas" className="py-24">
      <div className="container-wk">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="eyebrow mb-3">LAS FAVORITAS</div>
            <h2 className="font-display text-4xl uppercase">Más Vendidas</h2>
          </div>
          <a
            href="#"
            className="text-[11px] tracking-[0.2em] font-semibold uppercase hover:text-gold transition inline-flex items-center gap-2"
          >
            Ver todas <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {bestsellers.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group bg-card border border-border rounded-lg overflow-hidden hover:border-gold/40 transition"
            >
              <div className="aspect-square bg-secondary/30 overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  className="h-full w-full object-cover group-hover:scale-105 transition duration-700"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xs tracking-[0.18em] uppercase font-semibold">{p.name}</h3>
                <p className="text-[10px] tracking-[0.18em] uppercase text-muted-foreground mt-1">
                  {p.tag}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-display text-xl text-gold">{p.price}</span>
                  <button
                    aria-label="Añadir al carrito"
                    className="h-8 w-8 rounded-full border border-border flex items-center justify-center hover:border-gold hover:text-gold transition"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ───────────────────────────── COLECCIONES CARRUSEL ─────────────────────────────
const collections = [
  { title: "Selecciones", subtitle: "Camisetas nacionales", img: c2022 },
  { title: "Retro", subtitle: "Revive la historia", img: retro },
  { title: "Ganadores", subtitle: "De campeones", img: winners },
  { title: "Especiales", subtitle: "Ediciones limitadas", img: arg },
  { title: "Vintage 90s", subtitle: "Década dorada", img: fra },
  { title: "Iconos", subtitle: "Leyendas eternas", img: bra },
];

function CollectionsCarousel() {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: "start", dragFree: true });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  useEffect(() => {
    if (!embla) return;
    const onSelect = () => {
      setCanPrev(embla.canScrollPrev());
      setCanNext(embla.canScrollNext());
    };
    embla.on("select", onSelect);
    embla.on("reInit", onSelect);
    onSelect();
  }, [embla]);

  return (
    <section id="colecciones" className="py-24 border-t border-border">
      <div className="container-wk">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="eyebrow mb-3">EXPLORA</div>
            <h2 className="font-display text-4xl uppercase">Nuestras Colecciones</h2>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => embla?.scrollPrev()}
              disabled={!canPrev}
              className="h-10 w-10 rounded-full border border-border flex items-center justify-center hover:border-gold hover:text-gold transition disabled:opacity-40"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => embla?.scrollNext()}
              disabled={!canNext}
              className="h-10 w-10 rounded-full border border-border flex items-center justify-center hover:border-gold hover:text-gold transition disabled:opacity-40"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden -mx-5 px-5" ref={emblaRef}>
          <div className="flex gap-5">
            {collections.map((c) => (
              <a
                key={c.title}
                href="#vendidas"
                className="group relative shrink-0 w-[280px] md:w-[340px] aspect-[4/5] rounded-lg overflow-hidden border border-border"
              >
                <img
                  src={c.img}
                  alt={c.title}
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-display text-2xl uppercase">{c.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{c.subtitle}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-gold opacity-0 group-hover:opacity-100 transition">
                    Ver colección <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ───────────────────────────── PILARES ─────────────────────────────
const pilares = [
  {
    icon: ShieldCheck,
    title: "Autenticidad Visual",
    text: "Diseños inspirados en las camisetas más icónicas del fútbol internacional.",
  },
  {
    icon: Gem,
    title: "Calidad Premium",
    text: "Tejidos ligeros, escudos termoadheridos y acabados modernos.",
  },
  {
    icon: Globe2,
    title: "Cultura Futbolera",
    text: "No vendemos solo camisetas. Vendemos recuerdos, generaciones y momentos históricos.",
  },
];

function Pilares() {
  return (
    <section id="sobre" className="py-24 border-t border-border">
      <div className="container-wk">
        <div className="eyebrow mb-3">NUESTROS PILARES</div>
        <h2 className="font-display text-4xl uppercase mb-14">Por qué Futbolttop</h2>
        <div className="grid md:grid-cols-3 gap-12 md:divide-x divide-border">
          {pilares.map((p) => (
            <div key={p.title} className="text-center md:px-8">
              <p.icon className="h-10 w-10 mx-auto text-gold" strokeWidth={1.2} />
              <h3 className="mt-6 text-sm tracking-[0.2em] uppercase font-semibold">{p.title}</h3>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ───────────────────────────── DROP LIMITED ─────────────────────────────
function DropBanner() {
  return (
    <section id="drop" className="relative my-12 mx-5 rounded-xl overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${fra})` }}
      />
      <div className="absolute inset-0 bg-background/70" />
      <div className="relative px-10 py-24 md:py-32 max-w-7xl mx-auto grid md:grid-cols-2 items-center">
        <div>
          <div className="font-display text-5xl md:text-6xl uppercase leading-none">1998.</div>
          <div className="font-display text-5xl md:text-6xl uppercase leading-none text-gold mt-2">
            París.
          </div>
          <div className="font-display text-3xl md:text-4xl uppercase leading-tight mt-4">
            El fútbol cambió
            <br /> para siempre.
          </div>
          <a
            href="#vendidas"
            className="mt-8 inline-flex items-center gap-2 border border-border text-xs tracking-[0.18em] font-semibold uppercase px-7 py-4 rounded hover:border-gold hover:text-gold transition"
          >
            Descubrir drop <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="hidden md:flex justify-end">
          <div className="h-32 w-32 rounded-full border border-gold/60 flex items-center justify-center text-[9px] tracking-[0.25em] text-gold uppercase text-center leading-tight">
            Edición
            <br />
            Limitada
          </div>
        </div>
      </div>
    </section>
  );
}

// ───────────────────────────── TESTIMONIOS ─────────────────────────────
const testimonios = [
  { name: "Javier, Zaragoza", text: "La calidad me sorprendió muchísimo. Parece una camiseta oficial actual." },
  { name: "Marco, Milán", text: "El packaging y la presentación hacen que parezca una marca mucho más grande." },
  { name: "Diego, Madrid", text: "Mi nueva tienda de confianza. Envío rápido y camisetas brutales." },
];

function Testimonios() {
  return (
    <section className="py-20 border-t border-border">
      <div className="container-wk">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-xs tracking-[0.2em] uppercase font-semibold">
            Lo que dicen nuestros clientes
          </h2>
          <a
            href="#"
            className="text-[11px] tracking-[0.2em] font-semibold uppercase hover:text-gold inline-flex items-center gap-2"
          >
            Ver más opiniones <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {testimonios.map((t) => (
            <div key={t.name} className="bg-card border border-border rounded-lg p-6">
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-sm text-foreground/90 leading-relaxed">"{t.text}"</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-secondary border border-border" />
                <div className="text-[11px] tracking-[0.18em] uppercase font-semibold">
                  {t.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ───────────────────────────── INSTAGRAM ─────────────────────────────
function InstagramStrip() {
  const imgs = [arg, bra, c2022, retro, winners, fra];
  return (
    <section className="py-16 border-t border-border">
      <div className="container-wk">
        <div className="grid md:grid-cols-7 gap-3 items-center">
          <div className="md:col-span-1">
            <div className="eyebrow mb-1">SEGUINOS EN</div>
            <div className="font-display text-xl text-gold">@FUTBOLTTOP</div>
          </div>
          {imgs.map((src, i) => (
            <a
              key={i}
              href="#"
              className="aspect-square overflow-hidden rounded-md border border-border group"
            >
              <img
                src={src}
                alt={`Instagram ${i + 1}`}
                className="h-full w-full object-cover group-hover:scale-110 transition duration-500"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ───────────────────────────── FOOTER ─────────────────────────────
function FooterV3() {
  return (
    <footer className="border-t border-border">
      <div className="container-wk py-12 grid md:grid-cols-3 gap-10 items-center">
        <div>
          <div className="font-display text-2xl">
            FUTBOL<span className="text-gold">TTOP</span>
          </div>
          <div className="text-[9px] tracking-[0.3em] text-muted-foreground mt-1">
            PASIÓN · HISTORIA · CAMISETA
          </div>
        </div>
        <div>
          <div className="text-xs tracking-[0.2em] uppercase font-semibold">
            Unite a la comunidad
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Recibí novedades, lanzamientos exclusivos y beneficios especiales.
          </p>
        </div>
        <form className="flex gap-2">
          <input
            type="email"
            placeholder="TU EMAIL"
            className="flex-1 bg-secondary/40 border border-border rounded px-4 py-3 text-xs tracking-[0.15em] uppercase placeholder:text-muted-foreground focus:outline-none focus:border-gold"
          />
          <button className="bg-gold text-primary-foreground text-xs tracking-[0.18em] font-semibold uppercase px-6 rounded hover:brightness-110 transition">
            Suscribirme
          </button>
        </form>
      </div>
      <div className="border-t border-border">
        <div className="container-wk py-5 flex flex-wrap items-center justify-between gap-4 text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
          <div>© 2024 Futbolttop. Todos los derechos reservados.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold">Envíos y devoluciones</a>
            <a href="#" className="hover:text-gold">Preguntas frecuentes</a>
            <a href="#" className="hover:text-gold">Términos y condiciones</a>
            <a href="#" className="hover:text-gold">Contacto</a>
          </div>
          <div className="flex gap-2 text-foreground/70">
            <span>VISA</span>
            <span>Pay</span>
            <span>MC</span>
            <span>PP</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ───────────────────────────── PAGE ─────────────────────────────
function V3Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopHeader />
      <main>
        <Hero />
        <Bestsellers />
        <CollectionsCarousel />
        <Pilares />
        <DropBanner />
        <Testimonios />
        <InstagramStrip />
      </main>
      <FooterV3 />
    </div>
  );
}
