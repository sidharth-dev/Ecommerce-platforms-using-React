import "./styles/contact.css";

function Contact() {
  return (
    <div className="container">
      <section className="contact-section mt-5" id="contact-section">
        <div className="row justify-content-center ">
          <div className="col-md-7 heading-section text-center mb-4">
            <h2 className="mb-4">Contact Us</h2>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia
            </p>
          </div>
        </div>

        <div className="row d-flex contact-info mb-3">
          <div className="col-md-6 col-lg-4 d-flex ftco-animate">
            <div className="align-self-stretch box px-4 py-3 text-center">
              <h3 className="mb-4">Address</h3>
              <p>198 West 21th Street, Suite 721 New York NY 10016</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 d-flex ftco-animate">
            <div className="align-self-stretch box p-4 text-center">
              <h3 className="mb-4">Contact Number</h3>
              <p>
                <a href="tel://1234567920">+ 1235 2355 98</a>
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 d-flex ftco-animate">
            <div className="align-self-stretch box p-4 text-center">
              <h3 className="mb-4">Email Address</h3>
              <p>
                <a href="mailto:info@yoursite.com">info@yoursite.com</a>
              </p>
            </div>
          </div>
        </div>

        <div className="row no-gutters">
          <div className="col-sm-12 d-flex">
            <form action="#" className="bg-light p-4 p-md-5 contact-form">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Email"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                />
              </div>
              <div className="form-group">
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="7"
                  className="form-control"
                  placeholder="Message"
                ></textarea>
              </div>
              <div className="form-group d-flex justify-content-end">
                <input
                  type="submit"
                  value="Send Message"
                  className="btn btn-primary py-2 px-5"
                />
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
