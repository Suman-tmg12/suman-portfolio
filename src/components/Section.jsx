export default function Section({ light = false, className = "", children, ...props }) {
  return (
    <section
      className={`py-16 md:py-24 ${light ? "bg-white text-ink" : ""} ${className}`}
      {...props}
    >
      <div className="mx-auto max-w-6xl px-6">{children}</div>
    </section>
  );
}
