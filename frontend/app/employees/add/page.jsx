"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
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
        error.response?.data?.message ||
          "Failed to add employee"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Add Employee
        </h1>

        <EmployeeForm
          onSubmit={handleSubmit}
          submitText="Add Employee"
          loading={loading}
        />
      </main>
    </div>
  );
}