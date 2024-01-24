"use client"

import styles from "@/app/ui/dashboard/assets/assets.module.css";

// assetsDeleteButton.js (client-side component)
import { deleteAsset } from "@/app/lib/actions";

const AssetsDeleteButton = ({ id }) => {
  const handleDelete = async () => {
    const confirmed = confirm("Are you sure you want to delete this asset?");

    if (confirmed) {
      // User confirmed, proceed with the deletion
      await deleteAsset(id);
      // Fetch assets again or update the state accordingly
    }
  };

  return (
    <button
      type="button"
      onClick={handleDelete}
      className={`${styles.button} ${styles.delete}`}
    >
      Delete
    </button>
  );
};

export default AssetsDeleteButton;
