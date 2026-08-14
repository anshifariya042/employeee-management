import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Staff Sphere
        </h1>

        <p className="text-gray-600 mb-6">
          Manage employees easily from one place.
        </p>

        <Link
          href="/employees"
          className="inline-block bg-olive-600 text-white px-6 py-3 rounded-lg hover:bg-olive-700 font-semibold shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-olive-500 focus:ring-offset-2"
        >
          View Employees
        </Link>
      </div>
    </main>
  );
}