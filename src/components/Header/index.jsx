import Logo from "../../assets/Logo.svg";
import styles from "./styles.module.scss";
import { MdShoppingCart } from "react-icons/md";

export const Header = ({ openModal, cartList }) => {
  return (
    <header className={styles.headerContainer}>
      <img src={Logo} alt="Logo Kenzie Burguer" />
      <div>
        <button onClick={openModal}>
          <MdShoppingCart size={23} style={{ color: "#BDBDBD" }} />
          <div className={styles.spanContainer}>
            <span>{cartList.length}</span>
          </div>
        </button>
      </div>
    </header>
  );
};
