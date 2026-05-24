import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Products } from "@/components/site/Products";
import { ShippingBanner } from "@/components/site/ShippingBanner";
import { Features } from "@/components/site/Features";
import { Collections } from "@/components/site/Collections";
import { Testimonials } from "@/components/site/Testimonials";
import { Brands } from "@/components/site/Brands";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "WorldKits Store — Camisetas oficiales de fútbol" },
      {
        name: "description",
        content:
          "Camisetas oficiales de las mejores selecciones del mundo. Calidad premium, envíos gratis a todo el mundo.",
      },
      { property: "og:title", content: "WorldKits Store — Camisetas oficiales de fútbol" },
      {
        property: "og:description",
        content: "Camisetas oficiales de las mejores selecciones. Envíos a todo el mundo.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Products />
        <ShippingBanner />
        <Features />
        <Collections />
        <Testimonials />
        <Brands />
      </main>
      <Footer />
    </div>
  );
}
