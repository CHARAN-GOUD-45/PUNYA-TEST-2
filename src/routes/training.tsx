import { createFileRoute, Link } from "@tanstack/react-router";
import trainingImg from "@/assets/cat-training.jpg";
import collLeadership from "@/assets/coll-leadership.jpg";
import { Users, TrendingUp, GraduationCap, Lightbulb, Sparkles, Award, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/training")({
  head: () => ({
    meta: [
      { title: "Corporate Training Programs — Punya Ventures" },
      { name: "description", content: "Premium leadership, engagement and skill-development programs paired with luxury learning kits." },
      { property: "og:title", content: "Corporate Training — Punya Ventures" },
      { property: "og:description", content: "Leadership, engagement & productivity programs for modern enterprises." },
      { property: "og:image", content: trainingImg },
    ],
  }),
  component: TrainingPage,
});

const programs = [
  { icon: Users, title: "Leadership Development", desc: "Cohort-based programs for emerging and senior leaders.", duration: "8-12 weeks" },
  { icon: TrendingUp, title: "Employee Engagement", desc: "Culture, recognition & belonging — by design.", duration: "Ongoing" },
  { icon: GraduationCap, title: "Skill Development", desc: "Practical workshops in communication, design and tech.", duration: "1-4 weeks" },
  { icon: Lightbulb, title: "Productivity Programs", desc: "Tools, frameworks and habits that compound.", duration: "2-6 weeks" },
  { icon: Sparkles, title: "Professional Growth", desc: "Career roadmaps & individual coaching.", duration: "3-6 months" },
  { icon: Award, title: "Workshop Kits", desc: "Premium learning materials your people will keep.", duration: "Per session" },
];

function TrainingPage() {
  return (
    <div>
      <section className="bg-gradient-luxury border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-gold">Corporate training</div>
            <h1 className="mt-3 font-display text-4xl lg:text-6xl text-primary leading-tight">Where premium learning meets meaningful gifting.</h1>
            <p className="mt-5 text-muted-foreground max-w-lg leading-relaxed">
              Sophisticated training programs paired with luxury learning kits — the only platform
              that pairs growth with recognition in one cohesive experience.
            </p>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 px-7 h-12 rounded-full bg-primary text-primary-foreground text-sm font-medium">
              Book a Consultation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="rounded-[2rem] overflow-hidden shadow-luxury">
            <img src={trainingImg} alt="Corporate training" className="w-full h-auto" />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-xs uppercase tracking-[0.25em] text-gold">Programs</div>
        <h2 className="mt-3 font-display text-3xl lg:text-5xl text-primary">Our training portfolio</h2>
        <div className="gold-divider mt-3 mb-10" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((p) => (
            <div key={p.title} className="luxury-card p-7">
              <div className="w-12 h-12 rounded-full bg-gradient-gold text-navy flex items-center justify-center"><p.icon className="w-5 h-5" /></div>
              <div className="mt-5 font-display text-xl text-primary">{p.title}</div>
              <div className="mt-1 text-sm text-muted-foreground">{p.desc}</div>
              <div className="mt-5 text-[10px] uppercase tracking-[0.2em] text-gold">{p.duration}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-navy text-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-gold">Hybrid solution</div>
            <h2 className="mt-3 font-display text-3xl lg:text-5xl">Training + Gifting, together.</h2>
            <p className="mt-5 text-cream/80 max-w-lg leading-relaxed">
              Pair every training cohort with a premium learning kit — branded notebooks, gold pens,
              wellness essentials and recognition awards. One vendor. One experience.
            </p>
            <Link to="/bulk-orders" className="mt-8 inline-flex items-center gap-2 px-7 h-12 rounded-full bg-gradient-gold text-navy text-sm font-medium">
              Get a Custom Plan <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="rounded-[2rem] overflow-hidden shadow-luxury">
            <img src={collLeadership} alt="Leadership learning kit" className="w-full h-auto" />
          </div>
        </div>
      </section>
    </div>
  );
}
