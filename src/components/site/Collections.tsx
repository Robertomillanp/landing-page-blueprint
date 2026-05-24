import retro from "@/assets/col-retro.jpg";
import c2022 from "@/assets/col-2022.jpg";
import winners from "@/assets/col-winners.jpg";

const collections = [
  { title: "Retro", subtitle: "Revive la historia", img: retro },
  { title: "2022", subtitle: "Camisetas Mundial", img: c2022 },
  { title: "Ganadoras", subtitle: "De campeones", img: winners },
];

export function Collections() {
  return (
    <section id="colecciones" className="py-20 border-t border-border">
      <div className="container-wk">
        <div className="eyebrow mb-2">Colecciones</div>
        <h2 className="text-3xl md:text-4xl">Descubre Nuestras Colecciones</h2>
        <div className="mt-3 h-[3px] w-12 bg-gold" />

        <div className="mt-10 grid md:grid-cols-3 gap-5">
          {collections.map((c) => (
            <a
              key={c.title}
              href="#camisetas"
              className="group relative aspect-[4/5] rounded-xl overflow-hidden border border-border block"
            >
              <img
                src={c.img}
                alt={c.title}
                width={800}
                height={900}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="font-display text-3xl uppercase">{c.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{c.subtitle}</p>
                <span className="mt-4 inline-block text-[10px] tracking-[0.2em] uppercase border border-border bg-secondary/60 backdrop-blur px-4 py-2 rounded group-hover:border-gold group-hover:text-gold transition">
                  Ver colección
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
