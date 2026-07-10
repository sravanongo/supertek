import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  Building2,
  Handshake,
  Layers,
  Mail,
  Map,
  MapPin,
  Megaphone,
  Network,
  Phone,
  Sparkles,
  Store,
  TrendingUp,
  Truck,
  Users,
  Warehouse,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";
import { Aurora, HeroVignette, Particles } from "@/components/fx/Background";
import {
  Section,
  Eyebrow,
  Reveal,
  PrimaryButton,
  SecondaryButton,
  FieldInput,
  FieldTextarea,
  GlassPanel,
  IconBadge,
  StatPill,
  SectionHeader,
} from "@/components/ui/site-ui";
import hero from "@/assets/hero-warehouse.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SUPERTEK — Distribution Network Partner in South India" },
      {
        name: "description",
        content:
          "SUPERTEK helps brands grow with end-to-end distribution, franchising, channel development, and market expansion across South India.",
      },
      { property: "og:title", content: "SUPERTEK — Distribution Network Company" },
      {
        property: "og:description",
        content:
          "We handle distribution and franchising so brands can focus on growth, branding, and market reach.",
      },
    ],
  }),
  component: Home,
});

const services: { t: string; d: string; icon: LucideIcon }[] = [
  {
    t: "Brand & Company Development",
    d: "Help brands build company structure, positioning, and go-to-market readiness from the ground up.",
    icon: Building2,
  },
  {
    t: "Branding & Marketing",
    d: "Craft brand identity, campaigns, and retail presence that convert awareness into shelf and store traction.",
    icon: Megaphone,
  },
  {
    t: "Distribution & Franchising Ops",
    d: "Take the distribution and franchising headache off your plate — we run the network end to end.",
    icon: Network,
  },
  {
    t: "Distributor Management",
    d: "Onboard, manage, and motivate distributor partners with clear targets and transparent reporting.",
    icon: Users,
  },
  {
    t: "Channel Partner Development",
    d: "Build and expand dealer, retailer, and wholesale networks across key South India markets.",
    icon: Store,
  },
  {
    t: "Warehousing & Inventory",
    d: "Smart stocking, warehouse support, and inventory models that keep products available and capital efficient.",
    icon: Warehouse,
  },
  {
    t: "Logistics Coordination",
    d: "Hub-and-spoke dispatch and replenishment that keeps partners supplied on predictable timelines.",
    icon: Truck,
  },
  {
    t: "Market Expansion Strategy",
    d: "Territory planning, launch playbooks, and scalable rollout across new cities and states.",
    icon: Map,
  },
  {
    t: "Sales & Territory Management",
    d: "On-ground sales teams, beat plans, and territory ownership tied to measurable outcomes.",
    icon: TrendingUp,
  },
];

const strengths = [
  {
    t: "Strong Regional Expertise",
    d: "Deep knowledge of South India trade corridors, partner ecosystems, and local market dynamics.",
    i: "01",
  },
  {
    t: "Scalable Infrastructure",
    d: "Distribution systems built to grow with your brand — from first city to full regional rollout.",
    i: "02",
  },
  {
    t: "Transparent Operations",
    d: "Clear reporting, honest partner management, and no black-box distribution.",
    i: "03",
  },
  {
    t: "Technology-Enabled Tracking",
    d: "Inventory, dispatch, and channel visibility so brands always know what's moving where.",
    i: "04",
  },
  {
    t: "Long-Term Partnerships",
    d: "We invest in relationships for years, not quarters — built for brands that want to stay and scale.",
    i: "05",
  },
];

const coverageRegions = ["Telangana", "Andhra Pradesh", "Karnataka", "Tamil Nadu", "Kerala", "Puducherry"];

const coverageCities = [
  "Hyderabad",
  "Bengaluru",
  "Chennai",
  "Kochi",
  "Vijayawada",
  "Visakhapatnam",
  "Coimbatore",
  "Mysuru",
  "Warangal",
  "Puducherry",
];

