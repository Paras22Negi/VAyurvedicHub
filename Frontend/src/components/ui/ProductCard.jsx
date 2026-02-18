import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import StarRating from "../ui/StarRating";
import Badge from "../ui/Badge";

export default function ProductCard({ product }) {
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

        {/* Sale Badge */}
        {product.isSale && (
          <Badge variant="red" className="absolute top-3 left-3">
            SALE
          </Badge>
        )}

        {/* Green border on top */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </Link>

      {/* Wishlist */}
      <button
        onClick={() => setLiked(!liked)}
        className={`absolute top-3 right-3 z-10 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer ${
          liked
            ? "bg-red-50 text-sale"
            : "bg-white/80 backdrop-blur-sm text-text-light hover:text-sale hover:bg-red-50"
        } shadow-sm`}
        aria-label="Add to wishlist"
      >
        <Heart size={16} className={liked ? "fill-current" : ""} />
      </button>

      {/* Details */}
      <Link to={`/product/${product.slug}`} className="block p-4">
        <StarRating rating={product.rating} reviewCount={product.reviewCount} />

        <h3 className="mt-2 text-base font-semibold text-text group-hover:text-primary transition-colors line-clamp-1">
          {product.name}
        </h3>

        <p className="mt-1 text-sm text-text-light line-clamp-2 leading-relaxed">
          {product.description}
        </p>

        <div className="mt-3 flex items-center gap-2">
          <span className="text-lg font-bold text-primary">
            ${product.price.toFixed(2)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-text-light line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>
      </Link>
    </div>
  );
}
