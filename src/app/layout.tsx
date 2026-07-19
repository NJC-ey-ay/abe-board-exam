import type { Metadata, Viewport } from 'next';
import './globals.css';
import 'katex/dist/katex.min.css';
import { ThemeProvider } from '@/lib/theme-provider';
import ThemeToggle from './theme-toggle';
import MobileNav from './mobile-nav';
import MixpanelTracker from './mixpanel-tracker';

const APP_NAME = 'ABE Study';
const APP_DEFAULT_TITLE = 'ABE Study - Agricultural and Biosystems Engineering Board Exam Prep';
const APP_DESCRIPTION = 'Comprehensive study tool for ABE board exam preparation with practice questions, step-by-step solutions, and unit conversion practice.';

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: APP_DEFAULT_TITLE,
  description: APP_DESCRIPTION,
  icons: { icon: '/icon.svg' },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: APP_NAME,
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: 'website',
    siteName: APP_NAME,
    title: APP_DEFAULT_TITLE,
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: 'summary',
    title: APP_DEFAULT_TITLE,
    description: APP_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: '#1d4ed8',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
          <head>
            <meta name="mobile-web-app-capable" content="yes" />
          </head>
      <body className="antialiased min-h-screen bg-gray-50 dark:bg-slate-900 dark:text-gray-100" style={{ scrollbarGutter: 'stable' }}>
        <script dangerouslySetInnerHTML={{ __html: `
          (function() {
            var theme = localStorage.getItem('theme');
            if (!theme) theme = 'dark';
            if (theme === 'dark') document.documentElement.classList.add('dark');
          })();
        `}} />
        <ThemeProvider>
          <MixpanelTracker />
          <div className="flex flex-col min-h-screen">
            <header className="bg-primary-700 dark:bg-primary-900 text-white">
              <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between py-3 border-b border-primary-600">
                  <a href="/" className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-white/15 rounded-lg flex items-center justify-center shrink-0">
                      <span className="text-base font-bold">ABE</span>
                    </div>
                    <div>
                      <div className="font-display text-base leading-tight">ABE Study</div>
                      <div className="text-[11px] text-primary-300 leading-tight hidden sm:block">Board Exam Preparation</div>
                    </div>
                  </a>
                  <div className="flex items-center gap-1">
                    <nav className="hidden md:flex items-center gap-1">
                      <a href="/" className="px-3 py-1.5 rounded-md text-sm text-primary-100 hover:text-white hover:bg-primary-600 transition">Home</a>
                      <a href="/practice" className="px-3 py-1.5 rounded-md text-sm text-primary-100 hover:text-white hover:bg-primary-600 transition">Mock Test</a>
                      <a href="/paes" className="px-3 py-1.5 rounded-md text-sm text-primary-100 hover:text-white hover:bg-primary-600 transition">PAES Standards</a>
                      <a href="/conversions" className="px-3 py-1.5 rounded-md text-sm text-primary-100 hover:text-white hover:bg-primary-600 transition">Conversions</a>
                    </nav>
                    <div className="ml-2 pl-2 border-l border-primary-600">
                      <ThemeToggle />
                    </div>
                    <MobileNav />
                  </div>
                </div>
              </div>
            </header>
            <main className="flex-1">
              {children}
            </main>
            <footer className="bg-gray-800 dark:bg-gray-950 text-gray-400 py-8 mt-12 relative">
              <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
                  <p className="text-sm">ABE Study — Agricultural and Biosystems Engineering Board Exam Prep</p>
                  <p className="text-xs text-gray-500">PRC ABELE-TOS Based</p>
                </div>
              </div>
              <p className="absolute bottom-1 right-3 text-[10px] text-gray-500/40 select-none pointer-events-none">NJC</p>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
