import React, { useState } from 'react';
import {
  Search,
  Bell,
  Play,
  Pause,
  Sparkles,
  AlertTriangle,
  LogIn,
  UserCheck
} from 'lucide-react';

export default function Header({
  activeTabTitle,
  isStreaming,
  setIsStreaming,
  searchQuery,
  setSearchQuery,
  onOpenAIAssistant,
  alerts,
  userRole,
  currentUser,
  onOpenLoginModal
}) {
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <header className="sticky top-0 z-20 h-16 bg-[#090d16]/95 backdrop-blur-md border-b border-slate-800/80 px-6 flex items-center justify-between gap-4">
      {/* Page Title & Breadcrumb */}
      <div>
        <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
          <span>Sentivio</span>
          <span>/</span>
          <span className="text-slate-300 font-medium capitalize">{userRole}</span>
          <span>/</span>
          <span className="text-indigo-400 font-semibold">{activeTabTitle}</span>
        </div>
        <h1 className="text-base font-bold text-white tracking-tight flex items-center gap-2">
          {activeTabTitle}
        </h1>
      </div>

      {/* Global Search Bar */}
      <div className="flex-1 max-w-md hidden md:block">
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search keywords, #hashtags, @users, anomaly flags..."
            className="w-full pl-9 pr-4 py-1.5 bg-slate-900/80 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all font-sans"
          />
        </div>
      </div>

      {/* Actions & Stream Controls */}
      <div className="flex items-center gap-2.5">
        {/* WebSocket Stream Play/Pause Toggle */}
        <button
          onClick={() => setIsStreaming(!isStreaming)}
          className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-mono font-medium border transition-all ${
            isStreaming
              ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-400 hover:bg-emerald-900/30'
              : 'bg-amber-950/40 border-amber-500/40 text-amber-400 hover:bg-amber-900/30'
          }`}
          title="Toggle WebSocket real-time incoming post feed"
        >
          {isStreaming ? (
            <>
              <Pause className="w-3 h-3 text-emerald-400" />
              <span className="hidden sm:inline">STREAMING</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
            </>
          ) : (
            <>
              <Play className="w-3 h-3 text-amber-400" />
              <span className="hidden sm:inline">PAUSED</span>
            </>
          )}
        </button>

        {/* Quick Ask AI Trigger */}
        <button
          onClick={onOpenAIAssistant}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-600/90 hover:bg-indigo-600 text-white text-xs font-medium shadow-md shadow-indigo-600/25 transition-all"
        >
          <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
          <span className="hidden sm:inline">Ask AI</span>
        </button>

        {/* Alert Notifications Menu */}
        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <Bell className="w-4 h-4" />
            {alerts && alerts.length > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-rose-500 text-white rounded-full text-[10px] flex items-center justify-center font-bold font-mono">
                {alerts.length}
              </span>
            )}
          </button>

          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 rounded-2xl glass-dropdown border border-slate-700 p-3 z-50 shadow-2xl">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800">
                <span className="text-xs font-bold text-white flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                  Live System Alerts
                </span>
                <span className="text-[10px] text-slate-400 font-mono">Real-Time Ingestion</span>
              </div>
              <div className="space-y-2 max-h-72 overflow-y-auto">
                {alerts.map((al) => (
                  <div
                    key={al.id}
                    className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-left space-y-1 hover:border-slate-700 transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-[9px] px-1.5 py-0.5 rounded font-mono font-bold ${
                          al.severity === 'CRITICAL'
                            ? 'bg-rose-500/20 text-rose-400 border border-rose-500/40'
                            : al.severity === 'WARNING'
                            ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
                            : 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/40'
                        }`}
                      >
                        {al.severity}
                      </span>
                      <span className="text-[10px] text-slate-500 font-mono">{al.timestamp}</span>
                    </div>
                    <p className="text-xs font-bold text-white leading-tight">{al.title}</p>
                    <p className="text-[11px] text-slate-400 line-clamp-2">{al.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* If Not Logged In, Show Quick Sign In Pill */}
        {!currentUser?.isAuthenticated && (
          <button
            onClick={onOpenLoginModal}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white text-xs font-semibold shadow-md shadow-cyan-600/20 transition-all"
          >
            <LogIn className="w-3.5 h-3.5" />
            <span>Sign In</span>
          </button>
        )}
      </div>
    </header>
  );
}
