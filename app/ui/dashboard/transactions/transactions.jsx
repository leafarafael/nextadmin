import Image from "next/image";
import styles from "./transactions.module.css";
import { getLastDataChanges } from "@/app/lib/data";

const Transactions = ({ lastChanges }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Transactions</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Type</td>
            <td>Name</td>
            <td>Updated At</td>
          </tr>
        </thead>
        <tbody>
          {lastChanges && lastChanges.map((change, index) => (
            <tr key={index}>
              <td>{change.type}</td>
              <td>{change.assetType || change.name}</td>
              <td>{change.updatedAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export async function getServerSideProps() {
  try {
    console.log("Fetching last data changes...");
    const lastChanges = await getLastDataChanges(5); // Fetch last 5 data changes
    console.log("Last data changes:", lastChanges);
    return { props: { lastChanges } };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { props: { lastChanges: [] } };
  }
}

export default Transactions;
