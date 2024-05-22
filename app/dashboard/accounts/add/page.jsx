import { addAccount } from "@/app/lib/actions";
import { fetchAllEmployees } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/users/addUser/addUser.module.css";

const AddUserPage = async () => {
  const { employees } = await fetchAllEmployees();

  return (
    <div className={styles.container}>
      <form action={addAccount} className={styles.form}>
        <input type="text" placeholder="Name" name="name" required />
        <input type="text" placeholder="Link" name="link"  />
        <input type="email" placeholder="Email" name="email"  />
        <input
          type="password"
          placeholder="Password"
          name="password"
        />
        <select name="user" id="user">
          <option value="">Select user</option>
          {employees.map((employee) => (
            <option key={employee._id} value={employee.name}>{employee.name} {employee.lastName}</option>
          ))}
        </select>

        <select name="status" id="status">
          <option value="In Use" selected>In Use</option>
          <option value="Not In Use">Not In Use</option>
          <option value="Account Needed">Account Needed</option>
          <option value="Deleted">Deleted</option>
        </select>

      
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddUserPage;