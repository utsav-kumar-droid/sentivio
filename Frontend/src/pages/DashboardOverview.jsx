import React, { useState } from 'react';
import {
  Activity,
  Bot,
  TrendingUp,
  Clock,
  ShieldCheck,
  AlertTriangle,
  Radio,
  Sparkles,
  ArrowRight,
  Flame,
  Globe,
  Share2,
  HelpCircle,
  CheckCircle2,
  Send,
  Zap,
  Info
} from 'lucide-react';
import KPIStatsCard from '../components/KPIStatsCard';
import SentimentGauge from '../components/SentimentGauge';
import EmotionRadar from '../components/EmotionRadar';
import {
  INITIAL_STATS,
  HOURLY_SENTIMENT_TRENDS,
  TRENDING_TOPICS,
  EMOTIONS_DISTRIBUTION
} from '../services/mockData';

export default function DashboardOverview({
  tweets,
  onNavigateTab,
  userRole,
  isStreaming
}) {
  // Quick instant tester directly on the dashboard
  const [testText, setTestText] = useState('');
  const [testResult, setTestResult] = useState(null);
  const [isTesting, setIsTesting] = useState(false);
  const [showHowItWorks, setShowHowItWorks] = useState(true);

  const samplePresets = [
    { label: "Positive Sentiment", text: "The new platform release is unbelievably smooth and lightning fast! Loving this." },
    { label: "Outage / Negative", text: "Another database outage right during our peak client demo. Totally unacceptable!" },
    { label: "Spam Bot Link", text: "CLAIM 10000 FREE AIRDROP TOKEN BONUS CLICK FAST bit.ly/free-money" }
  ];

  const handleQuickAnalyze = (inputPhrase) => {
    const textToAnalyze = inputPhrase || testText;
    if (!textToAnalyze.trim()) return;

    setIsTesting(true);
    setTestText(textToAnalyze);

    setTimeout(() => {
      const lower = textToAnalyze.toLowerCase();
      let sentiment = 'NEUTRAL';
      let emotion = 'Surprise';
      let confidence = 0.92;
      let isBot = false;
      let explanation = "Balanced tone with objective information.";

      if (lower.includes('smooth') || lower.includes('love') || lower.includes('fast') || lower.includes('great') || lower.includes('win')) {
        sentiment = 'POSITIVE';
        emotion = 'Joy';
        confidence = 0.97;
        explanation = "RoBERTa detected authentic human appreciation and positive sentiment markers.";
      } else if (lower.includes('outage') || lower.includes('unacceptable') || lower.includes('bad') || lower.includes('fail') || lower.includes('hate')) {
        sentiment = 'NEGATIVE';
        emotion = 'Anger';
        confidence = 0.95;
        explanation = "Contextual attention recognized operational dissatisfaction and strong grievance tone.";
      }

      if (lower.includes('airdrop') || lower.includes('claim') || lower.includes('bit.ly') || lower.includes('free money')) {
        isBot = true;
        explanation = "Isolation Forest flagged promotional repetition pattern typical of automated spam networks.";
      }

      setTestResult({
        text: textToAnalyze,
        sentiment,
        emotion,
        confidence,
        isBot,
        explanation
      });
      setIsTesting(false);
    }, 350);
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Friendly Quick-Start / How It Works Bar */}
      {showHowItWorks && (
        <div className="glass-panel rounded-2xl p-5 border border-indigo-500/30 bg-gradient-to-r from-indigo-950/40 via-slate-900/90 to-cyan-950/30 relative">
          <button
            onClick={() => setShowHowItWorks(false)}
            className="absolute top-3 right-3 text-slate-500 hover:text-slate-300 text-xs font-mono"
            title="Dismiss guide"
          >
            ✕ Close guide
          </button>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="p-1.5 rounded-lg bg-indigo-500/20 text-indigo-400">
                  <Sparkles className="w-4 h-4" />
                </span>
                <h3 className="text-sm font-bold text-white tracking-wide">
                  Welcome to Sentivio — Simple 3-Step Social Intelligence
                </h3>
              </div>
              <p className="text-xs text-slate-400 mt-1 max-w-2xl">
                We turn chaotic social buzz into real, trusted insights by filtering spam bots and analyzing human emotion.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono">
              <button
                onClick={() => onNavigateTab('live-stream')}
                className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors flex items-center gap-1.5"
              >
                <Activity className="w-3.5 h-3.5 text-emerald-400" />
                <span>1. Watch Live Feed</span>
              </button>
              <button
                onClick={() => onNavigateTab('ai-assistant')}
                className="px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white transition-colors flex items-center gap-1.5 shadow-md shadow-indigo-600/30"
              >
                <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
                <span>2. Ask AI Copilot</span>
              </button>
            </div>
          </div>

          {/* 3 Step Pill Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4 pt-3 border-t border-slate-800/80 text-xs">
            <div className="flex items-start gap-2.5 p-2 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="w-5 h-5 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center text-[10px] flex-shrink-0 mt-0.5">
                1
              </span>
              <div>
                <strong className="text-slate-200 block font-semibold">Monitor Public Sentiment</strong>
                <span className="text-slate-400 text-[11px]">Real-time stream tracks whether opinions are positive, neutral, or negative.</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5 p-2 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="w-5 h-5 rounded-full bg-cyan-600 text-white font-bold flex items-center justify-center text-[10px] flex-shrink-0 mt-0.5">
                2
              </span>
              <div>
                <strong className="text-slate-200 block font-semibold">Spam & Deepfake Filtered</strong>
                <span className="text-slate-400 text-[11px]">Automated AI filters out bots and synthetic videos before skewing results.</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5 p-2 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="w-5 h-5 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-[10px] flex-shrink-0 mt-0.5">
                3
              </span>
              <div>
                <strong className="text-slate-200 block font-semibold">Ask in Plain English</strong>
                <span className="text-slate-400 text-[11px]">Ask "Why is sentiment dipping?" to get clear summaries instantly.</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Instant 1-Click Sentiment Tester (Directly on Dashboard!) */}
      <div className="glass-panel rounded-2xl p-5 border border-slate-800 space-y-3 bg-gradient-to-b from-slate-900/80 to-[#0b111e]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-amber-400" />
            <h3 className="text-xs font-bold text-white uppercase font-mono tracking-wider">
              Quick Sentiment & Bot Tester (Try It Yourself)
            </h3>
          </div>
          <div className="flex items-center gap-1.5 text-[11px] text-slate-400 font-mono">
            <span>Quick presets:</span>
            {samplePresets.map((p, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleQuickAnalyze(p.text)}
                className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-indigo-300 hover:text-white transition-colors"
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="text"
            value={testText}
            onChange={(e) => setTestText(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter') handleQuickAnalyze(); }}
            placeholder="Type any tweet or phrase here (e.g. 'I love the new update' or 'Server failed again!')..."
            className="flex-1 bg-slate-950 border border-slate-700 rounded-xl px-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 font-sans"
          />
          <button
            onClick={() => handleQuickAnalyze()}
            disabled={isTesting || !testText.trim()}
            className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-all disabled:opacity-50 shadow-md shadow-indigo-600/30"
          >
            <Send className="w-3.5 h-3.5" />
            <span>{isTesting ? "Checking..." : "Analyze"}</span>
          </button>
        </div>

        {/* Quick Result Drawer */}
        {testResult && (
          <div className="p-3.5 rounded-xl bg-slate-950/90 border border-indigo-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs animate-in fade-in">
            <div className="space-y-0.5">
              <div className="flex items-center gap-2">
                <span
                  className={`px-2 py-0.5 rounded font-mono font-bold text-[10px] ${
                    testResult.sentiment === 'POSITIVE'
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                      : testResult.sentiment === 'NEGATIVE'
                      ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
                      : 'bg-slate-800 text-slate-300'
                  }`}
                >
                  {testResult.sentiment} ({(testResult.confidence * 100).toFixed(0)}%)
                </span>

                <span className="text-[10px] font-mono text-indigo-300 bg-indigo-950/50 px-2 py-0.5 rounded border border-indigo-800/40">
                  Emotion: {testResult.emotion}
                </span>

                {testResult.isBot ? (
                  <span className="text-[10px] font-mono text-amber-400 font-bold bg-amber-950/40 px-2 py-0.5 rounded border border-amber-800/40">
                    ⚠️ Flagged as Spam Bot
                  </span>
                ) : (
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/30 px-2 py-0.5 rounded border border-emerald-800/30">
                    ✓ Verified Human Post
                  </span>
                )}
              </div>
              <p className="text-slate-300 text-[11px] pt-1">
                {testResult.explanation}
              </p>
            </div>

            <button
              onClick={() => onNavigateTab('live-stream')}
              className="text-indigo-400 hover:text-indigo-300 text-xs font-semibold font-mono flex items-center gap-1 self-end sm:self-center"
            >
              <span>Full Lab →</span>
            </button>
          </div>
        )}
      </div>

      {/* KPI Cards Grid with Simple Explanations */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPIStatsCard
          title="Total Analyzed Posts"
          value={INITIAL_STATS.totalProcessed.toLocaleString()}
          subvalue="live volume"
          change="+18.4%"
          isPositive={true}
          icon={Activity}
          badgeText="Real-Time Feed"
          colorScheme="indigo"
        />
        <KPIStatsCard
          title="Net Sentiment Score"
          value={INITIAL_STATS.netSentimentScore}
          subvalue="healthy positive"
          change="+4.2 pts"
          isPositive={true}
          icon={TrendingUp}
          badgeText="92.8% Accuracy"
          colorScheme="emerald"
        />
        <KPIStatsCard
          title="Spam Bots Blocked"
          value={INITIAL_STATS.botQuarantineCount.toLocaleString()}
          subvalue="quarantined"
          change="-2.1% FPR"
          isPositive={true}
          icon={Bot}
          badgeText="Clean Data"
          colorScheme="amber"
        />
        <KPIStatsCard
          title="Response Latency"
          value={`${INITIAL_STATS.avgInferenceLatency} ms`}
          subvalue="per post"
          change="-8.5 ms"
          isPositive={true}
          icon={Clock}
          badgeText="Instant"
          colorScheme="cyan"
        />
      </div>

      {/* Main Visualizations: 24-Hour Trend Chart & Gauges */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Real-time 24-Hour Sentiment Timeline (8 cols) */}
        <div className="lg:col-span-8 glass-panel rounded-2xl p-6 border border-slate-800 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-white tracking-tight">
                  24-Hour Sentiment Trajectory
                </h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Live Synced
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Notice the red crisis dip at 14:00 caused by a cloud provider DNS outage
              </p>
            </div>
            <div className="flex items-center gap-3 text-xs font-mono">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                <span className="text-slate-300">Positive</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                <span className="text-slate-300">Negative</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-400" />
                <span className="text-slate-300">Neutral</span>
              </div>
            </div>
          </div>

          {/* SVG Interactive Timeline Chart */}
          <div className="relative pt-4">
            <div className="h-64 w-full">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 700 220" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="posGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
                  </linearGradient>
                  <linearGradient id="negGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#ef4444" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#ef4444" stopOpacity="0.0" />
                  </linearGradient>
                </defs>

                {/* Horizontal Grid lines */}
                <line x1="0" y1="20" x2="700" y2="20" stroke="#1e293b" strokeDasharray="3 3" />
                <line x1="0" y1="70" x2="700" y2="70" stroke="#1e293b" strokeDasharray="3 3" />
                <line x1="0" y1="120" x2="700" y2="120" stroke="#1e293b" strokeDasharray="3 3" />
                <line x1="0" y1="170" x2="700" y2="170" stroke="#1e293b" strokeDasharray="3 3" />

                {/* Anomaly Crisis Marker at 14:00 */}
                <line x1="445" y1="10" x2="445" y2="190" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="4 2" />
                <rect x="390" y="5" width="110" height="22" rx="4" fill="#ef4444" fillOpacity="0.2" stroke="#ef4444" strokeWidth="1" />
                <text x="445" y="19" textAnchor="middle" fill="#fca5a5" fontSize="10" fontFamily="monospace" fontWeight="bold">
                  ⚠️ Outage Dip (14:00)
                </text>

                {/* Positive Line & Area */}
                <path
                  d="M 20,70 L 80,78 L 140,85 L 200,65 L 260,58 L 320,68 L 380,88 L 445,120 L 510,102 L 570,82 L 630,68 L 680,72 L 680,200 L 20,200 Z"
                  fill="url(#posGradient)"
                />
                <path
                  d="M 20,70 L 80,78 L 140,85 L 200,65 L 260,58 L 320,68 L 380,88 L 445,120 L 510,102 L 570,82 L 630,68 L 680,72"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="3"
                />

                {/* Negative Line & Area */}
                <path
                  d="M 20,150 L 80,146 L 140,144 L 200,160 L 260,155 L 320,142 L 380,124 L 445,88 L 510,110 L 570,138 L 630,150 L 680,152 L 680,200 L 20,200 Z"
                  fill="url(#negGradient)"
                />
                <path
                  d="M 20,150 L 80,146 L 140,144 L 200,160 L 260,155 L 320,142 L 380,124 L 445,88 L 510,110 L 570,138 L 630,150 L 680,152"
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth="3"
                />

                {/* Neutral Line */}
                <path
                  d="M 20,155 L 80,153 L 140,148 L 200,153 L 260,165 L 320,167 L 380,165 L 445,170 L 510,165 L 570,165 L 630,165 L 680,158"
                  fill="none"
                  stroke="#94a3b8"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />

                {/* Data point dots */}
                <circle cx="445" cy="88" r="5" fill="#ef4444" stroke="#fff" strokeWidth="2" />
                <circle cx="445" cy="120" r="5" fill="#10b981" stroke="#fff" strokeWidth="2" />
              </svg>
            </div>

            {/* Time markers row */}
            <div className="flex justify-between text-[11px] font-mono text-slate-500 pt-3 border-t border-slate-800">
              {HOURLY_SENTIMENT_TRENDS.map((h, i) => (
                <span key={i} className="hover:text-slate-300 cursor-pointer">
                  {h.time}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Sentiment Gauge & Breakdown (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          <SentimentGauge
            positive={INITIAL_STATS.positivePercent}
            negative={INITIAL_STATS.negativePercent}
            neutral={INITIAL_STATS.neutralPercent}
            netScore={INITIAL_STATS.netSentimentScore}
            confidence={0.94}
          />
        </div>
      </div>

      {/* Second Row: Emotions & Viral Trends */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Emotion Radar / Spectrum (5 cols) */}
        <div className="lg:col-span-5">
          <EmotionRadar emotions={EMOTIONS_DISTRIBUTION} />
        </div>

        {/* Viral Trends & Bot Astroturfing Detector (7 cols) */}
        <div className="lg:col-span-7 glass-panel rounded-2xl p-6 border border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-white tracking-tight flex items-center gap-2">
                <Flame className="w-4 h-4 text-amber-400" />
                Trending Topics & Fake Astroturfing Flags
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Spot which viral hashtags are genuine human discussions vs bot-manipulated campaigns
              </p>
            </div>
            <button
              onClick={() => onNavigateTab('trends')}
              className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
            >
              <span>Explore All</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-2.5">
            {TRENDING_TOPICS.map((topic) => (
              <div
                key={topic.id}
                className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800/80 hover:border-slate-700 flex items-center justify-between gap-4 transition-all"
              >
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-white text-xs truncate">
                      {topic.tag}
                    </span>
                    <span
                      className={`text-[9px] px-2 py-0.5 rounded font-mono font-bold ${
                        topic.status === 'CRISIS'
                          ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
                          : topic.status === 'ASTROTURFING'
                          ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                          : 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/30'
                      }`}
                    >
                      {topic.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-[11px] text-slate-400 mt-1 font-mono">
                    <span>{topic.category}</span>
                    <span>•</span>
                    <span className="text-slate-300">{topic.volume} posts</span>
                    <span>•</span>
                    <span className="text-emerald-400">{topic.growth}</span>
                  </div>
                </div>

                <div className="text-right font-mono">
                  <div className="text-xs font-bold text-white">
                    Score: {topic.sentimentScore}/100
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">
                    Bot Presence: <span className={parseFloat(topic.botPresence) > 50 ? "text-amber-400 font-bold" : "text-slate-400"}>{topic.botPresence}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Third Row: Live Tweet Stream Snippet */}
      <div className="glass-panel rounded-2xl p-6 border border-slate-800 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-emerald-400" />
            <h3 className="text-base font-bold text-white tracking-tight">
              Real-Time Feed (WebSocket Streaming)
            </h3>
            {isStreaming && (
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
            )}
          </div>
          <button
            onClick={() => onNavigateTab('live-stream')}
            className="text-xs text-indigo-400 hover:text-indigo-300 font-semibold flex items-center gap-1"
          >
            <span>Open Full Live Stream</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tweets.slice(0, 3).map((tweet) => (
            <div
              key={tweet.id}
              className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={tweet.avatar}
                      alt={tweet.author}
                      className="w-8 h-8 rounded-full object-cover border border-slate-700"
                    />
                    <div>
                      <div className="text-xs font-bold text-white">{tweet.author}</div>
                      <div className="text-[10px] text-slate-500 font-mono">{tweet.handle}</div>
                    </div>
                  </div>
                  <span
                    className={`text-[9px] px-2 py-0.5 rounded font-mono font-bold ${
                      tweet.sentiment === 'POSITIVE'
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                        : tweet.sentiment === 'NEGATIVE'
                        ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
                        : 'bg-slate-700/50 text-slate-300 border border-slate-600'
                    }`}
                  >
                    {tweet.sentiment}
                  </span>
                </div>
                <p className="text-xs text-slate-300 mt-2.5 line-clamp-3 leading-relaxed">
                  "{tweet.text}"
                </p>
              </div>

              <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span>Emotion: <strong className="text-indigo-300">{tweet.emotion}</strong></span>
                {tweet.isBot ? (
                  <span className="text-amber-400 font-bold">⚠️ Bot: {(tweet.botScore * 100).toFixed(0)}%</span>
                ) : (
                  <span className="text-emerald-400">✓ Verified Human</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
