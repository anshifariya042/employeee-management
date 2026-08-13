"use client";

import { useState } from "react";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  department: "",
  position: "",
  salary: "",
  joiningDate: "",
};

export default function EmployeeForm({
  initialData = initialForm,
  onSubmit,
  submitText = "Add Employee",
  loading = false,
}) {
  const [formData, setFormData] = useState({
    ...initialForm,
    ...initialData,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const numericValue = value.replace(/[^0-9]/g, "");
      setFormData((prev) => ({
        ...prev,
        [name]: numericValue,
      }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone.trim())) {
      newErrors.phone = "Phone number must contain exactly 10 digits.";
    }

    if (!formData.department.trim()) {
      newErrors.department = "Department is required";
    }

    if (!formData.position.trim()) {
      newErrors.position = "Position is required";
    }

    if (!formData.salary) {
      newErrors.salary = "Salary is required";
    } else if (Number(formData.salary) <= 0) {
      newErrors.salary = "Salary must be greater than 0";
    }

    if (!formData.joiningDate) {
      newErrors.joiningDate = "Joining date is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-lg shadow p-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        <div>
          <label className="block mb-2 font-medium">
            Employee Name
          </label>

          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2"
            placeholder="Enter employee name"
          />

          {errors.name && (
            <p className="text-red-500 text-sm mt-1">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Email
          </label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2"
            placeholder="Enter email"
          />

          {errors.email && (
            <p className="text-red-500 text-sm mt-1">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Phone Number
          </label>

          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2"
            placeholder="Enter phone number"
          />

          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">
              {errors.phone}
            </p>
          )}
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Department
          </label>

          <input
            name="department"
            value={formData.department}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2"
            placeholder="e.g. IT"
          />

          {errors.department && (
            <p className="text-red-500 text-sm mt-1">
              {errors.department}
            </p>
          )}
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Position
          </label>

          <input
            name="position"
            value={formData.position}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2"
            placeholder="e.g. Developer"
          />

          {errors.position && (
            <p className="text-red-500 text-sm mt-1">
              {errors.position}
            </p>
          )}
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Salary
          </label>

          <input
            type="number"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2"
            placeholder="Enter salary"
          />

          {errors.salary && (
            <p className="text-red-500 text-sm mt-1">
              {errors.salary}
            </p>
          )}
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Joining Date
          </label>

          <input
            type="date"
            name="joiningDate"
            value={formData.joiningDate}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2"
          />

          {errors.joiningDate && (
            <p className="text-red-500 text-sm mt-1">
              {errors.joiningDate}
            </p>
          )}
        </div>

      </div>

      <button
        type="submit"
        disabled={loading}
        className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? "Saving..." : submitText}
      </button>
    </form>
  );
}