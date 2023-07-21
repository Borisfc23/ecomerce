import "../../assets/styles/About/AboutHead.css";

const AboutHead = () => {
  return (
    <div id="about-head" className="section-p1">
      <img src="../../src/assets/img/about/h1.jpg" alt="" />
      <div>
        <h2>Who we are?</h2>
        <p>
          We are a company founded in 1886 with more than one hundred years of
          experience in headgear, military and civil effects that has been
          adapting to the changes of time. Since 1996 we have incorporated a
          series of firms in the gift sector into our catalog, thus expanding
          our wide selection of products. In the hat shop we have all kinds of
          hats, both classic or vintage style, as well as in the most modern and
          alternative models. Brands like Stetson, Borsalino, City Sport, Kangol
          or Signes are part of the selection we offer. Thanks to our workshop
          we can carry out all kinds of orders from a few units to orders of
          large quantities. In military effects we have a large selection of
          articles from those made by hand and enameled with fire with the best
          qualities for the most demanding customers to those made of zamak,
          fully mechanized. Regarding military headgear, all our hats are still
          made by hand following the traditional method. We are number one in
          the manufacture of military headgear in Spain.
        </p>
        <div className="follow">
          <div className="icon">
            <i className="fab fa-instagram"></i>
            <i className="fab fa-pinterest-p"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-facebook-f"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHead;
