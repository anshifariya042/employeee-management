// import { request,response } from "express";
import Employee from "../models/Employee.js";


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

export const getEmployees=async(req,res)=>{
    try{
        const employees=await Employee.find().sort({createdAt: -1});
        res.status(200).json({
            success:true,
            employees,
        });
    }catch(error){
        console.error("create employee error:" ,error);

        res.status(500).json({
            success:false,
            message:"Failed to fetch employees",
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

