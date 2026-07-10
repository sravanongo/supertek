import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowDown,
  Briefcase,
  Car,
  ChevronDown,
  IndianRupee,
  MapPin,
  Target,
  TrendingUp,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";
import { Aurora, HeroVignette, Particles } from "@/components/fx/Background";
import {
  PrimaryButton,
  SecondaryButton,
  Section,
  Eyebrow,
  Reveal,
  GlassPanel,
  IconBadge,
  SectionHeader,
} from "@/components/ui/site-ui";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers at SUPERTEK — Join South India's distribution network" },
      {
        name: "description",
        content: "Join SUPERTEK. Sales, logistics, channel development, and operations roles across South India.",
      },
      { property: "og:title", content: "Careers at SUPERTEK" },
      {
        property: "og:description",
        content: "Help build the most trusted distribution network partner in South India.",
      },
    ],
  }),
  component: Careers,
});

const roles = [
  {
    title: "Area Sales Manager",
    location: "Hyderabad / Vijayawada",
    type: "Full-time",
    dept: "Sales",
    desc: "Drive distributor onboarding, territory growth, and primary/secondary sales targets across your zone.",
  },
  {
    title: "Channel Development Executive",
    location: "Visakhapatnam",
    type: "Full-time",
    dept: "Channel",
    desc: "Expand retailer and partner footprint with training, merchandising, and on-ground relationship building.",
  },
  {
    title: "Warehouse & Logistics Lead",
    location: "Hyderabad",
    type: "Full-time",
    dept: "Operations",
    desc: "Own dispatch SLAs, inventory accuracy, warehousing support, and hub-to-spoke replenishment.",
  },
  {
    title: "Brand & Marketing Coordinator",
    location: "Hyderabad",
    type: "Full-time",
    dept: "Marketing",
    desc: "Support brand partners with campaigns, retail presence, and go-to-market materials across channels.",
  },
  {
    title: "Accounts Executive",
    location: "Hyderabad",
    type: "Full-time",
    dept: "Finance",
    desc: "Manage receivables, partner ledgers, GST compliance, and MIS reporting.",
  },
  {
    title: "Field Sales Officer",
    location: "Multiple — South India",
    type: "Full-time",
    dept: "Sales",
    desc: "Daily beat plans, order capture, and on-ground engagement with distributors and retailers.",
  },
];

const perks: { t: string; d: string; icon: LucideIcon }[] = [
  {
    t: "Real ownership",
    d: "Small, ambitious team — your work directly shapes brand growth and network expansion.",
    icon: Target,
  },
  {
    t: "Performance pay",
    d: "Competitive base plus incentives tied to territory and channel outcomes.",
    icon: IndianRupee,
  },
  {
    t: "Travel allowance",
    d: "Fully covered conveyance for field roles across our South India markets.",
    icon: Car,
  },
  {
    t: "Grow with us",
    d: "We're scaling fast — leadership roles open as brands and territories expand.",
    icon: TrendingUp,
  },
];

