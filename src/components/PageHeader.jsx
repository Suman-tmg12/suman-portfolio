export default function PageHeader({ label, title, text }) {
  return (
    <header className="border-b border-line py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-5 text-sm uppercase tracking-[.15em] text-brand">{label}</p>
        <h1 className="text-[clamp(3rem,8vw,7rem)] font-bold leading-[.95] tracking-tighter">{title}</h1>
        {text && <p className="mt-6 max-w-xl text-lg text-neutral-300">{text}</p>}
      </div>
    </header>
  );
}
