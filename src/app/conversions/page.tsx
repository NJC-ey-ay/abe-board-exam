'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { conversionCategories, conversions, memoryTechniques, commonConversionGroups, getConversionsByCategory } from '@/data/conversions';

type TabType = 'practice' | 'reference' | 'memory';

function ConversionsContent() {
  const searchParams = useSearchParams();
  const initialTab = (searchParams.get('tab') as TabType) || 'practice';

  const [activeTab, setActiveTab] = useState<TabType>(initialTab);
  const [selectedCategory, setSelectedCategory] = useState('length');
  const [userAnswer, setUserAnswer] = useState('');
  const [showAnswer, setShowAnswer] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [stats, setStats] = useState({ correct: 0, wrong: 0 });
  const [currentProblem, setCurrentProblem] = useState<{
    conversion: typeof conversions[0];
    value: number;
    targetValue: number;
  } | null>(null);

  useEffect(() => {
    generateNewProblem();
  }, [selectedCategory]);

  const generateNewProblem = () => {
    const categoryConversions = getConversionsByCategory(selectedCategory);
    if (categoryConversions.length === 0) return;

    const randomConversion = categoryConversions[Math.floor(Math.random() * categoryConversions.length)];
    const value = Math.round(Math.random() * 100 * 10) / 10;

    let targetValue: number;
    if (randomConversion.factor === -999) {
      if (randomConversion.fromUnit === '°F' && randomConversion.toUnit === '°C') {
        targetValue = (value - 32) * 5 / 9;
      } else if (randomConversion.fromUnit === '°C' && randomConversion.toUnit === '°F') {
        targetValue = (value * 9 / 5) + 32;
      } else {
        targetValue = value + 273.15;
      }
    } else {
      targetValue = value * randomConversion.factor;
    }

    setCurrentProblem({ conversion: randomConversion, value, targetValue });
    setUserAnswer('');
    setShowAnswer(false);
    setIsCorrect(null);
  };

  const handleSubmit = () => {
    if (!currentProblem || !userAnswer) return;

    const answer = parseFloat(userAnswer);
    const tolerance = Math.abs(currentProblem.targetValue * 0.02); // 2% tolerance
    const correct = Math.abs(answer - currentProblem.targetValue) <= tolerance;

    setIsCorrect(correct);
    setShowAnswer(true);
    setStats(prevStats => ({
      ...prevStats,
      correct: prevStats.correct + (correct ? 1 : 0),
      wrong: prevStats.wrong + (correct ? 0 : 1)
    }));
  };

  const categoryConversions = getConversionsByCategory(selectedCategory);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Unit Conversions Practice</h1>
        <p className="text-gray-600 dark:text-gray-300 dark:text-gray-300">
          Master all engineering unit conversions with practice exercises and memory techniques.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6 border-b dark:border-slate-700">
        {(['practice', 'reference', 'memory'] as TabType[]).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 font-medium transition border-b-2 -mb-px ${
              activeTab === tab
                ? 'border-primary-600 text-primary-600 dark:text-primary-400'
                : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:text-gray-200'
            }`}
          >
            {tab === 'practice' ? 'Practice' : tab === 'reference' ? 'Reference' : 'Memory Tips'}
          </button>
        ))}
      </div>

      {/* Practice Tab */}
      {activeTab === 'practice' && (
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Category Selection */}
          <div className="bg-white dark:bg-slate-800 rounded-xl border dark:border-slate-700">
            <h3 className="font-semibold mb-3">Categories</h3>
            <div className="space-y-1">
              {conversionCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg transition ${
                    selectedCategory === category.id
                      ? 'bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300'
                      : 'hover:bg-gray-100 dark:bg-slate-700'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Practice Area */}
          <div className="lg:col-span-3">
            {/* Stats */}
            <div className="flex gap-4 mb-4">
              <div className="bg-green-50 dark:bg-green-900/30 px-4 py-2 rounded-lg">
                <span className="text-green-700 dark:text-green-300 font-medium">{stats.correct} correct</span>
              </div>
              <div className="bg-red-50 dark:bg-red-900/30 px-4 py-2 rounded-lg">
                <span className="text-red-700 dark:text-red-300 font-medium">{stats.wrong} wrong</span>
              </div>
            </div>

            {currentProblem && (
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border dark:border-slate-700 p-6">
                <div className="mb-4">
                  <span className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded">
                    {conversionCategories.find(category => category.id === selectedCategory)?.name}
                  </span>
                </div>

                {/* Problem */}
                <div className="text-center mb-8">
                  <p className="text-gray-600 dark:text-gray-300 mb-2">Convert:</p>
                  <div className="text-4xl font-bold text-primary-700 dark:text-primary-300">
                    {currentProblem.value} {currentProblem.conversion.fromUnit}
                  </div>
                  <div className="text-4xl text-gray-400 dark:text-gray-500 my-4">↓</div>
                  <div className="text-4xl font-bold">? {currentProblem.conversion.toUnit}</div>
                </div>

                {/* Answer Input */}
                <div className="max-w-xs mx-auto">
                  <input
                    type="number"
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
                    placeholder="Your answer"
                    className="w-full px-4 py-3 text-center text-xl border-2 border-gray-200 dark:border-slate-600 rounded-xl focus:border-primary-500 focus:outline-none bg-white dark:bg-slate-700 text-gray-900 dark:text-gray-100"
                    disabled={showAnswer}
                  />
                  <button
                    onClick={handleSubmit}
                    disabled={!userAnswer || showAnswer}
                    className="w-full mt-4 bg-primary-600 text-white py-3 rounded-xl font-semibold hover:bg-primary-700 transition disabled:opacity-50"
                  >
                    Check Answer
                  </button>
                </div>

                {/* Result */}
                {showAnswer && (
                  <div className={`mt-6 p-4 rounded-xl ${isCorrect ? 'bg-green-50 dark:bg-green-900/30' : 'bg-red-50 dark:bg-red-900/30'}`}>
                    <div className={`text-center mb-4 ${isCorrect ? 'text-green-700 dark:text-green-300' : 'text-red-700 dark:text-red-300'}`}>
                      <span className="text-2xl">{isCorrect ? '✓ Correct!' : '✗ Incorrect'}</span>
                    </div>

                    {!isCorrect && (
                      <>
                        <p className="text-center text-gray-600 dark:text-gray-300 mb-2">
                          Correct answer: <strong>{currentProblem.targetValue.toFixed(2)} {currentProblem.conversion.toUnit}</strong>
                        </p>
                        <div className="bg-white dark:bg-slate-800 rounded-lg p-3 text-center text-sm text-gray-600 dark:text-gray-300">
                          {currentProblem.conversion.factor === -999
                            ? `Formula: ${currentProblem.conversion.explanation}`
                            : `${currentProblem.value} × ${currentProblem.conversion.factor} = ${currentProblem.targetValue.toFixed(3)}`
                          }
                        </div>
                      </>
                    )}

                    {currentProblem.conversion.mnemonic && (
                      <div className="mt-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg p-3">
                        <p className="text-xs text-blue-800 dark:text-blue-200">
                          <strong>Memory tip:</strong> {currentProblem.conversion.mnemonic}
                        </p>
                      </div>
                    )}
                  </div>
                )}

                <button
                  onClick={generateNewProblem}
                  className="w-full mt-4 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-200 py-3 rounded-xl font-semibold hover:bg-gray-200 dark:bg-slate-700 transition"
                >
                  Next Problem →
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Reference Tab */}
      {activeTab === 'reference' && (
        <div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {conversionCategories.map((category) => (
              <div key={category.id} className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border dark:border-slate-700 p-5">
                <h3 className="font-semibold text-lg mb-2 text-primary-700 dark:text-primary-300">{category.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 dark:text-gray-500 mb-3">{category.description}</p>

                <div className="space-y-2">
                  {conversions
                    .filter(conversion => conversion.category === category.id)
                    .slice(0, 8)
                    .map((conversion) => (
                      <div key={conversion.id} className="flex justify-between text-sm border-b pb-2">
                        <span className="text-gray-600 dark:text-gray-300">
                          {conversion.fromUnit} → {conversion.toUnit}
                        </span>
                        <span className="font-medium text-gray-800 dark:text-gray-200">
                          {conversion.factor === -999 ? 'Formula' : `×${conversion.factor}`}
                        </span>
                      </div>
                    ))}
                </div>

                <button
                  onClick={() => {
                    setSelectedCategory(category.id);
                    setActiveTab('practice');
                  }}
                  className="mt-3 text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:text-primary-300 font-medium"
                >
                  Practice this category →
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Memory Tips Tab */}
      {activeTab === 'memory' && (
        <div>
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Memory Techniques */}
            <div>
              <h3 className="font-bold text-xl mb-4">Memory Techniques</h3>
              <div className="space-y-4">
                {memoryTechniques.map((technique, index) => (
                  <div key={index} className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border dark:border-slate-700 p-5">
                    <h4 className="font-semibold text-lg mb-2">{technique.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">{technique.description}</p>
                    <p className="text-primary-700 dark:text-primary-300 text-sm bg-primary-50 dark:bg-primary-900/30 p-2 rounded">
                      <strong>How to apply:</strong> {technique.howToApply}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Conversion Groups */}
            <div>
              <h3 className="font-bold text-xl mb-4">Conversion Groups</h3>
              <div className="space-y-4">
                {commonConversionGroups.map((group, groupIndex) => (
                  <div key={groupIndex} className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border dark:border-slate-700 p-5">
                    <h4 className="font-semibold text-lg mb-2">{group.name}</h4>
                    <div className="space-y-2 mb-3">
                      {(group as any).conversions?.map((conversion: any, conversionIndex: number) => (
                        <div key={conversionIndex} className="text-sm">
                          <span className="font-medium">{conversion.from}</span>
                          <span className="text-gray-400 dark:text-gray-500 mx-2">→</span>
                          <span>{conversion.to}</span>
                          {'note' in conversion && (
                            <span className="text-gray-500 dark:text-gray-400 dark:text-gray-500 text-xs ml-2">({(conversion as any).note})</span>
                          )}
                        </div>
                      ))}
                    </div>
                    <p className="text-sm text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30 p-2 rounded">
                      <strong>Memory tip:</strong> {group.memoryTip}
                    </p>
                  </div>
                ))}

                {/* Common Water Equivalencies */}
                <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-5">
                  <h4 className="font-semibold text-lg mb-3">🌊 Water Equivalencies (Useful Constants)</h4>
                  <ul className="space-y-2 text-sm">
                    <li>1 L water = 1 kg (at 4°C)</li>
                    <li>1 m³ water = 1000 L = 1 tonne</li>
                    <li>1 ft³ water = 62.4 lb = 7.48 gal</li>
                    <li>1 acre-foot = 1233.48 m³ = 325,851 gal</li>
                    <li>Density of water ≈ 1000 kg/m³ ≈ 1 g/cm³</li>
                    <li>Specific heat of water = 4.186 kJ/kg·K</li>
                  </ul>
                </div>

                {/* Quick Reference Table */}
                <div className="bg-amber-50 dark:bg-amber-900/30 rounded-xl p-5">
                  <h4 className="font-semibold text-lg mb-3">⚡ Power & Energy Quick Ref</h4>
                  <ul className="space-y-2 text-sm">
                    <li>1 hp = 746 W = 0.746 kW</li>
                    <li>1 kW = 1.341 hp</li>
                    <li>1 BTU = 1.055 kJ</li>
                    <li>1 kcal = 4.184 kJ</li>
                    <li>1 kWh = 3.6 MJ</li>
                    <li>1 cal = 4.184 J</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ConversionsPage() {
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
      <ConversionsContent />
    </Suspense>
  );
}