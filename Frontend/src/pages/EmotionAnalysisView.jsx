import React, { useState } from 'react';
import {
  Smile,
  Flame,
  Sparkles,
  Frown,
  ShieldAlert,
  HelpCircle,
  Cpu,
  Layers,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import EmotionRadar from '../components/EmotionRadar';
import { EMOTIONS_DISTRIBUTION } from '../services/mockData';

export default function EmotionAnalysisView() {
  const [selectedEmotion, setSelectedEmotion] = useState('Joy');

  const emotionDetails = {
    Joy: {
      desc: "Positive human sentiment, enthusiasm, achievement, product satisfaction",
      topTriggers: ["#AIRevolution", "performance win", "speed improvement", "launch success"],
      samplePost: "The new decentralized AI consensus protocol is ridiculously fast! Completely stunned by the latency benchmarks. Major win for Web3 🚀🔥",
      confidence: "94.2%"
    },
    Anger: {
      desc: "Frustration, system outages, service disruption, grievance expression",
      topTriggers: ["#CloudOutageIncident", "DNS broken", "terrible SLA", "data loss"],
      samplePost: "Our entire production database just suffered a 45-minute outage due to the cloud provider's DNS glitch. Unacceptable reliability for tier-1 enterprise SLA.",
      confidence: "91.8%"
    },
    Surprise: {
      desc: "Unexpected announcements, rapid technological breakthroughs, shock",
      topTriggers: ["quantum leap", "breakthrough", "record surge", "unexpected drop"],
      samplePost: "So apparently our legacy keyword scraper thought 'sick drop' on sneaker release meant viral illness. This is why RoBERTa contextual NLP is mandatory.",
      confidence: "88.5%"
    },
    Sadness: {
      desc: "Disappointment, depreciation, product depreciation, nostalgia",
      topTriggers: ["battery degradation", "feature removed", "unresponsive support"],
      samplePost: "Disappointed by the recent software update. The mobile battery drain is noticeably worse and navigation lags.",
      confidence: "86.1%"
    },
    Fear: {
      desc: "Security vulnerabilities, regulatory crackdown anxieties, financial risk",
      topTriggers: ["deepfake scam", "regulatory ban", "exploit alert", "market panic"],
      samplePost: "Rumors circulating about regulatory clampdowns on synthetic video generation models. Honestly terrified about the chilling effect on open-source innovation.",
      confidence: "89.4%"
    }
  };

  const activeInfo = emotionDetails[selectedEmotion] || emotionDetails.Joy;

  return (
    <div className="space-y-6 pb-12">
      {/* Title & Introduction */}
      <div className="glass-panel rounded-2xl p-6 border border-slate-800">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
            <Smile className="w-5 h-5 text-indigo-400" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-white tracking-tight">
              Fine-Grained Emotion Recognition & Sarcasm Decoder
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Powered by RoBERTa Multi-Head Self-Attention layers trained across 5 distinct psychological emotions
            </p>
          </div>
        </div>
      </div>

      {/* Grid: Emotion Cards & Radar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-5">
          <EmotionRadar emotions={EMOTIONS_DISTRIBUTION} />
        </div>

        {/* Emotion Interactive Inspector (7 cols) */}
        <div className="lg:col-span-7 glass-panel rounded-2xl p-6 border border-slate-800 space-y-5">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold uppercase tracking-wider font-mono text-slate-400">
              Interactive Emotion Deep Dive
            </h3>
            <span className="text-xs text-indigo-400 font-mono">Select emotion below</span>
          </div>

          {/* Emotion Selector Tabs */}
          <div className="grid grid-cols-5 gap-2">
            {EMOTIONS_DISTRIBUTION.map((emo) => (
              <button
                key={emo.name}
                onClick={() => setSelectedEmotion(emo.name)}
                className={`p-2.5 rounded-xl text-center border transition-all ${
                  selectedEmotion === emo.name
                    ? 'border-indigo-500 bg-indigo-950/60 text-white shadow-md'
                    : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:text-white'
                }`}
              >
                <div className="text-xs font-bold" style={{ color: emo.color }}>{emo.name}</div>
                <div className="text-[10px] text-slate-400 font-mono mt-0.5">{emo.percentage}%</div>
              </button>
            ))}
          </div>

          {/* Details Card */}
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3 font-mono text-xs">
            <div>
              <span className="text-[10px] text-slate-500 uppercase font-bold">Psychological Definition</span>
              <p className="text-slate-200 mt-0.5">{activeInfo.desc}</p>
            </div>

            <div>
              <span className="text-[10px] text-slate-500 uppercase font-bold">Top Lexical Triggers</span>
              <div className="flex flex-wrap gap-1.5 mt-1">
                {activeInfo.topTriggers.map((trig, idx) => (
                  <span key={idx} className="px-2 py-0.5 rounded bg-slate-800 text-indigo-300 text-[11px]">
                    {trig}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-2 border-t border-slate-800">
              <span className="text-[10px] text-slate-500 uppercase font-bold">Representative Post Sample</span>
              <p className="text-slate-300 italic mt-1 font-sans text-xs bg-slate-950/60 p-2.5 rounded-lg border border-slate-850">
                "{activeInfo.samplePost}"
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* RoBERTa Transformer Mathematical Architecture Card (Directly from Synopsis Eq 4.2) */}
      <div className="glass-panel rounded-2xl p-6 border border-slate-800 space-y-4">
        <div className="flex items-center gap-2">
          <Cpu className="w-4 h-4 text-cyan-400" />
          <h3 className="text-sm font-bold text-white tracking-wide font-mono uppercase">
            Transformer Self-Attention Formulation (RoBERTa vs VADER)
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
          <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-2">
            <span className="text-[10px] font-mono font-bold text-rose-400 uppercase">
              Baseline: VADER Heuristic Equation
            </span>
            <div className="p-2.5 rounded bg-slate-950 border border-slate-800 font-mono text-cyan-300 text-center">
              S_doc = ∑ (s_wi × modifiers)
            </div>
            <p className="text-slate-400 text-[11px] leading-relaxed">
              VADER relies on static word dictionaries and manual modifier rules. It completely fails on complex sarcasm, slang, double-negatives, and fine-grained psychological emotions.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-indigo-950/20 border border-indigo-800/40 space-y-2">
            <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase">
              Proposed: Transformer Self-Attention Layer
            </span>
            <div className="p-2.5 rounded bg-slate-950 border border-slate-800 font-mono text-cyan-300 text-center">
              Attention(Q, K, V) = Softmax( (Q · K^T) / √d_k ) · V
            </div>
            <p className="text-slate-300 text-[11px] leading-relaxed">
              Bi-directional attention attends to preceding and subsequent tokens simultaneously, extracting contextual meaning, sarcasm polarity shifts, and subtle emotional cues.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
