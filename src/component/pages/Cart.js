import { useContext } from "react";
import ProductContext from "../../context/ProductContext";
import classNames from "classnames";
import { NavLink } from "react-router-dom";

function Cart() {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    totalPrice,
    cartItemsNumber,
  } = useContext(ProductContext);

  const increaseQuantity = (id) => {
    updateQuantity(id, 1);
  };

  const decreaseQuantity = (id) => {
    updateQuantity(id, -1);
  };
  return (
    <div className="container-fluid d-flex pt-3">
      <div className="row flex-grow-1">
        <div className="col-8">
          <div className="row d-flex flex-wrap">
            {cartItems.map((product) => {
              return (
                <div
                  key={product.id}
                  className={classNames("card", "m-3")}
                  style={{ width: "18rem" }}
                >
                  <NavLink to={"/product/" + product.id}>
                    <img
                      src={product.image}
                      className={classNames("card-img-top", "img")}
                      alt={product.title}
                    />
                  </NavLink>
                  <div
                    className="card-body"
                    style={{ overflow: "hidden", textOverflow: "ellipsis" }}
                  >
                    <h5 className="card-title" style={{ whiteSpace: "nowrap" }}>
                      {product.title}
                    </h5>
                    <p className="card-text">
                      Category: {product.category}
                      <br />
                      Rating: {product.rating.rate}
                    </p>
                    <h5 className="card-title">${product.price}</h5>
                    <button
                      className="btn btn-secondary btn-sm"
                      onClick={() => decreaseQuantity(product.id)}
                    >
                      -
                    </button>
                    <span className="mx-2">{product.quantity}</span>
                    <button
                      className="btn btn-secondary btn-sm"
                      onClick={() => increaseQuantity(product.id)}
                    >
                      +
                    </button>
                    <button
                      className="btn btn-danger ms-3"
                      onClick={() => removeFromCart(product.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Cart Summary Sidebar */}
        <div
          className="col-4 border-start"
          style={{
            minHeight: "52.8vh",
            maxHeight: "100%",
          }}
        >
          <div className="d-flex pb-5" style={{ height: "100%" }}>
            <div
              style={{
                width: "100%",
              }}
              className="align-self-end"
            >
              <h5
                style={{
                  fontSize: "larger",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  marginBottom: "10px",
                }}
              >
                Cart Summary
              </h5>
              <p>
                <strong>Number of Items:</strong> {cartItemsNumber}
              </p>
              <p>
                <strong>Total:</strong> ${totalPrice}
              </p>
              <button className="btn btn-primary w-100">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
