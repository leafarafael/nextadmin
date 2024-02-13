import Link from "next/link";
import styles from "@/app/ui/dashboard/board/board.module.css";
import  {getLastDataChanges}  from "@/app/lib/data";


const BoardPage = async () => {
    try {
        const { lastChanges } = await getLastDataChanges();
        console.log("This changes" + lastChanges);

        return (
          <div className={styles.container}>
            <div className={styles.top}></div>
            <table className={styles.table}>
              <thead>
                <tr>
                  <td>No</td>
                  <td>Type</td>
                  <td>Name</td>
                  <td>Updated At</td>
                </tr>
              </thead>
              <tbody>
                {lastChanges && lastChanges.map((change, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{change.type}</td>
                    <td>{change.assetType || change.name}</td>
                    <td>{change.updatedAt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      } catch (error) {
        console.error("Error:", error);
        return <div>Error occurred while fetching data.</div>;
      }
    };

export default BoardPage;