import { Link } from "react-router-dom";

export default function CategoryCard({ category }) {
  return (
    <Link
      to="/shop"
      className="group flex flex-col items-center gap-3 p-4 rounded-2xl hover:bg-accent transition-all duration-300"
    >
      <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-transparent group-hover:border-primary transition-all duration-300 shadow-sm group-hover:shadow-md">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="text-center">
        <h3 className="text-sm font-semibold text-text group-hover:text-primary transition-colors">
          {category.name}
        </h3>
        <p className="text-xs text-text-light mt-0.5">{category.subtitle}</p>
      </div>
    </Link>
  );
}
