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
          <label>
            <input type="text" name="assetTag" defaultValue={asset.assetTag} />
            <span>Tag</span>
          </label>

          <label>
            <input type="text" name="brand" defaultValue={asset.brand} />
            <span>Brand</span>
          </label>

          <label>
            <input type="text" name="assetModel" defaultValue={asset.assetModel} />
            <span>Model</span>
          </label>

          <label>
            <input type="text" name="serial" defaultValue={asset.serial} />
            <span>Serial Number</span>
          </label>

          <label>
            <select name="assetType" id="assetType">
              <option value={asset.assetType} disabled selected>{asset.assetType}</option>
              <option value="Laptop">Laptop</option>
              <option value="System Unit">System Unit</option>
              <option value="Monitor">Monitor</option>
              <option value="Mouse">Mouse</option>
              <option value="Keyboard">Keyboard</option>
              <option value="Photocopier">Photocopier</option>
              <option value="Printer">Printer</option>
              <option value="Scanner">Scanner</option>
              <option value="Speaker">Speaker</option>
              <option value="Telephone">Telephone</option>
              <option value="Switch">Switch</option>
              <option value="Router">Router</option>
              <option value="Access Point">Access Point</option>
              <option value="Others">Others</option>
            </select>
            <span>Type</span>   
          </label>  
          
          <label>
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
            <span>Department</span>
          </label>

          <label>


            
          <input type="text" name="ipadd" defaultValue={asset.ipadd} />
          <span>IP Address</span>
        </label>

          <label>
            <select name="status" id="status">
              <option value={asset.status} disabled selected>{asset.status}</option>
              <option value="In Use">In Use</option>
              <option value="Available">Available</option>
              <option value="Not In Use">Not In Use</option>
              <option value="In Repair">In Repair</option>
              <option value="Reserve">Reserve</option>
              <option value="For Dispossal">For Dispossal</option>
            </select>
            <span>Status</span>
          </label>
    
          <label>
            <input type="number" name="quantity" defaultValue={asset.quantity} />
            <span>Quantity</span>
          </label>
          
          <label>
            <select name="user" id="user">
              <option value={asset.user} disabled selected>{asset.user}</option>
              {employees.map((employee) => (
                <option key={employee._id} value={employee.name}>{employee.name} {employee.lastName}</option>
              ))}
            </select>
            <span>Current User</span>
         </label>

        <label>
          <input type="number" name="price" defaultValue={asset.price} />
          <span>Price</span>
        </label>
        
        <label>
          <input type="date" name="dop" defaultValue={asset.dop} />
          <span>Date of Purchase</span>
        </label>

        <textarea
          placeholder="Description"
          name="description"
          id="description"
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