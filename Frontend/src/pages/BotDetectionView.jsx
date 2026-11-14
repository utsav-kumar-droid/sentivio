import React, { useState } from 'react';
import {
  Bot,
  ShieldAlert,
  ShieldCheck,
  AlertTriangle,
  RotateCcw,
  UserX,
  UserCheck,
  CheckCircle,
  Binary,
  Layers,
  Search,
  Filter
} from 'lucide-react';
import { BOT_ACCOUNTS_ISOLATION_FOREST } from '../services/mockData';

export default function BotDetectionView() {
  const [accounts, setAccounts] = useState(BOT_ACCOUNTS_ISOLATION_FOREST);
  const [filterStatus, setFilterStatus] = useState('ALL');

  const toggleStatus = (id) => {
    setAccounts(
      accounts.map((acc) => {
        if (acc.id === id) {
          const nextStatus = acc.status === 'Quarantined' ? 'Monitoring' : 'Quarantined';
          return { ...acc, status: nextStatus };
        }
        return acc;
      })
    );
  };

  const filtered = accounts.filter((acc) => {
    if (filterStatus !== 'ALL' && acc.status !== filterStatus) return false;
    return true;
  });

  return (
    <div className="space-y-6 pb-12">
      {/* Header card */}
      <div className="glass-panel rounded-2xl p-6 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Bot className="w-5 h-5 text-amber-400" />
            <h2 className="text-lg font-bold text-white tracking-tight">
              Isolation Forest Anomaly & Bot Shield
            </h2>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Unsupervised tree isolation isolating coordinated sybil networks, spam scripts, and sentiment manipulation
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-emerald-400 bg-emerald-950/40 px-3 py-1 rounded-xl border border-emerald-500/30">
            FPR: 2.1% (High Precision)
          </span>
          <span className="text-xs font-mono text-indigo-400 bg-indigo-950/40 px-3 py-1 rounded-xl border border-indigo-500/30">
            1,423 Bots Quarantined
          </span>
        </div>
      </div>

      {/* Algorithm Formula Card */}
      <div className="glass-panel rounded-2xl p-6 border border-amber-500/20 bg-gradient-to-r from-amber-950/15 via-slate-900/80 to-slate-950 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-amber-400">
            <Binary className="w-4 h-4" />
            <span className="text-xs font-bold font-mono uppercase tracking-wider">
              Mathematical Anomaly Score Formulation
            </span>
          </div>
          <span className="text-[10px] text-slate-500 font-mono">Chapter 4.5.3 (IEEE ICDM)</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
          <div className="p-3 rounded-xl bg-slate-950/90 border border-slate-800 text-center space-y-1">
            <span className="text-[10px] text-slate-500 uppercase">Anomaly Function</span>
            <div className="text-sm font-bold text-amber-300">
              s(x, n) = 2^[ -E(h(x)) / c(n) ]
            </div>
            <p className="text-[10px] text-slate-400">Short path length = High Anomaly</p>
          </div>

          <div className="p-3 rounded-xl bg-slate-950/90 border border-slate-800 text-center space-y-1">
            <span className="text-[10px] text-slate-500 uppercase">Average Tree Path (E(h))</span>
            <div className="text-sm font-bold text-rose-400">
              Bot: ~2.4 | Human: ~6.8
            </div>
            <p className="text-[10px] text-slate-400">Anomalies isolate near root tree</p>
          </div>

          <div className="p-3 rounded-xl bg-slate-950/90 border border-slate-800 text-center space-y-1">
            <span className="text-[10px] text-slate-500 uppercase">Average Subtree Depth c(n)</span>
            <div className="text-sm font-bold text-cyan-400">
              c(n) = 2ln(n-1) + 0.577 - 2(n-1)/n
            </div>
            <p className="text-[10px] text-slate-400">Euler's constant normalized</p>
          </div>
        </div>
      </div>

      {/* Flagged Accounts Table */}
      <div className="glass-panel rounded-2xl border border-slate-800 overflow-hidden">
        <div className="p-4 border-b border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <span className="text-xs font-bold text-white uppercase font-mono tracking-wider">
              Flagged Sybil Accounts & Anomaly Score
            </span>
            <p className="text-[11px] text-slate-400 mt-0.5">
              Filtered accounts are automatically subtracted from public sentiment calculations
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs font-mono">
            {['ALL', 'Quarantined', 'Monitoring'].map((status) => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`px-3 py-1 rounded-lg transition-colors ${
                  filterStatus === status
                    ? 'bg-amber-600 text-white font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-mono">
            <thead className="bg-slate-900/90 text-slate-400 border-b border-slate-800">
              <tr>
                <th className="py-3 px-4">Account Handle</th>
                <th className="py-3 px-4">Account Age</th>
                <th className="py-3 px-4">Post Frequency</th>
                <th className="py-3 px-4">Repost Ratio</th>
                <th className="py-3 px-4">Path Length E(h)</th>
                <th className="py-3 px-4">Anomaly Score</th>
                <th className="py-3 px-4">Reason</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300">
              {filtered.map((acc) => (
                <tr key={acc.id} className="hover:bg-slate-800/40 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-white flex items-center gap-1.5">
                    <UserX className="w-3.5 h-3.5 text-amber-400" />
                    <span>{acc.handle}</span>
                  </td>
                  <td className="py-3.5 px-4 text-slate-400">{acc.accountAgeDays} days</td>
                  <td className="py-3.5 px-4 text-rose-400 font-bold">
                    {acc.postingFrequencyPerHour} / hr
                  </td>
                  <td className="py-3.5 px-4 text-amber-300">
                    {(acc.repostRatio * 100).toFixed(0)}%
                  </td>
                  <td className="py-3.5 px-4 font-bold text-slate-200">{acc.avgPathLength}</td>
                  <td className="py-3.5 px-4">
                    <span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 font-bold border border-rose-500/30">
                      {acc.anomalyScore}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-slate-300 text-[11px] font-sans">
                    {acc.flaggedReason}
                  </td>
                  <td className="py-3.5 px-4">
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        acc.status === 'Quarantined'
                          ? 'bg-rose-500/20 text-rose-400 border border-rose-500/40'
                          : 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
                      }`}
                    >
                      {acc.status}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-right">
                    <button
                      onClick={() => toggleStatus(acc.id)}
                      className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors text-[11px]"
                    >
                      {acc.status === 'Quarantined' ? 'Release' : 'Quarantine'}
                    </button>
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
