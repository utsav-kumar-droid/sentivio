import React, { useState } from 'react';
import {
  X,
  LogIn,
  User,
  Lock,
  Mail,
  ShieldCheck,
  Eye,
  EyeOff
} from 'lucide-react';

export default function LoginModal({
  isOpen,
  onClose,
  currentUser,
  onLogin,
  onLogout
}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [selectedRole, setSelectedRole] = useState('Analyst');
  const [rememberMe, setRememberMe] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      setErrorMessage('Please enter your email address');
      return;
    }
    if (!password.trim()) {
      setErrorMessage('Please enter your password');
      return;
    }

    // Extract username from email
    const username = email.split('@')[0]
      .split(/[._-]/)
      .map(part => part.charAt(0).toUpperCase() + part.slice(1))
      .join(' ');

    onLogin({
      name: username || "Authorized User",
      email: email.trim(),
      role: selectedRole,
      isAuthenticated: true
    });

    setErrorMessage('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-md rounded-2xl glass-panel-elevated p-6 sm:p-8 border border-slate-700/80 bg-[#0d1424] shadow-2xl space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          title="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-indigo-600/30 text-white flex-shrink-0">
            <LogIn className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white tracking-tight">
              {currentUser?.isAuthenticated ? "Switch Account" : "Sign In"}
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Enter your credentials to access Sentivio
            </p>
          </div>
        </div>

        {/* Error Notice */}
        {errorMessage && (
          <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs">
            {errorMessage}
          </div>
        )}

        {/* Credentials Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-3">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (errorMessage) setErrorMessage('');
                  }}
                  placeholder="name@organization.com"
                  required
                  className="w-full bg-slate-900 border border-slate-700/80 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-xs font-medium text-slate-300">
                  Password
                </label>
                <a
                  href="#forgot"
                  onClick={(e) => {
                    e.preventDefault();
                    alert("Password reset link sent to your registered institutional email.");
                  }}
                  className="text-[11px] text-indigo-400 hover:text-indigo-300"
                >
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (errorMessage) setErrorMessage('');
                  }}
                  placeholder="••••••••••••"
                  required
                  className="w-full bg-slate-900 border border-slate-700/80 rounded-xl pl-10 pr-10 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Role Permission (Fig. 1 RBAC)
              </label>
              <select
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-indigo-500 font-mono"
              >
                <option value="Administrator">Administrator (Full Control & Logs)</option>
                <option value="Analyst">Analyst (NLP Telemetry & Stream)</option>
                <option value="Business User">Business User (Brand Benchmarks)</option>
                <option value="General User">General User (Public Trends & AI Assistant)</option>
              </select>
            </div>

            <div className="flex items-center gap-2 pt-1">
              <input
                type="checkbox"
                id="remember"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="rounded bg-slate-900 border-slate-700 text-indigo-600 focus:ring-0"
              />
              <label htmlFor="remember" className="text-xs text-slate-400 cursor-pointer">
                Remember me on this workstation
              </label>
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white font-semibold text-xs transition-all shadow-md shadow-indigo-600/30 flex items-center justify-center gap-2"
            >
              <LogIn className="w-4 h-4" />
              <span>Sign In to Dashboard</span>
            </button>
          </div>
        </form>

        {currentUser?.isAuthenticated && (
          <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
            <span className="text-slate-400">
              Signed in as: <strong className="text-white">{currentUser.name}</strong>
            </span>
            <button
              type="button"
              onClick={() => {
                onLogout();
                onClose();
              }}
              className="text-rose-400 hover:text-rose-300 font-semibold"
            >
              Log Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
