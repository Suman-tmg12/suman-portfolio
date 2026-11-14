const text = "Full-Stack Dev ✦ Backend Architecture ✦ Database Design ✦ REST APIs ✦ Clean Code ✦ ";

export default function Marquee() {
  return (
    <div className="overflow-hidden whitespace-nowrap bg-brand py-4 text-3xl font-bold text-ink">
      <div className="inline-block animate-marquee">{text.repeat(4)}</div>
    </div>
  );
}