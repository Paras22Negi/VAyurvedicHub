const variants = {
  primary:
    "bg-primary text-white hover:bg-primary-dark shadow-md hover:shadow-lg",
  outline:
    "bg-white text-text border border-border hover:border-primary hover:text-primary",
  ghost: "bg-transparent text-primary hover:bg-accent",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) {
  return (
    <button
      className={`
        inline-flex items-center justify-center gap-2
        rounded-full font-semibold
        transition-all duration-300 ease-in-out
        cursor-pointer
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
