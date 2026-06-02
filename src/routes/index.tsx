import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-gifts.jpg";
import giftImg1 from "@/assets/coll-welcome.jpg";
import giftImg2 from "@/assets/coll-leadership.jpg";
import giftImg3 from "@/assets/coll-festive.jpg";
import giftImg4 from "@/assets/coll-wellness.jpg";
import trainingImg1 from "@/assets/cat-training.jpg";
import trainingImg2 from "@/assets/cat-executive.jpg";
import trainingImg3 from "@/assets/cat-office.jpg";
import quoteImg from "@/assets/about-product.jpg";
import employeeGiftImg from "@/assets/73b6e29a-3b26-4794-8ff8-51c343c90c3b.png";
import bulkOrdersImg from "@/assets/8f5f8447-a55d-41de-be02-c84b3b9e2a2c.png";
import calendarDateImg from "@/assets/e6e08274-fd90-4a63-9909-dc8be88b37c5 (1).png";
import businessTechImg from "@/assets/d7fc48bf-9b41-4ca2-b469-9e77c15cbfdc.png";
import lifestyleWellnessImg from "@/assets/1737fcae-24de-4c8b-9d41-ed1fe292852e.png";
import heroCarousel1 from "@/assets/3ed5946d-5921-44d0-92ae-608ec4d5f9e8.png";
import heroCarousel2 from "@/assets/b8671b1d-a98b-406e-ae9f-679ec46e97be.png";
import heroCarousel3 from "@/assets/45c8e39a-ae7f-48d1-bc8e-a80e837500c3.png";
import {
  ArrowRight,
  BadgeCheck,
  Truck,
  Gift,
  Headphones,
  ChevronLeft,
  ChevronRight,
  Quote,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Punya Ventures — Corporate Gifting & Training Solutions" },
      {
        name: "description",
        content:
          "Premium gifting and transformational training that enhance engagement and elevate workplace relationships.",
      },
      { property: "og:title", content: "Punya Ventures — Corporate Gifting & Training" },
      {
        property: "og:description",
        content: "Thoughtful gifts and learning experiences for India's most admired brands.",
      },
    ],
  }),
  component: HomePage,
});

const giftingImages = [giftImg1, giftImg2, giftImg3, giftImg4];
const trainingImages = [trainingImg1, trainingImg2, trainingImg3];

const trustedCompanies = [
  "TATA",
  "INFOSYS",
  "RELIANCE",
  "WIPRO",
  "MAHINDRA",
  "HDFC",
];

const features = [
  { icon: BadgeCheck, title: "Premium Quality", desc: "Hand-finished, refined every time." },
  { icon: Truck, title: "Timely Delivery", desc: "Pan-India dispatch you can count on." },
  { icon: Gift, title: "Customised Solutions", desc: "Bespoke kits tailored to your culture." },
  { icon: Headphones, title: "Dedicated Support", desc: "A personal manager, end to end." },
];

const testimonials = [
  {
    name: "Priya Mehta",
    role: "CPO, Fintech",
    quote:
      "Every box feels intentional, premium and unmistakably us. Punya transformed how we recognise people.",
  },
  {
    name: "Arjun Kapoor",
    role: "Head of HR, Tech Co.",
    quote:
      "From onboarding kits to Diwali hampers, the consistency and craftsmanship have been outstanding.",
  },
  {
    name: "Riya Sharma",
    role: "L&D Director",
    quote:
      "Their training kits paired with our workshops set a new bar for corporate gifting in India.",
  },
  {
    name: "Karan Shah",
    role: "VP People, SaaS",
    quote:
      "Refined, premium and effortlessly executed. Our leadership gifts have never felt this considered.",
  },
  {
    name: "Neha Iyer",
    role: "HR Director, Pharma",
    quote:
      "A genuine partner — they understood our culture and shipped something truly memorable.",
  },
];

function HomePage() {
  return (
    <div>
      <HeroSection />
      <TrustedSection />
      <WhyChooseUs />
      <FeatureStrip />
      <Testimonials />
      <QuoteSection />
    </div>
  );
}

