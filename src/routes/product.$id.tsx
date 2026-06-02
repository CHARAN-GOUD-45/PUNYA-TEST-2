import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { products, formatINR } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { Heart, Minus, Plus, Truck, Shield, Package, Sparkles, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/product/$id")({
  loader: ({ params }) => {
    const product = products.find((p) => p.id === params.id);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.product.name ?? "Product"} — Punya Ventures` },
      { name: "description", content: `${loaderData?.product.name} — premium corporate gifting with custom branding.` },
      { property: "og:title", content: `${loaderData?.product.name ?? "Product"} — Punya Ventures` },
      { property: "og:image", content: loaderData?.product.image },
    ],
  }),
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const [qty, setQty] = useState(50);
  const [pkg, setPkg] = useState("Premium");
  const related = products.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-xs text-muted-foreground flex items-center gap-2">
        <Link to="/">Home</Link><ChevronRight className="w-3 h-3" />
        <Link to="/gifting">Gifting</Link><ChevronRight className="w-3 h-3" />
        <span className="text-primary">{product.name}</span>
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 pb-16">
        <div>
          <div className="rounded-3xl overflow-hidden bg-secondary aspect-square shadow-soft">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>
          <div className="grid grid-cols-4 gap-3 mt-4">
            {[product.image, product.image, product.image, product.image].map((src, i) => (
              <button key={i} className="rounded-xl overflow-hidden aspect-square border-2 border-transparent hover:border-gold">
                <img src={src} alt={`thumb-${i}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-gold">{product.category}</div>
          <h1 className="mt-3 font-display text-4xl lg:text-5xl text-primary leading-tight">{product.name}</h1>
          <div className="mt-4 flex items-baseline gap-3">
            <div className="font-display text-3xl text-primary">{formatINR(product.price)}</div>
            <div className="text-sm text-muted-foreground">per piece · ex GST</div>
          </div>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            A signature piece from our premium gifting atelier. Hand-finished, ethically sourced and
            ready for your branding. Ideal for corporate gifting at scale.
          </p>

          <div className="mt-8">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Packaging</div>
            <div className="flex gap-2 flex-wrap">
              {["Standard", "Premium", "Luxury Hamper"].map((p) => (
                <button key={p} onClick={() => setPkg(p)} className={`px-4 h-10 rounded-full border text-sm transition-colors ${pkg === p ? "bg-primary text-primary-foreground border-primary" : "border-border hover:border-gold"}`}>{p}</button>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Branding</div>
            <div className="flex gap-2 flex-wrap">
              {["No branding", "Logo print", "Gold embossing", "Engraving"].map((p) => (
                <span key={p} className="px-4 h-10 inline-flex items-center rounded-full border border-border bg-card text-sm">{p}</span>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <div className="flex items-center border border-border rounded-full">
              <button onClick={() => setQty(Math.max(1, qty - 10))} className="w-11 h-11 flex items-center justify-center"><Minus className="w-4 h-4" /></button>
              <input value={qty} onChange={(e) => setQty(Math.max(1, +e.target.value || 1))} className="w-16 text-center bg-transparent" />
              <button onClick={() => setQty(qty + 10)} className="w-11 h-11 flex items-center justify-center"><Plus className="w-4 h-4" /></button>
            </div>
            <button className="flex-1 h-12 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90">Add to Cart</button>
            <button aria-label="wishlist" className="w-12 h-12 rounded-full border border-border flex items-center justify-center"><Heart className="w-4 h-4" /></button>
          </div>

          <Link to="/bulk-orders" className="mt-4 block w-full text-center h-12 leading-[3rem] rounded-full bg-gradient-gold text-navy text-sm font-medium">Request Bulk Quote (50+)</Link>

          <div className="mt-8 grid grid-cols-3 gap-3">
            {[
              { icon: Truck, label: "Pan-India 5-7 days" },
              { icon: Shield, label: "Quality assured" },
              { icon: Sparkles, label: "Custom branding" },
            ].map((f) => (
              <div key={f.label} className="luxury-card p-4 text-center">
                <f.icon className="w-5 h-5 text-gold mx-auto" />
                <div className="text-xs text-muted-foreground mt-2">{f.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-xs uppercase tracking-[0.25em] text-gold">Frequently bought together</div>
          <h2 className="mt-2 font-display text-3xl text-primary">Complete the kit</h2>
          <div className="gold-divider mt-3 mb-8" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {related.map((p) => (
              <Link key={p.id} to="/product/$id" params={{ id: p.id }}>
                <ProductCard product={p} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
