import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/products";

export const Route = createFileRoute("/milestone-gifts")({
  head: () => ({
    meta: [
      { title: "Milestone Gifts — Punya Ventures" },
      { name: "description", content: "Milestone gifts and celebration collections." },
    ],
  }),
  component: MilestoneGiftsPage,
});

function MilestoneGiftsPage() {
  const [sort, setSort] = useState("featured");

  const filtered = useMemo(() => {
    let r = products.filter((p) => p.occasion.includes("Milestones"));
    if (sort === "low") r.sort((a, b) => a.price - b.price);
    if (sort === "high") r.sort((a, b) => b.price - a.price);
    return r;
  }, [sort]);

  return (
    <div>
      <section className="bg-gradient-luxury border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-xs uppercase tracking-[0.25em] text-gold">Business & Tech Gifts</div>
          <h1 className="mt-3 font-display text-4xl lg:text-6xl text-primary">Milestone Gifts</h1>
          <div className="gold-divider mt-4" />
          <p className="mt-5 text-muted-foreground max-w-2xl">Celebrate achievements and milestones with premium corporate gifts.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-6 gap-3">
          <div className="text-sm text-muted-foreground">{filtered.length} products</div>
          <div className="flex items-center gap-3">
            <select value={sort} onChange={(e) => setSort(e.target.value)} className="h-10 rounded-full border border-border bg-card px-4 text-sm">
              <option value="featured">Featured</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <Link key={p.id} to="/product/$id" params={{ id: p.id }}>
              <ProductCard product={p} />
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">No products yet — add items to this category.</div>
        )}
      </div>
    </div>
  );
}
