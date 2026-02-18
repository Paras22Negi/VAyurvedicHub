import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import ShopByCategory from "../components/sections/ShopByCategory";
import BestSellers from "../components/sections/BestSellers";
import Newsletter from "../components/sections/Newsletter";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ShopByCategory />
        <BestSellers />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
