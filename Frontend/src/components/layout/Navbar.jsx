import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, User, Heart, ShoppingCart, Menu, X, Leaf } from "lucide-react";
import { NAV_LINKS } from "../../data/constants";
import LoginModal from "../ui/LoginModal";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-border">
        <nav className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-6">
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 shrink-0">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Leaf size={18} className="text-white" />
              </div>
              <span className="text-xl font-bold font-heading text-text">
                VAH
              </span>
            </Link>

            {/* Search Bar - Desktop */}
            <div className="hidden md:flex items-center flex-1 max-w-md mx-6">
              <div className="relative w-full">
                <Search
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-text-light"
                />
                <input
                  type="text"
                  placeholder="Search for herbs, oils, or remedies..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-full bg-gray-50 border border-primary text-sm text-text placeholder:text-text-light focus:outline-none ring-2 ring-primary/20 transition-all"
                />
              </div>
            </div>

            {/* Nav Links - Desktop */}
            <ul className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm font-medium text-text hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Icons */}
            <div className="flex items-center gap-3 ml-4">
              <button
                className="p-2 rounded-full hover:bg-accent transition-colors hidden sm:flex cursor-pointer"
                aria-label="Account"
                onClick={() => setLoginOpen(true)}
              >
                <User size={20} className="text-text" />
              </button>
              <button
                className="p-2 rounded-full hover:bg-accent transition-colors hidden sm:flex"
                aria-label="Wishlist"
              >
                <Heart size={20} className="text-text" />
              </button>
              <button
                className="p-2 rounded-full hover:bg-accent transition-colors relative"
                aria-label="Cart"
              >
                <ShoppingCart size={20} className="text-text" />
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-primary text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  0
                </span>
              </button>

              {/* Mobile Menu Toggle */}
              <button
                className="p-2 rounded-full hover:bg-accent transition-colors lg:hidden"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-300 ${
              mobileOpen ? "max-h-96 pb-6" : "max-h-0"
            }`}
          >
            {/* Mobile Search */}
            <div className="relative mb-4 md:hidden">
              <Search
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-text-light"
              />
              <input
                type="text"
                placeholder="Search for herbs, oils, or remedies..."
                className="w-full pl-10 pr-4 py-2.5 rounded-full bg-gray-50 border border-primary text-sm text-text placeholder:text-text-light focus:outline-none ring-2 ring-primary/20 transition-all"
              />
            </div>

            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="block px-4 py-3 rounded-xl text-sm font-medium text-text hover:bg-accent hover:text-primary transition-all"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>

      <LoginModal isOpen={loginOpen} onClose={() => setLoginOpen(false)} />
    </>
  );
}
