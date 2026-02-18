import { useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ChevronRight,
  Star,
  Minus,
  Plus,
  ShoppingCart,
  Leaf,
  Heart as HeartIcon,
  Shield,
  Zap,
  Wind,
} from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { ALL_PRODUCTS } from "../data/constants";

const TABS = ["Description", "Ingredients", "How to Use", "Shipping & Returns"];

export default function ProductDetails() {
  const { slug } = useParams();
  const product = ALL_PRODUCTS.find((p) => p.slug === slug);

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(0);
  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState(0);

  const related = useMemo(() => {
    if (!product) return [];
    return ALL_PRODUCTS.filter(
      (p) => p.id !== product.id && p.category === product.category,
    ).slice(0, 4);
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-2">Product Not Found</h1>
            <Link to="/shop" className="text-primary hover:underline">
              Back to Shop
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const ratingBreakdown = [5, 4, 3, 2, 1].map((star) => {
    const count = product.reviews.filter((r) => r.rating === star).length;
    const percent = product.reviews.length
      ? Math.round((count / product.reviews.length) * 100)
      : 0;
    return { star, count, percent };
  });

  const avgRating = product.rating;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-6 py-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-sm text-text-light mb-8 flex-wrap">
            <Link to="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <ChevronRight size={14} />
            <Link to="/shop" className="hover:text-primary transition-colors">
              Shop
            </Link>
            <ChevronRight size={14} />
            <span className="text-text-light">{product.category}</span>
            <ChevronRight size={14} />
            <span className="text-text font-medium">{product.name}</span>
          </nav>

          {/* Product Top */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 mb-16">
            {/* Image Gallery */}
            <div>
              <div className="relative rounded-2xl overflow-hidden bg-gray-50 mb-4 aspect-square">
                {product.badge && (
                  <span
                    className={`absolute top-4 left-4 z-10 px-3 py-1.5 rounded-md text-xs font-semibold ${
                      product.badge === "Best Seller"
                        ? "bg-primary text-white"
                        : product.badge === "Low Stock"
                          ? "bg-amber-500 text-white"
                          : "bg-primary-light text-white"
                    }`}
                  >
                    {product.badge}
                  </span>
                )}
                {product.isSale && product.discount && (
                  <span className="absolute top-4 left-4 mt-9 z-10 px-2 py-1 rounded-md text-xs font-semibold bg-accent-dark text-primary-dark">
                    ORGANIC
                  </span>
                )}
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Thumbnails */}
              {product.images.length > 1 && (
                <div className="flex gap-3">
                  {product.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedImage(i)}
                      className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                        selectedImage === i
                          ? "border-primary shadow-md"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <img
                        src={img}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-text leading-tight">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mt-3">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={
                        i < Math.round(avgRating)
                          ? "fill-star text-star"
                          : "fill-gray-200 text-gray-200"
                      }
                    />
                  ))}
                </div>
                <span className="text-sm text-text-light">
                  {avgRating} ({product.reviewCount} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-3 mt-4">
                <span className="text-3xl font-bold text-text">
                  ${product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <>
                    <span className="text-lg text-text-light line-through">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                    <span className="px-2 py-0.5 bg-accent-dark text-primary-dark text-xs font-semibold rounded-md">
                      -{product.discount}%
                    </span>
                  </>
                )}
              </div>

              {/* Description */}
              <p className="mt-4 text-text-light text-sm leading-relaxed">
                {product.longDesc.split("\n")[0]}
              </p>

              {/* Size */}
              {product.sizes.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-sm font-semibold text-text mb-3">Size</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size, i) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(i)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all cursor-pointer ${
                          selectedSize === i
                            ? "bg-primary text-white border-primary"
                            : "bg-white text-text border-border hover:border-primary"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity + Add to Cart */}
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <div className="flex items-center border border-border rounded-lg">
                  <button
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    className="w-10 h-11 flex items-center justify-center text-text-light hover:text-text transition-colors cursor-pointer"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="w-12 text-center text-sm font-semibold">
                    {qty}
                  </span>
                  <button
                    onClick={() => setQty((q) => q + 1)}
                    className="w-10 h-11 flex items-center justify-center text-text-light hover:text-text transition-colors cursor-pointer"
                  >
                    <Plus size={16} />
                  </button>
                </div>
                <button className="flex-1 flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-full transition-colors cursor-pointer shadow-md hover:shadow-lg">
                  <ShoppingCart size={18} />
                  Add to Cart
                </button>
              </div>

              {/* Trust Badges */}
              <div className="mt-8 flex flex-wrap gap-6">
                {[
                  { icon: Leaf, label: "100% Organic" },
                  { icon: HeartIcon, label: "Cruelty Free" },
                  { icon: Shield, label: "GMP Certified" },
                ].map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex flex-col items-center gap-1.5"
                  >
                    <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                      <Icon size={18} className="text-primary" />
                    </div>
                    <span className="text-xs text-text-light">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="border-b border-border mb-8">
            <div className="flex gap-0 overflow-x-auto">
              {TABS.map((tab, i) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(i)}
                  className={`px-5 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-all cursor-pointer ${
                    activeTab === i
                      ? "border-primary text-primary"
                      : "border-transparent text-text-light hover:text-text"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="mb-16">
            {activeTab === 0 && (
              <div className="grid lg:grid-cols-3 gap-10">
                <div className="lg:col-span-2">
                  <h3 className="text-xl font-bold text-text mb-4">
                    Ancient Wisdom for Modern Vitality
                  </h3>
                  {product.longDesc.split("\n").map((para, i) => (
                    <p
                      key={i}
                      className="text-text-light text-sm leading-relaxed mb-4"
                    >
                      {para}
                    </p>
                  ))}

                  {/* Benefits */}
                  <div className="grid sm:grid-cols-2 gap-4 mt-6">
                    {product.benefits.map((b, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 p-4 bg-accent rounded-xl"
                      >
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                          {i === 0 ? (
                            <Zap size={16} className="text-primary" />
                          ) : (
                            <Wind size={16} className="text-primary" />
                          )}
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-text">
                            {b.title}
                          </h4>
                          <p className="text-xs text-text-light mt-0.5">
                            {b.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Ingredients sidebar */}
                <div className="bg-accent rounded-2xl p-6">
                  <h4 className="text-sm font-bold text-text mb-4">
                    ✦ Key Ingredients
                  </h4>
                  <div className="space-y-4">
                    {product.ingredients.map((ing) => (
                      <div key={ing.name}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-text-light">{ing.name}</span>
                          <span className="font-semibold text-text">
                            {ing.percent}%
                          </span>
                        </div>
                        <div className="w-full h-2 bg-white rounded-full overflow-hidden">
                          <div
                            className="h-full bg-primary rounded-full transition-all duration-500"
                            style={{ width: `${ing.percent}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 1 && (
              <div className="max-w-2xl">
                <h3 className="text-xl font-bold text-text mb-4">
                  Ingredients
                </h3>
                <ul className="space-y-3">
                  {product.ingredients.map((ing) => (
                    <li key={ing.name} className="flex items-center gap-3">
                      <Leaf size={16} className="text-primary shrink-0" />
                      <span className="text-sm text-text-light">
                        {ing.name} — {ing.percent}%
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === 2 && (
              <div className="max-w-2xl">
                <h3 className="text-xl font-bold text-text mb-4">How to Use</h3>
                <ol className="space-y-3 list-decimal list-inside text-sm text-text-light leading-relaxed">
                  <li>Take 1/2 teaspoon (approximately 2g) of the powder.</li>
                  <li>Mix with warm milk, water, or add to your smoothie.</li>
                  <li>Consume once or twice daily, preferably after meals.</li>
                  <li>For best results, use consistently for 4-6 weeks.</li>
                </ol>
              </div>
            )}

            {activeTab === 3 && (
              <div className="max-w-2xl">
                <h3 className="text-xl font-bold text-text mb-4">
                  Shipping & Returns
                </h3>
                <div className="space-y-4 text-sm text-text-light leading-relaxed">
                  <p>
                    <strong className="text-text">Free Shipping:</strong> On all
                    orders over $50 within India. International shipping
                    available.
                  </p>
                  <p>
                    <strong className="text-text">Processing Time:</strong>{" "}
                    Orders are processed within 1-2 business days.
                  </p>
                  <p>
                    <strong className="text-text">Returns:</strong> We accept
                    returns within 30 days of delivery. Product must be unopened
                    and in original packaging.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Customer Reviews */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-text mb-8">
              Customer Reviews
            </h2>
            <div className="grid lg:grid-cols-3 gap-10">
              {/* Rating Summary */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <div className="text-center mb-4">
                  <span className="text-5xl font-bold text-text">
                    {avgRating}
                  </span>
                  <span className="text-lg text-text-light ml-1">/ 5</span>
                </div>
                <div className="flex justify-center gap-0.5 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={
                        i < Math.round(avgRating)
                          ? "fill-star text-star"
                          : "fill-gray-200 text-gray-200"
                      }
                    />
                  ))}
                </div>
                <p className="text-xs text-text-light text-center mb-6">
                  Based on {product.reviewCount} verified reviews
                </p>

                {/* Rating bars */}
                <div className="space-y-2">
                  {ratingBreakdown.map(({ star, percent }) => (
                    <div key={star} className="flex items-center gap-2">
                      <span className="text-xs text-text-light w-3">
                        {star}
                      </span>
                      <Star size={12} className="fill-star text-star" />
                      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full"
                          style={{ width: `${percent}%` }}
                        />
                      </div>
                      <span className="text-xs text-text-light w-8 text-right">
                        {percent}%
                      </span>
                    </div>
                  ))}
                </div>

                <button className="w-full mt-6 py-2.5 border border-border rounded-full text-sm font-semibold text-text hover:border-primary hover:text-primary transition-colors cursor-pointer">
                  Write a Review
                </button>
              </div>

              {/* Reviews List */}
              <div className="lg:col-span-2 space-y-6">
                {product.reviews.length > 0 ? (
                  product.reviews.map((review) => (
                    <div
                      key={review.id}
                      className="border-b border-border pb-6 last:border-none"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                              <span className="text-xs font-bold text-primary">
                                {review.name.charAt(0)}
                              </span>
                            </div>
                            <div>
                              <span className="text-sm font-semibold text-text">
                                {review.name}
                              </span>
                              {review.verified && (
                                <span className="ml-2 text-xs text-primary bg-accent px-2 py-0.5 rounded-full">
                                  Verified Buyer
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                        <span className="text-xs text-text-light">
                          {review.date}
                        </span>
                      </div>
                      <div className="flex gap-0.5 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={13}
                            className={
                              i < review.rating
                                ? "fill-star text-star"
                                : "fill-gray-200 text-gray-200"
                            }
                          />
                        ))}
                      </div>
                      <h4 className="text-sm font-semibold text-primary mb-1">
                        {review.title}
                      </h4>
                      <p className="text-sm text-text-light leading-relaxed">
                        {review.text}
                      </p>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-12 text-text-light">
                    <p className="text-lg mb-2">No reviews yet</p>
                    <p className="text-sm">
                      Be the first to review this product!
                    </p>
                  </div>
                )}

                {product.reviews.length > 0 && (
                  <button className="text-sm text-primary font-semibold hover:underline cursor-pointer">
                    Load more reviews
                  </button>
                )}
              </div>
            </div>
          </section>

          {/* You May Also Like */}
          {related.length > 0 && (
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text mb-6">
                You May Also Like
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {related.map((p) => (
                  <Link
                    key={p.id}
                    to={`/product/${p.slug}`}
                    className="group rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-all"
                  >
                    <div className="relative aspect-square overflow-hidden bg-gray-50">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <button
                        onClick={(e) => e.preventDefault()}
                        className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/80 flex items-center justify-center text-text-light hover:text-sale transition-colors cursor-pointer"
                      >
                        <HeartIcon size={14} />
                      </button>
                    </div>
                    <div className="p-3">
                      <h3 className="text-sm font-semibold text-text group-hover:text-primary transition-colors line-clamp-1">
                        {p.name}
                      </h3>
                      <span className="text-sm font-bold text-text mt-1 block">
                        ${p.price.toFixed(2)}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
