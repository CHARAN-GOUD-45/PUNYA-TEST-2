import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { occasions, budgetRanges, recipients, products, formatINR } from "@/lib/products";
import { Check, ArrowRight, ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/build-your-kit")({
  head: () => ({
    meta: [
      { title: "Build Your Own Corporate Gift Kit — Punya Ventures" },
      { name: "description", content: "Configure a bespoke corporate gift kit. Choose occasion, budget, recipient, products, packaging and branding." },
      { property: "og:title", content: "Build Your Own Corporate Gift Kit" },
      { property: "og:description", content: "Premium step-by-step kit configurator." },
    ],
  }),
  component: BuildKitPage,
});

const steps = ["Occasion", "Budget", "Recipient", "Products", "Packaging", "Branding", "Review"];

function BuildKitPage() {
  const [step, setStep] = useState(0);
  const [occ, setOcc] = useState("");
  const [budget, setBudget] = useState("");
  const [recipient, setRecipient] = useState("");
  const [picked, setPicked] = useState<string[]>([]);
  const [pkg, setPkg] = useState("Premium");
  const [brand, setBrand] = useState("Logo print");

  const total = products.filter((p) => picked.includes(p.id)).reduce((s, p) => s + p.price, 0);
  const togglePick = (id: string) => setPicked((p) => p.includes(id) ? p.filter((x) => x !== id) : [...p, id]);

  return (
    <div>
      <section className="bg-gradient-luxury border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="text-xs uppercase tracking-[0.25em] text-gold">Configurator</div>
          <h1 className="mt-3 font-display text-4xl lg:text-6xl text-primary">Build Your Own Kit</h1>
          <div className="gold-divider mt-4" />
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8">
          {steps.map((s, i) => (
            <div key={s} className="flex items-center gap-2 shrink-0">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium ${i <= step ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"}`}>
                {i < step ? <Check className="w-4 h-4" /> : i + 1}
              </div>
              <span className={`text-sm ${i === step ? "text-primary font-medium" : "text-muted-foreground"}`}>{s}</span>
              {i < steps.length - 1 && <div className="w-8 h-px bg-border mx-1" />}
            </div>
          ))}
        </div>

        <div className="luxury-card p-8 min-h-[420px]">
          {step === 0 && <Choices items={occasions} value={occ} onChange={setOcc} title="Pick the occasion" />}
          {step === 1 && <Choices items={budgetRanges.map((b) => b.label)} value={budget} onChange={setBudget} title="Select your per-piece budget" />}
          {step === 2 && <Choices items={recipients} value={recipient} onChange={setRecipient} title="Who is it for?" />}
          {step === 3 && (
            <div>
              <h2 className="font-display text-2xl text-primary mb-1">Choose products</h2>
              <p className="text-sm text-muted-foreground mb-6">Tap to add or remove items from your kit.</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {products.map((p) => {
                  const on = picked.includes(p.id);
                  return (
                    <button key={p.id} onClick={() => togglePick(p.id)} className={`text-left luxury-card overflow-hidden ${on ? "ring-2 ring-gold" : ""}`}>
                      <div className="aspect-square overflow-hidden"><img src={p.image} alt={p.name} className="w-full h-full object-cover" /></div>
                      <div className="p-3">
                        <div className="text-xs text-primary line-clamp-1">{p.name}</div>
                        <div className="text-xs text-muted-foreground">{formatINR(p.price)}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
          {step === 4 && <Choices items={["Standard Box", "Premium Box", "Luxury Hamper", "Wooden Crate"]} value={pkg} onChange={setPkg} title="Select packaging" />}
          {step === 5 && <Choices items={["No branding", "Logo print", "Gold embossing", "Engraving", "Custom card"]} value={brand} onChange={setBrand} title="Branding & personalization" />}
          {step === 6 && (
            <div>
              <h2 className="font-display text-2xl text-primary">Review your kit</h2>
              <div className="gold-divider mt-3 mb-6" />
              <dl className="grid sm:grid-cols-2 gap-4 text-sm">
                <Row k="Occasion" v={occ || "—"} />
                <Row k="Budget" v={budget || "—"} />
                <Row k="Recipient" v={recipient || "—"} />
                <Row k="Packaging" v={pkg} />
                <Row k="Branding" v={brand} />
                <Row k="Items" v={`${picked.length} selected`} />
              </dl>
              <div className="mt-6 p-5 rounded-2xl bg-secondary flex items-center justify-between">
                <div>
                  <div className="text-xs text-muted-foreground">Estimated per-kit cost</div>
                  <div className="font-display text-3xl text-primary">{formatINR(total)}</div>
                </div>
                <button className="px-6 h-12 rounded-full bg-gradient-gold text-navy text-sm font-medium">Request Quote</button>
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-between mt-6">
          <button disabled={step === 0} onClick={() => setStep(step - 1)} className="inline-flex items-center gap-2 px-5 h-11 rounded-full border border-border disabled:opacity-40">
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
          {step < steps.length - 1 && (
            <button onClick={() => setStep(step + 1)} className="inline-flex items-center gap-2 px-6 h-11 rounded-full bg-primary text-primary-foreground">
              Next <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function Choices({ items, value, onChange, title }: { items: string[]; value: string; onChange: (v: string) => void; title: string }) {
  return (
    <div>
      <h2 className="font-display text-2xl text-primary mb-1">{title}</h2>
      <div className="gold-divider mt-2 mb-6" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {items.map((i) => (
          <button key={i} onClick={() => onChange(i)} className={`px-5 h-14 rounded-2xl border text-sm text-left transition-colors ${value === i ? "border-gold bg-secondary" : "border-border hover:border-gold/60"}`}>
            {i}
          </button>
        ))}
      </div>
    </div>
  );
}
function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex justify-between p-3 rounded-xl bg-secondary/60">
      <dt className="text-muted-foreground">{k}</dt>
      <dd className="font-medium text-primary">{v}</dd>
    </div>
  );
}
