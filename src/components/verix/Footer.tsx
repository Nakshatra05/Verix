export function Footer() {
  return (
    <footer className="relative mt-20 border-t border-white/10">
      <div className="overflow-hidden border-y border-white/10 bg-lime text-[oklch(0.16_0.025_280)]">
        <div className="flex whitespace-nowrap animate-tape py-3 font-display font-bold text-2xl">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center gap-8 px-8 shrink-0">
              {["VERIX", "★", "YOUR IDENTITY", "★", "YOUR CONTROL", "★", "BUILT FOR THE OPEN INTERNET", "★", "VERIX", "★", "DATA PASSPORT", "★"].map((t, j) => (
                <span key={j}>{t}</span>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2">
            <img src="/favicon.svg" alt="Verix" className="h-7 w-7" />
            <span className="font-display font-bold text-lg">VERIX<span className="text-lime">.</span></span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">
            The decentralized Data Passport for humans, agents, and everything in between.
          </p>
        </div>
        {[
          { t: "product", l: ["Passport", "Dashboard", "Vault", "Permissions"] },
          { t: "build", l: ["Docs", "API", "SDK", "Discord"] },
          { t: "legal", l: ["Privacy", "Terms", "Security", "Brand"] },
        ].map((col) => (
          <div key={col.t}>
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3">{col.t}</div>
            <ul className="space-y-2 text-sm">
              {col.l.map((x) => (
                <li key={x}><a href="#" className="hover:text-lime transition">{x}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="max-w-7xl mx-auto px-6 pb-8 flex flex-col md:flex-row items-center justify-between gap-3 text-xs font-mono text-muted-foreground">
        <span>© 2026 Verix Labs · made on the open internet</span>
        <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-lime animate-pulse-glow" /> mainnet · stable</span>
      </div>
    </footer>
  );
}