function Careers() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* HERO */}
      <section className="relative bg-hero overflow-hidden min-h-[70vh] flex flex-col">
        <Aurora />
        <HeroVignette />
        <div className="absolute inset-0 pointer-events-none">
          <Particles count={20} />
        </div>

        <div className="relative flex-1 max-w-5xl mx-auto px-6 pt-16 pb-20 flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full glass-strong px-4 py-2 text-xs text-muted-foreground mb-6"
          >
            <span className="relative flex w-2 h-2">
              <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-60" />
              <span className="relative rounded-full bg-accent w-2 h-2" />
            </span>
            We're hiring across South India
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl xl:text-[4.5rem] font-bold leading-[1.02] tracking-tight"
          >
            Build the
            <br />
            <span className="text-gradient-accent">distribution network</span>
            <br />
            brands <span className="italic font-light text-muted-foreground">trust.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-6 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            At SUPERTEK, careers happen where brands meet markets — in partner counters, dispatch bays, and
            territory plans. If you like building networks with real impact, you'll fit right in.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-8 flex flex-wrap justify-center gap-3"
          >
            <PrimaryButton href="#openings">
              See Open Roles
              <ArrowDown className="w-4 h-4" />
            </PrimaryButton>
            <SecondaryButton href="#culture">Why work here</SecondaryButton>
          </motion.div>
        </div>
      </section>

      {/* PERKS */}
      <Section id="culture">
        <SectionHeader
          eyebrow="Why work here"
          title={
            <>
              A team that moves markets,
              <br />
              ships product, and <span className="text-gradient-accent">keeps promises.</span>
            </>
          }
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {perks.map((p, i) => (
            <Reveal key={p.t} delay={i * 0.08}>
              <GlassPanel className="p-6 h-full card-interactive group">
                <IconBadge icon={p.icon} className="mb-5 group-hover:shadow-glow transition-shadow duration-300" />
                <div className="font-display font-semibold text-lg">{p.t}</div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
              </GlassPanel>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* OPENINGS */}
      <Section id="openings">
        <SectionHeader
          eyebrow="Open Roles"
          title={
            <>
              Current <span className="text-gradient-accent">openings.</span>
            </>
          }
        />
        <div className="space-y-3">
          {roles.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.05}>
              <GlassPanel glow className="overflow-hidden card-interactive">
                <button
                  type="button"
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-surface/30 transition"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 min-w-0">
                    <span className="font-display font-semibold text-lg">{r.title}</span>
                    <span className="text-xs text-muted-foreground flex gap-3 flex-wrap items-center">
                      <span className="inline-flex items-center gap-1.5">
                        <Briefcase className="w-3 h-3 text-accent" />
                        {r.dept}
                      </span>
                      <span>·</span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="w-3 h-3 text-accent" />
                        {r.location}
                      </span>
                      <span>·</span>
                      <span>{r.type}</span>
                    </span>
                  </div>
                  <span
                    className={`shrink-0 w-9 h-9 grid place-items-center rounded-full glass-strong text-accent transition-transform duration-300 ${
                      open === i ? "rotate-180" : ""
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-border/60 grid md:grid-cols-3 gap-6">
                        <p className="md:col-span-2 text-muted-foreground leading-relaxed">{r.desc}</p>
                        <a
                          href={`mailto:info@Supertek.io?subject=Application: ${encodeURIComponent(r.title)}`}
                          className="btn-primary justify-center !px-5 !py-3 self-start"
                        >
                          <span className="btn-shimmer" />
                          Apply Now
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </GlassPanel>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <Reveal>
          <GlassPanel glow className="p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 dot-bg opacity-30" />
            <div className="absolute -top-32 -right-32 w-[28rem] h-[28rem] bg-accent/25 blur-[120px] rounded-full animate-glow-pulse" />
            <div className="absolute -bottom-32 -left-32 w-[28rem] h-[28rem] bg-[oklch(0.55_0.22_280/0.2)] blur-[120px] rounded-full" />
            <div className="relative">
              <Eyebrow>Get in touch</Eyebrow>
              <h3 className="text-3xl md:text-5xl font-bold max-w-3xl mx-auto leading-[1.08]">
                Don't see a role
                <br />
                that <span className="text-gradient-accent italic">fits?</span>
              </h3>
              <p className="mt-5 text-muted-foreground text-base md:text-lg max-w-xl mx-auto leading-relaxed">
                We're always looking for operators who can build brands and networks. Send us your CV and
                tell us where you'd add value.
              </p>
              <a
                href="mailto:info@Supertek.io?subject=General Application"
                className="btn-primary mt-8 justify-center !px-7 !py-4 inline-flex"
              >
                <span className="btn-shimmer" />
                Email Your CV
              </a>
            </div>
          </GlassPanel>
        </Reveal>
      </Section>

      <SiteFooter />
    </div>
  );
}
