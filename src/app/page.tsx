import Link from 'next/link';
import { tosStructure } from '@/data/tos';

export default function Home() {
  // Count questions by area (simulated - would use comprehensive-questions.ts in full implementation)
  const areaQuestionCounts = { A: 50, B: 50, C: 60 };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-700 to-primary-900 text-white rounded-2xl p-8 mb-8">
        <h2 className="text-3xl font-bold mb-4">ABE Board Exam Preparation</h2>
        <p className="text-primary-100 text-lg mb-6">
          Comprehensive practice based on PRC ABELE-TOS. 100-item tests with step-by-step solutions, formula references, and weak point tracking.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/practice"
            className="bg-white dark:bg-slate-700 text-primary-700 dark:text-primary-300 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 dark:hover:bg-primary-900/50 transition"
          >
            Start Mock Test
          </Link>
          <Link
            href="/practice?tab=formulas"
            className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-500 transition"
          >
            Formula Reference
          </Link>
          <Link
            href="/practice?tab=formulas"
            className="bg-primary-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
          >
            Formulas
          </Link>
        </div>
      </div>

      {/* Area Distribution */}
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4">Examination Structure (TOS Based)</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl dark:bg-slate-800 p-6 shadow-sm border dark:border-slate-700-2 border-r-4 border-b-4 border-primary-500">
            <div className="flex items-center justify-between mb-3">
              <span className="text-3xl font-bold text-primary-600 dark:text-primary-400">32%</span>
              <span className="bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 px-3 py-1 rounded-full text-sm">Area A</span>
            </div>
            <h4 className="font-semibold mb-2">Power, Energy & Machinery</h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
              Agricultural and Biosystems Power Engineering, Mechanization, Machinery Testing, Automation, Project Management, and Laws
            </p>
            <div className="text-xs text-gray-500 dark:text-gray-400">{areaQuestionCounts.A}+ Questions</div>
          </div>
          <div className="bg-white rounded-xl dark:bg-slate-800 p-6 shadow-sm border dark:border-slate-700-2 border-r-4 border-b-4 border-green-500">
            <div className="flex items-center justify-between mb-3">
              <span className="text-3xl font-bold text-green-600 dark:text-green-400">32%</span>
              <span className="bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-sm">Area B</span>
            </div>
            <h4 className="font-semibold mb-2">Land & Water Resources</h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
              Hydrology, Irrigation & Drainage, Soil & Water Conservation, Aquaculture, Agricultural Sciences, Mathematics
            </p>
            <div className="text-xs text-gray-500 dark:text-gray-400">{areaQuestionCounts.B}+ Questions</div>
          </div>
          <div className="bg-white rounded-xl dark:bg-slate-800 p-6 shadow-sm border dark:border-slate-700-2 border-r-4 border-b-4 border-amber-500">
            <div className="flex items-center justify-between mb-3">
              <span className="text-3xl font-bold text-amber-600 dark:text-amber-400">36%</span>
              <span className="bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300 px-3 py-1 rounded-full text-sm">Area C</span>
            </div>
            <h4 className="font-semibold mb-2">Structures & Bioprocess</h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
              Agricultural Buildings, Farm Electrification, Environment Engineering, Bioprocess Engineering, Food Engineering
            </p>
            <div className="text-xs text-gray-500 dark:text-gray-400">{areaQuestionCounts.C}+ Questions</div>
          </div>
        </div>
      </div>

      {/* Mock Tests */}
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4">Mock Tests by Area</h3>
        <div className="grid md:grid-cols-4 gap-4">
          <Link
            href="/quiz?area=A"
            className="bg-primary-50 dark:bg-primary-900/30 rounded-xl p-5 hover:bg-primary-100 dark:hover:bg-primary-900/50 transition text-center"
          >
            <div className="text-2xl font-bold text-primary-700 dark:text-primary-300">A</div>
            <div className="text-sm text-primary-700 dark:text-primary-300 font-medium">100-Item Mock Test</div>
          </Link>
          <Link
            href="/quiz?area=B"
            className="bg-green-50 dark:bg-green-900/30 rounded-xl p-5 hover:bg-green-100 dark:hover:bg-green-900/50 transition text-center"
          >
            <div className="text-2xl font-bold text-green-700 dark:text-green-300">B</div>
            <div className="text-sm text-green-700 dark:text-green-300 font-medium">100-Item Mock Test</div>
          </Link>
          <Link
            href="/quiz?area=C"
            className="bg-amber-50 dark:bg-amber-900/30 rounded-xl p-5 hover:bg-amber-100 dark:hover:bg-amber-900/50 transition text-center"
          >
            <div className="text-2xl font-bold text-amber-700 dark:text-amber-300">C</div>
            <div className="text-sm text-amber-700 dark:text-amber-300 font-medium">100-Item Mock Test</div>
          </Link>
          <Link
            href="/practice"
            className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-5 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition text-center"
          >
            <div className="text-2xl font-bold text-blue-700 dark:text-blue-300">📋</div>
            <div className="text-sm text-blue-700 dark:text-blue-300 font-medium">Formulas &amp; TOS</div>
          </Link>
        </div>
      </div>

      {/* Difficulty Levels */}
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4">Difficulty Levels</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-green-50 dark:bg-green-900/30 rounded-xl p-5 border border-green-200 dark:border-green-800">
            <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">🟢 Easy</h4>
            <p className="text-sm text-green-700 dark:text-green-300">
              Same concept, changing given values. Practice problems to master basic understanding and formula application.
            </p>
          </div>
          <div className="bg-amber-50 dark:bg-amber-900/30 rounded-xl p-5 border border-amber-200 dark:border-amber-800">
            <h4 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">🟡 Average</h4>
            <p className="text-sm text-amber-700 dark:text-amber-300">
              Includes logic application. Multi-step solutions, slight difficulty increase, real-world contexts.
            </p>
          </div>
          <div className="bg-red-50 dark:bg-red-900/30 rounded-xl p-5 border border-red-200 dark:border-red-800">
            <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">🔴 Hard</h4>
            <p className="text-sm text-red-700 dark:text-red-300">
              Situational problems with missing constants. Tests critical thinking and engineering judgment.
            </p>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl dark:bg-slate-800 p-5 shadow-sm border dark:border-slate-700">
          <div className="text-2xl mb-2">📝</div>
          <h4 className="font-semibold mb-1">100-Item Mock Tests</h4>
          <p className="text-gray-600 dark:text-gray-300 text-sm">Area-specific board exam simulation</p>
        </div>
        <div className="bg-white rounded-xl dark:bg-slate-800 p-5 shadow-sm border dark:border-slate-700">
          <div className="text-2xl mb-2">✓</div>
          <h4 className="font-semibold mb-1">Step-by-Step Solutions</h4>
          <p className="text-gray-600 dark:text-gray-300 text-sm">Detailed explanations for both correct and wrong answers</p>
        </div>
        <div className="bg-white rounded-xl dark:bg-slate-800 p-5 shadow-sm border dark:border-slate-700">
          <div className="text-2xl mb-2">📐</div>
          <h4 className="font-semibold mb-1">Formula Reference</h4>
          <p className="text-gray-600 dark:text-gray-300 text-sm">Complete formula guide with descriptions</p>
        </div>
      </div>

      {/* TOS Reference Summary */}
      <div className="mt-8 bg-gray-50 dark:bg-slate-800/50 rounded-xl p-6">
        <h3 className="font-bold mb-4 dark:text-gray-200">TOS Topics Reference</h3>
        <div className="grid md:grid-cols-3 gap-6 text-sm">
          <div>
            <h4 className="font-semibold text-primary-700 dark:text-primary-300 mb-2">Area A Topics:</h4>
            <ul className="space-y-1 text-gray-600 dark:text-gray-300">
              {tosStructure.subjectA.subTopics.slice(0, 4).map(topic => (
                <li key={topic.id}>• {topic.name.split('(')[0].trim()}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Area B Topics:</h4>
            <ul className="space-y-1 text-gray-600 dark:text-gray-300">
              {tosStructure.subjectB.subTopics.slice(0, 4).map(topic => (
                <li key={topic.id}>• {topic.name.split('(')[0].trim()}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-amber-700 dark:text-amber-300 mb-2">Area C Topics:</h4>
            <ul className="space-y-1 text-gray-600 dark:text-gray-300">
              {tosStructure.subjectC.subTopics.slice(0, 4).map(topic => (
                <li key={topic.id}>• {topic.name.split('(')[0].trim()}</li>
              ))}
            </ul>
          </div>
        </div>
        <Link href="/practice?tab=reference" className="text-primary-600 dark:text-primary-400 text-sm hover:underline mt-4 inline-block">
          View full TOS →
        </Link>
      </div>
    </div>
  );
}