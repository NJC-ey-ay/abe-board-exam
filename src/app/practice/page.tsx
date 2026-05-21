'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { MathFormula } from '@/lib/math-renderer';
import { areaFormulas, type FormulaCategory } from '@/data/formulas';
import { tosStructure, getSubjectByCode } from '@/data/tos';

type TabType = 'mock-test' | 'formulas' | 'reference';

function PracticeContent() {
  const searchParams = useSearchParams();
  const initialTab = (searchParams.get('tab') as TabType) || 'mock-test';
  const [activeTab, setActiveTab] = useState<TabType>(initialTab);
  const [formulaArea, setFormulaArea] = useState<string>('A');
  const [tosArea, setTosArea] = useState<string>('A');

  const activeFormulas = areaFormulas.find(f => f.areaCode === formulaArea) || areaFormulas[0];
  const activeTosSubject = getSubjectByCode(tosArea);

  const tabs: { key: TabType; label: string }[] = [
    { key: 'mock-test', label: 'Mock Test' },
    { key: 'formulas', label: 'Formula Reference' },
    { key: 'reference', label: 'TOS Reference' },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Tab Bar */}
      <div className="flex gap-1 mb-8 bg-gray-100 dark:bg-slate-800 rounded-xl p-1">
        {tabs.map(t => (
          <button
            key={t.key}
            onClick={() => setActiveTab(t.key)}
            className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-medium transition ${
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
                Power, Energy &amp; Machinery
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
                Land &amp; Water Resources
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
                Structures &amp; Bioprocess
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
                    </div>
                  ))}
                </div>
              </div>
            ))}
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