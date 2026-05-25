import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Search, User, ShoppingBag, ArrowRight, Plus, Shield, Gem, Globe2, Star, ChevronLeft, ChevronRight } from "lucide-react";
import hero from "@/assets/hero-players.jpg";
import jArg from "@/assets/jersey-argentina.jpg";
import jBra from "@/assets/jersey-brazil.jpg";
import jFra from "@/assets/jersey-france.jpg";
import jPor from "@/assets/jersey-portugal.jpg";
import drop from "@/assets/col-retro.jpg";
import insta1 from "@/assets/col-2022.jpg";
import insta2 from "@/assets/col-winners.jpg";
import insta3 from "@/assets/shipping-globe.jpg";

export const Route = createFileRoute("/v4")({
  head: () => ({
    meta: [
      { title: "FutbolTTop — Historias que nos unen" },
      { name: "description", content: "Camisetas de selecciones icónicas. Pasión. Historia. Camiseta." },
    ],
  }),
  component: V4Page,
});

const nav = ["Colecciones", "Selecciones", "Novedades", "Sobre Nosotros"];

function Logo() {
  return (
    <div className="leading-none text-center">
      <div className="font-display text-2xl tracking-wide">
        FUTBOL<span className="text-gold">TTOP</span>
      </div>
      <div className="text-[8px] tracking-[0.32em] text-muted-foreground mt-1">
        PASIÓN · HISTORIA · CAMISETA
      </div>
    </div>
  );
}

function HeaderV4() {
  return (
    <header className="absolute top-0 inset-x-0 z-30">
      <div className="container-wk h-20 grid grid-cols-3 items-center">
        <nav className="flex items-center gap-7 text-[11px] uppercase tracking-[0.18em] font-semibold">
          {nav.map((n) => (
            <a key={n} href="#" className="hover:text-gold transition">{n}</a>
          ))}
        </nav>
        <div className="flex justify-center"><Logo /></div>
        <div className="flex items-center justify-end gap-6 text-xs uppercase tracking-[0.18em] font-semibold">
          <button className="flex items-center gap-2 hover:text-gold"><Search className="h-4 w-4" />Buscar</button>
          <button className="hover:text-gold"><User className="h-4 w-4" /></button>
          <button className="flex items-center gap-2 hover:text-gold"><ShoppingBag className="h-4 w-4" />Carrito (0)</button>
        </div>
      </div>
    </header>
  );
}

function HeroV4() {
  return (
    <section className="relative w-screen left-1/2 -translate-x-1/2 min-h-[720px] overflow-hidden">
      <img src={hero} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
      <HeaderV4 />
      <div className="container-wk relative z-10 pt-44 pb-24 max-w-3xl">
        <div className="eyebrow mb-5">Más que camisetas</div>
        <h1 className="font-display uppercase text-6xl md:text-8xl leading-[0.92]">
          Historias<br />que nos<br /><span className="text-gold">unen</span>
        </h1>
        <p className="mt-8 text-muted-foreground max-w-sm leading-relaxed">
          Camisetas de selecciones icónicas.<br />
          Para quienes viven el fútbol<br />
          más allá de los 90 minutos.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a href="#colecciones" className="inline-flex items-center gap-3 bg-gradient-gold text-primary-foreground font-semibold px-7 py-3.5 rounded text-xs uppercase tracking-[0.18em] shadow-gold hover:brightness-110 transition">
            Explorar colección <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#vendidas" className="inline-flex items-center gap-3 border border-border bg-background/40 backdrop-blur px-7 py-3.5 rounded text-xs uppercase tracking-[0.18em] hover:border-gold hover:text-gold transition">
            Ver más vendidas
          </a>
        </div>
      </div>
      <div className="absolute right-8 bottom-12 z-10 hidden md:flex h-24 w-24 rounded-full border border-gold/50 items-center justify-center text-[8px] tracking-[0.2em] text-gold uppercase text-center">
        Calidad<br />Premium
      </div>
    </section>
  );
}

const sellers = [
  { name: "España 2010 Home", tag: "Campeones del mundo", img: jPor },
  { name: "Brasil 2002 Home", tag: "Pentacampeones", img: jBra },
  { name: "Francia 1998 Home", tag: "Campeones del mundo", img: jFra },
  { name: "Argentina 1986 Home", tag: "Campeones del mundo", img: jArg },
];

