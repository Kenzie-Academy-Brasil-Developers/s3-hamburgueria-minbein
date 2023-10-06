import styles from "./styles.module.scss"

export const ProductCard = ({ products }) => {
    return(
        <li className={styles.listItem}>
            <img src={products.img} alt={products.name} />
            <div>
                <h3>{products.name}</h3>
                <span>{products.category}</span>
                <p>{products.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</p>
                <button>Adicionar</button>
            </div>
        </li>
    )
}