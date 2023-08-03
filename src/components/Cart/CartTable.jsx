import "../../assets/styles/Cart/CartTable.css";
import { NavLink } from "react-router-dom";
import { useStateValue } from "../../context/cartContext";
const CartTable = () => {
  const [{ cart }, dispatch] = useStateValue();
  let totalPay = 0;
  let shipment = 20;
  cart.map((item) => {
    totalPay = item.price * item.quantity + totalPay;
  });
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
            {cart.length ? (
              cart.map((prod, index) => (
                <tr key={index}>
                  <td>
                    <img src={prod.image} alt="" />
                  </td>
                  <td>{prod.name}</td>
                  <td>S/{prod.price}</td>
                  <td>
                    <div className="contador">
                      <button onClick={() => removeOneItem(prod.id)}>
                        <i className="fa-solid fa-minus"></i>
                      </button>
                      <p>{prod.quantity}</p>
                      <button onClick={() => addMoreProduct(prod)}>
                        <i className="fa-solid fa-plus"></i>
                      </button>
                    </div>
                  </td>
                  <td>S/{(prod.quantity * prod.price).toFixed(2)}</td>
                  <td>
                    <i
                      className="far fa-times-circle delete"
                      onClick={() => removeItem(prod.id)}
                    ></i>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} style={{ padding: "1rem 0" }}>
                  Your cart is empty
                </td>
              </tr>
            )}
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
                <td>{cart.length}</td>
              </tr>
              <tr>
                <th>Subtotal</th>
                <td>S/{totalPay.toFixed(2)}</td>
              </tr>
              <tr>
                <th>Shipping</th>
                <td>
                  {totalPay < 200
                    ? cart.length > 0
                      ? "S/20"
                      : "S/0.00"
                    : "Free"}
                </td>
              </tr>
              <tr>
                <th>Total</th>
                <td>
                  {" "}
                  {totalPay < 200
                    ? cart.length > 0
                      ? "S/" + (totalPay + shipment).toFixed(2)
                      : "S/0.00"
                    : "S/" + totalPay.toFixed(2)}
                </td>
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
