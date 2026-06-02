import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-navy text-cream mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-2 md:grid-cols-5 gap-10">
        <div className="col-span-2">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-11 h-11 rounded-full bg-gradient-gold flex items-center justify-center text-navy font-display text-xl font-semibold">P</div>
            <div>
              <div className="font-display text-2xl">Punya Ventures</div>
              <div className="text-[10px] tracking-[0.25em] text-cream/60 uppercase">Private Limited</div>
            </div>
          </div>
          <p className="text-cream/70 text-sm leading-relaxed max-w-sm">
            India's premium corporate gifting & training partner — building stronger workplace
            relationships through meaningful, beautifully crafted experiences.
          </p>
          <div className="mt-6">
            <div className="text-xs uppercase tracking-[0.2em] text-gold mb-3">Newsletter</div>
            <form className="flex max-w-sm" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="your@company.com"
                className="flex-1 px-4 h-11 rounded-l-full bg-cream/10 border border-cream/15 text-sm placeholder:text-cream/40 focus:outline-none focus:border-gold"
              />
              <button className="px-5 h-11 rounded-r-full bg-gradient-gold text-navy text-sm font-medium">Subscribe</button>
            </form>
          </div>
        </div>

        <FooterCol title="Shop">
          <FLink to="/gifting">All Gifting</FLink>
          <FLink to="/gifting">Employee Kits</FLink>
          <FLink to="/gifting">Festive Hampers</FLink>
          <FLink to="/gifting">Executive Gifting</FLink>
          <FLink to="/build-your-kit">Build Your Kit</FLink>
        </FooterCol>

        <FooterCol title="Solutions">
          <FLink to="/training">Corporate Training</FLink>
          <FLink to="/bulk-orders">Bulk Orders</FLink>
          <FLink to="/bulk-orders">HR Solutions</FLink>
          <FLink to="/training">Learning Kits</FLink>
        </FooterCol>

        <FooterCol title="Company">
          <FLink to="/about">About</FLink>
          <FLink to="/contact">Contact</FLink>
          <FLink to="/contact">Careers</FLink>
          <FLink to="/contact">Press</FLink>
        </FooterCol>
      </div>

      <div className="border-t border-cream/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-cream/60">
          <div className="flex flex-wrap items-center gap-6">
            <span className="flex items-center gap-2"><Mail className="w-3.5 h-3.5" /> hello@punyaventures.in</span>
            <span className="flex items-center gap-2"><Phone className="w-3.5 h-3.5" /> +91 98765 43210</span>
            <span className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5" /> Mumbai · Bengaluru · Delhi NCR</span>
          </div>
          <div className="flex items-center gap-3">
            {[Instagram, Linkedin, Facebook, Twitter].map((Icon, i) => (
              <a key={i} href="#" aria-label="social" className="w-8 h-8 rounded-full border border-cream/20 flex items-center justify-center hover:bg-gold hover:text-navy hover:border-gold transition-colors">
                <Icon className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        </div>
        <div className="text-center text-[11px] text-cream/40 pb-6">© {new Date().getFullYear()} Punya Ventures Private Limited. All rights reserved.</div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-[0.2em] text-gold mb-4">{title}</div>
      <ul className="space-y-3 text-sm text-cream/75">{children}</ul>
    </div>
  );
}
function FLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <li>
      <Link to={to} className="hover:text-gold transition-colors">{children}</Link>
    </li>
  );
}
