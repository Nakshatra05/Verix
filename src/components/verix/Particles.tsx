export function Particles({ count = 24 }: { count?: number }) {
  const dots = Array.from({ length: count });
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {dots.map((_, i) => {
        const size = 2 + (i % 4);
        const left = (i * 37) % 100;
        const top = (i * 53) % 100;
        const delay = (i % 10) * 0.7;
        const dur = 6 + (i % 7);
        const color = i % 3 === 0 ? "var(--neon)" : i % 3 === 1 ? "var(--electric)" : "var(--lime)";
        return (
          <span
            key={i}
            className="absolute rounded-full animate-float"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: size,
              height: size,
              background: color,
              boxShadow: `0 0 ${size * 4}px ${color}`,
              animationDelay: `${delay}s`,
              animationDuration: `${dur}s`,
              opacity: 0.7,
            }}
          />
        );
      })}
    </div>
  );
}
