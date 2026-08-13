"use client";

export default function SearchFilter({
  search,
  setSearch,
  department,
  setDepartment,
  position,
  setPosition,
  departments = [],
  positions = [],
}) {
  const hasFilters = search || department || position;

  const handleClear = () => {
    setSearch("");
    setDepartment("");
    setPosition("");
  };

  return (
    <div className="bg-white rounded-lg shadow p-5 mb-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        {/* Search Field */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search name, email, phone..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 transition-all text-sm"
          />
          <span className="absolute left-3.5 top-3.5 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </span>
        </div>

        {/* Department Filter Dropdown */}
        <div className="relative">
          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 bg-white transition-all text-sm cursor-pointer appearance-none"
          >
            <option value="">All Departments</option>
            {departments.map((dept) => (
              <option key={dept} value={dept}>
                {dept}
              </option>
            ))}
          </select>
          <span className="absolute right-3.5 top-4 text-gray-400 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
        </div>

        {/* Position Filter Dropdown */}
        <div className="relative">
          <select
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 bg-white transition-all text-sm cursor-pointer appearance-none"
          >
            <option value="">All Positions</option>
            {positions.map((pos) => (
              <option key={pos} value={pos}>
                {pos}
              </option>
            ))}
          </select>
          <span className="absolute right-3.5 top-4 text-gray-400 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
        </div>

      </div>

      {hasFilters && (
        <div className="flex justify-end mt-4 pt-3 border-t border-gray-100">
          <button
            onClick={handleClear}
            className="flex items-center gap-1.5 text-sm text-red-600 hover:text-red-800 font-semibold transition-colors focus:outline-none cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
}