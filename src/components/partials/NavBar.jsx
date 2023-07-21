import { useEffect, useState } from "react";
import logo from "../../assets/img/logo.png";
import "../../assets/styles/NavBar.css";
import { NavLink } from "react-router-dom";
import gorro from "../../assets/img/Products/gorro1.jpg";
const Test = () => {
  const sentences = [
    "NATIONAL DELIVERIES 👍",
    "FREE SHIPPING FOR PURCHASES OVER S/200 😲",
    "SECURE YOUR ORDER NOW... WHAT ARE YOU WAITING FOR? 😎",
  ];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 3500);
    return () => {
      clearInterval(interval);
    };
  }, []);
  const handleMenu = () => {
    const menu = document.getElementById("navbar");
    menu.classList.toggle("view");
  };
  const handleCloseMenu = () => {
    const menu = document.getElementById("navbar");
    menu.classList.toggle("view");
  };
  const handleCart = () => {
    const cart = document.querySelector(".nav-cart");
    cart.classList.toggle("view-cart");
  };
  const handleCloseCart = () => {
    const cart = document.querySelector(".nav-cart");
    cart.classList.toggle("view-cart");
  };
  return (
    <div className="header-primary">
      <div className="carousel-container">
        <div className="carousel-slide fade-in">{sentences[index]}</div>
      </div>
      <section id="header">
        <NavLink to={"/"}>
          <img src={logo} alt="logo" className="logo" />
        </NavLink>
        <div id="content-nav">
          <ul id="navbar">
            <div className="content-close">
              <div className="close">
                <i
                  className="fa-sharp fa-solid fa-xmark"
                  onClick={handleCloseMenu}
                ></i>
              </div>
            </div>
            <li className="link-top">
              <NavLink to={"/"} activeclassname="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"/shop"}>Shop</NavLink>
            </li>
            <li>
              <NavLink to={"/blog"}>Blog</NavLink>
            </li>
            <li>
              <NavLink to={"/about"}>About</NavLink>
            </li>
            <li>
              <NavLink to={"/contact"}>Contact</NavLink>
            </li>
            <li>
              <i className="fa-solid fa-bag-shopping" onClick={handleCart}></i>
            </li>
          </ul>
        </div>
        <div id="mobile">
          <i className="fa-solid fa-bag-shopping" onClick={handleCart}></i>
          <i className="fas fa-bars" id="bar" onClick={handleMenu}></i>
        </div>
        {/* NUEVO CART */}
        <div className="nav-cart">
          <div className="nav-cart-header">
            <i
              className="fa-solid fa-angles-right"
              onClick={handleCloseCart}
            ></i>
            <h4>GO TO SHOPPING CART</h4>
          </div>
          <div className="nav-cart-body">
            <table className="data">
              <tbody>
                <tr>
                  <th>
                    <img src={gorro} alt="" width={"50px"} />
                  </th>
                  <th>
                    Lorem, ipsum dolor. <br />
                    S/159.95
                  </th>
                  <th className="conta">
                    <button>
                      <i className="fa-solid fa-minus"></i>
                    </button>
                    <p>15</p>
                    <button>
                      <i className="fa-solid fa-plus"></i>
                    </button>
                  </th>
                  <th>
                    <i className="far fa-times-circle"></i>
                  </th>
                </tr>
                <tr>
                  <th>
                    <img src={gorro} alt="" width={"50px"} />
                  </th>
                  <th>
                    Lorem, ipsum dolor. <br />
                    S/159.95
                  </th>
                  <th className="conta">
                    <button>
                      <i className="fa-solid fa-minus"></i>
                    </button>
                    <p>15</p>
                    <button>
                      <i className="fa-solid fa-plus"></i>
                    </button>
                  </th>
                  <th>
                    <i className="far fa-times-circle"></i>
                  </th>
                </tr>
                <tr>
                  <th>
                    <img src={gorro} alt="" width={"50px"} />
                  </th>
                  <th>
                    Lorem, ipsum dolor. <br />
                    S/159.95
                  </th>
                  <th className="conta">
                    <button>
                      <i className="fa-solid fa-minus"></i>
                    </button>
                    <p>15</p>
                    <button>
                      <i className="fa-solid fa-plus"></i>
                    </button>
                  </th>
                  <th>
                    <i className="far fa-times-circle"></i>
                  </th>
                </tr>
                <tr>
                  <th>
                    <img src={gorro} alt="" width={"50px"} />
                  </th>
                  <th>
                    Lorem, ipsum dolor. <br />
                    S/159.95
                  </th>
                  <th className="conta">
                    <button>
                      <i className="fa-solid fa-minus"></i>
                    </button>
                    <p>15</p>
                    <button>
                      <i className="fa-solid fa-plus"></i>
                    </button>
                  </th>
                  <th>
                    <i className="far fa-times-circle"></i>
                  </th>
                </tr>
              </tbody>
            </table>
            <div className="cart-desc">
              <table>
                <tbody>
                  <tr>
                    <th>1 article</th>
                    <td>S/250</td>
                  </tr>
                  <tr>
                    <th>Shipping</th>
                    <td>Free</td>
                  </tr>
                  <tr>
                    <th>Total</th>
                    <td>S/250</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <NavLink to={"/cart"}>GO TO SHOPPING CART</NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Test;
