import React from 'react';
import { Smile, Flame, Sparkles, Frown, ShieldAlert } from 'lucide-react';

export default function EmotionRadar({ emotions }) {
  const iconMap = {
    Joy: Smile,
    Anger: Flame,
    Surprise: Sparkles,
    Sadness: Frown,
    Fear: ShieldAlert
  };

  return (
    <div className="glass-panel rounded-2xl p-6 border border-slate-800 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2">
            <Smile className="w-4 h-4 text-emerald-400" />
            Fine-Grained Emotion Engine
          </h4>
          <p className="text-xs text-slate-400 mt-0.5">
            5-Class multi-label RoBERTa emotional spectrum
          </p>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
          5-Class Softmax
        </span>
      </div>

      {/* Emotion Bars */}
      <div className="space-y-3.5">
        {emotions.map((emo) => {
          const IconComp = iconMap[emo.name] || Smile;
          return (
            <div key={emo.name} className="space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div
                    className="p-1 rounded-md"
                    style={{ backgroundColor: emo.bg, color: emo.color }}
                  >
                    <IconComp className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-semibold text-slate-200">{emo.name}</span>
                </div>
                <div className="flex items-center gap-3 font-mono">
                  <span className="text-slate-400 text-[11px]">{emo.count} posts</span>
                  <span className="font-bold text-white" style={{ color: emo.color }}>
                    {emo.percentage}%
                  </span>
                </div>
              </div>

              {/* Progress bar */}
              <div className="h-2 w-full rounded-full bg-slate-900 overflow-hidden border border-slate-800">
                <div
                  className="h-full rounded-full transition-all duration-700"
                  style={{
                    width: `${emo.percentage}%`,
                    backgroundColor: emo.color,
                    boxShadow: `0 0 10px ${emo.color}66`
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
        <span>Dominant Emotion: <strong className="text-emerald-400">Joy (38%)</strong></span>
        <span>Sarcasm Filter: <span className="text-indigo-400 font-semibold">Active</span></span>
      </div>
    </div>
  );
}
