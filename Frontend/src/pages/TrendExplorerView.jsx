import React, { useState } from 'react';
import {
  TrendingUp,
  Flame,
  Search,
  Filter,
  Bot,
  AlertTriangle,
  ArrowUpRight,
  ShieldCheck,
  Hash,
  BarChart2
} from 'lucide-react';
import { TRENDING_TOPICS } from '../services/mockData';

export default function TrendExplorerView() {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [search, setSearch] = useState('');

  const categories = ['ALL', 'Technology', 'Infrastructure', 'Science', 'Web3', 'Climate'];

  const filteredTopics = TRENDING_TOPICS.filter((t) => {
    if (selectedCategory !== 'ALL' && t.category !== selectedCategory) return false;
    if (search && !t.tag.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="space-y-6 pb-12">
      {/* Header card */}
      <div className="glass-panel rounded-2xl p-6 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Flame className="w-5 h-5 text-amber-400" />
            <h2 className="text-lg font-bold text-white tracking-tight">
              Trend Explorer & Astroturfing Scanner
            </h2>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Analyzing viral hashtag velocity, public sentiment resonance, and bot-induced synthetic amplification
          </p>
        </div>

        {/* Filter categories */}
        <div className="flex flex-wrap items-center gap-1.5 bg-slate-900/80 p-1 rounded-xl border border-slate-800">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setSelectedCategory(c)}
              className={`px-3 py-1 rounded-lg text-xs font-mono transition-colors ${
                selectedCategory === c
                  ? 'bg-indigo-600 text-white font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Topic Bubbles / Word Cloud Visualization */}
      <div className="glass-panel rounded-2xl p-6 border border-slate-800 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-bold uppercase tracking-wider font-mono text-slate-400">
            Semantic Topic Cluster & Volume Density
          </h3>
          <span className="text-[10px] text-slate-500 font-mono">Weighted by Tweet Velocity</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 py-6 px-4 bg-slate-950/60 rounded-xl border border-slate-900 min-h-48">
          <span className="px-5 py-2.5 rounded-2xl bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 text-lg font-extrabold shadow-lg shadow-indigo-500/10 cursor-pointer hover:scale-105 transition-transform">
            #AIRevolution2026 (182K)
          </span>
          <span className="px-4 py-2 rounded-xl bg-rose-500/20 text-rose-300 border border-rose-500/40 text-base font-bold cursor-pointer hover:scale-105 transition-transform">
            #CloudOutageIncident (94K) ⚠️
          </span>
          <span className="px-4 py-1.5 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-sm font-semibold cursor-pointer hover:scale-105 transition-transform">
            #QuantumSupremacy (76K)
          </span>
          <span className="px-3 py-1.5 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-mono cursor-pointer hover:scale-105 transition-transform">
            #CryptoBonusGiveaway (Bot 72%) 🤖
          </span>
          <span className="px-4 py-2 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-sm font-semibold cursor-pointer hover:scale-105 transition-transform">
            #GreenEnergyGrid (45K)
          </span>
          <span className="px-3 py-1 rounded-lg bg-slate-800 text-slate-300 text-xs cursor-pointer hover:bg-slate-700">
            #TransformerNLP
          </span>
          <span className="px-3 py-1 rounded-lg bg-slate-800 text-slate-300 text-xs cursor-pointer hover:bg-slate-700">
            #SATI_Vidisha
          </span>
          <span className="px-3 py-1 rounded-lg bg-slate-800 text-slate-300 text-xs cursor-pointer hover:bg-slate-700">
            #DeepfakeShield
          </span>
          <span className="px-3 py-1 rounded-lg bg-slate-800 text-slate-300 text-xs cursor-pointer hover:bg-slate-700">
            #WebSocketsRT
          </span>
        </div>
      </div>

      {/* Detailed Trends Table */}
      <div className="glass-panel rounded-2xl border border-slate-800 overflow-hidden">
        <div className="p-4 border-b border-slate-800/80 flex items-center justify-between">
          <span className="text-xs font-bold text-white uppercase font-mono tracking-wider">
            Active Trends Breakdown
          </span>
          <span className="text-xs text-slate-400 font-mono">
            {filteredTopics.length} topics identified
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-mono">
            <thead className="bg-slate-900/90 text-slate-400 border-b border-slate-800">
              <tr>
                <th className="py-3 px-4">Topic / Hashtag</th>
                <th className="py-3 px-4">Category</th>
                <th className="py-3 px-4">Volume</th>
                <th className="py-3 px-4">Growth (1h)</th>
                <th className="py-3 px-4">Sentiment Score</th>
                <th className="py-3 px-4">Dominant Emotion</th>
                <th className="py-3 px-4">Bot Astroturfing</th>
                <th className="py-3 px-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300">
              {filteredTopics.map((topic) => (
                <tr key={topic.id} className="hover:bg-slate-800/40 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-white flex items-center gap-1.5">
                    <Hash className="w-3.5 h-3.5 text-indigo-400" />
                    <span>{topic.tag.replace('#', '')}</span>
                  </td>
                  <td className="py-3.5 px-4 text-slate-400">{topic.category}</td>
                  <td className="py-3.5 px-4 font-bold text-white">{topic.volume}</td>
                  <td className="py-3.5 px-4 text-emerald-400 font-bold flex items-center gap-1">
                    <ArrowUpRight className="w-3 h-3" />
                    {topic.growth}
                  </td>
                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-1.5 rounded-full bg-slate-800 overflow-hidden">
                        <div
                          className={`h-full rounded-full ${
                            topic.sentimentScore > 60
                              ? 'bg-emerald-400'
                              : topic.sentimentScore > 40
                              ? 'bg-amber-400'
                              : 'bg-rose-400'
                          }`}
                          style={{ width: `${topic.sentimentScore}%` }}
                        />
                      </div>
                      <span className="font-bold">{topic.sentimentScore}/100</span>
                    </div>
                  </td>
                  <td className="py-3.5 px-4 text-indigo-300 font-semibold">{topic.dominantEmotion}</td>
                  <td className="py-3.5 px-4">
                    <span
                      className={`font-semibold ${
                        parseFloat(topic.botPresence) > 50
                          ? 'text-rose-400 font-bold'
                          : 'text-slate-400'
                      }`}
                    >
                      {topic.botPresence}
                    </span>
                  </td>
                  <td className="py-3.5 px-4">
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        topic.status === 'CRISIS'
                          ? 'bg-rose-500/20 text-rose-400 border border-rose-500/40'
                          : topic.status === 'ASTROTURFING'
                          ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
                          : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                      }`}
                    >
                      {topic.status}
                    </span>
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
