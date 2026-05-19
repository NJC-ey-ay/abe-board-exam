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
            className="bg-white text-primary-700 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition"
          >
            Start Practice Test
          </Link>
          <Link
            href="/quiz"
            className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-500 transition"
          >
            Quick Practice
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
          <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-r-4 border-b-4 border-primary-500">
            <div className="flex items-center justify-between mb-3">
              <span className="text-3xl font-bold text-primary-600">32%</span>
              <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">Area A</span>
            </div>
            <h4 className="font-semibold mb-2">Power, Energy & Machinery</h4>
            <p className="text-gray-600 text-sm mb-3">
              Agricultural and Biosystems Power Engineering, Mechanization, Machinery Testing, Automation, Project Management, and Laws
            </p>
            <div className="text-xs text-gray-500">{areaQuestionCounts.A}+ Questions</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-r-4 border-b-4 border-green-500">
            <div className="flex items-center justify-between mb-3">
              <span className="text-3xl font-bold text-green-600">32%</span>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">Area B</span>
            </div>
            <h4 className="font-semibold mb-2">Land & Water Resources</h4>
            <p className="text-gray-600 text-sm mb-3">
              Hydrology, Irrigation & Drainage, Soil & Water Conservation, Aquaculture, Agricultural Sciences, Mathematics
            </p>
            <div className="text-xs text-gray-500">{areaQuestionCounts.B}+ Questions</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-r-4 border-b-4 border-amber-500">
            <div className="flex items-center justify-between mb-3">
              <span className="text-3xl font-bold text-amber-600">36%</span>
              <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm">Area C</span>
            </div>
            <h4 className="font-semibold mb-2">Structures & Bioprocess</h4>
            <p className="text-gray-600 text-sm mb-3">
              Agricultural Buildings, Farm Electrification, Environment Engineering, Bioprocess Engineering, Food Engineering
            </p>
            <div className="text-xs text-gray-500">{areaQuestionCounts.C}+ Questions</div>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4">Practice Mode</h3>
        <div className="grid md:grid-cols-4 gap-4">
          <Link
            href="/practice?area=A"
            className="bg-primary-50 rounded-xl p-5 hover:bg-primary-100 transition text-center"
          >
            <div className="text-2xl font-bold text-primary-700">A</div>
            <div className="text-sm text-primary-700 font-medium">Area A Questions</div>
          </Link>
          <Link
            href="/practice?area=B"
            className="bg-green-50 rounded-xl p-5 hover:bg-green-100 transition text-center"
          >
            <div className="text-2xl font-bold text-green-700">B</div>
            <div className="text-sm text-green-700 font-medium">Area B Questions</div>
          </Link>
          <Link
            href="/practice?area=C"
            className="bg-amber-50 rounded-xl p-5 hover:bg-amber-100 transition text-center"
          >
            <div className="text-2xl font-bold text-amber-700">C</div>
            <div className="text-sm text-amber-700 font-medium">Area C Questions</div>
          </Link>
          <Link
            href="/conversions"
            className="bg-blue-50 rounded-xl p-5 hover:bg-blue-100 transition text-center"
          >
            <div className="text-2xl font-bold text-blue-700">🔄</div>
            <div className="text-sm text-blue-700 font-medium">Unit Conversions</div>
          </Link>
        </div>
      </div>

      {/* Difficulty Levels */}
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4">Difficulty Levels</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-green-50 rounded-xl p-5 border border-green-200">
            <h4 className="font-semibold text-green-800 mb-2">🟢 Easy</h4>
            <p className="text-sm text-green-700">
              Same concept, changing given values. Practice problems to master basic understanding and formula application.
            </p>
          </div>
          <div className="bg-amber-50 rounded-xl p-5 border border-amber-200">
            <h4 className="font-semibold text-amber-800 mb-2">🟡 Average</h4>
            <p className="text-sm text-amber-700">
              Includes logic application. Multi-step solutions, slight difficulty increase, real-world contexts.
            </p>
          </div>
          <div className="bg-red-50 rounded-xl p-5 border border-red-200">
            <h4 className="font-semibold text-red-800 mb-2">🔴 Hard</h4>
            <p className="text-sm text-red-700">
              Situational problems with missing constants. Tests critical thinking and engineering judgment.
            </p>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="grid md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-5 shadow-sm border">
          <div className="text-2xl mb-2">📝</div>
          <h4 className="font-semibold mb-1">100-Item Tests</h4>
          <p className="text-gray-600 text-sm">Simulate actual board exam conditions</p>
        </div>
        <div className="bg-white rounded-xl p-5 shadow-sm border">
          <div className="text-2xl mb-2">✓</div>
          <h4 className="font-semibold mb-1">Step-by-Step Solutions</h4>
          <p className="text-gray-600 text-sm">Detailed explanations for both correct and wrong answers</p>
        </div>
        <div className="bg-white rounded-xl p-5 shadow-sm border">
          <div className="text-2xl mb-2">📐</div>
          <h4 className="font-semibold mb-1">Formula Reference</h4>
          <p className="text-gray-600 text-sm">Complete formula guide with descriptions</p>
        </div>
        <div className="bg-white rounded-xl p-5 shadow-sm border">
          <div className="text-2xl mb-2">📊</div>
          <h4 className="font-semibold mb-1">Progress Tracking</h4>
          <p className="text-gray-600 text-sm">Identify weak areas to focus on</p>
        </div>
      </div>

      {/* TOS Reference Summary */}
      <div className="mt-8 bg-gray-50 rounded-xl p-6">
        <h3 className="font-bold mb-4">TOS Topics Reference</h3>
        <div className="grid md:grid-cols-3 gap-6 text-sm">
          <div>
            <h4 className="font-semibold text-primary-700 mb-2">Area A Topics:</h4>
            <ul className="space-y-1 text-gray-600">
              {tosStructure.subjectA.subTopics.slice(0, 4).map(topic => (
                <li key={topic.id}>• {topic.name.split('(')[0].trim()}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-green-700 mb-2">Area B Topics:</h4>
            <ul className="space-y-1 text-gray-600">
              {tosStructure.subjectB.subTopics.slice(0, 4).map(topic => (
                <li key={topic.id}>• {topic.name.split('(')[0].trim()}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-amber-700 mb-2">Area C Topics:</h4>
            <ul className="space-y-1 text-gray-600">
              {tosStructure.subjectC.subTopics.slice(0, 4).map(topic => (
                <li key={topic.id}>• {topic.name.split('(')[0].trim()}</li>
              ))}
            </ul>
          </div>
        </div>
        <Link href="/practice?tab=reference" className="text-primary-600 text-sm hover:underline mt-4 inline-block">
          View full TOS →
        </Link>
      </div>
    </div>
  );
}