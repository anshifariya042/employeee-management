import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Employee name is required"],
      trim: true,
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      trim: true,
      lowercase: true,
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email"],
    },

    phone: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
      match: [/^[0-9]{10}$/, "Phone number must contain exactly 10 digits"],
    },

    department: {
      type: String,
      required: [true, "Department is required"],
      trim: true,
    },

    position: {
      type: String,
      required: [true, "Position is required"],
      trim: true,
    },

    salary: {
      type: Number,
      required: [true, "Salary is required"],
      min: [0, "Salary cannot be negative"],
    },

    joiningDate: {
      type: Date,
      required: [true, "Joining date is required"],
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Employee", employeeSchema);
