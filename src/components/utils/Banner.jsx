import "../../assets/styles/Banner.css";
import TypewriterEffect from "./TypewriterEffect";
const Banner = ({ texto, desc, img }) => {
  return (
    <div
      id="page-header-banner"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.49)),url("../../src/assets/img/${img}")`,
      }}
    >
      <TypewriterEffect text={texto} />
      <p>{desc}</p>
    </div>
  );
};

export default Banner;
