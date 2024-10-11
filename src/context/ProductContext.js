import { createContext } from "react";

const ProductContext = createContext({
  products: [],
  filterProduct: [],
  filterTxt: "",
  setFilter: () => {},
  addToCart: () => {},
  removeFromCart: () => {},
  cartItems: [],
  cartItemsNumber: 0,
});

export default ProductContext;
