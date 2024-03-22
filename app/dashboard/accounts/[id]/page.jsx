import { updateAccount } from "@/app/lib/actions";
import { fetchAccount } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/users/singleUser/singleaccount.module.css";
import Image from "next/image";

const SingleAccountPage = async ({ params }) => {
  
  const { id } = params;
  const user = await fetchUser(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={account.img || "/noavatar.png"} alt="" fill />
        </div>
        {account.username}
      </div>
      <div className={styles.formContainer}>
        <form action={updateUser} className={styles.form}>
          <input type="hidden" name="id" value={account.id}/>
          <label>Username</label>
          <input type="text" name="username" placeholder={account.username} />
          <label>Email</label>
          <input type="email" name="email" placeholder={account.email} />
          <label>Password</label>
          <input type="text" name="password" />
          <label>Phone</label>
          <input type="text" name="phone" placeholder={account.phone} />
          <label>Address</label>
          <textarea type="text" name="address" placeholder={account.address} />
          <label>Is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true} selected={account.isAdmin}>Yes</option>
            <option value={false} selected={!account.isAdmin}>No</option>
          </select>
          <label>Is Active?</label>
          <select name="isActive" id="isActive">
            <option value={true} selected={account.isActive}>Yes</option>
            <option value={false} selected={!account.isActive}>No</option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleAccountPage;