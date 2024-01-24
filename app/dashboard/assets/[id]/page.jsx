import { updateAsset} from "@/app/lib/actions";
import { fetchAsset, fetchAllEmployees } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/assets/singleAsset/singleAsset.module.css";
import Image from "next/image";

const SingleAssetPage = async ({ params }) => {
  const { id } = params;
  const asset = await fetchAsset(id);
  const { employees } = await fetchAllEmployees();


  return (
    <div className={styles.container}>
      {/* <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        {asset.title}
      </div> */}
      <div className={styles.formContainer}>
        <form action={updateAsset} className={styles.form}>
          <input type="hidden" name="id" value={asset.id} />
          <label>Tag</label>
          <input type="text" name="assetTag" defaultValue={asset.assetTag} />
          <label>Brand</label>
          <input type="text" name="brand" defaultValue={asset.brand} />
          <label>Model</label>
          <input type="text" name="assetModel" defaultValue={asset.assetModel} />
          <label>Serial</label>
          <input type="text" name="serial" defaultValue={asset.serial} />

          <label>Type</label>
          <select name="assetType" id="assetType">
            <option value={asset.assetType} disabled selected>{asset.assetType}</option>
            <option value="System Unit">System Unit</option>
            <option value="Monitor">Monitor</option>
            <option value="Mouse">Mouse</option>
            <option value="Keyboard">Keyboard</option>
            <option value="Telephone">Telephone</option>
            <option value="Switch">Switch</option>
            <option value="Router">Router</option>
            <option value="Access Point">Access Point</option>
            <option value="Others">Others</option>
          </select>     
          
          <label>Department</label>
          <select name="dept" id="dept">
            <option value={asset.dept} disabled selected>{asset.dept}</option>
            <option value="Reception">Reception</option>
            <option value="Accounting">Accounting</option>
            <option value="IT">IT</option>
            <option value="Registrar">Registrar</option>
            <option value="Principal">Principal</option>
            <option value="HR">HR</option>
            <option value="Clinic">Clinic</option>
            <option value="Admin">Admin</option>
            <option value="Others">Others</option>
          </select>

          <label>Status</label>
          <select name="status" id="status">
            <option value={asset.status} disabled selected>{asset.status}</option>
            <option value="In Use">In Use</option>
            <option value="Available">Available</option>
            <option value="Not In Use">Not In Use</option>
            <option value="In Repair">In Repair</option>
            <option value="Reserve">Reserve</option>
            <option value="For Dispossal">For Dispossal</option>
          </select>
    
          <label>Quantity</label>
          <input type="number" name="quantity" defaultValue={asset.quantity} />
          
          <label>Current User</label>
          <select name="user" id="user">
            <option value={asset.user} disabled selected>{asset.user}</option>
            {employees.map((employee) => (
              <option key={employee._id} value={employee.name}>{employee.name}</option>
            ))}
         </select>

          <label>Description</label>
          <textarea
            name="desc"
            id="desc"
            rows="10"
            defaultValue={asset.description}
          >
          </textarea>

          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleAssetPage;