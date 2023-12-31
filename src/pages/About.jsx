import React, { useEffect } from "react";
import FullWithLayout from "../layout/FullWithLayout";
import Banner from "../components/utils/Banner";
import AboutHead from "../components/About/AboutHead";
import Features from "../components/Home/Features";

const About = () => {
  const texto = "#KnowUs";
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <FullWithLayout>
      <Banner
        img={"about/b1.png"}
        texto={texto}
        desc={"Discover a new shopping experience in our store"}
      />
      <AboutHead />
      <Features />
    </FullWithLayout>
  );
};

export default About;
