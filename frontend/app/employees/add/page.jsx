"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";

import api from "@/lib/api";
import Navbar from "@/components/Navbar";
import EmployeeForm from "@/components/EmployeeForm";

export default function AddEmployeePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (formData) => {
    try {
      setLoading(true);
      await api.post("/employees", formData);
      toast.success("Employee added successfully");
      router.push("/employees");
    } catch (error) {
      console.error(error);
      toast.error(
        error.response?.data?.message || "Failed to add employee"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="max-w-3xl mx-auto px-4 py-8">
        {/* Back Link */}
        <div className="mb-6">
          <Link
            href="/employees"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-olive-700 transition-colors"
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
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Employees
          </Link>
        </div>

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-950 tracking-tight">
            Add New Employee
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Fill in the details below to create a new employee profile.
          </p>
        </div>

        <EmployeeForm
          onSubmit={handleSubmit}
          submitText="Add Employee"
          loading={loading}
        />
      </main>
    </div>
  );
}