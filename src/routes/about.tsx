import { createFileRoute, Link } from "@tanstack/react-router";
import aboutHero from "@/assets/about-hero.jpg";
import aboutProduct from "@/assets/about-product.jpg";
import {
  Gem,
  Heart,
  Eye,
  Leaf,
  ShieldCheck,
  Briefcase,
  Award,
  Sparkles,
  TrendingUp,
  Quote,
} from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Punya Ventures — Our Story" },
      {
        name: "description",
        content:
          "Punya Ventures is India's premium corporate gifting and training partner. Discover our mission, vision and values.",
      },
      { property: "og:title", content: "About Punya Ventures" },
      {
        property: "og:description",
        content: "Building stronger workplace relationships through meaningful luxury.",
      },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Gem, title: "Craft" },
  { icon: Heart, title: "Care" },
  { icon: Eye, title: "Clarity" },
  { icon: Leaf, title: "Conscience" },
];

const approachItems = [
  { icon: Briefcase, label: "Client Centric" },
  { icon: Award, label: "Premium Quality" },
  { icon: Sparkles, label: "Trusted by Corporates" },
  { icon: TrendingUp, label: "Impact Focused" },
  { icon: ShieldCheck, label: "Trust & Reliability" },
];

function AboutPage() {
  return (
    <div>
      {/* HERO — full-width image with overlay title + glass story card right */}
      <section className="relative">
        <div className="relative h-[460px] sm:h-[520px] lg:h-[600px] overflow-hidden">
          <img
            src={aboutHero}
            alt="Luxury corporate gift hamper with premium packaging"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* warm beige wash + leaf shadows */}
          <div className="absolute inset-0 bg-gradient-to-r from-cream/85 via-cream/40 to-transparent" />
          <div className="leaf-shadow absolute inset-0 opacity-60" />

          <div className="relative max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-8 items-center">
            {/* big serif title */}
            <div className="lg:col-span-6 z-10">
              <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl text-primary leading-[0.95] tracking-tight animate-fade-up">
                about us
              </h1>
            </div>

            {/* glass story card */}
            <div className="lg:col-span-6 z-10 flex lg:justify-end">
              <div className="glass-card p-6 sm:p-8 max-w-md animate-fade-up">
                <div className="text-[11px] uppercase tracking-[0.28em] text-gold">
                  our story
                </div>
                <div className="gold-divider mt-3" />
                <p className="mt-5 text-[13.5px] text-muted-foreground leading-[1.8] font-light">
                  At Punya Ventures, we believe gifting is more than a
                  gesture — it's a quiet, powerful way of saying thank you,
                  welcome, well done, and we see you. We craft thoughtfully
                  curated experiences that celebrate people and the moments
                  that matter to them.
                </p>
                <p className="mt-3 text-[13.5px] text-muted-foreground leading-[1.8] font-light">
                  Every gift we send carries a piece of your brand story,
                  finished with the craftsmanship your team deserves.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start relative">
            <div>
              <div className="text-[11px] uppercase tracking-[0.28em] text-gold">
                mission
              </div>
              <h2 className="mt-4 font-display text-3xl lg:text-4xl text-primary leading-[1.15]">
                Elevate every workplace moment.
              </h2>
              <p className="mt-5 text-[14.5px] text-muted-foreground leading-[1.8] font-light">
                We help HR and leadership teams celebrate, recognise and grow
                their people — through thoughtfully curated gifts and
                world-class learning experiences that reflect the values you
                stand for.
              </p>
            </div>

            <div className="hidden lg:block absolute left-1/2 top-4 bottom-4 w-px bg-border" />

            <div>
              <div className="text-[11px] uppercase tracking-[0.28em] text-gold">
                vision
              </div>
              <h2 className="mt-4 font-display text-3xl lg:text-4xl text-primary leading-[1.15]">
                India's premium corporate culture platform.
              </h2>
              <p className="mt-5 text-[14.5px] text-muted-foreground leading-[1.8] font-light">
                We're building the gold standard for corporate gifting and
                training — a single, sophisticated home for everything that
                makes a workplace feel unmistakably human.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES — dark navy band with golden icons + product image right */}
      <section className="relative bg-gradient-navy overflow-visible">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 relative">
          <div className="lg:max-w-3xl">
            <h2 className="font-display text-2xl lg:text-3xl text-cream text-center lg:text-left">
              <span className="text-gold">Values</span>{" "}
              <span className="text-cream/90">What we stand for</span>
            </h2>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-8">
              {values.map((v) => (
                <div key={v.title} className="text-center group">
                  <div className="w-14 h-14 mx-auto rounded-full border border-gold/40 flex items-center justify-center text-gold group-hover:bg-gold/10 transition-colors">
                    <v.icon className="w-6 h-6" strokeWidth={1.3} />
                  </div>
                  <div className="mt-4 text-sm font-medium tracking-wide text-gold">
                    {v.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* overlapping premium product image */}
        <div className="hidden lg:block absolute right-6 xl:right-16 top-1/2 -translate-y-1/2 w-[260px] xl:w-[300px] z-10">
          <div className="relative">
            <div className="absolute -inset-6 bg-gold/20 rounded-[2rem] blur-2xl" />
            <div className="relative rounded-[1.5rem] overflow-hidden shadow-luxury border border-cream/10">
              <img
                src={aboutProduct}
                alt="Premium corporate gift box with gold accents"
                width={600}
                height={600}
                loading="lazy"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="text-[11px] uppercase tracking-[0.28em] text-primary font-semibold">
            our approach
          </div>
          <div className="gold-divider mt-3" />
          <h2 className="mt-6 font-display text-2xl lg:text-3xl text-primary leading-[1.2]">
            Client Centric. Quality Driven. Impact Focused.
          </h2>
          <p className="mt-5 text-[14.5px] text-muted-foreground leading-[1.8] font-light max-w-3xl">
            We take the time to understand your culture, goals, and people.
            Every solution is thoughtfully designed to create meaningful
            experiences that inspire and engage.
          </p>

          <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
            {approachItems.map((item) => (
              <div key={item.label} className="group text-center">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/[0.04] border border-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-cream transition-all duration-500">
                  <item.icon className="w-7 h-7" strokeWidth={1.3} />
                </div>
                <div className="mt-4 text-[11px] uppercase tracking-[0.18em] font-medium text-primary">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
