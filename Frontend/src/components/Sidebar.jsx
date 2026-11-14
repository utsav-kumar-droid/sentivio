import React, { useState } from 'react';
import {
  LayoutDashboard,
  Activity,
  TrendingUp,
  Smile,
  Bot,
  Video,
  Globe,
  BarChart3,
  Bell,
  BotMessageSquare,
  Gamepad2,
  FileText,
  Code,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Radio,
  LogIn,
  LogOut,
  UserCheck,
  Sparkles,
  Key
} from 'lucide-react';

export default function Sidebar({
  activeTab,
  setActiveTab,
  userRole,
  setUserRole,
  currentUser,
  onOpenLoginModal,
  onLogout,
  isCollapsed,
  setIsCollapsed,
  livePostCount,
  activeAlertCount
}) {
  const [roleMenuOpen, setRoleMenuOpen] = useState(false);

  // Simplified and intuitive navigation hierarchy
  const navSections = [
    {
      group: "MAIN",
      items: [
        { id: "dashboard", label: "Dashboard", icon: LayoutDashboard, badge: null, desc: "Overview & key metrics" },
        { id: "live-stream", label: "Live Feed & Tester", icon: Activity, badge: "LIVE", badgeColor: "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30", desc: "Real-time stream & test lab" },
        { id: "trends", label: "Trending Topics", icon: TrendingUp, badge: "Hot", desc: "Viral topics & hashtags" },
        { id: "ai-assistant", label: "AI Assistant", icon: BotMessageSquare, badge: "Smart", badgeColor: "bg-indigo-500/20 text-indigo-300 border border-indigo-500/30", desc: "Ask questions in plain English" }
      ]
    },
    {
      group: "ANALYTICS & VERIFICATION",
      items: [
        { id: "emotions", label: "Emotions & Sarcasm", icon: Smile, badge: "5-Class", desc: "Joy, Anger, Fear, Sadness" },
        { id: "bots", label: "Bot Shield", icon: Bot, badge: "1.4k", desc: "Isolation Forest spam filter" },
        { id: "synthetic-media", label: "AI Video & Deepfake Scan", icon: Video, badge: "Vision", desc: "Detect synthetic fake videos" },
        { id: "geo-analytics", label: "Geo Heatmaps", icon: Globe, badge: null, desc: "Global sentiment map" },
        { id: "competitors", label: "Competitor Compare", icon: BarChart3, badge: null, desc: "Brand benchmarks & share" }
      ]
    },
    {
      group: "TOOLS",
      items: [
        { id: "alerts", label: "Crisis Alerts", icon: Bell, badge: activeAlertCount, badgeColor: "bg-rose-500/20 text-rose-400 border border-rose-500/30 font-bold", desc: "Instant anomaly alerts" },
        { id: "iq-game", label: "Cognitive IQ Game", icon: Gamepad2, badge: "Quiz", desc: "Interactive sentiment challenge" },
        { id: "reports", label: "Reports & Export", icon: FileText, badge: null, desc: "PDF & CSV summaries" },
        { id: "api-docs", label: "API Docs", icon: Code, badge: "v1.0", desc: "Developer documentation" }
      ]
    }
  ];

  const roles = [
    { id: "Administrator", desc: "Full system config, user control & logs" },
    { id: "Analyst", desc: "Advanced NLP telemetry & raw stream tools" },
    { id: "Business User", desc: "Brand benchmarks & high-level ROI" },
    { id: "General User", desc: "Public trend views & conversational AI" }
  ];

  return (
    <aside
      className={`relative flex flex-col bg-[#0b111e] border-r border-slate-800/80 transition-all duration-300 z-30 select-none ${
        isCollapsed ? 'w-20' : 'w-64'
      } h-screen sticky top-0`}
    >
      {/* Brand Header */}
      <div className="flex items-center justify-between p-4 border-b border-slate-800/70 h-16">
        <div className="flex items-center gap-2.5 overflow-hidden">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-indigo-600/30 flex-shrink-0">
            <Radio className="w-4 h-4 text-white animate-pulse" />
          </div>
          {!isCollapsed && (
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold tracking-tight text-white text-base bg-gradient-to-r from-white via-indigo-100 to-indigo-300 bg-clip-text text-transparent">
                  SENTIVIO
                </span>
                <span className="text-[9px] px-1.5 py-0.2 rounded bg-indigo-500/20 text-indigo-300 font-mono font-semibold border border-indigo-500/30">
                  AI
                </span>
              </div>
              <p className="text-[10px] text-slate-400 truncate">
                Social Intelligence
              </p>
            </div>
          )}
        </div>

        {/* Toggle Collapse Button */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
        >
          {isCollapsed ? <ChevronRight className="w-3.5 h-3.5" /> : <ChevronLeft className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* Navigation Menu */}
      <div className="flex-1 overflow-y-auto px-2.5 py-3 space-y-4">
        {navSections.map((section, sIdx) => (
          <div key={sIdx} className="space-y-0.5">
            {!isCollapsed && (
              <p className="px-2.5 pb-1 text-[9px] font-bold text-slate-500 uppercase tracking-wider font-mono">
                {section.group}
              </p>
            )}
            <div className="space-y-0.5">
              {section.items.map((item) => {
                const IconComponent = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    title={isCollapsed ? item.label : undefined}
                    className={`w-full flex items-center gap-2.5 px-2.5 py-2 rounded-xl text-xs font-semibold transition-all group text-left relative ${
                      isActive
                        ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30 font-bold'
                        : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/60'
                    }`}
                  >
                    <IconComponent
                      className={`w-4 h-4 flex-shrink-0 transition-transform group-hover:scale-105 ${
                        isActive ? 'text-white' : 'text-slate-400 group-hover:text-indigo-400'
                      }`}
                    />
                    {!isCollapsed && (
                      <span className="truncate flex-1 tracking-wide">
                        {item.label}
                      </span>
                    )}
                    {!isCollapsed && item.badge && (
                      <span
                        className={`text-[9px] px-1.5 py-0.2 rounded-full font-mono ${
                          item.badgeColor || (isActive ? 'bg-indigo-800 text-white' : 'bg-slate-800 text-slate-300')
                        }`}
                      >
                        {item.badge}
                      </span>
                    )}
                    {/* Active Left indicator bar */}
                    {isActive && (
                      <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-4 bg-cyan-400 rounded-r-full" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* ======================================================== */}
      {/* BOTTOM LEFT: LOGIN & ACCOUNT SECTION                    */}
      {/* ======================================================== */}
      <div className="p-2.5 border-t border-slate-800/80 bg-[#080d18]">
        {currentUser?.isAuthenticated ? (
          /* User Logged In State */
          <div className="relative">
            <div className="flex items-center gap-2 p-1.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-colors">
              {/* Avatar */}
              <button
                onClick={() => setRoleMenuOpen(!roleMenuOpen)}
                className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-600 to-indigo-600 flex items-center justify-center text-white font-bold text-xs shadow-sm flex-shrink-0 hover:opacity-90"
                title="Account options"
              >
                {currentUser.name ? currentUser.name.slice(0, 2).toUpperCase() : "OG"}
              </button>

              {!isCollapsed && (
                <div
                  className="flex-1 min-w-0 cursor-pointer"
                  onClick={() => setRoleMenuOpen(!roleMenuOpen)}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white truncate max-w-[100px]">
                      {currentUser.name}
                    </span>
                    <span className="text-[9px] text-indigo-300 bg-indigo-950/80 px-1.5 py-0.2 rounded border border-indigo-800/40 font-mono">
                      {userRole}
                    </span>
                  </div>
                  <p className="text-[10px] text-emerald-400 flex items-center gap-1 font-mono mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
                    Online
                  </p>
                </div>
              )}

              {/* Direct Quick Log Out / Switch Button */}
              {!isCollapsed && (
                <button
                  onClick={onLogout}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-slate-800 transition-colors"
                  title="Sign out"
                >
                  <LogOut className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Account Popover Menu */}
            {roleMenuOpen && !isCollapsed && (
              <div className="absolute bottom-14 left-0 right-0 p-2.5 rounded-xl glass-dropdown border border-slate-700 space-y-2 z-50 animate-in fade-in">
                <div className="flex items-center justify-between pb-1.5 border-b border-slate-800 text-[10px] font-mono text-slate-400">
                  <span className="uppercase font-bold">Active Account</span>
                  <span className="text-emerald-400">Verified</span>
                </div>

                <div className="text-xs space-y-0.5">
                  <div className="font-bold text-white truncate">{currentUser.name}</div>
                  <div className="text-[10px] text-slate-400 truncate">{currentUser.email}</div>
                </div>

                {/* Switch Role Quick Buttons */}
                <div className="pt-1 space-y-1">
                  <span className="text-[9px] text-slate-500 uppercase font-mono font-bold block">
                    Switch Active Role
                  </span>
                  <div className="grid grid-cols-2 gap-1 text-[10px] font-mono">
                    {roles.map((r) => (
                      <button
                        key={r.id}
                        onClick={() => {
                          setUserRole(r.id);
                          setRoleMenuOpen(false);
                        }}
                        className={`px-1.5 py-1 rounded text-left truncate transition-colors ${
                          userRole === r.id
                            ? 'bg-indigo-600 text-white font-bold'
                            : 'bg-slate-900 text-slate-300 hover:bg-slate-800'
                        }`}
                      >
                        {r.id.split(' ')[0]}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Switch User / Sign in with another account */}
                <div className="pt-1 border-t border-slate-800 flex items-center justify-between">
                  <button
                    onClick={() => {
                      setRoleMenuOpen(false);
                      onOpenLoginModal();
                    }}
                    className="text-[11px] text-indigo-400 hover:text-indigo-300 font-semibold flex items-center gap-1"
                  >
                    <Key className="w-3 h-3" />
                    <span>Switch User</span>
                  </button>
                  <button
                    onClick={() => {
                      setRoleMenuOpen(false);
                      onLogout();
                    }}
                    className="text-[11px] text-rose-400 hover:text-rose-300 font-semibold"
                  >
                    Log Out
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          /* User NOT Logged In State: Prominent Bottom-Left Login Button */
          <button
            onClick={onOpenLoginModal}
            className={`w-full flex items-center gap-2.5 p-2.5 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white transition-all shadow-lg shadow-indigo-600/30 group ${
              isCollapsed ? 'justify-center' : ''
            }`}
            title="Log In / Sign In"
          >
            <div className="w-7 h-7 rounded-lg bg-black/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
              <LogIn className="w-4 h-4 text-white" />
            </div>
            {!isCollapsed && (
              <div className="min-w-0 text-left flex-1">
                <div className="text-xs font-bold leading-tight flex items-center justify-between">
                  <span>Log In / Sign In</span>
                  <Key className="w-3 h-3 text-cyan-200" />
                </div>
                <p className="text-[10px] text-indigo-100/80 truncate">
                  Choose role or account
                </p>
              </div>
            )}
          </button>
        )}
      </div>
    </aside>
  );
}
