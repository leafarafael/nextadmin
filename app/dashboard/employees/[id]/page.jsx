import { updateEmployee } from "@/app/lib/actions";
import { fetchEmployee } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/employees/singleEmployee/singleEmployee.module.css";
import Image from "next/image";

const SingleEmployeePage = async ({ params }) => {
  const { id } = params;
  const employee = await fetchEmployee(id);

  return (
    <div className={styles.container}>
      {/* <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        {employee.name}
      </div> */}
      <div className={styles.formContainer}>
        <form action={updateEmployee} className={styles.form}>
          <input type="hidden" name="id" value={employee.id} />
          <label>Name</label>
          <input type="text" name="name" defaultValue={employee.name} />
          
          <label>Laptop</label>
          <input type="checkbox" id="laptop" name="laptop"  defaultChecked={employee.laptop} />

          {/* <select name="laptop" id="laptop">
            <option value={employee.laptop} selected hidden>{employee.laptop}</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select> */}

          <label>Charger</label>
          <select name="charger" id="charger">
            <option value={employee.charger} selected hidden>{employee.charger}</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>

          <label>Bag</label>
          <select name="bag" id="bag">
            <option value={employee.bag} selected hidden>{employee.bag}</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>

          <label>Pen</label>
          <select name="pen" id="pen">
            <option value={employee.pen} selected hidden>{employee.pen}</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
    
{/*       
          <label>Color</label>
          <input
            type="text"
            name="color"
            placeholder={product.color || "color"}
          /> */}

          <label>Note</label>
          <textarea
            name="note"
            id="note"
            rows="10"
            placeholder={employee.note}
          ></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleEmployeePage;