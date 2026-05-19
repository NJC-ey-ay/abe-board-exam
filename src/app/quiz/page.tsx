'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { areaAQuestions, areaBQuestions, areaCQuestions } from '@/data/comprehensive-questions';
import type { Question, Area, Difficulty } from '@/data/comprehensive-questions';

function QuizContent() {
  const searchParams = useSearchParams();
  const selectedArea = (searchParams.get('area') as Area) || null;
  const selectedDifficulty = (searchParams.get('difficulty') as Difficulty) || null;

  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showSolution, setShowSolution] = useState(false);
  const [sessionStats, setSessionStats] = useState({ correct: 0, wrong: 0 });
  const [weakPoints, setWeakPoints] = useState<string[]>([]);
  const [flaggedQuestions, setFlaggedQuestions] = useState<number[]>([]);
  const [showFormula, setShowFormula] = useState(false);

  useEffect(() => {
    // Generate quiz based on filters
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

    questionPool = questionPool.sort(() => Math.random() - 0.5).slice(0, 100);
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
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <div className="text-6xl mb-4">
            {percentage >= 70 ? '🎉 Congrats!' : percentage >= 50 ? '👍 Good Effort!' : '📚 Keep Studying!'}
          </div>
          <h1 className="text-2xl font-bold mb-2">Quiz Complete!</h1>
          <p className="text-gray-600 mb-6">100-Item Practice Test</p>

          <div className="text-6xl font-bold text-primary-600 mb-8">{percentage}%</div>

          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-green-50 rounded-xl p-4">
              <div className="text-2xl font-bold text-green-600">{sessionStats.correct}</div>
              <div className="text-sm text-green-700">Correct</div>
            </div>
            <div className="bg-red-50 rounded-xl p-4">
              <div className="text-2xl font-bold text-red-600">{sessionStats.wrong}</div>
              <div className="text-sm text-red-700">Incorrect</div>
            </div>
            <div className="bg-blue-50 rounded-xl p-4">
              <div className="text-2xl font-bold text-blue-600">{quizQuestions.length}</div>
              <div className="text-sm text-blue-700">Total</div>
            </div>
          </div>

          {weakPoints.length > 0 && (
            <div className="bg-amber-50 rounded-xl p-6 text-left mb-8">
              <h3 className="font-semibold text-amber-800 mb-3">Topics to Review</h3>
              <p className="text-sm text-amber-700 mb-3">
                Based on your incorrect answers, focus on these areas:
              </p>
              <div className="flex flex-wrap">
                {[...new Set(weakPoints)].map((weakPoint, index) => (
                  <span key={index} className="inline-block bg-amber-200 text-amber-800 px-3 py-1 rounded-full text-sm mr-2 mb-2">
                    {weakPoint}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-blue-50 rounded-xl p-4 text-left">
              <h4 className="font-semibold text-blue-800 mb-2">By Area:</h4>
              <div className="space-y-1 text-sm">
                <div>Area A: {areaAQuestions.length} questions available</div>
                <div>Area B: {areaBQuestions.length} questions available</div>
                <div>Area C: {areaCQuestions.length} questions available</div>
              </div>
            </div>
            <div className="bg-purple-50 rounded-xl p-4 text-left">
              <h4 className="font-semibold text-purple-800 mb-2">Next Steps:</h4>
              <ul className="text-sm text-purple-700 space-y-1">
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
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="flex items-center gap-2">
            <Link href="/practice" className="text-primary-600 hover:underline text-sm">
              ← Back to Setup
            </Link>
            <span className="text-gray-300">|</span>
            <span className="text-sm text-gray-500">
              Area {currentQuestion.area} | {currentQuestion.difficulty.charAt(0).toUpperCase() + currentQuestion.difficulty.slice(1)}
            </span>
          </div>
          <h1 className="text-xl font-bold">
            Question {currentIndex + 1} of {quizQuestions.length}
          </h1>
        </div>
        <div className="flex gap-4 text-sm">
          <span className="text-green-600 font-medium">
            {sessionStats.correct} ✓
          </span>
          <span className="text-red-600 font-medium">
            {sessionStats.wrong} ✗
          </span>
          <button
            onClick={toggleFlag}
            className={`${flaggedQuestions.includes(currentIndex) ? 'text-amber-600' : 'text-gray-400'}`}
          >
            {flaggedQuestions.includes(currentIndex) ? '★ Flagged' : '☆ Flag'}
          </button>
          <button
            onClick={() => setShowFormula(!showFormula)}
            className="text-primary-600"
          >
            📐 Formula
          </button>
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
        <div className={showFormula ? 'lg:col-span-3' : 'lg:col-span-4'}>
          {/* Formula Reference */}
          {showFormula && currentQuestion.relatedFormulas && (
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-4">
              <h4 className="font-medium text-blue-800 mb-2">📐 Related Formula</h4>
              <code className="text-blue-700">
                {currentQuestion.solution.formula || 'No specific formula - use concept understanding'}
              </code>
              {(() => {
                const qConstants = currentQuestion.constants || currentQuestion.solution.constants;
                return qConstants ? (
                  <div className="mt-2 text-sm text-blue-700">
                    <strong>Constants:</strong> {qConstants.map(constant => `${constant.symbol} = ${constant.value}`).join(', ')}
                  </div>
                ) : null;
              })()}
            </div>
          )}

          {/* Question Card */}
          <div className="bg-white rounded-2xl shadow-sm border p-6 mb-4">
            <div className="flex items-center gap-2 mb-4">
              <span className={`text-xs px-2 py-1 rounded ${
                currentQuestion.difficulty === 'easy' ? 'bg-green-100 text-green-700' :
                currentQuestion.difficulty === 'average' ? 'bg-amber-100 text-amber-700' :
                'bg-red-100 text-red-700'
              }`}>
                {currentQuestion.difficulty.charAt(0).toUpperCase() + currentQuestion.difficulty.slice(1)}
              </span>
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                {currentQuestion.topic}
              </span>
            </div>

            <h2 className="text-lg font-medium mb-6">{currentQuestion.question}</h2>

            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => {
                let optionClass = 'bg-white border-gray-200 hover:border-primary-400 hover:bg-primary-50';
                if (hasAnswered) {
                  if (index === currentQuestion.correctAnswer) {
                    optionClass = 'bg-green-100 border-2 border-green-500';
                  } else if (index === selectedAnswer) {
                    optionClass = 'bg-red-100 border-2 border-red-500';
                  } else {
                    optionClass = 'bg-gray-50 border-gray-200 opacity-60';
                  }
                }

                return (
                  <button
                    key={index}
                    onClick={() => handleSelectAnswer(index)}
                    disabled={hasAnswered}
                    className={`w-full text-left p-3 sm:p-4 rounded-xl border-2 transition-all ${optionClass}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-10 h-10 shrink-0 rounded-full flex items-center justify-center text-sm font-medium ${
                        hasAnswered && index === currentQuestion.correctAnswer ? 'bg-green-500 text-white' :
                        hasAnswered && index === selectedAnswer ? 'bg-red-500 text-white' :
                        'bg-gray-100 text-gray-600'
                      }`}>
                        {String.fromCharCode(65 + index)}
                      </span>
                      <span className="text-sm sm:text-base">{option}</span>
                      {hasAnswered && index === currentQuestion.correctAnswer && (
                        <span className="ml-auto text-green-600 font-bold">✓</span>
                      )}
                      {hasAnswered && index === selectedAnswer && index !== currentQuestion.correctAnswer && (
                        <span className="ml-auto text-red-600 font-bold">✗</span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Solution Panel */}
          {showSolution && (
            <div className="bg-white rounded-2xl shadow-sm border p-6">
              <div className={`mb-4 p-4 rounded-xl ${
                isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
              }`}>
                <h3 className={`font-semibold text-lg mb-2 ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
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
                <h4 className="font-semibold text-gray-800 mb-2">💡 Key Concept</h4>
                <p className="text-gray-600 text-sm bg-gray-50 p-3 rounded-lg">
                  {currentQuestion.solution.keyConcept}
                </p>
              </div>

              {currentQuestion.solution.steps && (
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">📝 Step-by-Step Solution</h4>
                  <div className="bg-blue-50 rounded-xl p-4">
                    <ul className="space-y-2">
                      {currentQuestion.solution.steps.map((step, index) => (
                        <li key={index} className="flex gap-3 text-sm">
                          <span className="w-6 h-6 bg-blue-200 text-blue-800 rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0">
                            {index + 1}
                          </span>
                          <span className="text-gray-700">{step}</span>
                        </li>
                      ))}
                    </ul>
                    {currentQuestion.solution.formula && (
                      <div className="mt-3 pt-3 border-t border-blue-200">
                        <code className="text-sm text-blue-800 font-mono">
                          {currentQuestion.solution.formula}
                        </code>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {currentQuestion.solution.commonMistakes && (
                <div className="mb-4">
                  <h4 className="font-semibold text-amber-800 mb-2">⚠️ Common Mistakes to Avoid</h4>
                  <ul className="space-y-1">
                    {currentQuestion.solution.commonMistakes.map((mistake, index) => (
                      <li key={index} className="text-sm text-amber-700 flex items-center gap-2">
                        <span className="text-amber-500">•</span>
                        {mistake}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {!isCorrect && currentQuestion.weakPoints && currentQuestion.weakPoints.length > 0 && (
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">📚 Areas to Study</h4>
                  <div className="flex flex-wrap">
                    {currentQuestion.weakPoints.map((weakPoint, index) => (
                      <span key={index} className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm mr-2 mb-2">
                        {weakPoint}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Navigation */}
          {hasAnswered && (
            <div className="mt-6 flex justify-between">
              <button
                onClick={handlePrevious}
                disabled={currentIndex === 0}
                className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition disabled:opacity-50"
              >
                ← Previous
              </button>
              <button
                onClick={handleNext}
                className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
              >
                {currentIndex < quizQuestions.length - 1 ? 'Next Question →' : 'See Results'}
              </button>
            </div>
          )}
        </div>

        {/* Question Navigator */}
        {!showFormula && (
          <div className="hidden lg:block">
            <div className="bg-white rounded-xl shadow-sm border p-4 sticky top-4">
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
                        ? 'bg-amber-200 text-amber-800'
                        : sessionStats.correct + sessionStats.wrong > index
                        ? (question.correctAnswer === index ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800')
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
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
          </div>
        )}
      </div>
    </div>
  );
}

export default function QuizPage() {
  return (
    <Suspense fallback={
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
          <div className="h-64 bg-gray-200 rounded"></div>
        </div>
      </div>
    }>
      <QuizContent />
    </Suspense>
  );
}