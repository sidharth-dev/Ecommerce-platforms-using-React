import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import ProductContext from "./context/ProductContext";
import Nav from "./component/nav/Nav";
import Product from "./component/product_card/Card";
import Home from "./component/pages/Home";
import Cart from "./component/pages/Cart";
import About from "./component/pages/About";
import Contact from "./component/pages/Contact";
import ProductDetail from "./component/pages/ProductDetail";
import Footer from "./component/footer/footer";
import Show from "./component/pages/Show";
import NotFound from "./component/pages/NotFound";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const [fetched_products, setProducts] = useState([]);
  const [filterText, change_filter] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const location = useLocation();

  async function fetchProducts() {
    var response = await fetch("https://fakestoreapi.com/products");
    var data = await response.json();
    setProducts(data);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  function save_filter(txt) {
    change_filter(txt.toLowerCase());
  }

  const products = fetched_products.filter((p) => {
    return p.title && p.title.toLowerCase().includes(filterText);
  });

  function addToCart(productId) {
    const product = products[productId];
    setCartItems((prevItems) => [...prevItems, { ...product, quantity: 1 }]);
  }

  function removeFromCart(id) {
    setCartItems(cartItems.filter((product) => product.id !== id));
  }
  const [items_no, setItemsNo] = useState(0);
  useEffect(() => {
    let noItems = 0;
    cartItems.forEach(({ price, quantity }) => {
      noItems += quantity;
    });
    setItemsNo(noItems);
  }, [cartItems]);

  function updateQuantity(id, no) {
    const updatedItems = cartItems.map((item) =>
      item.id === id
        ? { ...item, quantity: Math.max(item.quantity + no, 1) } // Ensure quantity does not go below 0
        : item
    );

    setCartItems(updatedItems);
  }
  let total = 0.0;
  cartItems.forEach(({ price, quantity }) => {
    total += price * quantity;
  });

  return (
    <ProductContext.Provider
      value={{
        products: fetched_products,
        filterProduct: products,
        filterText: filterText,
        setFilter: save_filter,
        addToCart: addToCart,
        removeFromCart: removeFromCart,
        cartItems: cartItems,
        cartItemsNumber: items_no,
        updateQuantity: updateQuantity,
        totalPrice: total,
      }}
    >
      <div>
        <Show>
          <Nav />
        </Show>
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <motion.div
                  initial={{ opacity: 0, y: "50%", filter: "blur( 15px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
                  exit={{ opacity: 0, y: "-50%", filter: "blur( 15px)" }}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                    delay: 0.3,
                  }}
                >
                  <Home />
                </motion.div>
              }
            />

            <Route
              path="/cart"
              element={
                <motion.div
                  initial={{ opacity: 0, y: "50%", filter: "blur( 15px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
                  exit={{ opacity: 0, y: "-50%", filter: "blur( 15px)" }}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                    delay: 0.3,
                  }}
                >
                  <Cart />
                </motion.div>
              }
            />
            <Route
              path="/about"
              element={
                <motion.div
                  initial={{ opacity: 0, y: "50%", filter: "blur( 15px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
                  exit={{ opacity: 0, y: "-50%", filter: "blur( 15px)" }}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                    delay: 0.3,
                  }}
                >
                  <About />
                </motion.div>
              }
            />
            <Route
              path="/contact"
              element={
                <motion.div
                  initial={{ opacity: 0, y: "50%", filter: "blur( 15px)" }}
                  animate={{ opacity: 1, y: "0", filter: "blur()" }}
                  exit={{ opacity: 0, y: "-50%", filter: "blur( 15px)" }}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                    delay: 0.3,
                  }}
                >
                  <Contact />
                </motion.div>
              }
            />
            <Route
              path="/product"
              element={
                <motion.div
                  initial={{ opacity: 0, y: "50%", filter: "blur( 15px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
                  exit={{ opacity: 0, y: "-50%", filter: "blur( 15px)" }}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                    delay: 0.3,
                  }}
                >
                  <Product />
                </motion.div>
              }
            />
            <Route
              path="/product/:id"
              element={
                <motion.div
                  initial={{ opacity: 0, y: "50%", filter: "blur( 15px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
                  exit={{ opacity: 0, y: "-50%", filter: "blur( 15px)" }}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                    delay: 0.3,
                  }}
                >
                  <ProductDetail />
                </motion.div>
              }
            />
            <Route
              path="*"
              element={
                <motion.div
                  initial={{ opacity: 0, y: "50%", filter: "blur( 15px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
                  exit={{ opacity: 0, y: "-50%", filter: "blur( 15px)" }}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                    delay: 0.3,
                  }}
                >
                  <NotFound />
                </motion.div>
              }
            />
          </Routes>
        </AnimatePresence>

        <Show>
          <Footer />
        </Show>
      </div>
    </ProductContext.Provider>
  );
}

export default App;
