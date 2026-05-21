'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { tosStructure } from '@/data/tos';
import { formulasByArea, formulasByTopic, formulas } from '@/data/formulas';
import { MathFormula } from '@/lib/math-renderer';

type TabView = 'setup' | 'formulas' | 'reference';

function QuizContent() {
  const searchParams = useSearchParams();
  const initialArea = searchParams.get('area') || 'all';
  const initialDifficulty = searchParams.get('difficulty') || 'all';
  const initialTab = (searchParams.get('tab') as TabView) || 'setup';

  const [activeTab, setActiveTab] = useState<TabView>(initialTab);
  const [selectedArea, setSelectedArea] = useState(initialArea);
  const [selectedDifficulty, setSelectedDifficulty] = useState(initialDifficulty);
  const [showFormulaModal, setShowFormulaModal] = useState(false);
  const [expandedAreas, setExpandedAreas] = useState<Set<string>>(new Set(['A', 'B', 'C']));

  const toggleArea = (area: string) => {
    setExpandedAreas(prev => {
      const next = new Set(prev);
      if (next.has(area)) next.delete(area);
      else next.add(area);
      return next;
    });
  };

  // Get questions (simulated - would use comprehensive-questions.ts in full implementation)
  const getQuestionsCount = (area: string, diff: string): number => {
    const counts = {
      all: { easy: 30, average: 45, hard: 25 },
      A: { easy: 10, average: 15, hard: 7 },
      B: { easy: 10, average: 15, hard: 10 },
      C: { easy: 10, average: 15, hard: 8 }
    };
    const areaCounts = counts[area as keyof typeof counts] || counts.all;
    if (diff === 'all') return areaCounts.easy + areaCounts.average + areaCounts.hard;
    return areaCounts[diff as keyof typeof areaCounts] || 0;
  };

  const areas = [
    { id: 'all', name: 'All Areas', percentage: 100 },
    { id: 'A', name: `Area A: Power & Machinery`, percentage: 32 },
    { id: 'B', name: `Area B: Land & Water Resources`, percentage: 32 },
    { id: 'C', name: `Area C: Structures & Bioprocess`, percentage: 36 }
  ];

  const difficulties = [
    { id: 'all', name: 'All Levels' },
    { id: 'easy', name: 'Easy (Concept Practice)' },
    { id: 'average', name: 'Average (Logic & Application)' },
    { id: 'hard', name: 'Hard (Situational Problems)' }
  ];

  const handleStartQuiz = () => {
    const params = new URLSearchParams();
    if (selectedArea !== 'all') params.set('area', selectedArea);
    if (selectedDifficulty !== 'all') params.set('difficulty', selectedDifficulty);
    window.location.href = `/quiz?${params.toString()}`;
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">ABE Board Exam Practice</h1>
        <p className="text-gray-600 dark:text-gray-300">100-item practice test based on PRC ABELE-TOS</p>
      </div>

      {/* Area Distribution Info */}
      <div className="bg-gradient-to-r from-primary-700 to-primary-900 text-white rounded-xl p-6 mb-8">
        <h3 className="font-semibold mb-4">Question Distribution (TOS Based)</h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white/10 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold">32%</div>
            <div className="text-sm text-primary-200">Area A: Power, Energy & Machinery</div>
          </div>
          <div className="bg-white/10 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold">32%</div>
            <div className="text-sm text-primary-200">Area B: Land & Water Resources</div>
          </div>
          <div className="bg-white/10 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold">36%</div>
            <div className="text-sm text-primary-200">Area C: Structures & Bioprocess</div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6 border-b">
        {(['setup', 'formulas', 'reference'] as TabView[]).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 font-medium transition border-b-2 -mb-px ${
              activeTab === tab
                ? 'border-primary-600 text-primary-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab === 'setup' ? 'Practice Setup' : tab === 'formulas' ? 'Formula Reference' : 'TOS Reference'}
          </button>
        ))}
      </div>

      {/* Setup Tab */}
      {activeTab === 'setup' && (
        <div className="space-y-6">
          {/* Quiz Setup */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border dark:border-slate-700 p-6">
            <h2 className="text-xl font-semibold mb-6">Configure Your Practice Test</h2>

            {/* Area Selection */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">Select Area</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {areas.map((area) => (
                  <button
                    key={area.id}
                    onClick={() => setSelectedArea(area.id)}
                    className={`p-4 rounded-xl border-2 text-left transition ${
                      selectedArea === area.id
                        ?           'border-primary-500 bg-primary-50 dark:bg-primary-900/50'
                        : 'border-gray-200 dark:border-slate-700 hover:border-primary-300'
                    }`}
                  >
                    <div className="font-medium">{area.name}</div>
                    {area.id !== 'all' && (
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {area.percentage}% of exam
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Difficulty Selection */}
            <div className="mb-8">
              <h3 className="font-medium mb-3">Difficulty Level</h3>
              <div className="flex flex-wrap gap-2">
                {difficulties.map((diff) => (
                  <button
                    key={diff.id}
                    onClick={() => setSelectedDifficulty(diff.id)}
                    className={`px-4 py-2 rounded-full border-2 transition ${
                      selectedDifficulty === diff.id
                        ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/50 text-primary-700'
                        : 'border-gray-200 dark:border-slate-700 hover:border-primary-300'
                    }`}
                  >
                    <span className="font-medium">{diff.name}</span>
                    {diff.id !== 'all' && (
                      <span className="text-sm text-gray-500 ml-2">
                        ({getQuestionsCount(selectedArea, diff.id)} questions)
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Difficulty Explanations */}
            <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4 mb-6">
              <h4 className="font-medium text-blue-800 dark:text-blue-300 mb-2">Understanding Difficulty Levels</h4>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="font-medium text-green-700 dark:text-green-400">Easy:</span>
                  <p className="text-green-700 dark:text-green-400">Same concept, changing given values. Practice problems to master the basics.</p>
                </div>
                <div>
                  <span className="font-medium text-amber-700 dark:text-amber-400">Average:</span>
                  <p className="text-amber-700 dark:text-amber-400">Includes logic application. Slightly increasing difficulty with multi-step solutions.</p>
                </div>
                <div>
                  <span className="font-medium text-red-700 dark:text-red-400">Hard:</span>
                  <p className="text-red-700 dark:text-red-400">Situational problems with missing constants. Tests critical thinking and engineering judgment.</p>
                </div>
              </div>
            </div>

            {/* Start Button */}
            <button
              onClick={handleStartQuiz}
              className="w-full bg-primary-600 text-white py-4 rounded-xl font-semibold text-lg hover:bg-primary-700 transition"
            >
              Start {selectedDifficulty === 'all' ? '100' : getQuestionsCount(selectedArea, selectedDifficulty)}-Item Practice Test
            </button>
          </div>

          {/* Quick Links */}
          <div className="grid md:grid-cols-4 gap-4">
            <Link
              href="/quiz?type=simulation"
              className="bg-white dark:bg-slate-800 rounded-xl border dark:border-slate-700 p-4 text-center hover:border-primary-300 hover:shadow-md transition"
            >
              <div className="text-2xl mb-2">📝</div>
              <div className="font-medium">Full Simulation</div>
              <div className="text-xs text-gray-500">100 items, timed</div>
            </Link>
            <Link
              href="/conversions"
              className="bg-white dark:bg-slate-800 rounded-xl border dark:border-slate-700 p-4 text-center hover:border-primary-300 hover:shadow-md transition"
            >
              <div className="text-2xl mb-2">🔄</div>
              <div className="font-medium">Unit Conversions</div>
              <div className="text-xs text-gray-500">Practice mode</div>
            </Link>

            <button
              onClick={() => setShowFormulaModal(true)}
              className="bg-white dark:bg-slate-800 rounded-xl border dark:border-slate-700 p-4 text-center hover:border-primary-300 hover:shadow-md transition"
            >
              <div className="text-2xl mb-2">📐</div>
              <div className="font-medium">Formula Sheet</div>
              <div className="text-xs text-gray-500">Quick reference</div>
            </button>
          </div>
        </div>
      )}

      {/* Formulas Tab */}
      {activeTab === 'formulas' && (
        <div>
          {/* Area Filter Tabs */}
          <div className="flex gap-2 mb-6 flex-wrap">
            {['A', 'B', 'C'].map((area) => (
              <button
                key={area}
                onClick={() => toggleArea(area)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                  expandedAreas.has(area)
                    ? 'bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 border border-primary-300 dark:border-primary-700'
                    : 'bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600'
                }`}
              >
                Area {area} ({formulasByArea[area as keyof typeof formulasByArea]?.length || 0})
              </button>
            ))}
          </div>

          {/* Formula Groups by Area */}
          <div className="space-y-8">
            {['A', 'B', 'C'].filter(a => expandedAreas.has(a)).map((area) => (
              <div key={area}>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`text-sm font-bold px-3 py-1 rounded ${
                    area === 'A' ? 'bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300' :
                    area === 'B' ? 'bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300' :
                    'bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300'
                  }`}>
                    Area {area}
                  </div>
                  <h2 className="text-lg font-bold">
                    {area === 'A' ? 'Power, Energy & Machinery' : area === 'B' ? 'Land & Water Resources' : 'Structures & Bioprocess'}
                  </h2>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  {formulasByArea[area as keyof typeof formulasByArea]?.map((formula) => (
                    <div
                      key={formula.id}
                      className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border dark:border-slate-700 p-5"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <span className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 px-2 py-0.5 rounded">
                            {formula.topic}
                          </span>
                        </div>
                      </div>
                      <h3 className="font-bold text-base mb-3">{formula.name}</h3>
                      <div className="bg-primary-50 dark:bg-primary-900/30 rounded-xl p-4 mb-3 flex justify-center overflow-x-auto">
                        <MathFormula formula={formula.formula} display />
                      </div>
                      {formula.constants && formula.constants.length > 0 && (
                        <div className="border-t dark:border-slate-700 pt-3 mt-3">
                          <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-sm">
                            {formula.constants.map((c, i) => (
                              <div key={i} className="flex items-baseline gap-1">
                                <code className="font-mono text-primary-700 dark:text-primary-300 text-xs">{c.symbol}</code>
                                <span className="text-gray-500 dark:text-gray-400 text-xs">—</span>
                                <span className="text-gray-600 dark:text-gray-300 text-xs">{c.description}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      {formula.application && (
                        <p className="text-xs text-gray-400 dark:text-gray-500 mt-2 leading-relaxed">
                          {formula.application}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Common Constants */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border dark:border-slate-700 p-5 mt-8">
            <h3 className="font-bold text-lg mb-4">Common Constants</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-gray-50 dark:bg-slate-700/50 rounded-lg p-3">
                <div className="font-mono text-sm text-primary-700 dark:text-primary-300 font-medium">g</div>
                <div className="text-sm font-medium text-gray-800 dark:text-gray-200">9.81 m/s²</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">gravitational acceleration</div>
              </div>
              <div className="bg-gray-50 dark:bg-slate-700/50 rounded-lg p-3">
                <div className="font-mono text-sm text-primary-700 dark:text-primary-300 font-medium">ρ_water</div>
                <div className="text-sm font-medium text-gray-800 dark:text-gray-200">1000 kg/m³</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">density of water</div>
              </div>
              <div className="bg-gray-50 dark:bg-slate-700/50 rounded-lg p-3">
                <div className="font-mono text-sm text-primary-700 dark:text-primary-300 font-medium">1 hp</div>
                <div className="text-sm font-medium text-gray-800 dark:text-gray-200">746 W = 0.746 kW</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">horsepower to watts</div>
              </div>
              <div className="bg-gray-50 dark:bg-slate-700/50 rounded-lg p-3">
                <div className="font-mono text-sm text-primary-700 dark:text-primary-300 font-medium">1 atm</div>
                <div className="text-sm font-medium text-gray-800 dark:text-gray-200">101.3 kPa = 14.7 psi</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">standard atmospheric pressure</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Reference Tab */}
      {activeTab === 'reference' && (
        <div className="space-y-8">
          {/* Subject A */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border dark:border-slate-700">
            <div className="bg-primary-50 dark:bg-primary-900/30 p-4 rounded-t-xl">
              <h3 className="text-lg font-bold text-primary-800 dark:text-primary-300">
                Subject A: Agricultural and Biosystems Power, Energy and Machinery Engineering (32%)
              </h3>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-4">
                {tosStructure.subjectA.subTopics.map((topic) => (
                  <div key={topic.id} className="border dark:border-slate-700 rounded-lg p-4">
                    <h4 className="font-semibold mb-2 dark:text-gray-200">{topic.name}</h4>
                    <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                      {topic.competencies.map((competency, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-primary-500 mt-1">•</span>
                          <span>{competency}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Subject B */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border dark:border-slate-700">
            <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-t-xl">
              <h3 className="text-lg font-bold text-green-800 dark:text-green-300">
                Subject B: Land and Water Resources Engineering (32%)
              </h3>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-4">
                {tosStructure.subjectB.subTopics.map((topic) => (
                  <div key={topic.id} className="border dark:border-slate-700 rounded-lg p-4">
                    <h4 className="font-semibold mb-2 dark:text-gray-200">{topic.name}</h4>
                    <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                      {topic.competencies.map((competency, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-green-500 mt-1">•</span>
                          <span>{competency}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Subject C */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border dark:border-slate-700">
            <div className="bg-amber-50 dark:bg-amber-900/30 p-4 rounded-t-xl">
              <h3 className="text-lg font-bold text-amber-800 dark:text-amber-300">
                Subject C: Agricultural and Biosystems Structures, Environment Engineering and Bioprocess (36%)
              </h3>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-4">
                {tosStructure.subjectC.subTopics.map((topic) => (
                  <div key={topic.id} className="border dark:border-slate-700 rounded-lg p-4">
                    <h4 className="font-semibold mb-2 dark:text-gray-200">{topic.name}</h4>
                    <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                      {topic.competencies.map((competency, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-amber-500 mt-1">•</span>
                          <span>{competency}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Formula Modal */}
      {showFormulaModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-800 rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Common Engineering Formulas</h2>
                <button
                  onClick={() => setShowFormulaModal(false)}
                  className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  ✕
                </button>
              </div>
              <div className="space-y-4">
                {Object.entries(formulasByTopic).slice(0, 15).map(([topic, topicFormulas]) => (
                  <div key={topic} className="border-b dark:border-slate-700 pb-4">
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">{topic}</h3>
                    <div className="space-y-1">
                      {topicFormulas.slice(0, 3).map((formula) => (
                        <div key={formula.id} className="flex justify-between text-sm">
                          <span className="text-gray-600 dark:text-gray-300">{formula.name}</span>
                          <MathFormula formula={formula.formula.length > 60 ? formula.formula.substring(0, 60) + '...' : formula.formula} />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function PracticePage() {
  return (
    <Suspense fallback={
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 dark:bg-slate-700 rounded w-1/3 mb-4"></div>
          <div className="h-4 bg-gray-200 dark:bg-slate-700 rounded w-1/2 mb-8"></div>
          <div className="h-64 bg-gray-200 dark:bg-slate-700 rounded"></div>
        </div>
      </div>
    }>
      <QuizContent />
    </Suspense>
  );
}