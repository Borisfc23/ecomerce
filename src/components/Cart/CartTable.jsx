import "../../assets/styles/Cart/CartTable.css";
import gorro from "../../assets/img/Products/gorro1.jpg";
import { NavLink } from "react-router-dom";
import { useState } from "react";
const CartTable = () => {
  const [valQuantity, setvalQuantity] = useState(1);
  return (
    <div id="cart" className="section-p1">
      <div className="cart-table">
        <h2>Shopping Cart</h2>
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img src={gorro} alt="" />
              </td>
              <td>Lorem ipsum dolor sit amet, consectetur adipisicing</td>
              <td>S/159.95</td>
              <td>
                <input
                  type="number"
                  min={1}
                  value={valQuantity}
                  onChange={(e) => setvalQuantity(e.target.value)}
                />
              </td>
              <td>S/159.95</td>
              <td>
                <i className="far fa-times-circle"></i>
              </td>
            </tr>
            <tr>
              <td>
                <img src={gorro} alt="" />
              </td>
              <td>Lorem ipsum dolor sit amet, consectetur adipisicing</td>
              <td>S/159.95</td>
              <td>
                <input type="number" min={1} value="1" />
              </td>
              <td>S/159.95</td>
              <td>
                <i className="far fa-times-circle"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="cart-end">
        <div className="coupon">
          <input type="text" placeholder="Enter Coupon" />
          <button>Add</button>
        </div>
        <div className="summary">
          <h4>Purchase Summary</h4>
          <table>
            <tbody>
              <tr>
                <th>N° Items</th>
                <td>5</td>
              </tr>
              <tr>
                <th>Subtotal</th>
                <td>S/200</td>
              </tr>
              <tr>
                <th>Total</th>
                <td>S/200</td>
              </tr>
            </tbody>
          </table>
          <div>
            <button>GO PAY</button>
            <NavLink to={"/shop"}>
              <i className="fa-solid fa-angle-left"></i> Continue Buying
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartTable;
