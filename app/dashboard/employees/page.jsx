import Image from "next/image";
import Link from "next/link";
import styles from "@/app/ui/dashboard/employees/employees.module.css";
import Search from "@/app/ui/dashboard/search/search";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import { fetchEmployees } from "@/app/lib/data";
import { deleteEmployee } from "@/app/lib/actions";

const EmployeesPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, employees } = await fetchEmployees(q, page);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a employee..." />
        <Link href="/dashboard/employees/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Position</td>
            <td>Laptop</td>
            <td>Charger</td>
            <td>Bag</td>
            <td>Pen</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              {/* <td>
                <div className={styles.employee}>
                  <Image
                    src={employee.img || "/insert-image.png"}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.employeeImage}
                  />
             
                </div>
              </td> */}
              
              <td>{employee.name}</td>
              <td>{employee.lastName}</td>

              {/* <td>{employee.createdAt?.toString().slice(4, 16)}</td> */}
              <td>{employee.position}</td>
              <td>{employee.laptop ? "Yes" : "No"}</td>
              <td>{employee.charger ? "Yes" : "No"}</td>
              <td>{employee.bag ? "Yes" : "No"}</td>
              <td>{employee.pen ? "Yes" : "No"}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/employees/${employee.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  {/* <form action={deleteEmployee}>
                    <input type="hidden" name="id" value={employee.id} />
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  </form> */}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};

export default EmployeesPage;