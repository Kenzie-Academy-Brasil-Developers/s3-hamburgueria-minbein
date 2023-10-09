import styles from "./styles.module.scss";

export const ProductCard = ({ product, addProduct }) => {
  return (
    <li className={styles.listItem}>
      <img src={product.img} alt={product.name} />
      <div>
        <h3>{product.name}</h3>
        <span>{product.category}</span>
        <p>
          {product.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
        <button onClick={() => addProduct(product.id)}>Adicionar</button>
      </div>
    </li>
  );
};
