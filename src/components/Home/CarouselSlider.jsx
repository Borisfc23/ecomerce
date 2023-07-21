import "../../assets/styles/Home/CarouselSlider.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import banner1 from "../../assets/img/home/banner1.jpg";
import banner2 from "../../assets/img/home/banner2.jpg";
import banner3 from "../../assets/img/home/banner3.jpg";
const CarouselSlider = () => {
  return (
    <section id="content-carousel">
      <Carousel
        showThumbs={false}
        transitionTime={800}
        showStatus={false}
        infiniteLoop={true}
      >
        <div className="slider-content">
          <img src={banner1} />
          <div className="slider-btn">
            <button className="boton-shop ">
              Shop Now <i className="fa-solid fa-fire"></i>
            </button>
          </div>
        </div>
        <div className="slider-content">
          <img src={banner2} />
          <div className="slider-btn">
            <button className="boton-shop ">
              Shop Now <i className="fa-solid fa-fire"></i>
            </button>
          </div>
        </div>
        <div className="slider-content">
          <img src={banner3} />
          <div className="slider-btn">
            <button className="boton-shop ">
              Shop Now <i className="fa-solid fa-fire"></i>
            </button>
          </div>
        </div>
      </Carousel>
    </section>
  );
};

export default CarouselSlider;
