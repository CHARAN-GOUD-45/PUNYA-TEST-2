import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import heroGiftsImg from "@/assets/hero-gifts.jpg";
import collWelcomeImg from "@/assets/coll-welcome.jpg";
import collFestiveImg from "@/assets/coll-festive.jpg";
import diwaliImg from "@/assets/coll-leadership.jpg";
import collWellnessImg from "@/assets/coll-wellness.jpg";
import pMugImg from "@/assets/p-mug.jpg";
import pToteImg from "@/assets/p-tote.jpg";
import pJournalImg from "@/assets/p-journal.jpg";
import pPenImg from "@/assets/p-pen.jpg";
import pEarbudsImg from "@/assets/p-earbuds.jpg";
import pChocolateImg from "@/assets/p-chocolate.jpg";
import pCandleImg from "@/assets/p-candle.jpg";
import pBottleImg from "@/assets/p-bottle.jpg";
import rewardsRecognitionImg from "@/assets/Rewards-and-Recognition.jpg";
import learningimg from "@/assets/learning.jpg";
import aboutHeroImg from "@/assets/about-hero.jpg";
import aboutProductImg from "@/assets/about-product.jpg";
import deskImg from "@/assets/Desk.jpg";
import meetingsImg from "@/assets/Meetings.jpg";
import carryImg from "@/assets/Carry.jpg";
import catWellnessImg from "@/assets/cat-wellness.jpg";
import homeImg from "@/assets/Home.jpg";
import travelImg from "@/assets/Travel.jpg";
import apparelsImg from "@/assets/Apparels.jpg";
import ecoImg from "@/assets/Eco.jpg";
import foodImg from "@/assets/Food.jpg";
import stressImg from "@/assets/stress.jpg";
import physicalImg from "@/assets/Physical.jpg";
import milestoneImg from "@/assets/Milestone.jpg";
import vipImg from "@/assets/VIP.jpg";
import eventImg from "@/assets/Event.jpg";
import techImg from "@/assets/Tech.jpg";
import diwaliimg from "@/assets/diwali.png";
import calDiwali from "@/assets/diwali.png";
import calChristmas from "@/assets/Christmas.jpg";
import calNewYear from "@/assets/newyear.jpg";
import calEid from "@/assets/eid.jpg";
import calWoman from "@/assets/woman.jpg";
import calMens from "@/assets/mens.jpg";
import calBirthday from "@/assets/birthday.jpg";


