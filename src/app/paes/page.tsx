'use client';

import { useState, useMemo, useCallback } from 'react';
import Link from 'next/link';
import { paesSubcategories, getPaesStandardsByArea } from '@/data/paes-data';
import { generateQuestionsForStandard } from '@/data/paes-content-questions';
import type { Question, Area } from '@/data/comprehensive-questions';
import { shuffleQuestions } from '@/lib/shuffle';
import { MathRenderer, MathFormula } from '@/lib/math-renderer';

const areaMeta: Record<Area, { label: string; color: string; bg: string; border: string }> = {
  A: { label: 'Power, Energy & Machinery', color: 'bg-primary-600', bg: 'bg-primary-50 dark:bg-primary-900/30', border: 'border-primary-200 dark:border-primary-800' },
  B: { label: 'Land & Water Resources', color: 'bg-green-600', bg: 'bg-green-50 dark:bg-green-900/30', border: 'border-green-200 dark:border-green-800' },
  C: { label: 'Structures, Environment & Bioprocess', color: 'bg-amber-600', bg: 'bg-amber-50 dark:bg-amber-900/30', border: 'border-amber-200 dark:border-amber-800' },
};

export default function PaesPage() {
  const [selectedArea, setSelectedArea] = useState<Area>('A');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
  const [selectedStandard, setSelectedStandard] = useState<string | null>(null);
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showSolution, setShowSolution] = useState(false);
  const [sessionStats, setSessionStats] = useState({ correct: 0, wrong: 0 });
  const [showFormula, setShowFormula] = useState(false);
  const [flaggedQuestions, setFlaggedQuestions] = useState<number[]>([]);

  const subcategories = useMemo(() => getPaesStandardsByArea(selectedArea), [selectedArea]);

  const standards = useMemo(() => {
    if (!selectedSubcategory) return [];
    const cat = subcategories.find(s => s.name === selectedSubcategory);
    return cat ? cat.standards : [];
  }, [subcategories, selectedSubcategory]);

  const selectedStd = useMemo(() => {
    if (!selectedStandard) return null;
    for (const cat of paesSubcategories) {
      const found = cat.standards.find(s => s.id === selectedStandard);
      if (found) return found;
    }
    return null;
  }, [selectedStandard]);

  const [loadingQuestions, setLoadingQuestions] = useState(false);

  const startQuiz = useCallback(async () => {
    if (!selectedStd) return;
    setLoadingQuestions(true);
    setQuizStarted(true);
    try {
      const questions = await generateQuestionsForStandard(selectedStd.id);
      const shuffled = shuffleQuestions(questions);
      setQuizQuestions(shuffled);
      setCurrentIndex(0);
      setSelectedAnswer(null);
      setShowSolution(false);
      setSessionStats({ correct: 0, wrong: 0 });
      setFlaggedQuestions([]);
    } finally {
      setLoadingQuestions(false);
    }
  }, [selectedStd]);

  if (quizStarted && quizQuestions.length > 0 && !loadingQuestions) {
    return (
      <QuizView
        questions={quizQuestions}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        selectedAnswer={selectedAnswer}
        setSelectedAnswer={setSelectedAnswer}
        showSolution={showSolution}
        setShowSolution={setShowSolution}
        sessionStats={sessionStats}
        setSessionStats={setSessionStats}
        showFormula={showFormula}
        setShowFormula={setShowFormula}
        flaggedQuestions={flaggedQuestions}
        setFlaggedQuestions={setFlaggedQuestions}
        onBack={() => { setQuizStarted(false); setCurrentIndex(0); }}
        standardLabel={`${selectedStd?.id}: ${selectedStd?.title}`}
      />
    );
  }

  if (quizStarted && loadingQuestions) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-8 text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600 mx-auto mb-3" />
        <p className="text-gray-500">Loading questions from PAES standard content...</p>
      </div>
    );
  }

  if (quizStarted) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-8 text-center">
        <p className="text-gray-500">No questions available for this standard.</p>
        <button onClick={() => setQuizStarted(false)} className="mt-4 text-primary-600 hover:underline">← Back</button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href="/" className="text-primary-600 hover:underline text-sm">← Home</Link>
        <h1 className="text-2xl font-bold mt-1">PAES Standards Study</h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
          Philippine Agricultural Engineering Standards — 100 questions per standard
        </p>
      </div>

      {/* Area tabs */}
      <div className="flex gap-2 mb-6">
        {(Object.keys(areaMeta) as Area[]).map(area => (
          <button
            key={area}
            onClick={() => { setSelectedArea(area); setSelectedSubcategory(null); setSelectedStandard(null); }}
            className={`px-5 py-2 rounded-lg text-sm font-medium transition ${
              selectedArea === area
                ? 'bg-primary-600 text-white shadow'
                : 'bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700'
            }`}
          >
            Area {area}: {areaMeta[area].label.split(' ')[0]}
          </button>
        ))}
      </div>

      <div className="grid lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          {/* Subcategory tabs */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border dark:border-slate-700 p-3 mb-4">
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Categories</h3>
            <div className="space-y-1">
              {subcategories.map(cat => (
                <button
                  key={cat.name}
                  onClick={() => { setSelectedSubcategory(cat.name); setSelectedStandard(null); }}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition ${
                    selectedSubcategory === cat.name
                      ? 'bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 font-medium'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-slate-700/50'
                  }`}
                >
                  {cat.name}
                  <span className="text-xs ml-1 text-gray-400">({cat.standards.length})</span>
                </button>
              ))}
            </div>
          </div>

          {/* Standard list */}
          {selectedSubcategory && (
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border dark:border-slate-700 p-3">
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Standards</h3>
              <div className="space-y-1 max-h-80 overflow-y-auto">
                {standards.map(std => (
                  <button
                    key={std.id}
                    onClick={() => setSelectedStandard(std.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition ${
                      selectedStandard === std.id
                        ? 'bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 font-medium'
                        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-slate-700/50'
                    }`}
                  >
                    <span className="font-mono text-xs">{std.id}</span>
                    <span className="block text-xs truncate">{std.title}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Main content */}
        <div className="lg:col-span-3">
          {selectedStd ? (
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border dark:border-slate-700 p-6 lg:p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-12 h-12 ${areaMeta[selectedStd.area].color} rounded-xl flex items-center justify-center text-white font-bold shrink-0`}>
                  {selectedStd.area}
                </div>
                <div className="min-w-0">
                  <h2 className="text-xl font-bold mb-1">
                    <span className="font-mono text-primary-600">{selectedStd.id}</span>: {selectedStd.title}
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {selectedStd.subcategory} • Established {selectedStd.year}
                    {selectedStd.id.startsWith('PNS') ? ' • Philippine National Standard' : ''}
                  </p>
                </div>
              </div>

              <div className={`${areaMeta[selectedStd.area].bg} ${areaMeta[selectedStd.area].border} rounded-xl p-4 mb-6`}>
                <p className="text-sm">{selectedStd.description}</p>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-xl p-4 mb-6">
                <h3 className="font-semibold text-blue-800 dark:text-blue-300 text-sm mb-2">About this standard</h3>
                <ul className="text-xs text-blue-700 dark:text-blue-300 space-y-1">
                  <li>• 100 multiple-choice questions generated from this standard</li>
                  <li>• Covers scope, requirements, application, and year of establishment</li>
                  <li>• Questions include theory and applied knowledge</li>
                </ul>
              </div>

              <button
                onClick={startQuiz}
                className="w-full bg-primary-600 text-white py-3 rounded-xl font-semibold hover:bg-primary-700 transition text-lg"
              >
                Start Quiz — 100 Questions
              </button>
            </div>
          ) : (
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border dark:border-slate-700 p-12 text-center">
              <div className="text-5xl mb-4 text-gray-300 dark:text-gray-600">📋</div>
              <h2 className="text-xl font-semibold mb-2 text-gray-500 dark:text-gray-400">
                {selectedSubcategory ? 'Select a standard' : 'Select a category and standard'}
              </h2>
              <p className="text-sm text-gray-400 dark:text-gray-500">
                Choose a PAES or PNS standard from the sidebar to start studying.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function QuizView({
  questions, currentIndex, setCurrentIndex,
  selectedAnswer, setSelectedAnswer, showSolution, setShowSolution,
  sessionStats, setSessionStats, showFormula, setShowFormula,
  flaggedQuestions, setFlaggedQuestions, onBack, standardLabel,
}: {
  questions: Question[]; currentIndex: number; setCurrentIndex: (i: number) => void;
  selectedAnswer: number | null; setSelectedAnswer: (i: number | null) => void;
  showSolution: boolean; setShowSolution: (s: boolean) => void;
  sessionStats: { correct: number; wrong: number }; setSessionStats: (s: { correct: number; wrong: number }) => void;
  showFormula: boolean; setShowFormula: (s: boolean) => void;
  flaggedQuestions: number[]; setFlaggedQuestions: (f: number[]) => void;
  onBack: () => void; standardLabel: string;
}) {
  const currentQuestion = questions[currentIndex];
  const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
  const hasAnswered = selectedAnswer !== null;

  const handleSelectAnswer = (index: number) => {
    if (hasAnswered) return;
    setSelectedAnswer(index);
    setShowSolution(true);
    setSessionStats({
      correct: sessionStats.correct + (index === currentQuestion.correctAnswer ? 1 : 0),
      wrong: sessionStats.wrong + (index !== currentQuestion.correctAnswer ? 1 : 0),
    });
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer(null);
      setShowSolution(false);
    } else {
      setCurrentIndex(questions.length);
    }
  };

  const toggleFlag = () => {
    setFlaggedQuestions(
      flaggedQuestions.includes(currentIndex)
        ? flaggedQuestions.filter(i => i !== currentIndex)
        : [...flaggedQuestions, currentIndex]
    );
  };

  if (currentIndex >= questions.length) {
    const percentage = Math.round((sessionStats.correct / questions.length) * 100);
    return (
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 text-center">
          <div className="text-6xl mb-4">
            {percentage >= 70 ? '🎉' : percentage >= 50 ? '👍' : '📚'}
          </div>
          <h1 className="text-2xl font-bold mb-1">Quiz Complete!</h1>
          <p className="text-sm text-gray-500 mb-2">{standardLabel}</p>
          <div className="text-6xl font-bold text-primary-600 mb-8">{percentage}%</div>
          <div className="grid grid-cols-3 gap-4 mb-8 max-w-xs mx-auto">
            <div className="bg-green-50 dark:bg-green-900/50 rounded-xl p-4">
              <div className="text-2xl font-bold text-green-600">{sessionStats.correct}</div>
              <div className="text-xs text-green-700">Correct</div>
            </div>
            <div className="bg-red-50 dark:bg-red-900/50 rounded-xl p-4">
              <div className="text-2xl font-bold text-red-600">{sessionStats.wrong}</div>
              <div className="text-xs text-red-700">Incorrect</div>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/50 rounded-xl p-4">
              <div className="text-2xl font-bold text-blue-600">{questions.length}</div>
              <div className="text-xs text-blue-700">Total</div>
            </div>
          </div>
          <button onClick={onBack} className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition">
            ← Back to Standards
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <button onClick={onBack} className="text-primary-600 hover:underline text-sm">← Standards</button>
          <h1 className="text-lg font-bold mt-1">
            {standardLabel} — {currentIndex + 1}/{questions.length}
          </h1>
        </div>
        <div className="flex gap-3 items-center text-sm">
          <span className="text-green-600 font-medium">{sessionStats.correct} ✓</span>
          <span className="text-red-600 font-medium">{sessionStats.wrong} ✗</span>
          <button onClick={toggleFlag} className={`${flaggedQuestions.includes(currentIndex) ? 'text-amber-600' : 'text-gray-400'} hover:text-amber-500`}>
            {flaggedQuestions.includes(currentIndex) ? '★ Flagged' : '☆ Flag'}
          </button>
          <button onClick={() => setShowFormula(!showFormula)} className="text-primary-600 hover:text-primary-700 text-xs">
            📐 Formula
          </button>
        </div>
      </div>

      <div className="h-1 bg-gray-200 rounded-full mb-6">
        <div className="h-1 bg-primary-600 rounded-full transition-all" style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }} />
      </div>

      <div className="grid lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border dark:border-slate-700 p-6 lg:p-8 mb-6">
            <div className="flex items-center gap-2 mb-4">
              <span className={`text-xs px-2 py-1 rounded ${
                currentQuestion.difficulty === 'easy' ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300' :
                currentQuestion.difficulty === 'average' ? 'bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300' :
                'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300'
              }`}>
                {currentQuestion.difficulty.charAt(0).toUpperCase() + currentQuestion.difficulty.slice(1)}
              </span>
              <span className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded">
                {currentQuestion.topic}
              </span>
            </div>

            <h2 className="text-lg lg:text-xl font-medium mb-6 leading-relaxed">
              <MathRenderer content={currentQuestion.question} />
            </h2>

            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => {
                let optionClass = 'bg-white dark:bg-slate-800 border-gray-200 dark:border-slate-700 hover:border-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/30';
                if (hasAnswered) {
                  if (index === currentQuestion.correctAnswer) optionClass = 'bg-green-100 dark:bg-green-900 border-2 border-green-500';
                  else if (index === selectedAnswer) optionClass = 'bg-red-100 dark:bg-red-900 border-2 border-red-500';
                  else optionClass = 'bg-gray-50 dark:bg-slate-700/50 border-gray-200 dark:border-slate-700 opacity-60';
                }
                return (
                  <button key={index} onClick={() => handleSelectAnswer(index)} disabled={hasAnswered}
                    className={`w-full text-left p-4 rounded-xl border-2 transition ${optionClass}`}>
                    <div className="flex items-center gap-3">
                      <span className={`w-10 h-10 shrink-0 rounded-full flex items-center justify-center text-sm font-medium ${
                        hasAnswered && index === currentQuestion.correctAnswer ? 'bg-green-500 text-white' :
                        hasAnswered && index === selectedAnswer ? 'bg-red-500 text-white' :
                        'bg-gray-100 dark:bg-slate-600 text-gray-600 dark:text-gray-300'
                      }`}>
                        {String.fromCharCode(65 + index)}
                      </span>
                      <span className="text-base"><MathRenderer content={option} /></span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Solution */}
          {showSolution && (
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border dark:border-slate-700 p-6 lg:p-8">
              <div className={`mb-4 p-4 rounded-xl ${isCorrect ? 'bg-green-50 dark:bg-green-900/50 border border-green-200' : 'bg-red-50 dark:bg-red-900/50 border border-red-200'}`}>
                <h3 className={`font-semibold text-lg ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
                  {isCorrect ? '✓ Correct!' : '✗ Incorrect'}
                </h3>
                <p className="text-sm mt-1">
                  <span className="font-medium">Correct Answer: </span>
                  <span className={isCorrect ? '' : 'text-green-600 font-medium'}>
                    {currentQuestion.options[currentQuestion.correctAnswer]}
                  </span>
                </p>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">💡 Key Concept</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm bg-gray-50 dark:bg-slate-700/50 p-3 rounded-lg">
                  {currentQuestion.solution.keyConcept}
                </p>
              </div>

              {currentQuestion.solution.given && (
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">📋 Given</h4>
                  <div className="bg-gray-50 dark:bg-slate-700/50 rounded-xl p-4 text-sm whitespace-pre-line">
                    {currentQuestion.solution.given}
                  </div>
                </div>
              )}

              {currentQuestion.solution.formula && (
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">📐 Formula</h4>
                  <div className="bg-primary-50 dark:bg-primary-900/30 rounded-xl p-4 flex justify-center overflow-x-auto">
                    <MathFormula formula={currentQuestion.solution.formula} display />
                  </div>
                </div>
              )}

              {currentQuestion.solution.steps.length > 0 && (
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">🔢 Solution</h4>
                  <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4">
                    <ul className="space-y-2">
                      {currentQuestion.solution.steps.map((step, i) => (
                        <li key={i} className="flex gap-3 text-sm">
                          <span className="w-6 h-6 bg-blue-200 text-blue-800 rounded-full flex items-center justify-center text-xs font-medium shrink-0 mt-0.5">{i + 1}</span>
                          <span className="text-gray-700 dark:text-gray-200"><MathRenderer content={step} /></span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {currentQuestion.weakPoints && (
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">📚 Topics</h4>
                  <div className="flex flex-wrap gap-2">
                    {currentQuestion.weakPoints.map((wp, i) => (
                      <span key={i} className="bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-200 px-3 py-1 rounded-full text-sm">{wp}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Formula sidebar (mobile) */}
          {showFormula && (
            <div className="lg:hidden bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-xl p-4 mb-6">
              <h4 className="font-medium text-blue-800 dark:text-blue-300 mb-2">📐 Formula</h4>
              {currentQuestion.solution.formula ? <MathFormula formula={currentQuestion.solution.formula} display /> : <span className="text-blue-700 text-sm">No specific formula</span>}
            </div>
          )}
        </div>

        {/* Desktop sidebar */}
        <div className="hidden lg:block lg:col-span-1">
          {showFormula ? (
            <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-xl p-4 sticky top-4">
              <h4 className="font-medium text-blue-800 dark:text-blue-300 mb-3">📐 Formula</h4>
              {currentQuestion.solution.formula ? <MathFormula formula={currentQuestion.solution.formula} display /> : <span className="text-blue-700 text-sm">No specific formula</span>}
            </div>
          ) : (
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border dark:border-slate-700 p-4">
              <h3 className="font-semibold mb-3 text-sm">Navigator</h3>
              <div className="grid grid-cols-5 gap-1 max-h-96 overflow-y-auto">
                {questions.map((q, i) => (
                  <button key={i} onClick={() => { setCurrentIndex(i); setSelectedAnswer(null); setShowSolution(false); }}
                    className={`w-8 h-8 rounded text-xs font-medium ${
                      i === currentIndex ? 'bg-primary-600 text-white' :
                      flaggedQuestions.includes(i) ? 'bg-amber-200 dark:bg-amber-800 text-amber-800' :
                      'bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200'
                    }`}>
                    {i + 1}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Nav buttons */}
        <div className="lg:col-span-4">
          {hasAnswered && (
            <div className="mt-6 flex justify-between">
              <button onClick={() => { if (currentIndex > 0) { setCurrentIndex(currentIndex - 1); setSelectedAnswer(null); setShowSolution(false); }}}
                disabled={currentIndex === 0}
                className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition disabled:opacity-50">
                ← Previous
              </button>
              <button onClick={handleNext}
                className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition">
                {currentIndex < questions.length - 1 ? 'Next Question →' : 'See Results'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
