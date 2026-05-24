const brands = ["adidas", "NIKE", "PUMA", "new balance", "umbro"];

export function Brands() {
  return (
    <section className="py-14 border-t border-border">
      <div className="container-wk flex flex-wrap items-center justify-around gap-8 opacity-60">
        {brands.map((b) => (
          <span key={b} className="font-display text-2xl md:text-3xl tracking-widest lowercase text-foreground/70">
            {b}
          </span>
        ))}
      </div>
    </section>
  );
}
