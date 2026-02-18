import { CATEGORIES } from "../../data/constants";
import SectionHeader from "../ui/SectionHeader";
import CategoryCard from "../ui/CategoryCard";

export default function ShopByCategory() {
  return (
    <section className="py-16 lg:py-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-6">
        <SectionHeader
          title="Shop by Category"
          subtitle="Find the right balance for your body type."
          action={{ label: "View All", href: "/shop" }}
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6">
          {CATEGORIES.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
