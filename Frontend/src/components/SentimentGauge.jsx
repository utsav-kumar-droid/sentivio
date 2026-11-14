import React from 'react';
import { ThumbsUp, ThumbsDown, Minus, ShieldCheck, Sparkles } from 'lucide-react';

export default function SentimentGauge({
  positive = 54.2,
  negative = 26.8,
  neutral = 19.0,
  netScore = "+27.4",
  confidence = 0.94
}) {
  return (
    <div className="glass-panel rounded-2xl p-6 border border-slate-800 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            RoBERTa Macro Sentiment Breakdown
          </h4>
          <p className="text-xs text-slate-400 mt-0.5">
            Real-time multi-head attention polarity classification
          </p>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-indigo-950/60 border border-indigo-800/40 text-indigo-300 text-xs font-mono">
          <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
          <span>Net Index: {netScore}</span>
        </div>
      </div>

      {/* Tri-color Stacked Progress Bar */}
      <div className="space-y-2">
        <div className="h-4 w-full rounded-full bg-slate-900 overflow-hidden flex p-0.5 border border-slate-800">
          <div
            style={{ width: `${positive}%` }}
            className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-l-full transition-all duration-500 shadow-sm shadow-emerald-500/50"
            title={`Positive: ${positive}%`}
          />
          <div
            style={{ width: `${neutral}%` }}
            className="h-full bg-gradient-to-r from-slate-400 to-slate-500 transition-all duration-500"
            title={`Neutral: ${neutral}%`}
          />
          <div
            style={{ width: `${negative}%` }}
            className="h-full bg-gradient-to-r from-rose-500 to-pink-500 rounded-r-full transition-all duration-500 shadow-sm shadow-rose-500/50"
            title={`Negative: ${negative}%`}
          />
        </div>

        {/* Legend row */}
        <div className="grid grid-cols-3 gap-2 pt-1 font-mono text-xs">
          <div className="flex items-center gap-2 p-2 rounded-xl bg-emerald-950/20 border border-emerald-900/30">
            <ThumbsUp className="w-4 h-4 text-emerald-400" />
            <div>
              <div className="text-[10px] text-slate-400 uppercase font-semibold">Positive</div>
              <div className="text-sm font-bold text-emerald-400">{positive}%</div>
            </div>
          </div>

          <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-900/60 border border-slate-800">
            <Minus className="w-4 h-4 text-slate-400" />
            <div>
              <div className="text-[10px] text-slate-400 uppercase font-semibold">Neutral</div>
              <div className="text-sm font-bold text-slate-200">{neutral}%</div>
            </div>
          </div>

          <div className="flex items-center gap-2 p-2 rounded-xl bg-rose-950/20 border border-rose-900/30">
            <ThumbsDown className="w-4 h-4 text-rose-400" />
            <div>
              <div className="text-[10px] text-slate-400 uppercase font-semibold">Negative</div>
              <div className="text-sm font-bold text-rose-400">{negative}%</div>
            </div>
          </div>
        </div>
      </div>

      {/* Model Confidence & Telemetry footer */}
      <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-indigo-400" />
          <span>Transformer Confidence: {(confidence * 100).toFixed(1)}%</span>
        </div>
        <span className="text-[11px] text-slate-500">
          Byte-Pair Encoding • 50k Corpus
        </span>
      </div>
    </div>
  );
}
