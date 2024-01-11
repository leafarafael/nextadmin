import { updateProduct } from "@/app/lib/actions";
import { fetchProduct } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";

const SingleProductPage = async ({ params }) => {
  const { id } = params;
  const product = await fetchProduct(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        {product.title}
      </div>
      <div className={styles.formContainer}>
        <form action={updateProduct} className={styles.form}>
          <input type="hidden" name="id" value={product.id} />
          <label>Title</label>
          <input type="text" name="title" defaultValue={product.title} />
          <label>Brand</label>
          <input type="text" name="brand" defaultValue={product.brand} />
          <label>Model</label>
          <input type="text" name="prodmodel" defaultValue={product.prodmodel} />
          <label>Status</label>
          <select name="status" id="status">
            <option value="inuse">In Use</option>
            <option value="available">Available</option>
            <option value="notinuse">Not In Use</option>
            <option value="inrepair">In Repair</option>
            <option value="reserve">Reserve</option>
            <option value="fordispossal">For Dispossal</option>
          </select>
    
          <label>Quantity</label>
          <input type="quantity" name="quantity" defaultValue={product.stock} />

          <label>Color</label>
          <input
            type="text"
            name="color"
            placeholder={product.color || "color"}
          />

          <label>Category</label>
          <select name="cat" id="cat">
            <option value="kitchen">Office Equipment</option>
            <option value="kitchen">Classroom Equipment</option>
            <option value="computers">Hardware</option>
            <option value="kitchen">Software</option>
          </select>
          <label>Description</label>
          <textarea
            name="desc"
            id="desc"
            rows="10"
            placeholder={product.desc}
          ></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;