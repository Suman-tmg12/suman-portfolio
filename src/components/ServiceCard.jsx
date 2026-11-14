export default function ServiceCard({ number, title, text }) {
  return (
    <div className="group bg-ink p-9 transition-colors hover:bg-brand hover:text-ink">
      <span className="text-sm text-brand group-hover:text-ink">{number}</span>
      <h3 className="mb-3 mt-10 text-2xl font-bold">{title}</h3>
      <p className="leading-relaxed text-muted group-hover:text-ink">{text}</p>
    </div>
  );
}
