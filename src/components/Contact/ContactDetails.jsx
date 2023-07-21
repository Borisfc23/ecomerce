import "../../assets/styles/Contact/ContactDetails.css";

const ContactDetails = () => {
  return (
    <div id="contact-details" className="section-p1">
      <div className="details">
        <span>GET IN TOUCH</span>
        <h2>Visit our location central or contact us today</h2>
        <h3>Head Office</h3>
        <div>
          <li>
            <i className="fa fa-map"></i>
            <p>Av. los Angeles No 602-urb.Alameda del Retablo Local A-2010</p>
          </li>
          <li>
            <i className="fa fa-envelope"></i>
            <p>ecommerce@coliseum-store.com</p>
          </li>
          <li>
            <i className="fa fa-phone-alt"></i>
            <p>6028558 - 978238729</p>
          </li>
          <li>
            <i className="fa fa-clock"></i>
            <p>Monday to Sunday 10:00 - 22:00</p>
          </li>
        </div>
      </div>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.5370128617874!2d-77.0652365!3d-11.937274999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105d19a13fa473d%3A0xf854f91375b6055c!2sMallplaza%20Comas!5e0!3m2!1ses-419!2spe!4v1689261526052!5m2!1ses-419!2spe"
          width="800"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactDetails;
