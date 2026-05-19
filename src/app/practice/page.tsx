'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { tosStructure } from '@/data/tos';
import { formulasByArea, formulasByTopic, getAllTopics, formulas } from '@/data/formulas';

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
  const [selectedFormula, setSelectedFormula] = useState<typeof formulas[0] | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  const allTopics = getAllTopics();

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
        <p className="text-gray-600">100-item practice test based on PRC ABELE-TOS</p>
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
          <div className="bg-white rounded-xl shadow-sm border p-6">
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
                        ? 'border-primary-500 bg-primary-50'
                        : 'border-gray-200 hover:border-primary-300'
                    }`}
                  >
                    <div className="font-medium">{area.name}</div>
                    {area.id !== 'all' && (
                      <div className="text-sm text-gray-500">
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
                        ? 'border-primary-500 bg-primary-50 text-primary-700'
                        : 'border-gray-200 hover:border-primary-300'
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
            <div className="bg-blue-50 rounded-xl p-4 mb-6">
              <h4 className="font-medium text-blue-800 mb-2">Understanding Difficulty Levels</h4>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="font-medium text-green-700">Easy:</span>
                  <p className="text-green-700">Same concept, changing given values. Practice problems to master the basics.</p>
                </div>
                <div>
                  <span className="font-medium text-amber-700">Average:</span>
                  <p className="text-amber-700">Includes logic application. Slightly increasing difficulty with multi-step solutions.</p>
                </div>
                <div>
                  <span className="font-medium text-red-700">Hard:</span>
                  <p className="text-red-700">Situational problems with missing constants. Tests critical thinking and engineering judgment.</p>
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
              className="bg-white rounded-xl border p-4 text-center hover:border-primary-300 hover:shadow-md transition"
            >
              <div className="text-2xl mb-2">📝</div>
              <div className="font-medium">Full Simulation</div>
              <div className="text-xs text-gray-500">100 items, timed</div>
            </Link>
            <Link
              href="/conversions"
              className="bg-white rounded-xl border p-4 text-center hover:border-primary-300 hover:shadow-md transition"
            >
              <div className="text-2xl mb-2">🔄</div>
              <div className="font-medium">Unit Conversions</div>
              <div className="text-xs text-gray-500">Practice mode</div>
            </Link>
            <Link
              href="/progress"
              className="bg-white rounded-xl border p-4 text-center hover:border-primary-300 hover:shadow-md transition"
            >
              <div className="text-2xl mb-2">📊</div>
              <div className="font-medium">Progress</div>
              <div className="text-xs text-gray-500">Track performance</div>
            </Link>
            <button
              onClick={() => setShowFormulaModal(true)}
              className="bg-white rounded-xl border p-4 text-center hover:border-primary-300 hover:shadow-md transition"
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
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Topic Filter */}
          <div className="bg-white rounded-xl shadow-sm border p-4 h-fit sticky top-4">
            <h3 className="font-semibold mb-3">Filter by Area</h3>
            <div className="space-y-2">
              <button
                onClick={() => { setSelectedTopic(null); }}
                className={`w-full text-left px-3 py-2 rounded-lg transition ${
                  !selectedTopic ? 'bg-primary-100 text-primary-700' : 'hover:bg-gray-100'
                }`}
              >
                All Formulas ({formulas.length})
              </button>
              {['A', 'B', 'C'].map((area) => (
                <div key={area}>
                  <button
                    onClick={() => { setSelectedTopic(`area-${area}`); }}
                    className={`w-full text-left px-3 py-2 rounded-lg transition ${
                      selectedTopic === `area-${area}` ? 'bg-primary-100 text-primary-700' : 'hover:bg-gray-100'
                    }`}
                  >
                    Area {area} ({formulasByArea[area as keyof typeof formulasByArea]?.length || 0})
                  </button>
                  {selectedTopic === `area-${area}` && (
                    <div className="ml-4 space-y-1 mt-1">
                      {formulasByArea[area as keyof typeof formulasByArea]?.map((formula) => (
                        <button
                          key={formula.id}
                          onClick={() => setSelectedFormula(formula)}
                          className="w-full text-left px-2 py-1 text-sm rounded hover:bg-primary-50"
                        >
                          {formula.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <h3 className="font-semibold mb-3 mt-6">Common Constants</h3>
            <div className="space-y-2 text-sm">
              <div className="bg-gray-50 rounded p-2">
                <div className="font-medium">g (gravity)</div>
                <div className="text-gray-600">9.81 m/s²</div>
              </div>
              <div className="bg-gray-50 rounded p-2">
                <div className="font-medium">ρ_water</div>
                <div className="text-gray-600">1000 kg/m³</div>
              </div>
              <div className="bg-gray-50 rounded p-2">
                <div className="font-medium">1 hp</div>
                <div className="text-gray-600">746 W = 0.746 kW</div>
              </div>
              <div className="bg-gray-50 rounded p-2">
                <div className="font-medium">1 atm</div>
                <div className="text-gray-600">101.3 kPa = 14.7 psi</div>
              </div>
            </div>
          </div>

          {/* Formula Display */}
          <div className="lg:col-span-3 space-y-4">
            {selectedFormula ? (
              <div className="bg-white rounded-xl shadow-sm border p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded">
                      Area {selectedFormula.area}
                    </span>
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded ml-2">
                      {selectedFormula.topic}
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedFormula(null)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    ✕
                  </button>
                </div>
                <h2 className="text-xl font-bold mb-2">{selectedFormula.name}</h2>
                <div className="bg-primary-50 rounded-xl p-4 mb-4">
                  <code className="text-2xl font-mono text-primary-800">{selectedFormula.formula}</code>
                </div>
                <p className="text-gray-600 mb-4">{selectedFormula.description}</p>
                {selectedFormula.application && (
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-800 mb-1">Application</h4>
                    <p className="text-gray-600 text-sm">{selectedFormula.application}</p>
                  </div>
                )}
                {selectedFormula.constants && selectedFormula.constants.length > 0 && (
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-800 mb-2">Parameters</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {selectedFormula.constants.map((constant, i) => (
                        <div key={i} className="bg-gray-50 rounded p-2 text-sm">
                          <code className="font-mono text-primary-700">{constant.symbol}</code>
                          <span className="text-gray-500"> = {constant.value}</span>
                          <div className="text-gray-400 text-xs">{constant.description}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="grid gap-4">
                {(selectedTopic
                  ? selectedTopic === 'area-A'
                    ? formulasByArea.A
                    : selectedTopic === 'area-B'
                    ? formulasByArea.B
                    : selectedTopic === 'area-C'
                    ? formulasByArea.C
                    : formulas
                  : formulas
                ).map((formula) => (
                  <button
                    key={formula.id}
                    onClick={() => setSelectedFormula(formula)}
                    className="bg-white rounded-xl shadow-sm border p-4 text-left hover:border-primary-300 hover:shadow-md transition"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded">
                          {formula.area}
                        </span>
                        <h3 className="font-medium mt-2">{formula.name}</h3>
                      </div>
                      <div className="bg-gray-100 rounded px-3 py-1 font-mono text-sm">
                        {formula.formula.length > 20 ? formula.formula.substring(0, 20) + '...' : formula.formula}
                      </div>
                    </div>
                    <div className="text-sm text-gray-500 mt-2">{formula.topic}</div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Reference Tab */}
      {activeTab === 'reference' && (
        <div className="space-y-8">
          {/* Subject A */}
          <div className="bg-white rounded-xl shadow-sm border">
            <div className="bg-primary-50 p-4 rounded-t-xl">
              <h3 className="text-lg font-bold text-primary-800">
                Subject A: Agricultural and Biosystems Power, Energy and Machinery Engineering (32%)
              </h3>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-4">
                {tosStructure.subjectA.subTopics.map((topic) => (
                  <div key={topic.id} className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">{topic.name}</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
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
          <div className="bg-white rounded-xl shadow-sm border">
            <div className="bg-green-50 p-4 rounded-t-xl">
              <h3 className="text-lg font-bold text-green-800">
                Subject B: Land and Water Resources Engineering (32%)
              </h3>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-4">
                {tosStructure.subjectB.subTopics.map((topic) => (
                  <div key={topic.id} className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">{topic.name}</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
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
          <div className="bg-white rounded-xl shadow-sm border">
            <div className="bg-amber-50 p-4 rounded-t-xl">
              <h3 className="text-lg font-bold text-amber-800">
                Subject C: Agricultural and Biosystems Structures, Environment Engineering and Bioprocess (36%)
              </h3>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-4">
                {tosStructure.subjectC.subTopics.map((topic) => (
                  <div key={topic.id} className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">{topic.name}</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
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
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Common Engineering Formulas</h2>
                <button
                  onClick={() => setShowFormulaModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>
              <div className="space-y-4">
                {Object.entries(formulasByTopic).slice(0, 15).map(([topic, topicFormulas]) => (
                  <div key={topic} className="border-b pb-4">
                    <h3 className="font-semibold text-gray-800 mb-2">{topic}</h3>
                    <div className="space-y-1">
                      {topicFormulas.slice(0, 3).map((formula) => (
                        <div key={formula.id} className="flex justify-between text-sm">
                          <span className="text-gray-600">{formula.name}</span>
                          <code className="bg-gray-100 px-2 py-0.5 rounded font-mono">
                            {formula.formula.length > 30 ? formula.formula.substring(0, 30) + '...' : formula.formula}
                          </code>
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
          <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-8"></div>
          <div className="h-64 bg-gray-200 rounded"></div>
        </div>
      </div>
    }>
      <QuizContent />
    </Suspense>
  );
}