import { Link, useRouter, useRouterState } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { ArrowRight, ChevronRight, Mail, MapPin, Phone } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { SupertekLogo } from "@/components/SupertekLogo";
import { navigateToSection, scrollToSection, scrollToTop } from "@/lib/section-nav";
import { useActiveSection } from "@/lib/use-active-section";

const navItems = [
  { kind: "route" as const, to: "/" as const, label: "Home", exact: true },
  { kind: "section" as const, section: "about", label: "About" },
  { kind: "section" as const, section: "services", label: "Services" },
  { kind: "section" as const, section: "why", label: "Why Us" },
  { kind: "section" as const, section: "contact", label: "Contact" },
  { kind: "route" as const, to: "/careers" as const, label: "Careers" },
];

function SectionLink({
  section,
  label,
  className,
  activeClassName = "nav-link-active",
  onNavigate,
  trailing,
  active = false,
}: {
  section: string;
  label: string;
  className: string;
  activeClassName?: string;
  onNavigate: (section: string) => void;
  trailing?: React.ReactNode;
  active?: boolean;
}) {
  return (
    <a
      href={`/#${section}`}
      className={`${className}${active ? ` ${activeClassName}` : ""}`}
      aria-current={active ? "true" : undefined}
      onClick={(e) => {
        e.preventDefault();
        onNavigate(section);
      }}
    >
      {label}
      {trailing}
    </a>
  );
}

