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
          <input type="text" placeholder="First Name" name="name" defaultValue={employee.name} />
          <input type="text" placeholder="Last Name" name="lastName" defaultValue={employee.lastName} />
          <input type="text" placeholder="Email" defaultValue={employee.email} name="email" disabled/>
          <select name="position" id="position">
            <option value={employee.position} disabled selected>{employee.position}</option>
            <option value="Admin">Admin</option>
            <option value="Teacher">Teacher</option>
            <option value="Assistant">Assistant</option>
            <option value="Cleaner">Cleaner</option>
            <option value="Driver">Driver</option>
          </select>
          <select name="laptop" id="laptop">
            <option value="" disabled>School Laptop</option>
            <option value={true} selected={employee.laptop}>Yes</option>
            <option value={false} selected={!employee.laptop}>No</option>
          </select>
          <select name="charger" id="charger">
            <option value="" disabled>Laptop Charger</option>
            <option value={true} selected={employee.charger}>Yes</option>
            <option value={false} selected={!employee.charger}>No</option>
          </select>
          <select name="bag" id="bag">
            <option value="" disabled>Laptop Bag</option>
            <option value={true} selected={employee.bag}>Yes</option>
            <option value={false} selected={!employee.bag}>No</option>
          </select>
          <select name="pen" id="pen">
            <option value="" disabled>Smartboard Pen</option>
            <option value={true} selected={employee.pen}>Yes</option>
            <option value={false} selected={!employee.pen}>No</option>
          </select>
          <textarea
            name="note"
            id="note"
            rows="10"
            placeholder="Additional Information"
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