import { updateAccount } from "@/app/lib/actions";
import { fetchAccount, fetchAllEmployees } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/accounts/singleAccount/singleAccount.module.css";
import Image from "next/image";

const SingleAccountPage = async ({ params }) => {
  
  const { id } = params;
  const account = await fetchAccount(id);
  const { employees } = await fetchAllEmployees();

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <form action={updateAccount} className={styles.form}>
          <input type="hidden" name="id" value={account.id}/>
          <label>
            <input type="text" name="name" defaultValue={account.name} />
            <span>Name</span>
          </label>
          <label>
            <input type="text" name="link" defaultValue={account.link} />
            <span>Link</span>
          </label>
          <label>
            <input type="text" name="email" defaultValue={account.email} />
            <span>Email</span>
          </label>
          <label>
          <input type="text" name="password" defaultValue={account.password}/>
          <span>Password</span>
          </label>


          <label>
            <select name="user" id="user">
              <option value={account.user} disabled selected>{account.user}</option>
              {employees.map((employee) => (
                <option key={employee._id} value={employee.name}>{employee.name} {employee.lastName}</option>
              ))}
            </select>
            <span>Current User</span>
         </label>

          <label>
            <select name="status" id="status">
              <option value={account.status} disabled selected>{account.status}</option>
              <option value="In Use">In Use</option>
              <option value="Not In Use">Not In Use</option>
              <option value="Account Needed">Account Needed</option>
              <option value="Deleted">Deleted</option>
            </select>
            <span>User</span>
          </label>

          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleAccountPage;