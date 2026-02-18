import { Link } from "react-router-dom";
import { Construction, ArrowLeft } from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function ComingSoon() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-4 py-32 min-h-[70vh]">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
            <Construction size={36} className="text-primary" />
          </div>
          <h1 className="text-3xl font-bold text-text mb-3">
            Page Under Development
          </h1>
          <p className="text-text-light text-sm leading-relaxed mb-8">
            We&apos;re working hard to bring this page to life. Check back soon
            for updates, or explore our existing collection.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-full transition-colors"
            >
              <ArrowLeft size={18} />
              Back to Home
            </Link>
            <Link
              to="/shop"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border hover:border-primary text-text hover:text-primary font-semibold rounded-full transition-colors"
            >
              Browse Shop
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
