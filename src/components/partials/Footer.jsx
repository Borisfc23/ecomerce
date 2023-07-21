import "../../assets/styles/Footer.css";
import logo from "../../assets/img/logoblanco.png";
import p1 from "../../assets/img/footer/p1.jpg";
import p2 from "../../assets/img/footer/p2.jpg";
import p4 from "../../assets/img/footer/p4.jpg";
const Footer = () => {
  return (
    <footer className="section-p1">
      <div className="col">
        <img src={logo} alt="" className="logo" />
        <h4>Contact</h4>
        <p>
          <strong>Address:</strong> Alto Palermo Shopping, PB, Local 32, CABA
        </p>
        <p>
          <strong>Phone:</strong> +34 914 45 19 31
        </p>
        <p>
          <strong>Hours:</strong> Monday to Friday from 10 a 22hs
        </p>
      </div>
      <div className="col">
        <h4>About</h4>
        <a href="">About Us</a>
        <a href="">Contact Us</a>
        <a href="">Privacy Policy</a>
        <a href="">Terms & Conditions</a>
        <a href="">Delivery Information</a>
      </div>
      <div className="col">
        <h4>My Account</h4>
        <a href="">Help</a>
        <a href="">Sign In</a>
        <a href="">View Cart</a>
        <a href="">My Wishlist</a>
        <a href="">Track My Order</a>
      </div>
      <div className="col">
        <h4>Means of Payments</h4>
        <div className="payments">
          <img src={p1} alt="visa" />
          <img src={p2} alt="mastercard" />
          <img src={p4} alt="america express" />
        </div>
        <div className="follow">
          <h4 className="t-follow">Follow us</h4>
          <div className="icon">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-pinterest-p"></i>
          </div>
        </div>
      </div>
      <div className="coppyright">
        <p>&copy; Boris Flores - React Ecomerce to Portfolio</p>
      </div>
    </footer>
  );
};

export default Footer;
