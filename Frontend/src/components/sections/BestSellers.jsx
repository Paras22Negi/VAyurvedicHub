import { PRODUCTS } from "../../data/constants";
import ProductCard from "../ui/ProductCard";

export default function BestSellers() {
  return (
    <section className="py-16 lg:py-20 bg-gray-50/50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text">
            Best Sellers
          </h2>
          <p className="mt-3 text-text-light text-base max-w-md mx-auto">
            Our community&apos;s favorite natural remedies, curated just for
            you.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
