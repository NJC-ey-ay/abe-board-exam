'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { triviasData } from '@/data/trivias-data';

const categories = [...new Set(triviasData.map(t => t.category))].sort();

export default function TriviasPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [progress, setProgress] = useState<Record<string, 'known' | 'unknown'>>({});

  const filtered = useMemo(() => {
    const items = selectedCategory ? triviasData.filter(t => t.category === selectedCategory) : triviasData;
    return showAll ? items : items.slice(0, 10);
  }, [selectedCategory, showAll]);

  const current = filtered[currentIndex];

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setFlipped(false);
    }
  };

  const handleNext = () => {
    if (currentIndex < filtered.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setFlipped(false);
    }
  };

  const handleMark = (status: 'known' | 'unknown') => {
    setProgress(p => ({ ...p, [current.id]: status }));
    handleNext();
  };

  const progressPercent = filtered.length > 0
    ? Math.round((Object.keys(progress).filter(k => filtered.some(f => f.id === k)).length / filtered.length) * 100)
    : 0;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href="/" className="text-primary-600 hover:underline text-sm">← Home</Link>
        <h1 className="text-2xl font-bold mt-1">ABE Trivias</h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
          {triviasData.length} facts about PAES, laws, machinery, and more
        </p>
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => { setSelectedCategory(null); setCurrentIndex(0); setFlipped(false); }}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
            selectedCategory === null
              ? 'bg-primary-600 text-white'
              : 'bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200'
          }`}
        >
          All ({triviasData.length})
        </button>
        {categories.map(cat => {
          const count = triviasData.filter(t => t.category === cat).length;
          return (
            <button
              key={cat}
              onClick={() => { setSelectedCategory(cat); setCurrentIndex(0); setFlipped(false); }}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                selectedCategory === cat
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200'
              }`}
            >
              {cat} ({count})
            </button>
          );
        })}
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-12 text-gray-400">No trivias found.</div>
      ) : (
        <>
          {/* Progress */}
          <div className="mb-4 flex items-center gap-4">
            <div className="flex-1 h-1.5 bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden">
              <div className="h-full bg-primary-600 rounded-full transition-all" style={{ width: `${progressPercent}%` }} />
            </div>
            <span className="text-xs text-gray-500 shrink-0">
              {Object.keys(progress).length}/{filtered.length} reviewed
            </span>
          </div>

          {/* Flashcard */}
          <div className="mb-6" style={{ perspective: '1000px' }}>
            <div
              onClick={() => setFlipped(!flipped)}
              className="relative w-full min-h-[300px] cursor-pointer"
              style={{
                transformStyle: 'preserve-3d',
                transition: 'transform 0.5s',
                transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
              }}
            >
              {/* Front */}
              <div
                className="absolute inset-0 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border dark:border-slate-700 p-8 lg:p-10 flex flex-col items-center justify-center text-center"
                style={{ backfaceVisibility: 'hidden' }}
              >
                <div className="flex items-center gap-2 mb-6">
                  <span className={`text-xs px-2 py-1 rounded ${
                    current.difficulty === 'easy' ? 'bg-green-100 text-green-700' :
                    current.difficulty === 'average' ? 'bg-amber-100 text-amber-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {current.difficulty}
                  </span>
                  <span className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-gray-400 px-2 py-1 rounded">
                    {current.category}
                  </span>
                  <span className="text-xs text-gray-400 ml-auto">{currentIndex + 1}/{filtered.length}</span>
                </div>
                <p className="text-xl lg:text-2xl font-medium leading-relaxed mb-6">
                  {current.question}
                </p>
                <p className="text-sm text-gray-400">Tap to reveal answer</p>
              </div>

              {/* Back */}
              <div
                className="absolute inset-0 bg-primary-50 dark:bg-primary-900/30 rounded-2xl shadow-sm border border-primary-200 dark:border-primary-800 p-8 lg:p-10 flex flex-col items-center justify-center text-center"
                style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
              >
                <div className="flex items-center gap-2 mb-6">
                  <span className={`text-xs px-2 py-1 rounded ${
                    current.difficulty === 'easy' ? 'bg-green-100 text-green-700' :
                    current.difficulty === 'average' ? 'bg-amber-100 text-amber-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {current.difficulty}
                  </span>
                  <span className="text-xs bg-primary-100 dark:bg-primary-800 text-primary-700 dark:text-primary-300 px-2 py-1 rounded">
                    {current.category}
                  </span>
                </div>
                <p className="text-lg lg:text-xl leading-relaxed text-primary-900 dark:text-primary-100">
                  {current.answer}
                </p>
                <p className="text-xs text-gray-400 mt-6">Tap to go back</p>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <button onClick={handlePrev} disabled={currentIndex === 0}
              className="px-4 py-2 bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-200 dark:hover:bg-slate-700 transition disabled:opacity-40">
              ← Prev
            </button>
            <button onClick={() => setFlipped(!flipped)}
              className="px-6 py-2 bg-primary-600 text-white rounded-lg text-sm font-medium hover:bg-primary-700 transition">
              {flipped ? 'Show Question' : 'Show Answer'}
            </button>
            <button onClick={handleNext} disabled={currentIndex >= filtered.length - 1}
              className="px-4 py-2 bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-200 dark:hover:bg-slate-700 transition disabled:opacity-40">
              Next →
            </button>
          </div>

          {/* Mark known/unknown */}
          {flipped && (
            <div className="flex items-center justify-center gap-3 mb-8">
              <button onClick={() => handleMark('known')}
                className="px-5 py-2 bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 rounded-lg text-sm font-medium hover:bg-green-200 transition">
                ✓ I Know This
              </button>
              <button onClick={() => handleMark('unknown')}
                className="px-5 py-2 bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300 rounded-lg text-sm font-medium hover:bg-red-200 transition">
                ✗ Review Again
              </button>
            </div>
          )}

          {/* Show all toggle */}
          {triviasData.length > 10 && !showAll && (
            <div className="text-center">
              <button onClick={() => setShowAll(true)} className="text-primary-600 hover:underline text-sm">
                Show all {triviasData.length} trivias →
              </button>
            </div>
          )}

          {/* Quick navigation dots */}
          <div className="flex flex-wrap justify-center gap-1 mt-8">
            {filtered.map((t, i) => (
              <button
                key={t.id}
                onClick={() => { setCurrentIndex(i); setFlipped(false); }}
                className={`w-6 h-6 rounded text-xs font-medium transition ${
                  i === currentIndex ? 'bg-primary-600 text-white' :
                  progress[t.id] === 'known' ? 'bg-green-200 dark:bg-green-900 text-green-800' :
                  progress[t.id] === 'unknown' ? 'bg-red-200 dark:bg-red-900 text-red-800' :
                  'bg-gray-200 dark:bg-slate-700 text-gray-500 dark:text-gray-400'
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
