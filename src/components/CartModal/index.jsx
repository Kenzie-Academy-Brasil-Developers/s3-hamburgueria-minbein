import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import { MdRemoveShoppingCart } from "react-icons/md";
import styles from "./styles.module.scss";

export const CartModal = ({ cartList, onClose, removeAll, removeProduct }) => {
  const total = cartList.reduce((prevValue, cart) => {
    return prevValue + cart.price;
  }, 0);

  const emptyCartContent = (
    <div className={styles.empty}>
      <div className={styles.emptyCart}>
        <MdRemoveShoppingCart size={50} />
        <p>Carrinho vazio</p>
      </div>
      <div>
        <div className={styles.total}>
          <p>Total</p>
          <span>
            {total.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </div>
        <button onClick={onClose}>Fechar</button>
      </div>
    </div>
  );

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
          emptyCartContent
        ) : (
          <div>
            <ul>
              {cartList.map((cart) => (
                <CartItemCard
                  removeProduct={removeProduct}
                  key={cart.id}
                  product={cart}
                />
              ))}
            </ul>
            <div className={styles.totalContainer}>
              <div className={styles.total}>
                <p>Total</p>
                <span>
                  {total.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </span>
              </div>
              <button onClick={removeAll}>Remover todos</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
