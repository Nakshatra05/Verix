import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/verix/Nav";
import { Footer } from "@/components/verix/Footer";
import { Particles } from "@/components/verix/Particles";
import { PassportCard } from "@/components/verix/PassportCard";

export const Route = createFileRoute("/")({
  component: Landing,
});

function Landing() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Nav />
      <Hero />
      <PassportPreview />
      <HowItWorks />
      <Privacy />
      <UseCases />
      <DashboardPeek />
      <CTA />
      <Footer />
    </div>
  );
}

/* ----------------------- HERO ----------------------- */
function Hero() {
  return (
    <section className="relative pt-32 md:pt-40 pb-24 md:pb-32 noise">
      {/* animated blobs */}
      <div
        className="absolute -top-40 -left-32 h-[520px] w-[520px] holo opacity-40 blur-3xl animate-blob"
        aria-hidden
      />
      <div
        className="absolute top-20 -right-40 h-[460px] w-[460px] bg-lime opacity-25 blur-3xl animate-blob"
        style={{ animationDelay: "-4s" }}
        aria-hidden
      />
      <div className="absolute inset-0 grid-bg opacity-40 animate-grid [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" aria-hidden />
      <Particles />

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 chip glow-neon mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-lime animate-pulse-glow" />
            <span>v1.0 · live on mainnet</span>
          </div>
          <h1 className="font-display font-bold text-[clamp(2.6rem,8vw,6.5rem)] leading-[0.92] tracking-tight">
            Your Identity. <br />
            <span className="text-holo">Your Control.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl">
            Verix is the decentralized <span className="text-foreground">Data Passport</span> —
            own, manage, and selectively share your credentials across Web2 and Web3.
            One identity. Zero gatekeepers.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to="/dashboard"
              className="group relative inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-lime text-[oklch(0.16_0.025_280)] font-display font-bold hover:scale-[1.03] active:scale-95 transition glow-lime"
            >
              <span>Create Passport</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <a
              href="#passport"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl glass-strong font-display font-semibold hover:bg-white/10 transition"
            >
              <span className="h-2 w-2 rounded-full bg-electric animate-pulse-glow" />
              Explore Demo
            </a>
          </div>

          {/* stats */}
          <div className="mt-12 grid grid-cols-3 gap-4 max-w-md">
            {[
              { n: "240k+", l: "passports issued" },
              { n: "1.4M", l: "credentials verified" },
              { n: "320", l: "connected apps" },
            ].map((s) => (
              <div key={s.l} className="glass rounded-xl px-3 py-3">
                <div className="font-display font-bold text-xl text-lime">{s.n}</div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 relative h-[520px] md:h-[600px]">
          <div className="absolute right-0 top-0 animate-float-slow">
            <PassportCard rotate="6deg" variant="purple" />
          </div>
          <div className="absolute left-0 top-24 animate-float" style={{ animationDelay: "-2s" }}>
            <PassportCard rotate="-9deg" variant="lime" />
          </div>
          <div className="absolute right-8 bottom-0 animate-float" style={{ animationDelay: "-4s" }}>
            <PassportCard rotate="4deg" variant="blue" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------- PASSPORT PREVIEW ----------------------- */
function PassportPreview() {
  return (
    <section id="passport" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          kicker="01 · the passport"
          title={<>One card. <span className="text-holo">Infinite trust.</span></>}
          sub="Your Verix Data Passport bundles wallets, socials, education, and DAO history into a single programmable identity — you decide what's visible."
        />

        <div className="mt-14 grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 flex justify-center">
            <PassportCard interactive variant="purple" rotate="-4deg" className="hover:scale-[1.04] hover:rotate-0 transition-transform duration-500" />
          </div>
          <div className="lg:col-span-6 space-y-4">
            {[
              { t: "Wallet & on-chain history", d: "ENS, multiple wallets, transaction reputation — unified.", c: "var(--electric)" },
              { t: "Verified socials", d: "Farcaster, X, GitHub linked via cryptographic proofs.", c: "var(--neon)" },
              { t: "Education credentials", d: "Universities issue tamper-proof diplomas to your passport.", c: "var(--lime)" },
              { t: "DAO memberships", d: "Roles, voting power, contribution history across DAOs.", c: "var(--hot)" },
              { t: "Selective sharing toggles", d: "Pick exactly what each app sees. Revoke anytime.", c: "var(--electric)" },
            ].map((f) => (
              <div
                key={f.t}
                className="glass rounded-2xl p-4 flex items-start gap-4 hover:bg-white/10 hover:-translate-y-1 transition"
              >
                <div
                  className="h-10 w-10 rounded-xl shrink-0"
                  style={{ background: f.c, boxShadow: `0 0 20px ${f.c}` }}
                />
                <div>
                  <div className="font-display font-semibold">{f.t}</div>
                  <div className="text-sm text-muted-foreground">{f.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------- HOW IT WORKS ----------------------- */
function HowItWorks() {
  const steps = [
    { n: "01", t: "Create identity", d: "Mint your Verix Passport in 12 seconds. No KYC theater.", c: "neon" },
    { n: "02", t: "Verify credentials", d: "Connect socials, wallets, DAOs, diplomas via zk-proofs.", c: "electric" },
    { n: "03", t: "Share selectively", d: "Apps request. You approve, expire, or revoke — instantly.", c: "lime" },
  ] as const;
  return (
    <section id="how" className="relative py-24 md:py-32 noise">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          kicker="02 · how it works"
          title={<>Three steps. <span className="text-holo">Zero gatekeepers.</span></>}
          sub="From mint to share in under a minute."
        />

        <div className="mt-14 relative">
          {/* connection line */}
          <svg className="hidden lg:block absolute top-20 left-0 right-0 w-full h-24 -z-0" viewBox="0 0 1200 100" preserveAspectRatio="none" aria-hidden>
            <defs>
              <linearGradient id="ln" x1="0" x2="1">
                <stop offset="0%" stopColor="oklch(0.65 0.28 305)" />
                <stop offset="50%" stopColor="oklch(0.72 0.22 240)" />
                <stop offset="100%" stopColor="oklch(0.92 0.24 130)" />
              </linearGradient>
            </defs>
            <path d="M 100 50 C 400 -20, 800 120, 1100 50" stroke="url(#ln)" strokeWidth="2" fill="none" strokeDasharray="6 8">
              <animate attributeName="stroke-dashoffset" from="0" to="-100" dur="3s" repeatCount="indefinite" />
            </path>
          </svg>

          <div className="grid lg:grid-cols-3 gap-6 relative">
            {steps.map((s, i) => (
              <div
                key={s.n}
                className={`relative glass-strong rounded-3xl p-7 hover:-translate-y-2 transition ${i === 1 ? "lg:translate-y-10" : ""}`}
              >
                <div
                  className={`h-14 w-14 rounded-2xl flex items-center justify-center font-display font-bold text-2xl mb-5 ${
                    s.c === "neon" ? "bg-neon text-background glow-neon" :
                    s.c === "electric" ? "bg-electric text-background glow-blue" :
                    "bg-lime text-background glow-lime"
                  }`}
                  style={{
                    background: s.c === "neon" ? "var(--neon)" : s.c === "electric" ? "var(--electric)" : "var(--lime)",
                    color: "var(--background)",
                  }}
                >
                  {s.n}
                </div>
                <h3 className="font-display font-bold text-2xl mb-2">{s.t}</h3>
                <p className="text-muted-foreground">{s.d}</p>
                <div className="mt-5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  step {s.n} / 03
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------- PRIVACY ----------------------- */
function Privacy() {
  const cards = [
    { t: "Approve / Reject", d: "Every request gets a clear yes-or-no. No sneaky scopes.", icon: "✓", c: "var(--lime)" },
    { t: "Expiration controls", d: "Auto-revoke after 1h, 7d, or never. Time-boxed trust.", icon: "⏱", c: "var(--electric)" },
    { t: "Selective disclosure", d: "Prove you're 21+ without revealing your DOB. zk-magic.", icon: "◆", c: "var(--neon)" },
    { t: "Revocation, anywhere", d: "One tap kills access across every connected app.", icon: "⚡", c: "var(--hot)" },
  ];
  return (
    <section id="privacy" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          kicker="03 · privacy & control"
          title={<>You're the <span className="text-holo">root authority.</span></>}
          sub="Permissions designed for humans, not lawyers."
        />
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((c, i) => (
            <div
              key={c.t}
              className="relative group rounded-3xl p-6 glass-strong overflow-hidden hover:-translate-y-2 transition"
              style={{ transform: `rotate(${(i % 2 === 0 ? -1 : 1)}deg)` }}
            >
              <div
                className="absolute -top-10 -right-10 h-32 w-32 rounded-full blur-3xl opacity-50 group-hover:opacity-90 transition"
                style={{ background: c.c }}
              />
              <div
                className="relative h-12 w-12 rounded-2xl flex items-center justify-center font-display font-bold text-xl mb-4"
                style={{ background: c.c, color: "var(--background)", boxShadow: `0 0 24px ${c.c}` }}
              >
                {c.icon}
              </div>
              <div className="relative font-display font-bold text-lg">{c.t}</div>
              <div className="relative text-sm text-muted-foreground mt-1">{c.d}</div>
              <div className="relative mt-5 flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                <span>permission · {String(i + 1).padStart(2, "0")}</span>
                <span className="text-lime">●</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------- USE CASES ----------------------- */
function UseCases() {
  const cases = [
    { t: "Hackathons", d: "Prove past wins, skills, and ETHGlobal POAPs in one tap.", emoji: "⌘", c: "var(--neon)" },
    { t: "DAOs", d: "Portable voting reputation across every governance forum.", emoji: "✦", c: "var(--electric)" },
    { t: "Creator Economy", d: "Carry your audience graph between platforms.", emoji: "♪", c: "var(--lime)" },
    { t: "Web3 Social", d: "Verified followers, no bots, real signal.", emoji: "❍", c: "var(--hot)" },
    { t: "Education", d: "Universities sign diplomas directly to your passport.", emoji: "▲", c: "var(--electric)" },
  ];
  return (
    <section id="use-cases" className="relative py-24 md:py-32 noise">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          kicker="04 · use cases"
          title={<>Built for the <span className="text-holo">whole internet.</span></>}
          sub="From hackathons to universities, Verix plugs in everywhere identity matters."
        />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cases.map((c, i) => (
            <div
              key={c.t}
              className={`relative group overflow-hidden rounded-3xl p-7 min-h-[280px] flex flex-col justify-between
                ${i === 0 ? "brutalist bg-graphite" : i === 1 ? "glass-strong" : i === 2 ? "brutalist-lime bg-graphite" : i === 3 ? "glass-strong" : "brutalist-blue bg-graphite"}
                hover:-translate-y-2 transition`}
            >
              <div
                className="absolute -bottom-16 -right-16 h-44 w-44 blur-3xl opacity-40 group-hover:opacity-80 transition"
                style={{ background: c.c, borderRadius: "50%" }}
              />
              <div className="relative">
                <div
                  className="font-display font-bold text-5xl mb-4"
                  style={{ color: c.c, textShadow: `0 0 24px ${c.c}` }}
                >
                  {c.emoji}
                </div>
                <h3 className="font-display font-bold text-2xl">{c.t}</h3>
                <p className="text-muted-foreground text-sm mt-2 max-w-xs">{c.d}</p>
              </div>
              <div className="relative flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-muted-foreground mt-6">
                <span>use case · {String(i + 1).padStart(2, "0")}</span>
                <span className="group-hover:translate-x-2 transition">→</span>
              </div>
            </div>
          ))}
          {/* big stat card */}
          <div className="relative overflow-hidden rounded-3xl p-7 min-h-[280px] holo flex flex-col justify-between">
            <div className="absolute inset-0 bg-background/55" />
            <div className="relative">
              <div className="font-mono text-[10px] uppercase tracking-widest text-foreground/80 mb-3">
                + 320 integrations
              </div>
              <div className="font-display font-bold text-4xl leading-tight">
                Your passport works <em className="text-lime not-italic">everywhere</em>.
              </div>
            </div>
            <div className="relative flex flex-wrap gap-2">
              {["Farcaster","ETHGlobal","Snapshot","Lens","Gitcoin","Aragon","POAP"].map((x) => (
                <span key={x} className="chip">{x}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------- DASHBOARD PEEK ----------------------- */
function DashboardPeek() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          kicker="05 · the cockpit"
          title={<>A dashboard <span className="text-holo">from the future.</span></>}
          sub="Monitor your identity score, vault, permissions, and verification requests in one neon command center."
        />
        <div className="mt-14 relative rounded-3xl glass-strong p-3 md:p-5 overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-20" />
          <div className="relative aspect-[16/10] rounded-2xl bg-graphite border border-white/10 overflow-hidden scanline">
            <DashboardPreviewMini />
          </div>
          <div className="mt-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
              live preview · interactive
            </div>
            <Link
              to="/dashboard"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-neon text-background font-display font-bold glow-neon hover:scale-[1.03] active:scale-95 transition self-start"
            >
              open dashboard →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function DashboardPreviewMini() {
  return (
    <div className="grid grid-cols-12 gap-3 p-4 h-full text-xs">
      <div className="col-span-3 glass rounded-xl p-3 flex flex-col gap-2">
        <div className="font-mono text-[10px] text-muted-foreground uppercase">identity score</div>
        <div className="font-display font-bold text-3xl text-lime">94<span className="text-sm text-muted-foreground">/100</span></div>
        <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
          <div className="h-full w-[94%] bg-lime" />
        </div>
      </div>
      <div className="col-span-5 glass rounded-xl p-3">
        <div className="font-mono text-[10px] text-muted-foreground uppercase mb-2">privacy analytics</div>
        <div className="flex items-end gap-1 h-20">
          {[40,65,30,80,55,90,70,45,60,85,75,95].map((h, i) => (
            <div key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, background: i % 3 === 0 ? "var(--neon)" : i % 3 === 1 ? "var(--electric)" : "var(--lime)" }} />
          ))}
        </div>
      </div>
      <div className="col-span-4 glass rounded-xl p-3 space-y-2">
        <div className="font-mono text-[10px] text-muted-foreground uppercase">recent requests</div>
        {["Farcaster · age","Snapshot · DAO","ETHGlobal · POAP"].map((r) => (
          <div key={r} className="flex items-center justify-between rounded-md bg-white/5 px-2 py-1.5">
            <span className="truncate">{r}</span>
            <span className="h-1.5 w-1.5 rounded-full bg-lime" />
          </div>
        ))}
      </div>
      <div className="col-span-7 glass rounded-xl p-3">
        <div className="font-mono text-[10px] text-muted-foreground uppercase mb-2">connected apps</div>
        <div className="grid grid-cols-6 gap-2">
          {["FC","LE","SN","GC","PO","AR"].map((x, i) => (
            <div key={i} className="aspect-square rounded-lg glass-strong flex items-center justify-center font-display font-bold">{x}</div>
          ))}
        </div>
      </div>
      <div className="col-span-5 glass rounded-xl p-3">
        <div className="font-mono text-[10px] text-muted-foreground uppercase mb-2">credential vault</div>
        <div className="space-y-2">
          {["ENS · nova.eth","MIT · CS '24","Gitcoin · GR20"].map((x) => (
            <div key={x} className="rounded-md bg-white/5 px-2 py-1.5 flex items-center justify-between">
              <span>{x}</span><span className="text-lime">●</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ----------------------- CTA ----------------------- */
function CTA() {
  return (
    <section className="relative py-24 md:py-32 noise">
      <div className="max-w-5xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-[2.5rem] glass-strong p-10 md:p-16 text-center">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[420px] w-[420px] holo opacity-40 blur-3xl animate-blob" />
          <div className="relative">
            <div className="chip mx-auto glow-lime mb-6">join the open identity layer</div>
            <h2 className="font-display font-bold text-[clamp(2.4rem,6vw,5rem)] leading-[0.95]">
              Be your own <span className="text-holo">root of trust.</span>
            </h2>
            <p className="mt-5 text-muted-foreground max-w-xl mx-auto">
              Verix is free, open-source, and yours. No subscriptions. No KYC. No vendor lock-in.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/dashboard"
                className="px-6 py-3.5 rounded-2xl bg-lime text-background font-display font-bold glow-lime hover:scale-[1.03] active:scale-95 transition"
              >
                Create Passport →
              </Link>
              <a
                href="#how"
                className="px-6 py-3.5 rounded-2xl glass-strong font-display font-semibold hover:bg-white/10 transition"
              >
                Read the manifesto
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------- SHARED ----------------------- */
function SectionHeader({
  kicker, title, sub,
}: { kicker: string; title: React.ReactNode; sub: string }) {
  return (
    <div className="max-w-3xl">
      <div className="font-mono text-xs uppercase tracking-[0.25em] text-lime mb-4">{kicker}</div>
      <h2 className="font-display font-bold text-[clamp(2rem,5vw,3.8rem)] leading-[0.98]">{title}</h2>
      <p className="mt-4 text-lg text-muted-foreground">{sub}</p>
    </div>
  );
}
