import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

export default function KPIStatsCard({
  title,
  value,
  subvalue,
  change,
  isPositive,
  icon: Icon,
  badgeText,
  colorScheme = "indigo"
}) {
  const colorMap = {
    indigo: {
      border: "border-indigo-800/40",
      bg: "bg-indigo-950/20",
      iconBg: "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20",
      glow: "hover:border-indigo-600/60"
    },
    emerald: {
      border: "border-emerald-800/40",
      bg: "bg-emerald-950/20",
      iconBg: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
      glow: "hover:border-emerald-600/60"
    },
    rose: {
      border: "border-rose-800/40",
      bg: "bg-rose-950/20",
      iconBg: "bg-rose-500/10 text-rose-400 border border-rose-500/20",
      glow: "hover:border-rose-600/60"
    },
    amber: {
      border: "border-amber-800/40",
      bg: "bg-amber-950/20",
      iconBg: "bg-amber-500/10 text-amber-400 border border-amber-500/20",
      glow: "hover:border-amber-600/60"
    },
    cyan: {
      border: "border-cyan-800/40",
      bg: "bg-cyan-950/20",
      iconBg: "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20",
      glow: "hover:border-cyan-600/60"
    }
  };

  const currentTheme = colorMap[colorScheme] || colorMap.indigo;

  return (
    <div
      className={`glass-panel rounded-2xl p-5 border ${currentTheme.border} ${currentTheme.glow} transition-all duration-300 relative overflow-hidden group`}
    >
      {/* Background soft ambient gradient */}
      <div className="absolute top-0 right-0 -mr-6 -mt-6 w-24 h-24 rounded-full bg-indigo-500/5 blur-2xl group-hover:bg-indigo-500/15 transition-all" />

      <div className="flex items-start justify-between relative z-10">
        <div>
          <span className="text-[11px] font-bold text-slate-400 tracking-wider uppercase font-mono">
            {title}
          </span>
          <div className="flex items-baseline gap-2 mt-1">
            <h3 className="text-2xl font-black text-white font-mono tracking-tight">
              {value}
            </h3>
            {subvalue && (
              <span className="text-xs text-slate-400 font-mono">
                {subvalue}
              </span>
            )}
          </div>
        </div>

        {Icon && (
          <div className={`p-2.5 rounded-xl ${currentTheme.iconBg}`}>
            <Icon className="w-5 h-5" />
          </div>
        )}
      </div>

      <div className="mt-4 flex items-center justify-between text-xs pt-3 border-t border-slate-800/60 relative z-10">
        {change && (
          <div className="flex items-center gap-1 font-mono font-medium">
            {isPositive ? (
              <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400" />
            ) : (
              <ArrowDownRight className="w-3.5 h-3.5 text-rose-400" />
            )}
            <span className={isPositive ? "text-emerald-400 font-bold" : "text-rose-400 font-bold"}>
              {change}
            </span>
            <span className="text-slate-500 text-[10px]">vs previous hr</span>
          </div>
        )}

        {badgeText && (
          <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-slate-800/80 text-slate-300 border border-slate-700/50">
            {badgeText}
          </span>
        )}
      </div>
    </div>
  );
}
