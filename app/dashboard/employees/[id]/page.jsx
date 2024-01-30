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
          <label>Email</label>
          <input type="text" defaultValue={employee.email} name="email" disabled/>
          <label>Position</label>
          <select name="position" id="position">
            <option value={employee.position} disabled selected>{employee.position}</option>
            <option value="Admin">Admin</option>
            <option value="Teacher">Teacher</option>
            <option value="Assistant">Assistant</option>
            <option value="Cleaner">Cleaner</option>
            <option value="Driver">Driver</option>
          </select>
          
          <label>Laptop</label>
          {/* <input type="checkbox" id="laptop" name="laptop"  defaultChecked={employee.laptop} /> */}

          <select name="laptop" id="laptop">
            <option value={true} selected={employee.laptop}>Yes</option>
            <option value={false} selected={!employee.laptop}>No</option>
          </select>

          <label>Charger</label>
          <select name="charger" id="charger">
            <option value={true} selected={employee.charger}>Yes</option>
            <option value={false} selected={!employee.charger}>No</option>
          </select>

          <label>Bag</label>
          <select name="bag" id="bag">
            <option value={true} selected={employee.bag}>Yes</option>
            <option value={false} selected={!employee.bag}>No</option>
          </select>

          <label>Pen</label>
          <select name="pen" id="pen">
            <option value={true} selected={employee.pen}>Yes</option>
            <option value={false} selected={!employee.pen}>No</option>
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
            defaultValue
            ={employee.note}
          ></textarea>
          {/* <button>Update</button> */}
        </form>
      </div>
    </div>
  );
};

export default SingleEmployeePage;