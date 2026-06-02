import { createFileRoute } from "@tanstack/react-router";
import { Building2, Users, Truck, Sparkles, ShieldCheck, Phone } from "lucide-react";

export const Route = createFileRoute("/bulk-orders")({
  head: () => ({
    meta: [
      { title: "Bulk Corporate Orders — Punya Ventures" },
      { name: "description", content: "Enterprise procurement made elegant. Bulk corporate gifting for HR teams with custom branding and pan-India delivery." },
      { property: "og:title", content: "Bulk Corporate Orders — Punya Ventures" },
      { property: "og:description", content: "Dedicated account management, custom branding, pan-India bulk fulfilment." },
    ],
  }),
  component: BulkPage,
});

const features = [
  { icon: Users, title: "Dedicated Account Manager", desc: "A single point of contact for your team." },
  { icon: Sparkles, title: "Custom Branding", desc: "Logos, embossing, engraving — at scale." },
  { icon: Truck, title: "Pan-India Delivery", desc: "Multi-address shipping & tracking." },
  { icon: ShieldCheck, title: "Quality Guaranteed", desc: "Every kit QC-checked before dispatch." },
  { icon: Building2, title: "Enterprise Procurement", desc: "GST invoicing, PO support, NDAs." },
  { icon: Phone, title: "Priority Support", desc: "WhatsApp, email & call — on demand." },
];

function BulkPage() {
  return (
    <div>
      <section className="bg-gradient-navy text-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-12">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-gold">For HR & enterprise teams</div>
            <h1 className="mt-3 font-display text-4xl lg:text-6xl leading-tight">Bulk corporate orders, beautifully managed.</h1>
            <p className="mt-5 text-cream/80 max-w-lg leading-relaxed">From 50 to 50,000 — we handle premium corporate gifting at any scale, with white-glove service and complete brand consistency.</p>
            <div className="mt-8 flex flex-wrap gap-6 text-sm">
              <Stat n="50+" l="Min order qty" />
              <Stat n="500+" l="Enterprise clients" />
              <Stat n="14 days" l="Avg fulfilment" />
            </div>
          </div>
          <form className="luxury-card p-8 text-foreground" onSubmit={(e) => { e.preventDefault(); alert("Quote request received."); }}>
            <div className="font-display text-2xl text-primary">Request a Quote</div>
            <div className="gold-divider mt-2 mb-6" />
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Full name" />
              <Field label="Company" />
              <Field label="Work email" type="email" />
              <Field label="Phone" />
              <SelectField label="Team size" options={["1-50", "51-200", "201-1000", "1000+"]} />
              <SelectField label="Budget per kit" options={["Under ₹500", "₹500-1500", "₹1500-3000", "₹3000-5000", "₹5000+"]} />
              <SelectField label="Occasion" options={["Onboarding", "Diwali", "Recognition", "Anniversary", "Other"]} className="sm:col-span-2" />
              <div className="sm:col-span-2">
                <label className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Tell us more</label>
                <textarea rows={3} className="mt-2 w-full rounded-xl border border-border bg-background p-3 text-sm" placeholder="Quantity, branding, delivery timelines..." />
              </div>
            </div>
            <button className="mt-5 w-full h-12 rounded-full bg-gradient-gold text-navy text-sm font-medium">Submit Request</button>
            <p className="text-[11px] text-muted-foreground mt-3 text-center">We respond within 1 business day.</p>
          </form>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-xs uppercase tracking-[0.25em] text-gold">What you get</div>
        <h2 className="mt-3 font-display text-3xl lg:text-5xl text-primary">Enterprise-grade gifting</h2>
        <div className="gold-divider mt-3 mb-10" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="luxury-card p-6">
              <div className="w-11 h-11 rounded-full bg-gradient-gold text-navy flex items-center justify-center"><f.icon className="w-5 h-5" /></div>
              <div className="mt-4 font-display text-xl text-primary">{f.title}</div>
              <div className="mt-1 text-sm text-muted-foreground">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return <div><div className="font-display text-3xl text-gold">{n}</div><div className="text-cream/70">{l}</div></div>;
}
function Field({ label, type = "text" }: { label: string; type?: string }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{label}</label>
      <input type={type} required className="mt-2 w-full h-11 rounded-xl border border-border bg-background px-3 text-sm" />
    </div>
  );
}
function SelectField({ label, options, className = "" }: { label: string; options: string[]; className?: string }) {
  return (
    <div className={className}>
      <label className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{label}</label>
      <select className="mt-2 w-full h-11 rounded-xl border border-border bg-background px-3 text-sm">
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </div>
  );
}
