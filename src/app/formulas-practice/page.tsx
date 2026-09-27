'use client';

import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { formulaPracticeProblems, formulaPracticeByFormula, formulaPracticeAreaAProblems, formulaPracticeAreaBProblems, formulaPracticeAreaCProblems } from '@/data/formulas-practice';
import { areaFormulas } from '@/data/formulas';
import type { FormulaPracticeProblem } from '@/data/formulas-practice';
import { MathRenderer, MathFormula } from '@/lib/math-renderer';

function FormulaPracticeContent() {
  const [selectedArea, setSelectedArea] = useState<'A' | 'B' | 'C'>('A');
  const [selectedTopic, setSelectedTopic] = useState<string>('');
  const [selectedFormula, setSelectedFormula] = useState<string>('');
  const [formulaProblems, setFormulaProblems] = useState<FormulaPracticeProblem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showSolution, setShowSolution] = useState(false);
  const [sessionStats, setSessionStats] = useState({ correct: 0, wrong: 0 });
  const [completedFormulas, setCompletedFormulas] = useState<string[]>([]);

  const currentAreaFormulas = areaFormulas.find(f => f.areaCode === selectedArea);
  const topics = currentAreaFormulas?.topics || [];
  const currentTopic = topics.find(t => t.topic === selectedTopic);
  const formulas = currentTopic?.formulas || [];
  const currentFormula = formulas.find(f => f.name === selectedFormula);

  // Load progress from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('formula-practice-completed');
    if (saved) {
      try {
        setCompletedFormulas(JSON.parse(saved));
      } catch {
        setCompletedFormulas([]);
      }
    }
  }, []);

  const saveCompleted = (baseFormulaId: string) => {
    // Find all 4-part formula IDs that match this base formula ID
    const matchingIds = Object.keys(formulaPracticeByFormula).filter(key => key.startsWith(baseFormulaId + '-'));
    const newCompleted = [...new Set([...completedFormulas, ...matchingIds])];
    setCompletedFormulas(newCompleted);
    localStorage.setItem('formula-practice-completed', JSON.stringify(newCompleted));
  };

  const handleAreaChange = (area: 'A' | 'B' | 'C') => {
    setSelectedArea(area);
    setSelectedTopic('');
    setSelectedFormula('');
    setFormulaProblems([]);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setShowSolution(false);
    setSessionStats({ correct: 0, wrong: 0 });
  };

  const handleTopicChange = (topic: string) => {
    setSelectedTopic(topic);
    setSelectedFormula('');
    setFormulaProblems([]);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setShowSolution(false);
    setSessionStats({ correct: 0, wrong: 0 });
  };

  const getBaseFormulaId = (area: string, topicIndex: number, formulaIndex: number) => {
    return `${area}-${topicIndex}-${formulaIndex}`;
  };

  const getProblemsForFormula = (baseFormulaId: string) => {
    return Object.entries(formulaPracticeByFormula)
      .filter(([key]) => key.startsWith(baseFormulaId + '-'))
      .flatMap(([, v]) => v);
  };

  const isFormulaCompleted = (formulaName: string) => {
    const baseFormulaId = getBaseFormulaId(
      selectedArea,
      topics.findIndex(t => t.topic === selectedTopic),
      formulas.findIndex(f => f.name === formulaName)
    );
    return completedFormulas.some(id => id.startsWith(baseFormulaId + '-'));
  };

  const getAreaProgress = (areaCode: string) => {
    const areaData = areaFormulas.find(f => f.areaCode === areaCode);
    if (!areaData) return { completed: 0, total: 0 };
    let total = 0;
    let completed = 0;
    areaData.topics.forEach((topic, tIdx) => {
      topic.formulas.forEach((formula, fIdx) => {
        total++;
        const baseFormulaId = getBaseFormulaId(areaCode, tIdx, fIdx);
        if (completedFormulas.some(id => id.startsWith(baseFormulaId + '-'))) completed++;
      });
    });
    return { completed, total };
  };

  const handleFormulaChange = (formulaName: string) => {
    setSelectedFormula(formulaName);
    const baseFormulaId = getBaseFormulaId(
      selectedArea,
      topics.findIndex(t => t.topic === selectedTopic),
      formulas.findIndex(f => f.name === formulaName)
    );
    const problems = getProblemsForFormula(baseFormulaId);
    setFormulaProblems(problems);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setShowSolution(false);
    setSessionStats({ correct: 0, wrong: 0 });
  };

  if (!currentFormula) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Area Selector */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Formula Practice</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Practice board-exam style word problems for each formula. 10 problems per formula.
          </p>

          <div className="flex gap-4 mb-8">
            {areaFormulas.map(area => {
              const progress = getAreaProgress(area.areaCode);
              const pct = progress.total > 0 ? Math.round((progress.completed / progress.total) * 100) : 0;
              return (
                <button
                  key={area.areaCode}
                  onClick={() => handleAreaChange(area.areaCode as 'A' | 'B' | 'C')}
                  className={`flex-1 px-6 py-4 rounded-xl border-2 transition ${
                    selectedArea === area.areaCode
                      ? `${area.color === 'primary' ? 'border-primary-500' : area.color === 'green' ? 'border-green-500' : 'border-amber-500'} bg-white dark:bg-slate-700 shadow`
                      : 'border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-800 hover:border-primary-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-lg">
                      Area {area.areaCode}
                    </span>
                    <span className="text-sm text-gray-500">{pct}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden">
                    <div className={`h-full rounded-full transition-all ${area.color === 'primary' ? 'bg-primary-600' : area.color === 'green' ? 'bg-green-600' : 'bg-amber-600'}`}
                      style={{ width: `${pct}%` }} />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    {progress.completed}/{progress.total} formulas completed
                  </p>
                </button>
              );
            })}
          </div>

          {/* Topic Selector */}
          {currentAreaFormulas && (
            <div>
              <h3 className="text-xl font-bold mb-4">Select Topic</h3>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {topics.map((topic, tIdx) => {
                  const formulaCount = topic.formulas.length;
                  const topicCompleted = topic.formulas.filter((f, fIdx) => {
                    const baseFormulaId = getBaseFormulaId(selectedArea, tIdx, fIdx);
                    return completedFormulas.some(id => id.startsWith(baseFormulaId + '-'));
                  }).length;
                  const pct = formulaCount > 0 ? Math.round((topicCompleted / formulaCount) * 100) : 0;
                  const areaColor = currentAreaFormulas.color;
                  return (
                    <button
                      key={topic.topic}
                      onClick={() => handleTopicChange(topic.topic)}
                      className={`p-4 rounded-xl border-2 transition text-left ${
                        selectedTopic === topic.topic
                          ? `${areaColor === 'primary' ? 'border-primary-500' : areaColor === 'green' ? 'border-green-500' : 'border-amber-500'} bg-white dark:bg-slate-700 shadow`
                          : 'border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-800 hover:border-primary-300'
                      }`}
                    >
                      <h4 className="font-semibold mb-2">{topic.topic}</h4>
                      <p className="text-sm text-gray-500 mb-2">{formulaCount} formulas</p>
                      <div className="h-1.5 bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden">
                        <div className={`h-full rounded-full transition-all ${areaColor === 'primary' ? 'bg-primary-600' : areaColor === 'green' ? 'bg-green-600' : 'bg-amber-600'}`}
                          style={{ width: `${pct}%` }} />
                      </div>
                      <p className="text-xs text-gray-500 mt-1">{topicCompleted}/{formulaCount} completed</p>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  const currentProblem = formulaProblems[currentIndex];
  const isCorrect = selectedAnswer === currentProblem.correctAnswer;
  const hasAnswered = selectedAnswer !== null;
  const isComplete = currentIndex >= formulaProblems.length;

  const handleSelectAnswer = (index: number) => {
    if (hasAnswered) return;
    setSelectedAnswer(index);
    setShowSolution(true);
    setSessionStats(prevStats => ({
      ...prevStats,
      correct: prevStats.correct + (index === currentProblem.correctAnswer ? 1 : 0),
      wrong: prevStats.wrong + (index !== currentProblem.correctAnswer ? 1 : 0)
    }));
  };

  const handleNext = () => {
    if (currentIndex < formulaProblems.length - 1) {
      setCurrentIndex(prevIndex => prevIndex + 1);
      setSelectedAnswer(null);
      setShowSolution(false);
    } else {
      // Session complete
      const baseFormulaId = getBaseFormulaId(
        selectedArea,
        topics.findIndex(t => t.topic === selectedTopic),
        formulas.findIndex(f => f.name === selectedFormula)
      );
      saveCompleted(baseFormulaId);
      setCurrentIndex(formulaProblems.length);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevIndex => prevIndex - 1);
      setSelectedAnswer(null);
      setShowSolution(false);
    }
  };

  if (isComplete) {
    const percentage = Math.round((sessionStats.correct / formulaProblems.length) * 100);
    
    return (
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 text-center">
          <div className="text-6xl mb-4">
            {percentage >= 70 ? '🎉 Mastered!' : percentage >= 50 ? '👍 Good Progress!' : '📚 Keep Practicing!'}
          </div>
          <h1 className="text-2xl font-bold mb-2">{selectedFormula}</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6">{selectedTopic} • Area {selectedArea}</p>

          <div className="text-6xl font-bold text-primary-600 dark:text-primary-400 mb-8">{percentage}%</div>

          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-green-50 dark:bg-green-900/50 rounded-xl p-4">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">{sessionStats.correct}</div>
              <div className="text-sm text-green-700 dark:text-green-300">Correct</div>
            </div>
            <div className="bg-red-50 dark:bg-red-900/50 rounded-xl p-4">
              <div className="text-2xl font-bold text-red-600 dark:text-red-400">{sessionStats.wrong}</div>
              <div className="text-sm text-red-700 dark:text-red-300">Incorrect</div>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/50 rounded-xl p-4">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{formulaProblems.length}</div>
              <div className="text-sm text-blue-700 dark:text-blue-300">Total</div>
            </div>
          </div>

          <div className="flex gap-4 justify-center">
            <button
              onClick={() => { setCurrentIndex(0); setSessionStats({ correct: 0, wrong: 0 }); setShowSolution(false); setSelectedAnswer(null); }}
              className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
            >
              Retry This Formula
            </button>
            <button
              onClick={() => { setSelectedFormula(''); setFormulaProblems([]); setSessionStats({ correct: 0, wrong: 0 }); }}
              className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
            >
              Choose Another Formula
            </button>
          </div>
        </div>
      </div>
    );
  }

  const percentage = Math.round(((currentIndex + 1) / formulaProblems.length) * 100);

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <button onClick={() => handleAreaChange('A')} className="text-primary-600 hover:underline text-sm">← Formula Practice</button>
            <span className="text-gray-300 hidden sm:inline">/</span>
            <button onClick={() => handleTopicChange(selectedTopic)} className="text-primary-600 hover:underline text-sm">{selectedTopic}</button>
            <span className="text-gray-300 hidden sm:inline">/</span>
            <span className="text-sm text-gray-500">{selectedFormula}</span>
          </div>
          <h1 className="text-xl lg:text-2xl font-bold mt-1">
            Problem {currentIndex + 1} of {formulaProblems.length}
          </h1>
        </div>
        <div className="flex gap-3 sm:gap-4 text-sm items-center">
          <span className="text-green-600 font-medium">{sessionStats.correct} ✓</span>
          <span className="text-red-600 font-medium">{sessionStats.wrong} ✗</span>
          <div className="h-4 w-32 bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden">
            <div className="h-full bg-primary-600 rounded-full transition-all" style={{ width: `${percentage}%` }} />
          </div>
        </div>
      </div>

      {/* Formula Reference Card */}
      <div className="bg-primary-50 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-800 rounded-xl p-4 lg:p-6 mb-6 overflow-x-auto">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs px-2 py-1 rounded bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300">
                Area {selectedArea}
              </span>
              <span className="text-xs text-gray-500">{selectedTopic}</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">{currentFormula.name}</h3>
            <div className="flex justify-center overflow-x-auto">
              <MathFormula formula={currentFormula.formula} display />
            </div>
            <div className="mt-2 grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-1 text-xs text-gray-600 dark:text-gray-400">
              {currentFormula.variables.map(v => (
                <div key={v.symbol}>
                  <span className="font-mono font-semibold">{v.symbol}</span> — {v.meaning}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 gap-6">
        {/* Question Area */}
        <div className="lg:col-span-3">
          {/* Question Card */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border dark:border-slate-700 p-6 lg:p-8 mb-6">
            <div className="flex items-center gap-2 mb-4">
              <span className={`text-xs px-2 py-1 rounded ${
                currentProblem.difficulty === 'easy' ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300' :
                currentProblem.difficulty === 'average' ? 'bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300' :
                'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300'
              }`}>
                {currentProblem.difficulty.charAt(0).toUpperCase() + currentProblem.difficulty.slice(1)}
              </span>
            </div>

            <h2 className="text-lg lg:text-xl font-medium mb-6 leading-relaxed">
              <MathRenderer content={currentProblem.problem} />
            </h2>

            <div className="space-y-3 lg:space-y-4">
              {currentProblem.options.map((option, index) => {
                let optionClass = 'bg-white dark:bg-slate-800 border-gray-200 dark:border-slate-700 hover:border-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/30';
                if (hasAnswered) {
                  if (index === currentProblem.correctAnswer) {
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
                    onClick={() => handleSelectAnswer(index)}
                    disabled={hasAnswered}
                    className={`w-full text-left p-4 lg:p-5 rounded-xl border-2 transition-all ${optionClass}`}
                  >
                    <div className="flex items-center gap-3 lg:gap-4">
                      <span className={`w-10 h-10 lg:w-12 lg:h-12 shrink-0 rounded-full flex items-center justify-center text-sm lg:text-base font-medium ${
                        hasAnswered && index === currentProblem.correctAnswer ? 'bg-green-500 text-white' :
                        hasAnswered && index === selectedAnswer ? 'bg-red-500 text-white' :
                        'bg-gray-100 dark:bg-slate-600 text-gray-600 dark:text-gray-300'
                      }`}>
                        {String.fromCharCode(65 + index)}
                      </span>
                      <span className="text-base lg:text-lg">
                        <MathRenderer content={option} />
                      </span>
                      {hasAnswered && index === currentProblem.correctAnswer && (
                        <span className="ml-auto text-green-600 font-bold shrink-0">✓</span>
                      )}
                      {hasAnswered && index === selectedAnswer && index !== currentProblem.correctAnswer && (
                        <span className="ml-auto text-red-600 font-bold shrink-0">✗</span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Solution Panel */}
          {showSolution && (
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border dark:border-slate-700 p-6 lg:p-8">
              <div className={`mb-4 p-4 rounded-xl ${
                isCorrect ? 'bg-green-50 dark:bg-green-900/50 border border-green-200 dark:border-green-800' : 'bg-red-50 dark:bg-red-900/50 border border-red-200 dark:border-red-800'
              }`}>
                <h3 className={`font-semibold text-lg mb-2 ${isCorrect ? 'text-green-800 dark:text-green-300' : 'text-red-800 dark:text-red-300'}`}>
                  {isCorrect ? '✓ Correct!' : '✗ Incorrect'}
                </h3>
                <p className="text-sm">
                  <span className="font-medium">Correct Answer: </span>
                  <span className={isCorrect ? 'text-green-700' : 'text-green-600 font-medium'}>
                    {currentProblem.options[currentProblem.correctAnswer]}
                  </span>
                </p>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">💡 Key Concept</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm bg-gray-50 dark:bg-slate-700/50 p-3 rounded-lg">
                  {currentProblem.solution.keyConcept}
                </p>
              </div>

              {currentProblem.solution.given && (
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">📋 Given</h4>
                  <div className="bg-gray-50 dark:bg-slate-700/50 rounded-xl p-4 text-sm">
                    <p className="text-gray-700 dark:text-gray-200 whitespace-pre-line">
                      {currentProblem.solution.given}
                    </p>
                  </div>
                </div>
              )}

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">📐 Formula</h4>
                <div className="bg-primary-50 dark:bg-primary-900/30 rounded-xl p-4 flex justify-center overflow-x-auto">
                  <MathFormula formula={currentProblem.solution.formula} display />
                </div>
              </div>

              {currentProblem.solution.steps && currentProblem.solution.steps.length > 0 && (
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    🔢 {currentProblem.solution.steps.length > 1 ? 'Substitute & Solve' : 'Solve'}
                  </h4>
                  <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4">
                    <ul className="space-y-2">
                      {currentProblem.solution.steps.map((step, index) => (
                        <li key={index} className="flex gap-3 text-sm">
                          <span className="w-6 h-6 bg-blue-200 text-blue-800 rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0 mt-0.5">
                            {index + 1}
                          </span>
                          <span className="text-gray-700 dark:text-gray-200 leading-relaxed">
                            <MathRenderer content={step} />
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {currentProblem.solution.commonMistakes && (
                <div className="mb-4">
                  <h4 className="font-semibold text-amber-800 dark:text-amber-300 mb-2">⚠️ Common Mistakes to Avoid</h4>
                  <ul className="space-y-1">
                    {currentProblem.solution.commonMistakes.map((mistake, index) => (
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
        </div>

        {/* Right Sidebar: Formula Reference */}
        <div className="hidden lg:block lg:col-span-1">
          <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-xl p-4 lg:p-6 sticky top-4 overflow-x-auto">
            <h4 className="font-medium text-blue-800 dark:text-blue-300 mb-3">📐 Formula Reference</h4>
            <div className="flex justify-center overflow-x-auto">
              <MathFormula formula={currentFormula.formula} display />
            </div>
            <div className="mt-3 pt-3 border-t border-blue-200 dark:border-blue-800 space-y-1">
              {currentFormula.variables.map((v, i) => (
                <div key={i} className="text-xs text-blue-700 dark:text-blue-300">
                  <strong>{v.symbol}</strong> = {v.meaning}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="lg:col-span-4">
          {hasAnswered && (
            <div className="mt-6 flex justify-between">
              <button
                onClick={handlePrevious}
                disabled={currentIndex === 0}
                className="bg-gray-100 text-gray-700 px-4 sm:px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition disabled:opacity-50 text-sm sm:text-base"
              >
                ← Previous
              </button>
              <button
                onClick={handleNext}
                className="bg-primary-600 text-white px-4 sm:px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition text-sm sm:text-base"
              >
                {currentIndex < formulaProblems.length - 1 ? 'Next Problem →' : 'See Results'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function FormulaPracticePage() {
  return (
    <Suspense fallback={
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="animate-pulse bg-gray-200 dark:bg-slate-700 h-96 rounded-xl" />
      </div>
    }>
      <FormulaPracticeContent />
    </Suspense>
  );
}