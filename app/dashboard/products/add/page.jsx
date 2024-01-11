import { addProduct } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/products/addProduct/addProduct.module.css";

const AddProductPage = () => {
  return (
    <div className={styles.container}>
      <form action={addProduct} className={styles.form}>
        <input type="text" placeholder="Title" name="title" required />
        <input type="text" placeholder="Brand" name="brand" />
        <input type="text" placeholder="Model" name="model" />
        <input type="text" placeholder="Serial Number" name="serial number" />
        <select name="status" id="status">
            <option value="inuse">In Use</option>
            <option value="available">Available</option>
            <option value="notinuse">Not In Use</option>
            <option value="inrepair">In Repair</option>
            <option value="reserve">Reserve</option>
            <option value="fordispossal">For Dispossal</option>
        </select>

        <select name="cat" id="cat">
          <option value="general">Choose a Category</option>
          <option value="office">Office Equipment</option>
          <option value="classroom">Classroom Equipment</option>
          <option value="software">Software</option>
          <option value="hardware">Hardware</option>
        </select>

        <input type="number" placeholder="Quantity" name="quantity" required />

        <input type="text" placeholder="Color" name="color" />
        <textarea
          name="desc"
          id="desc"
          rows="16"
          placeholder="Description"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddProductPage;