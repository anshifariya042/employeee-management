"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";

import api from "@/lib/api";
import Navbar from "@/components/Navbar";
import EmployeeForm from "@/components/EmployeeForm";
import Loading from "@/components/Loading";

export default function EditEmployeePage() {
  const { id } = useParams();
  const router = useRouter();

  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await api.get(`/employees/${id}`);
        setEmployee(response.data.employee);
      } catch (error) {
        console.error(error);
        toast.error(
          error.response?.data?.message || "Failed to fetch employee"
        );
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchEmployee();
    }
  }, [id]);

  const handleSubmit = async (formData) => {
    try {
      setSaving(true);
      await api.put(`/employees/${id}`, formData);
      toast.success("Employee updated successfully");
      router.push("/employees");
    } catch (error) {
      console.error(error);
      toast.error(
        error.response?.data?.message || "Failed to update employee"
      );
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Loading />
      </div>
    );
  }

  if (!employee) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />

        <main className="max-w-3xl mx-auto px-4 py-8">
          <p className="text-red-500 font-semibold">Employee not found.</p>
        </main>
      </div>
    );
  }

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
            Edit Employee Profile
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Modify the details below to update this employee profile.
          </p>
        </div>

        <EmployeeForm
          initialData={{
            name: employee.name || "",
            email: employee.email || "",
            phone: employee.phone || "",
            department: employee.department || "",
            position: employee.position || "",
            salary: employee.salary || "",
            joiningDate: employee.joiningDate
              ? employee.joiningDate.substring(0, 10)
              : "",
          }}
          onSubmit={handleSubmit}
          submitText="Update Employee"
          loading={saving}
        />
      </main>
    </div>
  );
}