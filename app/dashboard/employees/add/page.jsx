"use client"

import { addEmployee } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/employees/addEmployee/addEmployee.module.css";
import { useState } from "react";

const AddEmployeePage = () => {

  const [isLaptopChecked, setIsLaptopChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsLaptopChecked(!isLaptopChecked);
  };

  return (
    <div className={styles.container}>
      <form action={addEmployee} className={styles.form}>
        
        <input type="text" placeholder="Name" name="name" required />

        <label for="laptop">Laptop</label>
        {/* <input type="checkbox" id="laptop" name="laptop" value="true"/> */}

        <input
        type="checkbox"
        id="laptop"
        name="laptop"
        checked={isLaptopChecked}
        onChange={handleCheckboxChange}
      />
        
        {/* <select name="laptop" id="laptop">
            <option value="" disabled selected>Laptop</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
        </select> */}
        <select name="charger" id="charger">
            <option value="" disabled selected>Charger</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
        </select>
        <select name="bag" id="bag">
            <option value="" disabled selected>Bag</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
        </select>
        <select name="pen" id="pen">
            <option value="" disabled selected>Pen</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
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