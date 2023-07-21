import "../../assets/styles/Shop/Detail.css";
import { useParams } from "react-router-dom";
import productos from "../../assets/api/api.json";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useEffect, useState } from "react";
const Details = () => {
  const { id } = useParams();
  const [product, setproduct] = useState({});
  const [count, setcount] = useState(1);
  useEffect(() => {
    const prod = productos.find((p) => p.id == id);
    setproduct(prod);
    window.scrollTo(0, 0);
  }, [id]);
  const handleMinus = () => {
    if (count > 1) {
      setcount(count - 1);
    }
  };
  const handlePlus = () => {
    setcount((prev) => prev + 1);
  };
  return (
    <div id="prodetails" className="section-p1">
      <div className="single-pro-image">
        <Carousel showArrows={false}>
          <div className="slider-content">
            <img src={product.image} />
          </div>
          <div className="slider-content">
            <img src={product.image} className="img-espejo" />
          </div>
          <div className="slider-content">
            <img src={product.image} />
          </div>
          <div className="slider-content">
            <img src={product.image} className="img-espejo" />
          </div>
        </Carousel>
      </div>
      <div className="single-pro-details">
        <h6>{product.brand}</h6>
        <h4>{product.name}</h4>
        <h2>S/{product.price}</h2>
        <select name="" id="">
          <option value="">Select Size</option>
          <option value="">S/M</option>
          <option value="">M/L</option>
          <option value="">L/XL</option>
        </select>
        <div className="count">
          <div className="count-input">
            <button onClick={handleMinus}>
              <i className="fa-solid fa-minus"></i>
            </button>
            <p>{count}</p>
            <button onClick={handlePlus}>
              <i className="fa-solid fa-plus"></i>
            </button>
          </div>
          <div className="content-cart">
            <button className="add-cart">Add to Cart</button>
          </div>
        </div>
        <h4>Description</h4>
        <p>{product.desc}</p>
        <h4>Product Details</h4>
        <span>DATA SHEET</span>
        <table className="table-tec">
          <tbody>
            <tr>
              <th>Color</th>
              <td> {product.color}</td>
            </tr>
            <tr>
              <th>Silhouette</th>
              <td> {product.silueta}</td>
            </tr>
            <tr>
              <th>Equipment</th>
              <td> {product.equipo}</td>
            </tr>
            <tr>
              <th>MID</th>
              <td> {product.mid}</td>
            </tr>
          </tbody>
        </table>
        <div className="content-buy">
          <div className="row">
            <i className="fa-sharp fa-solid fa-truck-fast"></i>
            <label>
              <strong>FREE SHIPPING</strong>
              STARTING AT S/200
            </label>
          </div>
          <div className="row">
            <i className="fa-solid fa-credit-card"></i>
            <label>
              <strong>UP TO 3 INSTALLMENTS</strong>
              WITHOUT INTEREST
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
