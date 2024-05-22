import { updateAccount } from "@/app/lib/actions";
import { fetchAccount, fetchAllEmployees } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/accounts/singleAccount/singleAccount.module.css";
import Image from "next/image";

const SingleAccountPage = async ({ params }) => {
  
  const { id } = params;
  const account = await fetchAccount(id);

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <form action={updateAccount} className={styles.form}>
          <input type="hidden" name="id" value={account.id}/>
          <label>
            <input type="text" name="name" placeholder={user.name} />
            <span>Name</span>
          </label>
          <label>Link</label>
          <input type="text" name="link" placeholder={user.link} />
          <label>Email</label>
          <input type="email" name="email" placeholder={user.email} />
          <label>Password</label>
          <input type="password" name="password" />
         
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;