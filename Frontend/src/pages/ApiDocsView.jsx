import React, { useState } from 'react';
import { Code, Send, CheckCircle2, Copy, Terminal, ExternalLink } from 'lucide-react';

export default function ApiDocsView() {
  const [activeEndpoint, setActiveEndpoint] = useState('sentiment');
  const [copied, setCopied] = useState(false);
  const [isCallingApi, setIsCallingApi] = useState(false);
  const [apiResponse, setApiResponse] = useState(null);

  const endpoints = [
    {
      id: "sentiment",
      method: "POST",
      path: "/api/v1/sentiment/analyze",
      desc: "Executes fine-tuned RoBERTa transformer inference on unstructured social text",
      sampleBody: JSON.stringify({ text: "Sentivio real-time streaming latency is fantastic! 🚀" }, null, 2),
      sampleResponse: {
        status: 200,
        model: "roberta-base-finetuned",
        sentiment: "POSITIVE",
        confidence: 0.964,
        emotions: {
          joy: 0.91,
          surprise: 0.06,
          anger: 0.01,
          fear: 0.01,
          sadness: 0.01
        },
        latency_ms: 45.2,
        tokens_bpe: 14
      }
    },
    {
      id: "bot",
      method: "POST",
      path: "/api/v1/bot/isolate",
      desc: "Evaluates user metadata features via Isolation Forest to detect anomalous sybil bots",
      sampleBody: JSON.stringify({
        account_age_days: 2,
        post_freq_per_hour: 95,
        repost_ratio: 0.94,
        content_similarity: 0.97
      }, null, 2),
      sampleResponse: {
        status: 200,
        verdict: "BOT_ISOLATED",
        anomaly_score: 0.94,
        avg_path_length: 2.2,
        threshold: 0.60,
        quarantine_action: "TRIGGERED"
      }
    },
    {
      id: "trends",
      method: "GET",
      path: "/api/v1/analytics/trends?limit=5",
      desc: "Fetches active viral topics with volume velocity and astroturfing indicators",
      sampleBody: null,
      sampleResponse: {
        status: 200,
        trends_count: 5,
        topics: [
          { tag: "#AIRevolution2026", volume: "182.4K", growth: "+48.2%", bot_pct: "3.2%" },
          { tag: "#CloudOutageIncident", volume: "94.6K", growth: "+142.0%", bot_pct: "4.1%" }
        ]
      }
    }
  ];

  const current = endpoints.find((e) => e.id === activeEndpoint) || endpoints[0];

  const handleTestCall = () => {
    setIsCallingApi(true);
    setTimeout(() => {
      setApiResponse(current.sampleResponse);
      setIsCallingApi(false);
    }, 450);
  };

  const copyCode = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="glass-panel rounded-2xl p-6 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Code className="w-5 h-5 text-indigo-400" />
            <h2 className="text-lg font-bold text-white tracking-tight">
              Developer REST & WebSocket API Documentation
            </h2>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Programmatic interfaces for external ERP, marketing suites, and automated crisis response microservices
          </p>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs">
          <span className="px-3 py-1 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            Base URL: https://api.sentivio.ai
          </span>
        </div>
      </div>

      {/* Grid: Endpoints list & Live Tester */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Endpoint Selector (4 cols) */}
        <div className="lg:col-span-4 glass-panel rounded-2xl p-5 border border-slate-800 space-y-3">
          <span className="text-xs font-bold text-white uppercase font-mono tracking-wider">
            Available Endpoints
          </span>

          <div className="space-y-2">
            {endpoints.map((ep) => (
              <div
                key={ep.id}
                onClick={() => {
                  setActiveEndpoint(ep.id);
                  setApiResponse(null);
                }}
                className={`p-3 rounded-xl border cursor-pointer transition-all ${
                  activeEndpoint === ep.id
                    ? 'border-indigo-500 bg-indigo-950/40 shadow-md'
                    : 'border-slate-800 bg-slate-900/60 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded font-mono font-bold ${
                      ep.method === 'POST' ? 'bg-indigo-500 text-white' : 'bg-emerald-500 text-white'
                    }`}
                  >
                    {ep.method}
                  </span>
                  <span className="text-xs font-mono font-bold text-white truncate">
                    {ep.path}
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 mt-1 line-clamp-2">{ep.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Live Simulator (8 cols) */}
        <div className="lg:col-span-8 glass-panel rounded-2xl p-6 border border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span
                className={`text-xs px-2.5 py-1 rounded-md font-mono font-bold ${
                  current.method === 'POST' ? 'bg-indigo-600 text-white' : 'bg-emerald-600 text-white'
                }`}
              >
                {current.method}
              </span>
              <span className="text-sm font-mono font-bold text-white">{current.path}</span>
            </div>

            <button
              onClick={handleTestCall}
              disabled={isCallingApi}
              className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-mono font-semibold flex items-center gap-2 transition-all shadow-md shadow-indigo-600/30"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{isCallingApi ? "Executing..." : "Send Test Call"}</span>
            </button>
          </div>

          {current.sampleBody && (
            <div className="space-y-1.5">
              <span className="text-[10px] font-mono uppercase text-slate-400 font-bold">
                Sample Request Payload
              </span>
              <pre className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-cyan-300 overflow-x-auto">
                {current.sampleBody}
              </pre>
            </div>
          )}

          {/* Response Payload */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase text-slate-400 font-bold">
                Response Payload (JSON 200 OK)
              </span>
              {apiResponse && (
                <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Latency: 45.2ms
                </span>
              )}
            </div>
            <pre className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-emerald-300 overflow-x-auto min-h-36">
              {apiResponse
                ? JSON.stringify(apiResponse, null, 2)
                : '// Click "Send Test Call" to execute a live simulated request...'}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
