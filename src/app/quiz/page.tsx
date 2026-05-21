'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { areaAQuestions, areaBQuestions, areaCQuestions } from '@/data/comprehensive-questions';
import type { Question, Area, Difficulty } from '@/data/comprehensive-questions';
import { shuffleQuestions } from '@/lib/shuffle';
import { MathRenderer, MathFormula } from '@/lib/math-renderer';

function QuizContent() {
  const searchParams = useSearchParams();
  const selectedArea = (searchParams.get('area') as Area) || null;
  const selectedDifficulty = (searchParams.get('difficulty') as Difficulty) || null;
  const isSimulation = searchParams.get('type') === 'simulation';

  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showSolution, setShowSolution] = useState(false);
  const [sessionStats, setSessionStats] = useState({ correct: 0, wrong: 0 });
  const [weakPoints, setWeakPoints] = useState<string[]>([]);
  const [flaggedQuestions, setFlaggedQuestions] = useState<number[]>([]);
  const [showFormula, setShowFormula] = useState(false);

  useEffect(() => {
    let questionPool: Question[] = [];

    if (selectedArea) {
      if (selectedArea === 'A') questionPool = [...areaAQuestions];
      else if (selectedArea === 'B') questionPool = [...areaBQuestions];
      else if (selectedArea === 'C') questionPool = [...areaCQuestions];
    } else {
      questionPool = [...areaAQuestions, ...areaBQuestions, ...areaCQuestions];
    }

    if (selectedDifficulty) {
      questionPool = questionPool.filter(question => question.difficulty === selectedDifficulty);
    }

    questionPool = shuffleQuestions(questionPool).slice(0, 100);
    setQuizQuestions(questionPool);
  }, [selectedArea, selectedDifficulty]);

  if (quizQuestions.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="text-center py-12">
          <p className="text-gray-500">Loading questions...</p>
          <Link href="/practice" className="text-primary-600 hover:underline mt-4 inline-block">
            Go back to Practice Setup
          </Link>
        </div>
      </div>
    );
  }

  const currentQuestion = quizQuestions[currentIndex];
  const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
  const hasAnswered = selectedAnswer !== null;

  const handleSelectAnswer = (index: number) => {
    if (hasAnswered) return;
    setSelectedAnswer(index);
    setShowSolution(true);
    setSessionStats(prevStats => ({
      ...prevStats,
      correct: prevStats.correct + (index === currentQuestion.correctAnswer ? 1 : 0),
      wrong: prevStats.wrong + (index !== currentQuestion.correctAnswer ? 1 : 0)
    }));

    if (index !== currentQuestion.correctAnswer && currentQuestion.weakPoints) {
      setWeakPoints(prevPoints => [...new Set([...prevPoints, ...currentQuestion.weakPoints!])]);
    }
  };

  const toggleFlag = () => {
    setFlaggedQuestions(prevFlagged =>
      prevFlagged.includes(currentIndex) ? prevFlagged.filter(index => index !== currentIndex) : [...prevFlagged, currentIndex]
    );
  };

  const handleNext = () => {
    if (currentIndex < quizQuestions.length - 1) {
      setCurrentIndex(prevIndex => prevIndex + 1);
      setSelectedAnswer(null);
      setShowSolution(false);
    } else {
      setCurrentIndex(quizQuestions.length);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevIndex => prevIndex - 1);
      setSelectedAnswer(null);
      setShowSolution(false);
    }
  };

  const handleGoToQuestion = (index: number) => {
    setCurrentIndex(index);
    setSelectedAnswer(null);
    setShowSolution(false);
  };

  // Quiz completed view
  if (currentIndex >= quizQuestions.length) {
    const percentage = Math.round((sessionStats.correct / quizQuestions.length) * 100);

    return (
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 text-center">
          <div className="text-6xl mb-4">
            {percentage >= 70 ? '🎉 Congrats!' : percentage >= 50 ? '👍 Good Effort!' : '📚 Keep Studying!'}
          </div>
          <h1 className="text-2xl font-bold mb-2">Quiz Complete!</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6">100-Item Practice Test</p>

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
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{quizQuestions.length}</div>
              <div className="text-sm text-blue-700 dark:text-blue-300">Total</div>
            </div>
          </div>

          {weakPoints.length > 0 && (
            <div className="bg-amber-50 dark:bg-amber-900/30 rounded-xl p-6 text-left mb-8">
              <h3 className="font-semibold text-amber-800 dark:text-amber-300 mb-3">Topics to Review</h3>
              <p className="text-sm text-amber-700 dark:text-amber-400 mb-3">
                Based on your incorrect answers, focus on these areas:
              </p>
              <div className="flex flex-wrap">
                {[...new Set(weakPoints)].map((weakPoint, index) => (
                  <span key={index} className="inline-block bg-amber-200 dark:bg-amber-800 text-amber-800 dark:text-amber-200 px-3 py-1 rounded-full text-sm mr-2 mb-2">
                    {weakPoint}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4 text-left">
              <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">By Area:</h4>
              <div className="space-y-1 text-sm">
                <div>Area A: {areaAQuestions.length} questions available</div>
                <div>Area B: {areaBQuestions.length} questions available</div>
                <div>Area C: {areaCQuestions.length} questions available</div>
              </div>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/30 rounded-xl p-4 text-left">
              <h4 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">Next Steps:</h4>
              <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                <li>• Review formulas in Formula Reference</li>
                <li>• Practice weak areas</li>
                <li>• Take another practice test</li>
              </ul>
            </div>
          </div>

          <div className="flex gap-4 justify-center">
            <Link
              href="/practice"
              className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
            >
              Practice Again
            </Link>
            <Link
              href="/conversions"
              className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
            >
              Unit Conversions
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <Link href="/practice" className="text-primary-600 hover:underline text-sm">
              ← Back to Setup
            </Link>
            <span className="text-gray-300 hidden sm:inline">|</span>
            <span className="text-sm text-gray-500">
              Area {currentQuestion.area} | {currentQuestion.difficulty.charAt(0).toUpperCase() + currentQuestion.difficulty.slice(1)}
            </span>
          </div>
          <h1 className="text-xl lg:text-2xl font-bold mt-1">
            Question {currentIndex + 1} of {quizQuestions.length}
          </h1>
        </div>
        <div className="flex gap-3 sm:gap-4 text-sm items-center">
          <span className="text-green-600 font-medium">
            {sessionStats.correct} ✓
          </span>
          <span className="text-red-600 font-medium">
            {sessionStats.wrong} ✗
          </span>
          <button
            onClick={toggleFlag}
            className={`${flaggedQuestions.includes(currentIndex) ? 'text-amber-600' : 'text-gray-400'} hover:text-amber-500`}
          >
            {flaggedQuestions.includes(currentIndex) ? '★ Flagged' : '☆ Flag'}
          </button>
          {!isSimulation && (
            <button
              onClick={() => setShowFormula(!showFormula)}
              className="text-primary-600 hover:text-primary-700"
            >
              📐 Formula
            </button>
          )}
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-1 bg-gray-200 rounded-full mb-6">
        <div
          className="h-1 bg-primary-600 rounded-full transition-all"
          style={{ width: `${((currentIndex + 1) / quizQuestions.length) * 100}%` }}
        />
      </div>

      <div className="grid lg:grid-cols-4 gap-6">
        {/* Question Area */}
        <div className="lg:col-span-3">
          {/* Question Card */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border dark:border-slate-700 p-6 lg:p-8 mb-6">
            <div className="flex items-center gap-2 mb-4 flex-wrap">
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

            <div className="space-y-3 lg:space-y-4">
              {currentQuestion.options.map((option, index) => {
                let optionClass = 'bg-white dark:bg-slate-800 border-gray-200 dark:border-slate-700 hover:border-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/30';
                if (hasAnswered) {
                  if (index === currentQuestion.correctAnswer) {
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
                        hasAnswered && index === currentQuestion.correctAnswer ? 'bg-green-500 text-white' :
                        hasAnswered && index === selectedAnswer ? 'bg-red-500 text-white' :
                        'bg-gray-100 dark:bg-slate-600 text-gray-600 dark:text-gray-300'
                      }`}>
                        {String.fromCharCode(65 + index)}
                      </span>
                      <span className="text-base lg:text-lg">
                        <MathRenderer content={option} />
                      </span>
                      {hasAnswered && index === currentQuestion.correctAnswer && (
                        <span className="ml-auto text-green-600 font-bold shrink-0">✓</span>
                      )}
                      {hasAnswered && index === selectedAnswer && index !== currentQuestion.correctAnswer && (
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

              {/* Given */}
              {(currentQuestion.solution.given || currentQuestion.constants) && (
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">📋 Given</h4>
                  <div className="bg-gray-50 dark:bg-slate-700/50 rounded-xl p-4 text-sm">
                    {currentQuestion.solution.given ? (
                      <p className="text-gray-700 dark:text-gray-200 whitespace-pre-line">
                        {currentQuestion.solution.given}
                      </p>
                    ) : currentQuestion.constants ? (
                      <div className="space-y-1">
                        {currentQuestion.constants.map((c, i) => (
                          <div key={i} className="flex items-baseline gap-2">
                            <code className="font-mono text-primary-700 dark:text-primary-300">{c.symbol}</code>
                            <span className="text-gray-500">=</span>
                            <span className="text-gray-700 dark:text-gray-200">{c.value}</span>
                            {c.description && (
                              <span className="text-gray-400 text-xs">({c.description})</span>
                            )}
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>
              )}

              {/* Formula */}
              {!isSimulation && currentQuestion.solution.formula && (
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">📐 Formula</h4>
                  <div className="bg-primary-50 dark:bg-primary-900/30 rounded-xl p-4 flex justify-center overflow-x-auto">
                    <MathFormula formula={currentQuestion.solution.formula} display />
                  </div>
                </div>
              )}

              {/* Derive */}
              {currentQuestion.solution.derive && (
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">🔧 Derive</h4>
                  <div className="bg-amber-50 dark:bg-amber-900/30 rounded-xl p-4 text-sm text-gray-700 dark:text-gray-200">
                    <MathRenderer content={currentQuestion.solution.derive} />
                  </div>
                </div>
              )}

              {/* Steps: Substitute → Solve */}
              {currentQuestion.solution.steps && currentQuestion.solution.steps.length > 0 && (
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    🔢 {currentQuestion.solution.steps.length > 1 ? 'Substitute & Solve' : 'Solve'}
                  </h4>
                  <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4">
                    <ul className="space-y-2">
                      {currentQuestion.solution.steps.map((step, index) => (
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

              {currentQuestion.solution.commonMistakes && (
                <div className="mb-4">
                  <h4 className="font-semibold text-amber-800 dark:text-amber-300 mb-2">⚠️ Common Mistakes to Avoid</h4>
                  <ul className="space-y-1">
                    {currentQuestion.solution.commonMistakes.map((mistake, index) => (
                      <li key={index} className="text-sm text-amber-700 dark:text-amber-300 flex items-center gap-2">
                        <span className="text-amber-500">•</span>
                        {mistake}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {!isCorrect && currentQuestion.weakPoints && currentQuestion.weakPoints.length > 0 && (
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">📚 Areas to Study</h4>
                  <div className="flex flex-wrap">
                    {currentQuestion.weakPoints.map((weakPoint, index) => (
                      <span key={index} className="inline-block bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-200 px-3 py-1 rounded-full text-sm mr-2 mb-2">
                        {weakPoint}
                      </span>
                    ))}
            </div>
          </div>
          )}
            </div>
          )}

          {/* Formula (mobile - inline) */}
          {!isSimulation && showFormula && (
            <div className="lg:hidden bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-xl p-4 mb-6 overflow-x-auto">
              <h4 className="font-medium text-blue-800 dark:text-blue-300 mb-2">📐 Formula</h4>
              {currentQuestion.solution.formula ? (
                <MathFormula formula={currentQuestion.solution.formula} display />
              ) : (
                <span className="text-blue-700 dark:text-blue-300">No specific formula — use concept understanding</span>
              )}
              {(() => {
                const qConstants = currentQuestion.constants || currentQuestion.solution.constants;
                return qConstants ? (
                  <div className="mt-2 text-sm text-blue-700 dark:text-blue-300">
                    <strong>Constants:</strong> {qConstants.map(constant => `${constant.symbol} = ${constant.value}`).join(', ')}
                  </div>
                ) : null;
              })()}
            </div>
          )}
        </div>

        {/* Right Sidebar: Formula or Navigator */}
        <div className="hidden lg:block lg:col-span-1">
          {showFormula ? (
            <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-xl p-4 lg:p-6 sticky top-4 overflow-x-auto">
              <h4 className="font-medium text-blue-800 dark:text-blue-300 mb-3">📐 Formula</h4>
              {currentQuestion.solution.formula ? (
                <MathFormula formula={currentQuestion.solution.formula} display />
              ) : (
                <span className="text-blue-700 dark:text-blue-300 text-sm">No specific formula — use concept understanding</span>
              )}
              {(() => {
                const qConstants = currentQuestion.constants || currentQuestion.solution.constants;
                return qConstants ? (
                  <div className="mt-3 pt-3 border-t border-blue-200 dark:border-blue-800 space-y-1">
                    {qConstants.map((c, i) => (
                      <div key={i} className="text-xs text-blue-700 dark:text-blue-300">
                        <strong>{c.symbol}</strong> = {c.value} {c.description && <span className="text-blue-500">({c.description})</span>}
                      </div>
                    ))}
                  </div>
                ) : null;
              })()}
            </div>
          ) : (
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border dark:border-slate-700 p-4">
              <h3 className="font-semibold mb-3 text-sm">Question Navigator</h3>
              <div className="grid grid-cols-5 gap-1 max-h-96 overflow-y-auto">
                {quizQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleGoToQuestion(index)}
                    disabled={index === currentIndex}
                    className={`w-8 h-8 rounded text-xs font-medium transition ${
                      index === currentIndex
                        ? 'bg-primary-600 text-white'
                        : flaggedQuestions.includes(index)
                        ? 'bg-amber-200 dark:bg-amber-800 text-amber-800 dark:text-amber-200'
                        : sessionStats.correct + sessionStats.wrong > index
                        ? (question.correctAnswer === index ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200' : 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200')
                        : 'bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600'
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
              <div className="mt-4 text-xs text-gray-500">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-3 h-3 bg-primary-600 rounded"></span> Current
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-3 h-3 bg-green-100 rounded"></span> Answered
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-amber-200 rounded"></span> Flagged
                </div>
              </div>
            </div>
          )}
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
                {currentIndex < quizQuestions.length - 1 ? 'Next Question →' : 'See Results'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function QuizPage() {
  return (
    <Suspense fallback={
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 dark:bg-slate-700 rounded w-1/3 mb-4"></div>
          <div className="h-64 bg-gray-200 dark:bg-slate-700 rounded"></div>
        </div>
      </div>
    }>
      <QuizContent />
    </Suspense>
  );
}