import Image from "next/image";
import Link from "next/link";
import styles from "@/app/ui/dashboard/assets/assets.module.css";
import Search from "@/app/ui/dashboard/search/search";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import { fetchAssets } from "@/app/lib/data";
import { deleteAsset } from "@/app/lib/actions";
import AssetsDeleteButton from "@/app/ui/dashboard/delete/deleteButton";


const AssetsPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, assets } = await fetchAssets(q, page);

  const handleDelete = async (id) => {
    const confirmed = confirm("Are you sure you want to delete this asset?");

    if (confirmed) {
      // User confirmed, proceed with the deletion
      await deleteAsset(id);
      // Fetch assets again or update the state accordingly
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a asset..." />
        <Link href="/dashboard/assets/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Asset Type</td>
            <td>Brand</td>
            <td>Model</td>
            <td>Status</td>
            <td>Department</td>
            <td>User</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {assets.map((asset) => (
            <tr key={asset.id}>
              <td>
                <div className={styles.asset}>
                  {/* <Image
                    src={asset.img || "/insert-image.png"}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.assetImage}
                  /> */}
                  {asset.assetType}
                </div>
              </td>
              
              <td>{asset.brand}</td>
              <td>{asset.assetModel}</td>
              <td>{asset.status}</td>
              <td>{asset.dept}</td>
              <td>{asset.user}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/assets/${asset.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <AssetsDeleteButton id={asset.id} />
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

export default AssetsPage;