import Logo from "../../assets/Logo.svg";
import styles from "./styles.module.scss"
import { MdShoppingCart } from "react-icons/md";

export const Header = ({ openModal }) => {
  return (
    <header className={styles.headerContainer}>
      <img src={Logo} alt="Logo Kenzie Burguer" />
      <div>
        <button onClick={openModal}>
          <MdShoppingCart size={21} style={{ color: "#BDBDBD" }} />
          <div className={styles.spanContainer}>
          <span>0</span>
          </div>
        </button>
      </div>
    </header>
  );
};
