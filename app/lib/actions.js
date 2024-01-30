"use server";

import { revalidatePath } from "next/cache";
import { Employee, Asset, User } from "./models";
import { connectToDB } from "./utils";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { signIn } from "../auth";

export const addUser = async (formData) => {
  const { username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      phone,
      address,
      isAdmin,
      isActive,
    });

    await newUser.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create user!");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const updateUser = async (formData) => {
  const { id, username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const updateFields = {
      username,
      email,
      password,
      phone,
      address,
      isAdmin,
      isActive,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await User.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update user!");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const addAsset = async (formData) => {
  const { assetTag, brand, assetModel, serial, assetType, 
    dept, user, status, quantity, ipadd, price, dop, description } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const newAsset = new Asset({
      assetTag, 
      brand, 
      assetModel, 
      serial, 
      assetType, 
      dept,
      user, 
      status, 
      quantity,
      ipadd, 
      price, 
      dop, 
      description
    });

    await newAsset.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create asset!");
  }

  revalidatePath("/dashboard/assets");
  redirect("/dashboard/assets");
};

export const updateAsset = async (formData) => {
  const { id, assetTag, brand, assetModel, serial, assetType, 
    dept, user, status, quantity, ipadd, price, dop, description } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const updateFields = {
      assetTag, 
      brand, 
      assetModel, 
      serial, 
      assetType, 
      dept,
      user, 
      status, 
      quantity, 
      ipadd, 
      price, 
      dop, 
      description
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await Asset.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update asset!");
  }

  revalidatePath("/dashboard/assets");
  redirect("/dashboard/assets");
};



export const addEmployee = async (formData) => {
  const domain = "@unitedschoolbaniyas.ae"
  const { name, position, laptop, charger, bag, pen, note } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const newEmployee = new Employee({
      name, 
      email: name.replace(/\s+/g, '').toLowerCase() + domain, 
      position,
      laptop, 
      charger, 
      bag,
      pen,
      note
    });

    await newEmployee.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create employee!");
  }

  revalidatePath("/dashboard/employees");
  redirect("/dashboard/employees");
};

export const updateEmployee = async (formData) => {
  const domain = "@unitedschoolbaniyas.ae"
  const { id, name, position, laptop, charger, bag, pen, note  } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const updateFields = {
      name, 
      email: name.replace(/\s+/g, '').toLowerCase() + domain, 
      position,
      laptop, 
      charger, 
      bag,
      pen,
      note
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await Employee.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update employee!");
  }

  revalidatePath("/dashboard/employees");
  redirect("/dashboard/employees");
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await User.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete user!");
  }

  revalidatePath("/dashboard/users");
};

export const deleteAsset = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await Asset.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete asset!");
  }

  revalidatePath("/dashboard/assets");
};

export const deleteEmployee = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await Employee.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete employee!");
  }

  revalidatePath("/dashboard/employeess");
};

export const authenticate = async (prevState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (err) {
    return "Please refresh the page!";
  }
};