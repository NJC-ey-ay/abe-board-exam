import type { Metadata } from 'next';
import './globals.css';
import 'katex/dist/katex.min.css';
import { ThemeProvider } from '@/lib/theme-provider';
import ThemeToggle from './theme-toggle';
import MobileNav from './mobile-nav';

export const metadata: Metadata = {
  title: 'ABE Study - Agricultural and Biosystems Engineering Board Exam Prep',
  description: 'Comprehensive study tool for ABE board exam preparation with practice questions, step-by-step solutions, and unit conversion practice.',
  icons: {
    icon: '/icon.svg',
    shortcut: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased min-h-screen bg-gray-50 dark:bg-slate-900 dark:text-gray-100" style={{ scrollbarGutter: 'stable' }}>
        <script dangerouslySetInnerHTML={{ __html: `
          (function() {
            var theme = localStorage.getItem('theme');
            if (!theme) theme = 'dark';
            if (theme === 'dark') document.documentElement.classList.add('dark');
          })();
        `}} />
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <header className="bg-primary-700 dark:bg-primary-900 text-white shadow-lg">
              <div className="max-w-7xl mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center shrink-0">
                      <span className="text-xl font-bold">ABE</span>
                    </div>
                    <div className="min-w-0">
                      <h1 className="text-lg sm:text-xl font-bold truncate">ABE Study</h1>
                      <p className="text-xs text-primary-200 dark:text-primary-300 hidden sm:block">Board Exam Preparation</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <nav className="hidden md:flex gap-6 text-sm items-center">
                      <a href="/" className="hover:text-primary-200 transition whitespace-nowrap">Home</a>
                      <a href="/practice" className="hover:text-primary-200 transition whitespace-nowrap">Mock Test</a>
                      <a href="/conversions" className="hover:text-primary-200 transition whitespace-nowrap">Conversions</a>
                      <ThemeToggle />
                    </nav>
                    <MobileNav />
                  </div>
                </div>
              </div>
            </header>
            <main className="flex-1">
              {children}
            </main>
            <footer className="bg-gray-800 dark:bg-gray-950 text-gray-300 py-6 mt-12 relative">
              <div className="max-w-7xl mx-auto px-4 text-center">
                <p className="text-sm">ABE Study - Agricultural and Biosystems Engineering Board Exam Preparation</p>
                <p className="text-xs mt-1 text-gray-500 dark:text-gray-600">Based on PRC ABELE-TOS Guidelines</p>
              </div>
              <p className="absolute bottom-1 right-3 text-[10px] text-gray-500/60 dark:text-gray-500/60 select-none pointer-events-none">NJC</p>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
