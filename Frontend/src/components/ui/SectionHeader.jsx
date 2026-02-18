import { Link } from "react-router-dom";

export default function SectionHeader({
  title,
  subtitle,
  action,
  className = "",
}) {
  return (
    <div className={`mb-10 ${className}`}>
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-text">{title}</h2>
          {subtitle && (
            <p className="mt-2 text-text-light text-base">{subtitle}</p>
          )}
        </div>
        {action && (
          <Link
            to={action.href}
            className="hidden sm:inline-flex items-center gap-1 text-primary font-semibold text-sm hover:underline transition"
          >
            {action.label} →
          </Link>
        )}
      </div>
    </div>
  );
}
