import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Employee Management System
        </h1>

        <p className="text-gray-600 mb-6">
          Manage employees easily from one place.
        </p>

        <Link
          href="/employees"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          View Employees
        </Link>
      </div>
    </main>
  );
}