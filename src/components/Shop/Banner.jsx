import "../../assets/styles/Shop/Banner.css";
import TypewriterEffect from "../utils/TypewriterEffect";
const Banner = () => {
  const texto = "#LowPrices";
  return (
    <div id="page-header">
      <TypewriterEffect text={texto} />
      <p>
        Save more with coupons & up to <label>60% off!</label>
      </p>
    </div>
  );
};

export default Banner;
