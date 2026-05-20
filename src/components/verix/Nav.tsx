import { Link } from "@tanstack/react-router";
import { useState } from "react";

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto mt-4 max-w-7xl px-4">
        <nav className="glass-strong rounded-2xl px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <img src="/favicon.svg" alt="Verix" className="h-8 w-8" />
            <span className="font-display font-bold text-lg tracking-tight">
              VERIX<span className="text-lime">.</span>
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-1 font-mono text-xs uppercase tracking-widest">
            <a href="#passport" className="px-3 py-2 rounded-lg hover:bg-white/5 transition">passport</a>
            <a href="#how" className="px-3 py-2 rounded-lg hover:bg-white/5 transition">how it works</a>
            <a href="#privacy" className="px-3 py-2 rounded-lg hover:bg-white/5 transition">privacy</a>
            <a href="#use-cases" className="px-3 py-2 rounded-lg hover:bg-white/5 transition">use cases</a>
            <Link to="/dashboard" className="px-3 py-2 rounded-lg hover:bg-white/5 transition">dashboard</Link>
          </div>
          <div className="flex items-center gap-2">
            <span className="hidden lg:inline-flex chip text-[10px] font-mono uppercase tracking-widest border-lime/40 text-lime">
              Algorand native
            </span>
            <Link
              to="/dashboard"
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-lime text-[oklch(0.16_0.025_280)] font-display font-semibold text-sm hover:scale-[1.03] active:scale-95 transition glow-lime"
            >
              launch app →
            </Link>
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden h-9 w-9 rounded-lg glass flex items-center justify-center"
              aria-label="menu"
            >
              <div className="space-y-1">
                <span className="block h-0.5 w-4 bg-foreground" />
                <span className="block h-0.5 w-4 bg-foreground" />
              </div>
            </button>
          </div>
        </nav>
        {open && (
          <div className="md:hidden mt-2 glass-strong rounded-2xl p-4 font-mono text-sm space-y-2">
            <a href="#passport" onClick={() => setOpen(false)} className="block py-1">passport</a>
            <a href="#how" onClick={() => setOpen(false)} className="block py-1">how it works</a>
            <a href="#privacy" onClick={() => setOpen(false)} className="block py-1">privacy</a>
            <a href="#use-cases" onClick={() => setOpen(false)} className="block py-1">use cases</a>
            <Link to="/dashboard" className="block py-1 text-lime">dashboard →</Link>
          </div>
        )}
      </div>
    </header>
  );
}
