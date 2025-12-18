import React from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  ShoppingBag,
  Youtube,
  BadgeCheck,
  HeartHandshake,
  ArrowRight,
  ExternalLink,
  MapPin,
  Sparkles,
} from "lucide-react";

/**
 * Frog On A Hog – Bright / Fun Demo Theme
 * Palette inspired by the site's frog logo: lime green + orange + teal + black.
 */

const heroImage =
  "https://b3297223.smushcdn.com/3297223/wp-content/uploads/elementor/thumbs/lisa2-1-qgiqczquc7x18poiphk9hmrq5bplgn0f2ec5nvsqgw.png?lossy=2&strip=1&webp=1";

const philosophyImage =
  "https://b3297223.smushcdn.com/3297223/wp-content/uploads/elementor/thumbs/frogs-philosophy-qkhz639rp012k54w1ycax0xba7r3sy86pckdq2wow0.jpg?lossy=2&strip=1&webp=1";

const links = {
  home: "https://frogonahog.com/",
  sponsor: "https://frogonahog.com/sponsor/",
  events: "https://frogonahog.com/events/",
  shop: "https://frogonahog.com/shop/",
  youtube: "https://www.youtube.com/",
  facebook: "https://www.facebook.com/",
  instagram: "https://www.instagram.com/",
};

const sponsorTiers = [
  {
    name: "Platinum",
    vibe: "Top placement and maximum visibility",
    accent: "from-[#00B7C7] to-[#8CE03A]", // teal -> lime
    bullets: [
      "Premium partner placement",
      "Maximum brand visibility",
      "Best for big sponsors",
    ],
  },
  {
    name: "Gold",
    vibe: "High visibility and strong support",
    accent: "from-[#FFD54A] to-[#FF7A00]", // yellow -> orange
    bullets: ["Featured placement", "Great exposure", "Perfect for growing brands"],
  },
  {
    name: "Silver",
    vibe: "Support the ride and get seen",
    accent: "from-[#C7CED8] to-[#FFFFFF]", // soft neutral
    bullets: ["Partner listing visibility", "Community support", "Budget friendly"],
  },
];

const partners = [
  {
    name: "Wilson’s Biker Gear",
    img: "https://b3297223.smushcdn.com/3297223/wp-content/uploads/elementor/thumbs/wilson-biker-gear-in-forth-worth-texas-1-e1710019856748-qkz544mxi35en2b60hpyk0uw84niuuwa8qlsb8qku8.jpg?lossy=2&strip=1&webp=1",
  },
  {
    name: "Law Tigers Dallas",
    img: "https://b3297223.smushcdn.com/3297223/wp-content/uploads/elementor/thumbs/law-tigers-dallas-texas-e1695009451380-1-e1710019959777-qkz56tgb20txuwejb5kj6ufdetebvokmy1ssqqr11c.jpeg?lossy=2&strip=1&webp=1",
  },
  {
    name: "Arnold’s Misfit Acres",
    img: "https://b3297223.smushcdn.com/3297223/wp-content/uploads/elementor/thumbs/ArnoldsMisfitAcresLogo-1-qckt6jh7xmxnxj0zvye1zc4d5pdwxfcq3xsrfkifpc.png?lossy=2&strip=1&webp=1",
  },
  {
    name: "Motorcyclist Map",
    img: "https://b3297223.smushcdn.com/3297223/wp-content/uploads/elementor/thumbs/motorcyclist-map-1-qcktpe4p00qorzn7t3qozkv61wgxaw6xd8tbxck6ww.png?lossy=2&strip=1&webp=1",
  },
];

