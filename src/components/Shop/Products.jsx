import "../../assets/styles/Home/Products1.css";
import { useEffect, useState } from "react";
import productos from "../../assets/api/api.json";

import { NavLink } from "react-router-dom";
import Pagination from "../utils/Pagination";
const Products = () => {
  const starts = new Array(5).fill("");
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // Cantidad de elementos por página
  const totalPages = Math.ceil(data.length / itemsPerPage); //lo redondea x ejm si sale 3.2 lo pone como 4

  useEffect(() => {
    const products = productos.filter((p) => p.brand !== undefined);
    setData(products);
  }, []);
  // Manejo del cambio de página
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const startIndex = (currentPage - 1) * itemsPerPage; // Calcula los índices de los elementos para la página actual
  const endIndex = startIndex + itemsPerPage;
  const currentPageData = data.slice(startIndex, endIndex); // Obtiene los elementos de la página actual
  return (
    <div id="product1" className="section-p1">
      <div className="pro-container">
        {currentPageData.map((gorro, index) => (
          <div className="pro" key={index}>
            <div className="pro-new">NEW</div>
            <img src={gorro.image} alt="" />
            <div className="des">
              <span>{gorro.brand} </span>
              <h5>{gorro.name}</h5>
              <div className="star">
                {starts.map((_, index) => (
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
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Products;
