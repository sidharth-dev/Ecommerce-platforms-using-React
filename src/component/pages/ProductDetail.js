import { useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import ProductContext from "../../context/ProductContext";
import "./styles/ProductDetail.css";

function ProductDetail() {
  const { id } = useParams();
  const { products, addToCart, cartItems } = useContext(ProductContext);
  const navigate = useNavigate();
  const [isInCart, setisInCart] = useState(false);

  useEffect(() => {
    if (products[id - 1]) {
      setisInCart(cartItems.some((item) => item.id === Number(id)));
    }
  }, [cartItems, id, products]);

  if (!products[id - 1]) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          height: "90vh",
        }}
      >
        <div className="loader"></div>
      </div>
    );
  }

  function cart(productId) {
    addToCart(productId);
    showCartAlert();
  }

  function showCartAlert() {
    const alert = document.getElementById("cart-alert");
    alert.classList.add("show");

    // Hide the alert after 3 seconds
    setTimeout(() => {
      alert.classList.remove("show");
    }, 3000);
  }

  return (
    <>
      <div id="cart-alert" className="cart-alert">
        <p>Item added to cart!</p>
      </div>
      <div className="row">
        <div className="col-md-6 pt-3">
          <div className="product-image">
            <img
              src={products[id - 1].image}
              className="img-fluid"
              style={{ maxHeight: "550px" }}
              alt="Product Image"
            />
          </div>
        </div>
        <div className="col-md-6 pt-3">
          <h1 className="product-title">{products[id - 1].title}</h1>
          <p className="product-price">{"$" + products[id - 1].price}</p>
          <p className="product-description">{products[id - 1].description}</p>
          <div className="product-details">
            <ul className="list-unstyled">
              <li>
                <strong>Category:</strong> {products[id - 1].category}
              </li>
              <li>
                <strong>Rating</strong>
                <br />
                <span style={{ fontWeight: "600" }}>Count:</span>
                {products[id - 1].rating.count}
                <br />
                <span style={{ fontWeight: "600" }}>Rate:</span>
                {products[id - 1].rating.rate}
                <br />
              </li>
            </ul>
          </div>
          <div className="purchase-section mt-4">
            {isInCart ? (
              <button
                className="btn btn-warning"
                onClick={() => {
                  navigate("/cart");
                }}
              >
                Go to Cart
              </button>
            ) : (
              <button
                className="btn btn-warning"
                onClick={() => {
                  cart(id - 1);
                }}
              >
                Add to Cart
              </button>
            )}
            <button className="btn btn-primary ms-3">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
