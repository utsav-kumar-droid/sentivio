import React, { useState } from 'react';
import {
  Activity,
  Play,
  Pause,
  Filter,
  Send,
  Sparkles,
  Bot,
  UserCheck,
  CheckCircle2,
  AlertTriangle,
  RotateCcw,
  Cpu,
  Layers,
  Heart,
  Repeat,
  MapPin,
  Clock
} from 'lucide-react';

export default function LiveStreamView({
  tweets,
  isStreaming,
  setIsStreaming,
  onAnalyzeCustomText
}) {
  const [filterSentiment, setFilterSentiment] = useState('ALL');
  const [filterBot, setFilterBot] = useState('ALL'); // ALL, HUMANS, BOTS
  const [customInput, setCustomInput] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);

  const filteredTweets = tweets.filter((t) => {
    if (filterSentiment !== 'ALL' && t.sentiment !== filterSentiment) return false;
    if (filterBot === 'HUMANS' && t.isBot) return false;
    if (filterBot === 'BOTS' && !t.isBot) return false;
    return true;
  });

  const handleTestInference = (e) => {
    e.preventDefault();
    if (!customInput.trim()) return;

    setIsAnalyzing(true);
    // Simulate real-time RoBERTa + Isolation Forest inference (45ms + slight UI grace)
    setTimeout(() => {
      const lower = customInput.toLowerCase();
      let sentiment = 'NEUTRAL';
      let emotion = 'Surprise';
      let confidence = 0.91;
      let isBot = false;
      let botScore = 0.08;

      if (lower.includes('great') || lower.includes('awesome') || lower.includes('win') || lower.includes('love') || lower.includes('fast') || lower.includes('revolution')) {
        sentiment = 'POSITIVE';
        emotion = 'Joy';
        confidence = 0.96;
      } else if (lower.includes('terrible') || lower.includes('outage') || lower.includes('hate') || lower.includes('worst') || lower.includes('fail') || lower.includes('broken')) {
        sentiment = 'NEGATIVE';
        emotion = 'Anger';
        confidence = 0.94;
      } else if (lower.includes('fear') || lower.includes('danger') || lower.includes('crash') || lower.includes('worry')) {
        sentiment = 'NEGATIVE';
        emotion = 'Fear';
        confidence = 0.89;
      }

      if (lower.includes('airdrop') || lower.includes('giveaway') || lower.includes('free money') || lower.includes('click link')) {
        isBot = true;
        botScore = 0.93;
      }

      const result = {
        text: customInput,
        sentiment,
        confidence,
        emotion,
        isBot,
        botScore,
        latency: 44.8,
        tokensBPE: customInput.split(' ').length * 2,
        pathLength: isBot ? 2.3 : 6.9,
        attentionHeadsActive: 12
      };

      setAnalysisResult(result);
      setIsAnalyzing(false);
    }, 450);
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Top Banner & Control Bar */}
      <div className="glass-panel rounded-2xl p-4 border border-slate-800 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
            <Activity className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-white tracking-wide">
              Real-Time WebSocket Stream Engine
            </h2>
            <p className="text-xs text-slate-400">
              Bi-directional duplex pipeline streaming directly to React virtual DOM
            </p>
          </div>
        </div>

        {/* Stream Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsStreaming(!isStreaming)}
            className={`px-3 py-1.5 rounded-xl text-xs font-mono font-semibold flex items-center gap-1.5 border transition-all ${
              isStreaming
                ? 'bg-rose-950/40 text-rose-400 border-rose-500/40 hover:bg-rose-900/40'
                : 'bg-emerald-950/40 text-emerald-400 border-emerald-500/40 hover:bg-emerald-900/40'
            }`}
          >
            {isStreaming ? (
              <>
                <Pause className="w-3.5 h-3.5" />
                <span>Pause Feed</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5" />
                <span>Resume Feed</span>
              </>
            )}
          </button>

          {/* Sentiment Filter Pills */}
          <div className="flex items-center bg-slate-900/80 p-1 rounded-xl border border-slate-800 text-xs font-mono">
            {['ALL', 'POSITIVE', 'NEGATIVE', 'NEUTRAL'].map((mode) => (
              <button
                key={mode}
                onClick={() => setFilterSentiment(mode)}
                className={`px-2.5 py-1 rounded-lg transition-colors ${
                  filterSentiment === mode
                    ? 'bg-indigo-600 text-white font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {mode}
              </button>
            ))}
          </div>

          {/* Bot Filter */}
          <div className="flex items-center bg-slate-900/80 p-1 rounded-xl border border-slate-800 text-xs font-mono">
            {[
              { id: 'ALL', label: 'All Accounts' },
              { id: 'HUMANS', label: 'Humans Only' },
              { id: 'BOTS', label: 'Bots Only' }
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setFilterBot(f.id)}
                className={`px-2 py-1 rounded-lg transition-colors ${
                  filterBot === f.id
                    ? 'bg-slate-700 text-white font-semibold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Inference Workbench (Test any custom text/tweet!) */}
      <div className="glass-panel rounded-2xl p-6 border border-indigo-500/30 bg-gradient-to-br from-indigo-950/20 via-slate-900/80 to-slate-950">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Cpu className="w-4 h-4 text-indigo-400" />
            <h3 className="text-sm font-bold text-white tracking-wide font-mono uppercase">
              Interactive RoBERTa & Isolation Forest Inference Lab
            </h3>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
            Byte-Pair Encoding (BPE)
          </span>
        </div>

        <form onSubmit={handleTestInference} className="space-y-3">
          <div className="relative">
            <textarea
              rows="2"
              value={customInput}
              onChange={(e) => setCustomInput(e.target.value)}
              placeholder="Paste or type any social post, sarcastic comment, or promotional link to test the live NLP & Bot classifier..."
              className="w-full bg-slate-900/90 border border-slate-700/80 rounded-xl p-3.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 font-sans"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-[11px] text-slate-400 font-mono">
              <span>Quick tests:</span>
              <button
                type="button"
                onClick={() => setCustomInput("Oh wonderful, the flight was delayed by 6 hours without any explanation. Stellar service!")}
                className="hover:text-indigo-300 underline"
              >
                Sarcasm test
              </button>
              <span>•</span>
              <button
                type="button"
                onClick={() => setCustomInput("CLAIM 50000 TOKEN AIRDROP NOW!! CLICK HERE FAST bit.ly/free-coins")}
                className="hover:text-amber-300 underline"
              >
                Bot spam test
              </button>
            </div>

            <button
              type="submit"
              disabled={isAnalyzing || !customInput.trim()}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white text-xs font-semibold flex items-center gap-2 disabled:opacity-50 transition-all shadow-md shadow-indigo-600/25"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isAnalyzing ? "Computing Attention..." : "Execute Inference"}</span>
            </button>
          </div>
        </form>

        {/* Live Analysis Output Inspector */}
        {analysisResult && (
          <div className="mt-4 p-4 rounded-xl bg-slate-950/80 border border-indigo-500/30 grid grid-cols-2 sm:grid-cols-4 gap-4 animate-in fade-in duration-300">
            <div className="space-y-1">
              <span className="text-[10px] text-slate-400 font-mono uppercase">Sentiment Polarity</span>
              <div className="flex items-center gap-1.5">
                <span
                  className={`text-xs font-bold px-2 py-0.5 rounded font-mono ${
                    analysisResult.sentiment === 'POSITIVE'
                      ? 'bg-emerald-500/20 text-emerald-400'
                      : analysisResult.sentiment === 'NEGATIVE'
                      ? 'bg-rose-500/20 text-rose-400'
                      : 'bg-slate-700 text-slate-300'
                  }`}
                >
                  {analysisResult.sentiment}
                </span>
                <span className="text-xs text-slate-300 font-mono">
                  {(analysisResult.confidence * 100).toFixed(1)}%
                </span>
              </div>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] text-slate-400 font-mono uppercase">Emotion Category</span>
              <div className="text-xs font-bold text-indigo-300 font-mono">
                {analysisResult.emotion}
              </div>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] text-slate-400 font-mono uppercase">Anomaly (Bot Status)</span>
              <div className="flex items-center gap-1.5 text-xs font-mono font-bold">
                {analysisResult.isBot ? (
                  <span className="text-rose-400">Flagged Bot (Path: {analysisResult.pathLength})</span>
                ) : (
                  <span className="text-emerald-400">Authentic User</span>
                )}
              </div>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] text-slate-400 font-mono uppercase">Telemetry Speed</span>
              <div className="text-xs font-mono text-cyan-400 font-bold">
                {analysisResult.latency} ms • {analysisResult.tokensBPE} tokens
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Live Stream Stream Cards */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs text-slate-400 font-mono px-1">
          <span>Showing {filteredTweets.length} streamed items</span>
          <span>Buffer Limit: 100 posts (Auto-pruning)</span>
        </div>

        <div className="space-y-3">
          {filteredTweets.map((t) => (
            <div
              key={t.id}
              className={`p-4 rounded-2xl glass-panel border transition-all hover:border-slate-700 ${
                t.isBot ? 'border-amber-900/40 bg-amber-950/10' : 'border-slate-800'
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <img
                    src={t.avatar}
                    alt={t.author}
                    className="w-10 h-10 rounded-full object-cover border border-slate-700 flex-shrink-0"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-white">{t.author}</span>
                      <span className="text-[11px] text-slate-500 font-mono">{t.handle}</span>
                      <span className="text-[10px] text-slate-600 font-mono">• {t.timestamp}</span>
                      {t.location && (
                        <span className="text-[10px] text-slate-500 font-mono flex items-center gap-1 hidden sm:flex">
                          <MapPin className="w-3 h-3 text-slate-600" />
                          {t.location}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-200 mt-1.5 leading-relaxed font-sans">
                      {t.text}
                    </p>
                    {t.anomalyReason && (
                      <div className="mt-2 p-2 rounded-lg bg-amber-950/40 border border-amber-800/40 text-[11px] text-amber-300 font-mono flex items-center gap-1.5">
                        <AlertTriangle className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                        <span>{t.anomalyReason}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Badges on right */}
                <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
                  <span
                    className={`text-[9px] px-2 py-0.5 rounded-full font-mono font-bold ${
                      t.sentiment === 'POSITIVE'
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                        : t.sentiment === 'NEGATIVE'
                        ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
                        : 'bg-slate-800 text-slate-300 border border-slate-700'
                    }`}
                  >
                    {t.sentiment} ({(t.confidence * 100).toFixed(0)}%)
                  </span>

                  <span className="text-[10px] font-mono text-indigo-300 bg-indigo-950/40 px-2 py-0.5 rounded border border-indigo-900/40">
                    {t.emotion}
                  </span>

                  {t.isBot ? (
                    <span className="text-[9px] font-mono text-amber-400 font-bold bg-amber-950/40 px-1.5 py-0.5 rounded border border-amber-800/40 flex items-center gap-1">
                      <Bot className="w-3 h-3" />
                      BOT
                    </span>
                  ) : (
                    <span className="text-[9px] font-mono text-emerald-400 bg-emerald-950/30 px-1.5 py-0.5 rounded border border-emerald-800/30 flex items-center gap-1">
                      <UserCheck className="w-3 h-3" />
                      HUMAN
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
