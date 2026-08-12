import mongoose from "mongoose";

const employeeSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required: true,
        unique:true,
        trim: true,
    },
    phone:{
        type:String,
        required: true,
        trim:true,
    },
    department: {
      type: String,
      required: true,
      trim: true,
    },

    position: {
      type: String,
      required: true,
      trim: true,
    },

    salary: {
      type: Number,
      required: true,
      min: 0,
    },

    joiningDate: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }

);

export default mongoose.model("Employee",employeeSchema);