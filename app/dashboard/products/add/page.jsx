import { addProduct } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/products/addProduct/addProduct.module.css";

const AddProductPage = () => {
  return (
    <div className={styles.container}>
      <form action={addProduct} className={styles.form}>
        <input type="text" placeholder="title" name="title" required />
        <input type="text" placeholder="brand" name="brand" />
        <select name="cat" id="cat">
          <option value="general">Choose a Category</option>
          <option value="computer">Office Equipment</option>
          <option value="computer">Classroom Equipment</option>
          <option value="computer">Software</option>
          <option value="computer">Hardware</option>
          
        </select>
        <input type="number" placeholder="used" name="used" required />
        <input type="number" placeholder="defective" name="defective" required />
        <input type="number" placeholder="stock" name="stock" required />
        <input type="text" placeholder="color" name="color" />
        <input type="text" placeholder="size" name="size" />
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