import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, Star, ShoppingCart } from "lucide-react";

export default function ShopProductCard({ product }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-all duration-300">
      {/* Image */}
      <Link
        to={`/product/${product.slug}`}
        className="block relative aspect-square overflow-hidden bg-gray-50"
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Badge */}
        {product.badge && (
          <span
            className={`absolute top-3 left-3 px-2.5 py-1 rounded-md text-xs font-semibold ${
              product.badge === "Best Seller"
                ? "bg-primary text-white"
                : product.badge === "Low Stock"
                  ? "bg-amber-500 text-white"
                  : product.badge === "New"
                    ? "bg-primary-light text-white"
                    : "bg-gray-700 text-white"
            }`}
          >
            {product.badge}
          </span>
        )}

        {/* Wishlist */}
        <button
          onClick={(e) => {
            e.preventDefault();
            setLiked(!liked);
          }}
          className={`absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer ${
            liked
              ? "bg-red-50 text-sale"
              : "bg-white/80 backdrop-blur-sm text-text-light hover:text-sale hover:bg-red-50"
          } shadow-sm`}
          aria-label="Add to wishlist"
        >
          <Heart size={16} className={liked ? "fill-current" : ""} />
        </button>

        {/* Green top accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </Link>

      {/* Details */}
      <div className="p-4">
        {/* Rating */}
        <div className="flex items-center gap-1.5 mb-1.5">
          <Star size={13} className="fill-star text-star" />
          <span className="text-xs font-medium text-text">
            {product.rating}
          </span>
          <span className="text-xs text-text-light">
            ({product.reviewCount})
          </span>
        </div>

        <Link to={`/product/${product.slug}`}>
          <h3 className="text-base font-semibold text-text group-hover:text-primary transition-colors line-clamp-1">
            {product.name}
          </h3>
        </Link>

        <p className="mt-1 text-sm text-text-light line-clamp-2 leading-relaxed">
          {product.description}
        </p>

        {/* Price + Add button */}
        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-text">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-text-light line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          <button className="flex items-center gap-1.5 bg-primary hover:bg-primary-dark text-white text-xs font-semibold px-3 py-2 rounded-lg transition-colors cursor-pointer">
            Add <ShoppingCart size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
