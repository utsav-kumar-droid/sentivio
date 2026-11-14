import React from 'react';
import {
  UserCheck,
  ShieldCheck,
  Award,
  BookOpen,
  Sliders,
  Database,
  Cpu,
  Key,
  Users,
  LogIn
} from 'lucide-react';

export default function UserProfileView({
  userRole,
  setUserRole,
  currentUser,
  onOpenLoginModal
}) {
  const teamMembers = [
    { name: "Om Gehlot", roll: "0108BC231044", role: "Frontend & System Integration" },
    { name: "Utsav Kumar", roll: "0108BC231064", role: "NLP & RoBERTa Modeling" },
    { name: "Mayank Singh", roll: "0108BC231037", role: "Isolation Forest & Anomaly" },
    { name: "Ravindra Yadav", roll: "0108BC231052", role: "Real-Time WebSocket & Pipeline" }
  ];

  const rolePermissions = {
    Administrator: [
      "Access to all system logs & raw model weights",
      "Full user account management & role promotion",
      "Threshold alert rule creation & dispatch control",
      "Isolation Forest quarantine overrides"
    ],
    Analyst: [
      "Real-time stream tokenization inspection",
      "Contextual emotion radar deep-dives & sarcasm filters",
      "Forensic deepfake video scan & spectral inspection",
      "Export raw CSV & JSON dataset archives"
    ],
    "Business User": [
      "Competitor benchmarking & share of voice tracking",
      "Executive PDF summary report generator",
      "High-level regional sentiment indices",
      "Crisis escalation tracking"
    ],
    "General User": [
      "Public trending topics explorer",
      "Conversational AI assistant Q&A access",
      "Interactive cognitive IQ challenge games",
      "Real-time sentiment preview feed"
    ]
  };

  const isAuth = !!currentUser?.isAuthenticated;
  const displayName = isAuth ? currentUser.name : "Guest Visitor";
  const displayEmail = isAuth ? currentUser.email : "guest@sentivio.ai";
  const initials = isAuth
    ? currentUser.name.slice(0, 2).toUpperCase()
    : "GV";

  return (
    <div className="space-y-6 pb-12">
      {/* Profile & Academic Header */}
      <div className="glass-panel rounded-2xl p-6 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-600 via-indigo-600 to-purple-600 flex items-center justify-center text-white text-xl font-black shadow-xl shadow-indigo-600/30">
            {initials}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold text-white tracking-tight">{displayName}</h2>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                {userRole}
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              {isAuth ? displayEmail : "Operating in guest mode — sign in to activate administrator or analyst privileges."}
            </p>
            <p className="text-[11px] text-slate-500 font-mono mt-0.5">
              Samrat Ashok Technological Institute, Vidisha • Project Team ID: <strong>BC2026TID03</strong>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs">
          {isAuth ? (
            <span className="px-3 py-1.5 rounded-xl bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 font-bold">
              Status: Authenticated
            </span>
          ) : (
            <button
              onClick={onOpenLoginModal}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white font-semibold text-xs flex items-center gap-2 transition-all shadow-md shadow-indigo-600/30 font-sans"
            >
              <LogIn className="w-4 h-4" />
              <span>Log In Now</span>
            </button>
          )}
        </div>
      </div>

      {/* Grid: Role Permissions & Team Members */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Role Permissions Matrix (6 cols) */}
        <div className="lg:col-span-6 glass-panel rounded-2xl p-6 border border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-white uppercase font-mono tracking-wider flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Active Role Privileges: {userRole}
            </span>
            <span className="text-[10px] text-slate-400 font-mono">Fig. 1 RBAC</span>
          </div>

          <div className="space-y-2.5">
            {(rolePermissions[userRole] || rolePermissions["General User"]).map((perm, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 flex items-center gap-2.5 font-sans"
              >
                <div className="w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0" />
                <span>{perm}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Project Team Members (6 cols) */}
        <div className="lg:col-span-6 glass-panel rounded-2xl p-6 border border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-white uppercase font-mono tracking-wider flex items-center gap-1.5">
              <Users className="w-4 h-4 text-indigo-400" />
              SATI B.Tech Major Project Team
            </span>
            <span className="text-[10px] text-slate-400 font-mono">July 2026</span>
          </div>

          <div className="space-y-2.5">
            {teamMembers.map((member) => (
              <div
                key={member.roll}
                className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between text-xs font-mono"
              >
                <div>
                  <div className="font-bold text-white">{member.name}</div>
                  <div className="text-[11px] text-slate-400 font-sans mt-0.5">{member.role}</div>
                </div>
                <span className="text-[11px] text-indigo-300 bg-indigo-950/60 px-2 py-0.5 rounded border border-indigo-800/40">
                  {member.roll}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
