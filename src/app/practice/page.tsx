'use client';

import { useState, Suspense, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { MathFormula } from '@/lib/math-renderer';
import { areaFormulas, type Formula } from '@/data/formulas';
import { tosStructure, getSubjectByCode } from '@/data/tos';
import { keywordRules } from '@/data/formula-guide';
import { keywordFormulas, findFormulasByKeyword } from '@/data/formula-keywords';
import { getDrillsByArea, getDrillQuestions } from '@/data/formula-drills';
import { areaCoverage } from '@/data/formula-practice-index';
import { DrillRunner, type DrillMetaView } from '@/components/DrillRunner';
import type { Question } from '@/data/comprehensive-questions';

type TabType = 'mock-test' | 'formulas' | 'formula-guide' | 'keywords' | 'reference' | 'recall' | 'formula-practice' | 'drills';

function findFormulaById(id: string): Formula | null {
  for (const category of areaFormulas) {
    for (const topic of category.topics) {
      const found = topic.formulas.find(f => f.id === id);
      if (found) return found;
    }
  }
  return null;
}

// Derived from the data so the cards can never drift out of sync with the
// handbook reference or the practice bank. Note this reports the practice-bank
// coverage behind the "Start Formula Practice" link; the separate Equation
// Practice tab has its own generated drills and its own counter.
const practiceStats = areaFormulas.map((category) => {
  const coverage = areaCoverage(category.areaCode);
  return {
    areaCode: category.areaCode,
    label: category.area,
    color: category.color,
    refCount: coverage.total,
    practiceCount: coverage.withProblems,
    problemCount: coverage.problems,
  };
});

const totalRefCount = practiceStats.reduce((sum, s) => sum + s.refCount, 0);
const totalPracticeCount = practiceStats.reduce((sum, s) => sum + s.practiceCount, 0);

// Tailwind's JIT scanner cannot see class names built by interpolation, so the
// area palettes are written out literally.
const practiceCardTheme: Record<string, { card: string; heading: string }> = {
  primary: {
    card: 'border-primary-200 dark:border-primary-800',
    heading: 'text-primary-700 dark:text-primary-300',
  },
  green: {
    card: 'border-green-200 dark:border-green-800',
    heading: 'text-green-700 dark:text-green-300',
  },
  amber: {
    card: 'border-amber-200 dark:border-amber-800',
    heading: 'text-amber-700 dark:text-amber-300',
  },
};

function PracticeContent() {
  const searchParams = useSearchParams();
  const initialTab = (searchParams.get('tab') as TabType) || 'mock-test';
  const [activeTab, setActiveTab] = useState<TabType>(initialTab);
  const [formulaArea, setFormulaArea] = useState<string>('A');
  const [tosArea, setTosArea] = useState<string>('A');
  const [keywordSearch, setKeywordSearch] = useState('');
  const [guideArea, setGuideArea] = useState<string>('all');
  const [selectedRule, setSelectedRule] = useState<number | null>(null);
  const [drillArea, setDrillArea] = useState<'A' | 'B' | 'C'>('A');
  const [activeDrill, setActiveDrill] = useState<DrillMetaView | null>(null);
  const [drillQuestions, setDrillQuestions] = useState<Question[]>([]);
  const [drillKey, setDrillKey] = useState(0);
  const [drillSeed, setDrillSeed] = useState(() => Math.floor(Math.random() * 4294967296));

  const drillMetas = getDrillsByArea(drillArea);

  useEffect(() => {
    if (activeDrill) {
      setDrillQuestions(getDrillQuestions(activeDrill.formulaId, drillSeed));
    }
  }, [activeDrill]);

  const startDrill = (meta: DrillMetaView) => {
    setDrillSeed(Math.floor(Math.random() * 4294967296));
    setActiveDrill(meta);
    setDrillKey(k => k + 1);
  };

  const resetDrill = () => {
    setActiveDrill(null);
    setDrillQuestions([]);
    setDrillKey(k => k + 1);
  };

  const activeFormulas = areaFormulas.find(f => f.areaCode === formulaArea) || areaFormulas[0];
  const activeTosSubject = getSubjectByCode(tosArea);
  const filteredKeywords = keywordSearch
    ? findFormulasByKeyword(keywordSearch)
    : keywordFormulas;

  const tabs: { key: TabType; label: string }[] = [
    { key: 'mock-test', label: 'Mock Test' },
    { key: 'formulas', label: 'Formula Reference' },
    { key: 'formula-guide', label: 'Formula Guide' },
    { key: 'keywords', label: 'Keyword Reference' },
    { key: 'reference', label: 'TOS Reference' },
    { key: 'recall', label: 'Recalled Exams' },
    { key: 'formula-practice', label: 'Formula Practice' },
    { key: 'drills', label: 'Equation Practice' },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Tab Bar */}
      <div className="flex gap-1 mb-8 bg-gray-100 dark:bg-slate-800 rounded-xl p-1 overflow-x-auto">
        {tabs.map(t => (
          <button
            key={t.key}
            onClick={() => setActiveTab(t.key)}
            className={`flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-medium transition whitespace-nowrap ${
              activeTab === t.key
                ? 'bg-white dark:bg-slate-700 shadow text-primary-700 dark:text-primary-300'
                : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Mock Test Tab */}
      {activeTab === 'mock-test' && (
        <>
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold mb-3">ABE Board Exam Mock Test</h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Choose your area to begin a 100-item board exam simulation tailored to the PRC ABELE-TOS.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Link
              href="/quiz?area=A"
              className="group bg-white dark:bg-slate-800 rounded-2xl shadow-sm border-2 border-primary-200 dark:border-primary-800 hover:border-primary-500 hover:shadow-lg transition-all p-6 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/50 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="text-3xl font-bold text-primary-700 dark:text-primary-300">A</span>
              </div>
              <h2 className="text-xl font-bold mb-2">Mock Test A</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">100 Items</p>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                Power, Energy & Machinery
              </p>
              <div className="mt-4 bg-primary-600 text-white px-6 py-2 rounded-full text-sm font-semibold group-hover:bg-primary-700 transition">
                Start Mock Test
              </div>
            </Link>

            <Link
              href="/quiz?area=B"
              className="group bg-white dark:bg-slate-800 rounded-2xl shadow-sm border-2 border-green-200 dark:border-green-800 hover:border-green-500 hover:shadow-lg transition-all p-6 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/50 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="text-3xl font-bold text-green-700 dark:text-green-300">B</span>
              </div>
              <h2 className="text-xl font-bold mb-2">Mock Test B</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">100 Items</p>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                Land & Water Resources
              </p>
              <div className="mt-4 bg-green-600 text-white px-6 py-2 rounded-full text-sm font-semibold group-hover:bg-green-700 transition">
                Start Mock Test
              </div>
            </Link>

            <Link
              href="/quiz?area=C"
              className="group bg-white dark:bg-slate-800 rounded-2xl shadow-sm border-2 border-amber-200 dark:border-amber-800 hover:border-amber-500 hover:shadow-lg transition-all p-6 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/50 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="text-3xl font-bold text-amber-700 dark:text-amber-300">C</span>
              </div>
              <h2 className="text-xl font-bold mb-2">Mock Test C</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">100 Items</p>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                Structures, Environment &amp; Bioprocess
              </p>
              <div className="mt-4 bg-amber-600 text-white px-6 py-2 rounded-full text-sm font-semibold group-hover:bg-amber-700 transition">
                Start Mock Test
              </div>
            </Link>
          </div>
        </>
      )}

      {/* Formula Reference Tab */}
      {activeTab === 'formulas' && (
        <div>
          <h1 className="text-3xl font-bold mb-2">Formula Reference</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Key formulas for the ABE Board Exam, organized by TOS area.
          </p>

          <div className="flex gap-2 mb-6">
            {areaFormulas.map(f => (
              <button
                key={f.areaCode}
                onClick={() => setFormulaArea(f.areaCode)}
                className={`px-5 py-2 rounded-lg text-sm font-semibold transition ${
                  formulaArea === f.areaCode
                    ? 'bg-primary-600 text-white shadow'
                    : 'bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600'
                }`}
              >
                Area {f.areaCode}
              </button>
            ))}
          </div>

          <div className="space-y-6">
            {activeFormulas.topics.map(topic => (
              <div key={topic.topic}>
                <h3 className="text-lg font-bold mb-3 text-primary-700 dark:text-primary-300">
                  {topic.topic}
                </h3>
                <div className="space-y-3">
                  {topic.formulas.map(fm => (
                    <div
                      key={fm.name}
                      className="bg-white dark:bg-slate-800 rounded-xl border dark:border-slate-700 p-4"
                    >
                      <div className="font-semibold mb-1 text-sm text-gray-500 dark:text-gray-400">
                        {fm.name}
                      </div>
                      <div className="mb-2">
                        <MathFormula formula={fm.formula} display />
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-1 text-xs text-gray-600 dark:text-gray-400">
                        {fm.variables.map(v => (
                          <div key={v.symbol}>
                            <span className="font-mono font-semibold">{v.symbol}</span> — {v.meaning}
                          </div>
                        ))}
                      </div>
                      {fm.notes && (
                        <div className="mt-2 text-xs text-gray-500 dark:text-gray-500 italic">
                          {fm.notes}
                        </div>
                      )}
                      {fm.workedExample && (
                        <div className="mt-3 border-t border-gray-200 dark:border-slate-700 pt-3">
                          <div className="text-xs font-semibold text-primary-700 dark:text-primary-300 mb-1">
                            Worked Example
                          </div>
                          <div className="text-xs text-gray-600 dark:text-gray-300 mb-2">
                            {fm.workedExample.scenario}
                          </div>
                          <ol className="space-y-1">
                            {fm.workedExample.steps.map((s, i) => (
                              <li key={i} className="text-xs text-gray-600 dark:text-gray-300">
                                <span className="font-semibold">Step {i + 1}:</span>{' '}
                                <MathFormula formula={s.formula} /> ={' '}
                                <span className="font-mono font-semibold">{s.result}</span>
                              </li>
                            ))}
                          </ol>
                          <div className="mt-2 text-xs text-gray-700 dark:text-gray-200 font-medium">
                            {fm.workedExample.answer}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Formula Guide Tab (Our keyword-based guide) */}
      {activeTab === 'formula-guide' && (
        <div>
          <h1 className="text-3xl font-bold mb-2">Formula Guide</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Find the right formula by typing keywords from the problem. Each entry shows which keywords indicate that formula.
          </p>

          {/* Search */}
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Search keywords (e.g., field capacity, fuel consumption, SCS, Manning)..."
              value={keywordSearch}
              onChange={e => { setKeywordSearch(e.target.value); setSelectedRule(null); }}
              className="w-full px-4 py-3 pl-10 bg-white dark:bg-slate-800 border dark:border-slate-700 rounded-xl text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
          </div>

          {/* Area filter */}
          <div className="flex gap-2 mb-6">
            <button
              onClick={() => setGuideArea('all')}
              className={`px-4 py-1.5 rounded-lg text-xs font-medium transition ${guideArea === 'all' ? 'bg-primary-600 text-white' : 'bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300'}`}
            >
              All Areas
            </button>
            {(['A', 'B', 'C'] as const).map(a => (
              <button
                key={a}
                onClick={() => setGuideArea(a)}
                className={`px-4 py-1.5 rounded-lg text-xs font-medium transition ${guideArea === a ? 'bg-primary-600 text-white' : 'bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300'}`}
              >
                Area {a}
              </button>
            ))}
          </div>

          {/* Results */}
          {(() => {
            const searchLower = keywordSearch.toLowerCase();
            const filtered = keywordRules.filter(r => {
              if (guideArea !== 'all' && r.area !== guideArea) return false;
              if (!searchLower) return true;
              return r.keywords.some(k => k.toLowerCase().includes(searchLower)) ||
                r.formulaName.toLowerCase().includes(searchLower) ||
                r.topic.toLowerCase().includes(searchLower) ||
                r.hint.toLowerCase().includes(searchLower);
            });

            if (filtered.length === 0) {
              return (
                <div className="text-center py-12 text-gray-400">
                  No matching formulas found. Try different keywords.
                </div>
              );
            }

            const areaColors: Record<string, string> = {
              A: 'border-primary-200 dark:border-primary-800',
              B: 'border-green-200 dark:border-green-800',
              C: 'border-amber-200 dark:border-amber-800',
            };
            const areaBadges: Record<string, string> = {
              A: 'bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300',
              B: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
              C: 'bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300',
            };

            return (
              <div className="space-y-3">
                {filtered.map((rule, i) => {
                  const originalIndex = keywordRules.indexOf(rule);
                  const isOpen = selectedRule === originalIndex;
                  return (
                    <div
                      key={i}
                      className={`bg-white dark:bg-slate-800 rounded-xl border-2 dark:border-slate-700 transition cursor-pointer ${
                        isOpen ? areaColors[rule.area] : 'border-gray-200 dark:border-slate-700 hover:border-primary-300'
                      }`}
                      onClick={() => setSelectedRule(isOpen ? null : originalIndex)}
                    >
                      <div className="p-4 flex items-start justify-between gap-4">
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                            <span className={`text-xs px-2 py-0.5 rounded font-medium ${areaBadges[rule.area]}`}>
                              Area {rule.area}
                            </span>
                            <span className="text-xs text-gray-400">{rule.topic}</span>
                          </div>
                          <h3 className="font-semibold text-sm mb-0.5">{rule.formulaName}</h3>
                          <div className="flex flex-wrap gap-1.5 mb-1">
                            {rule.keywords.slice(0, 5).map(kw => {
                              const match = searchLower && kw.toLowerCase().includes(searchLower);
                              return (
                                <span key={kw} className={`text-xs px-2 py-0.5 rounded-full ${
                                  match
                                    ? 'bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300 font-medium ring-1 ring-primary-400'
                                    : 'bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-gray-400'
                                }`}>
                                  {kw}
                                  {match && ' ←'}
                                </span>
                              );
                            })}
                            {rule.keywords.length > 5 && (
                              <span className="text-xs text-gray-400">+{rule.keywords.length - 5} more</span>
                            )}
                          </div>
                        </div>
                        <span className="text-lg shrink-0 text-gray-300">{isOpen ? '▼' : '▶'}</span>
                      </div>

                      {isOpen && (
                        <div className="px-4 pb-4 border-t dark:border-slate-700 pt-3 space-y-3">
                          <div className="bg-primary-50 dark:bg-primary-900/30 rounded-xl p-4 flex justify-center overflow-x-auto">
                            <MathFormula formula={rule.formula} display />
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-300">{rule.hint}</p>
                          {rule.example && (
                            <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-xl p-3">
                              <p className="text-xs text-green-700 dark:text-green-300 font-medium mb-1">Example</p>
                              <p className="text-sm text-green-800 dark:text-green-200">{rule.example}</p>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            );
          })()}
        </div>
      )}

      {/* Keyword Reference Tab (Their keyword search) */}
      {activeTab === 'keywords' && (
        <div>
          <h1 className="text-3xl font-bold mb-2">Keyword Formula Reference</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Search keywords you see in a problem to find the right formula to use.
          </p>

          <div className="mb-6">
            <input
              type="text"
              value={keywordSearch}
              onChange={e => setKeywordSearch(e.target.value)}
              placeholder="Search keywords... e.g. field capacity, runoff, moisture content, Manning"
              className="w-full px-4 py-3 rounded-xl border dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
            />
          </div>

          {!keywordSearch && (
            <div className="flex gap-2 mb-6 flex-wrap">
              {['A', 'B', 'C'].map(area => (
                <button
                  key={area}
                  onClick={() => {
                    const first = keywordFormulas.find(f => f.area === area);
                    if (first) {
                      setKeywordSearch('');
                      setTimeout(() => {
                        document.getElementById(`keyword-${area}-0`)?.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }
                  }}
                  className="px-4 py-2 rounded-lg text-sm font-semibold bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600 transition"
                >
                  Area {area}
                </button>
              ))}
              <span className="text-sm text-gray-400 self-center ml-2">{keywordFormulas.length} entries</span>
            </div>
          )}

          {filteredKeywords.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              No formulas match "{keywordSearch}". Try a different keyword.
            </div>
          )}

          <div className="space-y-3">
            {filteredKeywords.map((kf, i) => {
              const fm = findFormulaById(kf.formulaId);
              return (
                <div
                  key={i}
                  id={`keyword-${kf.area}-${i}`}
                  className="bg-white dark:bg-slate-800 rounded-xl border dark:border-slate-700 p-4"
                >
                  <div className="flex items-start gap-2 mb-2">
                    <div className="flex flex-wrap gap-1.5 flex-1">
                      {kf.keywords.map(kw => (
                        <span
                          key={kw}
                          className="inline-block bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 text-xs px-2 py-0.5 rounded-full font-medium"
                        >
                          {kw}
                        </span>
                      ))}
                    </div>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded shrink-0 ${
                      kf.area === 'A' ? 'bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300' :
                      kf.area === 'B' ? 'bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300' :
                      'bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300'
                    }`}>
                      {kf.area}
                    </span>
                  </div>
                  <div className="font-semibold text-sm text-gray-800 dark:text-gray-200 mb-1">
                    {kf.formulaName}
                    {fm && fm.name !== kf.formulaName && (
                      <span className="ml-1 text-xs font-normal text-gray-400">({fm.name})</span>
                    )}
                  </div>
                  <div className="mb-2">
                    {fm ? (
                      <MathFormula formula={fm.formula} display />
                    ) : (
                      <div className="text-sm text-amber-600 dark:text-amber-400">
                        Formula moved — see the Formula Reference tab for this entry.
                      </div>
                    )}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-medium text-gray-700 dark:text-gray-300">When to use: </span>
                    {kf.whenToUse}
                  </div>
                  {kf.example && (
                    <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-medium text-gray-700 dark:text-gray-300">Example: </span>
                      {kf.example}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TOS Reference Tab */}
      {activeTab === 'reference' && (
        <div>
          <h1 className="text-3xl font-bold mb-2">PRC ABELE-TOS Reference</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Examination structure and topic competencies based on the ABELE-TOS.
          </p>

          <div className="flex gap-2 mb-6">
            {['A', 'B', 'C'].map(code => {
              const subj = getSubjectByCode(code);
              return (
                <button
                  key={code}
                  onClick={() => setTosArea(code)}
                  className={`px-5 py-2 rounded-lg text-sm font-semibold transition ${
                    tosArea === code
                      ? 'bg-primary-600 text-white shadow'
                      : 'bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600'
                  }`}
                >
                  Area {code} ({subj?.percentage}%)
                </button>
              );
            })}
          </div>

          {activeTosSubject && (
            <div className="space-y-4">
              <h2 className="text-xl font-bold">{activeTosSubject.name}</h2>
              {activeTosSubject.subTopics.map(st => (
                <div
                  key={st.id}
                  className="bg-white dark:bg-slate-800 rounded-xl border dark:border-slate-700 p-4"
                >
                  <h3 className="font-bold mb-2 text-primary-700 dark:text-primary-300">
                    {st.name}
                  </h3>
                  <ul className="space-y-1">
                    {st.competencies.map((c, i) => (
                      <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                        <span className="text-primary-400 mt-0.5 shrink-0">•</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Recalled Exams Tab */}
      {activeTab === 'recall' && (
        <div className="text-center py-12">
          <h1 className="text-3xl font-bold mb-3">Recalled Board Exams (2021-2025)</h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Practice with 1,000+ questions from actual ABELE board exams (2021-2025). Each original question expanded to 4 variants — every option becomes the correct answer once — for maximum learning retention.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-8 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-slate-800 rounded-xl border dark:border-slate-700 p-6">
              <h3 className="text-xl font-bold mb-2 text-primary-700 dark:text-primary-300">By Area</h3>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <div>Area A: Power, Energy & Machinery</div>
                <div>Area B: Land & Water Resources</div>
                <div>Area C: Structures, Environment &amp; Bioprocess</div>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl border dark:border-slate-700 p-6">
              <h3 className="text-xl font-bold mb-2 text-green-700 dark:text-green-300">By Year</h3>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <div>2021 • 2022 • 2023</div>
                <div>2024 • 2025</div>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl border dark:border-slate-700 p-6">
              <h3 className="text-xl font-bold mb-2 text-amber-700 dark:text-amber-300">Features</h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 text-left">
                <li>• 4 variants per question (each option as correct answer)</li>
                <li>• Step-by-step solutions with formula walkthroughs</li>
                <li>• Weak point tracking & formula sidebar</li>
                <li>• Filter by Area, Year, Difficulty</li>
              </ul>
            </div>
          </div>
          <Link
            href="/recall"
            className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
          >
            Start Recalled Exams Session
          </Link>
        </div>
      )}

      {/* Formula Practice Tab */}
      {activeTab === 'formula-practice' && (
        <div className="text-center py-12">
          <h1 className="text-3xl font-bold mb-3">Formula Practice</h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Drill board-exam style word problems against the formula reference transcribed from the
            official ABELE handbooks. Each available formula has 10 problems covering direct
            application, unit conversions, rearranged variables, extraneous givens, and common
            mistake traps.
          </p>
          <p className="text-sm text-gray-500 mb-8 max-w-2xl mx-auto">
            {totalRefCount} reference formulas across Areas A, B and C. Word problems are available
            for {totalPracticeCount} of them so far &mdash; the rest are reference-only until more are
            generated.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-8 max-w-4xl mx-auto">
            {practiceStats.map((s) => (
              <div
                key={s.areaCode}
                className={`bg-white dark:bg-slate-800 rounded-xl border-2 p-6 ${practiceCardTheme[s.color]?.card ?? ''}`}
              >
                <h3 className={`text-xl font-bold mb-2 ${practiceCardTheme[s.color]?.heading ?? ''}`}>
                  Area {s.areaCode}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{s.label}</p>
                <p className="text-sm text-gray-500">
                  {s.refCount} formulas &bull; {s.practiceCount} with problems &bull;{' '}
                  {s.problemCount} questions
                </p>
              </div>
            ))}
          </div>
          <Link
            href="/formulas-practice"
            className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
          >
            Start Formula Practice
          </Link>
        </div>
      )}

      {/* Equation Practice Tab (Their drills) */}
      {activeTab === 'drills' && (
        <div>
          {activeDrill ? (
            <DrillRunner
              key={drillKey}
              questions={drillQuestions}
              formulaName={activeDrill.name}
              formula={activeDrill.formula}
              onExit={resetDrill}
            />
          ) : (
            <>
              <h1 className="text-3xl font-bold mb-2">Equation Practice</h1>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Pick a formula and drill 10 multiple-choice computation problems with full step-by-step solutions.
              </p>

              <div className="flex gap-2 mb-6">
                {(['A', 'B', 'C'] as const).map(area => (
                  <button
                    key={area}
                    onClick={() => setDrillArea(area)}
                    className={`px-5 py-2 rounded-lg text-sm font-semibold transition ${
                      drillArea === area
                        ? 'bg-primary-600 text-white shadow'
                        : 'bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600'
                    }`}
                  >
                    Area {area}
                  </button>
                ))}
              </div>

              <div className="text-sm text-gray-500 mb-4">
                {drillMetas.length} formulas with drills available in Area {drillArea}
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {drillMetas.map(meta => (
                  <button
                    key={meta.formulaId}
                    onClick={() => startDrill(meta)}
                    className="group bg-white dark:bg-slate-800 rounded-xl border dark:border-slate-700 p-4 text-left hover:shadow-lg hover:border-primary-400 transition"
                  >
                    <div className="font-semibold text-gray-800 dark:text-gray-200 mb-2 group-hover:text-primary-700 dark:group-hover:text-primary-300">
                      {meta.name}
                    </div>
                    <div className="mb-3 overflow-x-auto">
                      <MathFormula formula={meta.formula} display />
                    </div>
                    <div className="inline-flex items-center gap-2 bg-primary-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full group-hover:bg-primary-700 transition">
                      Start {meta.questionCount}-question drill
                    </div>
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default function PracticePage() {
  return (
    <Suspense fallback={<div className="max-w-5xl mx-auto px-4 py-8"><div className="animate-pulse bg-gray-200 dark:bg-slate-700 h-96 rounded-xl" /></div>}>
      <PracticeContent />
    </Suspense>
  );
}