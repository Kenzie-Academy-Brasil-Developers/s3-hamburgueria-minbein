import { ProductCard } from "./ProductCard";
import styles from "./styles.module.scss"

export const ProductList = ({ products, addProduct }) => {
   return (
      <ul className={styles.listContainer}>
         {products.map((product) => (
            <ProductCard addProduct={addProduct} key={product.id} product={product} />
         ))}
      </ul>
   );
};
