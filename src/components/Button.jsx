import { Link } from "react-router-dom";

const base =
  "inline-block cursor-pointer rounded-full px-7 py-3.5 font-bold transition hover:-translate-y-0.5";
const variants = {
  solid: "bg-brand text-ink",
  outline: "border border-white text-white",
  dark: "bg-ink text-white",
};

export default function Button({ to, variant = "solid", className = "", children, ...props }) {
  const cls = `${base} ${variants[variant]} ${className}`;
  return to ? (
    <Link to={to} className={cls} {...props}>{children}</Link>
  ) : (
    <button className={cls} {...props}>{children}</button>
  );
}
