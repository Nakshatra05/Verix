import { useState } from "react";

interface Props {
  className?: string;
  rotate?: string;
  variant?: "purple" | "lime" | "blue";
  interactive?: boolean;
}

export function PassportCard({ className = "", rotate = "0deg", variant = "purple", interactive = false }: Props) {
  const [shareSocial, setShareSocial] = useState(true);
  const [shareEdu, setShareEdu] = useState(true);
  const [shareDao, setShareDao] = useState(false);

  const ring =
    variant === "lime" ? "glow-lime" : variant === "blue" ? "glow-blue" : "glow-neon";

  return (
    <div
      className={`relative ${className}`}
      style={{ transform: `rotate(${rotate})` }}
    >
      <div className={`glass-strong noise rounded-3xl p-5 w-[320px] ${ring}`}>
        {/* header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg holo" />
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">data passport</div>
              <div className="font-display font-bold leading-tight">@nova.algo</div>
            </div>
          </div>
          <span className="chip glow-lime !text-lime">verified</span>
        </div>

        {/* wallet */}
        <div className="mt-4 rounded-xl bg-black/30 border border-white/10 p-3 font-mono text-xs">
          <div className="text-muted-foreground text-[10px] uppercase mb-1">wallet</div>
          <div className="flex items-center justify-between">
            <span className="truncate">NOVA…2E4K</span>
            <span className="text-lime">●</span>
          </div>
        </div>

        {/* badges */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {["Algorand Hack Series", "Pera", "ZK Pro", "DAO×3", ".algo"].map((b, i) => (
            <span
              key={b}
              className="chip"
              style={{
                color: ["var(--lime)","var(--electric)","var(--neon)","var(--lime)","var(--electric)"][i],
                borderColor: "currentColor",
              }}
            >
              {b}
            </span>
          ))}
        </div>

        {/* socials */}
        <div className="mt-4 grid grid-cols-3 gap-2">
          {[
            { l: "FC", n: "farcaster" },
            { l: "𝕏", n: "twitter" },
            { l: "GH", n: "github" },
          ].map((s) => (
            <div key={s.n} className="rounded-lg bg-white/5 border border-white/10 p-2 text-center">
              <div className="font-display font-bold">{s.l}</div>
              <div className="font-mono text-[9px] text-muted-foreground uppercase">{s.n}</div>
            </div>
          ))}
        </div>

        {/* verifications */}
        <div className="mt-3 space-y-2 text-xs">
          <Row label="MIT · CS '24" tone="lime" />
          <Row label="Aragon DAO · member" tone="electric" />
        </div>

        {/* toggles */}
        <div className="mt-4 rounded-xl border border-dashed border-white/15 p-3 space-y-2">
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            selective share
          </div>
          <Toggle label="socials" on={shareSocial} onChange={() => interactive && setShareSocial(!shareSocial)} />
          <Toggle label="education" on={shareEdu} onChange={() => interactive && setShareEdu(!shareEdu)} />
          <Toggle label="dao history" on={shareDao} onChange={() => interactive && setShareDao(!shareDao)} />
        </div>

        <div className="mt-4 flex items-center justify-between font-mono text-[10px] text-muted-foreground">
          <span>VRX·ID ALGO·A1.92F</span>
          <span className="text-lime">●  live</span>
        </div>
      </div>
    </div>
  );
}

function Row({ label, tone }: { label: string; tone: "lime" | "electric" }) {
  const c = tone === "lime" ? "var(--lime)" : "var(--electric)";
  return (
    <div className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2 border border-white/5">
      <span>{label}</span>
      <span className="h-2 w-2 rounded-full" style={{ background: c, boxShadow: `0 0 10px ${c}` }} />
    </div>
  );
}

function Toggle({ label, on, onChange }: { label: string; on: boolean; onChange: () => void }) {
  return (
    <button
      onClick={onChange}
      className="w-full flex items-center justify-between text-xs hover:bg-white/5 px-1 py-1 rounded-md transition"
    >
      <span className="font-mono uppercase tracking-wider text-[11px]">{label}</span>
      <span
        className={`relative h-5 w-9 rounded-full transition ${on ? "bg-lime" : "bg-white/15"}`}
      >
        <span
          className={`absolute top-0.5 h-4 w-4 rounded-full bg-background transition-all ${on ? "left-4" : "left-0.5"}`}
        />
      </span>
    </button>
  );
}
