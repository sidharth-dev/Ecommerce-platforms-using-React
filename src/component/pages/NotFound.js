import "./styles/NotFound.css";
import { useNavigate } from "react-router-dom";
function NotFound() {
  const navigate = useNavigate();

  return (
    <body
      style={{
        backgroundColor: "#1c2833",
        minHeight: "100vh",
      }}
    >
      <div className="central-body">
        <img
          className="image-404"
          src="http://salehriaz.com/404Page/img/404.svg"
          width="300px"
        />
        <a
          onClick={() => {
            navigate("/");
          }}
          className="btn-go-home"
        >
          GO BACK HOME
        </a>
      </div>
      <div className="objects">
        <img
          className="object_rocket"
          src="http://salehriaz.com/404Page/img/rocket.svg"
          width="40px"
        />
        <div className="earth-moon">
          <img
            className="object_earth"
            src="http://salehriaz.com/404Page/img/earth.svg"
            width="100px"
          />
          <img
            className="object_moon"
            src="http://salehriaz.com/404Page/img/moon.svg"
            width="80px"
          />
        </div>
        <div className="box_astronaut">
          <img
            className="object_astronaut"
            src="http://salehriaz.com/404Page/img/astronaut.svg"
            width="140px"
          />
        </div>
      </div>
      <div className="glowing_stars">
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
      </div>
    </body>
  );
}

export default NotFound;
