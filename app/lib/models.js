import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    phone: {
      type: String,
    },
    address: {
      type: String,
    },
  },
  { timestamps: true }
);


const employeeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    laptop: {
      type: String,
      required: false,
    },
    charger: {
      type: String,
      required: false,
    },
    bag: {
      type: String,
      required: false,
    },
    pen: {
      type: String,
      required: false,
    },
    note: {
      type: String,
      required: false,
    }
  },
  { timestamps: true }
);

const assetSchema = new mongoose.Schema(
  {
    assetTag: {
      type: String,
      required: true,
      unique: true,
    },
    brand: {
      type: String,
      required: false,
    },
    assetModel:{
      type: String,
      required: false,
    },
    serial: {
      type: String,
      required: false,
    },
    assetType: {
      type: String,
      required: false,
    },
    dept: {
      type: String,
      required: false,
    },
    user: {
      type: String,
      required: false,
    },
    status: {
      type: String,
      required: false,
    },
    quantity: {
      type: Number,
      required: true,
      min: 1,
    },
  },
  { timestamps: true }
);

export const User = mongoose.models.User || mongoose.model("User", userSchema);
export const Asset = mongoose.models.Asset || mongoose.model("Asset", assetSchema);
export const Employee = mongoose.models.Employee || mongoose.model("Employee", employeeSchema);