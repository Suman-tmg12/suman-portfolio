export default function TestimonialCard({ text, name, role }) {
  return (
    <figure className="bg-ink p-10">
      <span className="block h-4 text-6xl leading-none text-brand">“</span>
      <blockquote className="mb-7 mt-8 text-[22px] leading-snug">{text}</blockquote>
      <figcaption>
        <strong>{name}</strong>
        <br />
        <small className="text-muted">{role}</small>
      </figcaption>
    </figure>
  );
}
