import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ABE Study - Agricultural and Biosystems Engineering Board Exam Prep',
  description: 'Comprehensive study tool for ABE board exam preparation with practice questions, step-by-step solutions, and unit conversion practice.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen bg-gray-50">
        <div className="flex flex-col min-h-screen">
          <header className="bg-primary-700 text-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <span className="text-xl font-bold">ABE</span>
                  </div>
                  <div>
                    <h1 className="text-xl font-bold">ABE Study</h1>
                    <p className="text-xs text-primary-200">Board Exam Preparation</p>
                  </div>
                </div>
                <nav className="flex gap-6">
                  <a href="/" className="hover:text-primary-200 transition">Home</a>
                  <a href="/quiz" className="hover:text-primary-200 transition">Practice</a>
                  <a href="/conversions" className="hover:text-primary-200 transition">Unit Conversions</a>
                  <a href="/progress" className="hover:text-primary-200 transition">Progress</a>
                </nav>
              </div>
            </div>
          </header>
          <main className="flex-1">
            {children}
          </main>
          <footer className="bg-gray-800 text-gray-300 py-6 mt-12">
            <div className="max-w-7xl mx-auto px-4 text-center">
              <p className="text-sm">ABE Study - Agricultural and Biosystems Engineering Board Exam Preparation</p>
              <p className="text-xs mt-1 text-gray-500">Based on PRC ABELE-TOS Guidelines</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}