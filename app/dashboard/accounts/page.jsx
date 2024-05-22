import { deleteUser } from "@/app/lib/actions";
import { fetchAccounts } from "@/app/lib/data";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Search from "@/app/ui/dashboard/search/search";
import styles from "@/app/ui/dashboard/accounts/accounts.module.css";
import Image from "next/image";
import Link from "next/link";
import { auth } from "@/app/auth";

const AccountsPage = async ({ searchParams }) => {
  const { user } = await auth();
  if (!user || !user.isAdmin) {
    return null; 
  }
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, accounts } = await fetchAccounts(q, page);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for an account..." />
        <Link href="/dashboard/accounts/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Link</td>
            <td>Email</td>
            <td>Password</td>
            <td>User</td>
            <td>Status</td>
          </tr>
        </thead>
        <tbody>
          {accounts.map((account) => (
            <tr key={account.id}>
              <td>{account.name}</td>
              <td>{account.link}</td>
              <td>{account.email}</td>
              <td>{account.password}</td>
              <td>{account.user}</td>
              <td>{account.status}</td>

              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/accounts/${account.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  {/* <form action={deleteUser}>
                    <input type="hidden" name="id" value={(user.id)} />
                    <button className={`${styles.button} ${styles.delete}`} >
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

export default AccountsPage;