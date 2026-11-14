import React, { useState } from 'react';
import { Globe, MapPin, TrendingUp, BarChart3, Smile, Users } from 'lucide-react';
import { GEO_ANALYTICS_DATA } from '../services/mockData';

export default function GeoAnalyticsView() {
  const [selectedCountry, setSelectedCountry] = useState(GEO_ANALYTICS_DATA[1]); // Default India

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="glass-panel rounded-2xl p-6 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Globe className="w-5 h-5 text-cyan-400" />
            <h2 className="text-lg font-bold text-white tracking-tight">
              Geo-Spatial Sentiment & Regional Heatmaps
            </h2>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Real-time geospatial aggregation of cross-border opinion trends, emotion hot-zones, and localized sentiment indices
          </p>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs">
          <span className="px-3 py-1 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            8 Global Hubs Tracked
          </span>
        </div>
      </div>

      {/* Main Map & Region Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Visual Map Simulator / Grid (7 cols) */}
        <div className="lg:col-span-7 glass-panel rounded-2xl p-6 border border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-white uppercase font-mono tracking-wider">
              Global Sentiment Density Heatmap
            </span>
            <span className="text-[10px] text-slate-400 font-mono">Interactive Hub Nodes</span>
          </div>

          {/* Stylized Geo Map Container */}
          <div className="relative rounded-2xl bg-gradient-to-b from-[#0d1527] to-[#090d16] border border-slate-800/80 p-6 min-h-80 flex flex-col justify-between overflow-hidden">
            {/* World Grid Lines Background */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:16px_16px]" />

            <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {GEO_ANALYTICS_DATA.map((geo) => (
                <div
                  key={geo.code}
                  onClick={() => setSelectedCountry(geo)}
                  className={`p-3 rounded-xl border cursor-pointer transition-all ${
                    selectedCountry.code === geo.code
                      ? 'border-cyan-400 bg-cyan-950/40 shadow-lg shadow-cyan-500/20'
                      : 'border-slate-800 bg-slate-900/60 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white">{geo.code}</span>
                    <span
                      className={`text-[10px] font-mono font-bold ${
                        geo.sentimentScore > 70
                          ? 'text-emerald-400'
                          : geo.sentimentScore > 55
                          ? 'text-amber-400'
                          : 'text-rose-400'
                      }`}
                    >
                      {geo.sentimentScore}/100
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-300 font-medium truncate mt-1">
                    {geo.country}
                  </div>
                  <div className="text-[10px] text-slate-500 font-mono mt-0.5">
                    {geo.volume} posts
                  </div>
                </div>
              ))}
            </div>

            {/* Simulated Heatmap Legend */}
            <div className="relative z-10 pt-6 flex items-center justify-between text-xs font-mono text-slate-400 border-t border-slate-800/80">
              <div className="flex items-center gap-2">
                <span>Polarity Spectrum:</span>
                <div className="w-24 h-2 rounded-full bg-gradient-to-r from-rose-500 via-amber-400 to-emerald-400" />
              </div>
              <span>Click any node to inspect region metrics</span>
            </div>
          </div>
        </div>

        {/* Selected Country Deep Dive (5 cols) */}
        <div className="lg:col-span-5 glass-panel rounded-2xl p-6 border border-slate-800 space-y-5">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase text-slate-500">
                Detailed Regional Metrics
              </span>
              <span className="text-xs font-mono text-cyan-400 font-bold">
                {selectedCountry.code} Node
              </span>
            </div>
            <h3 className="text-xl font-black text-white mt-1 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-indigo-400" />
              {selectedCountry.country}
            </h3>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3 font-mono text-xs">
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Total Regional Posts:</span>
              <span className="font-bold text-white">{selectedCountry.volume}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Net Sentiment Score:</span>
              <span className="font-bold text-emerald-400">{selectedCountry.sentimentScore}/100</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Primary Emotion:</span>
              <span className="font-bold text-indigo-300">{selectedCountry.primaryEmotion}</span>
            </div>
          </div>

          {/* Tri-Bar for Country */}
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase text-slate-400 font-bold">
              Sentiment Distribution
            </span>
            <div className="h-3 w-full rounded-full bg-slate-900 overflow-hidden flex">
              <div
                style={{ width: `${selectedCountry.positive}%` }}
                className="bg-emerald-500 h-full"
                title={`Positive ${selectedCountry.positive}%`}
              />
              <div
                style={{ width: `${selectedCountry.neutral}%` }}
                className="bg-slate-500 h-full"
                title={`Neutral ${selectedCountry.neutral}%`}
              />
              <div
                style={{ width: `${selectedCountry.negative}%` }}
                className="bg-rose-500 h-full"
                title={`Negative ${selectedCountry.negative}%`}
              />
            </div>
            <div className="flex justify-between text-[11px] font-mono text-slate-400">
              <span className="text-emerald-400 font-bold">Pos: {selectedCountry.positive}%</span>
              <span className="text-slate-300">Neu: {selectedCountry.neutral}%</span>
              <span className="text-rose-400 font-bold">Neg: {selectedCountry.negative}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
