import React, { useState } from 'react';
import {
  Gamepad2,
  Trophy,
  Flame,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Sparkles,
  Brain,
  HelpCircle
} from 'lucide-react';
import { IQ_GAME_QUESTIONS } from '../services/mockData';

export default function IQGameView() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOpt, setSelectedOpt] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const currentQ = IQ_GAME_QUESTIONS[currentIdx];

  const handleSelect = (idx) => {
    if (isAnswered) return;
    setSelectedOpt(idx);
    setIsAnswered(true);

    if (idx === currentQ.correctAnswer) {
      setScore(score + 100);
      setStreak(streak + 1);
    } else {
      setStreak(0);
    }
  };

  const handleNext = () => {
    if (currentIdx + 1 < IQ_GAME_QUESTIONS.length) {
      setCurrentIdx(currentIdx + 1);
      setSelectedOpt(null);
      setIsAnswered(false);
    } else {
      setIsCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedOpt(null);
    setIsAnswered(false);
    setScore(0);
    setStreak(0);
    setIsCompleted(false);
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="glass-panel rounded-2xl p-6 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Gamepad2 className="w-5 h-5 text-indigo-400" />
            <h2 className="text-lg font-bold text-white tracking-tight">
              Sentivio Cognitive IQ & Sentiment Challenge
            </h2>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Test your cognitive acumen against AI models in detecting subtle sarcasm, sybil bot patterns, and generative deepfakes
          </p>
        </div>

        <div className="flex items-center gap-4 font-mono text-xs">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-300">
            <Flame className="w-4 h-4 text-amber-400" />
            <span>Streak: {streak}</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-300">
            <Trophy className="w-4 h-4 text-indigo-400" />
            <span>Score: {score} pts</span>
          </div>
        </div>
      </div>

      {/* Main Game Card */}
      {!isCompleted ? (
        <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800 max-w-2xl mx-auto space-y-6">
          <div className="flex items-center justify-between text-xs font-mono text-slate-400 border-b border-slate-800 pb-3">
            <span className="px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800/40 font-bold">
              {currentQ.type}
            </span>
            <span>
              Question {currentIdx + 1} of {IQ_GAME_QUESTIONS.length}
            </span>
          </div>

          <div>
            <h3 className="text-base font-bold text-white leading-relaxed">
              {currentQ.question}
            </h3>
          </div>

          {/* Options */}
          <div className="space-y-3">
            {currentQ.options.map((opt, oIdx) => {
              let btnClass = "bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700";

              if (isAnswered) {
                if (oIdx === currentQ.correctAnswer) {
                  btnClass = "bg-emerald-950/60 border-emerald-500 text-emerald-300 font-bold";
                } else if (selectedOpt === oIdx) {
                  btnClass = "bg-rose-950/60 border-rose-500 text-rose-300 font-bold";
                } else {
                  btnClass = "bg-slate-900/40 border-slate-850 text-slate-500 opacity-60";
                }
              }

              return (
                <button
                  key={oIdx}
                  onClick={() => handleSelect(oIdx)}
                  disabled={isAnswered}
                  className={`w-full p-4 rounded-xl border text-xs text-left transition-all flex items-center justify-between ${btnClass}`}
                >
                  <span>{opt}</span>
                  {isAnswered && oIdx === currentQ.correctAnswer && (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  )}
                  {isAnswered && selectedOpt === oIdx && oIdx !== currentQ.correctAnswer && (
                    <XCircle className="w-4 h-4 text-rose-400 flex-shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Answer Explanation */}
          {isAnswered && (
            <div className="p-4 rounded-xl bg-slate-950/90 border border-indigo-500/30 text-xs font-mono space-y-1.5 animate-in fade-in">
              <span className="text-[10px] uppercase text-indigo-400 font-bold flex items-center gap-1">
                <Brain className="w-3.5 h-3.5" />
                RoBERTa / IF Analytical Rationale:
              </span>
              <p className="text-slate-300 font-sans text-xs">{currentQ.explanation}</p>
            </div>
          )}

          {/* Next Button */}
          {isAnswered && (
            <button
              onClick={handleNext}
              className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold font-mono transition-all shadow-lg shadow-indigo-600/30"
            >
              {currentIdx + 1 < IQ_GAME_QUESTIONS.length ? "Proceed to Next Challenge →" : "View Final Cognitive Results"}
            </button>
          )}
        </div>
      ) : (
        /* Results Screen */
        <div className="glass-panel rounded-2xl p-8 border border-slate-800 max-w-lg mx-auto text-center space-y-5">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-500 to-indigo-600 flex items-center justify-center text-white mx-auto shadow-xl">
            <Trophy className="w-8 h-8" />
          </div>

          <div>
            <span className="text-xs font-mono text-indigo-400 font-bold uppercase">
              Challenge Complete
            </span>
            <h3 className="text-2xl font-black text-white mt-1">
              Your Cognitive Index: {score >= 300 ? "Grandmaster (IQ 138+)" : "Advanced Analyst (IQ 120)"}
            </h3>
            <p className="text-xs text-slate-400 mt-2">
              You correctly solved {score / 100} out of {IQ_GAME_QUESTIONS.length} forensic NLP & bot detection puzzles!
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 font-mono text-xs text-slate-300">
            Total Points Earned: <strong className="text-amber-400 font-bold">{score} XP</strong>
          </div>

          <button
            onClick={handleRestart}
            className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold font-mono inline-flex items-center gap-2 transition-all"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Play Again</span>
          </button>
        </div>
      )}
    </div>
  );
}
