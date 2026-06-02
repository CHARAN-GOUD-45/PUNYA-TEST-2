import { Heart, Eye, ShoppingBag } from "lucide-react";
import { formatINR, type Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group luxury-card overflow-hidden flex flex-col">
      <div className="relative aspect-square overflow-hidden bg-secondary">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={800}
          height={800}
          className="w-full h-full object-cover hover-zoom-img"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 px-3 py-1 text-[10px] font-medium tracking-[0.15em] uppercase rounded-full bg-navy text-cream">
            {product.badge}
          </span>
        )}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300">
          <button aria-label="Wishlist" className="w-9 h-9 rounded-full bg-card/95 backdrop-blur flex items-center justify-center hover:bg-gold hover:text-navy transition-colors">
            <Heart className="w-4 h-4" />
          </button>
          <button aria-label="Quick view" className="w-9 h-9 rounded-full bg-card/95 backdrop-blur flex items-center justify-center hover:bg-gold hover:text-navy transition-colors">
            <Eye className="w-4 h-4" />
          </button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button className="w-full h-10 rounded-full bg-primary text-primary-foreground text-xs font-medium tracking-wide flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors">
            <ShoppingBag className="w-3.5 h-3.5" /> Add to Cart
          </button>
        </div>
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{product.category}</div>
        <h3 className="font-display text-lg text-primary mt-1 leading-snug">{product.name}</h3>
        <div className="mt-auto pt-4 flex items-center justify-between">
          <span className="font-display text-xl text-primary">{formatINR(product.price)}</span>
          {product.customizable && (
            <span className="text-[10px] uppercase tracking-[0.15em] text-gold">Customizable</span>
          )}
        </div>
      </div>
    </div>
  );
}
