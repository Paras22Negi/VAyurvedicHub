const variants = {
  green: "bg-accent-dark text-primary-dark",
  red: "bg-sale text-white",
};

export default function Badge({ children, variant = "green", className = "" }) {
  return (
    <span
      className={`
        inline-flex items-center gap-1.5
        rounded-full px-3 py-1
        text-xs font-semibold tracking-wide
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  );
}
