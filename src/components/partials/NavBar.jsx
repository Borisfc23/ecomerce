import { useEffect, useState } from "react";
import logo from "../../assets/img/logo.png";
import "../../assets/styles/NavBar.css";
import { NavLink } from "react-router-dom";
import { useStateValue } from "../../context/cartContext";
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
  //view cart
  const [{ cart }, dispatch] = useStateValue();
  let totalPay = 0;
  let shipment = 20;
  cart.map((item) => {
    totalPay = item.price * item.quantity + totalPay;
  });
  //remove Product
  const removeItem = (id) => {
    dispatch({
      type: "REMOVE_ITEM_TO_CART",
      id,
    });
  };
  const removeOneItem = (id) => {
    dispatch({
      type: "REMOVE_ONE_ITEM",
      id,
    });
  };
  const addMoreProduct = (producto) => {
    dispatch({
      type: "ADD_TO_CART",
      item: { ...producto, quantity: producto.quantity + 1 },
    });
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
                {cart.length ? (
                  cart.map((prod, index) => (
                    <tr key={index}>
                      <th>
                        <img src={prod.image} alt="" width={"50px"} />
                      </th>
                      <th>
                        {prod.name}
                        <br />
                        S/{prod.price}
                      </th>
                      <th className="conta">
                        <button onClick={() => removeOneItem(prod.id)}>
                          <i className="fa-solid fa-minus"></i>
                        </button>
                        <p>{prod.quantity}</p>
                        <button onClick={() => addMoreProduct(prod)}>
                          <i className="fa-solid fa-plus"></i>
                        </button>
                      </th>
                      <th>
                        <i
                          className="far fa-times-circle "
                          onClick={() => removeItem(prod.id)}
                        ></i>
                      </th>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={3}
                      style={{ fontSize: "16px", paddingBottom: "1rem" }}
                    >
                      Cart empty
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
            {cart.length ? (
              <div className="cart-desc">
                <table>
                  <tbody>
                    <tr>
                      <th>SubTotal</th>
                      <td>S/{totalPay.toFixed(2)}</td>
                    </tr>
                    <tr>
                      <th>Shipping</th>
                      <td>{totalPay < 200 ? "S/20" : "Free"}</td>
                    </tr>
                    <tr>
                      <th>Total</th>
                      <td>
                        S/
                        {totalPay < 200
                          ? (totalPay + shipment).toFixed(2)
                          : totalPay.toFixed(2)}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ) : (
              ""
            )}
            <NavLink to={"/cart"}>GO TO SHOPPING CART</NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Test;
