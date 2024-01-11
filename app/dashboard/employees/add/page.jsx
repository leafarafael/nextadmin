import { addEmployee } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/employees/addEmployee/addEmployee.module.css";

const AddEmployeePage = () => {
  return (
    <div className={styles.container}>
      <form action={addEmployee} className={styles.form}>
        
        <input type="text" placeholder="Name" name="name" required />
       
        <select name="laptop" id="laptop">
            <option value="" disabled selected>Laptop</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
        </select>
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