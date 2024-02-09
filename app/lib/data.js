import { Asset, User, Employee } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async (q, page) => {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 15;

  try {
    connectToDB();
    const count = await User.find({ username: { $regex: regex } }).count();
    const users = await User.find({ username: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, users };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};

export const fetchUser = async (id) => {
  console.log(id);
  try {
    connectToDB();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};

export const fetchAssets = async (q, page) => {
  console.log(q);
  const regex = new RegExp(q, "i");
  const ITEM_PER_PAGE = 15;

  try {
    connectToDB();
    const searchFields = ["assetType", "brand", "assetModel", "status", "dept", "user"]; 
    const searchConditions = searchFields.map(field => ({ [field]: { $regex: regex } }));


    const count = await Asset.find({ $or: searchConditions  }).count();
    const assets = await Asset.find({ $or: searchConditions })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, assets };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch assets!");
  }
};

export const fetchAsset = async (id) => {
  console.log(id);
  try {
    connectToDB();
    const asset = await Asset.findById(id);
    return asset;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch asset!");
  }
};


export const fetchAllEmployees = async (q, page) => {
  const regex = new RegExp(q, "i");
  const sortField = 'name'; 
  const sortDirection = 'asc'; 
  const sortOptions = {};
  sortOptions[sortField] = sortDirection === 'asc' ? 1 : -1;

  try {
    connectToDB();
    const count = await Employee.find({ name: { $regex: regex } }).count();
    const employees = await Employee.find({ name: { $regex: regex } })
      .sort(sortOptions)
    return { count, employees };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch employees!");
  }
};

export const fetchEmployees = async (q, page) => {
  console.log(q);
  const regex = new RegExp(q, "i");
  const ITEM_PER_PAGE = 15;
  const sortField = 'name'; 
  const sortDirection = 'asc'; 
  const sortOptions = {};
  sortOptions[sortField] = sortDirection === 'asc' ? 1 : -1;

  try {
    connectToDB();
    const searchEmp = ["name", "lastName", "position"]; 
    const searchConditions = searchEmp.map(field => ({ [field]: { $regex: regex } }));

    const count = await Employee.find({ $or: searchConditions }).count();
    const employees = await Employee.find({ $or: searchConditions })
      .sort(sortOptions)
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, employees };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch employees!");
  }
};

export const fetchEmployee = async (id) => {
  try {
    connectToDB();
    const employee = await Employee.findById(id);
    return employee;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch employee!");
  }
};

// DUMMY DATA

export const cards = [
  {
    id: 1,
    title: "Employee",
    number: 30,
    change: 12,
  },
  {
    id: 2,
    title: "Laptop",
    number: 25,
    change: -2,
  },
  {
    id: 3,
    title: "PC",
    number: 30,
    change: 18,
  },
];