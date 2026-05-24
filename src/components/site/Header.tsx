import { Trophy, Search, ShoppingBag } from "lucide-react";

const nav = [
  { label: "Inicio", href: "#inicio", active: true },
  { label: "Camisetas", href: "#camisetas" },
  { label: "Países", href: "#paises" },
  { label: "Colecciones", href: "#colecciones" },
  { label: "Contacto", href: "#contacto" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="container-wk flex items-center justify-between h-16">
        <a href="#inicio" className="flex items-center gap-2">
          <Trophy className="h-6 w-6 text-gold" />
          <div className="leading-none">
            <div className="font-display text-lg tracking-wide">WORLDKITS</div>
            <div className="text-[9px] tracking-[0.3em] text-muted-foreground">STORE</div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {nav.map((n) => (
            <a
              key={n.label}
              href={n.href}
              className={`uppercase tracking-wider text-xs font-semibold transition-colors hover:text-gold ${
                n.active ? "text-gold border-b-2 border-gold pb-1" : "text-foreground/80"
              }`}
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <button aria-label="Buscar" className="text-foreground/80 hover:text-gold">
            <Search className="h-5 w-5" />
          </button>
          <button aria-label="Carrito" className="relative text-foreground/80 hover:text-gold">
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute -top-1.5 -right-1.5 bg-gold text-primary-foreground text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
              0
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
