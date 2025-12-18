import { useMemo } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Bolt,
  Calendar,
  Code2,
  Cpu,
  Database,
  Globe,
  Handshake,
  Layers,
  Rocket,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";

/**
 * GhostStack QR Landing Page (Client-facing)
 * Primary CTA: "express" or "call"
 * Notes:
 * - Removed client-visible QR label and CTA toggle
 * - Reduced hyphen usage in copy
 */

const EXPRESS_URL = "/ghoststack-express"; // set your route
const CALL_URL = "/contact"; // set your route or scheduler
const PORTFOLIO_URL = "/work"; // optional

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

const GhostStackQrLanding = ({
  primaryCta = "express", // "express" | "call"
  showPortfolioLink = false,
}) => {
  const primary = useMemo(() => {
    if (primaryCta === "call") {
      return {
        label: "Book a Free Call",
        href: CALL_URL,
        icon: <Calendar className="h-5 w-5" />,
      };
    }
    return {
      label: "Get GhostStack Express",
      href: EXPRESS_URL,
      icon: <Rocket className="h-5 w-5" />,
    };
  }, [primaryCta]);

  const secondary = useMemo(() => {
    if (primaryCta === "call") {
      return {
        label: "Get GhostStack Express",
        href: EXPRESS_URL,
        icon: <Rocket className="h-5 w-5" />,
      };
    }
    return {
      label: "Book a Free Call",
      href: CALL_URL,
      icon: <Calendar className="h-5 w-5" />,
    };
  }, [primaryCta]);

  const services = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Custom Websites",
      desc: "Fast, mobile friendly, SEO ready sites built with clean code. No templates.",
    },
    {
      icon: <Layers className="h-6 w-6" />,
      title: "Full Stack Apps",
      desc: "Modern frontend plus backend systems, dashboards, portals, and customer tools.",
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Backend and APIs",
      desc: "Secure APIs, integrations, auth, data workflows, and scalable architecture.",
    },
    {
      icon: <Cpu className="h-6 w-6" />,
      title: "Automation",
      desc: "Cut manual work with automations, forms, pipelines, and business tools.",
    },
  ];

  const differentiators = [
    {
      icon: <Code2 className="h-6 w-6" />,
      title: "Custom code, not templates",
      desc: "Your site is built for your business, not copied from a theme library.",
    },
    {
      icon: <Bolt className="h-6 w-6" />,
      title: "Speed and SEO built in",
      desc: "Fast load times, clean structure, and conversion focused layout.",
    },
    {
      icon: <Handshake className="h-6 w-6" />,
      title: "Small business friendly",
      desc: "Straight talk, real value, and solutions that fit how local businesses run.",
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "You talk to the builder",
      desc: "No middlemen. Direct communication with the developer.",
    },
  ];

  const packages = [
    {
      badge: "Fastest start",
      title: "GhostStack Express",
      price: "Quick launch",
      highlights: [
        "One to three page high performance website",
        "Mobile friendly foundation and SEO structure",
        "Perfect for local services and startups",
        "Optional add ons available",
      ],
      ctaLabel: "Start Express",
      ctaHref: EXPRESS_URL,
      icon: <Rocket className="h-6 w-6" />,
      featured: true,
    },
    {
      badge: "Best for growth",
      title: "Business Website",
      price: "Custom build",
      highlights: [
        "Multi page custom site",
        "Designed to turn visitors into leads",
        "Local SEO structure and content layout",
        "Built to scale with your business",
      ],
      ctaLabel: "Book a Call",
      ctaHref: CALL_URL,
      icon: <Sparkles className="h-6 w-6" />,
      featured: false,
    },
    {
      badge: "Highest ROI",
      title: "Custom Applications",
      price: "Full stack and backend",
      highlights: [
        "Dashboards, portals, and internal tools",
        "APIs, automations, integrations",
        "Auth and data workflows",
        "Built for real business operations",
      ],
      ctaLabel: "Discuss Your Build",
      ctaHref: CALL_URL,
      icon: <Database className="h-6 w-6" />,
      featured: false,
    },
  ];

  const trustPills = [
    { icon: <BadgeCheck className="h-5 w-5" />, text: "Texas based" },
    { icon: <Star className="h-5 w-5" />, text: "Small business focused" },
    { icon: <Bolt className="h-5 w-5" />, text: "Fast and SEO ready" },
    { icon: <ShieldCheck className="h-5 w-5" />, text: "Clean, secure builds" },
  ];

  return (
    <div className="min-h-screen bg-[#070A12] mt-25 text-white">
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 opacity-60">
        <div className="absolute -top-24 left-1/2 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute top-40 right-[-10rem] h-96 w-96 rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute bottom-[-10rem] left-[-10rem] h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      {/* Minimal header */}
      <header className="relative z-10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/10">
              <span className="text-lg font-extrabold tracking-tight">G</span>
            </div>
            <div className="leading-tight">
              <p className="text-sm font-semibold tracking-wide text-white/90">
                GhostStack Designs
              </p>
              <p className="text-xs text-white/60">Websites • Full stack • Backend</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {showPortfolioLink && (
              <Link
                to={PORTFOLIO_URL}
                className="rounded-xl bg-white/5 px-3 py-2 text-xs font-semibold text-white/80 ring-1 ring-white/10 hover:bg-white/10"
              >
                View work
              </Link>
            )}
          </div>
        </div>
      </header>

      <main className="relative z-10">
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-4 pb-10 pt-6 md:px-6 md:pt-12">
          <div className="grid items-center gap-8 md:grid-cols-12">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ duration: 0.5 }}
              className="md:col-span-7"
            >
              <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
                Custom websites and applications for{" "}
                <span className="bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-indigo-300 bg-clip-text text-transparent">
                  real small businesses
                </span>
                .
              </h1>

              <p className="mt-4 max-w-xl text-base text-white/75 md:text-lg">
                Websites, full stack apps, and backend systems built fast, built clean, and
                built to grow your business. No templates. No fluff.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {trustPills.map((p) => (
                  <span
                    key={p.text}
                    className="inline-flex items-center gap-2 rounded-2xl bg-white/5 px-3 py-2 text-xs font-semibold text-white/80 ring-1 ring-white/10"
                  >
                    {p.icon}
                    {p.text}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  to={primary.href}
                  className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-4 text-sm font-extrabold text-black shadow-lg shadow-black/20 ring-1 ring-white/20 hover:-translate-y-[1px] hover:shadow-xl hover:shadow-black/30 active:translate-y-0"
                >
                  {primary.icon}
                  {primary.label}
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  to={secondary.href}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white/5 px-5 py-4 text-sm font-bold text-white ring-1 ring-white/10 hover:bg-white/10"
                >
                  {secondary.icon}
                  {secondary.label}
                </Link>
              </div>

              <p className="mt-3 text-xs text-white/55">
                Not sure what you need? Book the free call and I will point you in the right
                direction.
              </p>
            </motion.div>

            {/* Right value card */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ duration: 0.6, delay: 0.05 }}
              className="md:col-span-5"
            >
              <div className="rounded-3xl bg-white/5 p-5 ring-1 ring-white/10 backdrop-blur">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-bold text-white/90">
                      What you get with GhostStack
                    </p>
                    <p className="mt-1 text-sm text-white/65">
                      Built to load fast, look sharp, and drive leads.
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-white/80 ring-1 ring-white/10">
                    <Bolt className="h-4 w-4" />
                    Performance first
                  </span>
                </div>

                <ul className="mt-4 space-y-3 text-sm text-white/75">
                  {[
                    "Mobile friendly layout that looks great on any device",
                    "SEO ready structure with clean content flow",
                    "Clear calls to action designed to drive inquiries",
                    "Modern stack with clean, scalable code",
                  ].map((t) => (
                    <li key={t} className="flex gap-2">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-white/50" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-black/20 p-4 ring-1 ring-white/10">
                    <p className="text-xs font-bold text-white/70">Best for</p>
                    <p className="mt-1 text-sm font-extrabold">Local services</p>
                  </div>
                  <div className="rounded-2xl bg-black/20 p-4 ring-1 ring-white/10">
                    <p className="text-xs font-bold text-white/70">Also great for</p>
                    <p className="mt-1 text-sm font-extrabold">Apps and automation</p>
                  </div>
                </div>

                <div className="mt-5">
                  <Link
                    to={primary.href}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-indigo-300 px-5 py-4 text-sm font-extrabold text-black hover:opacity-95"
                  >
                    {primary.icon}
                    {primary.label}
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services */}
        <section className="mx-auto max-w-6xl px-4 py-10 md:px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <p className="text-xs font-extrabold tracking-[0.25em] text-white/60">
              WHAT I DO
            </p>
            <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">
              Everything you need, built the right way
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base text-white/70">
              From high converting websites to full stack builds and backend systems, GhostStack
              helps your business look professional and run smoother.
            </p>
          </motion.div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {services.map((s) => (
              <motion.div
                key={s.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45 }}
                className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 hover:bg-white/10"
              >
                <div className="flex items-start gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/10">
                    {s.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold">{s.title}</h3>
                    <p className="mt-1 text-sm text-white/70">{s.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to={primary.href}
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-5 py-4 text-sm font-extrabold text-black ring-1 ring-white/20 hover:bg-white/95 sm:w-auto"
            >
              {primary.icon}
              {primary.label}
            </Link>
            <Link
              to={secondary.href}
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white/5 px-5 py-4 text-sm font-bold text-white ring-1 ring-white/10 hover:bg-white/10 sm:w-auto"
            >
              {secondary.icon}
              {secondary.label}
            </Link>
          </div>
        </section>

        {/* Why GhostStack */}
        <section className="mx-auto max-w-6xl px-4 py-10 md:px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="grid gap-6 md:grid-cols-12 md:items-center"
          >
            <div className="md:col-span-5">
              <p className="text-xs font-extrabold tracking-[0.25em] text-white/60">
                WHY GHOSTSTACK
              </p>
              <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">
                Built for speed, clarity, and ROI
              </h2>
              <p className="mt-3 text-base text-white/70">
                This is where GhostStack beats builder sites and agency fluff. You get a clean,
                modern build that performs and converts.
              </p>

              <div className="mt-6 rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
                <p className="text-sm font-extrabold">Great fit for</p>
                <p className="mt-2 text-sm text-white/70">
                  Contractors, trades, local services, startups, and anyone tired of template
                  websites.
                </p>
              </div>
            </div>

            <div className="md:col-span-7">
              <div className="grid gap-4 md:grid-cols-2">
                {differentiators.map((d) => (
                  <div
                    key={d.title}
                    className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 hover:bg-white/10"
                  >
                    <div className="flex items-start gap-3">
                      <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/10">
                        {d.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-extrabold">{d.title}</h3>
                        <p className="mt-1 text-sm text-white/70">{d.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* Process */}
        <section className="mx-auto max-w-6xl px-4 py-10 md:px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <p className="text-xs font-extrabold tracking-[0.25em] text-white/60">
              SIMPLE PROCESS
            </p>
            <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">How it works</h2>
            <p className="mx-auto mt-3 max-w-2xl text-base text-white/70">
              Clear steps. No pressure. We get you launched and keep you supported.
            </p>
          </motion.div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Quick call or message",
                desc: "Tell me what you do, what you need, and what success looks like.",
              },
              {
                step: "02",
                title: "Build and review",
                desc: "I design and build it fast and modern with conversion in mind.",
              },
              {
                step: "03",
                title: "Launch and support",
                desc: "We go live. You can stay hands off with hosting and support options.",
              },
            ].map((s) => (
              <motion.div
                key={s.step}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45 }}
                className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10"
              >
                <p className="text-xs font-extrabold tracking-[0.3em] text-white/60">
                  STEP {s.step}
                </p>
                <h3 className="mt-2 text-lg font-extrabold">{s.title}</h3>
                <p className="mt-2 text-sm text-white/70">{s.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to={primary.href}
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-5 py-4 text-sm font-extrabold text-black ring-1 ring-white/20 hover:bg-white/95 sm:w-auto"
            >
              {primary.icon}
              {primary.label}
            </Link>
            <Link
              to={secondary.href}
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white/5 px-5 py-4 text-sm font-bold text-white ring-1 ring-white/10 hover:bg-white/10 sm:w-auto"
            >
              {secondary.icon}
              {secondary.label}
            </Link>
          </div>
        </section>

        {/* Packages */}
        <section className="mx-auto max-w-6xl px-4 py-10 md:px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <p className="text-xs font-extrabold tracking-[0.25em] text-white/60">
              PACKAGES
            </p>
            <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">
              Pick your best starting point
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base text-white/70">
              Want it moving fast? Start Express. Want higher ROI? Book a call for a custom build.
            </p>
          </motion.div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {packages.map((p) => (
              <motion.div
                key={p.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45 }}
                className={[
                  "relative rounded-3xl p-6 ring-1 backdrop-blur",
                  p.featured ? "bg-white/10 ring-white/20" : "bg-white/5 ring-white/10 hover:bg-white/10",
                ].join(" ")}
              >
                {p.featured && (
                  <div className="absolute -top-3 left-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-indigo-300 px-3 py-1 text-xs font-extrabold text-black">
                    <Bolt className="h-4 w-4" />
                    Best for quick wins
                  </div>
                )}

                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-extrabold tracking-[0.25em] text-white/60">
                      {p.badge.toUpperCase()}
                    </p>
                    <h3 className="mt-2 text-xl font-extrabold">{p.title}</h3>
                    <p className="mt-1 text-sm text-white/70">{p.price}</p>
                  </div>
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/10">
                    {p.icon}
                  </div>
                </div>

                <ul className="mt-5 space-y-3 text-sm text-white/75">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex gap-2">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-white/50" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  <Link
                    to={p.ctaHref}
                    className={[
                      "inline-flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-4 text-sm font-extrabold",
                      p.featured ? "bg-white text-black hover:bg-white/95" : "bg-white/5 text-white ring-1 ring-white/10 hover:bg-white/10",
                    ].join(" ")}
                  >
                    {p.ctaLabel}
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl bg-gradient-to-r from-white/10 via-white/5 to-white/10 p-6 ring-1 ring-white/10 md:p-10"
          >
            <div className="grid gap-8 md:grid-cols-12 md:items-center">
              <div className="md:col-span-7">
                <h2 className="text-3xl font-extrabold md:text-4xl">
                  Ready to upgrade your online presence?
                </h2>
                <p className="mt-3 text-base text-white/70">
                  If you are serious about your business, your website should be too. Start Express
                  to get moving fast, or book a call to talk custom builds that add up quick.
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link
                    to={primary.href}
                    className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 text-sm font-extrabold text-black ring-1 ring-white/20 hover:bg-white/95"
                  >
                    {primary.icon}
                    {primary.label}
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <Link
                    to={secondary.href}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white/5 px-6 py-4 text-sm font-bold text-white ring-1 ring-white/10 hover:bg-white/10"
                  >
                    {secondary.icon}
                    {secondary.label}
                  </Link>
                </div>
              </div>

              <div className="md:col-span-5">
                <div className="rounded-3xl bg-black/20 p-6 ring-1 ring-white/10">
                  <p className="text-sm font-extrabold text-white/90">Quick decision guide</p>

                  <div className="mt-4 space-y-3 text-sm text-white/75">
                    <div className="flex gap-3">
                      <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/10">
                        <Rocket className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-extrabold">Choose Express if</p>
                        <p className="text-white/70">
                          You need a clean site fast and want to start getting leads now.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/10">
                        <Database className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-extrabold">Book a call if</p>
                        <p className="text-white/70">
                          You want an app, backend system, integration, or automation.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-3">
                    <Link
                      to={EXPRESS_URL}
                      className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-indigo-300 px-5 py-4 text-sm font-extrabold text-black hover:opacity-95"
                    >
                      <Rocket className="h-5 w-5" />
                      Start GhostStack Express
                    </Link>

                    <Link
                      to={CALL_URL}
                      className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white/5 px-5 py-4 text-sm font-bold text-white ring-1 ring-white/10 hover:bg-white/10"
                    >
                      <Calendar className="h-5 w-5" />
                      Book a Free Call
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

    </div>
  );
};

export default GhostStackQrLanding;
