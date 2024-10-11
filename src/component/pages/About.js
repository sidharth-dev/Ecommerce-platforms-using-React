import "./styles/About.css";

function About() {
  return (
    <div className="container">
      <div className="about">
        <div className="container row">
          <div className="col-12 text-center my-5">
            <h1>About Us</h1>
          </div>
          <div className="col-12 text-center mb-5">
            <p className="lead">
              Our company was founded with the mission of providing the best
              products and services to our customers. We believe in quality,
              customer satisfaction, and continuous improvement.
            </p>
          </div>

          <div className="col-12 text-center mb-5">
            <h3>Our Team</h3>
            <p>
              We are a diverse group of individuals with a wide range of skills
              and expertise. Our team includes experts in product development,
              marketing, customer service, and more. We work together to bring
              you the best products and services possible.
            </p>
          </div>
          <div className="col-12 text-center mb-5">
            <h3>Our Mission</h3>
            <p>
              Our mission is to provide our customers with the highest quality
              products and services. We strive to exceed your expectations and
              to build long-lasting relationships with our customers. Your
              satisfaction is our top priority, and we are committed to ensuring
              that you have a positive experience with our company.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
