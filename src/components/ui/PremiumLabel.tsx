export function PremiumLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <div className="h-[1px] w-6 bg-white/40" />
      <span className="uppercase tracking-[0.2em] text-xs font-semibold text-white/70">
        {children}
      </span>
    </div>
  );
}
