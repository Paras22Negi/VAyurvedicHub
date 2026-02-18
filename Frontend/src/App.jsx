import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import ComingSoon from "./pages/ComingSoon";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:slug" element={<ProductDetails />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/about" element={<ComingSoon />} />
        <Route path="/contact" element={<ComingSoon />} />
        <Route path="/wishlist" element={<ComingSoon />} />
        <Route path="/cart" element={<ComingSoon />} />
        <Route path="/publications" element={<ComingSoon />} />
        <Route path="/privacy" element={<ComingSoon />} />
        <Route path="/terms" element={<ComingSoon />} />
        <Route path="/refund" element={<ComingSoon />} />
        <Route path="/shipping" element={<ComingSoon />} />
        <Route path="/faq" element={<ComingSoon />} />
        <Route path="*" element={<ComingSoon />} />
      </Routes>
    </>
  );
}

export default App;
