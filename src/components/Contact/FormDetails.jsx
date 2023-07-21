import "../../assets/styles/Contact/FormDetails.css";
import p1 from "../../assets/img/contact/p1.png";
import p2 from "../../assets/img/contact/p2.png";
import p3 from "../../assets/img/contact/p3.png";
const FormDetails = () => {
  return (
    <div id="form-details" className="section-p1">
      <form action="">
        <span>LEAVE A MESSAGE</span>
        <h2>We love to hear from you</h2>
        <input type="text" placeholder="Your name" />
        <input type="text" placeholder="Your emal" />
        <input type="text" placeholder="Subject" />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Your message"
        ></textarea>
        <button>SUBMIT</button>
      </form>
      <div className="people">
        <div>
          <img src={p1} alt="" />
          <p>
            <span>Pedro Suarez</span> Senior Marketing Maneger <br />
            Phone:+ 000 123 589 77 66 <br />
            Email: contact@example.com
          </p>
        </div>
        <div>
          <img src={p2} alt="" />
          <p>
            <span>Jose Madrird</span> Mid Marketing Maneger <br />
            Phone:+ 000 123 589 77 66 <br />
            Email: contact@example.com
          </p>
        </div>
        <div>
          <img src={p3} alt="" />
          <p>
            <span>Sara Perez</span> Junior Marketing Maneger <br />
            Phone:+ 000 123 589 77 66 <br />
            Email: contact@example.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default FormDetails;
