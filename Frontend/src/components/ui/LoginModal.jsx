import { useState } from "react";
import { X } from "lucide-react";

export default function LoginModal({ isOpen, onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Will be functional later
  };

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center px-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-[820px] bg-white rounded-2xl overflow-hidden shadow-2xl flex animate-in">
        {/* Left - Image */}
        <div className="hidden md:block w-[45%] relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?w=600&h=800&fit=crop"
            alt="Ayurvedic wellness products"
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-dark-bg/80 via-dark-bg/30 to-transparent" />
          {/* Branding */}
          <div className="absolute bottom-8 left-8 right-8 text-white">
            <p className="text-xs tracking-[0.3em] text-white/70 mb-2">
              EST. 2024
            </p>
            <h2 className="text-3xl font-bold italic font-heading leading-tight">
              VAH
            </h2>
          </div>
        </div>

        {/* Right - Form */}
        <div className="flex-1 p-8 sm:p-10 relative">
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center text-text-light hover:text-text hover:bg-gray-100 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X size={20} />
          </button>

          {/* Header */}
          <div className="text-center mb-8 mt-2">
            <h2 className="text-2xl sm:text-3xl font-bold italic font-heading text-dark">
              Welcome Back
            </h2>
            <p className="text-sm text-text-light mt-2">
              Please enter your details to sign in
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-xs font-bold tracking-wider text-text mb-2 uppercase">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full px-4 py-3 rounded-xl border border-border bg-white text-sm text-text placeholder:text-text-light focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-xs font-bold tracking-wider text-text uppercase">
                  Password
                </label>
                <button
                  type="button"
                  className="text-xs font-semibold tracking-wider text-text-light hover:text-primary transition-colors uppercase cursor-pointer"
                >
                  Forgot Password?
                </button>
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                className="w-full px-4 py-3 rounded-xl border border-border bg-white text-sm text-text placeholder:text-text-light focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>

            {/* Sign In */}
            <button
              type="submit"
              className="w-full py-3.5 bg-dark-bg hover:bg-dark text-white text-sm font-bold tracking-wider uppercase rounded-xl transition-colors cursor-pointer"
            >
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-border" />
            <span className="text-xs text-text-light font-medium">OR</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Create Account */}
          <button
            type="button"
            className="w-full py-3.5 border-2 border-dark-bg text-dark-bg text-sm font-bold tracking-wider uppercase rounded-xl hover:bg-dark-bg hover:text-white transition-all cursor-pointer"
          >
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
}
