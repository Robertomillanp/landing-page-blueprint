import { ArrowRight, Star, ShoppingCart } from "lucide-react";
import arg from "@/assets/jersey-argentina.jpg";
import fra from "@/assets/jersey-france.jpg";
import bra from "@/assets/jersey-brazil.jpg";
import por from "@/assets/jersey-portugal.jpg";

const products = [
  { name: "Argentina 2022", img: arg, rating: 5, reviews: 1248, price: "€89,90" },
  { name: "Francia 2022", img: fra, rating: 4.5, reviews: 982, price: "€89,90" },
  { name: "Brasil 2022", img: bra, rating: 4.5, reviews: 1107, price: "€89,90" },
  { name: "Portugal 2022", img: por, rating: 4.5, reviews: 756, price: "€89,90" },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-3.5 w-3.5 ${
            i < Math.floor(rating) ? "fill-gold text-gold" : "text-muted-foreground/40"
          }`}
        />
      ))}
    </div>
  );
}

export function Products() {
  return (
    <section id="camisetas" className="py-20">
      <div className="container-wk">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="eyebrow mb-2">Lo más vendido</div>
            <h2 className="text-3xl md:text-4xl">Camisetas Más Populares</h2>
            <div className="mt-3 h-[3px] w-12 bg-gold" />
          </div>
          <a
            href="#"
            className="hidden md:inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground hover:text-gold transition"
          >
            Ver todas <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((p) => (
            <article
              key={p.name}
              className="group bg-card border border-border rounded-xl overflow-hidden shadow-card-soft hover:border-gold/40 transition"
            >
              <div className="aspect-square bg-secondary/40 overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  width={640}
                  height={640}
                  loading="lazy"
                  className="h-full w-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="font-sans font-semibold text-base">{p.name}</h3>
                <p className="text-xs text-muted-foreground mt-0.5">Local</p>
                <div className="mt-3 flex items-center gap-2">
                  <Stars rating={p.rating} />
                  <span className="text-xs text-muted-foreground">({p.reviews.toLocaleString()})</span>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-display text-xl text-gold">{p.price}</span>
                  <button
                    aria-label={`Añadir ${p.name} al carrito`}
                    className="h-9 w-9 rounded-md bg-secondary border border-border flex items-center justify-center text-foreground/80 hover:bg-gold hover:text-primary-foreground hover:border-gold transition"
                  >
                    <ShoppingCart className="h-4 w-4" />
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
