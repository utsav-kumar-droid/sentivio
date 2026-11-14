import React, { useState } from 'react';
import {
  Video,
  ShieldAlert,
  ShieldCheck,
  UploadCloud,
  FileCheck2,
  AlertTriangle,
  Play,
  Eye,
  CheckCircle2,
  Scan,
  Cpu
} from 'lucide-react';
import { SYNTHETIC_MEDIA_RECORDS } from '../services/mockData';

export default function SyntheticMediaView() {
  const [records, setRecords] = useState(SYNTHETIC_MEDIA_RECORDS);
  const [selectedRecord, setSelectedRecord] = useState(SYNTHETIC_MEDIA_RECORDS[0]);
  const [isScanning, setIsScanning] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');

  const handleScanSimulation = (e) => {
    e.preventDefault();
    if (!videoUrl.trim()) return;

    setIsScanning(true);
    setTimeout(() => {
      const newRec = {
        id: `vid-${Date.now()}`,
        title: "User Uploaded Stream Video",
        sourcePlatform: "Direct Feed",
        uploader: "@scanned_input",
        deepfakeScore: 89.2,
        verdict: "DEEPFAKE DETECTED",
        confidence: "High (0.91)",
        fpsAnalyzed: 600,
        metrics: {
          facialArtifacts: 88,
          spectralInconsistency: 84,
          eyeBlinkAnomaly: 91,
          audioVisualSyncError: 86
        },
        flaggedTimestamp: "00:04 - 00:19 (Lip sync temporal misalignment)",
        thumbnail: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80"
      };

      setRecords([newRec, ...records]);
      setSelectedRecord(newRec);
      setIsScanning(false);
      setVideoUrl('');
    }, 1200);
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="glass-panel rounded-2xl p-6 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Video className="w-5 h-5 text-indigo-400" />
            <h2 className="text-lg font-bold text-white tracking-tight">
              Synthetic Media & AI Deepfake Video Verification
            </h2>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Frame-by-frame computer vision forensic analysis to isolate AI-generated video clips skewing public opinion
          </p>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs">
          <span className="px-3 py-1 rounded-xl bg-rose-500/10 text-rose-400 border border-rose-500/20">
            89 Deepfakes Isolated
          </span>
          <span className="px-3 py-1 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            CV Model: Active
          </span>
        </div>
      </div>

      {/* Upload & Scanner Form */}
      <div className="glass-panel rounded-2xl p-6 border border-indigo-500/20 bg-gradient-to-r from-indigo-950/20 via-slate-900/80 to-slate-950 space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-white font-mono uppercase tracking-wider flex items-center gap-1.5">
            <Scan className="w-4 h-4 text-cyan-400" />
            Submit Social Video URL or Upload MP4 / WebM
          </span>
          <span className="text-[10px] text-slate-400 font-mono">Max 250MB • 60 FPS Scan</span>
        </div>

        <form onSubmit={handleScanSimulation} className="flex flex-col sm:flex-row items-center gap-3">
          <input
            type="text"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            placeholder="Paste viral tweet video link (e.g., https://x.com/status/video/1892...)"
            className="flex-1 w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 font-mono"
          />
          <button
            type="submit"
            disabled={isScanning || !videoUrl.trim()}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all disabled:opacity-50 shadow-md shadow-indigo-600/30 font-mono"
          >
            <Scan className="w-4 h-4" />
            <span>{isScanning ? "Scanning Frame Artifacts..." : "Run Forensic Scan"}</span>
          </button>
        </form>
      </div>

      {/* Main Inspection Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Selected Video Forensics (7 cols) */}
        {selectedRecord && (
          <div className="lg:col-span-7 glass-panel rounded-2xl p-6 border border-slate-800 space-y-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-[10px] font-mono text-slate-500 uppercase">Selected Inspection</span>
                <h3 className="text-base font-bold text-white mt-0.5">{selectedRecord.title}</h3>
                <p className="text-xs text-slate-400 font-mono mt-0.5">
                  Uploaded by {selectedRecord.uploader} • {selectedRecord.sourcePlatform}
                </p>
              </div>

              <span
                className={`text-xs px-3 py-1 rounded-xl font-mono font-bold flex items-center gap-1.5 ${
                  selectedRecord.deepfakeScore > 50
                    ? 'bg-rose-500/20 text-rose-400 border border-rose-500/40'
                    : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                }`}
              >
                {selectedRecord.deepfakeScore > 50 ? (
                  <ShieldAlert className="w-4 h-4 text-rose-400" />
                ) : (
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                )}
                {selectedRecord.verdict}
              </span>
            </div>

            {/* Video preview mock */}
            <div className="relative rounded-xl overflow-hidden aspect-video bg-slate-950 border border-slate-800 flex items-center justify-center group">
              <img
                src={selectedRecord.thumbnail}
                alt={selectedRecord.title}
                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              <div className="absolute p-3 rounded-full bg-indigo-600/80 text-white shadow-xl cursor-pointer hover:scale-110 transition-transform">
                <Play className="w-6 h-6 ml-0.5" />
              </div>

              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-slate-300">
                <span>FPS Analyzed: {selectedRecord.fpsAnalyzed}</span>
                <span className="text-rose-400 font-bold">{selectedRecord.flaggedTimestamp}</span>
              </div>
            </div>

            {/* Forensic Metrics Bars */}
            <div className="space-y-3 pt-2">
              <span className="text-[10px] font-mono uppercase text-slate-400 font-bold">
                Computer Vision Artifact Metrics
              </span>

              <div className="space-y-2 text-xs font-mono">
                <div>
                  <div className="flex justify-between text-slate-300 mb-1">
                    <span>Facial Boundary Warp Distortion</span>
                    <span className="font-bold text-rose-400">{selectedRecord.metrics.facialArtifacts}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-900 overflow-hidden">
                    <div
                      className="h-full bg-rose-500 rounded-full"
                      style={{ width: `${selectedRecord.metrics.facialArtifacts}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-slate-300 mb-1">
                    <span>Spectral Frequency Inconsistency</span>
                    <span className="font-bold text-amber-400">{selectedRecord.metrics.spectralInconsistency}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-900 overflow-hidden">
                    <div
                      className="h-full bg-amber-500 rounded-full"
                      style={{ width: `${selectedRecord.metrics.spectralInconsistency}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-slate-300 mb-1">
                    <span>Eye Blink Biological Rhythm Anomaly</span>
                    <span className="font-bold text-indigo-400">{selectedRecord.metrics.eyeBlinkAnomaly}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-900 overflow-hidden">
                    <div
                      className="h-full bg-indigo-500 rounded-full"
                      style={{ width: `${selectedRecord.metrics.eyeBlinkAnomaly}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Video Scanned Library List (5 cols) */}
        <div className="lg:col-span-5 glass-panel rounded-2xl p-6 border border-slate-800 space-y-4">
          <span className="text-xs font-bold text-white uppercase font-mono tracking-wider">
            Recent Scanned Feeds
          </span>

          <div className="space-y-3">
            {records.map((rec) => (
              <div
                key={rec.id}
                onClick={() => setSelectedRecord(rec)}
                className={`p-3 rounded-xl border cursor-pointer transition-all ${
                  selectedRecord.id === rec.id
                    ? 'border-indigo-500 bg-indigo-950/40 shadow-md'
                    : 'border-slate-800 bg-slate-900/60 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center gap-3">
                  <img
                    src={rec.thumbnail}
                    alt={rec.title}
                    className="w-16 h-12 rounded-lg object-cover border border-slate-700 flex-shrink-0"
                  />
                  <div className="min-w-0 flex-1">
                    <h4 className="text-xs font-bold text-white truncate">{rec.title}</h4>
                    <p className="text-[10px] text-slate-400 font-mono mt-0.5">{rec.uploader}</p>
                    <div className="flex items-center gap-2 mt-1.5">
                      <span
                        className={`text-[9px] px-1.5 py-0.2 rounded font-mono font-bold ${
                          rec.deepfakeScore > 50
                            ? 'bg-rose-500/20 text-rose-400'
                            : 'bg-emerald-500/20 text-emerald-400'
                        }`}
                      >
                        Deepfake: {rec.deepfakeScore}%
                      </span>
                      <span className="text-[10px] text-slate-500 font-mono">{rec.sourcePlatform}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