/* ───────────────── HERO ───────────────── */
function HeroSection() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const heroCarouselImages = [heroCarousel1, heroCarousel2, heroCarousel3];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % heroCarouselImages.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [heroCarouselImages.length]);

  return (
    <section className="relative">
      <div className="relative h-[480px] md:h-[560px] lg:h-[620px] overflow-hidden">
        {/* Background Carousel */}
        <div className="absolute inset-0 w-full h-full">
          {heroCarouselImages.map((imageUrl, index) => (
            <motion.img
              key={index}
              src={imageUrl}
              alt="Corporate gifting experience"
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0, scale: 1 }}
              animate={{
                opacity: index === activeImageIndex ? 1 : 0,
                scale: index === activeImageIndex ? 1.05 : 1,
              }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />
          ))}
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/55 via-navy/20 to-transparent" />
        <div className="leaf-shadow absolute inset-0 opacity-50" />

        {/* Content */}
        <div className="relative max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-start lg:items-center pt-10 lg:pt-0">
          <div className="bg-navy/85 backdrop-blur-md text-cream rounded-xl p-7 sm:p-9 max-w-xl shadow-luxury border border-cream/10 animate-fade-up">
            <div className="text-[10px] tracking-[0.32em] text-gold uppercase">
              Punya Ventures
            </div>
            <h1 className="mt-3 font-display text-3xl sm:text-4xl lg:text-[2.6rem] leading-[1.1] tracking-tight">
              CORPORATE GIFTING AND<br />TRAINING SOLUTIONS
            </h1>
            <div className="gold-divider mt-4" />
            <p className="mt-5 text-cream/80 text-[14px] leading-[1.7] font-light max-w-md">
              Premium gifting and transformational training that enhance engagement and
              elevate workplace relationships.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/gifting"
                className="group inline-flex items-center gap-2 px-6 h-11 rounded-md bg-gradient-gold text-navy text-[12px] font-semibold tracking-[0.18em] uppercase hover:opacity-95 transition-all"
              >
                Explore Gifting <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/training"
                className="inline-flex items-center gap-2 px-6 h-11 rounded-md border border-cream/40 text-cream text-[12px] font-medium tracking-[0.18em] uppercase hover:bg-cream hover:text-navy transition-colors"
              >
                Explore Offers
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────── TRUSTED ───────────────── */
function TrustedSection() {
  return (
    <section className="bg-background py-14 border-b border-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-[11px] uppercase tracking-[0.32em] text-primary font-medium">
          Trusted by Companies
        </div>
        <div className="gold-divider mx-auto mt-3" />
        <div className="mt-8 grid grid-cols-3 md:grid-cols-6 gap-x-8 gap-y-5 items-center justify-items-center opacity-70">
          {trustedCompanies.map((c) => (
            <div
              key={c}
              className="font-display tracking-[0.22em] text-[15px] text-muted-foreground hover:text-primary transition-colors"
            >
              {c}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────── WHY CHOOSE US ───────────────── */
const giftingPanels = [
  {
    title: "Employee Gifts",
    image: employeeGiftImg,
  },
  {
    title: "Bulk Orders",
    image: bulkOrdersImg,
  },
  {
    title: "Calendar Special Dates",
    image: calendarDateImg,
  },
  {
    title: "Business Gifts & Tech Gifts",
    image: businessTechImg,
  },
  {
    title: "Lifestyle & Wellness",
    image: lifestyleWellnessImg,
  },
];

const trainingShowcase = [
  {
    title: "Corporate Training",
    image: trainingImg1,
  },
  {
    title: "Team Workshops",
    image: trainingImg2,
  },
  {
    title: "Leadership Sessions",
    image: trainingImg3,
  },
  {
    title: "Employee Engagement",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
  },
];

function usePanelCycle(length: number, delayMs: number) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || length <= 1) return;
    const timer = window.setTimeout(() => {
      setActive((current) => (current + 1) % length);
    }, delayMs + 300);
    return () => window.clearTimeout(timer);
  }, [active, delayMs, length, paused]);

  return { active, setActive, paused, setPaused };
}

function WhyChooseUs() {
  const { active, setActive, paused, setPaused } = usePanelCycle(giftingPanels.length, 800);

  return (
    <section className="bg-[#F7F3EE] py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="font-display text-3xl sm:text-4xl lg:text-5xl tracking-[0.18em] text-[#1F1B18]">
            WHY CHOOSE US
          </p>
        </div>

        <div className="grid gap-8 xl:grid-cols-[1.2fr_440px] items-start justify-center">
          <div>
            <div className="flex h-[309px] gap-1.5 overflow-x-auto overflow-y-hidden rounded-none pb-2 sm:gap-1.5">
              {giftingPanels.map((panel, index) => {
                const isActive = active === index;
                const width = isActive ? 200 : 85;
                return (
                  <motion.button
                    key={panel.title}
                    type="button"
                    onMouseEnter={() => {
                      setPaused(true);
                      setActive(index);
                    }}
                    onMouseLeave={() => setPaused(false)}
                    animate={{ width }}
                    transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                    className="relative flex-shrink-0 overflow-hidden bg-slate-900 rounded-none shadow-soft"
                    style={{ height: 309 }}
                  >
                    <img
                      src={panel.image}
                      alt={panel.title}
                      className="h-full w-full object-cover"
                    />
                    <motion.div
                      initial={false}
                      animate={{ opacity: isActive ? 1 : 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                      className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent"
                    />
                    <motion.div
                      initial={false}
                      animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                      className="absolute bottom-4 left-4 right-4 text-left text-white"
                    >
                      <p className="text-[11px] uppercase tracking-[0.4em] text-gold/90">
                        {panel.title}
                      </p>
                    </motion.div>
                  </motion.button>
                );
              })}
            </div>
          </div>

          <div className="mx-auto w-full max-w-[440px] overflow-hidden rounded-none border border-[#D9CEC1] shadow-soft bg-[#1E2030]">
            <div className="relative h-[309px] overflow-hidden">
              <motion.div
                className="space-y-0"
                animate={{ y: ["0%", "-50%"] }}
                transition={{ duration: 36, ease: "linear", repeat: Infinity }}
              >
                {[...trainingShowcase, ...trainingShowcase].map((item, index) => (
                  <div key={`${item.title}-${index}`} className="relative h-[309px] w-full overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#101820]/75 via-transparent to-transparent" />
                    <div className="absolute bottom-5 left-5 text-left text-cream">
                      <p className="text-[11px] uppercase tracking-[0.35em] text-[#E7D6B2]">
                        {item.title}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────── FEATURE STRIP ───────────────── */
function FeatureStrip() {
  return (
    <section className="py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-navy rounded-2xl border border-gold/20 shadow-luxury px-6 py-7 lg:px-10 lg:py-8 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-2">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`flex flex-col items-center text-center text-cream px-3 ${
                i < features.length - 1 ? "lg:border-r lg:border-cream/10" : ""
              }`}
            >
              <div className="w-11 h-11 rounded-full bg-gold/15 flex items-center justify-center text-gold mb-3">
                <f.icon className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <div className="text-[12px] uppercase tracking-[0.2em] font-medium text-gold">
                {f.title}
              </div>
              <div className="mt-1.5 text-[11.5px] text-cream/65 leading-relaxed font-light max-w-[180px]">
                {f.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────── TESTIMONIALS ───────────────── */
function Testimonials() {
  const [page, setPage] = useState(0);
  const perPage = 5;
  const totalPages = Math.max(1, Math.ceil(testimonials.length / perPage));
  const start = page * perPage;
  const visible = testimonials.slice(start, start + perPage);

  return (
    <section className="py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex px-5 h-9 items-center rounded-md bg-primary text-cream text-[11px] uppercase tracking-[0.28em] shadow-soft">
          Testimonials
        </div>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5 items-center">
          {visible.map((t, idx) => {
            const featured = idx === 2;
            return (
              <div
                key={t.name + idx}
                className={`luxury-card p-5 text-left transition-all ${
                  featured ? "lg:scale-110 lg:py-7 bg-cream" : "bg-secondary/60"
                }`}
              >
                <Quote className="w-5 h-5 text-gold" />
                <p className="mt-3 text-[12.5px] text-muted-foreground leading-[1.7] font-light line-clamp-4">
                  "{t.quote}"
                </p>
                <div className="mt-4 pt-3 border-t border-border">
                  <div className="text-[12px] font-medium text-primary">{t.name}</div>
                  <div className="text-[10.5px] text-muted-foreground">{t.role}</div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            onClick={() => setPage((p) => (p - 1 + totalPages) % totalPages)}
            className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-cream hover:border-primary transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => setPage((p) => (p + 1) % totalPages)}
            className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-cream hover:border-primary transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ───────────────── QUOTE SECTION ───────────────── */
function QuoteSection() {
  return (
    <section className="relative py-20 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-luxury" />
      <div className="leaf-shadow absolute inset-0 opacity-60" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center lg:justify-start">
          <div className="relative">
            <div className="absolute -inset-8 bg-gold/20 rounded-[2rem] blur-2xl" />
            <img
              src={quoteImg}
              alt="Premium corporate gift box"
              className="relative rounded-2xl shadow-luxury max-w-xs w-full animate-float-slow"
            />
          </div>
        </div>
        <div className="text-center lg:text-left">
          <Quote className="w-8 h-8 text-gold mx-auto lg:mx-0" />
          <p className="mt-4 font-display text-2xl lg:text-3xl text-primary leading-[1.35] italic">
            "We deliver not just gifts, but expressions of excellence. Where every occasion
            is honoured with grace and elegance."
          </p>
          <div className="gold-divider mt-6 mx-auto lg:mx-0" />
        </div>
      </div>
    </section>
  );
}
