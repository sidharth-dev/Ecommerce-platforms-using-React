import classNames from "classnames";
import "../product_card/productCard.css";
import { useContext, useEffect, useState } from "react";
import ProductContext from "../../context/ProductContext";
import { NavLink } from "react-router-dom";

function ProductCard() {
  var { filterProduct } = useContext(ProductContext);
  const [loading, setLoading] = useState(true); // Correct use of useState

  useEffect(() => {
    if (filterProduct.length > 0) {
      setLoading(false); // Set loading to false once products are available
    }
  }, [filterProduct]);

  if (loading) {
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
  return (
    <div>
      <div
        className={classNames("d-flex", "flex-wrap", "justify-content-center")}
      >
        {filterProduct.map((product) => (
          <NavLink to={"/product/" + product.id}>
            <div key={product.id} className={classNames("card", "card")}>
              <img
                src={product.image}
                className={classNames("card-img-top", "img")}
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">
                  Category: {product.category}
                  <br />
                  Brand: {product.brand}
                  <br />
                  Rating: {product.rating.rate}
                </p>
                <h5 className="card-title">${product.price}</h5>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default ProductCard;
