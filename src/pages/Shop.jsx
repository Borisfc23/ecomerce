import { useEffect } from "react";
import Banner from "../components/Shop/Banner";
import Products from "../components/Shop/Products";
import FullWithLayout from "../layout/FullWithLayout";

const Shop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <FullWithLayout>
      <Banner />
      <Products />
    </FullWithLayout>
  );
};

export default Shop;