function Bestsellers() {
  return (
    <section id="vendidas" className="py-20">
      <div className="container-wk">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="eyebrow mb-2">Las favoritas</div>
            <h2 className="font-display uppercase text-4xl md:text-5xl">Más vendidas</h2>
          </div>
          <a href="#" className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground hover:text-gold flex items-center gap-2">
            Ver todas <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {sellers.map((p) => (
            <article key={p.name} className="group bg-card border border-border rounded-lg overflow-hidden hover:border-gold/40 transition">
              <div className="aspect-square bg-secondary/40 overflow-hidden">
                <img src={p.img} alt={p.name} className="h-full w-full object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <div className="p-5">
                <h3 className="text-sm font-semibold uppercase tracking-wider">{p.name}</h3>
                <p className="text-[10px] text-muted-foreground uppercase tracking-[0.18em] mt-1">{p.tag}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-display text-lg text-gold">€49,90</span>
                  <button className="h-8 w-8 rounded-full border border-border flex items-center justify-center hover:bg-gold hover:text-primary-foreground hover:border-gold transition">
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const pillars = [
  { icon: Shield, title: "Autenticidad visual", text: "Diseños inspirados en las camisetas más icónicas del fútbol internacional." },
  { icon: Gem, title: "Calidad premium", text: "Tejidos ligeros, escudos termoadheridos y acabados modernos." },
  { icon: Globe2, title: "Cultura futbolera", text: "No vendemos solo camisetas. Vendemos recuerdos, generaciones y momentos históricos." },
];

function Pillars() {
  return (
    <section className="py-20">
      <div className="container-wk">
        <div className="eyebrow mb-2">Nuestros pilares</div>
        <h2 className="font-display uppercase text-4xl md:text-5xl mb-14">Por qué FutbolTTop</h2>
        <div className="grid md:grid-cols-3 gap-10 border-t border-border pt-14">
          {pillars.map((p) => (
            <div key={p.title} className="text-center px-4 md:border-r md:last:border-r-0 border-border">
              <p.icon className="h-9 w-9 text-gold mx-auto" strokeWidth={1.4} />
              <h3 className="mt-5 text-sm font-bold uppercase tracking-[0.18em]">{p.title}</h3>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DropBanner() {
  return (
    <section className="relative overflow-hidden border-y border-border">
      <img src={drop} alt="" className="absolute inset-0 h-full w-full object-cover opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
      <div className="container-wk relative py-24 grid md:grid-cols-2 gap-10 items-center min-h-[420px]">
        <div>
          <h2 className="font-display uppercase text-5xl md:text-6xl leading-[0.95]">
            1998.<br /><span className="text-gold">París.</span><br />
            El fútbol cambió<br />para siempre.
          </h2>
          <a href="#" className="mt-8 inline-flex items-center gap-3 border border-border px-7 py-3.5 rounded text-xs uppercase tracking-[0.18em] hover:border-gold hover:text-gold transition">
            Descubrir drop <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="hidden md:flex justify-end">
          <div className="h-32 w-32 rounded-full border border-gold/50 flex items-center justify-center text-[9px] tracking-[0.22em] text-gold uppercase text-center">
            Edición<br />Limitada<br />Drop Exclusivo
          </div>
        </div>
      </div>
    </section>
  );
}

const reviews = [
  { text: "La calidad me sorprendió muchísimo. Parece una camiseta oficial actual.", name: "Javier, Zaragoza" },
  { text: "El packaging y la presentación hacen que parezca una marca mucho más grande.", name: "Marco, Milán" },
  { text: "Mi nueva tienda de confianza. Envío rápido y camisetas brutales.", name: "Diego, Madrid" },
];

function Reviews() {
  return (
    <section className="py-20">
      <div className="container-wk">
        <div className="flex items-end justify-between mb-10">
          <h2 className="font-display uppercase text-2xl tracking-[0.1em]">Lo que dicen nuestros clientes</h2>
          <a href="#" className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground hover:text-gold flex items-center gap-2">
            Ver más opiniones <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {reviews.map((r) => (
            <figure key={r.name} className="bg-card border border-border rounded-lg p-6">
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />)}
              </div>
              <blockquote className="text-sm leading-relaxed text-foreground/90">"{r.text}"</blockquote>
              <figcaption className="mt-6 pt-4 border-t border-border flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-gradient-gold" />
                <div className="text-[11px] uppercase tracking-[0.18em] font-semibold">{r.name}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Instagram() {
  const imgs = [jArg, jBra, insta1, insta2, jFra, insta3];
  return (
    <section className="py-12 border-t border-border">
      <div className="container-wk grid grid-cols-2 md:grid-cols-[1fr_3fr] gap-6 items-center">
        <div>
          <div className="eyebrow mb-2">Seguinos en Instagram</div>
          <div className="font-display text-2xl text-gold">@futbolttop</div>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
          {imgs.map((src, i) => (
            <div key={i} className="aspect-square overflow-hidden rounded">
              <img src={src} alt="" className="h-full w-full object-cover hover:scale-110 transition duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FooterV4() {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="container-wk py-12 grid md:grid-cols-3 gap-10 items-center">
        <Logo />
        <div>
          <div className="text-xs uppercase tracking-[0.18em] font-bold mb-2">Unite a la comunidad</div>
          <p className="text-xs text-muted-foreground">Recibí novedades, lanzamientos exclusivos y beneficios especiales.</p>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
          <input type="email" placeholder="TU EMAIL" className="flex-1 bg-secondary border border-border rounded px-4 py-3 text-xs tracking-[0.18em] uppercase placeholder:text-muted-foreground/60 focus:outline-none focus:border-gold" />
          <button className="bg-gradient-gold text-primary-foreground font-semibold px-6 py-3 rounded text-xs uppercase tracking-[0.18em] hover:brightness-110">Suscribirme</button>
        </form>
      </div>
      <div className="border-t border-border">
        <div className="container-wk py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          <div>© 2024 FutbolTTop. Todos los derechos reservados.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold">Envíos y devoluciones</a>
            <a href="#" className="hover:text-gold">Preguntas frecuentes</a>
            <a href="#" className="hover:text-gold">Términos y condiciones</a>
            <a href="#" className="hover:text-gold">Contacto</a>
          </div>
          <div className="flex gap-2 text-foreground/70">
            <span>VISA</span><span>Pay</span><span>MC</span><span>PP</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function V4Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroV4 />
      <Bestsellers />
      <Pillars />
      <DropBanner />
      <Reviews />
      <Instagram />
      <FooterV4 />
    </div>
  );
}
