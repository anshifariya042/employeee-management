import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          href="/employees"
          className="text-xl font-bold text-gray-900 tracking-tight flex items-center gap-2.5"
        >
          StaffSphere
        </Link>

      </div>
    </nav>
  );
}