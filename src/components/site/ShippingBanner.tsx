import { ArrowRight } from "lucide-react";
import globe from "@/assets/shipping-globe.jpg";

export function ShippingBanner() {
  return (
    <section className="pb-20">
      <div className="container-wk">
        <div className="relative overflow-hidden rounded-2xl border border-gold/40 bg-card">
          <div className="absolute inset-0 bg-gradient-to-r from-card via-card/90 to-transparent z-10" />
          <img
            src={globe}
            alt=""
            aria-hidden
            width={900}
            height={512}
            loading="lazy"
            className="absolute right-0 inset-y-0 h-full w-1/2 object-cover opacity-90"
          />
          <div className="relative z-20 p-10 md:p-14 max-w-lg">
            <h3 className="font-display text-3xl md:text-4xl uppercase leading-tight">
              Envíos gratis
              <br />
              <span className="text-gold">a todo el mundo</span>
            </h3>
            <p className="mt-3 text-sm text-muted-foreground">Por compras superiores a 99€</p>
            <a
              href="#camisetas"
              className="mt-6 inline-flex items-center gap-3 bg-gradient-gold text-primary-foreground font-semibold px-6 py-3 rounded-md uppercase tracking-wider text-xs shadow-gold hover:brightness-110 transition"
            >
              Comprar ahora
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary-foreground/15">
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