const heroSlides = [
  {
    title: "Employee Welcome Kits",
    subtitle: "Welcome new team members with premium curated gifting moments that feel special from day one.",
    features: ["Premium branded packaging", "Executive onboarding gifts", "Thoughtful welcome experiences"],
    image: heroGiftsImg,
  },
  {
    title: "Festival Special Gifts",
    subtitle: "Celebrate corporate milestones with luxury hampers designed for refined festival gifting.",
    features: ["Seasonal premium collections", "Festive corporate elegance", "Custom gifting solutions"],
    image: collFestiveImg,
  },
  {
    title: "Business & Tech Gifts",
    subtitle: "Delight executives and clients with sophisticated tech and business essentials.",
    features: ["Executive desk accessories", "Luxury tech experiences", "Corporate gifting mastery"],
    image: pEarbudsImg,
  },
  {
    title: "Lifestyle & Wellness Gifts",
    subtitle: "Offer premium lifestyle sets crafted for wellbeing, balance, and corporate appreciation.",
    features: ["Curated wellness collections", "Luxury lifestyle essentials", "Elegant self-care gifting"],
    image: collWellnessImg,
  },
];
const employeeCards = [
  { label: "Employee Welcome Kit", image: collWelcomeImg },
  { label: "Rewards and Recognition", image: rewardsRecognitionImg },
  { label: "Learning and Workshops", image: learningimg },
];
const calendarCards = [
  { title: "Diwali Gifts", subtitle: "Warm luxury collections", image: calDiwali },
  { title: "Christmas", subtitle: "Festive premium hampers", image: calChristmas },
  { title: "New Year", subtitle: "Celebratory premium gifting", image: calNewYear },
  { title: "Eid", subtitle: "Elegant curated sets", image: calEid },
  { title: "Women's Day", subtitle: "Empowering celebration gifts", image: calWoman },
  { title: "Men's Day", subtitle: "Sophisticated gifting essentials", image: calMens },
  { title: "Birthday's", subtitle: "Birthday luxury moments", image: calBirthday },
];
const businessCards = [
  { title: "Power Bank", image: pEarbudsImg },
  { title: "Desk Accessories", image: pBottleImg },
];
const techCards = [
  { title: "Wireless Charger", image: pEarbudsImg },
  { title: "Headphones", image: pChocolateImg },
];
const officeCards = [
  { title: "Desk Essentials", image: deskImg },
  { title: "Meetings & Conference Essentials", image: meetingsImg },
  { title: "Office Carry Essentials", image: carryImg },
];
const lifestyleCards = [
  { title: "Home & Living", image: homeImg },
  { title: "Travel", image: travelImg },
  { title: "Apparels", image: apparelsImg },
];
const wellnessCards = [
  { title: "Eco-friendly", image: ecoImg },
  { title: "Food & Gourmet", image: foodImg },
  { title: "De-stress Kits", image: stressImg },
  { title: "Physical Fitness Kit", image: physicalImg },
];
const valuesCards = [
  { title: "Wellness Retreat", image: aboutHeroImg },
  { title: "Gift Sets", image: aboutProductImg },
  { title: "Curated Hampers", image: pMugImg },
  { title: "Premium Rituals", image: pCandleImg },
];
const personalizationProducts = [
  { title: "Photo Frame", price: "₹499", image: aboutProductImg },
  { title: "Wooden Sculpture", price: "₹899", image: aboutHeroImg },
  { title: "Wooden & Paper Caricatures", price: "₹1,299", image: pJournalImg },
  { title: "Mugs with Personal Photos", price: "₹499", image: pMugImg },
  { title: "T Shirts", price: "₹749", image: pToteImg },
  { title: "Caps", price: "₹699", image: pBottleImg },
  { title: "Engraved Pens", price: "₹649", image: pPenImg },
  { title: "Engraved Name Plates", price: "₹1,199", image: pChocolateImg },
  { title: "Engraved Diary", price: "₹1,499", image: pJournalImg },
  { title: "Tote Bags", price: "₹899", image: pToteImg },
];

const othersProducts = [
  { title: "Premium Accessories", price: "₹699", image: pMugImg },
  { title: "Luxury Add-ons", price: "₹899", image: aboutProductImg },
  { title: "Curated Essentials", price: "₹1,299", image: collFestiveImg },
  { title: "Signature Collections", price: "₹1,999", image: collWellnessImg },
];

export const Route = createFileRoute("/gifting")({
  head: () => ({
    meta: [
      { title: "Festival Special Gifts — Punya Ventures" },
      { name: "description", content: "Luxury corporate gifting landing page for Festival Special Gifts — premium hampers, employee gifting, wellness sets and personalization." },
      { property: "og:title", content: "Festival Special Gifts — Punya Ventures" },
      { property: "og:description", content: "Elegant festival gifting page for corporate gifting, employee kits, business essentials and personalized premium gifts." },
    ],
  }),
  component: GiftingPage,
});

