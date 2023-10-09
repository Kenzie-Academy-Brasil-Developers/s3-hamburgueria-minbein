import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { ProductList } from "../components/ProductList";
import { api } from "../services/api";
import { CartModal } from "../components/CartModal";
import { toast, ToastContainer } from "react-toastify";
import styles from "./styles.module.scss";
import "react-toastify/dist/ReactToastify.css";

export const HomePage = () => {
  const [cartList, setCartList] = useState([]);
  const [products, setProducts] = useState([]);
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

    const cart = localStorage.getItem("cart");
    if (cart && cart != "[]") {
      setCartList(JSON.parse(cart));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartList));
  }, [cartList]);

  const toggleModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const addProduct = (productId) => {
    const product = products.filter((p) => {
      return p.id == productId;
    })[0];

    if (isAdded(productId)) {
      return toast.error(`${product.name} já foi adicionado ao carrinho.`);
    }

    toast.success(`você adicionou ${product.name} ao carrinho.`);
    setCartList((current) => [...current, product]);
  };

  const isAdded = (productId) => {
    const product = cartList.filter((p) => {
      return p.id == productId;
    });
    return product.length > 0;
  };

  const removeProduct = (productId) => {
    const newCartList = cartList.filter((product) => {
      return product.id != productId;
    });
    setCartList(newCartList);
  };

  const removeAll = () => {
    setCartList([]);
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Header cartList={cartList} openModal={toggleModal} />
      <main className={styles.mainContainer}>
        <ProductList addProduct={addProduct} products={products} />
      </main>
      {modalOpen && (
        <CartModal
          removeProduct={removeProduct}
          removeAll={removeAll}
          cartList={cartList}
          setCartList={setCartList}
          onClose={closeModal}
        />
      )}
    </>
  );
};
