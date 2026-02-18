import { Star } from "lucide-react";

export default function StarRating({ rating = 5, reviewCount = 0 }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={14}
            className={
              i < rating ? "fill-star text-star" : "fill-gray-200 text-gray-200"
            }
          />
        ))}
      </div>
      {reviewCount > 0 && (
        <span className="text-xs text-text-light">({reviewCount})</span>
      )}
    </div>
  );
}
