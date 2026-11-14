import React from 'react';
import { BarChart3, TrendingUp, ShieldAlert, Award, ArrowUpRight } from 'lucide-react';
import { COMPETITOR_DATA } from '../services/mockData';

export default function CompetitorAnalysisView() {
  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="glass-panel rounded-2xl p-6 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-indigo-400" />
            <h2 className="text-lg font-bold text-white tracking-tight">
              Competitor Intelligence & Brand Benchmarking
            </h2>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Comparative analysis of market share of voice, net sentiment polarity, and bot contamination rates
          </p>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs">
          <span className="px-3 py-1 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 flex items-center gap-1.5">
            <Award className="w-4 h-4 text-amber-400" />
            Sentivio Ranked #1
          </span>
        </div>
      </div>

      {/* Competitor Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {COMPETITOR_DATA.map((brand, idx) => (
          <div
            key={brand.name}
            className={`glass-panel rounded-2xl p-5 border space-y-4 ${
              idx === 0
                ? 'border-indigo-500/60 bg-indigo-950/20 shadow-lg shadow-indigo-600/15'
                : 'border-slate-800'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-white truncate">{brand.name}</span>
              {idx === 0 && (
                <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-indigo-500 text-white font-bold">
                  OUR PLATFORM
                </span>
              )}
            </div>

            <div>
              <span className="text-[10px] text-slate-500 uppercase font-mono font-bold">
                Share of Voice
              </span>
              <div className="text-2xl font-black text-white font-mono mt-0.5">
                {brand.shareOfVoice}
              </div>
            </div>

            <div className="space-y-2 pt-2 border-t border-slate-800/80 text-xs font-mono">
              <div className="flex justify-between">
                <span className="text-slate-400">Net Sentiment:</span>
                <span className="font-bold text-emerald-400">{brand.netSentimentScore}/100</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Bot Distortion:</span>
                <span
                  className={
                    parseFloat(brand.botContamination) > 10
                      ? 'text-rose-400 font-bold'
                      : 'text-slate-300'
                  }
                >
                  {brand.botContamination}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Total Mentions:</span>
                <span className="text-slate-200">{brand.totalMentions}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Comparative Table */}
      <div className="glass-panel rounded-2xl border border-slate-800 overflow-hidden">
        <div className="p-4 border-b border-slate-800/80">
          <span className="text-xs font-bold text-white uppercase font-mono tracking-wider">
            Detailed Comparative Matrix (Table 2.3 & 5.1 Benchmarks)
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-mono">
            <thead className="bg-slate-900/90 text-slate-400 border-b border-slate-800">
              <tr>
                <th className="py-3 px-4">Brand / Platform</th>
                <th className="py-3 px-4">Positive %</th>
                <th className="py-3 px-4">Negative %</th>
                <th className="py-3 px-4">Neutral %</th>
                <th className="py-3 px-4">Bot Isolation</th>
                <th className="py-3 px-4">Inference Model</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300">
              {COMPETITOR_DATA.map((brand, idx) => (
                <tr
                  key={brand.name}
                  className={`hover:bg-slate-800/40 transition-colors ${
                    idx === 0 ? 'bg-indigo-950/20 font-semibold' : ''
                  }`}
                >
                  <td className="py-3.5 px-4 font-bold text-white">{brand.name}</td>
                  <td className="py-3.5 px-4 text-emerald-400">{brand.positivePct}%</td>
                  <td className="py-3.5 px-4 text-rose-400">{brand.negativePct}%</td>
                  <td className="py-3.5 px-4 text-slate-400">{brand.neutralPct}%</td>
                  <td className="py-3.5 px-4">
                    {idx === 0 ? (
                      <span className="text-emerald-400 font-bold">Isolation Forest (2.1% FPR)</span>
                    ) : (
                      <span className="text-rose-400">Unfiltered / Basic IP Filter</span>
                    )}
                  </td>
                  <td className="py-3.5 px-4 text-indigo-300">
                    {idx === 0 ? "RoBERTa Transformer (45.2ms)" : "Keyword / Batch Lexicon"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
