'use client';

import { useState } from 'react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/quiz', label: 'Practice' },
  { href: '/conversions', label: 'Unit Conversions' },
  { href: '/progress', label: 'Progress' },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 hover:bg-white/10 rounded-lg transition"
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
        <>
          <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
          <div className="absolute right-4 top-full mt-2 w-56 bg-white rounded-xl shadow-xl border z-20 py-2">
            {links.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-700 transition font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
