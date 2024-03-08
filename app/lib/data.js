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
export const countAllEmployees = async () => {
  try {
    connectToDB();
    const count = await Employee.countDocuments();
    return count;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to count employees!");
  }
};

export const countAllTeachers = async () => {
  try {
    connectToDB();
    const count = await Employee.countDocuments({position: "Teacher" });
    return count;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to count teachers!");
  }
};


export const countAllAdmins = async () => {
  try {
    connectToDB();
    const count = await Employee.countDocuments({position: "Admin"} );
    return count;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to count admins!");
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


const updateEmployeeCardNumber = async () => {
  try {
    const totalEmployeesCount = await countAllEmployees();
    const totalTeacherCount = await countAllTeachers();
    const totalAdminCount = await countAllAdmins();
    const employeeCardIndex = cards.findIndex((card) => card.title === "Employees");
    const teacherCardIndex = cards.findIndex((card) => card.title === "Teacher");
    const adminCardIndex = cards.findIndex((card) => card.title === "Admin");

    if (employeeCardIndex !== -1) {
      cards[employeeCardIndex].number = totalEmployeesCount;
    } else {
      console.warn("Employee card not found in the 'cards' array.");
    }

    if (teacherCardIndex !== -1) {
      cards[teacherCardIndex].number = totalTeacherCount;
    } else {
      console.warn("Teacher card not found in the 'cards' array.");
    }

    if (adminCardIndex !== -1) {
      cards[adminCardIndex].number = totalAdminCount;
    } else {
      console.warn("Admin card not found in the 'cards' array.");
    }
  } catch (error) {
    console.error("Error updating Employee card number:", error);
  }
};

updateEmployeeCardNumber();

export const cards = [
  {
    id: 1,
    title: "Employees",
    number: 0,
  },
  {
    id: 2,
    title: "Teacher",
    number: 0,
  },
  {
    id: 3,
    title: "Assistant",
    number: 0,
  },
  {
    id: 4,
    title: "Admin",
    number: 0,
  },
  {
    id: 5,
    title: "Driver",
    number: 0,
  },
  {
    id: 6,
    title: "Cleaner",
    number: 0,
  },
];

export const getLastDataChanges = async () => {
  try {
    connectToDB();
    // const lastUsers = await User.find().sort({ updatedAt: -1 }).limit(1);
    const lastEmployees = await Employee.find().sort({ updatedAt: -1 }).limit(2);
    const lastAssets = await Asset.find().sort({ updatedAt: -1 }).limit(2);

    const lastChanges = [];

    // Add last user changes to the array
    // lastUsers.forEach(user => {
    //   lastChanges.push({ type: 'User', updatedAt: user.updatedAt });
    // });

    lastEmployees.forEach(employee => {
      lastChanges.push({ type: 'Employee', name: employee.name, updatedAt: employee.updatedAt });
    });

    lastAssets.forEach(asset => {
      lastChanges.push({ type: 'Asset', assetType: asset.assetType, updatedAt: asset.updatedAt });
    });

    lastChanges.sort((a, b) => b.updatedAt - a.updatedAt);

    return lastChanges;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to get last data changes!");
  }
};

getLastDataChanges()
  .then(lastChanges => {
    console.log("Last 5 data changes:");
    console.table(lastChanges.map((change, index) => ({
      "#": index + 1,
      "Type": change.type,
      "Name": change.assetType || change.name,
      "Updated At": change.updatedAt
    })));
  })
  .catch(err => console.error("Error:", err));