"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import toast from "react-hot-toast";

import api from "@/lib/api";
import Navbar from "@/components/Navbar";
import EmployeeTable from "@/components/EmployeeTable";
import SearchFilter from "@/components/SearchFilter";
import Loading from "@/components/Loading";
import ErrorMessage from "@/components/ErrorMessage";

export default function EmployeesPage() {
  const [employees, setEmployees] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [positions, setPositions] = useState([]);

  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("");
  const [position, setPosition] = useState("");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchEmployees = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await api.get("/employees", {
        params: {
          search: search || undefined,
          department: department || undefined,
          position: position || undefined,
        },
      });

      setEmployees(response.data.employees);
      setDepartments(response.data.departments || []);
      setPositions(response.data.positions || []);
    } catch (error) {
      console.error(error);
      setError("Failed to fetch employees.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchEmployees();
    }, 300);

    return () => clearTimeout(timer);
  }, [search, department, position]);

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this employee?"
    );

    if (!confirmed) {
      return;
    }

    try {
      await api.delete(`/employees/${id}`);

      setEmployees((prev) =>
        prev.filter((employee) => employee._id !== id)
      );

      toast.success("Employee deleted successfully");
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete employee");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Employees
            </h1>

            <p className="text-gray-500 mt-1">
              Manage your employees
            </p>
          </div>

          <Link
            href="/employees/add"
            className="bg-olive-600 text-white px-5 py-2.5 rounded-lg hover:bg-olive-700 text-center text-sm font-medium shadow-sm transition-colors flex items-center justify-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-olive-500 focus:ring-offset-2"
          >
            Add Employee
          </Link>
        </div>

        <SearchFilter
          search={search}
          setSearch={setSearch}
          department={department}
          setDepartment={setDepartment}
          position={position}
          setPosition={setPosition}
          departments={departments}
          positions={positions}
        />

        {loading ? (
          <Loading />
        ) : error ? (
          <ErrorMessage
            message={error}
            onRetry={fetchEmployees}
          />
        ) : (
          <EmployeeTable
            employees={employees}
            onDelete={handleDelete}
          />
        )}
      </main>
    </div>
  );
}