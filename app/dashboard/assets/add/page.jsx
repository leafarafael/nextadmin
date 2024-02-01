import { addAsset } from "@/app/lib/actions";
import { fetchAllEmployees } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/assets/addAsset/addAsset.module.css";

const AddAssetPage = async () => {
  const { employees } = await fetchAllEmployees();

  return (
    <div className={styles.container}>
      <form action={addAsset} className={styles.form}>

        <input type="text" placeholder="Tag" defaultValue="UPSBN-" name="assetTag" required />

        <select name="assetType" id="assetType">
          <option value="" disabled selected>Asset Type</option>
          <option value="System Unit">System Unit</option>
          <option value="Monitor">Monitor</option>
          <option value="Mouse">Mouse</option>
          <option value="Keyboard">Keyboard</option>
          <option value="Photocopier">Photocopier</option>
          <option value="Printer">Printer</option>
          <option value="Scanner">Scanner</option>
          <option value="Telephone">Telephone</option>
          <option value="Switch">Switch</option>
          <option value="Router">Router</option>
          <option value="Access Point">Access Point</option>
          <option value="Others">Others</option>
        </select>        

        <input type="text" placeholder="Brand" name="brand" />

        <select name="dept" id="dept">
          <option value="" disabled selected>Choose a Department</option>
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

        <input type="text" placeholder="Model" name="assetModel" />

        <select name="status" id="status">
          <option value="In Use" selected>In Use</option>
          <option value="Available">Available</option>
          <option value="Not In Use">Not In Use</option>
          <option value="In Repair">In Repair</option>
          <option value="Reserve">Reserve</option>
          <option value="For Dispossal">For Dispossal</option>
        </select>


        <input type="text" placeholder="Serial Number" name="serial" />

        <select name="user" id="user">
          <option value="">Select user</option>
          {employees.map((employee) => (
            <option key={employee._id} value={employee.name}>{employee.name}</option>
          ))}
        </select>
        
        <input type="number"  defaultValue="1" placeholder="Quantity" name="quantity"/>
        <input type="text"  placeholder="IP Address" name="ipadd"/>
        <input type="number"  placeholder="Price" name="price"/>
        <input type="date"  placeholder="Date of Purchase" name="dop"/>

        <textarea
          name="description"
          id="description"
          rows="4"
          placeholder="Description"
        ></textarea>


        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddAssetPage;