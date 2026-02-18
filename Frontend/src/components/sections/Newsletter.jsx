import { useState } from "react";
import Button from "../ui/Button";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Will be functional later
    setEmail("");
  };

  return (
    <section className="py-16 lg:py-20 bg-accent">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left max-w-md">
            <h2 className="text-2xl md:text-3xl font-bold text-text">
              Join our Wellness Circle
            </h2>
            <p className="mt-2 text-sm text-text-light leading-relaxed">
              Subscribe for holistic tips, exclusive offers, and a 10% discount
              on your first order.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 w-full md:w-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 min-w-0 sm:min-w-[300px] px-5 py-3 rounded-full border border-border bg-white text-sm text-text placeholder:text-text-light focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
            />
            <Button type="submit" variant="primary" size="md">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
