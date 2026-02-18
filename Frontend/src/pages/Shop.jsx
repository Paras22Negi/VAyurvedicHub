import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, SlidersHorizontal, X } from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ShopProductCard from "../components/ui/ShopProductCard";
import {
  ALL_PRODUCTS,
  FILTER_CATEGORIES,
  HEALTH_CONCERNS,
  DOSHAS,
  SORT_OPTIONS,
} from "../data/constants";

const ITEMS_PER_PAGE = 6;

export default function Shop() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedConcerns, setSelectedConcerns] = useState([]);
  const [priceRange, setPriceRange] = useState(100);
  const [sortBy, setSortBy] = useState("best-selling");
  const [currentPage, setCurrentPage] = useState(1);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const toggleCategory = (cat) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat],
    );
    setCurrentPage(1);
  };

  const toggleConcern = (concern) => {
    setSelectedConcerns((prev) =>
      prev.includes(concern)
        ? prev.filter((c) => c !== concern)
        : [...prev, concern],
    );
    setCurrentPage(1);
  };

  const filtered = useMemo(() => {
    let result = [...ALL_PRODUCTS];

    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }

    result = result.filter((p) => p.price <= priceRange);

    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "top-rated":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        result.sort((a, b) => b.id - a.id);
        break;
      default:
        result.sort((a, b) => b.reviewCount - a.reviewCount);
    }

    return result;
  }, [selectedCategories, priceRange, sortBy]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  const FilterSidebar = ({ onClose }) => (
    <div className="space-y-8">
      {/* Categories */}
      <div>
        <h3 className="text-sm font-bold text-text mb-3 flex items-center justify-between">
          Categories
          <span className="text-text-light text-xs">—</span>
        </h3>
        <div className="space-y-2.5">
          {FILTER_CATEGORIES.map((cat) => (
            <label
              key={cat}
              className="flex items-center gap-2.5 cursor-pointer group"
            >
              <input
                type="checkbox"
                checked={selectedCategories.includes(cat)}
                onChange={() => toggleCategory(cat)}
                className="w-4 h-4 rounded border-border text-primary focus:ring-primary/30 accent-primary"
              />
              <span className="text-sm text-primary group-hover:text-primary-dark transition-colors">
                {cat}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="text-sm font-bold text-text mb-3 flex items-center justify-between">
          Price Range
          <span className="text-text-light text-xs">—</span>
        </h3>
        <input
          type="range"
          min={0}
          max={100}
          value={priceRange}
          onChange={(e) => {
            setPriceRange(Number(e.target.value));
            setCurrentPage(1);
          }}
          className="w-full accent-primary"
        />
        <div className="flex justify-between text-xs text-text-light mt-1">
          <span>$0</span>
          <span>${priceRange}+</span>
        </div>
      </div>

      {/* Health Concern */}
      <div>
        <h3 className="text-sm font-bold text-text mb-3">Health Concern</h3>
        <div className="flex flex-wrap gap-2">
          {HEALTH_CONCERNS.map((concern) => (
            <button
              key={concern}
              onClick={() => toggleConcern(concern)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all cursor-pointer ${
                selectedConcerns.includes(concern)
                  ? "bg-primary text-white border-primary"
                  : "bg-white text-text border-border hover:border-primary hover:text-primary"
              }`}
            >
              {concern}
            </button>
          ))}
        </div>
      </div>

      {/* Dosha */}
      <div>
        <h3 className="text-sm font-bold text-text mb-3">Dosha</h3>
        <div className="space-y-2.5">
          {DOSHAS.map((dosha) => (
            <label
              key={dosha}
              className="flex items-center gap-2.5 cursor-pointer group"
            >
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-border text-primary accent-primary"
              />
              <span className="text-sm text-primary group-hover:text-primary-dark transition-colors">
                {dosha}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Customer Ratings */}
      <div>
        <h3 className="text-sm font-bold text-text mb-3">Customer Ratings</h3>
        <div className="space-y-2.5">
          {[4, 3].map((r) => (
            <label key={r} className="flex items-center gap-2.5 cursor-pointer">
              <input
                type="radio"
                name="rating"
                className="w-4 h-4 accent-primary"
              />
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-3.5 h-3.5 ${i < r ? "text-star fill-star" : "text-gray-300 fill-gray-300"}`}
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="text-xs text-primary ml-1">& Up</span>
              </div>
            </label>
          ))}
        </div>
      </div>

      {onClose && (
        <button
          onClick={onClose}
          className="w-full py-3 bg-primary text-white rounded-full font-semibold text-sm mt-4 cursor-pointer"
        >
          Apply Filters
        </button>
      )}
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-6 py-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-sm text-text-light mb-6">
            <Link to="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <ChevronRight size={14} />
            <span>Wellness</span>
            <ChevronRight size={14} />
            <span className="text-text font-medium">Shop All</span>
          </nav>

          {/* Title + Sort */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-text">
                Natural Wellness Collection
              </h1>
              <p className="text-text-light text-sm mt-1">
                Explore premium ayurvedic solutions tailored for your dosha.
              </p>
            </div>
            <div className="flex items-center gap-3">
              {/* Mobile filter toggle */}
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="lg:hidden flex items-center gap-2 px-4 py-2 rounded-full border border-border text-sm font-medium hover:border-primary transition-colors cursor-pointer"
              >
                <SlidersHorizontal size={16} />
                Filters
              </button>
              <div className="flex items-center gap-2">
                <span className="text-sm text-text-light hidden sm:inline">
                  Sort by:
                </span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="text-sm border border-border rounded-lg px-3 py-2 bg-white focus:outline-none focus:border-primary cursor-pointer"
                >
                  {SORT_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex gap-8">
            {/* Desktop Sidebar */}
            <aside className="hidden lg:block w-56 shrink-0">
              <FilterSidebar />
            </aside>

            {/* Product Grid */}
            <div className="flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {paginated.map((product) => (
                  <ShopProductCard key={product.id} product={product} />
                ))}
              </div>

              {paginated.length === 0 && (
                <div className="text-center py-20 text-text-light">
                  <p className="text-lg">No products match your filters.</p>
                  <button
                    onClick={() => {
                      setSelectedCategories([]);
                      setPriceRange(100);
                      setSelectedConcerns([]);
                      setCurrentPage(1);
                    }}
                    className="mt-4 text-primary font-semibold hover:underline cursor-pointer"
                  >
                    Clear all filters
                  </button>
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-12">
                  <button
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-text-light hover:border-primary hover:text-primary disabled:opacity-40 transition-colors cursor-pointer"
                  >
                    ‹
                  </button>
                  {[...Array(totalPages)].map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentPage(i + 1)}
                      className={`w-9 h-9 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                        currentPage === i + 1
                          ? "bg-primary text-white shadow-md"
                          : "border border-border text-text hover:border-primary hover:text-primary"
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                  <button
                    onClick={() =>
                      setCurrentPage((p) => Math.min(totalPages, p + 1))
                    }
                    disabled={currentPage === totalPages}
                    className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-text-light hover:border-primary hover:text-primary disabled:opacity-40 transition-colors cursor-pointer"
                  >
                    ›
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Filter Drawer */}
        {mobileFiltersOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div
              className="absolute inset-0 bg-black/40"
              onClick={() => setMobileFiltersOpen(false)}
            />
            <div className="absolute top-0 left-0 bottom-0 w-80 max-w-[85vw] bg-white shadow-2xl overflow-y-auto">
              <div className="flex items-center justify-between p-4 border-b border-border">
                <h2 className="font-bold text-lg">Filters</h2>
                <button
                  onClick={() => setMobileFiltersOpen(false)}
                  className="p-1 hover:bg-gray-100 rounded-full cursor-pointer"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="p-4">
                <FilterSidebar onClose={() => setMobileFiltersOpen(false)} />
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
