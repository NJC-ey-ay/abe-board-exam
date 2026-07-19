import Link from "next/link";

export default function OfflinePage() {
  return (
    <div className="max-w-xl mx-auto px-4 py-16 text-center">
      <div className="text-6xl mb-6">📡</div>
      <h1 className="text-2xl font-bold mb-3">You&apos;re Offline</h1>
      <p className="text-gray-500 dark:text-gray-400 mb-8">
        Don&apos;t worry — your previously studied questions are saved.
        Connect to the internet to load new content, or keep practicing.
      </p>
      <Link
        href="/practice"
        className="inline-block bg-primary-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-700 transition"
      >
        Go to Practice
      </Link>
    </div>
  );
}
