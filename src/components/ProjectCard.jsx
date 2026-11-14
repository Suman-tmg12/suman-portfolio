import { Link } from "react-router-dom";

export default function ProjectCard({ name, meta, bg, fg }) {
  return (
    <Link to="/contact" className="group block overflow-hidden bg-white">
      <div className="overflow-hidden">
        <div
          className="flex aspect-[4/3] items-center justify-center text-7xl font-bold transition-transform duration-500 group-hover:scale-105"
          style={{ background: bg, color: fg }}
        >
          {name.split(" ")[0]}
        </div>
      </div>
      <div className="flex justify-between px-6 py-5 font-medium">
        <span>{name}</span>
        <small className="text-sm text-neutral-500">{meta}</small>
      </div>
    </Link>
  );
}
