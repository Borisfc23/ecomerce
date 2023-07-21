import "../../assets/styles/Home/Products1.css";
import { useEffect, useState } from "react";
import productos from "../../assets/api/api.json";
import { NavLink } from "react-router-dom";
const Products2 = () => {
  const starts = new Array(5).fill("");
  const [nba, setnba] = useState([]);
  useEffect(() => {
    const nba = productos.filter((item) => item.brand == "NBA");
    setnba(nba);
  }, []);

  return (
    <div id="product1" className="section-p1">
      <h2>NEW ARRIVALS</h2>
      <p>Summer Collection New NBA Design</p>
      <div className="pro-container">
        {nba.map((gorro, index) => (
          <div className="pro" key={index}>
            <div className="pro-new">NEW</div>
            <img src={gorro.image} alt="" />
            <div className="des">
              <span>{gorro.brand}</span>
              <h5>{gorro.name}</h5>
              <div className="star">
                {starts.map((star, index) => (
                  <i className="fas fa-star" key={index}></i>
                ))}
              </div>
              <h4>S/{gorro.price}</h4>
            </div>
            <NavLink to={`/shop/${gorro.id}`} className="cart">
              VIEW MORE
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products2;
