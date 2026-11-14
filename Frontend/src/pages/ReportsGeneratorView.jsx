import React, { useState } from 'react';
import {
  FileText,
  Download,
  Calendar,
  CheckSquare,
  FileCheck,
  Printer,
  Sparkles,
  Share2
} from 'lucide-react';
import { INITIAL_STATS } from '../services/mockData';

export default function ReportsGeneratorView() {
  const [reportType, setReportType] = useState('Executive Summary');
  const [timeRange, setTimeRange] = useState('Last 24 Hours');
  const [format, setFormat] = useState('PDF');
  const [isExporting, setIsExporting] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownload = () => {
    setIsExporting(true);
    setTimeout(() => {
      setIsExporting(false);
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 3000);
    }, 1000);
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="glass-panel rounded-2xl p-6 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-indigo-400" />
            <h2 className="text-lg font-bold text-white tracking-tight">
              Executive Intelligence & Audit Reports
            </h2>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Generate publication-grade PDF, CSV, and JSON audit documents for corporate leadership and academic submission
          </p>
        </div>

        <button
          onClick={handleDownload}
          disabled={isExporting}
          className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center gap-2 font-mono transition-all shadow-md shadow-indigo-600/30"
        >
          <Download className="w-4 h-4" />
          <span>{isExporting ? "Compiling Document..." : `Export ${format} Report`}</span>
        </button>
      </div>

      {downloadSuccess && (
        <div className="p-3.5 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 font-mono text-xs flex items-center gap-2">
          <FileCheck className="w-4 h-4 text-emerald-400" />
          <span>Report successfully compiled and ready for download ({reportType}_{timeRange.replace(/\s+/g, '_')}.{format.toLowerCase()})</span>
        </div>
      )}

      {/* Grid: Parameters Form (4 cols) & Live Document Preview (8 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Config Form (4 cols) */}
        <div className="lg:col-span-4 glass-panel rounded-2xl p-6 border border-slate-800 space-y-4">
          <span className="text-xs font-bold text-white uppercase font-mono tracking-wider">
            Report Parameters
          </span>

          <div className="space-y-3 font-mono text-xs">
            <div>
              <label className="text-slate-400 block mb-1">Report Archetype</label>
              <select
                value={reportType}
                onChange={(e) => setReportType(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-white text-xs"
              >
                <option>Executive Summary</option>
                <option>Crisis Incident Post-Mortem</option>
                <option>Bot Anomaly Audit (Isolation Forest)</option>
                <option>Deepfake Media Forensic Log</option>
              </select>
            </div>

            <div>
              <label className="text-slate-400 block mb-1">Temporal Window</label>
              <select
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-white text-xs"
              >
                <option>Last 24 Hours</option>
                <option>Last 7 Days</option>
                <option>Monthly Rollup (July 2026)</option>
              </select>
            </div>

            <div>
              <label className="text-slate-400 block mb-1">Export Format</label>
              <div className="grid grid-cols-3 gap-2">
                {['PDF', 'CSV', 'JSON'].map((fmt) => (
                  <button
                    key={fmt}
                    type="button"
                    onClick={() => setFormat(fmt)}
                    className={`py-2 rounded-xl border text-center transition-all ${
                      format === fmt
                        ? 'border-indigo-500 bg-indigo-600 text-white font-bold'
                        : 'border-slate-800 bg-slate-900 text-slate-400 hover:text-white'
                    }`}
                  >
                    {fmt}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Live Document Preview (8 cols) */}
        <div className="lg:col-span-8 glass-panel rounded-2xl p-8 border border-slate-800 space-y-6 bg-slate-950/80">
          {/* Header of Report */}
          <div className="border-b border-slate-800 pb-4 flex items-center justify-between">
            <div>
              <div className="text-[10px] font-mono text-indigo-400 font-bold uppercase">
                Official Intelligence Report
              </div>
              <h3 className="text-lg font-bold text-white mt-0.5">
                SENTIVIO AUDIT: {reportType.toUpperCase()}
              </h3>
              <p className="text-xs text-slate-500 font-mono mt-0.5">
                Generated: 29 July 2026 • SATI Vidisha (CSE Blockchain) • Ref: BC2026TID03
              </p>
            </div>
            <div className="text-right font-mono text-xs text-slate-400">
              <div>Timeframe: {timeRange}</div>
              <div className="text-emerald-400 font-bold">Status: Verified</div>
            </div>
          </div>

          {/* Report Summary Paragraph */}
          <div className="text-xs text-slate-300 leading-relaxed font-sans space-y-2">
            <p>
              This document synthesizes real-time NLP classification, anomaly isolation, and multi-modal media authenticity logs aggregated by the Sentivio platform across <strong>{INITIAL_STATS.totalProcessed.toLocaleString()}</strong> social posts.
            </p>
            <p>
              The RoBERTa transformer engine maintained an inference latency of <strong>{INITIAL_STATS.avgInferenceLatency}ms</strong> with a macro accuracy of <strong>{INITIAL_STATS.robertaAccuracy}%</strong>. Meanwhile, the Isolation Forest module quarantined <strong>{INITIAL_STATS.botQuarantineCount.toLocaleString()}</strong> automated bot accounts at a false positive rate of <strong>{INITIAL_STATS.isolationForestFPR}%</strong>.
            </p>
          </div>

          {/* Quick Metrics Table inside Report */}
          <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-center font-mono">
            <div>
              <span className="text-[10px] text-slate-500 uppercase">Positive Sentiment</span>
              <div className="text-sm font-bold text-emerald-400">{INITIAL_STATS.positivePercent}%</div>
            </div>
            <div>
              <span className="text-[10px] text-slate-500 uppercase">Negative Sentiment</span>
              <div className="text-sm font-bold text-rose-400">{INITIAL_STATS.negativePercent}%</div>
            </div>
            <div>
              <span className="text-[10px] text-slate-500 uppercase">Net Sentiment Score</span>
              <div className="text-sm font-bold text-indigo-300">{INITIAL_STATS.netSentimentScore}</div>
            </div>
          </div>

          {/* Signature / Validation Footer */}
          <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-500">
            <span>Guide: Prof. Sheena Kumar</span>
            <span>HOD: Dr. Kanak Saxena</span>
            <span>Team ID: BC2026TID03</span>
          </div>
        </div>
      </div>
    </div>
  );
}
