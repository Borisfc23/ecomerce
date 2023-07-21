import "../../assets/styles/Home/Features.css";
import shipping from "../../assets/img/home/shipping.svg";
import order from "../../assets/img/home/order.svg";
import promotions from "../../assets/img/home/promotions.svg";
import sell from "../../assets/img/home/sell.svg";
import support from "../../assets/img/home/support.svg";
import money from "../../assets/img/home/money.svg";
const Features = () => {
  return (
    <div id="features" className="section-p1">
      <div className="fe-box">
        <img src={shipping} alt="" />
        <h6>Shipping</h6>
      </div>
      <div className="fe-box">
        <img src={order} alt="" />
        <h6>Order</h6>
      </div>
      <div className="fe-box">
        <img src={money} alt="" />
        <h6>Save Money</h6>
      </div>
      <div className="fe-box">
        <img src={promotions} alt="" />
        <h6>Promotions</h6>
      </div>
      <div className="fe-box">
        <img src={sell} alt="" />
        <h6>God sell</h6>
      </div>
      <div className="fe-box">
        <img src={support} alt="" />
        <h6>Support 24/7</h6>
      </div>
    </div>
  );
};

export default Features;
