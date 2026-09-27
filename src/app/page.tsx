import Link from 'next/link';
import { tosStructure } from '@/data/tos';

const areaMeta = {
  A: { bg: 'bg-primary-100 dark:bg-primary-900/50', text: 'text-primary-700 dark:text-primary-300', tag: 'bg-primary-600/10 text-primary-700 dark:text-primary-300' },
  B: { bg: 'bg-green-100 dark:bg-green-900/50', text: 'text-green-700 dark:text-green-300', tag: 'bg-green-600/10 text-green-700 dark:text-green-300' },
  C: { bg: 'bg-amber-100 dark:bg-amber-900/50', text: 'text-amber-700 dark:text-amber-300', tag: 'bg-amber-600/10 text-amber-700 dark:text-amber-300' },
};

export default function Home() {
  const areas = ['A', 'B', 'C'] as const;

  return (
    <div>
      <div className="bg-primary-700 text-white">
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-28">
          <div className="max-w-2xl">
            <p className="text-primary-200 text-sm font-medium mb-3 tracking-widest uppercase">
              PRC ABELE-TOS Based
            </p>
            <h1 className="text-4xl md:text-5xl font-display leading-tight mb-4">
              ABE Board Exam<br />Preparation
            </h1>
             <p className="text-lg text-primary-100 leading-relaxed mb-8">
               2,000+ questions across three TOS areas, PAES standards study with 100 questions per standard, ABE trivias, step-by-step solutions, formula references, and mock tests that simulate the actual board exam.
             </p>
<div className="flex flex-wrap gap-3">
                <Link href="/practice" className="bg-white text-primary-800 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition text-sm">
                  Start Mock Test
                </Link>
                <Link href="/paes" className="border border-primary-400 text-primary-100 px-6 py-3 rounded-lg font-semibold hover:bg-primary-600 transition text-sm">
                  PAES Standards
                </Link>
                <Link href="/trivias" className="border border-primary-400 text-primary-100 px-6 py-3 rounded-lg font-semibold hover:bg-primary-600 transition text-sm">
                  Trivias
                </Link>
                <Link href="/recall" className="border border-primary-400 text-primary-100 px-6 py-3 rounded-lg font-semibold hover:bg-primary-600 transition text-sm">
                  Recalled Exams
                </Link>
                <Link href="/formulas-practice" className="border border-primary-400 text-primary-100 px-6 py-3 rounded-lg font-semibold hover:bg-primary-600 transition text-sm">
                  Formula Practice
                </Link>
              </div>
          </div>
        </div>
      </div>

      <div className="bg-primary-800 border-t border-primary-600">
        <div className="max-w-6xl mx-auto px-4 py-5">
          <div className="flex flex-wrap gap-8 md:gap-16 justify-center md:justify-start">
            <div><span className="text-2xl font-bold text-white">20,000+</span> <span className="text-primary-200 text-sm ml-1">questions</span></div>
             <div><span className="text-2xl font-bold text-white">3</span> <span className="text-primary-200 text-sm ml-1">TOS areas</span></div>
             <div><span className="text-2xl font-bold text-white">170</span> <span className="text-primary-200 text-sm ml-1">PAES standards</span></div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-display mb-2">Examination Areas</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-10 max-w-xl">
          Three broad subject areas based on the PRC ABELE-TOS breakdown.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {areas.map((code, i) => {
            const subject = tosStructure[`subject${code}` as keyof typeof tosStructure];
            const meta = areaMeta[code];
            return (
              <Link
                key={code}
                href={`/quiz?area=${code}`}
                className={`group bg-white dark:bg-slate-800 rounded-2xl shadow-sm border dark:border-slate-700 hover:shadow-lg transition-all p-6 ${
                  i === 1 ? 'md:mt-8' : i === 2 ? 'md:mt-4' : ''
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 ${meta.bg} ${meta.text} rounded-xl flex items-center justify-center font-bold text-lg`}>
                    {code}
                  </div>
                  <div className="text-xs text-gray-400">
                    <span className={`inline-block px-2 py-0.5 rounded ${meta.tag}`}>
                      {subject?.percentage}% of exam
                    </span>
                  </div>
                </div>
                <h3 className="font-display text-lg mb-2 leading-snug">{subject?.name?.split('(')[0]?.trim() || `Area ${code}`}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {code === 'A' ? 'Internal combustion engines, tractors, field capacity, drawbar power, fuel consumption, PAES standards, mechanization planning, automation, laws.' :
                   code === 'B' ? 'Hydrology, irrigation, drainage, USLE, SCS curve number, Manning flow, flood risk, crop evapotranspiration, pumps, soil conservation.' :
                   'Farm structures, drying, moisture content, heat transfer, biogas, fermenter design, feed formulation, ventilation, food processing.'}
                </p>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="bg-gray-100 dark:bg-slate-800/50 border-t border-b dark:border-slate-700">
<div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-display mb-2">How it works</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-10 max-w-xl">
            Five study modes designed for board exam preparation.
          </p>
           <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div>
              <span className="text-3xl font-display text-primary-600 dark:text-primary-400 block mb-3">01</span>
              <h3 className="font-display text-lg mb-2">Mock Tests</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                100 randomly selected questions per area. Marks the tough ones and tracks weak topics.
              </p>
            </div>
            <div>
              <span className="text-3xl font-display text-primary-600 dark:text-primary-400 block mb-3">02</span>
              <h3 className="font-display text-lg mb-2">PAES Standards</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                170 PAES and PNS standards with 100 generated questions each. Organized by TOS area and subcategory.
              </p>
            </div>
            <div>
              <span className="text-3xl font-display text-primary-600 dark:text-primary-400 block mb-3">03</span>
              <h3 className="font-display text-lg mb-2">ABE Trivias</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                50 facts about PAES, laws, machinery, engines, irrigation, and more. Flip-card study format.
              </p>
            </div>
            <div>
              <span className="text-3xl font-display text-primary-600 dark:text-primary-400 block mb-3">04</span>
              <h3 className="font-display text-lg mb-2">Recalled Exams</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                1,000+ questions from 2021-2025 board exams. Each question expanded to 4 variants for maximum retention.
              </p>
            </div>
            <div>
              <span className="text-3xl font-display text-primary-600 dark:text-primary-400 block mb-3">05</span>
              <h3 className="font-display text-lg mb-2">Formula Practice</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                577 board-style word problems across 58 formulas. Direct application, unit conversions, rearranged, extraneous givens, and mistake traps.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}