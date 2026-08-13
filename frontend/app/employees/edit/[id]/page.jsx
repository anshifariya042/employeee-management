"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
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
          error.response?.data?.message ||
            "Failed to fetch employee"
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
        error.response?.data?.message ||
          "Failed to update employee"
      );
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Loading />
      </div>
    );
  }

  if (!employee) {
    return (
      <div className="min-h-screen bg-gray-100">
        <Navbar />

        <main className="max-w-4xl mx-auto px-4 py-8">
          <p className="text-red-500">
            Employee not found.
          </p>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Edit Employee
        </h1>

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