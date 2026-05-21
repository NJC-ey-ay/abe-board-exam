'use client';

import Link from 'next/link';

export default function PracticePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-3">ABE Board Exam Mock Test</h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          Choose your area to begin a 100-item board exam simulation tailored to the PRC ABELE-TOS.
        </p>
      </div>

      {/* Mock Test Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {/* Area A */}
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
            Power, Energy &amp; Machinery — machines, PAES standards, applied computations, laws, and engine performance.
          </p>
          <div className="mt-4 bg-primary-600 text-white px-6 py-2 rounded-full text-sm font-semibold group-hover:bg-primary-700 transition">
            Start Mock Test
          </div>
        </Link>

        {/* Area B */}
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
            Land &amp; Water Resources — irrigation, hydrology, soil conservation, USLE, and drainage design.
          </p>
          <div className="mt-4 bg-green-600 text-white px-6 py-2 rounded-full text-sm font-semibold group-hover:bg-green-700 transition">
            Start Mock Test
          </div>
        </Link>

        {/* Area C */}
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
            Structures &amp; Bioprocess — farm structures, post-harvest, biogas, food processing, and waste management.
          </p>
          <div className="mt-4 bg-amber-600 text-white px-6 py-2 rounded-full text-sm font-semibold group-hover:bg-amber-700 transition">
            Start Mock Test
          </div>
        </Link>
      </div>

      {/* Info Section */}
      <div className="bg-gradient-to-r from-primary-700 to-primary-900 text-white rounded-xl p-6 mb-8">
        <h3 className="font-semibold mb-3">About the Mock Tests</h3>
        <ul className="space-y-2 text-sm text-primary-100">
          <li className="flex items-start gap-2">
            <span className="text-primary-300 mt-0.5">•</span>
            <span>Each mock test contains 100 board exam style questions tailored to the recalled ABELE Sept 2022 exam pattern.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary-300 mt-0.5">•</span>
            <span>Questions include definitions, equipment specifications, PAES standards, applied computations, laws, and practical field knowledge.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary-300 mt-0.5">•</span>
            <span>After answering each question, review step-by-step solutions, key concepts, and formula references.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary-300 mt-0.5">•</span>
            <span>Track your weak points and focus your review on areas that need improvement.</span>
          </li>
        </ul>
      </div>

      {/* Quick Links */}
      <div className="grid md:grid-cols-3 gap-4">
        <Link
          href="/practice?tab=formulas"
          className="bg-white dark:bg-slate-800 rounded-xl border dark:border-slate-700 p-4 text-center hover:border-primary-300 hover:shadow-md transition"
        >
          <div className="text-2xl mb-1">📐</div>
          <div className="font-medium">Formula Reference</div>
          <div className="text-xs text-gray-500">Key formulas by area</div>
        </Link>
        <Link
          href="/practice?tab=reference"
          className="bg-white dark:bg-slate-800 rounded-xl border dark:border-slate-700 p-4 text-center hover:border-primary-300 hover:shadow-md transition"
        >
          <div className="text-2xl mb-1">📋</div>
          <div className="font-medium">TOS Reference</div>
          <div className="text-xs text-gray-500">PRC ABELE-TOS topics</div>
        </Link>
        <Link
          href="/conversions"
          className="bg-white dark:bg-slate-800 rounded-xl border dark:border-slate-700 p-4 text-center hover:border-primary-300 hover:shadow-md transition"
        >
          <div className="text-2xl mb-1">🔄</div>
          <div className="font-medium">Unit Conversions</div>
          <div className="text-xs text-gray-500">Practice mode</div>
        </Link>
      </div>
    </div>
  );
}
