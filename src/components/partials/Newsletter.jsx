import { useState } from "react";
import "../../assets/styles/Home/Newsletter.css";
import toast from "react-hot-toast";
const Newsletter = () => {
  const [correo, setcorreo] = useState("");
  const [isValid, setIsValid] = useState(false);
  const handleChage = (e) => {
    const valor = e.target.value;
    setcorreo(valor);
    const regex = /^[a-zA-Z0-9._%+-]+@(gmail|hotmail)\.com$/i;
    setIsValid(regex.test(valor));
  };
  const handleSendSubs = () => {
    if (isValid) {
      toast.success("Subscribed email! 💕");
      setcorreo(correo);
    } else {
      toast.error("Wrong email...😥");
    }
  };
  return (
    <div id="newsletter" className="section-p1 section-m1">
      <div className="newstext">
        <h4>Subscribe For Newsletters</h4>
        <p>
          Get E-mail updates about our latest shop and{" "}
          <span>special offers.</span>
        </p>
      </div>
      <div className="form">
        <input
          type="email"
          placeholder="Your email address"
          value={correo}
          onChange={handleChage}
        />
        <button className="normal" onClick={handleSendSubs}>
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
