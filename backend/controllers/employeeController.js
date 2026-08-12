// import { request,response } from "express";
import Employee from "../models/Employee.js";

const handleErrors = (error, res, fallbackMessage) => {
  console.error(error);
  if (error.code === 11000) {
    return res.status(400).json({
      success: false,
      message: "Email already exists",
    });
  }
  if (error.name === "ValidationError") {
    const messages = Object.values(error.errors).map((val) => val.message);
    return res.status(400).json({
      success: false,
      message: messages.join(", "),
    });
  }
  if (error.name === "CastError") {
    return res.status(400).json({
      success: false,
      message: "Invalid Employee ID format",
    });
  }
  return res.status(500).json({
    success: false,
    message: fallbackMessage,
  });
};


export const createEmployee=async(req,res)=>{
 try{
    const {name,email,phone,department,position,salary,joiningDate}=req.body;
    const employee=await Employee.create({
        name,
        email,
        phone,
        department,
        position,
        salary,
        joiningDate,
    });
    res.status(201).json({
        success:true,
        message:"Employee created successfully",
        employee,
    })
 }catch(error){
    console.error("create employee error:" ,error);
    res.status(500).json({
        success:false,
        message:"Failed to create employee",
    });
 }
};

export const getEmployees = async (req, res) => {
  try {
    const { search, department, position } = req.query;

    const filter = {};

    if (search) {
      filter.$or = [
        { name: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
        { phone: { $regex: search, $options: "i" } },
      ];
    }

    if (department) {
      filter.department = {
        $regex: `^${department}$`,
        $options: "i",
      };
    }

    if (position) {
      filter.position = {
        $regex: `^${position}$`,
        $options: "i",
      };
    }

    const employees = await Employee.find(filter).sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      count: employees.length,
      employees,
    });
  } catch (error) {
    console.error("get employees error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch employees",
    });
  }
};

export const getEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);

    if (!employee) {
      return res.status(404).json({
        success: false,
        message: "Employee not found",
      });
    }

    res.status(200).json({
      success: true,
      employee,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch employee",
    });
  }
};

export const updateEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!employee) {
      return res.status(404).json({
        success: false,
        message: "Employee not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Employee updated successfully",
      employee,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update employee",
    });
  }
};

export const deleteEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);

    if (!employee) {
      return res.status(404).json({
        success: false,
        message: "Employee not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Employee deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete employee",
    });
  }
};

