import { ProductCard } from "./ProductCard";
import styles from "./styles.module.scss"

export const ProductList = ({ product }) => {
   return (
      <ul className={styles.listContainer}>
         {product.map((products) => (
            <ProductCard key={products.id} products={products} />
         ))}
      </ul>
   );
};
