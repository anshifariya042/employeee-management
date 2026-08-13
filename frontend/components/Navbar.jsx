import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          href="/employees"
          className="text-xl font-bold text-gray-800"
        >
          Employee Management
        </Link>

        {/* <div className="flex gap-4">
          <Link
            href="/employees"
            className="text-gray-600 hover:text-blue-600"
          >
            Employees
          </Link>

          <Link
            href="/employees/add"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Add Employee
          </Link>
        </div> */}
      </div>
    </nav>
  );
}