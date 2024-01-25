"use client"

import { addEmployee } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/employees/addEmployee/addEmployee.module.css";
import { useState } from "react";

const AddEmployeePage = () => {

  const [isLaptopChecked, setIsLaptopChecked] = useState(false);

  // const handleCheckboxChange = () => {
  //   setIsLaptopChecked(!isLaptopChecked);
  // };

  return (
    <div className={styles.container}>
      <form action={addEmployee} className={styles.form}>
        
        <input type="text" placeholder="Name" name="name" required />
        <input type="text" placeholder="Email" disabled defaultValue="@unitedschoolbaniyas.ae" name="email" />
        <select name="position" id="position">
          <option value="" disabled selected>Employee Postion</option>
          <option value="Admin">Admin</option>
          <option value="Teacher">Teacher</option>
          <option value="Assistant">Assistant</option>
          <option value="Cleaner">Cleaner</option>
          <option value="Driver">Driver</option>
        </select>
        
        {/* <input type="checkbox" id="laptop" name="laptop" value="true"/> */}

        {/* <input
        type="checkbox"
        id="laptop"
        name="laptop"
        checked={isLaptopChecked}
        onChange={handleCheckboxChange}
      /> */}
        
        <select name="laptop" id="laptop">
          <option value={false} disabled selected>Laptop</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>

        <select name="status" id="status">
          <option value="" disabled selected>Employee Status</option>
          <option value="Admin">For Approval</option>
          <option value="Teacher">Signed</option>
          <option value="Assistant">Resigned</option>
          <option value="Cleaner">Terminated</option>
        </select>
        
        <select name="charger" id="charger">
          <option value={false} disabled selected>Charger</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <select name="bag" id="bag">
          <option value={false} disabled selected>Bag</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <select name="pen" id="pen">
          <option value={false} disabled selected>Pen</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>



        <textarea
          name="note"
          id="note"
          rows="16"
          placeholder="Note"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddEmployeePage;