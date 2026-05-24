import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { ArrowRight, Trophy, Truck, ShieldCheck, Star, ShoppingCart, ChevronLeft, ChevronRight, Sparkles, Flame, Zap } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

import hero from "@/assets/hero-players.jpg";
import arg from "@/assets/jersey-argentina.jpg";
import fra from "@/assets/jersey-france.jpg";
import bra from "@/assets/jersey-brazil.jpg";
import por from "@/assets/jersey-portugal.jpg";
import retro from "@/assets/col-retro.jpg";
import c2022 from "@/assets/col-2022.jpg";
import winners from "@/assets/col-winners.jpg";

export const Route = createFileRoute("/v2")({
  head: () => ({
    meta: [
      { title: "WorldKits V2 — Experiencia 3D de camisetas de fútbol" },
      { name: "description", content: "Versión dinámica con animaciones 3D, carruseles y efectos premium." },
    ],
  }),
  component: V2Page,
});

// ---------- 3D Tilt Card ----------
function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rX = useSpring(useTransform(y, [-0.5, 0.5], [12, -12]), { stiffness: 200, damping: 20 });
  const rY = useSpring(useTransform(x, [-0.5, 0.5], [-12, 12]), { stiffness: 200, damping: 20 });

  const handleMove = (e: React.MouseEvent) => {
    const rect = ref.current!.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const reset = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ rotateX: rX, rotateY: rY, transformStyle: "preserve-3d", transformPerspective: 1000 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ---------- Hero ----------
function HeroV2() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative overflow-hidden min-h-[92vh] flex items-center border-b border-border">
      {/* animated bg */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 -z-10"
      >
        <img src={hero} alt="" className="h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </motion.div>

      {/* glow orbs */}
      <motion.div
        animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 h-80 w-80 rounded-full bg-gold/20 blur-3xl -z-10"
      />
      <motion.div
        animate={{ x: [0, -80, 0], y: [0, 50, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-gold-soft/15 blur-3xl -z-10"
      />

      <motion.div style={{ opacity }} className="container-wk grid lg:grid-cols-2 gap-10 items-center py-20">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 border border-gold/40 bg-gold/10 px-4 py-1.5 rounded-full text-xs uppercase tracking-[0.2em] text-gold mb-6"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Nueva temporada 2026
          </motion.div>

          <h1 className="font-display text-6xl md:text-8xl leading-[0.9] uppercase">
            {"Vive el".split(" ").map((w, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
                className="inline-block mr-3"
              >
                {w}
              </motion.span>
            ))}
            <br />
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="inline-block bg-gradient-gold bg-clip-text text-transparent"
            >
              Juego Bonito
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-6 text-muted-foreground text-lg max-w-md"
          >
            Camisetas oficiales con experiencia inmersiva. Gira, explora, vibra.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a href="#productos" className="group relative inline-flex items-center gap-3 bg-gradient-gold text-primary-foreground font-bold px-8 py-4 rounded-md uppercase tracking-wider text-sm shadow-gold overflow-hidden">
              <span className="relative z-10">Explorar colección</span>
              <ArrowRight className="h-4 w-4 relative z-10 group-hover:translate-x-1 transition" />
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
            </a>
            <a href="#colecciones" className="inline-flex items-center gap-2 border border-border hover:border-gold px-8 py-4 rounded-md uppercase tracking-wider text-sm font-semibold hover:text-gold transition">
              Ver historias
            </a>
          </motion.div>

          {/* stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-14 grid grid-cols-3 gap-6 max-w-md"
          >
            {[
              { n: "120+", l: "Selecciones" },
              { n: "50K", l: "Clientes" },
              { n: "4.9★", l: "Valoración" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl text-gold">{s.n}</div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* floating 3D jersey card */}
        <div className="hidden lg:flex justify-center">
          <TiltCard className="relative w-[420px] aspect-[3/4] rounded-2xl overflow-hidden border border-gold/30 shadow-gold">
            <motion.img
              src={arg}
              alt=""
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 h-full w-full object-cover"
              style={{ transform: "translateZ(40px)" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6" style={{ transform: "translateZ(60px)" }}>
              <div className="text-[10px] uppercase tracking-[0.2em] text-gold">Edición Limitada</div>
              <div className="font-display text-3xl mt-1">Argentina 2026</div>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-2xl font-bold text-gold">€99,90</span>
                <Flame className="h-5 w-5 text-gold animate-pulse" />
              </div>
            </div>
          </TiltCard>
        </div>
      </motion.div>
    </section>
  );
}

// ---------- Marquee ----------
function Marquee() {
  const words = ["Envíos gratis", "★", "Producto oficial", "★", "Pago seguro", "★", "Edición limitada", "★"];
  return (
    <div className="border-y border-border bg-card overflow-hidden py-5">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="flex gap-12 whitespace-nowrap"
      >
        {[...words, ...words, ...words, ...words].map((w, i) => (
          <span key={i} className={`font-display text-2xl uppercase tracking-wider ${w === "★" ? "text-gold" : ""}`}>
            {w}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

// ---------- Product Carousel ----------
const products = [
  { name: "Argentina 2026", img: arg, price: "€99,90", tag: "Top ventas" },
  { name: "Francia 2026", img: fra, price: "€89,90", tag: "Nuevo" },
  { name: "Brasil 2026", img: bra, price: "€89,90", tag: "Hot" },
  { name: "Portugal 2026", img: por, price: "€89,90", tag: "Limitada" },
  { name: "Argentina Retro", img: arg, price: "€79,90", tag: "Retro" },
  { name: "Brasil Retro", img: bra, price: "€79,90", tag: "Retro" },
];

function ProductsCarousel() {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: "start" });
  useEffect(() => {
    if (!embla) return;
    const id = setInterval(() => embla.scrollNext(), 3500);
    return () => clearInterval(id);
  }, [embla]);

  return (
    <section id="productos" className="py-24 relative">
      <div className="container-wk">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="eyebrow mb-2 flex items-center gap-2"><Zap className="h-3 w-3" /> Trending</div>
            <h2 className="font-display text-4xl md:text-5xl uppercase">Las más buscadas</h2>
            <div className="mt-3 h-[3px] w-16 bg-gradient-gold" />
          </div>
          <div className="hidden md:flex gap-2">
            <button onClick={() => embla?.scrollPrev()} className="h-11 w-11 rounded-full border border-border hover:border-gold hover:text-gold flex items-center justify-center transition">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button onClick={() => embla?.scrollNext()} className="h-11 w-11 rounded-full border border-border hover:border-gold hover:text-gold flex items-center justify-center transition">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex gap-5">
            {products.map((p, i) => (
              <div key={i} className="flex-[0_0_85%] sm:flex-[0_0_45%] lg:flex-[0_0_28%] min-w-0">
                <TiltCard className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-gold/50 transition shadow-card-soft">
                  <div className="relative aspect-[4/5] bg-secondary/40 overflow-hidden">
                    <img src={p.img} alt={p.name} loading="lazy" className="h-full w-full object-cover group-hover:scale-110 transition duration-700" />
                    <div className="absolute top-4 left-4 bg-gold text-primary-foreground text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                      {p.tag}
                    </div>
                    <button className="absolute bottom-4 right-4 h-12 w-12 rounded-full bg-gradient-gold text-primary-foreground flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-gold">
                      <ShoppingCart className="h-5 w-5" />
                    </button>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-xl uppercase">{p.name}</h3>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-2xl font-bold text-gold">{p.price}</span>
                      <div className="flex items-center gap-0.5">
                        {Array.from({ length: 5 }).map((_, j) => (
                          <Star key={j} className="h-3.5 w-3.5 fill-gold text-gold" />
                        ))}
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Collections Slider (vertical reveal) ----------
const collections = [
  { title: "Retro", subtitle: "Revive la historia", img: retro, desc: "Diseños icónicos de los 70-90s reeditados con calidad premium." },
  { title: "Mundial 2026", subtitle: "Las últimas oficiales", img: c2022, desc: "Las equipaciones que conquistarán Norteamérica." },
  { title: "Ganadoras", subtitle: "De campeones", img: winners, desc: "Camisetas de los equipos que levantaron la copa." },
];

function CollectionsV2() {
  const [active, setActive] = useState(0);
  return (
    <section id="colecciones" className="py-24 border-t border-border bg-card/30">
      <div className="container-wk">
        <div className="text-center mb-14">
          <div className="eyebrow mb-2">Colecciones</div>
          <h2 className="font-display text-4xl md:text-5xl uppercase">Historias que se visten</h2>
          <div className="mt-3 h-[3px] w-16 bg-gradient-gold mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* image stage */}
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-border">
            <AnimatePresence mode="wait">
              <motion.img
                key={active}
                src={collections[active].img}
                alt={collections[active].title}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.7 }}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="text-[10px] uppercase tracking-[0.2em] text-gold">{collections[active].subtitle}</div>
              <div className="font-display text-5xl uppercase mt-1">{collections[active].title}</div>
            </div>
          </div>

          {/* selectors */}
          <div className="space-y-3">
            {collections.map((c, i) => (
              <button
                key={c.title}
                onClick={() => setActive(i)}
                className={`w-full text-left p-6 rounded-2xl border transition-all duration-500 ${
                  active === i ? "border-gold bg-gold/5" : "border-border hover:border-gold/40"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">0{i + 1}</div>
                    <div className="font-display text-2xl uppercase mt-1">{c.title}</div>
                  </div>
                  <ArrowRight className={`h-5 w-5 transition ${active === i ? "text-gold translate-x-1" : "text-muted-foreground"}`} />
                </div>
                <AnimatePresence>
                  {active === i && (
                    <motion.p
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="mt-3 text-sm text-muted-foreground overflow-hidden"
                    >
                      {c.desc}
                    </motion.p>
                  )}
                </AnimatePresence>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- CTA ----------
function CtaV2() {
  return (
    <section className="py-24">
      <div className="container-wk">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl border border-gold/30 p-12 md:p-20 text-center bg-gradient-to-br from-card via-card to-background"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-gold/10 blur-3xl"
          />
          <Trophy className="h-12 w-12 text-gold mx-auto mb-6" />
          <h2 className="font-display text-4xl md:text-6xl uppercase">¿Listo para vestir leyendas?</h2>
          <p className="mt-6 text-muted-foreground text-lg max-w-xl mx-auto">
            Únete a 50.000+ aficionados. Envíos gratis a partir de €50.
          </p>
          <a href="#productos" className="mt-10 inline-flex items-center gap-3 bg-gradient-gold text-primary-foreground font-bold px-10 py-4 rounded-md uppercase tracking-wider text-sm shadow-gold hover:scale-105 transition">
            Comprar ahora <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function V2Page() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroV2 />
        <Marquee />
        <ProductsCarousel />
        <CollectionsV2 />
        <CtaV2 />
      </main>
      <Footer />
    </div>
  );
}