const marquee = [
  "BRAND GROWTH",
  "DISTRIBUTION OPS",
  "FRANCHISING",
  "CHANNEL DEVELOPMENT",
  "SOUTH INDIA",
  "END-TO-END PARTNER",
];

const contactItems: {
  l: string;
  v: string;
  icon: LucideIcon;
  href?: string;
}[] = [
  { l: "Company", v: "SUPERTEK Distribution Network Pvt. Ltd.", icon: Building2 },
  { l: "Address", v: "817, Technone, Raidurg, Old Mumbai Highway, Hyderabad", icon: MapPin },
  { l: "Phone", v: "+91 8247653149", href: "tel:+918247653149", icon: Phone },
  { l: "Email", v: "info@Supertek.io", href: "mailto:info@Supertek.io", icon: Mail },
];

function Home() {
  return (
    <div className="min-h-screen relative">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden bg-hero min-h-[80vh] lg:min-h-[85vh] flex flex-col">
        <Aurora />
        <HeroVignette />
        <div className="absolute inset-0 pointer-events-none">
          <Particles count={28} />
        </div>

        <div className="relative flex-1 max-w-7xl mx-auto px-6 pt-12 pb-16 lg:pt-16 lg:pb-20 grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-12 items-center w-full">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full glass-strong px-4 py-2 text-xs font-medium tracking-wide text-muted-foreground mb-6"
            >
              <span className="relative flex w-2 h-2">
                <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-60" />
                <span className="relative rounded-full bg-accent w-2 h-2" />
              </span>
              Distribution Network · South India
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.05 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.5rem] font-bold leading-[1.02] tracking-tight"
            >
              We grow your <span className="text-gradient-accent">brand.</span>
              <br />
              We run the <span className="italic font-display font-light text-muted-foreground">network.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed"
            >
              SUPERTEK is a South India-focused distribution network company. We help brands with
              development, branding, marketing, and market expansion — while handling distribution,
              franchising, and channel operations so you don't have to.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <PrimaryButton href="#contact">
                <Handshake className="w-4 h-4" />
                Partner With Us
              </PrimaryButton>
              <SecondaryButton href="#services">
                <Layers className="w-4 h-4" />
                Our Services
              </SecondaryButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-10 flex items-stretch gap-px rounded-2xl overflow-hidden border border-border/60 glass-strong max-w-md"
            >
              <StatPill value="6" label="Regions" sub="Covered" bordered />
              <StatPill value="100+" label="Channel" sub="Partners" bordered />
              <StatPill value="24h" label="Avg." sub="Dispatch" />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute -inset-6 bg-accent-gradient opacity-30 blur-[80px] rounded-3xl animate-glow-pulse" />
            <div className="relative rounded-2xl border-glow overflow-hidden shadow-elevated spotlight">
              <img
                src={hero}
                alt="SUPERTEK distribution network across South India"
                className="w-full h-auto max-h-[280px] sm:max-h-[340px] lg:max-h-[420px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 px-5 pb-5">
                <div className="flex items-end justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-2">Coverage</div>
                    <div className="flex flex-wrap gap-1.5">
                      {coverageRegions.map((state) => (
                        <span
                          key={state}
                          className="rounded-full glass-strong px-2.5 py-1 text-xs font-medium text-foreground/90"
                        >
                          {state}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="glass-strong rounded-xl px-4 py-2.5 text-right shrink-0">
                    <div className="text-xs text-muted-foreground">Avg. Dispatch</div>
                    <div className="text-sm font-display font-bold text-gradient-accent">24 hrs</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 glass-panel rounded-xl px-5 py-4 border-glow">
              <div className="flex items-center justify-center gap-6 sm:gap-8 divide-x divide-border/60">
                <div className="text-center pr-6 sm:pr-8">
                  <div className="text-xs text-muted-foreground mb-1">We do</div>
                  <div className="text-sm font-display font-bold text-accent">Distribution & Franchising</div>
                </div>
                <div className="text-center pl-6 sm:pl-8">
                  <div className="text-xs text-muted-foreground mb-1">You do</div>
                  <div className="text-sm font-display font-bold text-foreground">Brand Building</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="relative border-y border-border/60 glass-strong overflow-hidden py-4 marquee-mask">
        <div className="flex gap-10 whitespace-nowrap animate-marquee items-center">
          {[...marquee, ...marquee].map((m, i) => (
            <span key={i} className="inline-flex items-center gap-10">
              <span className="font-display text-sm md:text-base text-muted-foreground/90 tracking-[0.2em]">
                {m}
              </span>
              <Sparkles className="w-3.5 h-3.5 text-accent/40 shrink-0" />
            </span>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <Section id="about">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12">
          <Reveal>
            <Eyebrow>About Us</Eyebrow>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.08]">
              Connecting brands to markets across <span className="text-gradient-accent italic">South India.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
              <p>
                SUPERTEK is a South India-focused distribution network company dedicated to delivering
                efficient supply chain solutions, channel development, logistics coordination, and market
                expansion services. Our mission is to connect manufacturers, brands, and retailers through
                a reliable and scalable distribution ecosystem.
              </p>
              <p>
                We provide end-to-end distribution management — helping businesses increase market reach,
                improve product availability, and optimize operational efficiency. From brand development
                and marketing to distributor management and franchising operations, we handle everything
                so your brand can focus on what it does best.
              </p>
              <p>
                We proudly act as{" "}
                <span className="text-foreground font-semibold">
                  Super Stockist for Inscope Electronic Private Limited
                </span>{" "}
                across our South India network.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {["Brand Development", "Distribution", "Franchising", "Logistics", "Market Expansion"].map(
                  (t) => (
                    <span key={t} className="glass-strong rounded-full px-3.5 py-1.5 text-xs text-foreground/90">
                      {t}
                    </span>
                  ),
                )}
              </div>
            </div>
          </Reveal>
        </div>
        <div className="grid md:grid-cols-2 gap-4 mt-10 md:mt-12">
          {[
            { k: "Vision", v: "To become the most trusted distribution network partner in South India." },
            {
              k: "Mission",
              v: "Connect manufacturers, brands, and retailers through a reliable, scalable distribution ecosystem — with excellent service at every touchpoint.",
            },
          ].map((c, i) => (
            <Reveal key={c.k} delay={i * 0.1}>
              <GlassPanel glow className="p-6 md:p-7 h-full card-interactive">
                <div className="flex items-center gap-3 mb-4">
                  <IconBadge icon={Building2} className="!h-9 !w-9 !rounded-lg" />
                  <div className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">{c.k}</div>
                </div>
                <p className="text-sm md:text-base text-foreground/90 leading-relaxed">{c.v}</p>
              </GlassPanel>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* SERVICES */}
      <Section id="services" alt>
        <SectionHeader
          eyebrow="Our Services"
          title={
            <>
              Everything your brand needs to
              <br />
              <span className="text-gradient-accent">scale in South India.</span>
            </>
          }
          description="From company development and branding to warehousing, logistics, and territory sales — SUPERTEK is the partner that runs the network while you build the brand."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <Reveal key={s.t} delay={i * 0.04}>
              <GlassPanel className="p-5 md:p-6 h-full card-interactive group">
                <IconBadge icon={s.icon} className="mb-4 group-hover:shadow-glow transition-shadow duration-300" />
                <div className="text-base md:text-lg font-display font-semibold leading-snug">{s.t}</div>
                <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              </GlassPanel>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* WHY */}
      <Section id="why">
        <SectionHeader
          eyebrow="Why SUPERTEK"
          title={
            <>
              Five reasons brands
              <br />
              <span className="text-gradient-accent">partner with us.</span>
            </>
          }
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {strengths.map((f, i) => (
            <Reveal key={f.t} delay={i * 0.06}>
              <GlassPanel
                glow
                className={`p-5 md:p-6 h-full card-interactive ${i === 4 ? "md:col-span-2 lg:col-span-1" : ""}`}
              >
                <div className="text-accent font-display text-xs font-semibold tracking-widest opacity-70 mb-3">
                  {f.i}
                </div>
                <div className="text-base md:text-lg font-display font-semibold leading-snug">{f.t}</div>
                <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">{f.d}</p>
              </GlassPanel>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* COVERAGE */}
      <Section>
        <Reveal>
          <GlassPanel glow className="p-6 md:p-10 relative overflow-hidden">
            <div className="absolute inset-0 dot-bg opacity-30" />
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-accent/15 blur-[120px] rounded-full" />
            <div className="relative grid md:grid-cols-2 gap-8 md:gap-10 items-center">
              <div>
                <Eyebrow icon={MapPin}>Coverage</Eyebrow>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-[1.1]">
                  Serving major markets across <span className="text-gradient-accent">South India.</span>
                </h3>
                <p className="mt-4 text-muted-foreground text-base md:text-lg max-w-md leading-relaxed">
                  Andhra Pradesh, Telangana, Karnataka, Tamil Nadu, Kerala, and Puducherry — a regional
                  footprint built for deep market penetration, not thin coverage.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {coverageCities.map((c, i) => (
                  <motion.div
                    key={c}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="rounded-xl glass-strong px-4 py-3 flex items-center gap-2.5 text-sm card-interactive hover:text-accent"
                  >
                    <MapPin className="w-3.5 h-3.5 text-accent shrink-0" />
                    {c}
                  </motion.div>
                ))}
              </div>
            </div>
          </GlassPanel>
        </Reveal>
      </Section>

      {/* CONTACT */}
      <Section id="contact">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12">
          <Reveal>
            <Eyebrow>Contact</Eyebrow>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.08]">
              Ready to scale your brand
              <br />
              across <span className="text-gradient-accent italic">South India?</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-base md:text-lg max-w-md leading-relaxed">
              Whether you need distribution, franchising support, or a full go-to-market partner — we'd
              love to talk.
            </p>
            <div className="mt-8 space-y-3">
              {contactItems.map((c) => (
                <div key={c.l} className="glass-strong rounded-xl px-4 py-4 card-interactive flex gap-3">
                  <c.icon className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.22em] text-accent mb-1.5">
                      {c.l}
                    </div>
                    {c.href ? (
                      <a
                        href={c.href}
                        className="block font-display text-base md:text-[1.05rem] font-semibold tracking-tight text-foreground hover:text-accent transition"
                      >
                        {c.v}
                      </a>
                    ) : (
                      <div className="text-sm md:text-[0.95rem] leading-relaxed text-muted-foreground">
                        {c.v}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <form
              className="glass-panel border-glow rounded-2xl p-6 md:p-8 relative overflow-hidden"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="absolute -top-20 -right-20 w-60 h-60 bg-accent/10 blur-3xl rounded-full pointer-events-none" />
              <div className="relative space-y-4">
                <div className="mb-2">
                  <div className="text-xs font-semibold uppercase tracking-[0.22em] text-accent mb-1.5">
                    Get in Touch
                  </div>
                  <h3 className="font-display font-semibold text-lg leading-snug">Send us a message</h3>
                  <p className="text-xs text-muted-foreground mt-1.5">
                    We typically respond within one business day.
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  <FieldInput placeholder="Your name" />
                  <FieldInput placeholder="Company / Brand" />
                </div>
                <FieldInput placeholder="Email" type="email" />
                <FieldInput placeholder="Phone" />
                <FieldTextarea rows={4} placeholder="Tell us about your brand and distribution needs" />
                <button type="submit" className="btn-primary w-full justify-center !py-3.5 text-sm">
                  <span className="btn-shimmer" />
                  Send Message
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </Section>

      <SiteFooter />
    </div>
  );
}