export function SiteHeader() {
  const router = useRouter();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [pendingSection, setPendingSection] = useState<string | null>(null);
  const onHomePage = pathname === "/";
  const { activeSection, setActiveSection } = useActiveSection(onHomePage);
  const isHomeActive = onHomePage && activeSection === null;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    if (!open && pendingSection) {
      const id = pendingSection;
      setPendingSection(null);
      setActiveSection(id);
      scrollToSection(id);
    }
  }, [open, pendingSection, setActiveSection]);

  const goToSection = useCallback(
    (sectionId: string) => {
      setActiveSection(sectionId);
      if (pathname === "/") {
        if (open) {
          setPendingSection(sectionId);
          setOpen(false);
        } else {
          scrollToSection(sectionId);
        }
        return;
      }
      setOpen(false);
      void navigateToSection(sectionId, pathname, (opts) => router.navigate(opts));
    },
    [open, pathname, router, setActiveSection],
  );

  const goHome = useCallback(
    (e: React.MouseEvent) => {
      setOpen(false);
      if (pathname === "/") {
        e.preventDefault();
        setActiveSection(null);
        scrollToTop();
      }
    },
    [pathname, setActiveSection],
  );

  const headerTop = scrolled ? "top-[4.5rem]" : "top-16";
  const menuMaxH = scrolled ? "max-h-[calc(100dvh-4.5rem)]" : "max-h-[calc(100dvh-4rem)]";

  return (
    <>
      <header className="sticky top-0 z-50 relative transition-all duration-300">
        <div
          aria-hidden
          className={`pointer-events-none absolute inset-0 transition-all duration-300 ${
            scrolled
              ? "glass-strong border-b border-border/60 shadow-[0_8px_32px_-16px_oklch(0_0_0/0.85)]"
              : "border-b border-transparent bg-background/40 backdrop-blur-md"
          }`}
        />
        {scrolled && (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
        )}
        <div
          className={`relative z-10 max-w-7xl mx-auto px-6 flex items-center justify-between gap-4 transition-all duration-300 ${
            scrolled ? "h-[4.5rem]" : "h-16"
          }`}
        >
          <Link to="/" className="flex items-center shrink-0" onClick={goHome}>
            <SupertekLogo className="h-8 sm:h-9 w-auto hidden sm:block" />
            <SupertekLogo variant="mark" className="h-8 w-auto sm:hidden" />
          </Link>

          <nav className="hidden lg:flex items-center gap-0.5">
            {navItems.map((i) =>
              i.kind === "route" ? (
                i.to === "/" ? (
                  <Link
                    key={i.label}
                    to="/"
                    className={`nav-link${isHomeActive ? " nav-link-active" : ""}`}
                    onClick={goHome}
                  >
                    {i.label}
                  </Link>
                ) : (
                  <Link
                    key={i.label}
                    to={i.to}
                    activeProps={{ className: "nav-link nav-link-active" }}
                    inactiveProps={{ className: "nav-link" }}
                    onClick={() => setOpen(false)}
                  >
                    {i.label}
                  </Link>
                )
              ) : (
                <SectionLink
                  key={i.label}
                  section={i.section}
                  label={i.label}
                  className="nav-link"
                  active={onHomePage && activeSection === i.section}
                  onNavigate={goToSection}
                />
              ),
            )}
          </nav>

          <div className="flex items-center gap-2 shrink-0">
            <Link to="/careers" className="hidden sm:inline-flex btn-primary !px-4 !py-2.5 text-sm">
              <span className="btn-shimmer" />
              <span className="relative z-[1] inline-flex items-center gap-2">
                Join Us
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg glass-strong"
            >
              <span className="relative block h-3.5 w-4">
                <span
                  className={`absolute left-0 h-0.5 w-4 bg-foreground transition-all duration-200 ${open ? "top-[6px] rotate-45" : "top-0"}`}
                />
                <span
                  className={`absolute left-0 top-[6px] h-0.5 w-4 bg-foreground transition-all duration-200 ${open ? "opacity-0" : "opacity-100"}`}
                />
                <span
                  className={`absolute left-0 h-0.5 w-4 bg-foreground transition-all duration-200 ${open ? "top-[6px] -rotate-45" : "top-3"}`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              role="presentation"
              aria-hidden="true"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[45] bg-background/80 backdrop-blur-md lg:hidden"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className={`fixed inset-x-0 ${headerTop} z-[46] ${menuMaxH} overflow-y-auto lg:hidden border-t border-border/60 bg-background/95 backdrop-blur-xl shadow-elevated`}
            >
              <nav className="max-w-7xl mx-auto px-4 py-5 sm:px-6">
                <div className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground mb-3 px-1">
                  Menu
                </div>
                <div className="glass-panel rounded-2xl overflow-hidden divide-y divide-border/40">
                  {navItems.map((i, idx) => (
                    <motion.div
                      key={i.label}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.04, duration: 0.25 }}
                    >
                      {i.kind === "route" ? (
                        i.to === "/" ? (
                          <Link
                            to="/"
                            className={`mobile-nav-link rounded-none${isHomeActive ? " mobile-nav-link-active" : ""}`}
                            onClick={goHome}
                          >
                            {i.label}
                            <ChevronRight className="w-4 h-4 text-muted-foreground/60" />
                          </Link>
                        ) : (
                          <Link
                            to={i.to}
                            activeProps={{ className: "mobile-nav-link mobile-nav-link-active" }}
                            inactiveProps={{ className: "mobile-nav-link rounded-none" }}
                            onClick={() => setOpen(false)}
                          >
                            {i.label}
                            <ChevronRight className="w-4 h-4 text-muted-foreground/60" />
                          </Link>
                        )
                      ) : (
                        <SectionLink
                          section={i.section}
                          label={i.label}
                          className="mobile-nav-link rounded-none"
                          activeClassName="mobile-nav-link-active"
                          active={onHomePage && activeSection === i.section}
                          onNavigate={goToSection}
                          trailing={<ChevronRight className="w-4 h-4 text-muted-foreground/60" />}
                        />
                      )}
                    </motion.div>
                  ))}
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.25 }}
                  className="mt-4 px-1"
                >
                  <Link
                    to="/careers"
                    className="btn-primary w-full !justify-center !py-3.5"
                    onClick={() => setOpen(false)}
                  >
                    <span className="btn-shimmer" />
                    <span className="relative z-[1] inline-flex items-center gap-2">
                      Join Us
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </motion.div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function FooterSectionLink({ section, children }: { section: string; children: React.ReactNode }) {
  const router = useRouter();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <a
      href={`/#${section}`}
      className="hover:text-accent transition w-fit"
      onClick={(e) => {
        e.preventDefault();
        void navigateToSection(section, pathname, (opts) => router.navigate(opts));
      }}
    >
      {children}
    </a>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative mt-12 overflow-hidden">
      <div className="footer-divider" />
      <div className="absolute inset-x-0 top-0 h-64 bg-accent/8 blur-[120px] pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 py-14 grid sm:grid-cols-2 lg:grid-cols-12 gap-10 text-sm">
        <div className="sm:col-span-2 lg:col-span-5">
          <SupertekLogo className="h-10 w-auto" />
          <p className="mt-3 text-xs uppercase tracking-[0.2em] text-accent/80">Think Smart, Work Faster</p>
          <p className="mt-4 text-muted-foreground max-w-md leading-relaxed">
            SUPERTEK Distribution Network Pvt. Ltd. — end-to-end distribution, franchising, and brand growth
            across Andhra Pradesh, Telangana, Karnataka, Tamil Nadu, Kerala, and Puducherry.
          </p>
        </div>
        <div className="lg:col-span-3">
          <div className="text-foreground font-semibold mb-4 font-display tracking-tight">Quick Links</div>
          <div className="flex flex-col gap-2.5 text-muted-foreground">
            <FooterSectionLink section="about">About</FooterSectionLink>
            <FooterSectionLink section="services">Services</FooterSectionLink>
            <FooterSectionLink section="contact">Contact</FooterSectionLink>
            <Link to="/careers" className="hover:text-accent transition w-fit">
              Careers
            </Link>
          </div>
        </div>
        <div className="lg:col-span-4">
          <div className="text-foreground font-semibold mb-4 font-display tracking-tight">Contact</div>
          <div className="space-y-3 text-muted-foreground">
            <div className="flex gap-3">
              <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                817, Technone, Raidurg,
                <br />
                Old Mumbai Highway, Hyderabad
              </p>
            </div>
            <a href="tel:+918247653149" className="flex gap-3 hover:text-accent transition">
              <Phone className="w-4 h-4 text-accent shrink-0" />
              +91 8247653149
            </a>
            <a href="mailto:info@Supertek.io" className="flex gap-3 hover:text-accent transition break-all">
              <Mail className="w-4 h-4 text-accent shrink-0" />
              info@Supertek.io
            </a>
          </div>
        </div>
      </div>
      <div className="relative mx-4 mb-4 md:mx-auto md:max-w-7xl glass-strong rounded-xl py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} SUPERTEK Distribution Network Pvt. Ltd.
      </div>
    </footer>
  );
}
