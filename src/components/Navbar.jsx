import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "./Button.jsx";

const links = [
  ["Home", "/"],
  ["Services", "/services"],
  ["Work", "/work"],
  ["Contact", "/contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const linkClass = ({ isActive }) =>
    `transition hover:text-brand ${isActive ? "text-brand" : ""}`;

  return (
    <nav className="sticky top-0 z-50 border-b border-line bg-ink/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="text-xl font-bold">
          suman<span className="text-brand">.</span>tamang
        </Link>

        <ul className="hidden gap-8 text-sm md:flex">
          {links.map(([label, to]) => (
            <li key={to}>
              <NavLink to={to} end={to === "/"} className={linkClass}>{label}</NavLink>
            </li>
          ))}
        </ul>

        <Button to="/contact" className="hidden !py-2.5 text-sm md:inline-block">Hire me</Button>

        <button
          className="text-2xl md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <ul className="space-y-4 border-t border-line px-6 py-5 md:hidden">
          {links.map(([label, to]) => (
            <li key={to}>
              <NavLink to={to} end={to === "/"} className={linkClass} onClick={() => setOpen(false)}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
