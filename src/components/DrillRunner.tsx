'use client';

import { useState } from 'react';
import type { Question } from '@/data/comprehensive-questions';
import { MathRenderer, MathFormula } from '@/lib/math-renderer';

export interface DrillMetaView {
  formulaId: string;
  name: string;
  formula: string;
  area: string;
  questionCount: number;
}

export function DrillRunner({
  questions,
  formulaName,
  formula,
  onExit,
  onRestart,
}: {
  questions: Question[];
  formulaName: string;
  formula: string;
  onExit: () => void;
  onRestart?: () => void;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showSolution, setShowSolution] = useState(false);
  const [stats, setStats] = useState({ correct: 0, wrong: 0 });

  if (questions.length === 0) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-16 text-center text-gray-500">
        Generating drill questions...
      </div>
    );
  }

  const handleSelect = (index: number) => {
    if (hasAnswered) return;
    setSelectedAnswer(index);
    setShowSolution(true);
    setStats(prev => ({
      correct: prev.correct + (index === current.correctAnswer ? 1 : 0),
      wrong: prev.wrong + (index !== current.correctAnswer ? 1 : 0),
    }));
  };

  const goTo = (index: number) => {
    setCurrentIndex(index);
    setSelectedAnswer(null);
    setShowSolution(false);
  };

  const restart = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setShowSolution(false);
    setStats({ correct: 0, wrong: 0 });
    onRestart?.();
  };

  if (currentIndex >= questions.length) {
    const pct = Math.round((stats.correct / questions.length) * 100);
    return (
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 text-center">
          <div className="text-6xl mb-4">{pct >= 80 ? '🏆' : pct >= 60 ? '👍' : '📚'}</div>
          <h1 className="text-2xl font-bold mb-1">Drill Complete!</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-2">{formulaName}</p>
          <div className="text-6xl font-bold text-primary-600 dark:text-primary-400 mb-8">{pct}%</div>

          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-green-50 dark:bg-green-900/50 rounded-xl p-4">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">{stats.correct}</div>
              <div className="text-sm text-green-700 dark:text-green-300">Correct</div>
            </div>
            <div className="bg-red-50 dark:bg-red-900/50 rounded-xl p-4">
              <div className="text-2xl font-bold text-red-600 dark:text-red-400">{stats.wrong}</div>
              <div className="text-sm text-red-700 dark:text-red-300">Incorrect</div>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/50 rounded-xl p-4">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{questions.length}</div>
              <div className="text-sm text-blue-700 dark:text-blue-300">Total</div>
            </div>
          </div>

          <div className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={restart}
              className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
            >
              Restart Drill
            </button>
            <button
              onClick={onExit}
              className="bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-200 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-slate-600 transition"
            >
              Choose Another Formula
            </button>
          </div>
        </div>
      </div>
    );
  }

  const current = questions[currentIndex];
  const hasAnswered = selectedAnswer !== null;
  const isCorrect = hasAnswered && selectedAnswer === current.correctAnswer;

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
        <div>
          <button onClick={onExit} className="text-primary-600 hover:underline text-sm">
            ← Formula List
          </button>
          <h1 className="text-xl lg:text-2xl font-bold mt-1">
            {formulaName} · Question {currentIndex + 1} of {questions.length}
          </h1>
        </div>
        <div className="flex gap-4 text-sm items-center">
          <span className="text-green-600 font-medium">{stats.correct} ✓</span>
          <span className="text-red-600 font-medium">{stats.wrong} ✗</span>
        </div>
      </div>

      <div className="mb-6 overflow-x-auto bg-primary-50 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-800 rounded-xl p-4">
        <span className="text-xs font-medium text-primary-700 dark:text-primary-300 mr-3">Formula:</span>
        <MathFormula formula={formula} display />
      </div>

      <div className="h-1 bg-gray-200 rounded-full mb-6">
        <div
          className="h-1 bg-primary-600 rounded-full transition-all"
          style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
        />
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border dark:border-slate-700 p-6 lg:p-8 mb-6">
        <div className="flex items-center gap-2 mb-4">
          <span className={`text-xs px-2 py-1 rounded ${
            current.difficulty === 'easy' ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300' :
            current.difficulty === 'average' ? 'bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300' :
            'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300'
          }`}>
            {current.difficulty.charAt(0).toUpperCase() + current.difficulty.slice(1)}
          </span>
          <span className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded">
            Computation Drill
          </span>
        </div>

        <h2 className="text-lg lg:text-xl font-medium mb-6 leading-relaxed whitespace-pre-line">
          <MathRenderer content={current.question} />
        </h2>

        <div className="space-y-3 lg:space-y-4">
          {current.options.map((option, index) => {
            let optionClass = 'bg-white dark:bg-slate-800 border-gray-200 dark:border-slate-700 hover:border-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/30';
            if (hasAnswered) {
              if (index === current.correctAnswer) {
                optionClass = 'bg-green-100 dark:bg-green-900 border-2 border-green-500';
              } else if (index === selectedAnswer) {
                optionClass = 'bg-red-100 dark:bg-red-900 border-2 border-red-500';
              } else {
                optionClass = 'bg-gray-50 dark:bg-slate-700/50 border-gray-200 dark:border-slate-700 opacity-60';
              }
            }
            return (
              <button
                key={index}
                onClick={() => handleSelect(index)}
                disabled={hasAnswered}
                className={`w-full text-left p-4 lg:p-5 rounded-xl border-2 transition-all ${optionClass}`}
              >
                <div className="flex items-center gap-3 lg:gap-4">
                  <span className={`w-10 h-10 lg:w-12 lg:h-12 shrink-0 rounded-full flex items-center justify-center text-sm lg:text-base font-medium ${
                    hasAnswered && index === current.correctAnswer ? 'bg-green-500 text-white' :
                    hasAnswered && index === selectedAnswer ? 'bg-red-500 text-white' :
                    'bg-gray-100 dark:bg-slate-600 text-gray-600 dark:text-gray-300'
                  }`}>
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className="text-base lg:text-lg">
                    <MathRenderer content={option} />
                  </span>
                  {hasAnswered && index === current.correctAnswer && (
                    <span className="ml-auto text-green-600 font-bold shrink-0">✓</span>
                  )}
                  {hasAnswered && index === selectedAnswer && index !== current.correctAnswer && (
                    <span className="ml-auto text-red-600 font-bold shrink-0">✗</span>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {showSolution && (
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border dark:border-slate-700 p-6 lg:p-8 mb-6">
          <div className={`mb-4 p-4 rounded-xl ${
            isCorrect ? 'bg-green-50 dark:bg-green-900/50 border border-green-200 dark:border-green-800' : 'bg-red-50 dark:bg-red-900/50 border border-red-200 dark:border-red-800'
          }`}>
            <h3 className={`font-semibold text-lg mb-2 ${isCorrect ? 'text-green-800 dark:text-green-300' : 'text-red-800 dark:text-red-300'}`}>
              {isCorrect ? '✓ Correct!' : '✗ Incorrect'}
            </h3>
            <p className="text-sm">
              <span className="font-medium">Correct Answer: </span>
              <span className={isCorrect ? 'text-green-700' : 'text-green-600 font-medium'}>
                {current.options[current.correctAnswer]}
              </span>
            </p>
          </div>

          {current.solution.given && (
            <div className="mb-4">
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">📋 Given</h4>
              <div className="bg-gray-50 dark:bg-slate-700/50 rounded-xl p-4 text-sm whitespace-pre-line text-gray-700 dark:text-gray-200">
                {current.solution.given}
              </div>
            </div>
          )}

          {current.solution.formula && (
            <div className="mb-4">
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">📐 Formula</h4>
              <div className="bg-primary-50 dark:bg-primary-900/30 rounded-xl p-4 flex justify-center overflow-x-auto">
                <MathFormula formula={current.solution.formula} display />
              </div>
            </div>
          )}

          {current.solution.steps && current.solution.steps.length > 0 && (
            <div className="mb-4">
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">🔢 Substitute &amp; Solve</h4>
              <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4">
                <ul className="space-y-2">
                  {current.solution.steps.map((step, index) => (
                    <li key={index} className="flex gap-3 text-sm">
                      <span className="w-6 h-6 bg-blue-200 text-blue-800 rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0 mt-0.5">
                        {index + 1}
                      </span>
                      <span className="text-gray-700 dark:text-gray-200 leading-relaxed whitespace-pre-line">
                        <MathRenderer content={step} />
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {current.solution.keyConcept && (
            <div className="mb-4">
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">💡 Key Concept</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm bg-gray-50 dark:bg-slate-700/50 p-3 rounded-lg">
                {current.solution.keyConcept}
              </p>
            </div>
          )}

          {current.solution.commonMistakes && current.solution.commonMistakes.length > 0 && (
            <div className="mb-4">
              <h4 className="font-semibold text-amber-800 dark:text-amber-300 mb-2">⚠️ Common Mistakes to Avoid</h4>
              <ul className="space-y-1">
                {current.solution.commonMistakes.map((mistake, index) => (
                  <li key={index} className="text-sm text-amber-700 dark:text-amber-300 flex items-center gap-2">
                    <span className="text-amber-500">•</span>
                    {mistake}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {hasAnswered && (
        <div className="mt-6 flex justify-between">
          <button
            onClick={() => goTo(currentIndex - 1)}
            disabled={currentIndex === 0}
            className="bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-200 px-4 sm:px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-slate-600 transition disabled:opacity-50 text-sm sm:text-base"
          >
            ← Previous
          </button>
          <button
            onClick={() => goTo(currentIndex + 1)}
            className="bg-primary-600 text-white px-4 sm:px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition text-sm sm:text-base"
          >
            {currentIndex < questions.length - 1 ? 'Next Question →' : 'See Results'}
          </button>
        </div>
      )}
    </div>
  );
}
