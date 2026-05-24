import { Star } from "lucide-react";

const testimonials = [
  {
    text: "La calidad es increíble, llegó súper rápido y la camiseta es idéntica a la original. 100% recomendado.",
    name: "Carlos M.",
    country: "España",
    initial: "C",
  },
  {
    text: "Compré la de Argentina y la de Brasil, ambas espectaculares. Definitivamente volveré a comprar.",
    name: "Andrés P.",
    country: "Colombia",
    initial: "A",
  },
  {
    text: "Atención al cliente de primera y el envío fue muy rápido. La mejor tienda de camisetas.",
    name: "Juan D.",
    country: "México",
    initial: "J",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 border-t border-border">
      <div className="container-wk">
        <div className="eyebrow mb-2">Lo que dicen nuestros clientes</div>
        <h2 className="text-3xl md:text-4xl">Miles de Fanáticos Felices</h2>
        <div className="mt-3 h-[3px] w-12 bg-gold" />

        <div className="mt-10 grid md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <figure key={t.name} className="bg-card border border-border rounded-xl p-6 shadow-card-soft">
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <blockquote className="text-sm leading-relaxed text-foreground/90">
                "{t.text}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 pt-4 border-t border-border">
                <div className="h-10 w-10 rounded-full bg-gradient-gold text-primary-foreground font-bold flex items-center justify-center">
                  {t.initial}
                </div>
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.country}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
