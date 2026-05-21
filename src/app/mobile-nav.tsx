'use client';

import { useState, useEffect } from 'react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/quiz', label: 'Practice' },
  { href: '/conversions', label: 'Unit Conversions' },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 hover:bg-white/10 rounded-lg transition relative z-50"
        aria-label="Toggle navigation menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {open ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          style={{ animation: 'fadeIn 0.2s ease-out' }}
          onClick={() => setOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white dark:bg-slate-800 shadow-2xl z-50 transform transition-transform duration-300 ease-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="pt-20 px-4">
          <div className="text-sm text-gray-500 dark:text-gray-400 mb-4 px-4 font-medium">NAVIGATION</div>
          <nav className="space-y-1">
            {links.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 text-gray-700 dark:text-gray-200 hover:bg-primary-50 dark:hover:bg-primary-900 hover:text-primary-700 dark:hover:text-primary-300 rounded-xl transition font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-6 px-4 pt-6 border-t border-gray-100 dark:border-gray-700">
            <p className="text-xs text-gray-400 dark:text-gray-500">ABE Study v1.0</p>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">Board Exam Preparation</p>
          </div>
        </div>
      </div>
    </div>
  );
}
