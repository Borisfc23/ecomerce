import Products1 from "../components/Home/Products1";
import Details from "../components/Shop/Details";
import FullWithLayout from "../layout/FullWithLayout";
const ProductDetail = () => {
  return (
    <FullWithLayout>
      <Details />
      <Products1 count={4} />
    </FullWithLayout>
  );
};

export default ProductDetail;
