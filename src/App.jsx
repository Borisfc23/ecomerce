import "./App.css";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Error404 from "./pages/Error404";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
function App() {
  return (
    <>
      <BrowserRouter>
        <Toaster position="top-right" reverseOrder={false} />
        <Routes>
          <Route path="*" element={<Error404 />} />
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route exact path="/shop/:id" element={<ProductDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