function GiftingPage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = window.setTimeout(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 3000);
    return () => window.clearTimeout(timer);
  }, [activeSlide, isPaused]);

  const calendarRef = useRef<HTMLDivElement | null>(null);
  const personalizationRef = useRef<HTMLDivElement | null>(null);
  const [personalizationProgress, setPersonalizationProgress] = useState(0);

  const scrollCalendar = (direction: "left" | "right") => {
    if (!calendarRef.current) return;
    const offset = calendarRef.current.clientWidth * 0.8;
    calendarRef.current.scrollBy({ left: direction === "right" ? offset : -offset, behavior: "smooth" });
  };

  const updatePersonalizationProgress = () => {
    if (!personalizationRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = personalizationRef.current;
    const maxScroll = scrollWidth - clientWidth;
    setPersonalizationProgress(maxScroll > 0 ? Math.min(1, scrollLeft / maxScroll) : 0);
  };

  const scrollPersonalization = (direction: "left" | "right") => {
    if (!personalizationRef.current) return;
    const offset = personalizationRef.current.clientWidth * 0.8;
    personalizationRef.current.scrollBy({ left: direction === "right" ? offset : -offset, behavior: "smooth" });
  };

  useEffect(() => {
    updatePersonalizationProgress();
  }, []);

  return (
    <div className="bg-[#F7F3EE] text-foreground">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#F7F3EE]" />
        <div className="relative">
          <div
            className="relative overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <motion.div
              className="flex"
              animate={{ x: `-${activeSlide * 100}%` }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {heroSlides.map((slide) => (
                <div
                  key={slide.title}
                  className="min-w-full relative h-[420px] sm:h-[460px] md:h-[500px] lg:h-[500px] xl:h-[500px] bg-cover bg-center"
                  style={{ backgroundImage: `url(${slide.image})` }}
                >
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute left-6 bottom-12 sm:left-8 sm:bottom-14 md:left-12 md:bottom-16 w-[min(92vw,640px)] max-w-2xl">
                    <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-black/75 via-black/35 to-transparent p-6 sm:p-8">
                      <div className="absolute inset-0 bg-gradient-to-tr from-black/90 via-black/20 to-transparent" />
                      <div className="relative space-y-4">
                        <span className="text-[10px] uppercase tracking-[0.45em] text-[#E2C9A6]">
                          Lifestyle Editorial
                        </span>
                        <h1 className="font-display text-4xl sm:text-5xl tracking-[-0.04em] text-white leading-tight drop-shadow-[0_18px_30px_rgba(0,0,0,0.55)]">
                          {slide.title}
                        </h1>
                        <p className="text-[10px] uppercase tracking-[0.4em] text-[#F4E6D8]">
                          SIMPLIFY. ELEVATE. ENJOY.
                        </p>
                        <p className="max-w-lg text-sm text-[#F5E5D6] leading-7">
                          Luxury gifting stories crafted for teams, beautifully styled in warm beige and gold tones.
                        </p>
                        <Link
                          to="/build-your-kit"
                          className="inline-flex items-center gap-3 rounded-full bg-[#1E2030]/95 px-6 py-3 text-sm font-semibold text-cream shadow-[0_18px_35px_-16px_rgba(0,0,0,0.4)] transition hover:bg-[#161820]"
                        >
                          Explore the Collection <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
            <div className="pointer-events-none absolute bottom-6 left-6 flex items-center gap-2 rounded-full bg-white/85 px-4 py-2 text-xs uppercase tracking-[0.3em] text-[#76624C] shadow-sm backdrop-blur-sm">
              {heroSlides.map((slide, index) => (
                <span
                  key={slide.title}
                  className={`h-2.5 w-2.5 rounded-full transition-all ${index === activeSlide ? "bg-[#997D4E]" : "bg-[#D3C3A3]"}`}
                />
              ))}
            </div>
          </div>

          <div className="absolute inset-x-0 -bottom-10 flex justify-center">
            <div className="rounded-full bg-white/95 px-7 py-3 text-base font-display font-semibold text-[#2F2A25] shadow-[0_24px_60px_-32px_rgba(15,15,15,0.25)] ring-1 ring-black/5">
              Employee Gifting
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F3EE] pt-14 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="font-display text-4xl sm:text-5xl tracking-[-0.04em] text-[#241C16]">
              Employee Gifts
            </h2>
            <p className="mt-4 text-xs italic text-[#7A6A58]">“Curated gifting moments for every team occasion.”</p>
          </div>
          <div className="mt-8">
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-7 px-4 sm:px-0 sm:grid-cols-2 lg:grid-cols-3">
              {employeeCards.map((card) => {
                const to = card.label === "Employee Welcome Kit" ? "/employee-welcome-kit" : card.label === "Rewards and Recognition" ? "/rewards-recognition" : "/learning-workshops";
                return (
                  <Link key={card.label} to={to} className="relative h-[308px] overflow-hidden rounded-[8px] bg-[#F1E7DB] shadow-[0_24px_48px_-30px_rgba(31,24,18,0.5)] block">
                    <div className="absolute inset-0 overflow-hidden">
                      <motion.img
                        src={card.image}
                        alt={card.label}
                        loading="eager"
                        className="h-full w-full object-cover object-center image-rendering-auto"
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.12 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/55 to-transparent" />
                    <div className="absolute left-4 bottom-4 right-4">
                      <p className="font-semibold text-sm uppercase tracking-[0.25em] text-[#D4C3A6]">Collection</p>
                      <h3 className="mt-2 text-base font-semibold text-white drop-shadow-[0_10px_18px_rgba(0,0,0,0.45)] leading-tight">
                        {card.label}
                      </h3>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white/90 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl sm:text-4xl text-[#1E160F]">Calendar special days</h2>
            <p className="mt-4 text-xs italic text-[#7A6A58]">“Designed for curated moments across every corporate calendar.”</p>
          </div>
          <div className="relative">
            <style>{
              ".hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; } .hide-scrollbar::-webkit-scrollbar { display: none; }"
            }</style>
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => scrollCalendar("left")}
                className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-[#E4D9C7] bg-white text-[#1E160F] shadow-sm transition hover:bg-[#F7F1E6]"
                aria-label="Scroll left"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <div className="overflow-hidden flex-1">
                <div
                  ref={calendarRef}
                  className="hide-scrollbar scroll-smooth flex gap-5 overflow-x-auto pb-4 pl-4 pr-4 sm:pl-6 sm:pr-6 snap-x snap-mandatory"
                >
                  {calendarCards.map((card) => (
                    <div
                      key={card.title}
                      className="flex-none w-[260px] sm:w-[280px] h-[360px] overflow-hidden rounded-[28px] border border-[#E4D8C5] bg-[#FFF9F2] shadow-[0_20px_40px_-28px_rgba(0,0,0,0.15)]"
                    >
                      <div className="relative h-[240px] overflow-hidden">
                        <img
                          src={card.image}
                          alt={card.title}
                          loading="eager"
                          decoding="async"
                          className="h-full w-full object-cover object-center transform-gpu transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                      <div className="p-5 flex h-[120px] items-center">
                        <div className="text-sm uppercase tracking-[0.2em] text-gold">{card.title}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <button
                type="button"
                onClick={() => scrollCalendar("right")}
                className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-[#E4D9C7] bg-white text-[#1E160F] shadow-sm transition hover:bg-[#F7F1E6]"
                aria-label="Scroll right"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0B2352] py-8 text-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-8 max-w-3xl rounded-full border border-white/10 bg-white/5 px-5 py-3 text-center shadow-[0_20px_55px_-40px_rgba(0,0,0,0.45)] backdrop-blur-sm">
            <h2 className="font-display text-3xl sm:text-4xl tracking-[-0.04em] text-white">
              Business Gifts and Tech Gifts
            </h2>
          </div>
          <div className="grid gap-4 lg:grid-cols-[1fr_0.9fr]">
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight">
                  Business Gifts
                </h3>
              </div>
              <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
                <div className="space-y-4">
                  <Link to="/milestone-gifts" className="block">
                    <motion.div
                      whileHover={{ scale: 1.04 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="relative overflow-hidden rounded-[28px] bg-[#102957] shadow-[0_18px_45px_-30px_rgba(0,0,0,0.45)]"
                    >
                      <div
                        className="h-52 bg-cover bg-center"
                        style={{
                          backgroundImage: `url(${milestoneImg})`,
                          filter: "contrast(0.98) saturate(0.96) brightness(1.02)",
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                            <div className="absolute left-5 bottom-5 right-5">
                      <h4 className="mt-2 text-2xl font-semibold text-white leading-tight">
                        Milestone Gifts
                      </h4>
                    </div>
                    </motion.div>
                  </Link>
                  <Link to="/event-seminar-gifts" className="block">
                    <motion.div
                      whileHover={{ scale: 1.04 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="relative overflow-hidden rounded-[28px] bg-[#102957] shadow-[0_18px_45px_-30px_rgba(0,0,0,0.45)]"
                    >
                      <div
                        className="h-52 bg-cover bg-center"
                        style={{
                          backgroundImage: `url(${eventImg})`,
                          filter: "contrast(0.98) saturate(0.96) brightness(1.02)",
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                    <div className="absolute left-5 bottom-5 right-5">
                      <h4 className="mt-2 text-2xl font-semibold text-white leading-tight">
                        Event / Seminar Gifts
                      </h4>
                    </div>
                    </motion.div>
                  </Link>
                </div>
                <Link to="/vip-executive-gifting" className="block">
                  <motion.div
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="relative overflow-hidden rounded-[30px] shadow-[0_20px_50px_-32px_rgba(0,0,0,0.45)]"
                  >
                    <div
                      className="h-[340px] bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${vipImg})`,
                        filter: "contrast(0.98) saturate(0.96) brightness(1.02)",
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                    <div className="absolute left-5 bottom-5 right-5">
                      <h4 className="mt-2 text-2xl font-semibold text-white leading-tight">
                        VIP & Executive Gifting
                      </h4>
                    </div>
                  </motion.div>
                </Link>
              </div>
            </div>
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight">
                  Tech Gifts
                </h3>
              </div>
              <Link to="/tech-gifts" className="block">
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="relative overflow-hidden h-[430px] rounded-[30px] shadow-[0_20px_50px_-32px_rgba(0,0,0,0.45)]"
                >
                  <div
                    className="h-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${techImg})`,
                      filter: "contrast(0.98) saturate(0.96) brightness(1.02)",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  <div className="absolute left-5 bottom-5 right-5">
                    <h4 className="mt-2 text-2xl font-semibold text-white leading-tight">
                      Tech Gifts
                    </h4>
                  </div>
                </motion.div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F3E7D7] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl sm:text-4xl text-[#1E160F]">Office And Work Essentials</h2>
            <p className="mt-4 text-xs italic text-[#7A6A58]">Designed for modern workspaces and refined productivity</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {officeCards.map((item) => {
              const to = item.title === "Desk Essentials" ? "/desk-essentials" : item.title === "Meetings & Conference Essentials" ? "/meetings-conference-essentials" : "/office-carry-essentials";
              return (
                <Link key={item.title} to={to} className="block">
                  <div className="luxury-card overflow-hidden bg-white border border-border">
                    <div className="relative h-72 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                        style={{ filter: "contrast(0.98) saturate(0.95) brightness(1.02)" }}
                      />
                    </div>
                    <div className="p-6">
                      <div className="text-lg font-semibold text-[#3F2C20]">{item.title}</div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#F7F3EE] pt-24 pb-16">
        <div className="absolute left-1/2 top-6 z-10 -translate-x-1/2">
          <div className="rounded-full bg-white/95 px-7 py-2.5 shadow-[0_24px_80px_-50px_rgba(0,0,0,0.22)] border border-white/70 backdrop-blur-sm">
            <h2 className="font-display text-2xl sm:text-3xl text-[#1E160F]">Lifestyle and Wellness</h2>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <h3 className="font-display text-2xl font-semibold text-[#1E160F]">Lifestyle and Essentials</h3>
                <div className="h-px flex-1 bg-[#C9B89D]/40" />
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {lifestyleCards.map((item) => {
                  const to = item.title === "Home & Living" ? "/home-living" : item.title === "Travel" ? "/travel" : "/apparels";
                  return (
                    <Link key={item.title} to={to} className="block">
                      <motion.div
                        whileHover={{ scale: 1.04 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="group relative overflow-hidden rounded-[28px] shadow-[0_20px_50px_-36px_rgba(0,0,0,0.18)]"
                      >
                        <div
                          className="h-52 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                          style={{
                            backgroundImage: `url(${item.image})`,
                            filter: "contrast(0.98) saturate(0.95) brightness(1.02)",
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                        <div className="absolute left-4 bottom-4 right-4">
                          <div className="mt-2 text-lg font-semibold text-white leading-tight">{item.title}</div>
                        </div>
                      </motion.div>
                    </Link>
                  );
                })}
              </div>
            </div>
            <div className="border-t border-[#C9B89D]/30 pt-10">
              <div className="flex items-center gap-4">
                <h3 className="font-display text-2xl font-semibold text-[#1E160F]">Wellness and Values</h3>
                <div className="h-px flex-1 bg-[#C9B89D]/40" />
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-4">
                {wellnessCards.map((item) => {
                  const to = item.title === "Eco-friendly" ? "/eco-friendly" : item.title === "Food & Gourmet" ? "/food-gourmet" : item.title === "De-stress Kits" ? "/de-stress-kits" : "/physical-fitness-kit";
                  return (
                    <Link key={item.title} to={to} className="block">
                      <motion.div
                        whileHover={{ scale: 1.04 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="group relative overflow-hidden rounded-[24px] shadow-[0_16px_40px_-32px_rgba(0,0,0,0.18)]"
                      >
                        <div
                          className="h-40 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                          style={{
                            backgroundImage: `url(${item.image})`,
                            filter: "contrast(0.98) saturate(0.95) brightness(1.02)",
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <div className="absolute left-4 bottom-4 right-4">
                          <p className="text-base font-semibold text-white leading-tight">{item.title}</p>
                        </div>
                      </motion.div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="text-left">
              <h2 className="font-display text-3xl sm:text-4xl text-[#1E160F]">Personalization Items</h2>
              <p className="mt-4 text-xs italic text-[#7A6A58]">Crafted with personal touches for memorable gifting experiences</p>
            </div>
          </div>
          <div className="relative">
            <style>{
              ".hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; } .hide-scrollbar::-webkit-scrollbar { display: none; }"
            }</style>
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => scrollPersonalization("left")}
                className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-[#E4D9C7] bg-white text-[#1E160F] shadow-sm transition hover:bg-[#F7F1E6]"
                aria-label="Scroll personalization left"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <div className="overflow-hidden flex-1">
                <div
                  ref={personalizationRef}
                  onScroll={updatePersonalizationProgress}
                  className="hide-scrollbar scroll-smooth flex gap-6 overflow-x-auto pb-4 pl-4 pr-4 sm:pl-6 sm:pr-6 snap-x snap-mandatory"
                >
                  {personalizationProducts.map((product) => (
                    <div
                      key={product.title}
                      className="flex-none w-[260px] max-w-[260px] h-[360px] flex flex-col overflow-hidden rounded-[28px] border border-[#E4D8C5] bg-[#FBF6EE] shadow-[0_20px_40px_-30px_rgba(0,0,0,0.15)] transition-transform duration-500 hover:-translate-y-1 hover:shadow-[0_22px_45px_-28px_rgba(0,0,0,0.18)]"
                    >
                      <div className="h-[220px] overflow-hidden">
                        <img src={product.image} alt={product.title} className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
                      </div>
                      <div className="p-5 flex-1 flex flex-col justify-between">
                        <div>
                          <div className="text-lg font-semibold text-[#3F2C20]">{product.title}</div>
                        </div>
                        <div className="mt-3 text-sm uppercase tracking-[0.3em] text-[#9A7B54]">{product.price}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <button
                type="button"
                onClick={() => scrollPersonalization("right")}
                className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-[#E4D9C7] bg-white text-[#1E160F] shadow-sm transition hover:bg-[#F7F1E6]"
                aria-label="Scroll personalization right"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
          <div className="mt-8 flex justify-end">
            <Link
              to="/build-your-kit"
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.15em] text-[#3F2C20] transition-colors hover:text-[#1E160F]"
            >
              View All Personalized Items <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F3EE] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl sm:text-4xl tracking-[-0.04em] text-[#1E160F]">Others</h2>
            <p className="mt-4 text-xs italic text-[#7A6A58]">
              Additional premium gifting products for curated moments and extra luxury selections.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {othersProducts.map((product) => (
              <div
                key={product.title}
                className="h-[360px] flex flex-col overflow-hidden rounded-[28px] border border-[#E4D8C5] bg-[#FBF6EE] shadow-[0_20px_40px_-30px_rgba(0,0,0,0.15)] transition-transform duration-500 hover:-translate-y-1 hover:shadow-[0_22px_45px_-28px_rgba(0,0,0,0.18)]"
              >
                <div className="h-[220px] overflow-hidden">
                  <img src={product.image} alt={product.title} className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div className="text-lg font-semibold text-[#3F2C20]">{product.title}</div>
                  <div className="mt-3 text-sm uppercase tracking-[0.3em] text-[#9A7B54]">{product.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
