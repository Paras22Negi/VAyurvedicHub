import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle,
  HeartHandshake,
  FlaskConical,
} from "lucide-react";
import Button from "../ui/Button";
import Badge from "../ui/Badge";

const trustIcons = {
  "check-circle": CheckCircle,
  "heart-handshake": HeartHandshake,
  "flask-conical": FlaskConical,
};

const TRUST_BADGES = [
  { icon: "check-circle", label: "GMP Certified" },
  { icon: "heart-handshake", label: "Cruelty Free" },
  { icon: "flask-conical", label: "Lab Tested" },
];

export default function Hero() {
  return (
    <section className="relative bg-accent overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[85vh] py-12 lg:py-0">
          {/* Left Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <Badge variant="green" className="mb-6 inline-flex">
              <CheckCircle size={14} />
              100% ORGANIC & PURE
            </Badge>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-6xl font-extrabold leading-tight tracking-tight">
              Rediscover <span className="text-primary">Ancient</span>
              <br />
              Wellness
            </h1>

            <p className="mt-5 text-text-light text-base sm:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
              Pure, organic Ayurvedic remedies tailored for modern living.
              Explore our range of natural herbs, essential oils, and holistic
              treatments designed to restore your balance.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link to="/shop">
                <Button variant="primary" size="md">
                  Shop Now <ArrowRight size={18} />
                </Button>
              </Link>
              <Link to="/coming-soon">
                <Button variant="outline" size="md">
                  Take Quiz
                </Button>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="mt-10 flex flex-wrap gap-6 justify-center lg:justify-start">
              {TRUST_BADGES.map((badge) => {
                const Icon = trustIcons[badge.icon];
                return (
                  <div
                    key={badge.label}
                    className="flex items-center gap-2 text-sm text-text-light"
                  >
                    <Icon size={18} className="text-primary" />
                    <span>{badge.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg lg:max-w-none">
              <div className="rounded-3xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.18),0_2px_12px_rgba(0,0,0,0.10)] ring-1 ring-black/5">
                <img
                  src="https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?w=700&h=500&fit=crop"
                  alt="Ayurvedic herbs and essential oils flat lay"
                  className="w-full h-[300px] sm:h-[400px] lg:h-[480px] object-cover"
                  loading="eager"
                />
              </div>
              {/* Decorative blurred blob */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10" />
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/15 rounded-full blur-2xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
