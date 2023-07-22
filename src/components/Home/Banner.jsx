import { NavLink } from "react-router-dom";
import "../../assets/styles/Home/Banner.css";

const Banner = () => {
  return (
    <div id="banner" className="section-m1">
      <h4>Customize Hats</h4>
      <h2>
        Up to <span>60% Off</span> - All Hats
      </h2>
      <NavLink to={"/shop"}>
        <button className="normal">Explore More</button>
      </NavLink>
    </div>
  );
};

export default Banner;
