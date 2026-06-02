import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, MessageCircle, Calendar } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Punya Ventures" },
      { name: "description", content: "Talk to our gifting and training team. WhatsApp, email, consultation booking and pan-India support." },
      { property: "og:title", content: "Contact Punya Ventures" },
      { property: "og:description", content: "Get in touch for premium corporate gifting and training." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div>
      <section className="bg-gradient-luxury border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-xs uppercase tracking-[0.25em] text-gold">Contact</div>
          <h1 className="mt-3 font-display text-4xl lg:text-6xl text-primary">Let's talk.</h1>
          <div className="gold-divider mt-4" />
          <p className="mt-5 text-muted-foreground max-w-xl">A member of our team will respond within 1 business day.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-[1fr_360px] gap-10">
        <form className="luxury-card p-8" onSubmit={(e) => { e.preventDefault(); alert("Message sent."); }}>
          <div className="font-display text-2xl text-primary">Send us a message</div>
          <div className="gold-divider mt-2 mb-6" />
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Full name" />
            <Field label="Company" />
            <Field label="Email" type="email" />
            <Field label="Phone" />
            <div className="sm:col-span-2">
              <label className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Topic</label>
              <select className="mt-2 w-full h-11 rounded-xl border border-border bg-background px-3 text-sm">
                <option>Corporate Gifting</option>
                <option>Bulk Orders</option>
                <option>Corporate Training</option>
                <option>Partnership</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Message</label>
              <textarea rows={5} className="mt-2 w-full rounded-xl border border-border bg-background p-3 text-sm" />
            </div>
          </div>
          <button className="mt-5 w-full h-12 rounded-full bg-primary text-primary-foreground text-sm font-medium">Send Message</button>
        </form>

        <aside className="space-y-4">
          <Info icon={Mail} title="Email" lines={["hello@punyaventures.in", "sales@punyaventures.in"]} />
          <Info icon={Phone} title="Phone" lines={["+91 98765 43210", "Mon - Sat · 9am - 7pm IST"]} />
          <Info icon={MessageCircle} title="WhatsApp" lines={["+91 98765 43210", "Fastest response"]} />
          <Info icon={Calendar} title="Book consultation" lines={["30-min discovery call", "Free for HR teams"]} />
          <Info icon={MapPin} title="Offices" lines={["Mumbai · Bengaluru", "Delhi NCR"]} />
        </aside>
      </section>
    </div>
  );
}

function Field({ label, type = "text" }: { label: string; type?: string }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{label}</label>
      <input type={type} required className="mt-2 w-full h-11 rounded-xl border border-border bg-background px-3 text-sm" />
    </div>
  );
}
function Info({ icon: Icon, title, lines }: { icon: React.ElementType; title: string; lines: string[] }) {
  return (
    <div className="luxury-card p-5 flex gap-4">
      <div className="w-11 h-11 rounded-full bg-gradient-gold text-navy flex items-center justify-center shrink-0"><Icon className="w-5 h-5" /></div>
      <div>
        <div className="font-medium text-primary">{title}</div>
        {lines.map((l) => <div key={l} className="text-sm text-muted-foreground">{l}</div>)}
      </div>
    </div>
  );
}
