import FullWithLayout from "../layout/FullWithLayout";
import CarouselSlider from "../components/Home/CarouselSlider";
import Features from "../components/Home/Features";
import Products1 from "../components/Home/Products1";
import Banner from "../components/Home/Banner";
import Products2 from "../components/Home/Products2";
import SMBanner from "../components/Home/SMBanner";
import SMBanner3 from "../components/Home/SMBanner3";

const Home = () => {
  return (
    <FullWithLayout>
      <CarouselSlider />
      <Features />
      <Products1 section3={true} />
      <Banner />
      <Products2 />
      <SMBanner />
      <SMBanner3 />
    </FullWithLayout>
  );
};

export default Home;
