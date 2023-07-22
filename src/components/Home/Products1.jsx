import "../../assets/styles/Home/Products1.css";
import productos from "../../assets/api/api.json";
import type1 from "../../assets/img/Products/type1.jpg";
import type2 from "../../assets/img/Products/type2.jpg";
import type3 from "../../assets/img/Products/type3.jpg";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
const Products1 = ({ section3, count }) => {
  const starts = new Array(5).fill("");
  const [newyork, setnewyork] = useState([]);
  useEffect(() => {
    const newyork = productos.filter((item) => item.brand == "New York");
    if (count > 0) {
      setnewyork(newyork.slice(0, 4));
    } else {
      setnewyork(newyork);
    }
  }, []);

  const imgTypes = [type1, type2, type3];
  return (
    <div id="product1" className="section-p1">
      <h2>RECOMMENDED FOR YOU</h2>
      <p>Summer Collection New Urban Design</p>
      <div className="pro-container">
        {newyork.map((gorro, index) => (
          <div className="pro" key={index}>
            <div className="pro-new">NEW</div>
            <NavLink to={`/shop/${gorro.id}`}>
              <img src={gorro.image} alt="" />
            </NavLink>
            <div className="des">
              <span>{gorro.brand}</span>
              <h5>{gorro.name}</h5>
              <div className="star">
                {starts.map((_, index) => (
                  <i className="fas fa-star" key={index}></i>
                ))}
              </div>
              <h4>S/{gorro.price}</h4>
            </div>
            <Link to={`/shop/${gorro.id}`} className="cart">
              VIEW MORE
            </Link>
          </div>
        ))}
      </div>
      {section3 && (
        <div className="type-products">
          {imgTypes.map((tipo, index) => (
            <div className="type" key={index}>
              <img src={tipo} alt="" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products1;
