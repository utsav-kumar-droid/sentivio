import React, { useState } from 'react';
import {
  BotMessageSquare,
  Sparkles,
  Send,
  User,
  HelpCircle,
  Lightbulb,
  CheckCircle2,
  Cpu,
  Database
} from 'lucide-react';
import { AI_ASSISTANT_KNOWLEDGE } from '../services/mockData';

export default function AIAssistantView() {
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Hello! I am your Sentivio Conversational Intelligence Assistant. I am directly linked to our real-time RoBERTa NLP pipeline, Isolation Forest anomaly feeds, and multi-modal deepfake detectors. Ask me anything about sentiment trends, bot clusters, or sudden opinion shifts in natural language!",
      timestamp: "Just now"
    }
  ]);
  const [inputQuery, setInputQuery] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = (textToSend) => {
    const query = textToSend || inputQuery;
    if (!query.trim()) return;

    const userMsg = {
      sender: "user",
      text: query,
      timestamp: "Just now"
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputQuery('');
    setIsTyping(true);

    setTimeout(() => {
      // Find matching knowledge or generic smart response
      const matched = AI_ASSISTANT_KNOWLEDGE.find(
        (k) =>
          k.query.toLowerCase().includes(query.toLowerCase()) ||
          query.toLowerCase().includes(k.query.toLowerCase().slice(0, 15))
      );

      const replyText = matched
        ? matched.response
        : `Based on real-time stream telemetry: The current query "${query}" has been evaluated across 54,892 recent posts. Net sentiment remains positive (+27.4) with dominant Joy (38%) and Anger (22%). Isolation Forest has quarantined 1,423 bot accounts to ensure unpolluted public opinion. All systems operating with 45.2ms inference latency.`;

      const aiMsg = {
        sender: "ai",
        text: replyText,
        timestamp: "Just now"
      };

      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 700);
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="glass-panel rounded-2xl p-6 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <BotMessageSquare className="w-5 h-5 text-indigo-400" />
            <h2 className="text-lg font-bold text-white tracking-tight">
              Conversational AI Assistant (LLM Social Copilot)
            </h2>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Democratizing complex NLP & anomaly analytics through natural language Q&A for all non-technical stakeholders
          </p>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs">
          <span className="px-3 py-1 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 flex items-center gap-1.5">
            <Cpu className="w-4 h-4 text-cyan-400" />
            LLM Context Engine: Online
          </span>
        </div>
      </div>

      {/* Preset Query Chips */}
      <div className="space-y-2">
        <span className="text-[10px] font-mono uppercase text-slate-400 font-bold flex items-center gap-1">
          <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
          Suggested Executive Queries
        </span>
        <div className="flex flex-wrap gap-2">
          {AI_ASSISTANT_KNOWLEDGE.map((k, idx) => (
            <button
              key={idx}
              onClick={() => handleSendMessage(k.query)}
              className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-indigo-500 text-xs text-slate-300 hover:text-white transition-all text-left flex items-center gap-1.5"
            >
              <Sparkles className="w-3 h-3 text-cyan-400 flex-shrink-0" />
              <span>"{k.query}"</span>
            </button>
          ))}
        </div>
      </div>

      {/* Chat Messages Container */}
      <div className="glass-panel rounded-2xl border border-slate-800 flex flex-col h-[520px]">
        {/* Messages Scroll Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((m, idx) => (
            <div
              key={idx}
              className={`flex items-start gap-3 ${
                m.sender === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              {m.sender === 'ai' && (
                <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-500 flex items-center justify-center text-white flex-shrink-0 shadow-md">
                  <BotMessageSquare className="w-4 h-4" />
                </div>
              )}

              <div
                className={`max-w-xl p-4 rounded-2xl text-xs leading-relaxed space-y-1.5 ${
                  m.sender === 'user'
                    ? 'bg-indigo-600 text-white rounded-br-none shadow-md shadow-indigo-600/20'
                    : 'bg-slate-900/90 text-slate-200 border border-slate-800 rounded-bl-none'
                }`}
              >
                <div className="flex items-center justify-between text-[10px] opacity-70 font-mono mb-0.5">
                  <span>{m.sender === 'user' ? 'You' : 'Sentivio AI Copilot'}</span>
                  <span>{m.timestamp}</span>
                </div>
                <p className="font-sans whitespace-pre-wrap">{m.text}</p>
              </div>

              {m.sender === 'user' && (
                <div className="w-8 h-8 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 flex-shrink-0">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-indigo-600/30 border border-indigo-500/40 flex items-center justify-center text-indigo-400">
                <Sparkles className="w-4 h-4 animate-spin" />
              </div>
              <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 text-xs text-slate-400 font-mono flex items-center gap-2">
                <span>Analyzing token embeddings & sentiment vectors...</span>
              </div>
            </div>
          )}
        </div>

        {/* Input Form */}
        <div className="p-4 border-t border-slate-800/80 bg-slate-950/70">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage(inputQuery);
            }}
            className="flex items-center gap-3"
          >
            <input
              type="text"
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
              placeholder="Ask Sentivio AI (e.g. 'Why is sentiment dropping?', 'Which bot farms are active?')..."
              className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 font-sans"
            />
            <button
              type="submit"
              disabled={!inputQuery.trim() || isTyping}
              className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center gap-2 transition-all disabled:opacity-50 shadow-md shadow-indigo-600/30"
            >
              <Send className="w-4 h-4" />
              <span className="hidden sm:inline">Ask</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
