'use client';

import { useState, useEffect } from 'react';
import { subjects } from '@/data/questions';

interface WeakPointData {
  topic: string;
  count: number;
  lastReviewed: string;
}

interface SubjectProgress {
  id: string;
  name: string;
  attempted: number;
  correct: number;
  accuracy: number;
}

export default function ProgressPage() {
  const [weakPoints, setWeakPoints] = useState<WeakPointData[]>([]);
  const [subjectProgress, setSubjectProgress] = useState<SubjectProgress[]>([]);
  const [totalStats, setTotalStats] = useState({ attempted: 0, correct: 0, sessions: 0 });

  useEffect(() => {
    // Load simulated progress data (in a real app, this would be from local storage or backend)
    const simulatedWeakPoints: WeakPointData[] = [
      { topic: 'Quadratic formula application', count: 3, lastReviewed: '2024-01-15' },
      { topic: 'SCS Curve Number method', count: 2, lastReviewed: '2024-01-14' },
      { topic: 'Heat transfer calculations', count: 2, lastReviewed: '2024-01-13' },
      { topic: 'Thermodynamic cycles', count: 1, lastReviewed: '2024-01-12' },
      { topic: 'RA 10601 provisions', count: 1, lastReviewed: '2024-01-11' },
    ];

    const simulatedProgress: SubjectProgress[] = subjects.slice(0, 15).map(subject => ({
      id: subject.id,
      name: subject.name,
      attempted: Math.floor(Math.random() * 30),
      correct: Math.floor(Math.random() * 25),
      accuracy: 0,
    })).map(subject => ({
      ...subject,
      accuracy: subject.attempted > 0 ? Math.round((subject.correct / subject.attempted) * 100) : 0,
    }));

    setWeakPoints(simulatedWeakPoints);
    setSubjectProgress(simulatedProgress);

    const total = simulatedProgress.reduce((totals, subject) => ({
      attempted: totals.attempted + subject.attempted,
      correct: totals.correct + subject.correct,
      sessions: totals.sessions + 1,
    }), { attempted: 0, correct: 0, sessions: 14 });

    setTotalStats(total);
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Your Progress</h1>
        <p className="text-gray-600">
          Track your learning journey and focus on areas that need more practice.
        </p>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-xl p-5 shadow-sm border">
          <div className="text-3xl font-bold text-primary-600">
            {totalStats.sessions}
          </div>
          <div className="text-gray-600 text-sm">Sessions</div>
        </div>
        <div className="bg-white rounded-xl p-5 shadow-sm border">
          <div className="text-3xl font-bold text-primary-600">
            {totalStats.attempted}
          </div>
          <div className="text-gray-600 text-sm">Questions Attempted</div>
        </div>
        <div className="bg-white rounded-xl p-5 shadow-sm border">
          <div className="text-3xl font-bold text-green-600">
            {totalStats.correct}
          </div>
          <div className="text-gray-600 text-sm">Correct Answers</div>
        </div>
        <div className="bg-white rounded-xl p-5 shadow-sm border">
          <div className="text-3xl font-bold text-accent-500">
            {totalStats.attempted > 0
              ? Math.round((totalStats.correct / totalStats.attempted) * 100)
              : 0}%
          </div>
          <div className="text-gray-600 text-sm">Overall Accuracy</div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Weak Points */}
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
            <span className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center text-amber-700">
              ⚠️
            </span>
            Topics to Focus On
          </h2>

          {weakPoints.length === 0 ? (
            <p className="text-gray-500 text-center py-8">
              Start practicing to identify your weak points!
            </p>
          ) : (
            <div className="space-y-3">
              {weakPoints.map((weakPoint, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <div>
                    <p className="font-medium text-gray-800">{weakPoint.topic}</p>
                    <p className="text-xs text-gray-500">
                      Reviewed {weakPoint.lastReviewed}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="bg-amber-100 text-amber-700 px-2 py-1 rounded text-sm font-medium">
                      {weakPoint.count}x
                    </span>
                    <button className="text-primary-600 text-sm hover:underline">
                      Practice
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-4 pt-4 border-t">
            <h3 className="font-semibold text-sm mb-2">Recommended Study Order</h3>
            <ol className="space-y-1 text-sm text-gray-600">
              <li>1. Start with topics you missed 2+ times</li>
              <li>2. Practice related concepts together</li>
              <li>3. Review theory before practice</li>
              <li>4. Spaced repetition: review again in 2 days</li>
            </ol>
          </div>
        </div>

        {/* Subject Progress */}
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
            <span className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-700">
              📊
            </span>
            Progress by Subject
          </h2>

          <div className="space-y-3 max-h-96 overflow-y-auto">
            {subjectProgress
              .sort((subjectA, subjectB) => subjectA.accuracy - subjectB.accuracy)
              .slice(0, 12)
              .map((subject) => (
                <div key={subject.id} className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-sm text-gray-800">
                      {subject.name}
                    </span>
                    <span className={`text-sm font-medium ${
                      subject.accuracy >= 70 ? 'text-green-600' :
                      subject.accuracy >= 50 ? 'text-amber-600' :
                      subject.accuracy > 0 ? 'text-red-600' :
                      'text-gray-400'
                    }`}>
                      {subject.accuracy}%
                    </span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all ${
                        subject.accuracy >= 70 ? 'bg-green-500' :
                        subject.accuracy >= 50 ? 'bg-amber-500' :
                        subject.accuracy > 0 ? 'bg-red-500' :
                        'bg-gray-300'
                      }`}
                      style={{ width: `${Math.max(subject.accuracy, 5)}%` }}
                    />
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {subject.correct}/{subject.attempted} correct
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Study Recommendations */}
      <div className="mt-8 bg-gradient-to-r from-primary-50 to-primary-100 rounded-xl p-6">
        <h2 className="text-lg font-bold mb-4">Study Recommendations</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4">
            <h3 className="font-semibold text-primary-700 mb-2">🎯 Focus Areas</h3>
            <p className="text-sm text-gray-600">
              Concentrate on {weakPoints.length} topics that need more practice.
              Focus on understanding the underlying concepts, not just memorizing answers.
            </p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <h3 className="font-semibold text-primary-700 mb-2">📅 Study Schedule</h3>
            <p className="text-sm text-gray-600">
              Review difficult topics daily for 15 minutes.
              Take breaks every 45 minutes to maintain focus and retention.
            </p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <h3 className="font-semibold text-primary-700 mb-2">🔄 Spaced Repetition</h3>
            <p className="text-sm text-gray-600">
              After mastering a topic, review it again in 2 days, then 5 days, then 2 weeks.
              This helps transfer information to long-term memory.
            </p>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-6 flex gap-4 justify-center">
        <a
          href="/quiz"
          className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
        >
          Continue Practice
        </a>
        <a
          href="/conversions"
          className="bg-white text-gray-700 px-6 py-3 rounded-lg font-semibold border hover:bg-gray-50 transition"
        >
          Unit Conversions
        </a>
      </div>
    </div>
  );
}