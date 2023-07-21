import "../../assets/styles/Contact/OurStores.css";
import t1 from "../../assets/img/contact/t1.jpg";
import t2 from "../../assets/img/contact/t2.jpg";
import t3 from "../../assets/img/contact/t3.jpg";
const OurStores = () => {
  return (
    <div id="contact-store" className="section-p1">
      <div className="title">
        <h2>KNOW OUR STORES</h2>
      </div>
      <div className="imgs">
        <div>
          <img src={t1} alt="" />
          <p>
            <span>Open Plaza Angamos</span> <br />
            Primer nivel, local C117 <br />
            Angamos, Lima
          </p>
          <a
            href="https://www.google.com/maps/place/MallPlaza+Comas/@-11.937275,-77.0674252,17z/data=!3m1!4b1!4m5!3m4!1s0x9105d19a13fa473d:0xf854f91375b6055c!8m2!3d-11.937275!4d-77.0652365?shorturl=1"
            target="_blank"
          >
            How to get?
          </a>
        </div>
        <div>
          <img src={t2} alt="" />
          <p>
            <span>Plaza San Miguel</span>
            <br />
            Segundo nivel, local 115-c <br />
            San Miguel, Lima
          </p>
          <a
            href="https://www.google.com/maps/place/MallPlaza+Comas/@-11.937275,-77.0674252,17z/data=!3m1!4b1!4m5!3m4!1s0x9105d19a13fa473d:0xf854f91375b6055c!8m2!3d-11.937275!4d-77.0652365?shorturl=1"
            target="_blank"
          >
            How to get?
          </a>
        </div>
        <div>
          <img src={t3} alt="" />
          <p>
            <span>Mega Plaza</span>
            <br />
            Local LC-216 <br />
            Comas, Lima
          </p>
          <a
            href="https://www.google.com/maps/place/MallPlaza+Comas/@-11.937275,-77.0674252,17z/data=!3m1!4b1!4m5!3m4!1s0x9105d19a13fa473d:0xf854f91375b6055c!8m2!3d-11.937275!4d-77.0652365?shorturl=1"
            target="_blank"
          >
            How to get?
          </a>
        </div>
      </div>
    </div>
  );
};

export default OurStores;
