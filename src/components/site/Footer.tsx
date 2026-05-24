import { Trophy, Instagram, Facebook, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer id="contacto" className="border-t border-border bg-card/40">
      <div className="container-wk py-14 grid md:grid-cols-2 gap-10">
        <div>
          <div className="flex items-center gap-2">
            <Trophy className="h-6 w-6 text-gold" />
            <div className="leading-none">
              <div className="font-display text-lg tracking-wide">WORLDKITS</div>
              <div className="text-[9px] tracking-[0.3em] text-muted-foreground">STORE</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            Camisetas oficiales de fútbol de las mejores selecciones del mundo.
          </p>
          <div className="mt-6 flex gap-3">
            {[Instagram, Facebook, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="social"
                className="h-9 w-9 rounded-md border border-border flex items-center justify-center hover:border-gold hover:text-gold transition"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.18em] font-bold">
            Suscríbete y obtén 10% de descuento
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            Recibe ofertas exclusivas y novedades.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-5 flex flex-col sm:flex-row gap-2"
          >
            <input
              type="email"
              required
              placeholder="Tu correo electrónico"
              className="flex-1 bg-secondary border border-border rounded-md px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-gold"
            />
            <button className="bg-gradient-gold text-primary-foreground font-semibold px-6 py-3 rounded-md uppercase tracking-wider text-xs shadow-gold hover:brightness-110 transition">
              Suscribirse
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-wk py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>© 2026 WorldKits Store. Todos los derechos reservados.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold">Términos y condiciones</a>
            <a href="#" className="hover:text-gold">Política de privacidad</a>
            <a href="#" className="hover:text-gold">Política de envíos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
