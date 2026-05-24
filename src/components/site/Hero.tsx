import { ArrowRight, Trophy, Truck, ShieldCheck } from "lucide-react";
import hero from "@/assets/hero-players.jpg";

const features = [
  { icon: Trophy, title: "Productos", sub: "Oficiales" },
  { icon: Truck, title: "Envíos", sub: "Rápidos" },
  { icon: ShieldCheck, title: "Pago 100%", sub: "Seguro" },
];

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden border-b border-border">
      <div className="container-wk relative grid lg:grid-cols-2 gap-8 items-center pt-12 pb-10 min-h-[640px]">
        <div className="relative z-10 max-w-xl">
          <h1 className="font-display text-5xl md:text-7xl leading-[0.95] uppercase">
            Vive la pasión
            <br />
            <span className="text-gold">del mundial</span>
          </h1>
          <p className="mt-6 text-muted-foreground text-base md:text-lg max-w-md">
            Camisetas oficiales de las mejores selecciones. Calidad premium.
            Envíos a todo el mundo.
          </p>
          <a
            href="#camisetas"
            className="mt-8 inline-flex items-center gap-3 bg-gradient-gold text-primary-foreground font-semibold px-7 py-3.5 rounded-md uppercase tracking-wider text-sm shadow-gold hover:brightness-110 transition"
          >
            Ver colección
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary-foreground/15">
              <ArrowRight className="h-4 w-4" />
            </span>
          </a>

          <div className="mt-12 pt-8 border-t border-border grid grid-cols-3 gap-6 max-w-md">
            {features.map((f) => (
              <div key={f.title} className="flex flex-col items-center text-center">
                <f.icon className="h-7 w-7 text-gold" />
                <div className="mt-2 text-[10px] tracking-[0.18em] uppercase font-semibold text-muted-foreground">
                  {f.title}
                </div>
                <div className="text-[10px] tracking-[0.18em] uppercase font-semibold text-gold">
                  {f.sub}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute inset-y-0 right-0 lg:w-[58%] w-full opacity-50 lg:opacity-100 pointer-events-none">
          <img
            src={hero}
            alt="Jugadores con camisetas oficiales junto al trofeo del mundial"
            width={1536}
            height={1280}
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent lg:via-background/20" />
        </div>
      </div>
    </section>
  );
}