const shopPreview = [
  {
    name: "Bottle Opener",
    price: "$15.00",
    img: "https://b3297223.smushcdn.com/3297223/wp-content/uploads/2023/12/72401-5-300x300.jpg?lossy=2&strip=1&webp=1",
  },
  {
    name: "Ceramic Mug 11oz",
    price: "$15.00",
    img: "https://b3297223.smushcdn.com/3297223/wp-content/uploads/2023/12/65216-12-300x300.jpg?lossy=2&strip=1&webp=1",
  },
  {
    name: "Tumbler 20oz",
    price: "$34.60",
    img: "https://b3297223.smushcdn.com/3297223/wp-content/uploads/2023/12/44519-6-300x300.jpg?lossy=2&strip=1&webp=1",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5 },
};

const Pill = ({ icon: Icon, children, tone = "lime" }) => {
  const tones = {
    lime: "border-[#8CE03A]/30 bg-[#8CE03A]/15 text-[#0B1B10]",
    teal: "border-[#00B7C7]/30 bg-[#00B7C7]/15 text-[#062026]",
    orange: "border-[#FF7A00]/30 bg-[#FF7A00]/15 text-[#231203]",
    neutral: "border-black/10 bg-white/70 text-black/80",
  };

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold backdrop-blur ${tones[tone]}`}
    >
      <Icon size={16} className="opacity-90" />
      {children}
    </span>
  );
};

const Button = ({ href, variant = "primary", children }) => {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-extrabold transition active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-black/10";
  const styles = {
    primary:
      "bg-gradient-to-r from-[#8CE03A] via-[#00B7C7] to-[#FF7A00] text-black hover:brightness-105",
    teal: "bg-[#00B7C7] text-[#062026] hover:brightness-105",
    orange: "bg-[#FF7A00] text-[#231203] hover:brightness-105",
    ghost: "border border-black/10 bg-white/70 text-black hover:bg-white",
  };

  return (
    <a href={href} target="_blank" rel="noreferrer" className={`${base} ${styles[variant]}`}>
      {children}
      <ArrowRight size={16} />
    </a>
  );
};

const Section = ({ id, kicker, title, sub, children }) => (
  <section id={id} className="py-16 sm:py-20">
    <div className="mx-auto w-full max-w-6xl px-5 sm:px-6">
      <motion.div {...fadeUp} className="mb-10">
        {kicker ? (
          <div className="mb-3 inline-flex rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs font-extrabold tracking-wide text-black/70">
            {kicker}
          </div>
        ) : null}
        <h2 className="text-3xl font-black tracking-tight text-black sm:text-4xl">
          {title}
        </h2>
        {sub ? <p className="mt-3 max-w-2xl text-black/70">{sub}</p> : null}
      </motion.div>
      {children}
    </div>
  </section>
);

const Card = ({ children, className = "" }) => (
  <div
    className={`rounded-[2rem] border border-black/10 bg-white/75 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)] backdrop-blur ${className}`}
  >
    {children}
  </div>
);

export default function FrogOnAHogDemoPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(900px_circle_at_15%_15%,rgba(140,224,58,0.25),transparent_60%),radial-gradient(900px_circle_at_85%_25%,rgba(0,183,199,0.22),transparent_60%),radial-gradient(900px_circle_at_60%_80%,rgba(255,122,0,0.18),transparent_60%),linear-gradient(to_bottom,#FFF7EA,#F7FFFA)]">
      {/* Decorative pattern */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.35]">
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-[#8CE03A]/25 blur-3xl" />
        <div className="absolute top-24 -right-24 h-80 w-80 rounded-full bg-[#00B7C7]/25 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-[#FF7A00]/20 blur-3xl" />
      </div>

      {/* Top bar */}
      <div className="sticky top-0 z-50 border-b border-black/10 bg-white/70 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 sm:px-6">
          <a href="#top" className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-[#8CE03A] via-[#00B7C7] to-[#FF7A00] shadow-sm">
              <span className="text-lg font-black text-black">F</span>
            </div>
            <div className="leading-tight">
              <div className="text-sm font-black tracking-tight text-black">
                Frog On A Hog
              </div>
              <div className="text-xs font-semibold text-black/60">
                Bright demo concept
              </div>
            </div>
          </a>

          <div className="hidden items-center gap-2 md:flex">
            {[
              ["Sponsor", "#sponsor"],
              ["Partners", "#partners"],
              ["Events", "#events"],
              ["Shop", "#shop"],
              ["Media", "#media"],
            ].map(([label, href]) => (
              <a
                key={label}
                className="rounded-xl px-3 py-2 text-sm font-bold text-black/65 hover:bg-black/5 hover:text-black"
                href={href}
              >
                {label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Button href={links.sponsor} variant="ghost">
              Sponsor
            </Button>
            <Button href={links.shop} variant="primary">
              Shop
            </Button>
          </div>
        </div>
      </div>

      {/* Hero */}
      <header id="top" className="relative">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-10 px-5 py-14 sm:px-6 sm:py-20 md:grid-cols-2 md:items-center">
          <motion.div {...fadeUp} className="relative">
            <div className="mb-5 flex flex-wrap gap-2">
              <Pill icon={BadgeCheck} tone="lime">
                Lisa Barnes “Frog”
              </Pill>
              <Pill icon={HeartHandshake} tone="teal">
                Sponsors & supporters
              </Pill>
              <Pill icon={Calendar} tone="orange">
                Events calendar
              </Pill>
            </div>

            <h1 className="text-4xl font-black leading-tight tracking-tight text-black sm:text-5xl">
              Riding my Harley <span className="text-black/70">across the USA</span>
            </h1>

            <p className="mt-4 max-w-xl text-base font-semibold text-black/65 sm:text-lg">
              A bright, mobile-first redesign concept that makes it easier to follow the ride,
              find events, support as a sponsor, and grab merch.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href={links.sponsor} variant="primary">
                Become a Sponsor
              </Button>
              <Button href={links.events} variant="ghost">
                View Events
              </Button>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <Card className="p-5">
                <div className="text-xs font-black text-black/50">Goal</div>
                <div className="mt-1 text-sm font-extrabold text-black">
                  Keep it simple on mobile
                </div>
              </Card>
              <Card className="p-5">
                <div className="text-xs font-black text-black/50">Design</div>
                <div className="mt-1 text-sm font-extrabold text-black">
                  Bright + fun, still clean
                </div>
              </Card>
              <Card className="p-5">
                <div className="text-xs font-black text-black/50">CTA</div>
                <div className="mt-1 text-sm font-extrabold text-black">
                  Sponsor + Events + Shop
                </div>
              </Card>
            </div>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="relative">
            <div className="relative overflow-hidden rounded-[2.25rem] border border-black/10 bg-white/60 p-3 shadow-[0_18px_45px_rgba(0,0,0,0.12)] backdrop-blur">
              <img
                src={heroImage}
                alt="Lisa Barnes Frog"
                className="h-[420px] w-full rounded-[1.75rem] object-cover sm:h-[520px]"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 rounded-[2.25rem] ring-1 ring-black/10" />
            </div>
            <div className="mt-3 text-xs font-semibold text-black/50">
              Demo uses existing imagery. Swap in fresh photos during the real rebuild.
            </div>
          </motion.div>
        </div>
      </header>

      {/* Philosophy */}
      <Section
        id="philosophy"
        kicker="Frog’s Philosophy"
        title="More than a ride"
        sub="This section becomes the “why” — the message people feel in 5 seconds, especially on mobile."
      >
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
          <motion.div {...fadeUp}>
            <Card>
              <div className="flex items-center gap-2">
                <Sparkles className="text-black/70" size={18} />
                <div className="text-sm font-black text-black">A fun brand, delivered cleanly</div>
              </div>

              <p className="mt-4 text-black/70 font-semibold">
                The ride is the story. The website should make it effortless to: follow along, show up
                to events, support the mission, and share the journey.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <Pill icon={Youtube} tone="teal">
                  YouTube updates
                </Pill>
                <Pill icon={MapPin} tone="orange">
                  Meetups & destinations
                </Pill>
                <Pill icon={HeartHandshake} tone="lime">
                  Sponsor support
                </Pill>
              </div>

              <div className="mt-7">
                <Button href={links.youtube} variant="teal">
                  Follow on YouTube
                </Button>
              </div>
            </Card>
          </motion.div>

          <motion.div {...fadeUp} className="overflow-hidden rounded-[2rem] border border-black/10 bg-white/70 shadow-[0_12px_34px_rgba(0,0,0,0.10)]">
            <img
              src={philosophyImage}
              alt="Frog’s philosophy"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>
      </Section>

      {/* Sponsor */}
      <Section
        id="sponsor"
        kicker="Sponsor Frog"
        title="Support the ride, get seen"
        sub="Simple tiers, bright cards, and a clear path to the sponsorship form."
      >
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {sponsorTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: index * 0.06 }}
              className="rounded-[2rem] border border-black/10 bg-white/75 shadow-[0_14px_40px_rgba(0,0,0,0.10)] overflow-hidden"
            >
              <div className={`h-3 bg-gradient-to-r ${tier.accent}`} />
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div className="text-lg font-black text-black">{tier.name}</div>
                  <HeartHandshake size={18} className="text-black/60" />
                </div>
                <div className="mt-2 text-sm font-semibold text-black/60">{tier.vibe}</div>

                <ul className="mt-5 space-y-2 text-sm font-semibold text-black/70">
                  {tier.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-black/60" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  <a
                    href={links.sponsor}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-extrabold text-black hover:underline"
                  >
                    Request sponsorship info <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div {...fadeUp} className="mt-10">
          <Card className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-lg font-black text-black">Ready to sponsor?</div>
              <div className="mt-1 text-sm font-semibold text-black/60">
                This demo keeps the path simple and visible: sponsor → quick form.
              </div>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row">
              <Button href={links.sponsor} variant="primary">
                Sponsor Frog
              </Button>
              <Button href={links.home} variant="ghost">
                View current site
              </Button>
            </div>
          </Card>
        </motion.div>
      </Section>

      {/* Partners */}
      <Section
        id="partners"
        kicker="Partners"
        title="Platinum, gold, silver support"
        sub="Clean logos, consistent sizing, and mobile-friendly spacing."
      >
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {partners.map((p) => (
            <motion.a
              key={p.name}
              {...fadeUp}
              href={links.home}
              target="_blank"
              rel="noreferrer"
              className="group rounded-[1.75rem] border border-black/10 bg-white/75 p-4 shadow-[0_12px_30px_rgba(0,0,0,0.08)] hover:translate-y-[-2px] hover:bg-white transition"
              title={p.name}
            >
              <div className="aspect-square overflow-hidden rounded-[1.25rem] bg-white">
                <img
                  src={p.img}
                  alt={p.name}
                  className="h-full w-full object-contain p-3"
                  loading="lazy"
                />
              </div>
              <div className="mt-3 text-sm font-black text-black/80 group-hover:text-black">
                {p.name}
              </div>
            </motion.a>
          ))}
        </div>
      </Section>

      {/* Events */}
      <Section
        id="events"
        kicker="Events Calendar"
        title="Come out and say hi"
        sub="Events shouldn’t be buried — make them one tap away."
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <motion.div {...fadeUp}>
            <Card>
              <div className="flex items-center gap-2 text-sm font-black text-black">
                <Calendar size={18} className="text-black/70" />
                Calendar-first layout
              </div>
              <p className="mt-3 text-sm font-semibold text-black/65">
                Put the calendar at the forefront. Later, we can add “Upcoming Events” cards that
                pull from the feed.
              </p>
              <div className="mt-6 flex flex-col gap-2 sm:flex-row">
                <Button href={links.events} variant="orange">
                  Open Events
                </Button>
                <Button href={links.events} variant="ghost">
                  Subscribe
                </Button>
              </div>
            </Card>
          </motion.div>

          <motion.div {...fadeUp}>
            <Card>
              <div className="flex items-center gap-2 text-sm font-black text-black">
                <Youtube size={18} className="text-black/70" />
                Pair events with video updates
              </div>
              <p className="mt-3 text-sm font-semibold text-black/65">
                Every event post can link to a short YouTube update — helps engagement and keeps
                supporters connected.
              </p>
              <div className="mt-6">
                <Button href={links.youtube} variant="teal">
                  Follow on YouTube
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* Shop */}
      <Section
        id="shop"
        kicker="Shop"
        title="Grab some merch"
        sub="Quick browse previews that feel fun (without feeling chaotic)."
      >
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {shopPreview.map((item) => (
            <motion.a
              key={item.name}
              {...fadeUp}
              href={links.shop}
              target="_blank"
              rel="noreferrer"
              className="group rounded-[2rem] border border-black/10 bg-white/75 p-5 shadow-[0_14px_38px_rgba(0,0,0,0.10)] hover:translate-y-[-2px] transition"
            >
              <div className="overflow-hidden rounded-[1.5rem] bg-white">
                <img
                  src={item.img}
                  alt={item.name}
                  className="h-56 w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="mt-4 flex items-start justify-between gap-3">
                <div>
                  <div className="text-sm font-black text-black">{item.name}</div>
                  <div className="mt-1 text-sm font-semibold text-black/60">
                    {item.price}
                  </div>
                </div>
                <ShoppingBag size={18} className="text-black/60" />
              </div>
              <div className="mt-4 text-sm font-black text-black/75 group-hover:text-black">
                View in shop <ExternalLink size={16} className="ml-1 inline" />
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-8">
          <Button href={links.shop} variant="primary">
            Open Full Shop
          </Button>
        </div>
      </Section>

      {/* Media */}
      <Section
        id="media"
        kicker="Social"
        title="Follow the journey"
        sub="Simple, bright cards that point to the right channels."
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            ["Facebook", "Ride updates, event posts, community.", links.facebook, "from-[#8CE03A] to-[#00B7C7]"],
            ["Instagram", "Photos, stories, behind the scenes.", links.instagram, "from-[#FF7A00] to-[#FFD54A]"],
            ["YouTube", "Video updates from the road.", links.youtube, "from-[#00B7C7] to-[#FF7A00]"],
          ].map(([name, desc, href, accent]) => (
            <motion.a
              key={name}
              {...fadeUp}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="group rounded-[2rem] border border-black/10 bg-white/75 p-6 shadow-[0_14px_36px_rgba(0,0,0,0.10)] hover:translate-y-[-2px] transition overflow-hidden"
            >
              <div className={`h-2 w-full rounded-full bg-gradient-to-r ${accent}`} />
              <div className="mt-4 text-lg font-black text-black">{name}</div>
              <div className="mt-2 text-sm font-semibold text-black/65">{desc}</div>
              <div className="mt-4 text-sm font-black text-black/70 group-hover:text-black">
                Open <ExternalLink size={16} className="ml-1 inline" />
              </div>
            </motion.a>
          ))}
        </div>
      </Section>

      {/* Footer CTA */}
      <footer className="border-t border-black/10 py-12">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-6">
          <Card className="p-7 sm:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="text-2xl font-black tracking-tight text-black">
                  Want this rebuilt the right way?
                </div>
                <div className="mt-2 text-sm font-semibold text-black/65">
                  This is a bright demo concept showing a cleaner layout and better mobile experience.
                </div>
              </div>
              <div className="flex flex-col gap-2 sm:flex-row">
                <Button href={links.sponsor} variant="ghost">
                  Sponsor Frog
                </Button>
                <Button href={links.shop} variant="primary">
                  Shop
                </Button>
              </div>
            </div>
          </Card>

          <div className="mt-8 text-xs font-semibold text-black/50">
            Demo concept only — content and links point to the current Frog On A Hog site.
          </div>
        </div>
      </footer>
    </div>
  );
}
