import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import usePassport from "@/hooks/usePassport";
import { Nav } from "@/components/verix/Nav";
import { Particles } from "@/components/verix/Particles";
import { PassportCard } from "@/components/verix/PassportCard";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard — Verix" },
      { name: "description", content: "Your Verix Data Passport cockpit on Algorand. Monitor identity score, vault, and active permissions." },
    ],
  }),
  component: Dashboard,
});

function Dashboard() {
  return (
    <div className="relative min-h-screen pb-20">
      <Nav />
      <div className="pt-28 md:pt-32">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[800px] holo opacity-20 blur-3xl -z-10" />
        <Particles count={18} />
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <Header />
          <div className="mt-8 grid grid-cols-12 gap-4 md:gap-5">
            {/* left rail */}
            <aside className="col-span-12 lg:col-span-3 space-y-4">
              <IdentityScore />
              <ProfileCard />
            </aside>

            {/* main */}
            <main className="col-span-12 lg:col-span-6 space-y-4">
              <PrivacyAnalytics />
              <CredentialVault />
              <ConnectedApps />
            </main>

            {/* right rail */}
            <aside className="col-span-12 lg:col-span-3 space-y-4">
              <VerificationRequests />
              <ActivePermissions />
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}

function Header() {
  const { data, loading } = usePassport();

  return (
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
      <div>
        <div className="font-mono text-xs uppercase tracking-[0.25em] text-lime mb-2">passport cockpit</div>
        <h1 className="font-display font-bold text-4xl md:text-5xl leading-none">
          gm, <span className="text-holo">{loading ? '@you' : data?.name ?? '@guest'}</span>
        </h1>
        <p className="text-sm text-muted-foreground mt-1 font-mono">{loading ? 'connecting…' : (data?.email ?? 'Algorand · mainnet')}</p>
      </div>
      <div className="flex items-center gap-2">
        <button className="px-4 py-2.5 rounded-xl glass-strong font-mono text-xs uppercase tracking-widest hover:bg-white/10 transition">+ add credential</button>
        <button className="px-4 py-2.5 rounded-xl bg-lime text-background font-display font-bold text-sm glow-lime hover:scale-[1.03] active:scale-95 transition">share passport</button>
      </div>
    </div>
  );
}

function Panel({ title, kicker, children, className = "" }: { title?: string; kicker?: string; children: React.ReactNode; className?: string }) {
  return (
    <section className={`glass-strong rounded-3xl p-5 noise ${className}`}>
      {(title || kicker) && (
        <header className="flex items-center justify-between mb-4">
          <div>
            {kicker && <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{kicker}</div>}
            {title && <div className="font-display font-bold text-lg">{title}</div>}
          </div>
        </header>
      )}
      {children}
    </section>
  );
}

function IdentityScore() {
  const score = 94;
  return (
    <Panel kicker="identity score" title="Trust index">
      <div className="relative flex items-center justify-center py-3">
        <svg viewBox="0 0 120 120" className="h-44 w-44 -rotate-90">
          <circle cx="60" cy="60" r="50" stroke="oklch(1 0 0 / 0.08)" strokeWidth="10" fill="none" />
          <circle
            cx="60" cy="60" r="50"
            stroke="url(#sc)"
            strokeWidth="10" fill="none" strokeLinecap="round"
            strokeDasharray={`${(score / 100) * 314} 314`}
          />
          <defs>
            <linearGradient id="sc" x1="0" x2="1">
              <stop offset="0%" stopColor="oklch(0.65 0.28 305)" />
              <stop offset="50%" stopColor="oklch(0.72 0.22 240)" />
              <stop offset="100%" stopColor="oklch(0.92 0.24 130)" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute text-center">
          <div className="font-display font-bold text-5xl">{score}</div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">/100 · elite</div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 mt-2 text-center">
        {[
          { l: "wallet", v: "A+", c: "var(--lime)" },
          { l: "social", v: "A", c: "var(--electric)" },
          { l: "edu", v: "A+", c: "var(--neon)" },
        ].map((x) => (
          <div key={x.l} className="rounded-xl bg-white/5 py-2">
            <div className="font-display font-bold text-lg" style={{ color: x.c }}>{x.v}</div>
            <div className="font-mono text-[10px] uppercase text-muted-foreground">{x.l}</div>
          </div>
        ))}
      </div>
    </Panel>
  );
}

function ProfileCard() {
  return (
    <div className="hidden lg:flex justify-center">
      <PassportCard variant="lime" rotate="-3deg" className="scale-90" />
    </div>
  );
}

function PrivacyAnalytics() {
  const days = ["M","T","W","T","F","S","S"];
  const data = [
    [40,55,80,45,90,60,75],
    [25,40,30,50,35,55,45],
    [60,45,70,80,55,90,85],
  ];
  return (
    <Panel kicker="last 7d" title="Privacy analytics">
      <div className="flex items-end gap-1.5 h-44">
        {days.map((d, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-2">
            <div className="w-full flex flex-col-reverse gap-0.5 h-full justify-end">
              <div className="w-full rounded-t-md" style={{ height: `${data[0][i]}%`, background: "var(--neon)", boxShadow: `0 0 12px var(--neon)` }} />
              <div className="w-full" style={{ height: `${data[1][i]}%`, background: "var(--electric)" }} />
              <div className="w-full" style={{ height: `${data[2][i]}%`, background: "var(--lime)" }} />
            </div>
            <span className="font-mono text-[10px] text-muted-foreground">{d}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 grid grid-cols-3 gap-3 text-xs">
        <Legend c="var(--neon)" l="approvals" v="48" />
        <Legend c="var(--electric)" l="requests" v="62" />
        <Legend c="var(--lime)" l="proofs" v="113" />
      </div>
    </Panel>
  );
}
function Legend({ c, l, v }: { c: string; l: string; v: string }) {
  return (
    <div className="flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2">
      <span className="h-2 w-2 rounded-full" style={{ background: c, boxShadow: `0 0 10px ${c}` }} />
      <div>
        <div className="font-display font-bold">{v}</div>
        <div className="font-mono text-[9px] uppercase text-muted-foreground tracking-widest">{l}</div>
      </div>
    </div>
  );
}

function CredentialVault() {
  const creds = [
    { t: "NFD · .algo", v: "nova.algo", tag: "wallet", c: "var(--electric)" },
    { t: "MIT · Computer Science", v: "Class of '24", tag: "education", c: "var(--lime)" },
    { t: "Aragon DAO", v: "Council member · since 2023", tag: "dao", c: "var(--neon)" },
    { t: "Algorand Reputation", v: "Stamps · 12", tag: "reputation", c: "var(--hot)" },
    { t: "NFD Profile", v: "@nova.algo · verified", tag: "social", c: "var(--electric)" },
  ];
  return (
    <Panel kicker="vault · 5 items" title="Credential vault">
      <div className="space-y-2">
        {creds.map((c) => (
          <div key={c.t} className="group flex items-center gap-3 rounded-2xl bg-white/5 hover:bg-white/10 p-3 transition">
            <div className="h-11 w-11 rounded-xl shrink-0" style={{ background: c.c, boxShadow: `0 0 16px ${c.c}` }} />
            <div className="min-w-0 flex-1">
              <div className="font-display font-semibold truncate">{c.t}</div>
              <div className="font-mono text-xs text-muted-foreground truncate">{c.v}</div>
            </div>
            <span className="chip hidden sm:inline-flex">{c.tag}</span>
            <button className="opacity-0 group-hover:opacity-100 transition text-xs font-mono uppercase tracking-widest px-2 py-1 rounded-md bg-white/10">share</button>
          </div>
        ))}
      </div>
    </Panel>
  );
}

function ConnectedApps() {
  const apps = [
    { n: "Pera Wallet", s: "Active", c: "var(--neon)" },
    { n: "Defly", s: "Active", c: "var(--electric)" },
    { n: "NFD", s: "Active", c: "var(--lime)" },
    { n: "Algorand Hack Series", s: "Idle", c: "var(--hot)" },
    { n: "Folks Finance", s: "Active", c: "var(--electric)" },
    { n: "Tinyman", s: "Active", c: "var(--lime)" },
    { n: "Gov Algo", s: "Active", c: "var(--neon)" },
    { n: "AlgoDeFi", s: "Idle", c: "var(--electric)" },
  ];
  return (
    <Panel kicker="320 integrations" title="Connected apps">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {apps.map((a) => (
          <div key={a.n} className="rounded-2xl bg-white/5 hover:bg-white/10 p-3 transition border border-white/5 hover:-translate-y-1">
            <div className="h-9 w-9 rounded-lg mb-2" style={{ background: a.c, boxShadow: `0 0 14px ${a.c}` }} />
            <div className="font-display font-semibold text-sm">{a.n}</div>
            <div className="font-mono text-[10px] uppercase text-muted-foreground">{a.s}</div>
          </div>
        ))}
      </div>
    </Panel>
  );
}

function VerificationRequests() {
  const [reqs, setReqs] = useState([
    { app: "Pera Wallet", scope: "wallet · linked", c: "var(--neon)" },
    { app: "Gov Algo", scope: "DAO membership", c: "var(--electric)" },
    { app: "Algorand Hack Series", scope: "hackathon badges", c: "var(--lime)" },
    { app: "NFD", scope: "verified .algo", c: "var(--hot)" },
  ]);
  function decide(i: number) {
    setReqs((r) => r.filter((_, idx) => idx !== i));
  }
  return (
    <Panel kicker="pending · live" title="Verification requests">
      <div className="space-y-2">
        {reqs.length === 0 && (
          <div className="text-center py-6 font-mono text-xs text-muted-foreground">inbox zero ✨</div>
        )}
        {reqs.map((r, i) => (
          <div key={i} className="rounded-2xl bg-white/5 border border-white/5 p-3">
            <div className="flex items-center gap-2 mb-2">
              <span className="h-8 w-8 rounded-lg" style={{ background: r.c, boxShadow: `0 0 12px ${r.c}` }} />
              <div className="min-w-0">
                <div className="font-display font-semibold text-sm truncate">{r.app}</div>
                <div className="font-mono text-[10px] uppercase text-muted-foreground">{r.scope}</div>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => decide(i)}
                className="flex-1 py-1.5 rounded-lg bg-lime text-background font-display font-bold text-xs hover:scale-[1.02] active:scale-95 transition"
              >
                approve
              </button>
              <button
                onClick={() => decide(i)}
                className="flex-1 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 font-display font-bold text-xs transition"
              >
                deny
              </button>
            </div>
          </div>
        ))}
      </div>
    </Panel>
  );
}

function ActivePermissions() {
  const perms = [
    { app: "Pera Wallet", exp: "7d", c: "var(--neon)" },
    { app: "NFD", exp: "30d", c: "var(--electric)" },
    { app: "Algorand Hack Series", exp: "∞", c: "var(--lime)" },
    { app: "Folks Finance", exp: "1d", c: "var(--hot)" },
  ];
  return (
    <Panel kicker="active · 4" title="Permissions">
      <div className="space-y-2">
        {perms.map((p) => (
          <div key={p.app} className="rounded-xl bg-white/5 p-3 flex items-center justify-between hover:bg-white/10 transition">
            <div className="flex items-center gap-2 min-w-0">
              <span className="h-2.5 w-2.5 rounded-full animate-pulse-glow" style={{ background: p.c }} />
              <span className="font-display font-semibold truncate">{p.app}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="chip">{p.exp}</span>
              <button className="text-[10px] font-mono uppercase tracking-widest text-hot hover:text-lime transition">revoke</button>
            </div>
          </div>
        ))}
      </div>
      <Link to="/" className="mt-4 block text-center font-mono text-[10px] uppercase tracking-widest text-muted-foreground hover:text-lime transition">
        ← back to landing
      </Link>
    </Panel>
  );
}
