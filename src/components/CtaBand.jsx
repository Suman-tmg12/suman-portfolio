import Button from "./Button.jsx";

export default function CtaBand() {
  return (
    <section className="bg-brand py-20 text-ink">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-8 px-6">
        <h2 className="max-w-xl text-[clamp(2rem,5vw,3.5rem)] font-bold leading-none tracking-tight">
          Have a project in mind?
        </h2>
        <Button to="/contact" variant="dark">Start a conversation →</Button>
      </div>
    </section>
  );
}
