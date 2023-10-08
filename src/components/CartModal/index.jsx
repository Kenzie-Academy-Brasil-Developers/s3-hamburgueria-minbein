import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import styles from "./styles.module.scss";

export const CartModal = ({ cartList, onClose }) => {
  const total = cartList.reduce((prevValue, product) => {
    return prevValue + product.price;
  }, 0);

  return (
    <div className={styles.backdrop}>
      <div className={styles.modal} role="dialog">
        <div className={styles.modalHeader}>
          <h2>Carrinho de compras</h2>
          <button onClick={onClose}>
            <MdClose size={20} />
          </button>
        </div>
        {cartList.length === 0 ? (
          <div>
            <p>Carrinho vazio</p>
          </div>
        ) : (
          <div>
            <ul>
              {cartList.map((product) => (
                <CartItemCard key={product.id} product={product} />
              ))}
            </ul>
            <div>
              <div>
                <span>Total</span>
                <span>
                  {total.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </span>
              </div>
              <button>Remover todos</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
