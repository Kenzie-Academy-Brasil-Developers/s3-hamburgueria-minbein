import { MdDelete } from "react-icons/md";
import styles from "./styles.module.scss";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const CartItemCard = ({ product, removeProduct }) => {
  return (
    <li className={styles.itemList} key={product.id}>
      <div>
        <img src={product.img} alt={product.name} />
        <div>
          <h3>{product.name}</h3>
          <p>R${product.price.toFixed(2)}</p>
        </div>
      </div>
      <button
        onClick={() => {
          removeProduct(product.id);
          toast.success(`Você removeu ${product.name} do carrinho.`);
        }}
      >
        <MdDelete size={21} />
      </button>
    </li>
  );
};
