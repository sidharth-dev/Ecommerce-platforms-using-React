import "../footer/footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      className="text-light pt-5 mt-5"
      style={{
        marginBottom: "-1px",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-es-4">
            <h5>About Us</h5>
            <p>
              Our eCommerce platform offers a wide range of quality products at
              affordable prices. We are committed to providing excellent
              customer service.
            </p>
          </div>

          <div className="col-md-3 col-es-4">
            <h5>Customer Service</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="">Returns</Link>
              </li>
              <li>
                <Link to="">Shipping Info</Link>
              </li>
              <li>
                <Link to="">FAQ</Link>
              </li>
            </ul>
          </div>

          <div className="col-md-3 col-es-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/product">Shop</Link>
              </li>
              <li>
                <Link to="">Privacy Policy</Link>
              </li>
              <li>
                <Link to="">Terms of Service</Link>
              </li>
            </ul>
          </div>

          <div className="col-md-3 col-es-4">
            <h5>Follow Us</h5>
            <div className="d-flex gap-3">
              <a href="" target="blank">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="" target="blank">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="" target="blank">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="" target="blank">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-4 pt-3 border-top">
          <p>&copy; 2024 Your eCommerce. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
