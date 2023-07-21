import "../assets/styles/Error404.css";
import FullWithLayout from "../layout/FullWithLayout";
const Error404 = () => {
  return (
    <FullWithLayout>
      <div id="error-404" className="section-m1">
        <div className="error-absoluto">
          <div>
            <h2>404</h2>
          </div>
          <div>
            <h3>PAGE NOT FOUND</h3>
          </div>
        </div>
      </div>
    </FullWithLayout>
  );
};

export default Error404;
