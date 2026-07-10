import { motion } from "motion/react";
import type { LucideIcon } from "lucide-react";

export function Section({ children, id, alt }: { children: React.ReactNode; id?: string; alt?: boolean }) {
  return (
    <section
      id={id}
      className={`max-w-7xl mx-auto px-6 py-16 md:py-24 scroll-mt-24 ${
        alt ? "glass-panel section-alt rounded-3xl mx-4 md:mx-auto max-w-[calc(80rem-2rem)] px-6 md:px-10" : ""
      }`}
    >
      {children}
    </section>
  );
}

export function Eyebrow({ children, icon: Icon }: { children: React.ReactNode; icon?: LucideIcon }) {
  return (
    <div className="inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.24em] text-accent mb-4">
      <span className="w-8 h-px bg-accent/80" />
      {Icon && <Icon className="w-3.5 h-3.5 opacity-80" strokeWidth={2} />}
      {children}
    </div>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  icon,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  icon?: LucideIcon;
}) {
  return (
    <div className="mb-8 md:mb-10">
      <Eyebrow icon={icon}>{eyebrow}</Eyebrow>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-3xl leading-[1.08]">{title}</h2>
      {description && (
        <p className="mt-4 text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed">{description}</p>
      )}
    </div>
  );
}

export function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function GlassPanel({
  children,
  className = "",
  glow = false,
}: {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
}) {
  return (
    <div className={`glass-panel rounded-2xl ${glow ? "border-glow" : ""} ${className}`}>
      {children}
    </div>
  );
}

export function IconBadge({ icon: Icon, className = "" }: { icon: LucideIcon; className?: string }) {
  return (
    <div
      className={`inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent-gradient text-primary-foreground shadow-glow ${className}`}
    >
      <Icon className="w-[1.125rem] h-[1.125rem]" strokeWidth={2} />
    </div>
  );
}

export function StatPill({
  value,
  label,
  sub,
  bordered,
}: {
  value: string;
  label: string;
  sub: string;
  bordered?: boolean;
}) {
  return (
    <div
      className={`flex-1 bg-background/70 backdrop-blur-md px-4 py-4 flex flex-col items-center justify-center gap-0.5 ${
        bordered ? "border-r border-border/60" : ""
      }`}
    >
      <div className="text-xl sm:text-2xl font-display font-bold text-gradient-accent leading-none">{value}</div>
      <div className="text-xs text-muted-foreground text-center leading-tight mt-1">
        <span className="block">{label}</span>
        <span className="block">{sub}</span>
      </div>
    </div>
  );
}

export function PrimaryButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a href={href} className={`btn-primary ${className}`}>
      <span className="btn-shimmer" />
      {children}
    </a>
  );
}

export function SecondaryButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a href={href} className={`btn-secondary ${className}`}>
      {children}
    </a>
  );
}

export function FieldInput({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={`input-field ${className ?? ""}`} />;
}

export function FieldTextarea({ className, ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className={`input-field resize-none ${className ?? ""}`} />;
}
