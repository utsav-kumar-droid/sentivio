import React, { useState } from 'react';
import {
  Bell,
  AlertTriangle,
  CheckCircle2,
  Plus,
  Sliders,
  ShieldAlert,
  Clock,
  Radio,
  Trash2
} from 'lucide-react';
import { SYSTEM_ALERTS } from '../services/mockData';

export default function AlertsCenterView() {
  const [alerts, setAlerts] = useState(SYSTEM_ALERTS);
  const [metric, setMetric] = useState('Negative Sentiment Surge');
  const [threshold, setThreshold] = useState('65%');
  const [windowTime, setWindowTime] = useState('15 minutes');
  const [showConfigSuccess, setShowConfigSuccess] = useState(false);

  const handleCreateRule = (e) => {
    e.preventDefault();
    setShowConfigSuccess(true);
    setTimeout(() => setShowConfigSuccess(false), 3000);
  };

  const dismissAlert = (id) => {
    setAlerts(alerts.filter((a) => a.id !== id));
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="glass-panel rounded-2xl p-6 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Bell className="w-5 h-5 text-rose-400" />
            <h2 className="text-lg font-bold text-white tracking-tight">
              Crisis Alert Center & Automated Threshold Triggers
            </h2>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Real-time automated incident detection monitoring sudden sentiment deviations and viral PR crises
          </p>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs">
          <span className="px-3 py-1 rounded-xl bg-rose-500/10 text-rose-400 border border-rose-500/20 font-bold">
            {alerts.length} Active Incidents
          </span>
        </div>
      </div>

      {/* Grid: Alert Rule Config (5 cols) & Live Alerts Stream (7 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Configure New Alert Rule */}
        <div className="lg:col-span-5 glass-panel rounded-2xl p-6 border border-slate-800 space-y-4">
          <div className="flex items-center gap-2">
            <Sliders className="w-4 h-4 text-indigo-400" />
            <h3 className="text-xs font-bold uppercase tracking-wider font-mono text-white">
              Configure Crisis Threshold Rule
            </h3>
          </div>

          <form onSubmit={handleCreateRule} className="space-y-4 text-xs font-mono">
            <div>
              <label className="text-slate-400 block mb-1">Target Monitoring Metric</label>
              <select
                value={metric}
                onChange={(e) => setMetric(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-white text-xs focus:outline-none focus:border-indigo-500"
              >
                <option>Negative Sentiment Surge</option>
                <option>Bot Velocity Astroturfing</option>
                <option>Deepfake Media Detection Ratio</option>
                <option>Viral Volume Spike (&gt;5x baseline)</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-slate-400 block mb-1">Trigger Threshold</label>
                <input
                  type="text"
                  value={threshold}
                  onChange={(e) => setThreshold(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-white text-xs focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="text-slate-400 block mb-1">Sliding Window</label>
                <select
                  value={windowTime}
                  onChange={(e) => setWindowTime(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-white text-xs focus:outline-none focus:border-indigo-500"
                >
                  <option>5 minutes</option>
                  <option>15 minutes</option>
                  <option>1 hour</option>
                  <option>24 hours</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold flex items-center justify-center gap-2 transition-all shadow-md shadow-indigo-600/25"
            >
              <Plus className="w-4 h-4" />
              <span>Deploy Dynamic Rule</span>
            </button>

            {showConfigSuccess && (
              <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 flex items-center gap-2 text-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Alert rule successfully linked to WebSocket event loop!</span>
              </div>
            )}
          </form>
        </div>

        {/* Active Incident List */}
        <div className="lg:col-span-7 glass-panel rounded-2xl p-6 border border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-white uppercase font-mono tracking-wider">
              Active Triggered Incidents
            </span>
            <span className="text-[10px] text-slate-500 font-mono">Real-time Stream Engine</span>
          </div>

          <div className="space-y-3">
            {alerts.length === 0 ? (
              <div className="p-8 text-center text-slate-500 font-mono text-xs">
                All clear! No active crisis anomalies detected.
              </div>
            ) : (
              alerts.map((al) => (
                <div
                  key={al.id}
                  className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2 hover:border-slate-700 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-[9px] px-2 py-0.5 rounded font-mono font-bold ${
                          al.severity === 'CRITICAL'
                            ? 'bg-rose-500/20 text-rose-400 border border-rose-500/40'
                            : al.severity === 'WARNING'
                            ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
                            : 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/40'
                        }`}
                      >
                        {al.severity}
                      </span>
                      <span className="text-xs font-bold text-white font-mono">{al.topic}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-[10px] text-slate-500 font-mono flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {al.timestamp}
                      </span>
                      <button
                        onClick={() => dismissAlert(al.id)}
                        className="text-slate-500 hover:text-slate-300 p-1"
                        title="Dismiss Alert"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <h4 className="text-xs font-bold text-slate-200">{al.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">{al.detail}</p>

                  <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono">
                    <span className="text-slate-400">
                      Action Taken: <strong className="text-indigo-300">{al.actionRequired}</strong>
                    </span>
                    <span className="text-emerald-400 font-semibold">{al.status}</span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
