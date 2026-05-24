import { Award, Lock, Headphones, RefreshCw } from "lucide-react";

const items = [
  { icon: Award, title: "Calidad Premium", desc: "Materiales de alta calidad y tecnología oficial." },
  { icon: Lock, title: "Pago Seguro", desc: "Protegemos tu información con encriptación SSL." },
  { icon: Headphones, title: "Atención 24/7", desc: "Estamos disponibles para ayudarte siempre." },
  { icon: RefreshCw, title: "Devoluciones Fáciles", desc: "30 días para cambios y devoluciones." },
];

export function Features() {
  return (
    <section className="py-20 border-t border-border">
      <div className="container-wk">
        <div className="eyebrow mb-2">¿Por qué elegirnos?</div>
        <h2 className="text-3xl md:text-4xl">La Mejor Experiencia</h2>
        <div className="mt-3 h-[3px] w-12 bg-gold" />

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {items.map((it) => (
            <div key={it.title} className="text-center">
              <div className="mx-auto h-14 w-14 rounded-full border border-gold/40 flex items-center justify-center bg-gold/5">
                <it.icon className="h-6 w-6 text-gold" />
              </div>
              <h3 className="mt-5 text-xs uppercase tracking-[0.18em] font-bold">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
