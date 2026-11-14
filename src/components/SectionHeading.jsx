export default function SectionHeading({ label, title }) {
  return (
    <div className="mb-14">
      <p className="text-sm uppercase tracking-[.15em] text-brand">{label}</p>
      <h2 className="mt-3 text-[clamp(2.25rem,6vw,4.5rem)] font-bold leading-none tracking-tight">
        {title}
      </h2>
    </div>
  );
}
