import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { ProductList } from "../components/ProductList";
import { api } from "../services/api";
import { CartModal } from "../components/CartModal";
import styles from "./styles.module.scss"

export const HomePage = () => {
  const [cartList, setCartList] = useState([]);
  const [product, setProducts] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await api.get("/products");
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getProducts();
  }, []);

  const toggleModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Header openModal={toggleModal} />
      <main className={styles.mainContainer}>
        <ProductList product={product} />

        {modalOpen && (
          <CartModal
            cartList={cartList}
            setCartList={setCartList}
            onClose={closeModal}
          />
        )}
      </main>
    </>
  );
};
